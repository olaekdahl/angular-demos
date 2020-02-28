import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animations } from '../../shared/animations';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
  // ,animations: [Animations.page]
})
export class DetailComponent implements OnInit {
  // @HostBinding('@routeAnimation')
  // anyProperty = 'anything';
  
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
