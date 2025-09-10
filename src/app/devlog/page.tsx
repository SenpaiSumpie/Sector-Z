'use client';

import { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CardGrid, Card, CardImage, CardContent, CardHeader } from '@/components/ui/CardGrid';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const devlogPosts = [
  {
    id: 'creating-atmospheric-environments',
    title: 'Creating Atmospheric Environments',
    excerpt: 'How we use lighting and texture to build tension in our horror scenes.',
    content: 'Deep dive into our environmental design process...',
    author: 'David Kim',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    tag: 'Art',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
    featured: true
  },
  {
    id: 'dynamic-fear-system',
    title: 'Dynamic Fear System',
    excerpt: 'Building AI that adapts to player behavior and psychological responses.',
    content: 'Technical breakdown of our adaptive AI system...',
    author: 'Sarah Martinez',
    date: 'Dec 12, 2024',
    readTime: '12 min read',
    tag: 'Engineering',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop',
    featured: true
  },
  {
    id: 'player-feedback-integration',
    title: 'Player Feedback Integration',
    excerpt: 'How community input is shaping the final version of Reverie of Fear.',
    content: 'Our approach to incorporating player feedback...',
    author: 'Lisa Wang',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
    tag: 'Community',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop',
    featured: false
  },
  {
    id: 'sound-design-philosophy',
    title: 'Sound Design Philosophy',
    excerpt: 'Creating immersive audio landscapes that enhance storytelling.',
    content: 'Our approach to audio design and implementation...',
    author: 'Emma Thompson',
    date: 'Dec 8, 2024',
    readTime: '10 min read',
    tag: 'Audio',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    featured: false
  },
  {
    id: 'narrative-design-process',
    title: 'Narrative Design Process',
    excerpt: 'How we craft stories that resonate with players on an emotional level.',
    content: 'Behind the scenes of our narrative development...',
    author: 'Alex Chen',
    date: 'Dec 5, 2024',
    readTime: '9 min read',
    tag: 'Design',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
    featured: false
  },
  {
    id: 'accessibility-first-approach',
    title: 'Accessibility-First Approach',
    excerpt: 'Making our games accessible to players of all abilities.',
    content: 'Our commitment to inclusive game design...',
    author: 'Marcus Johnson',
    date: 'Dec 3, 2024',
    readTime: '7 min read',
    tag: 'Design',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop',
    featured: false
  }
];

const tags = ['All', 'Art', 'Engineering', 'Design', 'Community', 'Audio'];

const tagColors = {
  'Art': 'bg-purple-600',
  'Engineering': 'bg-blue-600',
  'Design': 'bg-green-600',
  'Community': 'bg-orange-600',
  'Audio': 'bg-pink-600'
};

export default function DevlogPage() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = devlogPosts.filter(post => {
    const matchesTag = selectedTag === 'All' || post.tag === selectedTag;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Development Journal"
            title="Devlog"
            description="Follow our development journey, learn about our creative process, and get behind-the-scenes insights into how we craft our games."
            align="center"
            className="mb-12"
          />

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-accent text-black'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="pb-20 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Posts</h2>
            <CardGrid columns={2}>
              {featuredPosts.map((post) => (
                <Card key={post.id} className="lg:col-span-1">
                  <CardImage
                    src={post.image}
                    alt={post.title}
                  />
                  <CardContent>
                    <CardHeader
                      tag={post.tag}
                      date={post.date}
                      title={post.title}
                      subtitle={post.excerpt}
                    />
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Link href={`/devlog/${post.id}`}>
                        <Button variant="ghost" size="sm">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardGrid>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section className="pb-20 lg:pb-32 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">All Posts</h2>
            <CardGrid columns={3}>
              {regularPosts.map((post) => (
                <Card key={post.id}>
                  <CardImage
                    src={post.image}
                    alt={post.title}
                  />
                  <CardContent>
                    <CardHeader
                      tag={post.tag}
                      date={post.date}
                      title={post.title}
                      subtitle={post.excerpt}
                    />
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Link href={`/devlog/${post.id}`}>
                        <Button variant="ghost" size="sm">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardGrid>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <section className="pb-20 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400 text-lg">
              No posts found matching your criteria. Try adjusting your search or filter.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
