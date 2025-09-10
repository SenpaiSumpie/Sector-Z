import { SectionHeader } from '@/components/ui/SectionHeader';
import { CardGrid, Card, CardImage, CardContent, CardHeader } from '@/components/ui/CardGrid';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const games = [
  {
    id: 'reverie-of-fear',
    title: 'Reverie of Fear',
    description: 'A psychological horror experience that blurs the line between dreams and reality.',
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&h=600&fit=crop',
    status: 'In Development',
    releaseDate: '2025',
    tags: ['Horror', 'Psychological', 'Single Player']
  },
  {
    id: 'echoes-of-silence',
    title: 'Echoes of Silence',
    description: 'An atmospheric puzzle adventure set in a world where sound has vanished.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    status: 'Concept',
    releaseDate: 'TBA',
    tags: ['Puzzle', 'Adventure', 'Atmospheric']
  },
  {
    id: 'neon-shadows',
    title: 'Neon Shadows',
    description: 'A cyberpunk thriller where reality and virtual worlds collide.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
    status: 'Early Development',
    releaseDate: '2026',
    tags: ['Cyberpunk', 'Thriller', 'Action']
  },
  {
    id: 'whispers-in-the-void',
    title: 'Whispers in the Void',
    description: 'A space exploration game focused on isolation and cosmic horror.',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop',
    status: 'Prototype',
    releaseDate: 'TBA',
    tags: ['Space', 'Horror', 'Exploration']
  },
  {
    id: 'memory-fragments',
    title: 'Memory Fragments',
    description: 'Piece together a shattered past in this narrative-driven mystery.',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop',
    status: 'Released',
    releaseDate: '2023',
    tags: ['Mystery', 'Narrative', 'Indie']
  },
  {
    id: 'digital-ghosts',
    title: 'Digital Ghosts',
    description: 'Uncover the truth behind mysterious AI entities in a digital world.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    status: 'Planning',
    releaseDate: 'TBA',
    tags: ['Sci-Fi', 'Mystery', 'AI']
  }
];

const statusColors = {
  'Released': 'text-green-400',
  'In Development': 'text-accent',
  'Early Development': 'text-yellow-400',
  'Prototype': 'text-orange-400',
  'Concept': 'text-purple-400',
  'Planning': 'text-blue-400'
};

export default function GamesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Portfolio"
            title="Games"
            description="Explore our collection of atmospheric and character-driven games. Each project is crafted with care to deliver unique experiences that stay with you."
            align="center"
            className="mb-16"
          />
        </div>
      </section>

      {/* Games Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardGrid columns={3}>
            {games.map((game) => (
              <Card key={game.id}>
                <CardImage
                  src={game.image}
                  alt={`${game.title} artwork`}
                />
                <CardContent>
                  <CardHeader
                    title={game.title}
                    subtitle={game.description}
                  />
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className={`font-medium ${statusColors[game.status as keyof typeof statusColors]}`}>
                        {game.status}
                      </span>
                      <span className="text-gray-400">
                        {game.releaseDate}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {game.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/games/${game.id}`}>
                      <Button variant="ghost" size="sm" className="w-full mt-4">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardGrid>
        </div>
      </section>
    </div>
  );
}
