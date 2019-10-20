import React from 'react'

import Box from '@material-ui/core/Box'

import { TagList } from '../TagList'
import { TagAdder } from '../TagAdder'
import { ITag } from '../Tag'

interface IProps {
  tags: ITag[],
  onAddTag: (tag: ITag) => void,
  onDeleteTag: (tag: ITag) => void,
}

export const TagContainer = ({
  tags,
  onAddTag,
  onDeleteTag,
}: IProps) => {
  return (
    <Box>
      <TagAdder
        onAddTag={onAddTag}
      />
      <TagList
        tags={tags}
        onDeleteTag={onDeleteTag}
      />
    </Box>
  )
}