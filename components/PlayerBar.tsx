import {
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

const PlayerBar = ({ pos, score, name, updateName, updateScore }) => {
  return (
    <InputGroup w='100%'>
      <InputLeftAddon children={`Player ${pos}`} />
      <Input
        value={name}
        placeholder={`Player ${pos}`}
        onChange={(e) => {
          updateName(e.target.value)
        }}
      />

      <InputRightElement w='8rem'>
        <NumberInput
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
      </InputRightElement>
    </InputGroup>
  )
}

export default PlayerBar
