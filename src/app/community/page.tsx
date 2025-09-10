import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { CardGrid, Card, CardImage, CardContent, CardHeader } from '@/components/ui/CardGrid';

const featuredArt = [
  {
    id: 1,
    title: 'Nightmare Corridor',
    artist: 'Alex_Draws',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop',
    description: 'Fan art inspired by the hospital level in Reverie of Fear',
    likes: 234,
    featured: true
  },
  {
    id: 2,
    title: 'Character Study: The Wanderer',
    artist: 'PixelMaster99',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=600&fit=crop',
    description: 'Digital painting of the main character',
    likes: 189,
    featured: true
  },
  {
    id: 3,
    title: 'Atmospheric Landscape',
    artist: 'DarkArtist',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=600&fit=crop',
    description: 'Moody interpretation of the forest scenes',
    likes: 156,
    featured: true
  }
];

const communityArt = [
  {
    id: 4,
    title: 'Memory Fragment',
    artist: 'RetroGamer',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=400&fit=crop',
    description: 'Pixel art tribute to Memory Fragments',
    likes: 98
  },
  {
    id: 5,
    title: 'Fear Incarnate',
    artist: 'HorrorFan2024',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
    description: 'Abstract representation of fear',
    likes: 142
  },
  {
    id: 6,
    title: 'Studio Logo Redesign',
    artist: 'DesignWiz',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop',
    description: 'Creative take on the Sector Z logo',
    likes: 87
  },
  {
    id: 7,
    title: 'Game Screenshot Edit',
    artist: 'PhotoMagic',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop',
    description: 'Artistic filter applied to game footage',
    likes: 76
  },
  {
    id: 8,
    title: 'Character Concept',
    artist: 'ConceptArt_Pro',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=400&fit=crop',
    description: 'Original character design for fan fiction',
    likes: 203
  },
  {
    id: 9,
    title: 'Environment Study',
    artist: 'LandscapeArt',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
    description: 'Study of atmospheric lighting techniques',
    likes: 134
  }
];

const communityStats = [
  { label: 'Discord Members', value: '12,500+' },
  { label: 'Fan Art Submissions', value: '850+' },
  { label: 'Community Events', value: '24' },
  { label: 'Countries Represented', value: '67' }
];

const upcomingEvents = [
  {
    title: 'Monthly Art Contest',
    date: 'Jan 15, 2025',
    description: 'Theme: "Atmospheric Horror" - Submit your best horror-themed artwork',
    type: 'Contest'
  },
  {
    title: 'Developer Q&A Stream',
    date: 'Jan 20, 2025',
    description: 'Live stream with the development team answering community questions',
    type: 'Stream'
  },
  {
    title: 'Community Game Night',
    date: 'Jan 25, 2025',
    description: 'Play indie horror games together and discuss what makes them effective',
    type: 'Event'
  }
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Join the Community"
            title="Our Amazing Community"
            description="Connect with fellow players, share your creativity, and be part of our growing family of atmospheric game enthusiasts."
            align="center"
            className="mb-16"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg">Join Discord Server</Button>
            <Button variant="ghost" size="lg">Follow on Twitter</Button>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Fan Art */}
      <section className="py-20 lg:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Community Spotlight"
            title="Featured Fan Art"
            description="Incredible artwork created by our talented community members."
            align="center"
            className="mb-12"
          />
          <CardGrid columns={3}>
            {featuredArt.map((art) => (
              <Card key={art.id}>
                <CardImage
                  src={art.image}
                  alt={art.title}
                />
                <CardContent>
                  <CardHeader
                    title={art.title}
                    subtitle={art.description}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-gray-400 text-sm">by {art.artist}</span>
                    <div className="flex items-center space-x-1 text-accent">
                      <span>♥</span>
                      <span className="text-sm">{art.likes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardGrid>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Community Gallery"
            title="Fan Art Showcase"
            description="Browse through amazing artwork created by our community."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {communityArt.map((art) => (
              <div key={art.id} className="group cursor-pointer">
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden mb-2">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white text-sm font-medium truncate">{art.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{art.artist}</span>
                  <div className="flex items-center space-x-1">
                    <span>♥</span>
                    <span>{art.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="ghost">View All Submissions</Button>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-20 lg:py-32 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Share Your Art"
            title="Submit Your Creation"
            description="Share your fan art, screenshots, or other creative works with the community."
            align="center"
            className="mb-12"
          />
          <div className="bg-gray-800 rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name/Handle
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Enter your name or username"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Artwork Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Give your artwork a title"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Tell us about your artwork..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Upload Artwork
                </label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                  <div className="text-gray-400 mb-4">
                    <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p>Drag and drop your file here, or click to browse</p>
                    <p className="text-sm mt-2">PNG, JPG, GIF up to 10MB</p>
                  </div>
                  <Button variant="ghost">Choose File</Button>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="w-full md:w-auto">
                  Submit Artwork
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What's Coming Up"
            title="Community Events"
            description="Join us for upcoming community activities and contests."
            align="center"
            className="mb-12"
          />
          <CardGrid columns={3}>
            {upcomingEvents.map((event, index) => (
              <Card key={index}>
                <CardContent>
                  <div className="mb-4">
                    <span className="inline-block bg-accent text-black px-2 py-1 rounded-full text-xs font-medium">
                      {event.type}
                    </span>
                  </div>
                  <CardHeader
                    title={event.title}
                    subtitle={event.description}
                    date={event.date}
                  />
                  <div className="mt-4">
                    <Button variant="ghost" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardGrid>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 lg:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Stay Connected"
            title="Follow Us Everywhere"
            description="Keep up with the latest news, updates, and community highlights."
            align="center"
            className="mb-12"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Discord Server</Button>
            <Button variant="ghost" size="lg">Twitter</Button>
            <Button variant="ghost" size="lg">YouTube</Button>
            <Button variant="ghost" size="lg">Reddit</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
