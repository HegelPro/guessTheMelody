import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import Typography from '@material-ui/core/Typography'

import { TagContainer } from '../TagContainer'
import { ITag } from '../Tag'
import { baseUrl, routes } from '../../api/url'
import { postRequest } from '../../helpers'


export const SongAddForm = () => {
  const [songName, setSongName] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [urlName, setUrlName] = useState('')
  const [tags, setTags] = useState<ITag[]>([])

  return (
    <FormGroup>
      <Typography variant='h1'>Add song</Typography>
      <TextField
        label='Song Name'
        value={songName}
        onChange={({target: {value}}) => setSongName(value)}
      />
      <TextField
        label='Author'
        value={authorName}
        onChange={({target: {value}}) => setAuthorName(value)}
      />
      <TextField
        label='Url'
        value={urlName}
        onChange={({target: {value}}) => setUrlName(value)}
      />
      <TagContainer
        tags={tags}
        onAddTag={(tag: ITag) => {
          if (!tags.includes(tag)) {
            const newTags = tags.concat()
            newTags.push(tag)
            setTags(newTags)
          }
        }}
        onDeleteTag={(tag: ITag) => {
          const newTags = tags.filter(tagElement => tagElement !== tag)
          setTags(newTags)
        }}
      />
      <input type="file" name="image" id='kek' />
      <Button onClick={() => {
        postRequest(`${baseUrl}${routes.songs.add}`, {
          songName,
          authorName,
          urlName,
          tags,
        }).then((song: any) => {
          const data = new FormData()
          const input = document.querySelector('#kek') as any
          data.append('image', input.files[0])
          fetch(`${baseUrl}${routes.songs.upload}/${song._id}`, {
            method: 'POST',
            body: data,
          })
        })
        // Отправить картинку !!
        
      }}>Click</Button>
    </FormGroup>
  )
}