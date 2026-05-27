import { Controller, Get, Param, Body, Post, Put, Delete, HttpCode, HttpStatus, Inject } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';


import { ProfilesService } from './profiles.service';


@Controller('profiles')
export class ProfilesController {

    // add service
    constructor(private profilesService: ProfilesService) {

    }

    // GET /profiles
    @Get()
    findAll() {
        return this.profilesService.findAll();
    }

    // GET /profiles/:id
    @Get(':id')
    findOne(@Param('id') id: string) {
        /*
        Challenge:
          1. Create the service method in the 'profiles.service.ts' file. It should take an ID and return a profile object.
          2. Change the controller method we set up for getting single profiles to call our newly created service method and return the result from that.
        */
        return this.profilesService.findOne(id);
    }

    // POST /profiles
    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return createProfileDto;
    }

    // PUT /profiles/:id
    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() updateProfileDto: UpdateProfileDto
    ) {
        return {
            id,
            ...updateProfileDto
        };
    }

    // DELETE /profiles/:id
    @Delete(':id')
    /* 
    Challenge:
      1. Change HttpStatus.OK to use the proper property on HttpStatus that serves back a status code of 204 back to the client
    */
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) { }
}
