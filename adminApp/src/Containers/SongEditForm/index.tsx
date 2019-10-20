import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'

import { TagContainer } from '../TagContainer'
import { ITag } from '../Tag'
import { baseUrl, routes } from '../../api/url'

import { ISong } from '../../models/song'

export const SongEditForm = () => {
  const [songName, setSongName] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [urlName, setUrlName] = useState('')
  const [tags, setTags] = useState<ITag[]>([])
  
  const { id } = useParams()

  useEffect(() => {
    fetch(`${baseUrl}${routes.songs.base}/${id}`)
      .then(res => res.json())
      .then(({
        author,
        name,
        tags,
      }: ISong) => {
        setSongName(name)
        setAuthorName(author)
        setTags(tags)
      })
  }, [])

  return (
    <FormGroup>
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
      <Button onClick={() => {
        fetch(`${baseUrl}${routes.songs.edit}/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            songName,
            authorName,
            urlName,
            tags,
          })
        })
      }}>Click</Button>
    </FormGroup>
  )
}