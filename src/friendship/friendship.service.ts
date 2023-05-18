import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { Friendship } from './Scheme/Friendship.scheme';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFriendshipDto } from './DTO/CreateFriendShip.dto';
import { User } from 'src/auth/Schemes/User.Scheme';

@Injectable()
export class FriendshipService {
  private logger = new Logger('FriendshipService');
  constructor(
    @InjectModel(Friendship.name) private friendshipModel: Model<Friendship>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async create(senderId: string, reciverId: string) {
    try {
      this.logger.log('trying to find users.');
      const sender = await this.userModel.findById(senderId);
      const reciver = await this.userModel.findById(reciverId);
      this.logger.log('Users found... trying to create new friendship');
      const newFriendship = new this.friendshipModel({
        users: [sender, reciver],
      });
      await newFriendship.save();
      this.logger.log(
        `Friendship ${newFriendship.id} created. Adding to user's friends`,
      );
    } catch (error) {}
  }
}
