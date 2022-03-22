import React from 'react'
import '../syles/card.css'

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1
}

const possibilities = 3

const colors = ['red', 'green', 'purple']

const data = [
  {
    id: 1,
    href: require('../assets/shapes/DiamondOutlined.svg').default,
    num: generateRandomInteger(possibilities),
    color: colors[generateRandomInteger(possibilities)],
  },
  {
    id: 2,
    href: require('../assets/shapes/DiamondSolid.svg').default,
    num: generateRandomInteger(possibilities),
    color: colors[generateRandomInteger(possibilities)],
  },
  {
    id: 3,
    href: require('../assets/shapes/DiamondStriped.svg').default,
    num: generateRandomInteger(possibilities),
    color: colors[generateRandomInteger(possibilities)],
  },
  {
    id: 4,
    href: require('../assets/shapes/OvalOutlined.svg').default,
    num: generateRandomInteger(possibilities),
    color: colors[generateRandomInteger(possibilities)],
  },
  {
    id: 5,
    href: require('../assets/shapes/OvalSolid.svg').default,
    num: generateRandomInteger(possibilities),
    color: colors[generateRandomInteger(possibilities)],
  },
  {
    id: 6,
    href: require('../assets/shapes/OvalStriped.svg').default,
    num: generateRandomInteger(possibilities),
    color: colors[generateRandomInteger(possibilities)],
  },
  {
    id: 7,
    href: require('../assets/shapes/SquiggleOutlined.svg').default,
    num: generateRandomInteger(possibilities),
  },
  {
    id: 8,
    href: require('../assets/shapes/SquiggleSolid.svg').default,
    num: generateRandomInteger(possibilities),
    color: colors[generateRandomInteger(possibilities)],
  },
  {
    id: 9,
    href: require('../assets/shapes/SquiggleStriped.svg').default,
    num: generateRandomInteger(possibilities),
    color: colors[generateRandomInteger(possibilities)],
  },
]

function FigStack(number, attr) {
  return (
    <div className={'flex'}>
      {[...Array(number)].map((e, i) => (
        <img
          className={`${attr.color}`}
          key={attr.id}
          src={attr.href}
          alt='W3Schools.com'
          width={30}
          height={30}
        />
      ))}
    </div>
  )
}

function Card() {
  return (
    <div className='flex flex-col items-center w-full px-5 sm:w-7/12 lg:w-5/12 text-white'>
      <p className='flex justify-start w-full text-5xl ml-10 mb-5 mt-5 font-semibold text-pink-600'>
        Set Game
      </p>
      <div className='dark:bg-black bg-white rounded-xl w-full shadow-lg p-5'>
        <div className='bg-zinc-800 flex justify-center border border-zinc-700 rounded p-5 my-5'>
          <p className='text-lg font-semibold text-zinc-200'>Set Found</p>
        </div>
        <div className='grid grid-cols-3 gap-10 text-white justify-items-center text-center'>
          {data.map((game) => FigStack(game.num, game))}
        </div>
        <div className='mt-5 text-zinc-300'>
          <p>Sets possible: {}</p>
          <p>Total cards left: {}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
