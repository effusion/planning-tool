import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { DatabaseConnectionName } from '../app.module';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TechnologyModule } from '../technology/technology.module';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Employee.name,
          schema: EmployeeSchema,
          collection: 'employees',
        },
      ],
      DatabaseConnectionName,
    ),
    TechnologyModule,
  ],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
