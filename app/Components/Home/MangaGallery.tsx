import MangaItem from "./MangaItem"
import { MangaProp } from "./MangaItem"
import Link from "next/link"
type MangaGalleryProp = {
    mangas: MangaProp[]
}

const MangaGallery = ({ mangas }: MangaGalleryProp) => {
    return (
        <div>
            {mangas && (
                mangas.map(manga => (
                    <Link href={`/manga/${manga.mal_id}`} key={manga.mal_id} className="no-underline">
                        <MangaItem title={manga.title} mal_id={manga.mal_id} synopsis={manga.synopsis} />
                    </Link>
                ))
            )}

        </div>
    )
}

export default MangaGallery