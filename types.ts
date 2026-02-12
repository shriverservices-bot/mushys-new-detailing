
export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  isPremium?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface BookingDetails {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  carModel: string;
}
