import { Body, Controller, HttpStatus } from '@nestjs/common';
import { FriendrequestService } from './friendrequest.service';
import { FriendRequestDTO } from './DTO/FriendRequestDTO.dto';

@Controller('friendrequest')
export class FriendrequestController {
  constructor(private fr_service: FriendrequestService) {}
  async sendFriendRequest(@Body() body: FriendRequestDTO): Promise<HttpStatus> {
    return this.fr_service.sendFriendRequest(body);
  }
}
