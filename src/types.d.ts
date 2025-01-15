export type weather = 'rainy' | 'sunny' | 'windy' | 'cloudy'
export type visibility = 'good' | 'ok' | 'poor' | 'bad'

export interface diariesEntry {
  id: number
  date: string
  weather: weather
  visibility: visibility
  comment: string
}

export type diarieWithoutComment = Omit<diariesEntry, 'comment'>
