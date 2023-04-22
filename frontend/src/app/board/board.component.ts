import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;
  player1: number;
  player2: number;
  round: number;

  constructor() {}

  ngOnInit() {
    this.newGame();
    this.player1 = 0;
    this.player2 = 0;
    this.round = 1;
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
    this.round++;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  get player1Or2() {
    if (this.round % 2 === 1) {
      return 'P1';
    }

    return 'P2';
  }

  get playerWin() {
    if (this.winner === 'P1') {
      return 'P1';
    }
    if (this.winner === 'P2') {
      return 'P2';
    }

    return '';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
    if (this.winner === 'X') {
      if (this.round % 2 === 1) {
        this.player1++;
        this.winner = 'P1';
      } else {
        this.player2++;
        this.winner = 'P2';
      }
    } else if (this.winner === 'O') {
      if (this.round % 2 === 0) {
        this.player1++;
        this.winner = 'P1';
      } else {
        this.player2++;
        this.winner = 'P2';
      }
    }
  }

  calculateWinner() {
    const wLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < wLines.length; i++) {
      const [a, b, c] = wLines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
