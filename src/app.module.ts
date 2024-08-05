import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "aws-0-eu-central-1.pooler.supabase.com",
      port: 6543,
      username: "postgres.unjmbiabfmcsnrswuzhu",
      password: "K!HuSTZBKB2ApN",
      database: "postgres",
      autoLoadEntities: true,
      synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
