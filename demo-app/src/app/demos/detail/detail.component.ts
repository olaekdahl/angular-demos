import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  pid: string;
  constructor(private activeRoute: ActivatedRoute, private router: Router) { }


  onClick(){
    console.log('inside onClick...');
    this.router.navigate(['/welcome'])
  }

  ngOnInit() {
    this.pid = this.activeRoute.snapshot.paramMap.get('pid');
  }

}
