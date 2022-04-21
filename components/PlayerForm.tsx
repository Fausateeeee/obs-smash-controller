import { Box, Stack, Text } from '@chakra-ui/react'
import PlayerNameInput from './PlayerNameInput'
import PlayerScoreInput from './PlayerScoreInput'
import PlayerCharacterInput from './PlayerCharacterInput'

const PlayerForm = ({
  position,
  name,
  score,
  updateName,
  updateScore,
  updateCharacter,
}) => {
  return (
    <Box w='100%'>
      <Stack>
        <Text>Player {position}</Text>
        <PlayerNameInput name={name} updateName={updateName} />
        <PlayerScoreInput score={score} updateScore={updateScore} />
        <PlayerCharacterInput onCharacterChange={updateCharacter} />
      </Stack>
    </Box>
  )
}

export default PlayerForm
