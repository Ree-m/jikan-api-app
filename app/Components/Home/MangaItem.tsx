export type MangaProp={
    mal_id:number,
    title:string,
    synopsis:string,
    
    
    }
    
const MangaItem = ({title,synopsis,mal_id}:MangaProp) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{synopsis}</p>
    </div>
  )
}

export default MangaItem