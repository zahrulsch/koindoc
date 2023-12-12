/* eslint-disable @typescript-eslint/ban-types */
type Args = string | boolean | undefined | null | Record<string, boolean>
type Explode<T> = { [K in keyof T]: T[K] } & {}

export default (...args: Explode<Args>[]) => {
    return args
        .map((arg) => {
            if (!arg) {
                return ""
            }

            if (
                typeof arg === "object" &&
                !Array.isArray(arg) &&
                arg !== null
            ) {
                return Object.entries(arg)
                    .map(([key, value]) => {
                        if (value) return key
                    })
                    .filter(Boolean)
                    .join(" ")
            }

            return arg
        })
        .filter(Boolean)
        .join(" ")
}
