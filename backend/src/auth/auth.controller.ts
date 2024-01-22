import { Controller, Post } from '@nestjs/common';
import { LoginService } from './login/login.service';

@Controller('auth')
export class AuthController {
  constructor(private loginService: LoginService) {}
  @Post('login')
  login() {
    return this.loginService.login();
  }
}
