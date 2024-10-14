const team = {
  _players: [
    {
      firstName: "Dan",
      lastName: "Brown",
      age: 21,
    },
    {
      firstName: "John",
      lastName: "Doe",
      age: 19,
    },
    {
      firstName: "Jane",
      lastName: "Blue",
      age: 18,
    },
  ],
  _games: [
    {
      opponent: "Yaks",
      teamPoints: 3,
      opponentPoints: 2,
    },
    {
      opponent: "Leeds",
      teamPoints: 1,
      opponentPoints: 5,
    },
    {
      opponent: "Oxford",
      teamPoints: 4,
      opponentPoints: 2,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(newPlayer);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let newGame = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(newGame);
  },
};
team.addGame("Titans", 100, 98);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);
console.log(team.games);
