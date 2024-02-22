import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                // type: 'postgres',
                // host: configService.get('POSTGRES_HOST'),
                // port: configService.get('POSTGRES_PORT'),
                // username: configService.get('POSTGRES_USER'),
                // password: configService.get('POSTGRES_PASSWORD'),
                // database: configService.get('POSTGRES_DB'),
                // entities: [
                //     __dirname + '/../**/*.entity.ts',
                // ],
                // synchronize: false,
                // autoLoadEntities: true

				type: 'mysql',
                host: configService.get('MYSQL_HOST'),
                port: configService.get('MYSQL_PORT'),
                username: configService.get('MYSQL_USER'),
                password: configService.get('MYSQL_PASSWORD'),
                database: configService.get('MYSQL_DB'),
                entities: [
                    __dirname + '/../**/*.entity.ts',
                ],
                synchronize: false,
                autoLoadEntities: true
            })
			
        })
	]

})
export class DatabaseModule {
}
