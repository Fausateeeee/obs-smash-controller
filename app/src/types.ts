import { JsonObject } from 'type-fest'

export interface IOBSWebSocketConfig {
  port: number
  ip: string
  psw: string
}

export interface IOBSSourcePayload {
  name: string
  payload: JsonObject
}

export interface IConfig {
  player1NameSource: string
  player2NameSource: string
  player1ScoreSource: string
  player2ScoreSource: string
  matchNameSource: string
}
