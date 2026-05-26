import { Controller, Get, Param, Body, Post, Put } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
@Controller('profiles')
export class ProfilesController {
  // GET /profiles
  @Get()
  findAll() {
    return [];
  }

  // GET /profiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  // POST /profiles
  // bash post.sh
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return createProfileDto;
  }

  // PUT /profiles/:id
  /* 
  Challenge:
    1. Create a class named UpdateProfileDto in update-profile.dto.ts with both name and description as strings, and export that class.
    2. Create a route in profiles.controller.ts to handle a PUT request. It should take in an ID as a param, and a body with a name and description. Then, return an object with the id, name, and description as a response.
  
  Note: Don't forget that you can type 'bash put.sh' in the terminal and hit enter to test out your new route.
  */
  @Put(':id')
  update(@Param('id') id: string, @Body() profile: UpdateProfileDto) {
    return {
      // Provide explicit keys (Recommended)
      // Assign a clear key name to each property so the runtime knows how to build the object
      name: profile.name,
      description: profile.description,
      id: id,
    };
  }

  // DELETE /profiles/:id
}
