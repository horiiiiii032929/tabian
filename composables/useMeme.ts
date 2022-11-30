interface Meme {
  memes: { url: string }[]
}

export const useMeme = () => {
  let memes: Meme = { memes: [{ url: '' }] }

  const getMemes = (): Promise<Meme> =>
    fetch('https://meme-api.herokuapp.com/gimme/50')
      .then((res) => res.json())
      .then((x) => Object.assign(memes, x))

  onMounted(getMemes)

  return { memes }
}
