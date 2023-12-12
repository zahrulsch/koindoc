/* eslint-disable @typescript-eslint/no-explicit-any */
import { toHtml } from "hast-util-to-html"
import { useMemo } from "react"
import { refractor } from "refractor/lib/core"

import bash from "refractor/lang/bash"
import cpp from "refractor/lang/cpp"
import go from "refractor/lang/go"
import javascript from "refractor/lang/javascript"
import jsx from "refractor/lang/jsx"
import makefile from "refractor/lang/makefile"
import shell from "refractor/lang/shell-session"
import tsx from "refractor/lang/tsx"
import typescript from "refractor/lang/typescript"

import "prismjs/themes/prism.min.css"

const langs = {
    tsx,
    typescript,
    bash,
    cpp,
    jsx,
    javascript,
    go,
    makefile,
    shell,
} as const

export type CodeProps = {
    className?: string
    style?: React.CSSProperties
    codeString?: string | null
    lang?: keyof typeof langs
}

function Code(props: CodeProps): JSX.Element {
    const { className, codeString = "", lang = "javascript", ...rest } = props

    const classNames = useMemo(() => {
        return "language-" + lang
    }, [lang])

    const content = useMemo(() => {
        if (!codeString) return null

        refractor.register(langs[lang])
        return toHtml(refractor.highlight(codeString, lang) as any)
    }, [codeString, lang])

    return (
        <div className="relative rounded overflow-hidden !my-1">
            <pre
                className={classnames("text-sm !my-0", classNames, className)}
                {...rest}
            >
                {content !== null && (
                    <code
                        className={classnames(
                            "!font-mono !text-sm",
                            classNames
                        )}
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                )}
            </pre>
            <span className="overflow-hidden bg-amber-500 px-2 text-[11px] text-white uppercase rounded-bl absolute top-0 right-0 leading-4">
                {lang}
            </span>
        </div>
    )
}

export default Code
