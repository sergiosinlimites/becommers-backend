import { Badge } from 'src/badges/domain/Badge';
import { Event } from 'src/events/domain/Event';
import { Interest } from 'src/interests/domain/Interest';

export class Becommer {
  firstName: string;
  lastName: string;
  email: string;
  allowMailNotifications: boolean;
  allowSMSNotifications: boolean;
  allowWhatsappNotifications: boolean;
  gradeByPeers: number;
  password: string;
  recoveryPassword: string;
  profilePicture: string;
  username: string;
  interests: Interest[];
  goals: string[];
  badges: Badge[];
  isPremium: boolean;
  contacts: Becommer[];
  points: number;
  // posts:
  interestedEvents: Event[];
  assistedEvents: Event[];
  createdAt: Date;
  lastConnection: Date;
}
