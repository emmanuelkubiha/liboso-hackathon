export interface Service {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  price: string;
  duration: string;
  agents: number;
  rating: number;
  image: string;
  tagsFr: string[];
  tagsEn: string[];
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  rating: number;
  completedJobs: number;
  services: string[];
  availability: boolean;
  image: string;
  performance: number;
}

export interface Booking {
  id: string;
  serviceId: string;
  userId: string;
  agentId: string;
  date: string;
  time: string;
  location: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  price: string;
  paymentMethod: string;
  rating?: number;
  feedback?: string;
}

export interface Country {
  code: string;
  name: string;
  nameEn: string;
  role: 'strategic' | 'main' | 'partner';
  currency: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleEn: string;
  bio: string;
  bioEn: string;
  image: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  description: string;
  descriptionEn: string;
  countries: string[];
}
