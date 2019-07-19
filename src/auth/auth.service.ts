import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
  ) { }

  async login(username, password) {
    const payload = { username: username, password: password }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
