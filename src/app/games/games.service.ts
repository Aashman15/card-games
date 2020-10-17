import {Injectable} from '@angular/core';
import {Card, CardType} from './games.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private cards: Card[] =
    [
      // 13 Clubs
      new Card(CardType.Club, 'A'),
      new Card(CardType.Club, 2),
      new Card(CardType.Club, 3),
      new Card(CardType.Club, 4),
      new Card(CardType.Club, 5),
      new Card(CardType.Club, 6),
      new Card(CardType.Club, 7),
      new Card(CardType.Club, 8),
      new Card(CardType.Club, 9),
      new Card(CardType.Club, 10),
      new Card(CardType.Club, 'J'),
      new Card(CardType.Club, 'Q'),
      new Card(CardType.Club, 'K'),

      // 13 Spades
      new Card(CardType.Spade, 'A'),
      new Card(CardType.Spade, 2),
      new Card(CardType.Spade, 3),
      new Card(CardType.Spade, 4),
      new Card(CardType.Spade, 5),
      new Card(CardType.Spade, 6),
      new Card(CardType.Spade, 7),
      new Card(CardType.Spade, 8),
      new Card(CardType.Spade, 9),
      new Card(CardType.Spade, 10),
      new Card(CardType.Spade, 'J'),
      new Card(CardType.Spade, 'Q'),
      new Card(CardType.Spade, 'K'),

      // 13 Hearts
      new Card(CardType.Heart, 'A'),
      new Card(CardType.Heart, 2),
      new Card(CardType.Heart, 3),
      new Card(CardType.Heart, 4),
      new Card(CardType.Heart, 5),
      new Card(CardType.Heart, 6),
      new Card(CardType.Heart, 7),
      new Card(CardType.Heart, 8),
      new Card(CardType.Heart, 9),
      new Card(CardType.Heart, 10),
      new Card(CardType.Heart, 'J'),
      new Card(CardType.Heart, 'Q'),
      new Card(CardType.Heart, 'K'),

      // 13 Diamonds
      new Card(CardType.Diamond, 'A'),
      new Card(CardType.Diamond, 2),
      new Card(CardType.Diamond, 3),
      new Card(CardType.Diamond, 4),
      new Card(CardType.Diamond, 5),
      new Card(CardType.Diamond, 6),
      new Card(CardType.Diamond, 7),
      new Card(CardType.Diamond, 8),
      new Card(CardType.Diamond, 9),
      new Card(CardType.Diamond, 10),
      new Card(CardType.Diamond, 'J'),
      new Card(CardType.Diamond, 'Q'),
      new Card(CardType.Diamond, 'K'),
    ];

  constructor() {
  }

  shuffle$ = (array: any[]): any[] => {

    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  getCards$ = (): Card[] => {
    return this.cards.slice();
  };
}
