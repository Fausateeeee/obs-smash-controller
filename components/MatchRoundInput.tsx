import { Box } from '@chakra-ui/react'
import { CreatableSelect } from 'chakra-react-select'

const MatchRound = ({ updateRound }) => {
  const options = [
    {
      value: 'Grand Final',
      label: 'Grand Final',
    },
    {
      value: 'Winners Final',
      label: 'Winners Final',
    },
    {
      value: 'Winners Semis',
      label: 'Winners Semis',
    },
    {
      value: 'Winners Quarters',
      label: 'Winners Quarters',
    },
    {
      value: 'Losers Final',
      label: 'Losers Final',
    },
    {
      value: 'Losers Semis',
      label: 'Losers Semis',
    },
    {
      value: 'Losers Quarters',
      label: 'Losers Quarters',
    },
    {
      value: 'Winners Round 1',
      label: 'Winners Round 1',
    },
    {
      value: 'Winners Round 2',
      label: 'Winners Round 2',
    },
    {
      value: 'Winners Round 3',
      label: 'Winners Round 3',
    },
    {
      value: 'Winners Round 4',
      label: 'Winners Round 4',
    },
    {
      value: 'Winners Round 5',
      label: 'Winners Round 5',
    },
    {
      value: 'Losers Round 1',
      label: 'Losers Round 1',
    },
    {
      value: 'Losers Round 2',
      label: 'Losers Round 2',
    },
    {
      value: 'Losers Round 3',
      label: 'Losers Round 3',
    },
    {
      value: 'Losers Round 4',
      label: 'Losers Round 4',
    },
    {
      value: 'Losers Round 5',
      label: 'Losers Round 5',
    },
    {
      value: 'Losers Round 6',
      label: 'Losers Round 6',
    },
    {
      value: 'Losers Round 7',
      label: 'Losers Round 7',
    },
  ]
  return (
    <Box w='100%'>
      <CreatableSelect
        options={options}
        onChange={(round) => {
          updateRound(round?.value)
        }}
      />
    </Box>
  )
}

export default MatchRound
