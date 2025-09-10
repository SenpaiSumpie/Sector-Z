// Accessibility utilities and helpers

/**
 * Manages focus for modal dialogs and overlays
 */
export class FocusManager {
	private previouslyFocusedElement: HTMLElement | null = null;
	private focusableElements: HTMLElement[] = [];

	/**
	 * Trap focus within a container element
	 */
	trapFocus(container: HTMLElement) {
		this.previouslyFocusedElement = document.activeElement as HTMLElement;
		this.focusableElements = this.getFocusableElements(container);

		if (this.focusableElements.length > 0) {
			this.focusableElements[0].focus();
		}

		container.addEventListener('keydown', this.handleKeyDown);
	}

	/**
	 * Release focus trap and restore previous focus
	 */
	releaseFocus(container: HTMLElement) {
		container.removeEventListener('keydown', this.handleKeyDown);

		if (this.previouslyFocusedElement) {
			this.previouslyFocusedElement.focus();
		}
	}

	private handleKeyDown = (event: KeyboardEvent) => {
		if (event.key !== 'Tab') return;

		const firstElement = this.focusableElements[0];
		const lastElement = this.focusableElements[this.focusableElements.length - 1];

		if (event.shiftKey) {
			// Shift + Tab
			if (document.activeElement === firstElement) {
				event.preventDefault();
				lastElement.focus();
			}
		} else {
			// Tab
			if (document.activeElement === lastElement) {
				event.preventDefault();
				firstElement.focus();
			}
		}
	};

	private getFocusableElements(container: HTMLElement): HTMLElement[] {
		const focusableSelectors = [
			'button:not([disabled])',
			'input:not([disabled])',
			'select:not([disabled])',
			'textarea:not([disabled])',
			'a[href]',
			'[tabindex]:not([tabindex="-1"])',
			'[contenteditable="true"]',
		].join(', ');

		return Array.from(container.querySelectorAll(focusableSelectors));
	}
}

/**
 * Announces messages to screen readers
 */
export class ScreenReaderAnnouncer {
	private announcer: HTMLElement;

	constructor() {
		this.announcer = this.createAnnouncer();
	}

	/**
	 * Announce a message to screen readers
	 */
	announce(message: string, priority: 'polite' | 'assertive' = 'polite') {
		this.announcer.setAttribute('aria-live', priority);
		this.announcer.textContent = message;

		// Clear the message after a short delay
		setTimeout(() => {
			this.announcer.textContent = '';
		}, 1000);
	}

	private createAnnouncer(): HTMLElement {
		const announcer = document.createElement('div');
		announcer.setAttribute('aria-live', 'polite');
		announcer.setAttribute('aria-atomic', 'true');
		announcer.className = 'sr-only';
		document.body.appendChild(announcer);
		return announcer;
	}
}

/**
 * Manages reduced motion preferences
 */
export const motionPreferences = {
	/**
	 * Check if user prefers reduced motion
	 */
	prefersReducedMotion(): boolean {
		return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	},

	/**
	 * Get appropriate animation duration based on user preference
	 */
	getAnimationDuration(normalDuration: number): number {
		return this.prefersReducedMotion() ? 0 : normalDuration;
	},

	/**
	 * Apply motion-safe class conditionally
	 */
	getMotionClass(motionClass: string, staticClass: string = ''): string {
		return this.prefersReducedMotion() ? staticClass : motionClass;
	},
};

/**
 * Color contrast utilities
 */
export const colorContrast = {
	/**
	 * Calculate relative luminance of a color
	 */
	getLuminance(r: number, g: number, b: number): number {
		const [rs, gs, bs] = [r, g, b].map((c) => {
			c = c / 255;
			return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
		});
		return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
	},

	/**
	 * Calculate contrast ratio between two colors
	 */
	getContrastRatio(color1: [number, number, number], color2: [number, number, number]): number {
		const lum1 = this.getLuminance(...color1);
		const lum2 = this.getLuminance(...color2);
		const brightest = Math.max(lum1, lum2);
		const darkest = Math.min(lum1, lum2);
		return (brightest + 0.05) / (darkest + 0.05);
	},

	/**
	 * Check if contrast ratio meets WCAG AA standards
	 */
	meetsWCAGAA(
		color1: [number, number, number],
		color2: [number, number, number],
		isLargeText: boolean = false
	): boolean {
		const ratio = this.getContrastRatio(color1, color2);
		return isLargeText ? ratio >= 3 : ratio >= 4.5;
	},
};

/**
 * Keyboard navigation helpers
 */
export const keyboardNavigation = {
	/**
	 * Handle arrow key navigation in a list
	 */
	handleArrowKeys(
		event: KeyboardEvent,
		items: HTMLElement[],
		currentIndex: number,
		onIndexChange: (newIndex: number) => void,
		orientation: 'horizontal' | 'vertical' = 'vertical'
	) {
		const isVertical = orientation === 'vertical';
		const nextKey = isVertical ? 'ArrowDown' : 'ArrowRight';
		const prevKey = isVertical ? 'ArrowUp' : 'ArrowLeft';

		switch (event.key) {
			case nextKey:
				event.preventDefault();
				const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
				onIndexChange(nextIndex);
				items[nextIndex].focus();
				break;
			case prevKey:
				event.preventDefault();
				const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
				onIndexChange(prevIndex);
				items[prevIndex].focus();
				break;
			case 'Home':
				event.preventDefault();
				onIndexChange(0);
				items[0].focus();
				break;
			case 'End':
				event.preventDefault();
				const lastIndex = items.length - 1;
				onIndexChange(lastIndex);
				items[lastIndex].focus();
				break;
		}
	},
};

/**
 * Generate unique IDs for accessibility attributes
 */
export function generateId(prefix: string = 'id'): string {
	return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Create accessible button props
 */
export function createAccessibleButtonProps(
	label: string,
	description?: string,
	pressed?: boolean,
	expanded?: boolean
) {
	const props: Record<string, string | boolean> = {
		'aria-label': label,
		type: 'button',
	};

	if (description) {
		const descId = generateId('desc');
		props['aria-describedby'] = descId;
	}

	if (typeof pressed === 'boolean') {
		props['aria-pressed'] = pressed;
	}

	if (typeof expanded === 'boolean') {
		props['aria-expanded'] = expanded;
	}

	return props;
}

// Global instances
export const focusManager = new FocusManager();
export const screenReader = typeof window !== 'undefined' ? new ScreenReaderAnnouncer() : null;
