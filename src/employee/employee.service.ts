import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schemas/employee.schema';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Technology } from '../technology/schema/technology.schema';
import { TechnologyModule } from '../technology/technology.module';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name)
    private readonly employeeModel: Model<Employee>,
    @InjectModel(Technology.name)
    private readonly technologyModel: Model<TechnologyModule>,
  ) {}

  async create(employee: CreateEmployeeDto): Promise<Employee> {
    if (employee.skills) {
      const techIds = employee.skills.map((skill) => {
        return skill.technologyId;
      });
      const foundTech = await this.technologyModel.findById(techIds).exec();
      const test = 'stop';
    }
    return this.employeeModel.findOneAndUpdate(
      {
        abbreviation: employee.abbreviation,
      },
      employee,
      { upsert: true },
    );
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }
}
