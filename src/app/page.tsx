import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CardGrid, Card, CardImage, CardContent, CardHeader } from '@/components/ui/CardGrid';

export default function Home() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative h-screen flex items-center justify-center film-grain">
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage:
							'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop")',
					}}
				/>
				<div className="relative z-10 text-center max-w-4xl mx-auto px-4">
					<h1 className="text-cinematic text-5xl md:text-7xl lg:text-8xl text-white mb-6 fade-in">
						We craft atmospheric worlds
					</h1>
					<p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed fade-in">
						and sharp, character-driven games. Step inside.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
						<Button size="lg">Explore Reverie of Fear</Button>
						<Button variant="ghost" size="lg">
							Read the Devlog
						</Button>
					</div>
				</div>
			</section>

			{/* Spotlight Game */}
			<section className="py-20 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						<div className="space-y-6">
							<SectionHeader
								eyebrow="Featured Game"
								title="Reverie of Fear"
								description="A psychological horror experience that blurs the line between dreams and reality. Navigate through shifting landscapes where your deepest fears take physical form."
							/>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button>Watch Trailer</Button>
								<Button variant="ghost">Read Devlog</Button>
							</div>
						</div>
						<div className="relative">
							<img
								src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&h=600&fit=crop"
								alt="Reverie of Fear game artwork"
								className="w-full rounded-lg shadow-2xl"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Devlog Rail */}
			<section className="py-20 lg:py-32 bg-gray-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader
						eyebrow="Latest Updates"
						title="From the Devlog"
						description="Behind-the-scenes insights into our creative process and development journey."
						className="mb-12"
					/>
					<CardGrid columns={3}>
						<Card>
							<CardImage
								src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop"
								alt="Art process"
							/>
							<CardContent>
								<CardHeader
									tag="Art"
									date="Dec 15, 2024"
									title="Creating Atmospheric Environments"
									subtitle="How we use lighting and texture to build tension in our horror scenes."
								/>
							</CardContent>
						</Card>
						<Card>
							<CardImage
								src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop"
								alt="Code development"
							/>
							<CardContent>
								<CardHeader
									tag="Engineering"
									date="Dec 12, 2024"
									title="Dynamic Fear System"
									subtitle="Building AI that adapts to player behavior and psychological responses."
								/>
							</CardContent>
						</Card>
						<Card>
							<CardImage
								src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop"
								alt="Community"
							/>
							<CardContent>
								<CardHeader
									tag="Community"
									date="Dec 10, 2024"
									title="Player Feedback Integration"
									subtitle="How community input is shaping the final version of Reverie of Fear."
								/>
							</CardContent>
						</Card>
					</CardGrid>
				</div>
			</section>

			{/* Studio Slice */}
			<section className="py-20 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl">
						<SectionHeader
							eyebrow="About Us"
							title="Our Studio"
							description="We're a small team of passionate developers dedicated to creating games that stay with you long after you've stopped playing. Every project is a labor of love, crafted with attention to detail and respect for the player's time."
						/>
						<div className="mt-8">
							<Button variant="ghost">Learn More About Our Studio</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Careers Callout */}
			<section className="py-20 lg:py-32 bg-gray-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader
						eyebrow="Join Us"
						title="We're Hiring"
						description="Looking for talented individuals who share our passion for atmospheric storytelling and innovative game design."
						className="mb-12"
					/>
					<CardGrid columns={3}>
						<Card>
							<CardContent>
								<CardHeader
									title="Senior Game Designer"
									subtitle="Lead the design of our next atmospheric horror experience. 5+ years experience required."
								/>
								<div className="mt-4">
									<Button variant="ghost" size="sm">
										View Details
									</Button>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent>
								<CardHeader
									title="3D Environment Artist"
									subtitle="Create haunting, beautiful worlds that tell stories without words. Portfolio required."
								/>
								<div className="mt-4">
									<Button variant="ghost" size="sm">
										View Details
									</Button>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent>
								<CardHeader
									title="Audio Designer"
									subtitle="Craft immersive soundscapes that enhance our atmospheric storytelling."
								/>
								<div className="mt-4">
									<Button variant="ghost" size="sm">
										View Details
									</Button>
								</div>
							</CardContent>
						</Card>
					</CardGrid>
					<div className="text-center mt-12">
						<Button>View All Roles</Button>
					</div>
				</div>
			</section>

			{/* Community / Newsletter */}
			<section className="py-20 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						<div>
							<SectionHeader
								eyebrow="Community"
								title="Join Our World"
								description="Connect with fellow players, share your experiences, and be part of our growing community of atmospheric game enthusiasts."
							/>
							<div className="mt-8 space-y-4">
								<div className="flex flex-col sm:flex-row gap-4">
									<Button>Join Discord</Button>
									<Button variant="ghost">View Fan Gallery</Button>
								</div>
							</div>
						</div>
						<div className="bg-gray-900 p-8 rounded-lg">
							<h3 className="text-2xl font-bold text-white mb-4">Stay in the Loop</h3>
							<p className="text-gray-300 mb-6">
								Get exclusive updates, behind-the-scenes content, and early access
								to new releases.
							</p>
							<form className="space-y-4">
								<input
									type="email"
									placeholder="Enter your email address"
									className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
									required
								/>
								<Button type="submit" className="w-full">
									Subscribe to Newsletter
								</Button>
							</form>
							<p className="text-gray-500 text-sm mt-4">
								No spam, unsubscribe anytime. We respect your privacy.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
