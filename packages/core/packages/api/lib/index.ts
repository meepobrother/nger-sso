import { Module } from "@nestjs/common";
import { DoLoginController } from './controllers/doLogin.controller';
import { LoginController } from './controllers/login.controller';
import { VerifySsoTokenController } from './controllers/verifySsoToken.controller';
@Module({
    controllers: [
        DoLoginController,
        LoginController,
        VerifySsoTokenController
    ]
})
export class NgerSsoApiModule { }