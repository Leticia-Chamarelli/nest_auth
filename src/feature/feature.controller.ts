import { Controller, Get, UseGuards } from '@nestjs/common';
import { CurrentUserDto } from 'src/auth/curent-user.dto';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('feature')
export class FeatureController {
    @Get('public')
    getPublicFeature() {
        return 'This is a public feature';
    }

    @Get('private')
    @UseGuards(JwtAuthGuard)
    getPrivatefeature(@CurrentUser() user: CurrentUserDto) {
        return `This is a private feature for user ${user.username}`;
    }
}
