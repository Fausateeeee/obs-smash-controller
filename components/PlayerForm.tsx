import { Box, Flex } from '@chakra-ui/react'
import PlayerBar from './PlayerBar'
import CharacterSelect from './CharacterSelect'

const PlayerForm = () => {
  return (
    <Box display='flex'>
      <PlayerBar />
      <CharacterSelect />
    </Box>
  )
}

export default PlayerForm
