import OBSWebSocket, { OBSRequestTypes } from 'obs-websocket-js'
import React from 'react'
import { useAppSelector } from './redux/hooks'
import { IOBSWebSocketConfig, IOBSSourcePayload } from './types'

export class OBS {
  private obs: OBSWebSocket
  private P1NameSource: string
  private P2NameSource: string
  private P1ScoreSource: string
  private P2ScoreSource: string
  private MatchRoundSource: string

  constructor() {
    this.obs = new OBSWebSocket()
    this.P1NameSource = 'player1Name'
    this.P2NameSource = 'player2Name'
    this.P1ScoreSource = 'player1Score'
    this.P2ScoreSource = 'player2Score'
    this.MatchRoundSource = 'matchRound'
  }

  public async connect(
    wsc: IOBSWebSocketConfig,
    setIsConnected: React.Dispatch<React.SetStateAction<boolean>>,
  ) {
    this.obs
      .connect(`ws://${wsc.ip}:${wsc.port}`)
      .then(() => setIsConnected(true))
      .catch(() => setIsConnected(false))
  }

  public async disconnect(
    setIsConnected: React.Dispatch<React.SetStateAction<boolean>>,
  ) {
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
    this.obs.call('StartRecord').then((data) => {
      console.log(data)
    })
  }
  public async getRecordingInfo() {
    this.obs.call('GetRecordStatus').then((data) => {
      console.log(data)
    })
  }

  public async stopRecording() {
    this.obs.call('StopRecord')
  }

  public async updateAllKnownSource(
    nameP1: string,
    nameP2: string,
    scoreP1: string,
    scoreP2: string,
    matchRound: string,
  ) {
    this.setSource({
      name: this.P1NameSource,
      payload: { text: nameP1 },
    })
    this.setSource({
      name: this.P2NameSource,
      payload: { text: nameP2 },
    })
    this.setSource({
      name: this.P1ScoreSource,
      payload: { text: scoreP1 },
    })
    this.setSource({
      name: this.P2ScoreSource,
      payload: { text: scoreP2 },
    })
    this.setSource({
      name: this.MatchRoundSource,
      payload: { text: matchRound },
    })
  }
}

export default OBS
