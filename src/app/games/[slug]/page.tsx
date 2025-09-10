import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CardGrid, Card, CardContent, CardHeader } from '@/components/ui/CardGrid';
import { notFound } from 'next/navigation';

const games = {
  'reverie-of-fear': {
    title: 'Reverie of Fear',
    description: 'A psychological horror experience that blurs the line between dreams and reality. Navigate through shifting landscapes where your deepest fears take physical form.',
    longDescription: 'Reverie of Fear is our flagship psychological horror experience that challenges players to confront their deepest anxieties in a world where the boundaries between dreams and reality have completely dissolved. As you navigate through ever-shifting landscapes, you\'ll encounter manifestations of fear that adapt to your psychological profile, creating a truly personalized horror experience.',
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=1200&h=800&fit=crop',
    status: 'In Development',
    releaseDate: '2025',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
    features: [
      'Dynamic fear system that adapts to player behavior',
      'Photorealistic environments with advanced lighting',
      'Immersive 3D audio design',
      'Multiple endings based on psychological choices',
      'Accessibility options for all players'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop'
    ],
    devlogs: [
      {
        title: 'Creating Atmospheric Environments',
        date: 'Dec 15, 2024',
        excerpt: 'How we use lighting and texture to build tension in our horror scenes.'
      },
      {
        title: 'Dynamic Fear System',
        date: 'Dec 12, 2024',
        excerpt: 'Building AI that adapts to player behavior and psychological responses.'
      }
    ]
  },
  'memory-fragments': {
    title: 'Memory Fragments',
    description: 'Piece together a shattered past in this narrative-driven mystery.',
    longDescription: 'Memory Fragments is a deeply personal narrative experience that explores themes of identity, loss, and redemption. Players must piece together fragmented memories to uncover a truth that has been buried for years.',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1200&h=800&fit=crop',
    status: 'Released',
    releaseDate: '2023',
    platforms: ['PC', 'Nintendo Switch', 'Mobile'],
    features: [
      'Hand-crafted narrative with multiple paths',
      'Beautiful watercolor art style',
      'Original orchestral soundtrack',
      'Emotional storytelling mechanics',
      'Replayable with different outcomes'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop'
    ],
    devlogs: []
  }
};

interface GamePageProps {
  params: {
    slug: string;
  };
}

export default function GamePage({ params }: GamePageProps) {
  const game = games[params.slug as keyof typeof games];

  if (!game) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url("${game.image}")`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <SectionHeader
                title={game.title}
                description={game.longDescription}
              />
              <div className="flex flex-col sm:flex-row gap-4">
                {game.status === 'Released' ? (
                  <>
                    <Button size="lg">Play Now</Button>
                    <Button variant="ghost" size="lg">Watch Trailer</Button>
                  </>
                ) : (
                  <>
                    <Button size="lg">Wishlist</Button>
                    <Button variant="ghost" size="lg">Watch Trailer</Button>
                  </>
                )}
              </div>
            </div>
            <div className="relative">
              <img
                src={game.image}
                alt={`${game.title} artwork`}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Game Details */}
      <section className="py-20 lg:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Features */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
              <ul className="space-y-4">
                {game.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Game Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Game Info</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-400">Status:</span>
                    <span className="text-white ml-2">{game.status}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Release:</span>
                    <span className="text-white ml-2">{game.releaseDate}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Platforms:</span>
                    <div className="mt-1">
                      {game.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="inline-block bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs mr-2 mb-1"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      {game.gallery.length > 0 && (
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {game.gallery.map((image, index) => (
                <div key={index} className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${game.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Devlogs */}
      {game.devlogs.length > 0 && (
        <section className="py-20 lg:py-32 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Development Updates</h2>
            <CardGrid columns={2}>
              {game.devlogs.map((post, index) => (
                <Card key={index}>
                  <CardContent>
                    <CardHeader
                      title={post.title}
                      subtitle={post.excerpt}
                      date={post.date}
                    />
                    <div className="mt-4">
                      <Button variant="ghost" size="sm">Read More</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardGrid>
          </div>
        </section>
      )}
    </div>
  );
}
