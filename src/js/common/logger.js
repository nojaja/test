export class Logger {
    constructor() {

        this.log = (...param) => {
            console.log(...param)
        }
        this.debug = (...param) => {
            console.debug(...param)
        }
        this.error = (...param) => {
            console.error(...param)
        }
        this.info = (...param) => {
            console.info(...param)
        }
        this.trace = (...param) => {
            console.trace(...param)
        }
        this.warn = (...param) => {
            console.warn(...param)
        }
        this.onerror = (...event) => {
            console.log(...event)
        }
    }
    setLog(fnc) {
        this.log = fnc
    }
    setDebug(fnc) {
        this.debug = fnc
    }
    setError(fnc) {
        this.error = fnc
    }
    setInfo(fnc) {
        this.info = fnc
    }
    setTrace(fnc) {
        this.trace = fnc
    }
    setWarn(fnc) {
        this.warn = fnc
    }
    setOnerror(fnc) {
        this.onerror = fnc
    }

    getLog() {
        return this.log
    }
    getDebug() {
        return this.debug
    }
    getError() {
        return this.error
    }
    getInfo() {
        return this.info
    }
    getTrace() {
        return this.trace
    }
    getWarn() {
        return this.warn
    }
    getOnerror() {
        return this.onerror
    }

    stringify(str) {
        var cache = [];
        return JSON.stringify(
            str,
            function (key, value) {
                if (typeof value === "object" && value !== null) {
                    if (cache.indexOf(value) !== -1) {
                        // Circular reference found, discard key
                        return;
                    }
                    // Store value in our collection
                    cache.push(value);
                }
                if (key == "parentNode") return;
                return value;
            },
            "\t"
        )
    }
}
export default Logger