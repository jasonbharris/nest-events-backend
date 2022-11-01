import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CreateEventDto } from 'src/create-event.dto';
import { UpdateEventDto } from 'src/update-event.dto';
import { Event } from 'src/event.entity';

@Controller('/events')
export class EventsController {
  private events: Event[] = [];

  @Get()
  findAll() {
    return this.events;
  }
  @Get(':id')
  findOne(@Param('id') id) {
    const event = this.events.find(event => event.id === parseInt(id))
    return event;
  }
  @Post()
  create(@Body() input: UpdateEventDto) {
    const event = {
      ...input,
      when: new Date(input.when),
      id: this.events.length + 1
    };
    this.events.push(event);
    return event;
  }
  @Patch(':id')
  update(@Param('id') id, @Body() input: UpdateEventDto) {
    const index = this.events.findIndex(event => event.id === parseInt(id));
    this.events[index] ={
      ...this.events[index],
      ...input,
      when: input.when ? new Date(input.when) : this.events[index].when
    }
  }
  @Delete(':id')
  remove(@Param('id') id) {}
}
