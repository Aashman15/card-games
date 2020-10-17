import {Component, OnInit} from '@angular/core';
import {GamesService} from '../games.service';
import {Card, Gender, Player} from '../games.model';

@Component({
  selector: 'app-show-faras',
  templateUrl: './show-faras.component.html',
  styleUrls: ['./show-faras.component.css']
})
export class ShowFarasComponent implements OnInit {

  players: Player[] = [
    new Player(1, 'Aashman', 'Thing', Gender.Male,
      +9779828594456, 'aashmanthing2@gmail.com',
      'Bafal, Kathmandu, Nepal'),
    new Player(2, 'Rojina', 'Tamang', Gender.Female,
      +9779828594456, 'rojinathing2@gmail.com',
      'Bafal, Kathmandu, Nepal')
  ];
  cards: Card[];

  constructor(private gamesService: GamesService) {
  }

  ngOnInit(): void {
    this.cards = this.gamesService.shuffle$(this.gamesService.getCards$());
  }

  shuffleCards$ = () => {
    this.cards = this.gamesService.shuffle$(this.cards);
  };
}
