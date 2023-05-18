import { IsEnum } from 'class-validator';
import { User } from 'src/auth/Schemes/User.Scheme';

export class FriendRequestDTO {
  sender: User;
  reciver: User;
}
export enum FREINDREQUESTSTATUS {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
}
