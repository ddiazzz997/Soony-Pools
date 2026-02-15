
import React from 'react';
import { ServiceTier, Testimonial, LocationArea } from './types';

export const PHONE_NUMBER = "(555) 123-4567";
export const EMAIL_ADDRESS = "hello@azurepoolcare.com";

export const SERVICE_TIERS: ServiceTier[] = [
  {
    id: 'basic',
    name: 'Essential Sparkle',
    price: '$120',
    description: 'Perfect for screened-in pools requiring minimal debris removal.',
    features: [
      'Weekly Chemical Balancing',
      'Skimmer Basket Cleaning',
      'Pump Basket Cleaning',
      'Filter Pressure Check',
      'Basic Water Analysis'
    ]
  },
  {
    id: 'standard',
    name: 'Azure Deluxe',
    price: '$175',
    description: 'Our most popular plan for the busy homeowner.',
    popular: true,
    features: [
      'Everything in Essential',
      'Full Surface Brushing',
      'Bottom Vacuuming',
      'Tile Line Cleaning',
      'Priority Support',
      'Monthly Salt Cell Inspection'
    ]
  },
  {
    id: 'premium',
    name: 'Resort Living',
    price: '$250',
    description: 'Concierge-level service for high-end properties.',
    features: [
      'Everything in Deluxe',
      'Bi-Weekly Filter Cleaning',
      'Unlimited Algae Treatment',
      'Equipment Health Monitoring',
      '10% Off Repairs',
      'Spa Detailing'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'Windermere',
    image: 'https://picsum.photos/seed/sarah/200/200',
    content: "The first time my pool has actually looked like the photos in a magazine. Azure is reliable and professional.",
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'Lake Nona',
    image: 'https://picsum.photos/seed/michael/200/200',
    content: "Transparent pricing was what sold me. No hidden fees, just great service every Tuesday morning.",
    rating: 5
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    location: 'Winter Park',
    image: 'https://picsum.photos/seed/elena/200/200',
    content: "They saved my pool after a big storm. Prompt, courteous, and very knowledgeable about the chemistry.",
    rating: 5
  }
];

export const SERVICE_AREAS: LocationArea[] = [
  { id: '1', name: 'Windermere', slug: 'windermere' },
  { id: '2', name: 'Winter Park', slug: 'winter-park' },
  { id: '3', name: 'Lake Nona', slug: 'lake-nona' },
  { id: '4', name: 'Doctor Phillips', slug: 'doctor-phillips' },
  { id: '5', name: 'Baldwin Park', slug: 'baldwin-park' },
];
