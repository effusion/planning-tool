import { EmployeeService } from './employee.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Employee } from './schemas/employee.schema';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    await this.employeeService.create(createEmployeeDto);
  }

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }
}
