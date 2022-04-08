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
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react'

function App() {
  const obs = new OBS()
  const [player1Name, setPlayer1Name] = useState('')
  const [player2Name, setPlayer2Name] = useState('')
  const [player1Score, setPlayer1Score] = useState(0)
  const [player2Score, setPlayer2Score] = useState(0)
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
            <NumberInput
              mr='5rem'
              onChange={(e, value) => {
                setPlayer1Score(value)
              }}
              defaultValue={0}
              min={0}
              max={3}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
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
            <NumberInput
              mr='5rem'
              defaultValue={0}
              min={0}
              max={3}
              onChange={(e, value) => {
                setPlayer2Score(value)
              }}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

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
        <Box w='100%'>
          <Heading>P1 Score: {player1Score}</Heading>
          <Heading>P2 Score: {player2Score}</Heading>
        </Box>
      </Box>
    </div>
  )
}

export default App
