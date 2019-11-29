import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NgerSsoModule } from "./index";

@Module({
    imports: [
        NgerSsoModule
    ]
})
export class AppModule { }

export async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.listen(9000)
}

bootstrap();