import OBSWebSocket, { OBSRequestTypes } from 'obs-websocket-js'
import { OBSWebSocketConfig, OBSSourcePayload } from './types'

export default class OBS {
  private obs: OBSWebSocket

  constructor() {
    this.obs = new OBSWebSocket()
  }

  public async connect(wsc: OBSWebSocketConfig) {
    console.log(`ws://${wsc.ip}:${wsc.port}`)
    try {
      await this.obs.connect(`ws://${wsc.ip}:${wsc.port}`)
    } catch (error) {
      console.error(
        `Connection failed. The error code is: ${error.code}. The error message is: ${error.message}`,
      )
    }
  }

  public async disconnect() {
    await this.obs.disconnect()
  }

  public async setPlayerName(source: OBSSourcePayload) {
    const req: OBSRequestTypes['SetInputSettings'] = {
      inputName: source.name,
      inputSettings: source.payload,
    }
    this.obs.call('SetInputSettings', req)
  }

  public async setPlayerCharacter(source: OBSSourcePayload) {}

  public async swapPlayer(source: OBSSourcePayload) {}

  public async updatePlayerScore(source: OBSSourcePayload) {}

  public async updateMatchRound(source: OBSSourcePayload) {}
}
