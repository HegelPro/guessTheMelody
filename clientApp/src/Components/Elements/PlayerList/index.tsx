import React from 'react'

import { IPlayer } from '../../../Containers/Player/types'


interface IProps {
  players: IPlayer[]
}

const PlayerList = ({
  players,
}: IProps) => {
  return (
    <div>
      {players.map(player => <div key={player.account.id}>{player.account.name}</div>)}
    </div>
  )
}

export default PlayerList
