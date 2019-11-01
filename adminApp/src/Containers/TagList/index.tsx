import React from 'react'
import { ITag, Tag } from '../Tag'

interface IProps {
  tags: ITag[]
  onDeleteTag: (tag: ITag) => void
}

export const TagList = ({tags, onDeleteTag}: IProps) => (
  <React.Fragment>
    {tags.map((tag, i) =><Tag key={i} tag={tag} onDeleteTag={onDeleteTag} />)}
  </React.Fragment>
)