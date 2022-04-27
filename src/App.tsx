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
import { SunIcon, MoonIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons'

import Config from './config'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { setNameP1 } from './redux/features/player/player-slice'

const Connected = () => {
  return (
    <HStack>
      <Text>Connected</Text> <CheckIcon color='green' />
    </HStack>
  )
}

const Disconnected = () => {
  return (
    <HStack>
      <Text>No connection</Text> <CloseIcon color='red' />
    </HStack>
  )
}

function App() {
  const dispatch = useAppDispatch()
  const player1Name = useAppSelector((state) => state.player.nameP1)

  const [obs] = useState(new OBS())
  const { toggleColorMode } = useColorMode()
  const [player1Score, setPlayer1Score] = useState('0')
  const [player2Name, setPlayer2Name] = useState('')
  const [player2Score, setPlayer2Score] = useState('0')
  const [player1Character, setPlayer1Character] = useState([])
  const [player2Character, setPlayer2Character] = useState([])
  const [matchRound, setMatchRound] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [isHotUpdating, setIsHotUpdating] = useState(true)
  const [isOBSConnected, setIsOBSConnected] = useState(false)
  const [isYouTubeConnected, setIsYouTubeConnected] = useState(false)
  const [isChallongeConnected, setIsChallongeConnected] = useState(false)
  const [isTwitchConnected, setIsTwitchConnected] = useState(false)

  const wsc = {
    port: 4444,
    psw: '',
    ip: '192.168.0.198',
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
                      dispatch(setNameP1(name))
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
          <Heading>Connection Status</Heading>
          <HStack>
            <Text>
              OBS: {isOBSConnected ? <Connected /> : <Disconnected />}
            </Text>
          </HStack>
          <HStack>
            <Text>
              Youtube: {isYouTubeConnected ? <Connected /> : <Disconnected />}
            </Text>
          </HStack>
          <Heading>Control Panel</Heading>
          <HStack>
            <Button
              colorScheme={isOBSConnected ? 'red' : 'green'}
              onClick={() =>
                isOBSConnected
                  ? obs.disconnect(setIsOBSConnected)
                  : obs.connect(wsc, setIsOBSConnected)
              }
            >
              {isOBSConnected ? 'Disconnect' : 'Connect to OBS'}
            </Button>
            <Button onClick={() => {}}>Swap</Button>
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
