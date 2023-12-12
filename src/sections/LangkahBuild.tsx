import { lazy, Suspense } from "react"
import { VscServerProcess } from "react-icons/vsc"

const Code = lazy(() => import("../components/Code"))

export type LangkahBuildProps = {
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

const code = {
    startCompose: `$ docker compose up
[+] Running 1/0
 ✔ Container virtuoso_deployer  Recreated   0.1s 
Attaching to virtuoso_deployer`,
    checkContainerList: `$ docker container list
CONTAINER ID   IMAGE              COMMAND                  CREATED          STATUS          PORTS                                 NAMES
89ba94xxxxxx   virtuosodeployer   "sleep infinity"         12 minutes ago   Up 12 minutes   0.0.0.0:33333->33333/tcp, 33445/tcp   virtuoso_deployer`,
    containerExec: `$ docker exec -it virtuoso_deployer /bin/bash
root@89ba94e2d0b8:~# `,
    cdCoin: `root@89ba9dscd0b8:~# cd coin`,
    build: `root@89ba94e2d0b8:~/coin# ../tool/buildunix.sh`,
}

function LangkahBuild(props: LangkahBuildProps): JSX.Element {
    const { className, ...rest } = props

    return (
        <div className={classnames("flex flex-col", className)} {...rest}>
            <h4 className="sc-title">
                <VscServerProcess />
                Langkah Build Coin
            </h4>
            <ol className="n-list leading-8">
                <li className="mt-1">
                    <div className="flex flex-col gap-1">
                        <p>
                            Jalankan{" "}
                            <span className="code">docker compose</span> yang
                            sudah disediakan dengan mengetikkan perintah pada{" "}
                            <span className="code">terminal</span> :
                        </p>
                        <Suspense>
                            <Code lang="bash" codeString={code.startCompose} />
                        </Suspense>
                        <p>
                            Tunggu sampai sampai{" "}
                            <span className="attention">instance</span> berhasil
                            berjalan dengan sempurna.
                        </p>
                    </div>
                </li>
                <li className="mt-1">
                    <div className="flex flex-col gap-1">
                        <p>
                            Masuk kedalam <span className="code">terminal</span>{" "}
                            container, buka{" "}
                            <span className="code">terminal</span> baru di{" "}
                            <span className="code">VSCode</span> kemudian
                            jalankan perintah :
                        </p>
                        <Suspense>
                            <Code
                                lang="bash"
                                codeString={code.checkContainerList}
                            />
                        </Suspense>
                    </div>
                </li>
                <li className="mt-1">
                    <div className="flex flex-col gap-1">
                        <p>
                            Kemudian masuk kedalam container menggunakan ID /
                            Name container :
                        </p>
                        <Suspense>
                            <Code codeString={code.containerExec} lang="bash" />
                        </Suspense>
                        <p>
                            pastikan anda berada di folder{" "}
                            <span className="code mr-0">root</span>, tandanya
                            ada <span className="code">~</span> setelah{" "}
                            <span className="code">#</span> seperti pada code
                            diatas.
                        </p>
                    </div>
                </li>
                <li className="mt-1">
                    <div className="flex flex-col gap-1">
                        <p>
                            Masuk kedalam folder{" "}
                            <span className="code">coin</span>:
                        </p>
                        <Suspense>
                            <Code codeString={code.cdCoin} lang="bash" />
                        </Suspense>
                        <div>
                            <p>
                                Kemudian jalankan perintah build sesuai dengan
                                platform target
                            </p>
                            <ul className="u-list">
                                <li>
                                    <p>
                                        <span className="code">
                                            buildunix.sh
                                        </span>{" "}
                                        untuk platform{" "}
                                        <span className="code">linux</span> atau{" "}
                                        <span className="code">unix</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span className="code">
                                            buildwin.sh
                                        </span>{" "}
                                        untuk platform{" "}
                                        <span className="code">windows</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <Suspense>
                            <Code codeString={code.build} lang="bash" />
                        </Suspense>
                        <p>tunggu sampai proses selesai.</p>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default LangkahBuild
