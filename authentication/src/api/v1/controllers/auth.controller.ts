import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  ConflictException,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ValidationPipe } from '../lib/pipes/validation.pipe';
import { SignInDTO, SignUpDTO } from '../lib/dto/auth.dto';
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('SIGNIN WITH EMAIL')
  @ApiOperation({
    description: 'Authenticate user with email and password',
  })
  @HttpCode(HttpStatus.OK)
  @ApiBadRequestResponse({ description: 'Bad Request!!' })
  @ApiOkResponse({ description: 'OK' })
  @Post(['/signin/email', '/signin'])
  async signinWithEmail(
    @Body(new ValidationPipe()) { email, password }: SignInDTO,
  ) {
    await this.authService.signin();
    return true;
  }

  @ApiTags('SIGNUP WITH EMAIL')
  @ApiOperation({
    description: 'Authenticate user with email and password',
  })
  @HttpCode(HttpStatus.OK)
  @ApiBadRequestResponse({ description: 'Bad Request!!' })
  @ApiOkResponse({ description: 'OK' })
  @Post(['/signup/email', '/signup'])
  async signupWithEmail(
    @Body(new ValidationPipe()) { email, password }: SignUpDTO,
  ) {
    try {
      if (await this.authService.existByEmail(email)) {
        throw new ConflictException('this email already used by another user');
      }
      const auth = await this.authService.signupWithEmail(email, password);
      return auth;
    } catch (error) {
      throw error;
    }
  }
}
