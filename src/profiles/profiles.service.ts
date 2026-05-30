import { Body, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './profiles.interface';

@Injectable()
export class ProfilesService {
  private profiles: Profile[] = [
    {
      id: randomUUID(),
      name: 'Brianna Watts',
      description: `Looking for someone to merge with my heart. I’m a full-stack romantic who refactors my feelings until they pass all tests. Bonus points if you can debug my issues while we pair program over coffee. Let’s commit to something beautiful together.`,
    },
    {
      id: randomUUID(),
      name: 'Jasper Quinn',
      description: `Seeking a partner in crime to compile my heart. Must be comfortable with the terminal because I only speak fluent bash. Swipe right if you can appreciate a good kernel panic every now and then.`,
    },
    {
      id: randomUUID(),
      name: 'Leo Park',
      description: `You think you know VIM? Try Neovim. I'll make your modal dreams come true. Want to escape the matrix and explore the perfect keyboard shortcut for love?`,
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    // if a given id matches any existing profiles IDs - return this profile
    return this.profiles.find((p) => p.id === id);
  }

  createOne(body: CreateProfileDto) {
    const newProfile = {
      id: randomUUID(),
      name: body.name,
      description: body.description,
    };
    this.profiles.push(newProfile);
    return newProfile;
  }

  updateOne(id: string, body: UpdateProfileDto) {
    // find if this profile exists
    const foundProfile: Profile | undefined = this.profiles.find(
      (p) => p.id === id,
    );
    // through index of so we track where it's in arra
    // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
    let indexOf: number = -1;
    if (foundProfile) {
      indexOf = this.profiles.indexOf(foundProfile);
    }

    // just return an empty object where there isn't a match
    // use type assertions for Profile | {} case!
    let updatedProfile = <Profile>{};

    // if found index, update it
    if (indexOf !== -1) {
      updatedProfile = {
        id: id,
        name: body.name,
        description: body.description,
      };
      // reassign through accessing by index directly
      // use spread operator to assign values directly instead of reference
      this.profiles[indexOf] = { ...updatedProfile };
    }

    return updatedProfile;
  }

  deleteOne(id: string): void {
    const indexOf: number = this.profiles.findIndex((p) => p.id === id);

    if (indexOf !== -1) {
      // only splice array when item is found
      this.profiles.splice(indexOf, 1); // 2nd parameter means remove one item only
    }
  }
}
