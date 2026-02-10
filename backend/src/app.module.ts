import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TimesheetModule } from './modules/timesheet/timesheet.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { GPSModule } from './modules/gps/gps.module';
import { CommunicationModule } from './modules/communication/communication.module';
import { ProfileModule } from './modules/profile/profile.module';
import { OvertimeModule } from './modules/overtime/overtime.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env', }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'time_bandit',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    AuthModule,
    UsersModule,
    TimesheetModule,
    TasksModule,
    GPSModule,
    CommunicationModule,
    ProfileModule,
    OvertimeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}