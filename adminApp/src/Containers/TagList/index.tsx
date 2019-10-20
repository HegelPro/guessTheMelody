import React from 'react'
import { ITag, Tag } from '../Tag'

interface IProps {
  tags: ITag[]
  onDeleteTag: (tag: ITag) => void
}

export const TagList = ({tags, onDeleteTag}: IProps) => {
  return (
    <React.Fragment>
      {tags.map(tag =><Tag tag={tag} onDeleteTag={onDeleteTag} />)}
    </React.Fragment>
  )

}