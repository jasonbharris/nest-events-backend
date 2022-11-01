import { CreateEventDto } from 'src/create-event.dto';
import {PartialType } from '@nestjs/mapped-types';

export class UpdateEventDto extends PartialType(CreateEventDto){}
