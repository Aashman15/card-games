export enum CardType {
  Club,
  Spade,
  Heart,
  Diamond
}

export enum Gender {
  Male,
  Female,
  Other
}

export class Card {
  constructor(public type: CardType, public value: any) {
  }
}

export class Player {
  constructor(public id: number, public firstName: string, public lastName: string,
              public gender: Gender, public phoneNumber: number, public email: string,
              public address: string) {
  }
}
