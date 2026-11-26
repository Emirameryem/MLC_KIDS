import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

interface EditorialRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

/**
 * Smooth editorial fade-up text and block reveal as content enters viewport.
 */
export function EditorialReveal({
  children,
  delay = 0,
  className = '',
  yOffset = 28,
}: EditorialRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{
        duration: 0.85,
        delay,
        ease: EDITORIAL_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SoftScaleFrameProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Subtle scale-down settling animation on photography frames when scrolled into view.
 */
export function SoftScaleFrame({
  children,
  delay = 0.08,
  className = '',
}: SoftScaleFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.07 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{
        duration: 1.15,
        delay,
        ease: EDITORIAL_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SectionEyebrowProps {
  label: string;
  align?: 'left' | 'center';
  light?: boolean;
}

/**
 * Minimal editorial eyebrow label with delicate hairline separator.
 */
export function SectionEyebrow({
  label,
  align = 'left',
  light = false,
}: SectionEyebrowProps) {
  return (
    <div
      className={`flex items-center gap-3.5 ${
        align === 'center' ? 'justify-center' : 'justify-start'
      }`}
    >
      <span
        className={`h-px w-8 ${
          light ? 'bg-latte-soft/70' : 'bg-latte/70'
        }`}
        aria-hidden="true"
      />
      <span
        className={`text-xs font-semibold uppercase tracking-[0.22em] ${
          light ? 'text-latte-soft' : 'text-latte-hover'
        }`}
      >
        {label}
      </span>
      {align === 'center' && (
        <span
          className={`h-px w-8 ${
            light ? 'bg-latte-soft/70' : 'bg-latte/70'
          }`}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

