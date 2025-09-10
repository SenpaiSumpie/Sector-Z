import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { CardGrid, Card, CardContent, CardHeader } from '@/components/ui/CardGrid';

const values = [
	{
		title: 'Player-First Design',
		description:
			'Every decision we make is guided by what creates the best experience for our players.',
	},
	{
		title: 'Atmospheric Storytelling',
		description:
			'We believe in the power of environment and mood to tell stories without words.',
	},
	{
		title: 'Technical Excellence',
		description: "We push the boundaries of what's possible while maintaining accessibility.",
	},
	{
		title: 'Creative Integrity',
		description: 'We never compromise our artistic vision for short-term commercial gains.',
	},
];

const techStack = [
	'Unreal Engine 5',
	'Unity 3D',
	'Blender',
	'Substance Suite',
	'Wwise Audio',
	'Perforce',
	'Jira',
	'Slack',
];

const teamMembers = [
	{
		name: 'Alex Chen',
		role: 'Creative Director',
		image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
	},
	{
		name: 'Sarah Martinez',
		role: 'Lead Developer',
		image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
	},
	{
		name: 'David Kim',
		role: 'Art Director',
		image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
	},
	{
		name: 'Emma Thompson',
		role: 'Audio Designer',
		image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
	},
	{
		name: 'Marcus Johnson',
		role: 'Game Designer',
		image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
	},
	{
		name: 'Lisa Wang',
		role: 'Producer',
		image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
	},
];

export default function StudioPage() {
	return (
		<div className="min-h-screen pt-20">
			{/* Hero Section */}
			<section className="py-20 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto text-center">
						<SectionHeader
							eyebrow="About Sector Z"
							title="Our Studio"
							description="We're a small but passionate team of developers, artists, and storytellers united by a shared vision: to create games that resonate on a deeper level."
							align="center"
						/>
					</div>
				</div>
			</section>

			{/* Mission Statement */}
			<section className="py-20 lg:py-32 bg-gray-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						<div>
							<h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
								Our Mission
							</h2>
							<p className="text-gray-300 text-lg leading-relaxed mb-6">
								At Sector Z, we believe that games are more than
								entertainment—they&apos;re a medium for emotional connection and
								personal reflection. Our mission is to craft atmospheric experiences
								that stay with players long after they&apos;ve put down the
								controller.
							</p>
							<p className="text-gray-300 text-lg leading-relaxed">
								We focus on creating games that explore the human condition through
								immersive storytelling, innovative mechanics, and unforgettable
								atmospheres. Every project is a labor of love, designed to respect
								both our players&apos; time and intelligence.
							</p>
						</div>
						<div className="relative">
							<img
								src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
								alt="Team collaboration"
								className="w-full rounded-lg shadow-2xl"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Values */}
			<section className="py-20 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader
						eyebrow="What Drives Us"
						title="Our Values"
						description="These principles guide every decision we make, from initial concept to final release."
						align="center"
						className="mb-16"
					/>
					<CardGrid columns={2}>
						{values.map((value, index) => (
							<Card key={index}>
								<CardContent>
									<CardHeader title={value.title} subtitle={value.description} />
								</CardContent>
							</Card>
						))}
					</CardGrid>
				</div>
			</section>

			{/* Team */}
			<section className="py-20 lg:py-32 bg-gray-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader
						eyebrow="Meet the Team"
						title="The People Behind the Games"
						description="Our diverse team brings together decades of experience in game development, art, and storytelling."
						align="center"
						className="mb-16"
					/>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
						{teamMembers.map((member, index) => (
							<div key={index} className="text-center">
								<div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
									<img
										src={member.image}
										alt={member.name}
										className="w-full h-full object-cover"
									/>
								</div>
								<h3 className="text-white font-semibold mb-1">{member.name}</h3>
								<p className="text-gray-400 text-sm">{member.role}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Tech Stack */}
			<section className="py-20 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						<div>
							<h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
								Our Tech Stack
							</h2>
							<p className="text-gray-300 text-lg leading-relaxed mb-8">
								We use industry-leading tools and technologies to bring our visions
								to life. Our tech stack is carefully chosen to balance creative
								flexibility with technical reliability.
							</p>
							<div className="grid grid-cols-2 gap-4">
								{techStack.map((tech, index) => (
									<div
										key={index}
										className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center"
									>
										<span className="text-white font-medium">{tech}</span>
									</div>
								))}
							</div>
						</div>
						<div className="relative">
							<img
								src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop"
								alt="Development workspace"
								className="w-full rounded-lg shadow-2xl"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Press Kit CTA */}
			<section className="py-20 lg:py-32 bg-gray-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
						Press & Media
					</h2>
					<p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
						Looking for assets, information, or interviews? Our press kit contains
						everything you need to cover Sector Z and our games.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg">Download Press Kit</Button>
						<Button variant="ghost" size="lg">
							Contact Press Team
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
