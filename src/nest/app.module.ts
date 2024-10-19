import { Module } from '@nestjs/common';
import { ProjetoModule } from 'src/infrastructure/module/projeto.module';

@Module({
  imports: [ProjetoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
