import Chat from "@/app/components/chat";
import Footer from "@/app/components/footer";
import PlayerGrid from "@/app/components/grid-player";

export default function Room() {
  return (
    <main className="flex flex-col gap-8 mt-8 justify-between h-screen">
      <div className="flex gap-14 h-[80%] w-full">
        <PlayerGrid />

        <Chat />
      </div>

      <Footer />
    </main>
  )
}