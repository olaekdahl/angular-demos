import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  pid: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.pid = this.route.snapshot.paramMap.get('pid');
  }

}
