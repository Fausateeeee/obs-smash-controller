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

const PlayerBar = (props) => {
  return (
    <InputGroup w='100%'>
      <InputLeftAddon children={`Player ${props.pos}`} />
      <Input
        value={props.name}
        placeholder={`Player ${props.pos}`}
        onChange={(e) => {
          props.updateName(e.target.value)
        }}
      />

      <InputRightElement w='8rem'>
        <NumberInput
          onChange={(e, value) => {
            props.updateScore(value.toString())
          }}
          defaultValue={0}
          min={0}
          max={3}
        >
          <NumberInputField value={props.score} />
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
