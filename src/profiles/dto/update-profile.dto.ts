import { IsString, IsNotEmpty } from 'class-validator';
export class UpdateProfileDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  // Add an exclamation mark (!) after the property names. This tells TypeScript: "Trust me, this property will be assigned by the framework at runtime."
  @IsString()
  description!: string;
}
