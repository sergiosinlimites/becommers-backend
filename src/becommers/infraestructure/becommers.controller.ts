import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { UpdateBecommerDto } from '../application/BecommersDTOs';

@Controller('becommers')
export class BecommersController {
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getBecommer(@Param('id', ParseIntPipe) id: number) {
    console.log(`el id es ${id}`);
    return { id: id, nombre: 'Sergio' };
  }

  @Put('/:id')
  updateBecommer(@Param('id') id: number): Promise<UpdateBecommerDto> {
    console.log(id);
    return Promise.resolve<any>('el id es ' + id);
  }
}
