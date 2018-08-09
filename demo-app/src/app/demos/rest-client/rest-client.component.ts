import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest-client',
  templateUrl: './rest-client.component.html',
  styleUrls: ['./rest-client.component.css']
})
export class RestClientComponent implements OnInit {

  constructor(private http: HttpClient) { }

  getData() {
    // return this.http.get('https://www.npr.org/feeds/1019/feed.json').subscribe(data => console.log(data));
    return this.http.get('http://localhost:8989/assets/products.json', {'observe': 'response'})
              .subscribe(data => console.log(data.headers.get('content-type'),
                                console.log(data.url)));
  }

  ngOnInit() {
    this.getData();
  }

}
