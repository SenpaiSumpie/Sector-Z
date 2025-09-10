import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardGridProps {
	children: ReactNode;
	columns?: 1 | 2 | 3 | 4;
	className?: string;
}

interface CardProps {
	children: ReactNode;
	className?: string;
	hover?: boolean;
	onClick?: () => void;
}

export function CardGrid({ children, columns = 3, className }: CardGridProps) {
	const gridCols = {
		1: 'grid-cols-1',
		2: 'grid-cols-1 md:grid-cols-2',
		3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
		4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
	};

	return (
		<div className={cn('grid gap-6 lg:gap-8', gridCols[columns], className)}>{children}</div>
	);
}

export function Card({ children, className, hover = true, onClick }: CardProps) {
	return (
		<div
			className={cn(
				'bg-gray-900 border border-gray-800 rounded-lg overflow-hidden transition-all duration-300',
				hover && 'hover-lift hover:border-gray-700',
				onClick && 'cursor-pointer',
				className
			)}
			onClick={onClick}
		>
			{children}
		</div>
	);
}

interface CardImageProps {
	src: string;
	alt: string;
	className?: string;
}

export function CardImage({ src, alt, className }: CardImageProps) {
	return (
		<div className={cn('aspect-video bg-gray-800 overflow-hidden', className)}>
			<img
				src={src}
				alt={alt}
				className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
			/>
		</div>
	);
}

interface CardContentProps {
	children: ReactNode;
	className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
	return <div className={cn('p-6', className)}>{children}</div>;
}

interface CardHeaderProps {
	title: string;
	subtitle?: string;
	tag?: string;
	date?: string;
	className?: string;
}

export function CardHeader({ title, subtitle, tag, date, className }: CardHeaderProps) {
	return (
		<div className={cn('space-y-2', className)}>
			{(tag || date) && (
				<div className="flex items-center justify-between text-sm">
					{tag && (
						<span className="text-accent font-medium uppercase tracking-wider">
							{tag}
						</span>
					)}
					{date && <span className="text-gray-400">{date}</span>}
				</div>
			)}
			<h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
			{subtitle && <p className="text-gray-300 leading-relaxed">{subtitle}</p>}
		</div>
	);
}
