import {
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Box,
} from '@chakra-ui/react'

const PlayerNameInput = ({ name, updateName }) => {
  return (
    <Box>
      <InputGroup>
        <InputLeftAddon children={`Tag`} w='110px' />
        <Input
          value={name}
          placeholder={`Name`}
          onChange={(e) => {
            updateName(e.target.value)
          }}
        />
      </InputGroup>
    </Box>
  )
}

export default PlayerNameInput
