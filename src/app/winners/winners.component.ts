import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
