import { COHERE_API_GENERATE_URL, COHERE_API_KEY } from '../config/index.js'

export const getProposalFromCohere = async () => {
  const response = await fetch(COHERE_API_GENERATE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `BEARER ${COHERE_API_KEY}`
    },
    body: JSON.stringify({
      model: 'command-xlarge-20221108',
      prompt: 'Give me a idea for project using co:here api',
      max_tokens: 100,
      temperature: 0.9,
      k: 0,
      p: 0.75,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: [],
      return_likelihoods: 'NONE'
    })
  })

  const data = await response.json()
  return data
}
