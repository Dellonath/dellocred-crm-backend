import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ClientsModule } from "./resources/clients/clients.module";
import { LoansModule } from "./resources/loans/loans.module";
import { MarketingModule } from "./resources/marketing/marketing.module";
import { UsersModule } from "./resources/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    UsersModule,
    ClientsModule,
    MarketingModule,
    LoansModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
