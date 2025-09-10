import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { CardGrid, Card, CardContent, CardHeader } from '@/components/ui/CardGrid';

const contactMethods = [
	{
		title: 'General Inquiries',
		description: 'Questions about our games or studio',
		email: 'hello@sectorz.games',
		icon: '💬',
	},
	{
		title: 'Press & Media',
		description: 'Press kits, interviews, and media requests',
		email: 'press@sectorz.games',
		icon: '📰',
	},
	{
		title: 'Business',
		description: 'Partnerships and business opportunities',
		email: 'business@sectorz.games',
		icon: '🤝',
	},
	{
		title: 'Support',
		description: 'Technical support and bug reports',
		email: 'support@sectorz.games',
		icon: '🛠️',
	},
];

export default function ContactPage() {
	return (
		<div className="min-h-screen pt-20">
			{/* Hero Section */}
			<section className="py-20 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader
						eyebrow="Get in Touch"
						title="Contact Us"
						description="Have a question, suggestion, or just want to say hello? We'd love to hear from you."
						align="center"
						className="mb-16"
					/>
				</div>
			</section>

			{/* Contact Methods */}
			<section className="pb-20 lg:pb-32">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<CardGrid columns={2}>
						{contactMethods.map((method, index) => (
							<Card key={index}>
								<CardContent>
									<div className="text-center">
										<div className="text-4xl mb-4">{method.icon}</div>
										<CardHeader
											title={method.title}
											subtitle={method.description}
										/>
										<div className="mt-4">
											<a
												href={`mailto:${method.email}`}
												className="text-accent hover:text-accent-hover transition-colors font-medium"
											>
												{method.email}
											</a>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</CardGrid>
				</div>
			</section>

			{/* Contact Form */}
			<section className="py-20 lg:py-32 bg-gray-900">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader
						eyebrow="Send a Message"
						title="Contact Form"
						description="Prefer to use a form? Fill out the details below and we'll get back to you as soon as possible."
						align="center"
						className="mb-12"
					/>
					<div className="bg-gray-800 rounded-lg p-8">
						<form className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-medium text-gray-300 mb-2">
										Name *
									</label>
									<input
										type="text"
										required
										className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
										placeholder="Your full name"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-300 mb-2">
										Email *
									</label>
									<input
										type="email"
										required
										className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
										placeholder="your.email@example.com"
									/>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-300 mb-2">
									Subject *
								</label>
								<input
									type="text"
									required
									className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
									placeholder="What's this about?"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-300 mb-2">
									Message *
								</label>
								<textarea
									rows={6}
									required
									className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
									placeholder="Tell us more about your inquiry..."
								/>
							</div>
							<div className="text-center">
								<Button size="lg" type="submit">
									Send Message
								</Button>
							</div>
						</form>
					</div>
				</div>
			</section>

			{/* Additional Info */}
			<section className="py-20 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						<div>
							<h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
								Response Times
							</h2>
							<div className="space-y-4 text-gray-300">
								<div className="flex justify-between">
									<span>General Inquiries:</span>
									<span className="text-accent">1-2 business days</span>
								</div>
								<div className="flex justify-between">
									<span>Press & Media:</span>
									<span className="text-accent">Same day</span>
								</div>
								<div className="flex justify-between">
									<span>Business:</span>
									<span className="text-accent">2-3 business days</span>
								</div>
								<div className="flex justify-between">
									<span>Support:</span>
									<span className="text-accent">24-48 hours</span>
								</div>
							</div>
						</div>
						<div>
							<h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
								Office Hours
							</h2>
							<div className="space-y-4 text-gray-300">
								<p>
									We&apos;re a remote-first team spread across multiple time
									zones. While we don&apos;t have traditional office hours, our
									core team is most active during:
								</p>
								<div className="bg-gray-900 rounded-lg p-4">
									<div className="text-accent font-medium mb-2">
										Core Hours (PST)
									</div>
									<div>Monday - Friday: 9:00 AM - 6:00 PM</div>
									<div className="text-sm text-gray-400 mt-2">
										Emergency support available 24/7
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Social Media */}
			<section className="py-20 lg:py-32 bg-gray-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
						Connect on Social Media
					</h2>
					<p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
						For quick updates and community interaction, follow us on social media.
						We&apos;re most active on Discord and Twitter.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg">Join Discord</Button>
						<Button variant="ghost" size="lg">
							Follow on Twitter
						</Button>
						<Button variant="ghost" size="lg">
							Subscribe on YouTube
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
