import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  books;

  constructor(private bookService: BookService) { }

  ngOnInit() {

  }

  searchBooks(search) {
    this.bookService.searchBook(search)
      .subscribe((res: any) => {
        this.books = res.items;
        console.log(this.books, 'SELECTED');
      })
  }
}
