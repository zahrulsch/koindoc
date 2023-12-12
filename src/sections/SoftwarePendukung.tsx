import { VscTools } from "react-icons/vsc"

export type SoftwarePendukungProps = {
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

function SoftwarePendukung(props: SoftwarePendukungProps): JSX.Element {
    const { className, ...rest } = props

    return (
        <div className={classnames("flex flex-col", className)} {...rest}>
            <h4 className="sc-title">
                <VscTools />
                Software Pendukung
            </h4>
            <ol className="n-list">
                <li className="mt-1">
                    <div className="flex flex-col gap-1">
                        <h4 className="font-medium">Visual Studio Code</h4>
                        <p>
                            Silahkan gunakan{" "}
                            <span className="code">VSCode</span> untuk code
                            editor atau bisa menggunakan text editor lain.
                            <a
                                href="https://code.visualstudio.com/download"
                                target="_blank"
                                className="link px-1 font-medium"
                            >
                                Download
                            </a>
                        </p>
                    </div>
                </li>
                <li className="mt-1">
                    <div className="flex flex-col gap-1">
                        <h4 className="font-medium">Docker Container Engine</h4>
                        <p>
                            Peran <span className="code">docker</span> adalah
                            sebagai pengganti <span className="code">VM</span>{" "}
                            yang nantinya akan digunakan dari mulai proses{" "}
                            <span className="code">development</span> sampai
                            dengan <span className="code">build</span> hingga{" "}
                            <span className="code">production test</span> coin.
                            <a
                                href="https://www.docker.com/products/docker-desktop/"
                                className="link ml-1 font-medium"
                                target="_blank"
                            >
                                Download
                            </a>{" "}
                            -{" "}
                            <a
                                href="https://docs.docker.com/engine/install/"
                                className="link font-medium"
                                target="_blank"
                            >
                                Tutorial
                            </a>
                        </p>
                    </div>
                </li>
                <li className="mt-1">
                    <div className="flex flex-col gap-1">
                        <h4 className="font-medium">Git</h4>
                        <p>
                            Digunakan sebagai version control.
                            <a
                                href="https://www.docker.com/products/docker-desktop/"
                                className="link px-1 font-medium"
                                target="_blank"
                            >
                                Download
                            </a>
                        </p>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default SoftwarePendukung
