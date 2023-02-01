import { useState } from 'react'
import Banner from './components/Banner'
import Footer from './components/Footer'

const App = () => {
  const [idea, setIdea] = useState('')

  const changeIdea = async (idea) => {
    setIdea(idea)
  }

  const isIdeadGenerated = idea?.text

  return (
    <section>
      <Banner changeIdea={changeIdea} />
      <main className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

        {isIdeadGenerated && (
          <h3 className='text-center text-xl font-extrabold text-gray-900 mb-5'>
            idea generada
          </h3>
        )}
        <p
          className='text-center text-gray-500 text-lg'
          dangerouslySetInnerHTML={{ __html: idea?.text }}
        />

        <div className='mt-10 text-center'>
          {isIdeadGenerated && (
            <a className='bg-black text-white py-3 px-5 rounded' href={`https://www.deepl.com/es/translator#en/es/${idea?.text}`} target='_blank' rel='noreferrer'>
              Traducir en DeepL
            </a>)}
        </div>
      </main>
      <Footer />
    </section>
  )
}

export default App
