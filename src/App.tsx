import PersiapanAwal from "./sections/PersiapanAwal"
import SoftwarePendukung from "./sections/SoftwarePendukung"

function App() {
    return (
        <div className="container-small bg-white h-full text-stone-800 flex flex-col gap-4">
            <div className="p-2 px-5 mt-1">
                <h1 className="text-2xl font-bold">KoinDoc</h1>
                <p className="mt-1">Langkah-langkah persiapan cloning coin</p>
            </div>
            <div className="px-5 flex flex-col gap-4">
                <SoftwarePendukung />
                <PersiapanAwal />
            </div>
        </div>
    )
}

export default App
