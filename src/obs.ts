import OBSWebSocket, { OBSRequestTypes } from 'obs-websocket-js'
import { IOBSWebSocketConfig, IOBSSourcePayload } from './types'

export class OBS {
  private obs: OBSWebSocket

  constructor() {
    this.obs = new OBSWebSocket()
  }

  public async connect(wsc: IOBSWebSocketConfig) {
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

  public async setSource(source: IOBSSourcePayload) {
    const req: OBSRequestTypes['SetInputSettings'] = {
      inputName: source.name,
      inputSettings: source.payload,
    }
    this.obs.call('SetInputSettings', req)
  }

  public async startRecording() {
    this.obs.call('StartRecord')
  }
  public async getRecordingInfo() {
    this.obs.call('GetRecordStatus').then((data) => {
      console.log(data)
    })
  }

  public async stopRecording() {
    this.obs.call('StopRecord')
  }
}

export default OBS
