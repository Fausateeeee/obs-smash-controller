import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import OBSWebSocket from 'obs-websocket-js'

const obs = new OBSWebSocket()
// const ws = new WebSocket('ws://127.0.0.1:4444')
// ws.send('GetSceneList')
async function connectToOBS() {
  try {
    const { obsWebSocketVersion, negotiatedRpcVersion } = await obs.connect()

    console.log(
      `Connnected to ${obsWebSocketVersion} with ${negotiatedRpcVersion}`,
    )
  } catch (error) {
    console.error('Failed to connect', error.code, error.message)
  }

  // obs
  //   .call('GetVersion')
  //   .then((data) => console.log(data))
  //   .then(() => {
  //     obs.disconnect()
  //   })
  //obs.disconnect()
}

function getList() {
  obs.call('GetSceneList').then((data) => {
    console.log(data)
  })
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        <p>
          <button type='button' onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>

        <div>
          <button type='button' onClick={() => connectToOBS()}>
            Connect
          </button>
        </div>
        <div>
          <button type='button' onClick={() => getList()}>
            List
          </button>
        </div>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
