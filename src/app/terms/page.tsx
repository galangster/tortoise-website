import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service - Tortoise',
  description: 'Terms and conditions for using the Tortoise marathon training app.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-surface-light border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-tortoise-primary transition-colors">
            <span className="text-2xl">←</span>
            <span className="font-bold">Back to Home</span>
          </Link>
          
          <h1 className="text-4xl font-black text-gray-900 mt-6">Terms of Service</h1>
          <p className="text-gray-600 mt-2">Last updated: February 20, 2024</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Please read these Terms of Service carefully before using the Tortoise mobile application. 
            By downloading, accessing, or using Tortoise, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          
          <p>
            By creating an account, downloading, installing, or using Tortoise (the "App"), you agree 
            to these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use 
            the App. We may update these Terms from time to time, and your continued use constitutes 
            acceptance of any changes.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">2. Description of Service</h2>
          
          <p>Tortoise provides:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>AI-powered marathon training plans</li>
            <li>Gamified running experiences with XP, streaks, and leagues</li>
            <li>Running education and knowledge content</li>
            <li>Social features including friend connections and challenges</li>
            <li>Integration with Apple HealthKit and fitness devices</li>
          </ul>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">3. Account Registration</h2>
          
          <p>To use Tortoise, you must:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Be at least 13 years of age</li>
            <li>Create an account using accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Notify us immediately of any unauthorized access</li>
          </ul>

          <p className="mt-4">
            You are responsible for all activities that occur under your account. We reserve the right 
            to suspend or terminate accounts that violate these Terms.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">4. Subscription and Payments</h2>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Free Tier</h3>
          <p>
            Tortoise offers a free tier with basic features. Free tier users may have limited access 
            to training plans, analytics, and social features.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Premium Subscriptions</h3>
          
          <p>Premium features are available through paid subscriptions:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Subscriptions are billed monthly or annually through your app store account</li>
            <li>Prices are subject to change with 30 days notice</li>
            <li>Subscriptions automatically renew unless cancelled</li>
            <li>You can cancel anytime through your app store settings</li>
            <li>No refunds for partial months</li>
          </ul>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">5. Health and Safety Disclaimer</h2>
          
          <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
            <strong>Important:</strong> Tortoise is a fitness tool, not medical advice. Always consult 
            with a healthcare provider before beginning any exercise program, especially if you have 
            pre-existing health conditions.
          </p>
          
          <p>By using Tortoise, you acknowledge:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Running carries inherent risks of injury</li>
            <li>You are responsible for exercising within your capabilities</li>
            <li>You should stop immediately if you experience pain or discomfort</li>
            <li>Tortoise is not liable for any injuries or health issues that may occur</li>
          </ul>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">6. User Content</h2>
          
          <p>You retain ownership of content you create in Tortoise (profile information, activity data). 
          By using the App, you grant us a license to:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Store and display your content within the App</li>
            <li>Use anonymized data to improve our AI training algorithms</li>
            <li>Display public content (achievements, leaderboard standings) to other users</li>
          </ul>

          <p className="mt-4">You agree not to post content that is:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Illegal, harmful, threatening, or harassing</li>
            <li>Infringing on intellectual property rights</li>
            <li>Spam, scams, or malicious in nature</li>
            <li>False, misleading, or deceptive</li>
          </ul>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">7. Intellectual Property</h2>
          
          <p>Tortoise and its content, features, and functionality are owned by Tortoise Inc. and are 
          protected by copyright, trademark, and other intellectual property laws. You may not:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Copy, modify, or create derivative works of the App</li>
            <li>Reverse engineer or attempt to extract source code</li>
            <li>Use the Tortoise name, logo, or mascot without permission</li>
            <li>Remove any copyright or proprietary notices</li>
          </ul>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">8. Third-Party Services</h2>
          
          <p>Tortoise integrates with third-party services including:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Apple HealthKit</li>
            <li>Apple Sign In / Google Sign In</li>
            <li>App Store / Google Play for payments</li>
          </ul>

          <p className="mt-4">
            Your use of these services is subject to their respective terms of service and privacy policies.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
          
          <p>To the maximum extent permitted by law, Tortoise Inc. and its affiliates, officers, employees, 
          agents, suppliers, and licensors shall not be liable for:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Any indirect, incidental, special, consequential, or punitive damages</li>
            <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
            <li>Personal injury or property damage resulting from your use of the App</li>
            <li>Any unauthorized access to or use of our servers or personal information</li>
          </ul>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">10. Termination</h2>
          
          <p>We may terminate or suspend your account immediately, without prior notice or liability, for 
          any reason, including:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Violation of these Terms</li>
            <li>Fraudulent or illegal activity</li>
            <li>Non-payment of subscription fees</li>
            <li>Extended periods of inactivity</li>
          </ul>

          <p className="mt-4">
            Upon termination, your right to use the App will immediately cease. All provisions of these 
            Terms which by their nature should survive termination shall survive.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">11. Dispute Resolution</h2>
          
          <p>Any disputes arising from these Terms shall be resolved through:</p>
          
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li><strong>Informal Resolution:</strong> Contact us first to attempt resolution</li>
            <li><strong>Mediation:</strong> If informal resolution fails, mediation in San Francisco, CA</li>
            <li><strong>Arbitration:</strong> Binding arbitration under AAA rules if mediation fails</li>
          </ol>

          <p className="mt-4">
            <strong>Class Action Waiver:</strong> You agree to resolve disputes on an individual basis 
            and waive any right to participate in class actions.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">12. Governing Law</h2>
          
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of 
            California, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">13. Changes to Terms</h2>
          
          <p>
            We may modify these Terms at any time. We will notify you of significant changes through 
            the App or via email. Your continued use after changes constitutes acceptance.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">14. Contact Information</h2>
          
          <p>For questions about these Terms, please contact us:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Email: legal@tortoise.run</li>
            <li>Address: Tortoise Inc., 123 Running Lane, San Francisco, CA 94102</li>
          </ul>

          <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
            <p className="text-gray-600 mb-4">
              By clicking "Accept" or using Tortoise, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms of Service.
            </p>
            
            <Link 
              href="/privacy" 
              className="text-tortoise-primary font-bold hover:underline"
            >
              Read our Privacy Policy →
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
