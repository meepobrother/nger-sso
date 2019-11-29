import { Controller, Get } from "@nestjs/common";

@Controller()
export class VerifySsoTokenController {
    @Get()
    verifySsoToken() { 
        return `verify sso token`
    }
}