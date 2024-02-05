import Chat from "@/app/components/chat";
import Footer from "@/app/components/footer";
import PlayerGrid from "@/app/components/grid-player";

export default function Room() {
  return (
    <main className="h-screen flex flex-col gap-8 mt-8 justify-between">
      <div className="grid grid-cols-4 gap-14 h-[80%]">
        <PlayerGrid />

        <Chat />
      </div>

      <Footer />
    </main>
  )
}