import OBS from './obs'
import { useState } from 'react'
import PlayerForm from '../components/PlayerForm'
import MatchRound from '../components/MatchRoundInput'
import {
  Box,
  Container,
  Button,
  Heading,
  Switch,
  Text,
  VStack,
  HStack,
  Divider,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

import Config from './config'

function App() {
  const [obs] = useState(new OBS())
  const { toggleColorMode } = useColorMode()
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

    setPlayer1Name(tempPlayer2Name)
    setPlayer2Name(tempPlayer1Name)
    setPlayer1Score(tempPlayer2Score)
    setPlayer2Score(tempPlayer1Score)

    obs.setSource({
      name: Config.player1NameSource,
      payload: { text: tempPlayer2Name },
    })
    obs.setSource({
      name: Config.player2NameSource,
      payload: { text: tempPlayer1Name },
    })
    obs.setSource({
      name: Config.player1ScoreSource,
      payload: { text: tempPlayer2Score },
    })
    obs.setSource({
      name: Config.player2ScoreSource,
      payload: { text: tempPlayer1Score },
    })
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
        <VStack w='100%' spacing='16px'>
          <Heading as='h1' textAlign='center'>
            Smash OBS Controller
          </Heading>
          <Divider />
          <HStack w='100%' spacing='20px'>
            <PlayerForm
              position='1'
              color='blue'
              name={player1Name}
              score={player1Score}
              updateName={
                isHotUpdating
                  ? (name: string) => {
                      setPlayer1Name(name)
                      obs.setSource({
                        name: Config.player1NameSource,
                        payload: { text: name },
                      })
                    }
                  : setPlayer1Name
              }
              updateScore={
                isHotUpdating
                  ? (score: string) => {
                      setPlayer1Score(score)
                      obs.setSource({
                        name: Config.player1ScoreSource,
                        payload: { text: score.toString() },
                      })
                    }
                  : setPlayer1Score
              }
              updateCharacter={setPlayer1Character}
            />
            <Divider orientation='vertical' />
            <PlayerForm
              position='2'
              color='red'
              name={player2Name}
              score={player2Score}
              updateName={
                isHotUpdating
                  ? (name: string) => {
                      setPlayer2Name(name)
                      obs.setSource({
                        name: Config.player2NameSource,
                        payload: { text: name },
                      })
                    }
                  : setPlayer2Name
              }
              updateScore={
                isHotUpdating
                  ? (score: string) => {
                      setPlayer2Score(score)
                      obs.setSource({
                        name: Config.player2ScoreSource,
                        payload: { text: score.toString() },
                      })
                    }
                  : setPlayer2Score
              }
              updateCharacter={setPlayer2Character}
            />
          </HStack>

          <Divider />
          <Heading>Round</Heading>
          <MatchRound
            updateRound={
              isHotUpdating
                ? (round: string) => {
                    setMatchRound(round)
                    obs.setSource({
                      name: Config.matchNameSource,
                      payload: { text: round },
                    })
                  }
                : setMatchRound
            }
          />

          <Divider />
          <Heading>Controls</Heading>
          <HStack>
            <Button
              colorScheme={isConnected ? 'red' : 'green'}
              onClick={() =>
                isConnected
                  ? obs.disconnect(setIsConnected)
                  : obs.connect(wsc, setIsConnected)
              }
            >
              {isConnected ? 'Disconnect' : 'Connect'}
            </Button>
            <Text>{isConnected ? 'Connected to OBS' : 'Not connected'} </Text>
            <Button
              onClick={() => {
                swapPlayer()
              }}
            >
              Swap
            </Button>
            <Button
              colorScheme='orange'
              onClick={() => {
                obs.setSource({
                  name: Config.player1NameSource,
                  payload: { text: player1Name },
                })
                obs.setSource({
                  name: Config.player2NameSource,
                  payload: { text: player2Name },
                })
                obs.setSource({
                  name: Config.player1ScoreSource,
                  payload: { text: player1Score },
                })
                obs.setSource({
                  name: Config.player2ScoreSource,
                  payload: { text: player2Score },
                })
                obs.setSource({
                  name: Config.matchNameSource,
                  payload: { text: matchRound },
                })
              }}
            >
              Update
            </Button>
            <Button onClick={() => handleRecording()}>
              {isRecording ? 'Stop Recording' : 'Start Recording'}
            </Button>
            <Switch
              id='hotupdate'
              defaultChecked={true}
              onChange={(e) => {
                setIsHotUpdating(e.target.checked)
              }}
            >
              Hot update
            </Switch>
            <IconButton
              aria-label='Toggle theme'
              colorScheme={useColorModeValue('purple', 'orange')}
              icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
              onClick={toggleColorMode}
            />
          </HStack>
        </VStack>
      </Container>
    </div>
  )
}

export default App
