import React, { useState } from 'react'
import '../syles/card.css'
import toast from 'react-hot-toast'

function generateRandomInteger(possibilities, diff) {
  return Math.floor(Math.random() * possibilities) + diff
}

const possibilities = 3

const colors = ['red', 'green', 'purple']

const options = [
  {
    id: 1,
    url: require('../assets/shapes/DiamondOutlined.svg').default,
  },
  {
    id: 2,
    url: require('../assets/shapes/DiamondSolid.svg').default,
  },
  {
    id: 3,
    url: require('../assets/shapes/DiamondStriped.svg').default,
  },
  {
    id: 4,
    url: require('../assets/shapes/OvalOutlined.svg').default,
  },
  {
    id: 5,
    url: require('../assets/shapes/OvalSolid.svg').default,
  },
  {
    id: 6,
    url: require('../assets/shapes/OvalStriped.svg').default,
  },
  {
    id: 7,
    url: require('../assets/shapes/SquiggleOutlined.svg').default,
  },
  {
    id: 8,
    url: require('../assets/shapes/SquiggleSolid.svg').default,
  },
  {
    id: 9,
    url: require('../assets/shapes/SquiggleStriped.svg').default,
  },
]

const data = [
  {
    href: options[generateRandomInteger(9, 0)],
    num: generateRandomInteger(possibilities, 1),
    color: colors[generateRandomInteger(possibilities, 0)],
  },
  {
    href: options[generateRandomInteger(options.length, 0)],
    num: generateRandomInteger(possibilities, 1),
    color: colors[generateRandomInteger(possibilities, 0)],
  },
  {
    href: options[generateRandomInteger(options.length, 0)],
    num: generateRandomInteger(possibilities, 1),
    color: colors[generateRandomInteger(possibilities, 0)],
  },
  {
    href: options[generateRandomInteger(options.length, 0)],
    num: generateRandomInteger(possibilities, 1),
    color: colors[generateRandomInteger(possibilities, 0)],
  },
  {
    href: options[generateRandomInteger(options.length, 0)],
    num: generateRandomInteger(possibilities, 1),
    color: colors[generateRandomInteger(possibilities, 0)],
  },
  {
    href: options[generateRandomInteger(options.length, 0)],
    num: generateRandomInteger(possibilities, 1),
    color: colors[generateRandomInteger(possibilities, 0)],
  },
  {
    href: options[generateRandomInteger(options.length, 0)],
    num: generateRandomInteger(possibilities, 1),
    color: colors[generateRandomInteger(possibilities, 0)],
  },
  {
    href: options[generateRandomInteger(options.length, 0)],
    num: generateRandomInteger(possibilities, 1),
    color: colors[generateRandomInteger(possibilities, 0)],
  },
  {
    href: options[generateRandomInteger(options.length, 0)],
    num: generateRandomInteger(possibilities, 1),
    color: colors[generateRandomInteger(possibilities, 0)],
  },
  {
    href: options[generateRandomInteger(options.length, 0)],
    num: generateRandomInteger(possibilities, 1),
    color: colors[generateRandomInteger(possibilities, 0)],
  },
  {
    href: options[generateRandomInteger(options.length, 0)],
    num: generateRandomInteger(possibilities, 1),
    color: colors[generateRandomInteger(possibilities, 0)],
  },
  {
    href: options[generateRandomInteger(options.length, 0)],
    num: generateRandomInteger(possibilities, 1),
    color: colors[generateRandomInteger(possibilities, 0)],
  },
]

const comparations = []

function FigStack(attr) {
  const [disabled, setDisabled] = useState(false)

  function Selector() {
    if (comparations.length < 3) {
      let figure = attr.href.id
      let shading = attr.href.id % 3 !== 0 ? attr.href.id % 3 : 3
      if (figure < 4) {
        figure = 1
      } else if (figure > 3 && figure < 7) {
        figure = 2
      } else {
        figure = 3
      }

      comparations.push([figure, attr.color, attr.num, shading])
      console.log(comparations.slice(-1))
    }

    if (comparations.length === 3) {
      const isShape =
        (comparations[0][0] === comparations[1][0]) +
        (comparations[0][0] === comparations[2][0]) +
        (comparations[1][0] === comparations[2][0])
      const isColor =
        (comparations[0][1] === comparations[1][1]) +
        (comparations[0][1] === comparations[2][1]) +
        (comparations[1][1] === comparations[2][1])
      const isSymbol =
        (comparations[0][2] === comparations[1][2]) +
        (comparations[0][2] === comparations[2][2]) +
        (comparations[1][2] === comparations[2][2])
      const isShade =
        (comparations[0][3] === comparations[1][3]) +
        (comparations[0][3] === comparations[2][3]) +
        (comparations[1][3] === comparations[2][3])

      if (isShape === 0 || isShape === 3) {
        if (isColor === 0 || isColor === 3) {
          if (isSymbol === 0 || isSymbol === 3) {
            if (isShade === 0 || isShade === 3) {
              toast.success('Correct set!')
            } else {
              toast.error('Incorrect set!')
            }
          } else {
            toast.error('Incorrect set!')
          }
        } else {
          toast.error('Incorrect set!')
        }
      } else {
        toast.error('Incorrect set!')
      }
      comparations.splice(0, comparations.length)
    }
  }

  function enableIt() {
    console.log(comparations.length)
    if (comparations.length === 0) {
      setDisabled(false)
    }
  }

  return (
    <button
      className={''}
      disabled={disabled}
      onClick={() => {
        Selector()
        setDisabled(true)
        enableIt()
      }}
    >
      <div
        className={`${
          disabled
            ? 'flex rounded-xl py-2 px-2 bg-zinc-800 border border-zinc-700 '
            : 'flex rounded-xl py-2 px-2 hover:bg-zinc-800 border border-zinc-800'
        }`}
      >
        {[...Array(attr.num)].map((e, i) => (
          <img
            className={`${attr.color}`}
            src={attr.href.url}
            alt='W3Schools.com'
            width={30}
            height={30}
          />
        ))}
      </div>
    </button>
  )
}

function Card() {
  return (
    <div className='flex flex-col items-center w-full px-5 sm:w-8/12 lg:w-6/12 text-white'>
      <p className='flex justify-start w-full text-4xl ml-10 mb-2 mt-5 font-semibold text-pink-600'>
        Set Game
      </p>
      <div className='dark:bg-black bg-white rounded-xl w-full shadow-lg py-6'>
        {/* <div className='bg-zinc-800 flex justify-center border border-zinc-700 rounded p-5 my-5'>
          <p className='text-lg font-semibold text-zinc-200'>Set Found</p>
        </div> */}
        <div className='grid grid-cols-3 gap-y-10 text-white justify-items-center text-center'>
          {data.map((game) => FigStack(game))}
        </div>
        <div className='md:pl-10 pl-4 pt-5'>
          <p>Possible sets: -{}</p>
          <p>Total cards: -{}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
