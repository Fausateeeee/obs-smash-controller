import OBS from './obs'
import { useState } from 'react'
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from '@chakra-ui/react'

function App() {
  const obs = new OBS()
  const [player1Name, setPlayer1Name] = useState('')
  const [player2Name, setPlayer2Name] = useState('')
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
        </Box>
        <Box>
          <InputGroup>
            <InputLeftAddon children='Player 1' />
            <Input
              placeholder='Player 1'
              onChange={(e) => {
                setPlayer1Name(e.target.value)
              }}
            />
            <InputRightElement w='5rem'>
              <Button
                size='md'
                colorScheme='orange'
                onClick={() => {
                  obs.setPlayerName({
                    name: 'player1Name',
                    payload: { text: player1Name },
                  })
                }}
              >
                Update
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <InputGroup>
            <InputLeftAddon children='Player 2' />
            <Input
              placeholder='Player 2'
              onChange={(e) => {
                setPlayer2Name(e.target.value)
              }}
            />
            <InputRightElement w='5rem'>
              <Button
                size='md'
                colorScheme='orange'
                onClick={() => {
                  obs.setPlayerName({
                    name: 'player2Name',
                    payload: { text: player2Name },
                  })
                }}
              >
                Update
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>
    </div>
  )
}

export default App
