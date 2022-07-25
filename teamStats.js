const team={
  _players:[
    {
      firstName:'Bogdan',
      lastName:'Posipaka',
      age:17
    },
    {
      firstName:'Kostya',
      lastName:'Baborab',
      age:18
    },
    {
      firstName:'Denchi',
      lastName:'Strawberry',
      age:18
    }
  ],
  _games:[
    {
      opponent:'KB',
      teamPoints:15,
      opponentPoints:0
    },
    {
      opponent:'IT',
      teamPoints:15,
      opponentPoints:0
    },
    {
      opponent:'Ryan Gosling',
      teamPoints:0,
      opponentPoints:15
    }
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(newFirstName,newLastName,newAge){
    let player={firstName:newFirstName,
    lastName:newLastName,
    age:newAge};
    this.players.push(player);
  },
  addGame(newOpponent,newTeamPoints,newOpponentPoints){
    let game={
      opponent:newOpponent,
      teamPoints:newTeamPoints,
      opponentPoints:newOpponentPoints
    };
    this.games.push(game);
  }
}
team.addPlayer('Bugs','Bunny',76);
console.log(team.players);
team.addGame('Titans',100,98);
console.log(team.games);
