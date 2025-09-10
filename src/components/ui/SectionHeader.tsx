import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ 
  eyebrow, 
  title, 
  description, 
  className,
  align = 'left' 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      'space-y-4',
      align === 'center' && 'text-center',
      className
    )}>
      {eyebrow && (
        <div className="text-accent text-sm font-medium uppercase tracking-wider">
          {eyebrow}
        </div>
      )}
      <h2 className="text-cinematic text-4xl md:text-5xl lg:text-6xl text-white">
        {title}
      </h2>
      {description && (
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
