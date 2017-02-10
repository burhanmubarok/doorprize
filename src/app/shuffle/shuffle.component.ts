import { Component, OnInit } from '@angular/core';

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
  looper: any;
  status = Status[0];
  index: number;
  winner: string;
  theWinners = [];

  constructor() { }

  ngOnInit() {
    this.prepare();
  }

  prepare() {
    this.status = Status[0];
    // this.looper = setInterval(() => { this.shuffle(); }, 500);
  }

  restart() {
    this.prepare();
  }

  start() {
    clearInterval(this.looper);
    this.status = Status[1];
    this.looper = setInterval(() => { this.shuffle(); }, 1);
  }

  stop() {
    this.status = Status[5];
    clearInterval(this.looper);
    this.theWinners.push(this.winner);
  }

  shuffle(): void {
    let emp = ['Doni', 'Dita', 'Darma', 'Diti', 'dara', 'dona', 'dito', 'desi', 'deso'];
    this.index = Math.floor(Math.random() * emp.length - 0) + 0;
    this.winner = emp[this.index];
  }

}
