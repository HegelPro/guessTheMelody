import initSocket from './init'

import {
  SOCKETS,
  PORT,
} from '../config'


export const lobbySocket = initSocket({
  port: PORT,
  path: SOCKETS.lobby.path,
})

export const gameSocket = initSocket({
  port: PORT,
  path: SOCKETS.game.path,
})