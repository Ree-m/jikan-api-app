import { MangaProp } from "@/app/Components/Home/MangaItem"
type MangaDetailsProp={
  chapters:number
} & MangaProp

const MangaDetails = ({title,synopsis,mal_id,chapters}: MangaDetailsProp) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{synopsis}</p>
        <p>{`Chapters:${chapters}`}</p>
    </div> 
  )
}

export default MangaDetails