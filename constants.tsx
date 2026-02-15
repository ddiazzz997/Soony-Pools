
import React from 'react';
import { ServiceTier, Testimonial, LocationArea, FAQItem } from './types';

export const PHONE_NUMBER = "(512) 799-5851";
export const EMAIL_ADDRESS = "sonnyspooltx@gmail.com";

export const COMPANY_NAME = "Sonny's Pool Services";
export const COMPANY_SHORT = "Sonny's";
export const CITY_NAME = "Austin";
export const CITY_STATE = "Austin, TX";
export const TAGLINE = "Your Pool, Our Passion";

export const SERVICE_TIERS: ServiceTier[] = [
  {
    id: 'basic',
    name: 'Essential Clean',
    price: '$99',
    description: 'Perfect for smaller pools with minimal debris. A no-fuss weekly service that keeps your water sparkling.',
    features: [
      'Weekly Chemical Balancing & Water Testing',
      'Skimmer & Pump Basket Cleaning',
      'Surface Skimming & Debris Removal',
      'Filter Pressure Check',
      'Equipment Visual Inspection',
      'Post-Visit Summary via Text'
    ]
  },
  {
    id: 'standard',
    name: 'Full Service',
    price: '$149',
    description: 'Our most popular plan — everything you need to keep your pool swim-ready all year round.',
    popular: true,
    features: [
      'Everything in Essential Clean',
      'Full Wall & Floor Brushing',
      'Vacuum as Needed',
      'Tile Line Cleaning',
      'Monthly Salt Cell Inspection',
      'Text Before Arrival + Photo Report',
      'Priority Scheduling & Support'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Care',
    price: '$199',
    description: 'Top-tier care for those who want their pool looking absolutely flawless, every single week.',
    features: [
      'Everything in Full Service',
      'Bi-Weekly Filter Deep Clean',
      'Unlimited Algae Treatment',
      'Equipment Health Monitoring',
      '10% Off All Repairs',
      'Spa & Water Feature Detailing',
      'Dedicated Technician Assigned',
      'Same-Day Emergency Visits'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'James & Carla Hoffman',
    location: 'South Austin',
    image: 'https://picsum.photos/seed/james/200/200',
    content: "Sonny's has been taking care of our pool for over a year now and it's never looked better. They show up on time, communicate clearly, and the water is always crystal clear. Highly recommend to anyone in the Austin area!",
    rating: 5,
    service: 'Weekly Pool Maintenance'
  },
  {
    id: '2',
    name: 'Rachel Dominguez',
    location: 'Circle C Ranch',
    image: 'https://picsum.photos/seed/rachel/200/200',
    content: "After trying two other services that kept missing appointments, we switched to Sonny's. Night and day difference. They actually care about doing a great job and it shows. Our pool is always swim-ready when the kids get home from school.",
    rating: 5,
    service: 'Full Service Plan'
  },
  {
    id: '3',
    name: 'Tom Wexler',
    location: 'Westlake Hills',
    image: 'https://picsum.photos/seed/tom/200/200',
    content: "Had a green pool situation after vacation. Called Sonny's on a Monday morning and they had a tech out by that afternoon. Pool was back to normal in two days. Fair price, great work, no drama. That's all you can ask for.",
    rating: 5,
    service: 'Green Pool Recovery'
  },
  {
    id: '4',
    name: 'Angela & Mark Foster',
    location: 'Cherry Creek',
    image: 'https://picsum.photos/seed/angela/200/200',
    content: "Best pool service we've used in 10+ years of owning a pool. Sonny's team is professional, fairly priced, and incredibly reliable. We love getting the text updates before and after each visit so we always know what's going on.",
    rating: 5,
    service: 'Premium Care Plan'
  },
  {
    id: '5',
    name: 'Derek Pham',
    location: 'Pflugerville',
    image: 'https://picsum.photos/seed/derek/200/200',
    content: "My pump started making a weird noise and I called Sonny's expecting to be upsold on a whole new system. Instead, they diagnosed a $40 fix and had it done in 30 minutes. Honest, trustworthy, and skilled. Five stars isn't enough.",
    rating: 5,
    service: 'Equipment Repair'
  },
  {
    id: '6',
    name: 'Linda Garza',
    location: 'Cedar Park',
    image: 'https://picsum.photos/seed/linda/200/200',
    content: "We have a saltwater pool and most services either don't know how to handle them or overcharge. Sonny's knows exactly what they're doing and the pricing is straightforward. Our pool has never been healthier. So glad we found them.",
    rating: 5,
    service: 'Saltwater Pool Service'
  }
];

export const SERVICE_AREAS: LocationArea[] = [
  { id: '1', name: 'South Austin', slug: 'south-austin' },
  { id: '2', name: 'Cherry Creek', slug: 'cherry-creek' },
  { id: '3', name: 'Westlake Hills', slug: 'westlake-hills' },
  { id: '4', name: 'Circle C Ranch', slug: 'circle-c' },
  { id: '5', name: 'Pflugerville', slug: 'pflugerville' },
  { id: '6', name: 'Cedar Park', slug: 'cedar-park' },
  { id: '7', name: 'Round Rock', slug: 'round-rock' },
  { id: '8', name: 'Kyle', slug: 'kyle' },
  { id: '9', name: 'Buda', slug: 'buda' },
  { id: '10', name: 'Lakeway', slug: 'lakeway' },
  { id: '11', name: 'Bee Cave', slug: 'bee-cave' },
  { id: '12', name: 'Oak Hill', slug: 'oak-hill' },
  { id: '13', name: 'Sunset Valley', slug: 'sunset-valley' },
  { id: '14', name: 'Barton Creek', slug: 'barton-creek' },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: '1',
    question: 'How often should I have my pool serviced?',
    answer: "We recommend weekly service for the best water quality and equipment longevity. Austin's heat, pollen, and tree debris can turn a clean pool green in just a few days without proper care."
  },
  {
    id: '2',
    question: 'What does a typical weekly visit include?',
    answer: "Every visit includes chemical testing and balancing, skimming and debris removal, brushing walls and tile line, vacuuming as needed, emptying skimmer and pump baskets, and a full equipment check. You'll get a text before we arrive and a summary after."
  },
  {
    id: '3',
    question: 'Do you service saltwater pools?',
    answer: "Absolutely. We work with both traditional chlorine and saltwater systems. We monitor salt levels, inspect chlorine generators, clean salt cells, and keep your water perfectly balanced regardless of system type."
  },
  {
    id: '4',
    question: 'Are you licensed and insured?',
    answer: "Yes. Sonny's Pool Services is fully licensed and insured. Our technicians are experienced professionals who take pride in their work. Your property is always protected."
  },
  {
    id: '5',
    question: 'My pool turned green — can you fix it?',
    answer: "Definitely! Green pool recovery is one of our specialties. We can usually have a tech out the same day. Most green pools are restored to crystal clear in 24-72 hours depending on severity."
  },
  {
    id: '6',
    question: 'Do I need to be home for service?',
    answer: "Nope. Most of our customers aren't home during visits. We'll coordinate gate access with you, and you'll always get a text update so you know exactly what was done."
  },
  {
    id: '7',
    question: 'Are there contracts or hidden fees?',
    answer: "No contracts — ever. All plans are month-to-month with flat-rate pricing. Chemicals are included. If a repair is needed, we'll always give you a written estimate first and wait for your go-ahead."
  },
  {
    id: '8',
    question: 'What areas do you serve?',
    answer: "We serve South Austin, Cherry Creek, Westlake Hills, Circle C Ranch, Pflugerville, Cedar Park, Round Rock, Kyle, Buda, Lakeway, Bee Cave, Oak Hill, Sunset Valley, and Barton Creek."
  },
];
