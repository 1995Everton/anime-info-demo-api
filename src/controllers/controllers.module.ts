import { Module } from '@nestjs/common';
import { NarutoController } from './naruto/naruto.controller';
import { NarutoService } from './naruto/naruto.service';

@Module({
    imports: [],
    controllers: [
        NarutoController
    ],
    providers: [
        NarutoService
    ],
})
export class ControllersModule {}
