import { Controller, Post } from "@nestjs/common";

@Controller()
export class DoLoginController {
    @Post()
    doLogin() { 
        return `do login`
    }
}
