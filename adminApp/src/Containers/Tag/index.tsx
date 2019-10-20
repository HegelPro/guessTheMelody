import React from 'react'

import Chip from '@material-ui/core/Chip'

export type ITag = String

interface IProps {
  tag: ITag
  onDeleteTag: (tag: ITag) => void
}

export const Tag = ({
    tag,
    onDeleteTag
  }: IProps) => {
  return (
    <Chip label={tag} onDelete={() => onDeleteTag(tag)} />
  )
}