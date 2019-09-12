import * as moment from 'moment';
import {
  ExceptionFilter,
  ArgumentsHost,
  Catch,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class ExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');

    // if (exception instanceof HttpException) {
    //   const status = exception.getStatus();
    //   console.log('status', status)
    //   console.log('exception', exception)
    //   response
    //     .code(status)
    //     .header('Content-Type', 'application/json; charset=utf-8')
    //     .send({
    //       ...exception,
    //       // timestamp,
    //       path: request.url
    //     });
    // }
    response
      .code(HttpStatus.INTERNAL_SERVER_ERROR)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({
        timestamp,
        path: `${request.raw.method} ${request.raw.url}`,
      });
  }
}
