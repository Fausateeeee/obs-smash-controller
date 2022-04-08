import OBS from './obs'
import { useState, createContext, useRef } from 'react'
import PlayerBar from '../components/PlayerBar'
import { Box, Button, Heading } from '@chakra-ui/react'

function App() {
  const [obs] = useState(new OBS())
  const [player1Name, setPlayer1Name] = useState('')
  const [player1Score, setPlayer1Score] = useState('0')
  const [player2Name, setPlayer2Name] = useState('')
  const [player2Score, setPlayer2Score] = useState('0')
  const [matchRound, setMatchRounf] = useState('')

  const wsc = {
    port: 4444,
    psw: '',
    ip: '192.168.0.198',
  }

  return (
    <div className='App'>
      <Box m='auto' w='40%'>
        <Heading>Smash Yo</Heading>
        <Box m='auto'>
          <Button colorScheme='blue' onClick={() => obs.connect(wsc)}>
            Connect
          </Button>
          <PlayerBar
            pos='1'
            updateScore={setPlayer1Score}
            updateName={setPlayer1Name}
          />
          <PlayerBar
            pos='2'
            updateScore={setPlayer2Score}
            updateName={setPlayer2Name}
          />
          <Button
            colorScheme='orange'
            onClick={() => {
              obs.setSource({
                name: 'player1Name',
                payload: { text: player1Name },
              })
              obs.setSource({
                name: 'player2Name',
                payload: { text: player2Name },
              })
              obs.setSource({
                name: 'player1Score',
                payload: { text: player1Score },
              })
              obs.setSource({
                name: 'player2Score',
                payload: { text: player2Score },
              })
            }}
          >
            Update
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default App
