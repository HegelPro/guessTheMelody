export interface ILobby {
    id: number,
    maxPlayers: number,
    minPlayers: number,
    password: string,
    players: any[],
}