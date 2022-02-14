import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
})
export class BoardsComponent implements OnInit {
  boards: any = [];

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.boardService.readAll().subscribe((resp) => {
      this.boards = resp;
      console.log(this.boards);
    });
  }

  readProducts(): void {
    this.boardService.readAll().subscribe((resp) => console.log(resp));
  }
}
