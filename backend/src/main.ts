import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionsLoggerFilter } from './helpers/helper';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const PORT = process.env.PORT || 3001;

async function bootstrap() {
	const app = await NestFactory.create(AppModule,
		{
			logger: ['error', 'warn', 'log']
		}
	);

	const config = new DocumentBuilder()
		.setTitle('API')
		.setVersion('1.0')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api/v1', app, document);

	app.useGlobalPipes(new ValidationPipe({
		transform: true,
	}));
	const { httpAdapter } = app.get(HttpAdapterHost);
	app.useGlobalFilters(new ExceptionsLoggerFilter(httpAdapter));
	app.enableCors();
	app.setGlobalPrefix('api/v1');
	await app.listen(PORT);
}
bootstrap().then(() => console.log('Service listening 👍: ', PORT));
