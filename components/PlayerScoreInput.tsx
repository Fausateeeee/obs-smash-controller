import {
  Box,
  InputGroup,
  InputLeftAddon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

const PlayerScoreInput = ({ score, updateScore }) => {
  return (
    <Box>
      <InputGroup>
        <InputLeftAddon children={'Score:'} w='110px' />
        <NumberInput
          w='100%'
          onChange={(e, value) => {
            updateScore(value.toString())
          }}
          defaultValue={0}
          value={Number.parseInt(score)}
          min={0}
          max={3}
        >
          <NumberInputField value={score} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </InputGroup>
    </Box>
  )
}

export default PlayerScoreInput
