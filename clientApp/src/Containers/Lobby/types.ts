export interface ILobby {
    id: string,
    maxPlayers: number,
    minPlayers: number,
    password: string,
    players: any[],
}