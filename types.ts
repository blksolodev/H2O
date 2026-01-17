import { LucideIcon } from 'lucide-react';

export type PageView = 'home' | 'privacy' | 'support';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}