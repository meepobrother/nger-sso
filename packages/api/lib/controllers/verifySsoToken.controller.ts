import { Controller, Get } from "@nestjs/common";

@Controller()
export class VerifySsoTokenController {
    @Get()
    verifySsoToken() { }
}