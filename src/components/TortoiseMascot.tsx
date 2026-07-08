import Image from 'next/image'

export type Mood =
  | 'waving'
  | 'running'
  | 'determined'
  | 'sprinting'
  | 'celebrating'
  | 'proud'
  | 'trophy'
  | 'finishline'
  | 'resting'
  | 'thinking'
  | 'analyzing'
  | 'teaching'
  | 'flame'
  | 'watch'
  | 'puzzle'

interface TortoiseMascotProps {
  mood?: Mood
  size?: number
  className?: string
  float?: boolean
  priority?: boolean
  /** Provide alt text only when the mascot conveys meaning; otherwise it stays decorative. */
  alt?: string
}

/**
 * The real illustrated Tortoise mascot (shipped in the iOS app's asset catalog).
 * Rendered in a fixed-size box with object-contain so mixed aspect ratios never
 * cause layout shift.
 */
export function TortoiseMascot({
  mood = 'waving',
  size = 240,
  className = '',
  float = false,
  priority = false,
  alt,
}: TortoiseMascotProps) {
  return (
    <div
      className={`relative ${float ? 'motion-safe:animate-float' : ''} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden={alt ? undefined : true}
    >
      <Image
        src={`/mascot/${mood}.png`}
        alt={alt ?? ''}
        fill
        sizes={`${size}px`}
        priority={priority}
        className="object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]"
      />
    </div>
  )
}
