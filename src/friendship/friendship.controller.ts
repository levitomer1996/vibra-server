import {
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FriendshipService } from './friendship.service';
import { CreateFriendshipDto } from './DTO/CreateFriendShip.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/GetUser.Decorator';

@Controller('friendship')
export class FriendshipController {
  constructor(private readonly friendshipService: FriendshipService) {}

  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() uid: { id: string }, @GetUser() user) {
    const { id } = uid;
    return this.friendshipService.create(user.id, id);
  }
}
