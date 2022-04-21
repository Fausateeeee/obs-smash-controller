import { Box, Heading, VStack } from '@chakra-ui/react'
import PlayerNameInput from './PlayerNameInput'
import PlayerScoreInput from './PlayerScoreInput'
import PlayerCharacterInput from './PlayerCharacterInput'

const PlayerForm = ({
  position,
  color,
  name,
  score,
  updateName,
  updateScore,
  updateCharacter,
}) => {
  return (
    <Box w='100%'>
      <VStack spacing='16px'>
        <Heading>Player {position}</Heading>
        <PlayerNameInput name={name} updateName={updateName} color={color} />
        <PlayerScoreInput
          score={score}
          updateScore={updateScore}
          color={color}
        />
        <PlayerCharacterInput
          onCharacterChange={updateCharacter}
          color={color}
        />
      </VStack>
    </Box>
  )
}

export default PlayerForm
