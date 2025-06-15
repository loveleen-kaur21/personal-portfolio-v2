'use client';

import { useScrollAnimation } from '../src/hooks/useScrollAnimation';

interface ScrollAnimationWrapperProps {
    children: React.ReactNode;
    animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';
    delay?: number;
    duration?: number;
    className?: string;
}

export const ScrollAnimationWrapper = ({ 
    children, 
    animation = 'fadeUp', 
    delay = 0,
    duration = 600,
    className = ''
}: ScrollAnimationWrapperProps) => {
    const { ref, isVisible } = useScrollAnimation();

    const getAnimationClasses = () => {
        const baseClasses = `transition-all ease-out`;
        
        if (!isVisible) {
            switch (animation) {
                case 'fadeUp':
                    return `${baseClasses} opacity-0 translate-y-8`;
                case 'fadeIn':
                    return `${baseClasses} opacity-0`;
                case 'slideLeft':
                    return `${baseClasses} opacity-0 -translate-x-8`;
                case 'slideRight':
                    return `${baseClasses} opacity-0 translate-x-8`;
                case 'scale':
                    return `${baseClasses} opacity-0 scale-95`;
                default:
                    return `${baseClasses} opacity-0 translate-y-8`;
            }
        }
        
        return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
    };

    return (
        <div 
            ref={ref}
            className={`${getAnimationClasses()} ${className}`}
            style={{ 
                transitionDelay: `${delay}ms`,
                transitionDuration: `${duration}ms`
            }}
        >
            {children}
        </div>
    );
};