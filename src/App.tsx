import OBS from './obs'
import { useState } from 'react'
import PlayerBar from '../components/PlayerBar'
import CharacterSelect from '../components/CharacterSelect'
import {
  Box,
  Container,
  SimpleGrid,
  Button,
  Heading,
  Switch,
  Text,
  Flex,
} from '@chakra-ui/react'
import MatchRound from '../components/MatchRound'

function App() {
  const [obs] = useState(new OBS())

  const [player1Name, setPlayer1Name] = useState('')
  const [player1Score, setPlayer1Score] = useState('0')
  const [player2Name, setPlayer2Name] = useState('')
  const [player2Score, setPlayer2Score] = useState('0')
  const [player1Character, setPlayer1Character] = useState([])
  const [player2Character, setPlayer2Character] = useState([])
  const [matchRound, setMatchRound] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [isHotUpdating, setIsHotUpdating] = useState(true)
  const [isConnected, setIsConnected] = useState(false)

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
    const tempPlayer1Character = player1Character
    const tempPlayer2Character = player2Character

    // setPlayer1Name(tempPlayer2Name)
    // setPlayer2Name(tempPlayer1Name)
    // setPlayer1Score(tempPlayer2Score)
    // setPlayer2Score(tempPlayer1Score)
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
      <Container mt='20px' maxW='60%'>
        <Heading as='h1' textAlign='center'>
          Smash OBS Controller
        </Heading>
        <SimpleGrid columns={[2]} spacingX='1%'>
          <Box w='100%'>
            <PlayerBar
              pos='1'
              name={player1Name}
              score={player1Score}
              updateScore={
                isHotUpdating
                  ? (score: string) => {
                      setPlayer1Score(score)
                      obs.setSource({
                        name: 'player1Score',
                        payload: { text: score },
                      })
                    }
                  : setPlayer1Score
              }
              updateName={
                isHotUpdating
                  ? (name: string) => {
                      setPlayer1Name(name)
                      obs.setSource({
                        name: 'player1Name',
                        payload: { text: name },
                      })
                    }
                  : setPlayer1Name
              }
            />
            <CharacterSelect onCharacterChange={setPlayer1Character} />
          </Box>
          <Box w='100%'>
            <PlayerBar
              pos='2'
              name={player2Name}
              score={player2Score}
              updateScore={
                isHotUpdating
                  ? (score: string) => {
                      setPlayer2Score(score)
                      obs.setSource({
                        name: 'player2Score',
                        payload: { text: score },
                      })
                    }
                  : setPlayer1Score
              }
              updateName={
                isHotUpdating
                  ? (name: string) => {
                      setPlayer2Name(name)
                      obs.setSource({
                        name: 'player2Name',
                        payload: { text: name },
                      })
                    }
                  : setPlayer1Name
              }
            />
            <CharacterSelect onCharacterChange={setPlayer2Character} />
          </Box>
        </SimpleGrid>
        <MatchRound
          updateRound={
            isHotUpdating
              ? (round: string) => {
                  setMatchRound(round)
                  obs.setSource({
                    name: 'matchRound',
                    payload: { text: round },
                  })
                }
              : setMatchRound
          }
        />
      </Container>

      <Box m='auto' w='60%'>
        <Box m='auto'>
          <Button colorScheme='green' onClick={() => obs.connect(wsc)}>
            Connect
          </Button>
          <Text>{isConnected ? 'Connected to OBS' : 'Not connected'} </Text>
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
          <Switch
            id='hotupdate'
            defaultChecked={true}
            onChange={(e) => {
              setIsHotUpdating(e.target.checked)
            }}
          >
            Hot update
          </Switch>
        </Box>
      </Box>
    </div>
  )
}

export default App
