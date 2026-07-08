import { kv } from '@vercel/kv'
import { NextResponse } from 'next/server'

const EARLY_SPOTS = 100
const KV_SET_KEY = 'waitlist:emails'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const trimmed = email.trim().toLowerCase()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const alreadyExists = await kv.sismember(KV_SET_KEY, trimmed)
    if (alreadyExists) {
      const count = await kv.scard(KV_SET_KEY)
      return NextResponse.json({
        position: null,
        spotsLeft: Math.max(0, EARLY_SPOTS - count),
        gotEarlySpot: false,
        alreadyJoined: true,
      })
    }

    await kv.sadd(KV_SET_KEY, trimmed)
    const count = await kv.scard(KV_SET_KEY)

    return NextResponse.json({
      position: count,
      spotsLeft: Math.max(0, EARLY_SPOTS - count),
      gotEarlySpot: count <= EARLY_SPOTS,
      alreadyJoined: false,
    })
  } catch (error) {
    console.error('Waitlist POST error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const count = await kv.scard(KV_SET_KEY)
    return NextResponse.json({
      count,
      spotsLeft: Math.max(0, EARLY_SPOTS - count),
    })
  } catch (error) {
    console.error('Waitlist GET error:', error)
    return NextResponse.json({ count: 0, spotsLeft: EARLY_SPOTS })
  }
}
