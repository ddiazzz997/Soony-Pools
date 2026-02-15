
export interface ServiceTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  content: string;
  rating: number;
  service?: string;
}

export interface LocationArea {
  id: string;
  name: string;
  slug: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
