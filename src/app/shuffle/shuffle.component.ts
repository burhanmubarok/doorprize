import { Component, OnInit } from '@angular/core';
import { emp } from './../_models/iemp';

enum Status {
  prepare = 0,
  start = 1,
  pause = 2,
  resume = 3,
  stop = 4,
  finish = 5
}

@Component({
  selector: 'app-shuffle',
  templateUrl: './shuffle.component.html',
  styleUrls: ['./shuffle.component.css']
})
export class ShuffleComponent implements OnInit {
  shuffler: any;
  status = Status[0];
  index: number;
  winner: string;
  theWinners = [];
  emp = emp;
  image: string;

  constructor() { }

  ngOnInit() {
    this.prepare();
  }

  prepare() {
    this.status = Status[0];
    this.winner = '???';
    this.image = './../../assets/img/avatar/x.jpg';
  }

  restart() {
    this.prepare();
  }

  start() {
    this.status = Status[1];
    this.shuffler = setInterval(() => { this.shuffle(this.emp.length); }, 1);
  }

  stop() {
    this.status = Status[5];
    clearInterval(this.shuffler);
    this.theWinners.push(this.winner);
    this.image = './../../assets/img/avatar/' + this.winner + '.webP';
  }

  shuffle(n: number): void {
    this.index = Math.floor(Math.random() * n - 0) + 0;
    this.winner = this.emp[this.index];
  }

}
