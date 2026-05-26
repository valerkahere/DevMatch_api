import { Controller, Get } from '@nestjs/common';

@Controller('profiles')
export class ProfilesController {
  @Get()
  findAll(): string {
    return 'this action returns all cats';
  }
}
