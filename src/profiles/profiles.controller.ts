import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  // add service
  constructor(private profilesService: ProfilesService) {}

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
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProfileDto: CreateProfileDto) {
    /*
    Challenge:
      1. Create a new `create` function in the service file. It'll take the body of the post request as a parameter, which will be the body that we’re getting in the controller.
      2. It needs to create a new profile and add it to the `profiles` array.
      3. Each profile has an `id`, `name`, and `description`.
      4. Remember, the backend is where you’ll typically create IDs for new resources, not the client. You’ll notice that in the original array, we’re creating unique IDs. We’ll need to create a new unique id for our new profile. Notice how we’re using `randomUUID()` to do that.
      5. We’ll also want to return the new profile we’ve created to the controller, and have that return it as a response to the client.
      6. You should receive a response from your Nest app with the unique `id`, `name`, and `description` if you’ve done this successfully. It'll have a status code of 201 and have the same response body as when we tried to retrieve a single profile.

    Testing:
      1. Call the bash script with `bash post.sh` in the terminal to create a new profile. Feel free to change the name and description in the file to whatever you please.
      2. After you get the response from the POST request, go ahead and double check that it exists by making a GET request of the profile now that you have the ID. You can just make the GET request the same way we did before - just type out the URL with the id to get your newly created profile.
    */
    return this.profilesService.createOne(createProfileDto);
  }

  // PUT /profiles/:id
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    /*
    Challenge:
      1. Add an `update` method in the service layer. It should take an `id` and the updated profile object we get from the body. That object will contain a `name` and `description`.
      2. It should find the matching profile based on the id.
      3. It should update that profile in the profiles array.
      4. It should return the updated profile.
      5. Then, call that function in your PUT controller method and return the result.
    */
    return this.profilesService.updateOne(id, updateProfileDto);
  }

  // DELETE /profiles/:id
  @Delete(':id')
  /* 
    Challenge:
      1. Change HttpStatus.OK to use the proper property on HttpStatus that serves back a status code of 204 back to the client
    */
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return id;
  }
}
