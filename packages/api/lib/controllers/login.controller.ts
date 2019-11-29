import { Controller, Get } from "@nestjs/common";

@Controller()
export class LoginController {
    @Get('login')
    login() {
        return `login`
    }
}