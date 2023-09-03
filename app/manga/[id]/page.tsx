import MangaDetails from "@/app/Components/MangaDetails/MangaDetails"

async function fetchMangaDetails(id:number){
  const response = await fetch(`https://api.jikan.moe/v4/manga/${id}`)
  const data = await response.json()
  return data.data
}

const MangaDetailsPage = async({params}: {params: { id: string}}  ) => {
  console.log("params",params.id)
  let id =Number(params.id)

  let mangaDetails = await fetchMangaDetails(id)
  return (
    <div>
     <MangaDetails mal_id={mangaDetails.mal_id} title={mangaDetails.title} synopsis={mangaDetails.synopsis} chapters={mangaDetails.chapters}/>
      

    </div>

  )
}

export default MangaDetailsPage