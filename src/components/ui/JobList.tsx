'use client';

import { useState, useMemo } from 'react';
import { Button } from './Button';
import { Card, CardContent, CardHeader } from './CardGrid';
import { cn } from '@/lib/utils';

export interface Job {
  id: number;
  title: string;
  team: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
  requirements?: string[];
  responsibilities?: string[];
  salary?: string;
  remote?: boolean;
  featured?: boolean;
}

interface JobListProps {
  jobs: Job[];
  className?: string;
  showFilters?: boolean;
  onJobClick?: (job: Job) => void;
}

interface FilterState {
  team: string;
  location: string;
  type: string;
  search: string;
}

export function JobList({ 
  jobs, 
  className, 
  showFilters = true, 
  onJobClick 
}: JobListProps) {
  const [filters, setFilters] = useState<FilterState>({
    team: 'All',
    location: 'All',
    type: 'All',
    search: ''
  });

  // Extract unique values for filter options
  const filterOptions = useMemo(() => {
    const teams = ['All', ...new Set(jobs.map(job => job.team))];
    const locations = ['All', ...new Set(jobs.map(job => job.location))];
    const types = ['All', ...new Set(jobs.map(job => job.type))];
    
    return { teams, locations, types };
  }, [jobs]);

  // Filter jobs based on current filters
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesTeam = filters.team === 'All' || job.team === filters.team;
      const matchesLocation = filters.location === 'All' || job.location === filters.location;
      const matchesType = filters.type === 'All' || job.type === filters.type;
      const matchesSearch = filters.search === '' || 
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.search.toLowerCase());
      
      return matchesTeam && matchesLocation && matchesType && matchesSearch;
    });
  }, [jobs, filters]);

  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      team: 'All',
      location: 'All',
      type: 'All',
      search: ''
    });
  };

  const hasActiveFilters = filters.team !== 'All' || 
                          filters.location !== 'All' || 
                          filters.type !== 'All' || 
                          filters.search !== '';

  return (
    <div className={cn("space-y-6", className)}>
      {/* Filters */}
      {showFilters && (
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white mb-4 lg:mb-0">
              Filter Jobs ({filteredJobs.length} found)
            </h3>
            {hasActiveFilters && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearFilters}
                className="self-start lg:self-auto"
              >
                Clear Filters
              </Button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Search
              </label>
              <input
                type="text"
                value={filters.search}
                onChange={(e) => updateFilter('search', e.target.value)}
                placeholder="Search jobs..."
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            {/* Team Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Team
              </label>
              <select
                value={filters.team}
                onChange={(e) => updateFilter('team', e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                {filterOptions.teams.map(team => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Location
              </label>
              <select
                value={filters.location}
                onChange={(e) => updateFilter('location', e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                {filterOptions.locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Type
              </label>
              <select
                value={filters.type}
                onChange={(e) => updateFilter('type', e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                {filterOptions.types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Job Results */}
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <Card 
              key={job.id} 
              className={cn(
                "cursor-pointer transition-all duration-200",
                job.featured && "ring-2 ring-accent"
              )}
              onClick={() => onJobClick?.(job)}
            >
              <CardContent>
                <div className="flex items-start justify-between mb-4">
                  <CardHeader
                    title={job.title}
                    subtitle={job.description}
                  />
                  {job.featured && (
                    <span className="bg-accent text-black px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
                
                <div className="space-y-3">
                  {/* Job Details */}
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
                    {job.remote && (
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-md">
                        Remote
                      </span>
                    )}
                  </div>

                  {/* Salary */}
                  {job.salary && (
                    <div className="text-sm text-gray-300">
                      <span className="font-medium">Salary:</span> {job.salary}
                    </div>
                  )}

                  {/* Requirements Preview */}
                  {job.requirements && job.requirements.length > 0 && (
                    <div className="text-sm text-gray-400">
                      <span className="font-medium">Key Requirements:</span>
                      <ul className="mt-1 space-y-1">
                        {job.requirements.slice(0, 2).map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1 h-1 bg-accent rounded-full mt-2 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                        {job.requirements.length > 2 && (
                          <li className="text-accent text-xs">
                            +{job.requirements.length - 2} more requirements
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Apply Button */}
                  <Button 
                    className="w-full mt-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle apply action
                    }}
                  >
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-white mb-2">No jobs found</h3>
          <p className="text-gray-400 mb-4">
            No jobs match your current filters. Try adjusting your search criteria.
          </p>
          {hasActiveFilters && (
            <Button variant="ghost" onClick={clearFilters}>
              Clear All Filters
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
