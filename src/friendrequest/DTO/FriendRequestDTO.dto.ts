import { IsEnum } from 'class-validator';

export class FriendRequestDTO {
  sender: string;
  reciver: string;
}
export enum FREINDREQUESTSTATUS {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  DECLINED = 'DECLINED',
}
