import { SectionHeader } from '@/components/ui/SectionHeader';

export default function TermsPage() {
	return (
		<div className="min-h-screen pt-20">
			<section className="py-20 lg:py-32">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader
						title="Terms of Service"
						description="Last updated: December 2024"
						className="mb-12"
					/>

					<div className="prose prose-lg prose-invert max-w-none space-y-8">
						<div>
							<h2 className="text-2xl font-bold text-white mb-4">
								1. Acceptance of Terms
							</h2>
							<p className="text-gray-300 leading-relaxed">
								By accessing and using Sector Z games and services, you accept and
								agree to be bound by the terms and provision of this agreement. If
								you do not agree to abide by the above, please do not use this
								service.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
							<p className="text-gray-300 leading-relaxed mb-4">
								Permission is granted to temporarily download one copy of Sector Z
								games for personal, non-commercial transitory viewing only. This is
								the grant of a license, not a transfer of title, and under this
								license you may not:
							</p>
							<ul className="list-disc list-inside text-gray-300 space-y-2">
								<li>Modify or copy the materials</li>
								<li>
									Use the materials for any commercial purpose or for any public
									display
								</li>
								<li>
									Attempt to reverse engineer any software contained in our games
								</li>
								<li>
									Remove any copyright or other proprietary notations from the
									materials
								</li>
							</ul>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
							<p className="text-gray-300 leading-relaxed">
								The materials on Sector Z&apos;s games and website are provided on
								an &apos;as is&apos; basis. Sector Z makes no warranties, expressed
								or implied, and hereby disclaims and negates all other warranties
								including without limitation, implied warranties or conditions of
								merchantability, fitness for a particular purpose, or
								non-infringement of intellectual property or other violation of
								rights.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
							<p className="text-gray-300 leading-relaxed">
								In no event shall Sector Z or its suppliers be liable for any
								damages (including, without limitation, damages for loss of data or
								profit, or due to business interruption) arising out of the use or
								inability to use our games or materials, even if Sector Z or an
								authorized representative has been notified orally or in writing of
								the possibility of such damage.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-white mb-4">5. User Conduct</h2>
							<p className="text-gray-300 leading-relaxed mb-4">
								You agree not to use our games or services to:
							</p>
							<ul className="list-disc list-inside text-gray-300 space-y-2">
								<li>Harass, abuse, or harm other users</li>
								<li>Violate any applicable laws or regulations</li>
								<li>Infringe on intellectual property rights</li>
								<li>Distribute malware or harmful code</li>
								<li>Attempt to gain unauthorized access to our systems</li>
							</ul>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-white mb-4">
								6. Privacy Policy
							</h2>
							<p className="text-gray-300 leading-relaxed">
								Your privacy is important to us. Please review our Privacy Policy,
								which also governs your use of our services, to understand our
								practices.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-white mb-4">7. Modifications</h2>
							<p className="text-gray-300 leading-relaxed">
								Sector Z may revise these terms of service at any time without
								notice. By using our games and services, you are agreeing to be
								bound by the then current version of these terms of service.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-white mb-4">
								8. Contact Information
							</h2>
							<p className="text-gray-300 leading-relaxed">
								If you have any questions about these Terms of Service, please
								contact us at{' '}
								<a
									href="mailto:legal@sectorz.games"
									className="text-accent hover:text-accent-hover"
								>
									legal@sectorz.games
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
