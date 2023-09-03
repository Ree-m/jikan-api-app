import MangaGallery from "./MangaGallery"

async function fetchManga(){
  const response = await fetch(`https://api.jikan.moe/v4/manga`)
  const data =await response.json()
  return data.data
}

const Home = async() => {
  let mangas = await fetchManga()

  return (
    <div>
        <MangaGallery mangas={mangas}/>

    </div>
  )
}

export default Home