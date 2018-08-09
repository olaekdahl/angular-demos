import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-rest-client',
  templateUrl: './rest-client.component.html',
  styleUrls: ['./rest-client.component.css']
})
export class RestClientComponent implements OnInit {

  constructor(private http: HttpClient) { }

  getData() {
    //return this.http.get('https://www.npr.org/feeds/1019/feed.json').subscribe(data => console.log(data));
    return this.http.get('http://localhost:8989/assets/products.json', {'observe': 'response'})
              .subscribe(data => console.log(data.headers.get('content-type'),
                                 console.log(data.url),
                                 console.log(data.body)));
  }

  onSubmit(form) {
    console.log("Submitted:" +
      JSON.stringify(form.form.value, null, 2));

      let headers = new HttpHeaders({
        'X-custom-header': 'My stuff',
        'Authorization': 'my-auth-token'
        })
      this.http.post('http://httpbin.org/post', form.form.value, {"headers":headers} ).subscribe(data => console.log(data));
  }

  ngOnInit() {
    this.getData();
  }

}
