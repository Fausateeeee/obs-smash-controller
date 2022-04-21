import OBSWebSocket, { OBSRequestTypes } from 'obs-websocket-js'
import React from 'react'
import { IOBSWebSocketConfig, IOBSSourcePayload } from './types'

export class OBS {
  private obs: OBSWebSocket

  constructor() {
    this.obs = new OBSWebSocket()
  }

  public async connect(wsc: IOBSWebSocketConfig, setIsConnected: React.Dispatch<React.SetStateAction<boolean>>) {
    this.obs.connect(`ws://${wsc.ip}:${wsc.port}`).then(() => setIsConnected(true)).catch(() => setIsConnected(false))
  }

  public async disconnect(setIsConnected: React.Dispatch<React.SetStateAction<boolean>>) {
    await this.obs.disconnect().then(() => setIsConnected(false))
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
