import Timeline from "../components/Timeline/timeline"
import ShinyText from "../components/AboutFest/About"

export default function Home() {
  return (
    <div className="bg-black border-t border-gray-800 mt-70">
      <main className="min-h-screen bg-black py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <ShinyText text="Event Timeline" className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-balance" />
            <p className="text-lg text-gray-400 text-balance">Explore our upcoming events and activities</p>
          </div>
          <Timeline />
        </div>
      </main>
    </div>
  )
}
