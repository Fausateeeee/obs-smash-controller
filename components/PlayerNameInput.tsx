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
  useColorModeValue,
} from '@chakra-ui/react'

const PlayerNameInput = ({ name, updateName, color }) => {
  return (
    <Box w='100%'>
      <InputGroup>
        <InputLeftAddon
          children={`Name:`}
          w='110px'
          bgColor={useColorModeValue(`${color}.500`, `${color}.300`)}
          color={useColorModeValue('white', 'black')}
          placement='left'
        />
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
