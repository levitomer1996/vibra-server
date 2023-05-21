import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { FriendRequestDTO } from './DTO/FriendRequestDTO.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { User } from 'src/auth/Schemes/User.Scheme';
import { Connection, Model } from 'mongoose';
import { FriendRequest } from './Schemes/FriendRequest.scheme';

@Injectable()
export class FriendrequestService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(FriendRequest.name)
    private friendRequestModel: Model<FriendRequest>,
    @InjectConnection() private connection: Connection,
  ) {}
  private logger = new Logger('FriendRequest service');
  async sendFriendRequest(body: FriendRequestDTO): Promise<HttpStatus> {
    const { sender, reciver } = body;
    try {
      const new_friend_request = new this.friendRequestModel({
        sender,
        reciver,
        status: 'PENDING',
      });

      await this.userModel.updateOne(
        { id: reciver },
        { $push: { friendRequest: new_friend_request } },
      );
    } catch (error) {}
    return HttpStatus.ACCEPTED;
  }
}
