import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Public } from 'src/public.decorator';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.gaurd';
import { LocalAuthGuard } from './local.auth.gaurd';

@Controller('auth')
export class AuthController {
  [x: string]: any;
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @Public()
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
