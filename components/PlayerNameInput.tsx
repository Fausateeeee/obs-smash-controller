import {
  Input,
  InputGroup,
  InputLeftAddon,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'

interface PlayerNameInputProps {
  name: string
  updateName: Function
  color: string
}

const PlayerNameInput = ({ name, updateName, color }: PlayerNameInputProps) => {
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
