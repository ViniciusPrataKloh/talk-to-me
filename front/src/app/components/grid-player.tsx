import Player from "./player";

export default function PlayerGrid() {
  return (
    <section className="bg-blue-900 rounded-md w-full h-full col-span-3">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <Player />
        <Player />
        <Player />
        <Player />
      </div>
    </section>
  )
}