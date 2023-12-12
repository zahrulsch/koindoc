import { VscGithubInverted } from "react-icons/vsc"

export type PersiapanAwalProps = {
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

function PersiapanAwal(props: PersiapanAwalProps): JSX.Element {
    const { className, ...rest } = props
    return (
        <div className={classnames("flex flex-col", className)} {...rest}>
            <h4 className="sc-title">
                <VscGithubInverted />
                Persiapan Git
            </h4>
            <ol className="n-list leading-8">
                <li className="mt-1">
                    Silahkan buat akun <span className="code">github</span> yang
                    nantinya digunakan untuk koin anda.
                </li>
                <li className="mt-1">
                    Konfigurasi <span className="code">Git</span> pada komputer
                    anda agar terkoneksi dengan akun{" "}
                    <span className="code">github</span> yang sudah anda buat
                    <a
                        href="https://docs.github.com/en/get-started/getting-started-with-git"
                        className="link font-medium pl-1"
                    >
                        Tutorial
                    </a>
                    . Pastikan konfigurasi benar dan berhasil terkoneksi dengan
                    akun <span className="code">github</span> yang sudah
                    disiapkan baru bisa lanjut ke proses selanjutnya.
                </li>
                <li className="mt-1">
                    <p>
                        Buat folder baru untuk pengembangan koin, kemudian buka
                        folder menggunakan{" "}
                        <span className="code mr-0.5">VSCode</span>, kemudian{" "}
                        buka <span className="code">terminal</span> pada{" "}
                        <span className="code mr-0">VSCode</span>.{" "}
                        <span className="bg-yellow-200/90 pb-1.5 pt-1 rounded italic px-1.5">
                            Note: Semua perintah{" "}
                            <span className="code not-italic">terminal</span>{" "}
                            setelah ini dilakukan di dalam{" "}
                            <span className="code not-italic -mr-1">
                                VSCode
                            </span>
                        </span>
                    </p>
                </li>
                <li className="mt-1">
                    <p>
                        Buka repository{" "}
                        <a
                            className="link"
                            href="https://github.com/PDC-Repository/coin_environment"
                            target="_blank"
                        >
                            https://github.com/PDC-Repository/coin_environment
                        </a>{" "}
                        berikut kemudian clone{" "}
                        <span className="attention">tepat</span> di{" "}
                        <span className="code">root</span> folder yang sudah
                        anda buka.
                    </p>
                </li>
                <li className="mt-1">
                    <p>
                        Buat folder baru dengan nama{" "}
                        <span className="code mr-0">virtuosocoin</span>,
                        kemudian <span className="attention">clone</span> atau{" "}
                        <span className="attention">fork</span> coin yang akan
                        dimodifikasi ke dalam folder tersebut.
                    </p>
                </li>
            </ol>
        </div>
    )
}

export default PersiapanAwal
