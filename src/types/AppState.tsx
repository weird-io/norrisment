
export interface Norrisism {
  id: string
  question: string
  answer: string
}

export interface AppState {
  norrisisms: Norrisism[]
}
