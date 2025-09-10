import { SectionHeader } from '@/components/ui/SectionHeader';

export default function PrivacyPage() {
	return (
		<div className="min-h-screen pt-20">
			<section className="py-20 lg:py-32">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader
						title="Privacy Policy"
						description="Last updated: December 2024"
						className="mb-12"
					/>

					<div className="prose prose-lg prose-invert max-w-none space-y-8">
						<div>
							<h2 className="text-2xl font-bold text-white mb-4">
								1. Information We Collect
							</h2>
							<p className="text-gray-300 leading-relaxed">
								We collect information you provide directly to us, such as when you
								create an account, subscribe to our newsletter, or contact us for
								support. This may include your name, email address, and any messages
								you send to us.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-white mb-4">
								2. How We Use Your Information
							</h2>
							<p className="text-gray-300 leading-relaxed mb-4">
								We use the information we collect to:
							</p>
							<ul className="list-disc list-inside text-gray-300 space-y-2">
								<li>Provide, maintain, and improve our games and services</li>
								<li>Send you updates about our games and studio news</li>
								<li>Respond to your comments, questions, and requests</li>
								<li>Monitor and analyze trends and usage</li>
								<li>Detect, investigate, and prevent fraudulent transactions</li>
							</ul>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-white mb-4">
								3. Information Sharing
							</h2>
							<p className="text-gray-300 leading-relaxed">
								We do not sell, trade, or otherwise transfer your personal
								information to third parties without your consent, except as
								described in this policy. We may share your information with service
								providers who assist us in operating our website and games.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
							<p className="text-gray-300 leading-relaxed">
								We implement appropriate security measures to protect your personal
								information against unauthorized access, alteration, disclosure, or
								destruction. However, no method of transmission over the internet is
								100% secure.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
							<p className="text-gray-300 leading-relaxed mb-4">
								You have the right to:
							</p>
							<ul className="list-disc list-inside text-gray-300 space-y-2">
								<li>Access and update your personal information</li>
								<li>Request deletion of your personal information</li>
								<li>Opt out of marketing communications</li>
								<li>Request a copy of your data</li>
							</ul>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-white mb-4">6. Cookies</h2>
							<p className="text-gray-300 leading-relaxed">
								We use cookies and similar technologies to enhance your experience
								on our website. You can control cookie settings through your browser
								preferences.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-white mb-4">
								7. Changes to This Policy
							</h2>
							<p className="text-gray-300 leading-relaxed">
								We may update this privacy policy from time to time. We will notify
								you of any changes by posting the new policy on this page and
								updating the &quot;Last updated&quot; date.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
							<p className="text-gray-300 leading-relaxed">
								If you have any questions about this privacy policy, please contact
								us at{' '}
								<a
									href="mailto:privacy@sectorz.games"
									className="text-accent hover:text-accent-hover"
								>
									privacy@sectorz.games
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
