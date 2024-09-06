import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { UpdateUserDto } from '../application/user.dto';
import { BecommerService } from '../application/becommer.service';

@Controller('becommers')
export class BecommersController {
  constructor(private becommersService: BecommerService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getBecommer(@Param('id', ParseIntPipe) id: number) {
    return this.becommersService.getBecommer(id);
  }

  @Put('/:id')
  updateBecommer(@Param('id') id: number): Promise<UpdateUserDto> {
    console.log(id);
    return Promise.resolve<any>('el id es ' + id);
  }
}
