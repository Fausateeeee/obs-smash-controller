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
