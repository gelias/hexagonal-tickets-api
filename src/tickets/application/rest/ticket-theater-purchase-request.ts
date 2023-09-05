import { IsNumber } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class TicketTheaterPurchaseRequest {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  adults: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  kids: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  students: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  seniors: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  weekday: string;
}
