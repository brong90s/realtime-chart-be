import { Body, Controller, Get, Post } from '@nestjs/common';
import { PusherService } from './pusher.service';

@Controller("api")
export class AppController {
  constructor(private pusherService: PusherService) {}

  @Post("messages")
  async messages(
    @Body('username') username: string, 
    @Body('messages') message: string
  ) {
    await this.pusherService.trigger("chart", "messages", {
      username, 
      message
    })

    return []
  }
}
