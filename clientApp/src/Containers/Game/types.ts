export interface ILetter {
  char: string
  isHidden: boolean
}

export type IWord = ILetter[]

export interface ISong {
  author: string
  url: string
}

export interface IGame {
  word: IWord
  song: ISong
}