import {
  Box,
  Text,
  InputGroup,
  InputLeftAddon,
  useColorModeValue,
} from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import {
  BanjoAndKazooie,
  Bayonetta,
  Bowser,
  BowserJr,
  Byleth,
  CaptainFalcon,
  Chrom,
  Cloud,
  Corrin,
  Daisy,
  DarkPit,
  DarkSamus,
  DiddyKong,
  DonkeyKong,
  DrMario,
  DuckHunt,
  Falco,
  Fox,
  Ganondorf,
  Greninja,
  Hero,
  IceClimbers,
  Ike,
  Incineroar,
  Inkling,
  Isabelle,
  Jigglypuff,
  Joker,
  Kazuya,
  Ken,
  KingDedede,
  KingKRool,
  Kirby,
  Link,
  LittleMac,
  Lucario,
  Lucas,
  Lucina,
  Luigi,
  Mario,
  Marth,
  MegaMan,
  MetaKnight,
  Mewtwo,
  MiiFighter,
  Minmin,
  MrGameAndWatch,
  Ness,
  Olimar,
  PacMan,
  Palutena,
  Peach,
  Pichu,
  Pikachu,
  PiranhaPlant,
  Pit,
  PokemonTrainer,
  PyraMythra,
  Richter,
  Ridley,
  Rob,
  Robin,
  RosalinaAndLuma,
  Roy,
  Ryu,
  Samus,
  Sephiroth,
  Sheik,
  Shulk,
  Simon,
  Snake,
  Sonic,
  Sora,
  Steve,
  Terry,
  ToonLink,
  Villager,
  Wario,
  WiiFitTrainer,
  Wolf,
  Yoshi,
  YoungLink,
  Zelda,
  ZeroSuitSamus,
} from '../assets/iconsComponents/index'

const InnerSelect = ({ svg, name }) => {
  return (
    <Box display='flex' w='100%'>
      {svg}
      <Text ml='15px' mt='auto' mb='auto' fontSize='18px'>
        {name}
      </Text>
    </Box>
  )
}

const CharacterSelect = ({ onCharacterChange, color }) => {
  const options = [
    {
      value: 'Banjokazooie',
      label: (
        <InnerSelect
          svg={<BanjoAndKazooie width='32px' height='32px' />}
          name='Banjo & Kazooie'
        />
      ),
    },
    {
      value: 'Bayonetta',
      label: (
        <InnerSelect
          svg={<Bayonetta width='32px' height='32px' />}
          name='Bayonetta'
        />
      ),
    },
    {
      value: 'Bowser',
      label: (
        <InnerSelect
          svg={<Bowser width='32px' height='32px' />}
          name='Bowser'
        />
      ),
    },
    {
      value: 'Bowser Jr',
      label: (
        <InnerSelect
          svg={<BowserJr width='32px' height='32px' />}
          name='Bowser Jr'
        />
      ),
    },
    {
      value: 'Byleth',
      label: (
        <InnerSelect
          svg={<Byleth width='32px' height='32px' />}
          name='Byleth'
        />
      ),
    },
    {
      value: 'Captain Falcon',
      label: (
        <InnerSelect
          svg={<CaptainFalcon width='32px' height='32px' />}
          name='Captain Falcon'
        />
      ),
    },
    {
      value: 'Chrom',
      label: (
        <InnerSelect svg={<Chrom width='32px' height='32px' />} name='Chrom' />
      ),
    },
    {
      value: 'Cloud',
      label: (
        <InnerSelect svg={<Cloud width='32px' height='32px' />} name='Cloud' />
      ),
    },
    {
      value: 'Corrin',
      label: (
        <InnerSelect
          svg={<Corrin width='32px' height='32px' />}
          name='Corrin'
        />
      ),
    },
    {
      value: 'Daisy',
      label: (
        <InnerSelect svg={<Daisy width='32px' height='32px' />} name='Daisy' />
      ),
    },
    {
      value: 'Dark Pit',
      label: (
        <InnerSelect
          svg={<DarkPit width='32px' height='32px' />}
          name='Dark Pit'
        />
      ),
    },
    {
      value: 'Dark Samus',
      label: (
        <InnerSelect
          svg={<DarkSamus width='32px' height='32px' />}
          name='Dark Samus'
        />
      ),
    },
    {
      value: 'Diddy Kong',
      label: (
        <InnerSelect
          svg={<DiddyKong width='32px' height='32px' />}
          name='Diddy Kong'
        />
      ),
    },
    {
      value: 'Donkey Kong',
      label: (
        <InnerSelect
          svg={<DonkeyKong width='32px' height='32px' />}
          name='Donkey Kong'
        />
      ),
    },
    {
      value: 'Dr Mario',
      label: (
        <InnerSelect
          svg={<DrMario width='32px' height='32px' />}
          name='Dr Mario'
        />
      ),
    },
    {
      value: 'Duck Hunt',
      label: (
        <InnerSelect
          svg={<DuckHunt width='32px' height='32px' />}
          name='Duck Hunt'
        />
      ),
    },
    {
      value: 'Falco',
      label: (
        <InnerSelect svg={<Falco width='32px' height='32px' />} name='Falco' />
      ),
    },
    {
      value: 'Fox',
      label: (
        <InnerSelect svg={<Fox width='32px' height='32px' />} name='Fox' />
      ),
    },
    {
      value: 'Ganondorf',
      label: (
        <InnerSelect
          svg={<Ganondorf width='32px' height='32px' />}
          name='Ganondorf'
        />
      ),
    },
    {
      value: 'Greninja',
      label: (
        <InnerSelect
          svg={<Greninja width='32px' height='32px' />}
          name='Greninja'
        />
      ),
    },
    {
      value: 'Hero',
      label: (
        <InnerSelect svg={<Hero width='32px' height='32px' />} name='Hero' />
      ),
    },
    {
      value: 'Ice Climbers',
      label: (
        <InnerSelect
          svg={<IceClimbers width='32px' height='32px' />}
          name='Ice Climbers'
        />
      ),
    },
    {
      value: 'Ike',
      label: (
        <InnerSelect svg={<Ike width='32px' height='32px' />} name='Ike' />
      ),
    },
    {
      value: 'Incineroar',
      label: (
        <InnerSelect
          svg={<Incineroar width='32px' height='32px' />}
          name='Incineroar'
        />
      ),
    },
    {
      value: 'Inkling',
      label: (
        <InnerSelect
          svg={<Inkling width='32px' height='32px' />}
          name='Inkling'
        />
      ),
    },
    {
      value: 'Isabelle',
      label: (
        <InnerSelect
          svg={<Isabelle width='32px' height='32px' />}
          name='Isabelle'
        />
      ),
    },
    {
      value: 'Jigglypuff',
      label: (
        <InnerSelect
          svg={<Jigglypuff width='32px' height='32px' />}
          name='Jigglypuff'
        />
      ),
    },
    {
      value: 'Joker',
      label: (
        <InnerSelect svg={<Joker width='32px' height='32px' />} name='Joker' />
      ),
    },
    {
      value: 'Kazuya',
      label: (
        <InnerSelect
          svg={<Kazuya width='32px' height='32px' />}
          name='Kazuya'
        />
      ),
    },
    {
      value: 'Ken',
      label: (
        <InnerSelect svg={<Ken width='32px' height='32px' />} name='Ken' />
      ),
    },
    {
      value: 'King Dedede',
      label: (
        <InnerSelect
          svg={<KingDedede width='32px' height='32px' />}
          name='King Dedede'
        />
      ),
    },
    {
      value: 'King K Rool',
      label: (
        <InnerSelect
          svg={<KingKRool width='32px' height='32px' />}
          name='King K Rool'
        />
      ),
    },
    {
      value: 'Kirby',
      label: (
        <InnerSelect svg={<Kirby width='32px' height='32px' />} name='Kirby' />
      ),
    },
    {
      value: 'Link',
      label: (
        <InnerSelect svg={<Link width='32px' height='32px' />} name='Link' />
      ),
    },
    {
      value: 'Little Mac',
      label: (
        <InnerSelect
          svg={<LittleMac width='32px' height='32px' />}
          name='Little Mac'
        />
      ),
    },
    {
      value: 'Lucario',
      label: (
        <InnerSelect
          svg={<Lucario width='32px' height='32px' />}
          name='Lucario'
        />
      ),
    },
    {
      value: 'Lucas',
      label: (
        <InnerSelect svg={<Lucas width='32px' height='32px' />} name='Lucas' />
      ),
    },
    {
      value: 'Lucina',
      label: (
        <InnerSelect
          svg={<Lucina width='32px' height='32px' />}
          name='Lucina'
        />
      ),
    },
    {
      value: 'Luigi',
      label: (
        <InnerSelect svg={<Luigi width='32px' height='32px' />} name='Luigi' />
      ),
    },
    {
      value: 'Mario',
      label: (
        <InnerSelect svg={<Mario width='32px' height='32px' />} name='Mario' />
      ),
    },
    {
      value: 'Marth',
      label: (
        <InnerSelect svg={<Marth width='32px' height='32px' />} name='Marth' />
      ),
    },
    {
      value: 'Mega Man',
      label: (
        <InnerSelect
          svg={<MegaMan width='32px' height='32px' />}
          name='Mega Man'
        />
      ),
    },
    {
      value: 'Meta Knight',
      label: (
        <InnerSelect
          svg={<MetaKnight width='32px' height='32px' />}
          name='Meta Knight'
        />
      ),
    },
    {
      value: 'Mewtwo',
      label: (
        <InnerSelect
          svg={<Mewtwo width='32px' height='32px' />}
          name='Mewtwo'
        />
      ),
    },
    {
      value: 'Mii Brawler',
      label: (
        <InnerSelect
          svg={<MiiFighter width='32px' height='32px' />}
          name='Mii Brawler'
        />
      ),
    },
    {
      value: 'Mii Gunner',
      label: (
        <InnerSelect
          svg={<MiiFighter width='32px' height='32px' />}
          name='Mii Gunner'
        />
      ),
    },
    {
      value: 'Mii Swordfighter',
      label: (
        <InnerSelect
          svg={<MiiFighter width='32px' height='32px' />}
          name='Mii Swordfighter'
        />
      ),
    },
    {
      value: 'Min Min',
      label: (
        <InnerSelect
          svg={<Minmin width='32px' height='32px' />}
          name='Min Min'
        />
      ),
    },
    {
      value: 'Mr Game and Watch',
      label: (
        <InnerSelect
          svg={<MrGameAndWatch width='32px' height='32px' />}
          name='Mr Game and Watch'
        />
      ),
    },
    {
      value: 'Ness',
      label: (
        <InnerSelect svg={<Ness width='32px' height='32px' />} name='Ness' />
      ),
    },
    {
      value: 'Olimar',
      label: (
        <InnerSelect
          svg={<Olimar width='32px' height='32px' />}
          name='Olimar'
        />
      ),
    },
    {
      value: 'PacMan',
      label: (
        <InnerSelect
          svg={<PacMan width='32px' height='32px' />}
          name='PacMan'
        />
      ),
    },
    {
      value: 'Palutena',
      label: (
        <InnerSelect
          svg={<Palutena width='32px' height='32px' />}
          name='Palutena'
        />
      ),
    },
    {
      value: 'Peach',
      label: (
        <InnerSelect svg={<Peach width='32px' height='32px' />} name='Peach' />
      ),
    },
    {
      value: 'Pichu',
      label: (
        <InnerSelect svg={<Pichu width='32px' height='32px' />} name='Pichu' />
      ),
    },
    {
      value: 'Pikachu',
      label: (
        <InnerSelect
          svg={<Pikachu width='32px' height='32px' />}
          name='Pikachu'
        />
      ),
    },
    {
      value: 'Piranha Plant',
      label: (
        <InnerSelect
          svg={<PiranhaPlant width='32px' height='32px' />}
          name='Piranha Plant'
        />
      ),
    },
    {
      value: 'Pit',
      label: (
        <InnerSelect svg={<Pit width='32px' height='32px' />} name='Pit' />
      ),
    },
    {
      value: 'Pokemon Trainer',
      label: (
        <InnerSelect
          svg={<PokemonTrainer width='32px' height='32px' />}
          name='Pokemon Trainer'
        />
      ),
    },
    {
      value: 'Pyra and Mythra',
      label: (
        <InnerSelect
          svg={<PyraMythra width='32px' height='32px' />}
          name='Pyra and Mythra'
        />
      ),
    },
    {
      value: 'Richter',
      label: (
        <InnerSelect
          svg={<Richter width='32px' height='32px' />}
          name='Richter'
        />
      ),
    },
    {
      value: 'Ridley',
      label: (
        <InnerSelect
          svg={<Ridley width='32px' height='32px' />}
          name='Ridley'
        />
      ),
    },
    {
      value: 'Rob',
      label: (
        <InnerSelect svg={<Rob width='32px' height='32px' />} name='Rob' />
      ),
    },
    {
      value: 'Robin',
      label: (
        <InnerSelect svg={<Robin width='32px' height='32px' />} name='Robin' />
      ),
    },
    {
      value: 'Rosalina and Luma',
      label: (
        <InnerSelect
          svg={<RosalinaAndLuma width='32px' height='32px' />}
          name='Rosalina and Luma'
        />
      ),
    },
    {
      value: 'Roy',
      label: (
        <InnerSelect svg={<Roy width='32px' height='32px' />} name='Roy' />
      ),
    },
    {
      value: 'Ryu',
      label: (
        <InnerSelect svg={<Ryu width='32px' height='32px' />} name='Ryu' />
      ),
    },
    {
      value: 'Samus',
      label: (
        <InnerSelect svg={<Samus width='32px' height='32px' />} name='Samus' />
      ),
    },
    {
      value: 'Sephiroth',
      label: (
        <InnerSelect
          svg={<Sephiroth width='32px' height='32px' />}
          name='Sephiroth'
        />
      ),
    },
    {
      value: 'Sheik',
      label: (
        <InnerSelect svg={<Sheik width='32px' height='32px' />} name='Sheik' />
      ),
    },
    {
      value: 'Shulk',
      label: (
        <InnerSelect svg={<Shulk width='32px' height='32px' />} name='Shulk' />
      ),
    },
    {
      value: 'Simon',
      label: (
        <InnerSelect svg={<Simon width='32px' height='32px' />} name='Simon' />
      ),
    },
    {
      value: 'Snake',
      label: (
        <InnerSelect svg={<Snake width='32px' height='32px' />} name='Snake' />
      ),
    },
    {
      value: 'Sonic',
      label: (
        <InnerSelect svg={<Sonic width='32px' height='32px' />} name='Sonic' />
      ),
    },
    {
      value: 'Sora',
      label: (
        <InnerSelect svg={<Sora width='32px' height='32px' />} name='Sora' />
      ),
    },
    {
      value: 'Steve',
      label: (
        <InnerSelect svg={<Steve width='32px' height='32px' />} name='Steve' />
      ),
    },
    {
      value: 'Terry',
      label: (
        <InnerSelect svg={<Terry width='32px' height='32px' />} name='Terry' />
      ),
    },
    {
      value: 'Toon Link',
      label: (
        <InnerSelect
          svg={<ToonLink width='32px' height='32px' />}
          name='Toon Link'
        />
      ),
    },
    {
      value: 'Villager',
      label: (
        <InnerSelect
          svg={<Villager width='32px' height='32px' />}
          name='Villager'
        />
      ),
    },
    {
      value: 'Wario',
      label: (
        <InnerSelect svg={<Wario width='32px' height='32px' />} name='Wario' />
      ),
    },
    {
      value: 'Wii Fit Trainer',
      label: (
        <InnerSelect
          svg={<WiiFitTrainer width='32px' height='32px' />}
          name='Wii Fit Trainer'
        />
      ),
    },
    {
      value: 'Wolf',
      label: (
        <InnerSelect svg={<Wolf width='32px' height='32px' />} name='Wolf' />
      ),
    },
    {
      value: 'Yoshi',
      label: (
        <InnerSelect svg={<Yoshi width='32px' height='32px' />} name='Yoshi' />
      ),
    },
    {
      value: 'Young Link',
      label: (
        <InnerSelect
          svg={<YoungLink width='32px' height='32px' />}
          name='Young Link'
        />
      ),
    },
    {
      value: 'Zelda',
      label: (
        <InnerSelect svg={<Zelda width='32px' height='32px' />} name='Zelda' />
      ),
    },
    {
      value: 'Zero Suit Samus',
      label: (
        <InnerSelect
          svg={<ZeroSuitSamus width='32px' height='32px' />}
          name='Zero Suit Samus'
        />
      ),
    },
  ]
  return (
    <Box w='100%'>
      <InputGroup w='100%'>
        <InputLeftAddon
          w='110px'
          children={`Character:`}
          bgColor={useColorModeValue(`${color}.500`, `${color}.300`)}
          color={useColorModeValue('white', 'black')}
          zIndex='600'
        />
        <Box w='100%' zIndex='599'>
          <Select
            isMulti
            options={options}
            placeholder='Select a character'
            onChange={(chars) => {
              const values = chars.map((char) => {
                return char.value
              })
              onCharacterChange(values)
            }}
          />
        </Box>
      </InputGroup>
    </Box>
  )
}

export default CharacterSelect
