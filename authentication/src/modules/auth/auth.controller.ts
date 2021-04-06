import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ValidationPipe } from 'src/lib/pipes/validation.pipe';
import { SignInDTO, SignUpDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('SIGNIN WITH EMAIL')
  @ApiOperation({
    description: 'Authenticate user with email and password',
  })
  @HttpCode(HttpStatus.OK)
  @ApiBadRequestResponse({ description: 'Bad Request!!' })
  @ApiOkResponse({ description: 'OK' })
  @Post('/signin/number')
  signinWithEmail(@Body(new ValidationPipe()) { email, password }: SignInDTO) {
    return true;
  }

  @ApiTags('SIGNUP WITH EMAIL')
  @ApiOperation({
    description: 'Authenticate user with email and password',
  })
  @HttpCode(HttpStatus.OK)
  @ApiBadRequestResponse({ description: 'Bad Request!!' })
  @ApiOkResponse({ description: 'OK' })
  @Post('/signup/email')
  signupWithEmail(@Body(new ValidationPipe()) { email, password }: SignUpDTO) {
    return true;
  }
}
