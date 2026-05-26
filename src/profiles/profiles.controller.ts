import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller('profiles')
export class ProfilesController {
  // @Get
  // getAll() {
  //   return
  // }

  @Get()
  getLocation(@Query('location') location: string) {
    return [{ location }];
  }

  // GET /profiles/:id
  /* Challenge:
    1. Set up the route for returning a single profile
    2. It should take an ID param and return an object with that ID
  */
  @Get(':id')
  getOne(@Param('id') id: string) {
    return { id };
  }

  // POST /profiles
  @Post()
  create(@Body() profile: CreateProfileDto) {
    return {
      name: profile.name,
      description: profile.description,
    };
  }
}
