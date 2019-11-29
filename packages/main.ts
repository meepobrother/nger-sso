import { NestFactory } from '@nestjs/core';
import { NgerSsoApiModule } from '@nger/sso.api';

export async function bootstrap() {
    const app = await NestFactory.create(NgerSsoApiModule)
    app.listen(9000)
}

bootstrap();