import { Button } from '@/components/ui/Button';
import { CardGrid, Card, CardImage, CardContent, CardHeader } from '@/components/ui/CardGrid';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const devlogPosts = {
  'creating-atmospheric-environments': {
    title: 'Creating Atmospheric Environments',
    excerpt: 'How we use lighting and texture to build tension in our horror scenes.',
    author: 'David Kim',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    tag: 'Art',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop',
    content: `
# Creating Atmospheric Environments

At Sector Z, we believe that environment is character. Every shadow, every texture, every beam of light serves a purpose in telling our story and building tension. In this post, I'll walk you through our process for creating the haunting environments in Reverie of Fear.

## The Philosophy Behind Our Approach

Our environmental design philosophy centers around the idea that players should feel the story through the world itself. We don't just create pretty backdrops—we craft spaces that communicate emotion, narrative, and psychological state without a single word of dialogue.

### Key Principles:

1. **Every Element Has Purpose**: Nothing exists in our environments without serving the narrative or emotional arc
2. **Subtlety Over Spectacle**: The most effective horror comes from what you don't see
3. **Player Psychology**: We design spaces that tap into primal fears and psychological responses
4. **Technical Excellence**: Beautiful visuals must never come at the cost of performance

## Lighting as Storytelling

Lighting is perhaps our most powerful tool for creating atmosphere. We use a combination of dynamic and baked lighting to create environments that feel alive and responsive to the player's emotional journey.

### Our Lighting Workflow:

- **Concept Phase**: We start with mood boards and lighting studies
- **Blocking**: Basic geometry with placeholder lighting to establish mood
- **Refinement**: Detailed lighting passes with attention to shadows and highlights
- **Polish**: Final optimization and atmospheric effects

## Texture Work and Material Design

Every surface in our games tells a story. We spend considerable time on material design, ensuring that textures not only look realistic but also contribute to the overall narrative.

The weathered walls in the abandoned hospital level, for example, use a combination of:
- Base albedo maps for color information
- Normal maps for surface detail
- Roughness maps for material properties
- Custom masks for procedural weathering

## Technical Considerations

Creating atmospheric environments requires balancing artistic vision with technical constraints. We use several techniques to maintain performance while achieving our visual goals:

- **LOD Systems**: Multiple levels of detail for complex geometry
- **Occlusion Culling**: Hiding objects not visible to the player
- **Texture Streaming**: Loading high-resolution textures only when needed
- **Dynamic Batching**: Combining similar objects to reduce draw calls

## The Iterative Process

Environment creation is never a linear process. We constantly iterate based on:
- Playtesting feedback
- Technical performance metrics
- Artistic review sessions
- Narrative requirements

Each environment goes through multiple passes, with each iteration bringing us closer to the perfect balance of beauty, performance, and storytelling effectiveness.

## Looking Forward

As we continue development on Reverie of Fear, we're constantly pushing the boundaries of what's possible in environmental storytelling. Our upcoming posts will dive deeper into specific techniques and tools we use.

Stay tuned for more behind-the-scenes content, and feel free to reach out with questions about our process!
    `
  },
  'dynamic-fear-system': {
    title: 'Dynamic Fear System',
    excerpt: 'Building AI that adapts to player behavior and psychological responses.',
    author: 'Sarah Martinez',
    date: 'Dec 12, 2024',
    readTime: '12 min read',
    tag: 'Engineering',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&h=800&fit=crop',
    content: `
# Dynamic Fear System: Adapting Horror to the Player

One of the most innovative features in Reverie of Fear is our Dynamic Fear System—an AI-driven approach that adapts the horror experience to each individual player's psychological profile and behavior patterns.

## The Challenge

Traditional horror games rely on scripted scares and predetermined pacing. While effective, this approach has limitations:
- Players become desensitized to repeated playthroughs
- Different players have different fear thresholds
- Static scares can feel predictable over time

Our solution was to create a system that learns from the player and adapts accordingly.

## How It Works

The Dynamic Fear System operates on several layers:

### 1. Behavioral Analysis
We track various player metrics in real-time:
- Movement patterns (hesitation, rushing, exploration style)
- Camera behavior (looking around, focusing on specific areas)
- Interaction frequency (examining objects, reading notes)
- Physiological responses (heart rate via controller vibration feedback)

### 2. Fear Profile Generation
Based on this data, we generate a unique "fear profile" for each player:
- **Startle Sensitivity**: How the player responds to jump scares
- **Atmospheric Preference**: Whether they're more affected by subtle or overt horror
- **Exploration Confidence**: How comfortable they are investigating scary areas
- **Narrative Engagement**: How much they invest in story elements

### 3. Dynamic Content Adjustment
The system then adjusts various game elements:
- **Scare Timing**: Spacing out or intensifying scares based on player state
- **Environmental Changes**: Subtle alterations to familiar spaces
- **Audio Cues**: Adjusting the intensity and frequency of audio stingers
- **Narrative Pacing**: Revealing story elements at optimal moments

## Technical Implementation

The system is built using a combination of:
- **Machine Learning**: Neural networks trained on player behavior data
- **Rule-Based Logic**: Fallback systems for edge cases
- **Real-Time Analytics**: Continuous monitoring and adjustment
- **Cloud Integration**: Learning from the broader player base

### Code Architecture
\`\`\`cpp
class DynamicFearSystem {
private:
    PlayerProfile currentProfile;
    FearStateManager stateManager;
    ContentAdjuster adjuster;
    
public:
    void UpdatePlayerMetrics(PlayerInput input);
    void AdjustGameContent();
    void GenerateFearProfile();
};
\`\`\`

## Ethical Considerations

Working with psychological data requires careful consideration:
- **Player Consent**: All data collection is opt-in with clear explanations
- **Privacy Protection**: Data is anonymized and encrypted
- **Comfort Boundaries**: Players can set limits on intensity
- **Transparency**: Players can view their fear profile and understand how it works

## Results and Player Feedback

Early testing has shown promising results:
- 73% increase in sustained engagement
- 45% reduction in player fatigue during horror sequences
- 89% of players report feeling the game "knows" them
- Significant improvement in replay value

## Challenges and Solutions

### Challenge: Avoiding Manipulation
**Solution**: Focus on enhancement rather than exploitation of fears

### Challenge: Technical Performance
**Solution**: Lightweight algorithms with cloud-assisted processing

### Challenge: Player Privacy
**Solution**: Local processing with optional anonymous data sharing

## Future Developments

We're continuing to refine the system with:
- Integration with biometric devices
- More sophisticated psychological modeling
- Cross-game learning capabilities
- Community-driven fear profile sharing

The Dynamic Fear System represents a new frontier in personalized gaming experiences, and we're excited to see how players respond when Reverie of Fear launches.
    `
  }
};

interface DevlogPostPageProps {
  params: {
    slug: string;
  };
}

const relatedPosts = [
  {
    id: 'sound-design-philosophy',
    title: 'Sound Design Philosophy',
    excerpt: 'Creating immersive audio landscapes that enhance storytelling.',
    tag: 'Audio',
    date: 'Dec 8, 2024',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop'
  },
  {
    id: 'narrative-design-process',
    title: 'Narrative Design Process',
    excerpt: 'How we craft stories that resonate with players on an emotional level.',
    tag: 'Design',
    date: 'Dec 5, 2024',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop'
  }
];

export default function DevlogPostPage({ params }: DevlogPostPageProps) {
  const post = devlogPosts[params.slug as keyof typeof devlogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-accent text-black px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.tag}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-center space-x-6 text-gray-400">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="whitespace-pre-line text-gray-300 leading-relaxed">
              {post.content}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 lg:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Related Posts</h2>
          <CardGrid columns={2}>
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id}>
                <CardImage
                  src={relatedPost.image}
                  alt={relatedPost.title}
                />
                <CardContent>
                  <CardHeader
                    tag={relatedPost.tag}
                    date={relatedPost.date}
                    title={relatedPost.title}
                    subtitle={relatedPost.excerpt}
                  />
                  <div className="mt-4">
                    <Link href={`/devlog/${relatedPost.id}`}>
                      <Button variant="ghost" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardGrid>
          
          <div className="text-center mt-12">
            <Link href="/devlog">
              <Button variant="ghost">
                ← Back to All Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
