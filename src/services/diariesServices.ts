import { diariesEntry } from '../types'
import diariesData from '../mock/diariesData.json'

const diaries: diariesEntry[] = diariesData as diariesEntry[]
export const getEntries = (): diariesEntry[] => diaries

export const findId = (id: Number): diariesEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  return entry
}
