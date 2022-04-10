import { Box, Text } from '@chakra-ui/react'
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
    <Box>
      <Box display='flex'>
        {svg}
        <Text ml='15px' mt='3px' fontSize='18px'>
          {name}
        </Text>
      </Box>
    </Box>
  )
}

const CharacterSelect = () => {
  const svgProps = "width='32px' height='32px'"
  const options = [
    {
      value: 'banjokazooie',
      label: (
        <InnerSelect
          svg={<BanjoAndKazooie width='32px' height='32px' />}
          name='Banjo & Kazooie'
        />
      ),
    },
    {
      value: 'bayonetta',
      label: (
        <InnerSelect
          svg={<Bayonetta width='32px' height='32px' />}
          name='Bayonetta'
        />
      ),
    },
    {
      value: 'bowser',
      label: (
        <InnerSelect
          svg={<Bowser width='32px' height='32px' />}
          name='Bowser'
        />
      ),
    },
    {
      value: 'bowser jr',
      label: (
        <InnerSelect
          svg={<BowserJr width='32px' height='32px' />}
          name='Bowser Jr'
        />
      ),
    },
    {
      value: 'byleth',
      label: (
        <InnerSelect
          svg={<Byleth width='32px' height='32px' />}
          name='Byleth'
        />
      ),
    },
    {
      value: 'captain falcon',
      label: (
        <InnerSelect
          svg={<CaptainFalcon width='32px' height='32px' />}
          name='Captain Falcon'
        />
      ),
    },
    {
      value: 'chrom',
      label: (
        <InnerSelect svg={<Chrom width='32px' height='32px' />} name='Chrom' />
      ),
    },
    {
      value: 'cloud',
      label: (
        <InnerSelect svg={<Cloud width='32px' height='32px' />} name='Cloud' />
      ),
    },
    {
      value: 'corrin',
      label: (
        <InnerSelect
          svg={<Corrin width='32px' height='32px' />}
          name='Corrin'
        />
      ),
    },
    {
      value: 'daisy',
      label: (
        <InnerSelect svg={<Daisy width='32px' height='32px' />} name='Daisy' />
      ),
    },
    {
      value: 'dark pit',
      label: (
        <InnerSelect
          svg={<DarkPit width='32px' height='32px' />}
          name='Dark Pit'
        />
      ),
    },
    {
      value: 'dark samus',
      label: (
        <InnerSelect
          svg={<DarkSamus width='32px' height='32px' />}
          name='Dark Samus'
        />
      ),
    },
    {
      value: 'diddy kong',
      label: (
        <InnerSelect
          svg={<DiddyKong width='32px' height='32px' />}
          name='Diddy Kong'
        />
      ),
    },
    {
      value: 'donkey kong',
      label: (
        <InnerSelect
          svg={<DonkeyKong width='32px' height='32px' />}
          name='Donkey Kong'
        />
      ),
    },
    {
      value: 'dr mario',
      label: (
        <InnerSelect
          svg={<DrMario width='32px' height='32px' />}
          name='Dr Mario'
        />
      ),
    },
    {
      value: 'duck hunt',
      label: (
        <InnerSelect
          svg={<DuckHunt width='32px' height='32px' />}
          name='Duck Hunt'
        />
      ),
    },
    {
      value: 'falco',
      label: (
        <InnerSelect svg={<Falco width='32px' height='32px' />} name='Falco' />
      ),
    },
    {
      value: 'fox',
      label: (
        <InnerSelect svg={<Fox width='32px' height='32px' />} name='Fox' />
      ),
    },
    {
      value: 'ganondorf',
      label: (
        <InnerSelect
          svg={<Ganondorf width='32px' height='32px' />}
          name='Ganondorf'
        />
      ),
    },
    {
      value: 'greninja',
      label: (
        <InnerSelect
          svg={<Greninja width='32px' height='32px' />}
          name='Greninja'
        />
      ),
    },
    {
      value: 'hero',
      label: (
        <InnerSelect svg={<Hero width='32px' height='32px' />} name='Hero' />
      ),
    },
    {
      value: 'ice climbers',
      label: (
        <InnerSelect
          svg={<IceClimbers width='32px' height='32px' />}
          name='Ice Climbers'
        />
      ),
    },
    {
      value: 'ike',
      label: (
        <InnerSelect svg={<Ike width='32px' height='32px' />} name='Ike' />
      ),
    },
    {
      value: 'incineroar',
      label: (
        <InnerSelect
          svg={<Incineroar width='32px' height='32px' />}
          name='Incineroar'
        />
      ),
    },
    {
      value: 'inkling',
      label: (
        <InnerSelect
          svg={<Inkling width='32px' height='32px' />}
          name='Inkling'
        />
      ),
    },
    {
      value: 'isabelle',
      label: (
        <InnerSelect
          svg={<Isabelle width='32px' height='32px' />}
          name='Isabelle'
        />
      ),
    },
    {
      value: 'jigglypuff',
      label: (
        <InnerSelect
          svg={<Jigglypuff width='32px' height='32px' />}
          name='Jigglypuff'
        />
      ),
    },
    {
      value: 'joker',
      label: (
        <InnerSelect svg={<Joker width='32px' height='32px' />} name='Joker' />
      ),
    },
    {
      value: 'kazuya',
      label: (
        <InnerSelect
          svg={<Kazuya width='32px' height='32px' />}
          name='Kazuya'
        />
      ),
    },
    {
      value: 'ken',
      label: (
        <InnerSelect svg={<Ken width='32px' height='32px' />} name='Ken' />
      ),
    },
    {
      value: 'king dedede',
      label: (
        <InnerSelect
          svg={<KingDedede width='32px' height='32px' />}
          name='King Dedede'
        />
      ),
    },
    {
      value: 'king k rool',
      label: (
        <InnerSelect
          svg={<KingKRool width='32px' height='32px' />}
          name='King K Rool'
        />
      ),
    },
    {
      value: 'kirby',
      label: (
        <InnerSelect svg={<Kirby width='32px' height='32px' />} name='Kirby' />
      ),
    },
    {
      value: 'link',
      label: (
        <InnerSelect svg={<Link width='32px' height='32px' />} name='Link' />
      ),
    },
    {
      value: 'little mac',
      label: (
        <InnerSelect
          svg={<LittleMac width='32px' height='32px' />}
          name='Little Mac'
        />
      ),
    },
    {
      value: 'lucario',
      label: (
        <InnerSelect
          svg={<Lucario width='32px' height='32px' />}
          name='Lucario'
        />
      ),
    },
    {
      value: 'lucas',
      label: (
        <InnerSelect svg={<Lucas width='32px' height='32px' />} name='Lucas' />
      ),
    },
    {
      value: 'lucina',
      label: (
        <InnerSelect
          svg={<Lucina width='32px' height='32px' />}
          name='Lucina'
        />
      ),
    },
    {
      value: 'luigi',
      label: (
        <InnerSelect svg={<Luigi width='32px' height='32px' />} name='Luigi' />
      ),
    },
    {
      value: 'mario',
      label: (
        <InnerSelect svg={<Mario width='32px' height='32px' />} name='Mario' />
      ),
    },
    {
      value: 'marth',
      label: (
        <InnerSelect svg={<Marth width='32px' height='32px' />} name='Marth' />
      ),
    },
    {
      value: 'mega man',
      label: (
        <InnerSelect
          svg={<MegaMan width='32px' height='32px' />}
          name='Mega Man'
        />
      ),
    },
    {
      value: 'meta knight',
      label: (
        <InnerSelect
          svg={<MetaKnight width='32px' height='32px' />}
          name='Meta Knight'
        />
      ),
    },
    {
      value: 'mewtwo',
      label: (
        <InnerSelect
          svg={<Mewtwo width='32px' height='32px' />}
          name='Mewtwo'
        />
      ),
    },
    {
      value: 'mii brawler',
      label: (
        <InnerSelect
          svg={<MiiFighter width='32px' height='32px' />}
          name='Mii Brawler'
        />
      ),
    },
    {
      value: 'mii gunner',
      label: (
        <InnerSelect
          svg={<MiiFighter width='32px' height='32px' />}
          name='Mii Gunner'
        />
      ),
    },
    {
      value: 'mii swordfighter',
      label: (
        <InnerSelect
          svg={<MiiFighter width='32px' height='32px' />}
          name='Mii Swordfighter'
        />
      ),
    },
    {
      value: 'min min',
      label: (
        <InnerSelect
          svg={<Minmin width='32px' height='32px' />}
          name='Min Min'
        />
      ),
    },
    {
      value: 'mr game and watch',
      label: (
        <InnerSelect
          svg={<MrGameAndWatch width='32px' height='32px' />}
          name='Mr Game and Watch'
        />
      ),
    },
    {
      value: 'ness',
      label: (
        <InnerSelect svg={<Ness width='32px' height='32px' />} name='Ness' />
      ),
    },
    {
      value: 'olimar',
      label: (
        <InnerSelect
          svg={<Olimar width='32px' height='32px' />}
          name='Olimar'
        />
      ),
    },
    {
      value: 'pacman',
      label: (
        <InnerSelect
          svg={<PacMan width='32px' height='32px' />}
          name='PacMan'
        />
      ),
    },
    {
      value: 'palutena',
      label: (
        <InnerSelect
          svg={<Palutena width='32px' height='32px' />}
          name='palutena'
        />
      ),
    },
    {
      value: 'peach',
      label: (
        <InnerSelect svg={<Peach width='32px' height='32px' />} name='Peach' />
      ),
    },
    {
      value: 'pichu',
      label: (
        <InnerSelect svg={<Pichu width='32px' height='32px' />} name='Pichu' />
      ),
    },
    {
      value: 'pikachu',
      label: (
        <InnerSelect
          svg={<Pikachu width='32px' height='32px' />}
          name='Pikachu'
        />
      ),
    },
    {
      value: 'piranha plant',
      label: (
        <InnerSelect
          svg={<PiranhaPlant width='32px' height='32px' />}
          name='Piranha Plant'
        />
      ),
    },
    {
      value: 'pit',
      label: (
        <InnerSelect svg={<Pit width='32px' height='32px' />} name='Pit' />
      ),
    },
    {
      value: 'pokemon trainer',
      label: (
        <InnerSelect
          svg={<PokemonTrainer width='32px' height='32px' />}
          name='Pokemon Trainer'
        />
      ),
    },
    {
      value: 'pyra and mythra',
      label: (
        <InnerSelect
          svg={<PyraMythra width='32px' height='32px' />}
          name='Pyra and Mythra'
        />
      ),
    },
    {
      value: 'richter',
      label: (
        <InnerSelect
          svg={<Richter width='32px' height='32px' />}
          name='Richter'
        />
      ),
    },
    {
      value: 'ridley',
      label: (
        <InnerSelect
          svg={<Ridley width='32px' height='32px' />}
          name='Ridley'
        />
      ),
    },
    {
      value: 'rob',
      label: (
        <InnerSelect svg={<Rob width='32px' height='32px' />} name='Rob' />
      ),
    },
    {
      value: 'robin',
      label: (
        <InnerSelect svg={<Robin width='32px' height='32px' />} name='Robin' />
      ),
    },
    {
      value: 'rosalina and luma',
      label: (
        <InnerSelect
          svg={<RosalinaAndLuma width='32px' height='32px' />}
          name='Rosalina and Luma'
        />
      ),
    },
    {
      value: 'roy',
      label: (
        <InnerSelect svg={<Roy width='32px' height='32px' />} name='Roy' />
      ),
    },
    {
      value: 'ryu',
      label: (
        <InnerSelect svg={<Ryu width='32px' height='32px' />} name='Ryu' />
      ),
    },
    {
      value: 'samus',
      label: (
        <InnerSelect svg={<Samus width='32px' height='32px' />} name='Samus' />
      ),
    },
    {
      value: 'sephiroth',
      label: (
        <InnerSelect
          svg={<Sephiroth width='32px' height='32px' />}
          name='Sephiroth'
        />
      ),
    },
    {
      value: 'sheik',
      label: (
        <InnerSelect svg={<Sheik width='32px' height='32px' />} name='Sheik' />
      ),
    },
    {
      value: 'shulk',
      label: (
        <InnerSelect svg={<Shulk width='32px' height='32px' />} name='Shulk' />
      ),
    },
    {
      value: 'simon',
      label: (
        <InnerSelect svg={<Simon width='32px' height='32px' />} name='Simon' />
      ),
    },
    {
      value: 'snake',
      label: (
        <InnerSelect svg={<Snake width='32px' height='32px' />} name='Snake' />
      ),
    },
    {
      value: 'sonic',
      label: (
        <InnerSelect svg={<Sonic width='32px' height='32px' />} name='Sonic' />
      ),
    },
    {
      value: 'sora',
      label: (
        <InnerSelect svg={<Sora width='32px' height='32px' />} name='Sora' />
      ),
    },
    {
      value: 'steve',
      label: (
        <InnerSelect svg={<Steve width='32px' height='32px' />} name='Steve' />
      ),
    },
    {
      value: 'terry',
      label: (
        <InnerSelect svg={<Terry width='32px' height='32px' />} name='Terry' />
      ),
    },
    {
      value: 'toon link',
      label: (
        <InnerSelect
          svg={<ToonLink width='32px' height='32px' />}
          name='Toon Link'
        />
      ),
    },
    {
      value: 'villager',
      label: (
        <InnerSelect
          svg={<Villager width='32px' height='32px' />}
          name='Villager'
        />
      ),
    },
    {
      value: 'wario',
      label: (
        <InnerSelect svg={<Wario width='32px' height='32px' />} name='Wario' />
      ),
    },
    {
      value: 'wii fit trainer',
      label: (
        <InnerSelect
          svg={<WiiFitTrainer width='32px' height='32px' />}
          name='Wii Fit Trainer'
        />
      ),
    },
    {
      value: 'wolf',
      label: (
        <InnerSelect svg={<Wolf width='32px' height='32px' />} name='Wolf' />
      ),
    },
    {
      value: 'yoshi',
      label: (
        <InnerSelect svg={<Yoshi width='32px' height='32px' />} name='Yoshi' />
      ),
    },
    {
      value: 'young link',
      label: (
        <InnerSelect
          svg={<YoungLink width='32px' height='32px' />}
          name='Young Link'
        />
      ),
    },
    {
      value: 'zelda',
      label: (
        <InnerSelect svg={<Zelda width='32px' height='32px' />} name='Zelda' />
      ),
    },
    {
      value: 'zero suit samus',
      label: (
        <InnerSelect
          svg={<ZeroSuitSamus width='32px' height='32px' />}
          name='Zero Suit Samus'
        />
      ),
    },
  ]
  return (
    <Box>
      <Select options={options} />
    </Box>
  )
}

export default CharacterSelect
