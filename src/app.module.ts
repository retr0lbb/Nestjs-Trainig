import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { CoursesManager } from './courses-manager/courses-manager';

@Module({
  imports: [],
  controllers: [AppController, CoursesController],
  providers: [AppService, CoursesManager],
})
export class AppModule {}
