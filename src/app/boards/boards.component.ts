import { Component, OnInit } from '@angular/core';
import { faFaceGrinStars, faStar } from '@fortawesome/free-solid-svg-icons';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
})
export class BoardsComponent implements OnInit {

  query: any;
  iconCircle = faFaceGrinStars;
  iconStart = faStar;
  boards: Array<any> = [];
  boardsFavorites: Array<any> = [];

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.boards = [];
    this.boardsFavorites = [];
    this.readBoards();
  }

  searchBoards(form: any): void {
    if (form.form.value.query == undefined) {
      this.ngOnInit();
    } else {
      this.boardService.search(form.form.value.query).subscribe((resp: any) => {
        this.boards = [];
        this.boardsFavorites = [];
        resp.boards.forEach((board: any) => {
          if (board.starred == true) {
            this.boardsFavorites.push(board);
          } else {
            this.boards.push(board);
          }
        });
      });
    }
  }

  readBoards(): void {
    this.boardService.readAll().subscribe((resp) => {
      resp.forEach((board: any) => {
        if (board.starred == true) {
          this.boardsFavorites.push(board);
        } else {
          this.boards.push(board);
        }
      });
    });
  }
  starredList(id: any): void {
    this.boardService.starredGet().subscribe((resp) => {
      resp.forEach((board: any) => {
        if (board.idBoard == id) {
          this.starredDrop(board.id);
        }
      });
    });
  }

  starredNew(id: any): void {
    this.boardService.starredCreate(id).subscribe((resp) => {
      this.ngOnInit();
    });
  }

  starredDrop(id: any): void {
    this.boardService.starredDelete(id).subscribe((resp) => {
      this.ngOnInit();
    });
  }
}
