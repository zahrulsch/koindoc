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
                    Silahkan buat akun<span className="code">github</span>
                    yang nantinya digunakan untuk koin anda.
                </li>
                <li className="mt-1">
                    Konfigurasikan<span className="code">Git</span>pada komputer
                    anda agar terkoneksi dengan akun
                    <span className="code">github</span>yang sudah anda buat
                    <a
                        href="https://docs.github.com/en/get-started/getting-started-with-git"
                        className="link font-medium pl-1"
                    >
                        Tutorial
                    </a>
                    . Pastikan konfigurasi benar dan berhasil terkoneksi dengan
                    akun<span className="code">github</span>yang sudah disiapkan
                    baru bisa lanjut ke proses selanjutnya.
                </li>
                <li className="mt-1">
                    <p>
                        Buat folder baru untuk pengembangan koin, kemudian buka
                        dengan<span className="code">VSCode</span>
                    </p>
                </li>
            </ol>
        </div>
    )
}

export default PersiapanAwal
