import {} from '@chakra-ui/react'
import { CreatableSelect } from 'chakra-react-select'

const MatchRound = ({ updateRound }) => {
  const options = [
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
  ]
  return (
    <CreatableSelect
      options={options}
      onChange={(round) => {
        updateRound(round?.value)
      }}
    ></CreatableSelect>
  )
}

export default MatchRound
