import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from '../mocks/books.mock';
import { Book } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  books = BOOKS;

  getBooks(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.books);
    });
  }

  getBook(bookID): Promise<any> {
    const id = Number(bookID);
    return new Promise(resolve => {
      const book = this.books.find(b => b.id === id);
      if (!book) {
        throw new HttpException('Book not exists', 404);
      }
      resolve(book);
    });
  }

  addBook(newBook): Promise<any> {
    return new Promise(resolve => {
      this.books.push(newBook);
      resolve(this.books);
    });
  }

  deleteBook(bookId): Promise<any> {
    const id = Number(bookId);
    return new Promise(resolve => {
      const index = this.books.findIndex(b => b.id === id);
      console.log(index);
      if (index === -1) {
        throw new HttpException('Book does not exists', 404);
      }
      this.books.splice(index, 1);
      resolve(this.books);
    });
  }

  constructor(@InjectRepository(Book) 
              private readonly bookRepository: Repository<Book>) { }

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

}
