import { Box, Heading, VStack } from '@chakra-ui/react'
import PlayerNameInput from './PlayerNameInput'
import PlayerScoreInput from './PlayerScoreInput'
import PlayerCharacterInput from './PlayerCharacterInput'

import { useAppDispatch, useAppSelector } from '../../src/redux/hooks'
import {
  setNameP1,
  setNameP2,
  setScoreP1,
  setScoreP2,
  setCharacterP1,
  setCharacterP2,
} from '../../src/redux/features/player/player-slice'

interface PropsPlayerForm {
  position: string
  color: string
}

const PlayerForm = ({ position, color }: PropsPlayerForm) => {
  const dispatch = useAppDispatch()

  let name = useAppSelector((state) => state.player.nameP1)
  let updateName = (name: string) => dispatch(setNameP1(name))

  let score = useAppSelector((state) => state.player.scoreP1)
  let updateScore = (score: string) => dispatch(setScoreP1(score))

  let characters = useAppSelector((state) => state.player.characterP1)
  let updateCharacters = (characters: Array<string>) =>
    dispatch(setCharacterP1(characters))
  if (position === '2') {
    name = useAppSelector((state) => state.player.nameP2)
    updateName = (name: string) => dispatch(setNameP2(name))

    score = useAppSelector((state) => state.player.scoreP2)
    updateScore = (score: string) => dispatch(setScoreP2(score))

    characters = useAppSelector((state) => state.player.characterP2)
    updateCharacters = (characters: Array<string>) =>
      dispatch(setCharacterP2(characters))
  }

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
          onCharacterChange={updateCharacters}
          color={color}
        />
      </VStack>
    </Box>
  )
}

export default PlayerForm
