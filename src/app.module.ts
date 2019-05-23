import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/book.entity';
import { Entidade } from './books/entidade.entity';
import { Cfgenti } from './cfgenti/cfgenti.entity';
import { CfgentiModule } from './cfgenti/cfgenti.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: '172.27.10.173',
      username: 'agritrade',
      password: 'superagritrade',
      port: 1521,
      sid: 'xe',
      synchronize: true,
      logging: true,
      entities: [Book, Entidade, Cfgenti],
    }),
    BooksModule,
    CfgentiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
