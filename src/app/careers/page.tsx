'use client';

import { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CardGrid, Card, CardContent, CardHeader } from '@/components/ui/CardGrid';
import { Button } from '@/components/ui/Button';

const jobListings = [
  {
    id: 1,
    title: 'Senior Game Designer',
    team: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Lead the design of our next atmospheric horror experience. 5+ years experience required.',
    requirements: [
      '5+ years of game design experience',
      'Experience with horror or atmospheric games',
      'Strong understanding of player psychology',
      'Proficiency in design documentation',
      'Experience with Unreal Engine preferred'
    ],
    responsibilities: [
      'Lead game design for upcoming projects',
      'Create and maintain design documentation',
      'Collaborate with art and engineering teams',
      'Conduct playtesting sessions',
      'Mentor junior designers'
    ]
  },
  {
    id: 2,
    title: '3D Environment Artist',
    team: 'Art',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create haunting, beautiful worlds that tell stories without words. Portfolio required.',
    requirements: [
      '3+ years of 3D environment art experience',
      'Proficiency in Blender or Maya',
      'Experience with Substance Suite',
      'Strong understanding of lighting',
      'Portfolio demonstrating atmospheric environments'
    ],
    responsibilities: [
      'Create detailed 3D environments',
      'Work closely with the art director',
      'Optimize assets for performance',
      'Collaborate with level designers',
      'Maintain visual consistency across projects'
    ]
  },
  {
    id: 3,
    title: 'Audio Designer',
    team: 'Audio',
    location: 'Remote',
    type: 'Full-time',
    description: 'Craft immersive soundscapes that enhance our atmospheric storytelling.',
    requirements: [
      '3+ years of game audio experience',
      'Proficiency in Wwise or FMOD',
      'Experience with field recording',
      'Understanding of interactive audio',
      'Portfolio of atmospheric audio work'
    ],
    responsibilities: [
      'Design and implement game audio',
      'Create atmospheric soundscapes',
      'Record and edit sound effects',
      'Collaborate with designers and programmers',
      'Optimize audio for various platforms'
    ]
  },
  {
    id: 4,
    title: 'Frontend Developer',
    team: 'Engineering',
    location: 'Remote',
    type: 'Contract',
    description: 'Help us build and maintain our web presence and community tools.',
    requirements: [
      '2+ years of frontend development experience',
      'Proficiency in React and TypeScript',
      'Experience with Next.js',
      'Understanding of responsive design',
      'Portfolio of web applications'
    ],
    responsibilities: [
      'Develop and maintain company website',
      'Build community tools and features',
      'Optimize for performance and accessibility',
      'Collaborate with design team',
      'Implement analytics and tracking'
    ]
  },
  {
    id: 5,
    title: 'Community Manager',
    team: 'Community',
    location: 'Remote',
    type: 'Part-time',
    description: 'Build and nurture our growing community of players and fans.',
    requirements: [
      '2+ years of community management experience',
      'Experience with Discord and social media',
      'Strong written communication skills',
      'Understanding of gaming communities',
      'Passion for indie games'
    ],
    responsibilities: [
      'Manage Discord server and social media',
      'Engage with community members',
      'Organize community events',
      'Gather and relay player feedback',
      'Create community content'
    ]
  },
  {
    id: 6,
    title: 'QA Tester',
    team: 'QA',
    location: 'Remote',
    type: 'Contract',
    description: 'Ensure our games meet the highest quality standards before release.',
    requirements: [
      '1+ years of QA testing experience',
      'Strong attention to detail',
      'Experience with bug tracking tools',
      'Understanding of game development process',
      'Excellent communication skills'
    ],
    responsibilities: [
      'Test games across multiple platforms',
      'Document and track bugs',
      'Verify bug fixes',
      'Perform regression testing',
      'Collaborate with development team'
    ]
  }
];

const teams = ['All', 'Design', 'Art', 'Engineering', 'Audio', 'Community', 'QA'];
const locations = ['All', 'Remote', 'On-site'];
const types = ['All', 'Full-time', 'Part-time', 'Contract'];

const benefits = [
  'Competitive salary and equity',
  'Flexible working hours',
  'Remote-first culture',
  'Health and dental insurance',
  'Professional development budget',
  'Game development resources',
  'Collaborative team environment',
  'Creative freedom and autonomy'
];

const cultureImages = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop'
];

export default function CareersPage() {
  const [selectedTeam, setSelectedTeam] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const filteredJobs = jobListings.filter(job => {
    const matchesTeam = selectedTeam === 'All' || job.team === selectedTeam;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    const matchesType = selectedType === 'All' || job.type === selectedType;
    return matchesTeam && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Join Our Team"
            title="Careers"
            description="Help us create the next generation of atmospheric and emotionally resonant games. We're looking for passionate individuals who share our vision."
            align="center"
            className="mb-16"
          />
        </div>
      </section>

      {/* Job Filters */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Filter Jobs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Team</label>
                <select
                  value={selectedTeam}
                  onChange={(e) => setSelectedTeam(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  {teams.map(team => (
                    <option key={team} value={team}>{team}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredJobs.length > 0 ? (
            <CardGrid columns={2}>
              {filteredJobs.map((job) => (
                <Card key={job.id}>
                  <CardContent>
                    <CardHeader
                      title={job.title}
                      subtitle={job.description}
                    />
                    <div className="mt-4 space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-accent text-black text-xs rounded-md font-medium">
                          {job.team}
                        </span>
                        <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">
                          {job.location}
                        </span>
                        <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">
                          {job.type}
                        </span>
                      </div>
                      <Button className="w-full">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardGrid>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No jobs found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Work With Us"
            title="Benefits & Perks"
            description="We believe in taking care of our team so they can do their best work."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold">✓</span>
                </div>
                <p className="text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Sector Z */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Culture"
            title="Life at Sector Z"
            description="Get a glimpse into our collaborative, creative, and supportive work environment."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureImages.map((image, index) => (
              <div key={index} className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`Life at Sector Z ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
