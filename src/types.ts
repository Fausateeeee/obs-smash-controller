import { JsonObject } from 'type-fest'

export interface OBSWebSocketConfig {
  port: number
  ip: string
  psw: string
}

export interface OBSSourcePayload {
  name: string
  payload: JsonObject
}
