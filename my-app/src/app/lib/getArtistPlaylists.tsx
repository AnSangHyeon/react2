type Playlist = {
  id: string
  name: string
}

type Album = {
  id: number | string
  title?: string
}

export default async function getArtistPlaylists(artistID: string): Promise<Playlist[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${encodeURIComponent(artistID)}`,
    { next: { revalidate: 60 } }
  );

  const albums = await res.json();

  if(!Array.isArray(albums)) return []

  return (albums as Album[]).map((a) => ({
    id: String(a.id),
    name: a.title ?? `Playlist ${a.id}`
  }));
}