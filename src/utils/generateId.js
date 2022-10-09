function makeCounter() {
    let i = 0;
    return () => i++
}

export let id = makeCounter()