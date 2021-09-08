import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-rxjs';

  ngOnInit(): void {
    let observable = Observable.create((observer:any) => {
      observer.next('Hello World!')
      observer.next('I am number 1')
      observer.next('I am number 2')
      setInterval(() => {
        observer.next('Random Async log message')
      }, 2000)
      // observer.error('I am number 3')
      // observer.complete('I am number 4')
      observer.next('I am number 5')
    });

    observable.subscribe((message:any) => {
      console.log(message);
    });
  }
}
