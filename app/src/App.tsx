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
import { useAppSelector } from './redux/hooks'

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
  const [obs] = useState(new OBS())
  const { toggleColorMode } = useColorMode()

  const [isRecording, setIsRecording] = useState(false)
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
  const nameP1 = useAppSelector((state) => state.player.nameP1)
  const nameP2 = useAppSelector((state) => state.player.nameP2)
  const scoreP1 = useAppSelector((state) => state.player.scoreP1)
  const scoreP2 = useAppSelector((state) => state.player.scoreP2)
  const matchRound = useAppSelector((state) => state.player.matchRound)
  return (
    <div className='App'>
      <Container mt='20px' maxW='60%'>
        <VStack w='100%' spacing='16px'>
          <Heading as='h1' textAlign='center'>
            Smash OBS Controller
          </Heading>
          <Divider />
          <HStack w='100%' spacing='20px'>
            <PlayerForm position='1' color='blue' />
            <PlayerForm position='2' color='red' />
          </HStack>

          <Divider />
          <Heading>Round</Heading>
          <MatchRound />

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
              onClick={() =>
                obs.updateAllKnownSource(
                  nameP1,
                  nameP2,
                  scoreP1,
                  scoreP2,
                  matchRound,
                )
              }
            >
              Update
            </Button>
            <Button onClick={() => handleRecording()}>
              {isRecording ? 'Stop Recording' : 'Start Recording'}
            </Button>
            <Button
              onClick={async () => await console.log(obs.getRecordingInfo())}
            >
              Test Recording Info
            </Button>

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
