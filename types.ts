
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
}

export interface LocationArea {
  id: string;
  name: string;
  slug: string;
}
