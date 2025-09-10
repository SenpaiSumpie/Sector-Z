import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Sector Z - Atmospheric Game Studio',
	description: 'We craft atmospheric worlds and sharp, character-driven games. Step inside.',
	keywords: ['game studio', 'indie games', 'atmospheric games', 'game development'],
	authors: [{ name: 'Sector Z Studio' }],
	creator: 'Sector Z Studio',
	publisher: 'Sector Z Studio',
	openGraph: {
		title: 'Sector Z - Atmospheric Game Studio',
		description: 'We craft atmospheric worlds and sharp, character-driven games. Step inside.',
		type: 'website',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sector Z - Atmospheric Game Studio',
		description: 'We craft atmospheric worlds and sharp, character-driven games. Step inside.',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
				<Header />
				<main id="main-content">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
