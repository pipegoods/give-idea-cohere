import { useState } from 'react'
import { getProposalFromCohere } from '../service/getProposalFromCohere.js'

const Banner = ({ changeIdea }) => {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    const response = await getProposalFromCohere()
    setLoading(false)
    changeIdea(response)
  }

  return (
    <div className='bg-white'>
      <div className='text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20'>
        <h2 className='text-3xl font-extrabold text-black  sm:text-4xl'>
          <span className='block'>
            ¿Sin ideas para tu proyecto con <a className='text-gray-500 hover:text-gray-900' href='https://cohere.ai/' target='_blank' rel='noreferrer'>co:here</a>?
          </span>
          <span className='block text-xl sm:text-3xl text-indigo-500 '>
            Deja que te ayude con una propuesta aleatoria generada por la propia IA de co:here.
          </span>
        </h2>
        <div className='lg:mt-0 lg:flex-shrink-0'>
          <div className='mt-12 inline-flex rounded-md shadow'>
            <button onClick={handleClick} type='button' className='py-4 px-6 flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>

              {loading
                ? (
                  <>
                    <svg
                      width='20' height='20' fill='currentColor' className='mr-2 animate-spin' viewBox='0 0 1792 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z'
                      />
                    </svg>
                    Generando propuesta...
                  </>
                  )
                : (
                  <>Generar propuesta</>)}
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Banner
