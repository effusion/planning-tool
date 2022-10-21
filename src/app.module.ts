import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';
import { TechnologyModule } from './technology/technology.module';

export const DatabaseConnectionName = 'planning-tool';

@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    // }),
    ConfigModule.forRoot({ isGlobal: true }),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   connectionName: DatabaseConnectionName,
    //   useFactory: async (config: ConfigService) => ({
    //     uri: config.get<string>('DB_URL'),
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   }),
    //   inject: [ConfigService],
    // }),
    MongooseModule.forRoot(process.env.DB_URL),
    EmployeeModule,
    TechnologyModule,
  ],
})
export class AppModule {}
