import {
  Box,
  InputGroup,
  InputLeftAddon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useColorModeValue,
} from '@chakra-ui/react'

const PlayerScoreInput = ({ score, updateScore, color }) => {
  return (
    <Box w='100%'>
      <InputGroup>
        <InputLeftAddon
          children={'Score:'}
          w='110px'
          bgColor={useColorModeValue(`${color}.500`, `${color}.300`)}
          color={useColorModeValue('white', 'black')}
          zIndex='600'
        />
        <NumberInput
          onChange={(e, value) => {
            updateScore(value.toString())
          }}
          defaultValue={0}
          value={Number.parseInt(score)}
          min={0}
          max={3}
          w='100%'
          zIndex='599'
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
