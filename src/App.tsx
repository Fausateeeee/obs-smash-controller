import OBS from './obs'
import { useState } from 'react'
import PlayerBar from '../components/PlayerBar'
import CharacterSelect from '../components/CharacterSelect'
import { Box, Button, Heading, Switch, Text } from '@chakra-ui/react'
import SvgBanjoAndKazooie from '../assets/iconsComponents/BanjoAndKazooie'
function App() {
  const [obs] = useState(new OBS())

  const [player1Name, setPlayer1Name] = useState('')
  const [player1Score, setPlayer1Score] = useState('0')
  const [player2Name, setPlayer2Name] = useState('')
  const [player2Score, setPlayer2Score] = useState('0')
  const [matchRound, setMatchRound] = useState('')
  const [isRecording, setIsRecording] = useState(false)

  const wsc = {
    port: 4444,
    psw: '',
    ip: '192.168.0.198',
  }

  const swapPlayer = () => {
    const tempPlayer1Name = player1Name
    const tempPlayer2Name = player2Name
    const tempPlayer1Score = player1Score
    const tempPlayer2Score = player2Score
    setPlayer1Name(tempPlayer2Name)
    setPlayer2Name(tempPlayer1Name)
    setPlayer1Score(tempPlayer2Score)
    setPlayer2Score(tempPlayer1Score)
  }

  const handleRecording = () => {
    if (isRecording) {
      obs.stopRecording()
      setIsRecording(!isRecording)
      //need to some data collection
    } else {
      obs.startRecording()
      setIsRecording(!isRecording)
    }
  }

  return (
    <div className='App'>
      <Box m='auto' w='40%'>
        <Box>
          <Box display='flex'>
            <SvgBanjoAndKazooie width='24px' height='24px' />
            <Text mt='auto' mb='auto'>
              Banjo & Kazooie
            </Text>
          </Box>
        </Box>
        <Heading>Smash Yo</Heading>
        <Box m='auto'>
          <Button colorScheme='blue' onClick={() => obs.connect(wsc)}>
            Connect
          </Button>
          <PlayerBar
            pos='1'
            name={player1Name}
            score={player1Score}
            updateScore={setPlayer1Score}
            updateName={setPlayer1Name}
          />
          <PlayerBar
            pos='2'
            name={player2Name}
            score={player2Score}
            updateScore={setPlayer2Score}
            updateName={setPlayer2Name}
          />
          <CharacterSelect />
          <Button onClick={() => swapPlayer()}>Swap</Button>
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
          <Button onClick={() => handleRecording()}>
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </Button>
          <Button onClick={() => obs.getRecordingInfo()}>Test</Button>
          <Switch id='hotupdate'>Hot update</Switch>
        </Box>
      </Box>
    </div>
  )
}

export default App
