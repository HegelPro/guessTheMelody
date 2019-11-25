export interface ILobby {
    id: string,
    name: string,
    maxPlayers: number,
    minPlayers: number,
    withPassword: boolean,
    players: any[],
}

export interface ILobbyOptions {
    name?: string,
    maxPlayers?: number,
    minPlayers?: number,
    password?: string,
}