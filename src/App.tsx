import { lazy, Suspense, useEffect, useRef } from "react"
import { BsInfoCircleFill } from "react-icons/bs"

const LangkahBuild = lazy(() => import("./sections/LangkahBuild"))
const PersiapanAwal = lazy(() => import("./sections/PersiapanAwal"))
const SoftwarePendukung = lazy(() => import("./sections/SoftwarePendukung"))

function App() {
    const headRef = useRef<HTMLDivElement | null>(null)
    const contentRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const oberser = new IntersectionObserver((els) => {
            els.forEach((el) => {
                if (el.isIntersecting) {
                    headRef.current?.classList.remove("shadow-md")
                } else {
                    headRef.current?.classList.add("shadow-md")
                }
            })
        })

        const element = contentRef.current

        if (element) {
            oberser.observe(element)
        }

        return () => {
            if (element) {
                oberser.unobserve(element)
            }
        }
    }, [])

    return (
        <div className="w-full h-screen overflow-y-auto">
            <div className="w-full bg-white text-stone-800 flex flex-col">
                <div
                    className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-sm duration-300 transition-all"
                    ref={headRef}
                >
                    <div className="container-small w-full py-3">
                        <a
                            href="./koindoc"
                            className="flex items-center gap-1.5"
                            title="KoinDoc"
                        >
                            <h1 className="text-2xl font-bold">KoinDoc</h1>
                            <span className="bg-blue-500 text-white font-bold font-mono text-[10px] flex px-1.5 py-0.5 rounded-md items-center">
                                v1.0
                            </span>
                        </a>
                    </div>
                </div>
                <div ref={contentRef}></div>
                <div className="flex flex-col gap-4 container-small w-full">
                    <div className="flex gap-2 mt-1 bg-blue-100 rounded text-blue-700 px-4 py-3 md:px-3 md:py-2">
                        <div className="text-blue-500 mt-1">
                            <BsInfoCircleFill />
                        </div>
                        <span>
                            Langkah-langkah persiapan cloning coin, perhatikan
                            langkah dibawah dengan seksama.
                        </span>
                    </div>
                    <Suspense>
                        <SoftwarePendukung />
                    </Suspense>
                    <Suspense>
                        <PersiapanAwal />
                    </Suspense>
                    <Suspense>
                        <LangkahBuild />
                    </Suspense>
                </div>
                <div className="h-24"></div>
            </div>
        </div>
    )
}

export default App
