import { Injectable } from '@angular/core';

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
}

@Injectable({ providedIn: 'root' })
export class WebsiteDataService {
  readonly services: ServiceItem[] = [
    {
      icon: '⌘',
      title: 'Web Development',
      description: 'Fast, accessible websites that turn great first impressions into lasting customer relationships.',
    },
    {
      icon: '✳',
      title: 'UI/UX Design',
      description: 'Thoughtful digital experiences shaped around the people who use them every day.',
    },
    {
      icon: '▣',
      title: 'Mobile App Development',
      description: 'Useful, intuitive mobile products designed to feel right at home in your customers’ hands.',
    },
    {
      icon: '↗',
      title: 'Digital Marketing',
      description: 'Clear, creative campaigns that help the right people discover and remember your brand.',
    },
  ];

  readonly projects: Project[] = [
    {
      title: 'Form & Field',
      category: 'Branding',
      description: 'A grounded new identity for a modern home and lifestyle label.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
      color: '#e9e4dc',
    },
    {
      title: 'Bloomwell',
      category: 'Web Design',
      description: 'A calmer digital home for a fresh approach to everyday wellness.',
      image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1000&q=85',
      color: '#e2eee9',
    },
    {
      title: 'Nook Coffee',
      category: 'E-commerce',
      description: 'A warm, easy-to-use shop for coffee worth slowing down for.',
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=85',
      color: '#eee3d7',
    },
    {
      title: 'Goodkind',
      category: 'Branding',
      description: 'A confident identity that makes sustainable choices feel simple.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=85',
      color: '#e8ede1',
    },
    {
      title: 'Sunday Supply',
      category: 'E-commerce',
      description: 'A sunny online storefront for essentials made to last.',
      image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1000&q=85',
      color: '#f0e5dc',
    },
    {
      title: 'The Gather',
      category: 'Web Design',
      description: 'A welcoming community platform built around shared experiences.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=85',
      color: '#e7e4f0',
    },
  ];

  readonly team = [
    {
      name: 'Maya Chen',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=85',
    },
    {
      name: 'Jordan Lee',
      role: 'Product Designer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85',
    },
    {
      name: 'Sam Rivera',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=85',
    },
  ];

  readonly testimonials = [
    {
      quote: 'PixelCraft made the whole process feel easy. Our new site finally feels like us, and our customers noticed right away.',
      name: 'Olivia Park',
      role: 'Founder, Bloomwell',
    },
    {
      quote: 'They listened, challenged our assumptions in the best way, and delivered work we’re genuinely proud to share.',
      name: 'Marcus Reid',
      role: 'Owner, Nook Coffee',
    },
  ];
}
