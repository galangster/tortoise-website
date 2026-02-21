import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - Tortoise',
  description: 'How we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-surface-light border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-tortoise-primary transition-colors">
            <span className="text-2xl">←</span>
            <span className="font-bold">Back to Home</span>
          </Link>
          
          <h1 className="text-4xl font-black text-gray-900 mt-6">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">Last updated: February 20, 2024</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            At Tortoise, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you use our mobile application.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Register for an account</li>
            <li>Complete your runner profile</li>
            <li>Contact our support team</li>
            <li>Participate in surveys or promotions</li>
          </ul>

          <p>This information may include:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Name and email address</li>
            <li>Age, weight, and fitness information</li>
            <li>Running goals and preferences</li>
            <li>Profile photos (optional)</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Health & Fitness Data</h3>
          <p>With your permission, we collect health and fitness data from:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Apple HealthKit (heart rate, workouts, distance, calories)</li>
            <li>GPS location during runs</li>
            <li>Workout duration and intensity</li>
            <li>Sleep and recovery data (if connected)</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Usage Data</h3>
          <p>We automatically collect certain information when you use the app:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Device information (model, OS version, unique identifiers)</li>
            <li>App usage patterns and feature interactions</li>
            <li>Performance data and crash logs</li>
            <li>IP address and approximate location</li>
          </ul>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          
          <p>We use the collected information to:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Create and personalize your training plans</li>
            <li>Track your progress and achievements</li>
            <li>Provide AI-powered coaching recommendations</li>
            <li>Enable social features and leagues</li>
            <li>Improve our app and develop new features</li>
            <li>Send notifications and reminders</li>
            <li>Respond to your support requests</li>
            <li>Prevent fraud and ensure security</li>
          </ul>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">3. Data Sharing and Disclosure</h2>
          
          <p>We do not sell your personal information. We may share your information with:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Service Providers:</strong> Third-party vendors who help us operate the app (hosting, analytics, customer support)</li>
            <li><strong>Other Users:</strong> Information you choose to share publicly (profile, achievements, league standings)</li>
            <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">4. Your Privacy Rights</h2>
          
          <p>Depending on your location, you may have the right to:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Access the personal information we have about you</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Delete your personal information</li>
            <li>Export your data in a portable format</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
          </ul>

          <p>To exercise these rights, contact us at privacy@tortoise.run</p>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">5. Data Security</h2>
          
          <p>
            We implement appropriate technical and organizational measures to protect your data, 
            including encryption in transit and at rest, secure authentication, and regular security audits. 
            However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">6. Data Retention</h2>
          
          <p>
            We retain your personal information for as long as your account is active or as needed to 
            provide you services. You can delete your account at any time, and we will remove your 
            personal information within 30 days, except where retention is required by law.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">7. Children's Privacy</h2>
          
          <p>
            Tortoise is not intended for children under 13. We do not knowingly collect personal 
            information from children under 13. If we learn we have collected such information, 
            we will delete it immediately.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">8. International Data Transfers</h2>
          
          <p>
            Your information may be transferred to and processed in countries other than your own. 
            We ensure appropriate safeguards are in place to protect your data in accordance with 
            applicable laws.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">9. Changes to This Policy</h2>
          
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new policy in the app and updating the "Last updated" date. Your continued 
            use of the app after changes constitutes acceptance.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">10. Contact Us</h2>
          
          <p>If you have questions about this Privacy Policy, please contact us:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Email: privacy@tortoise.run</li>
            <li>Address: Tortoise Inc., 123 Running Lane, San Francisco, CA 94102</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
