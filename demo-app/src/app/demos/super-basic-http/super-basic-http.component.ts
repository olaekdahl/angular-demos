import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }  from 'rxjs';

@Component({
  selector: 'app-super-basic-http',
  templateUrl: './super-basic-http.component.html',
  styleUrls: ['./super-basic-http.component.css']
})
export class SuperBasicHttpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://swapi.co/api/people/1/').subscribe(result => console.log(result));
  }

}
