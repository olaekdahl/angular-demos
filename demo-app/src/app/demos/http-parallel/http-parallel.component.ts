import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, zip, forkJoin, throwError } from 'rxjs';

@Component({
  selector: 'app-http-parallel',
  templateUrl: './http-parallel.component.html',
  styleUrls: ['./http-parallel.component.css']
})
export class HttpParallelComponent implements OnInit {
  data = {};
  personURL = 'https://swapi.co/api/people/1/';
  planetURL = 'https://swapi.co/api/planets/1/'; //Tatooine
  personData;
  planetData;

  //output = zip(this.person, this.planet);

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.personData = this.http.get(this.personURL);
    this.planetData = this.http.get(this.planetURL);
    zip(this.personData, this.planetData).subscribe(([person, planet]) => {
      this.data = person;
      this.data += planet;
      //console.log(person);
      // console.log(planet);
    });

    // forkJoin([this.personData, this.planetData]).subscribe(results => {
    //   // results[0] is our character
    //   // results[1] is our character homeworld
    //   results[0].homeworld = results[1];
    //   this.data = results[0];
    // },
    // error => {
    //   console.error(`Oh no! ${error}`);
    //   return throwError(error); 
    // });
  }
}
