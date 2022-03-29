import React, { useState } from 'react'
import '../syles/card.css'
import toast from 'react-hot-toast'
import fillData from '../functions/fillData'

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
  const [arrayData, setArrayData] = useState(fillData())
  return (
    <div className='flex flex-col items-center w-full px-5 sm:w-8/12 lg:w-6/12 text-white pt-5'>
      <p className='flex justify-start w-full text-4xl ml-10 mb-2 sm:mt-0 md:mt-5 font-semibold text-pink-600'>
        Set Game
      </p>

      <div className='bg-black rounded-xl w-full shadow-lg py-6'>
        <div className='grid grid-cols-3 gap-y-6 sm:gap-y-8 text-white justify-items-center text-center'>
          {arrayData.slice(0, 12).map((game) => FigStack(game))}
        </div>

        <div className='pt-4'>
          <div className='w-full flex justify-center border-t border-gray-700'></div>
        </div>
        <div className='flex justify-end'>
          {/* <div className='md:pl-10 pl-4 pt-5'>
            <p>Possible sets: -{}</p>
            <p>Total cards: -{}</p>
          </div> */}
          <button
            className='py-1 px-3 mr-3 mt-5 border border-gray-700 rounded-full text-pink-600 bg-zinc-900'
            onClick={() => {
              setArrayData(fillData())
            }}
          >
            Shuffle
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
