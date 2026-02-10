import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Timesheet } from '../../timesheets/entities/timesheet.entity';
import { Task } from '../../tasks/entities/task.entity';
import { GPSLocation } from '../../gps-locations/entities/gps-location.entity';
import { Message } from '../../messages/entities/message.entity';
import { Profile } from '../../profiles/entities/profile.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @OneToMany(() => Timesheet, timesheet => timesheet.user)
    timesheets: Timesheet[];

    @OneToMany(() => Task, task => task.user)
    tasks: Task[];

    @OneToMany(() => GPSLocation, gpsLocation => gpsLocation.user)
    gpsLocations: GPSLocation[];

    @OneToMany(() => Message, message => message.user)
    messages: Message[];

    @OneToMany(() => Profile, profile => profile.user)
    profiles: Profile[];
}