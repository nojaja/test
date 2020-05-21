
class DebugBuilder extends Builder {
    beforeCompile(src) {
        console.log("DebugBuilder", this.stringify(src));
    }
    beforeCreateNodes(src) {
        console.log("DebugBuilder-createNodes", this.stringify(src));
    }
    beforeCreateTagElement(src) {
        console.log("DebugBuilder-beforeCreateTagElement", this.stringify(src));
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
        );
    }

}
