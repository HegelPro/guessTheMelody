import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { ITag } from '../Tag'


interface IProps {
  onAddTag: (tag: ITag) => void
}

export const TagAdder = ({ onAddTag }: IProps) => {
  const [newTag, setNewTag] = useState<ITag>('')
  return (
    <div>
      <TextField onChange={({ target: { value } }) => setNewTag(value)} value={newTag}/>
      <Button
        onClick={() => {
          onAddTag(newTag)
          setNewTag('')
        }}
      >add tag</Button>
    </div>
  )
}