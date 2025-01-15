import { diariesEntry, diarieWithoutComment } from '../types'
import diariesData from '../mock/diariesData.json'

const diaries: diariesEntry[] = diariesData as diariesEntry[]
export const getEntries = (): diariesEntry[] => diaries

export const findId = (id: number): diarieWithoutComment | undefined => {
  const entry = diaries.find(d => d.id === id)

  if (entry !== undefined) {
    // Eliminamos la propiedad 'comment' del objeto
    const { comment, ...entryWithoutComment } = entry
    return entryWithoutComment
  }

  return undefined
}
