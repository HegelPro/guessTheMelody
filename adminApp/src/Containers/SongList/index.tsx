import React, { useState, useEffect } from 'react'

import { baseUrl, routes } from '../../api/url'
import { ISong } from '../../models/song'
import { Link } from 'react-router-dom'


export const SongList = () => {
  const [songList, setSongList] = useState<ISong[]>([])
  useEffect(() => {
    fetch(baseUrl + routes.songs.base)
      .then(res => res.json())
      .then(songs => setSongList(songs))
  }, [])
  

  return (
    <React.Fragment>
      {songList.map(song => (
        <div key={song._id}>
          {song.name}
          <Link to={`${routes.songs.edit}/${song._id}`}>edit</Link>
        </div>
      ))}
    </React.Fragment>
  )
}