import { diariesEntry } from '../types'
import diariesData from '../mock/diariesData.json'


const diaries: diariesEntry[] =  diariesData as diariesEntry[]
export const getEntries = () => diaries


