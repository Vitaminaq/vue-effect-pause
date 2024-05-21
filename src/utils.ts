export const longTask = (count: number = 1) => {
    let start = performance.now();

    for (let n = 0; n < count; n++) {
        for (let i = 0; i < 1000000000; i++) {
            //
        }
    }
    console.log(`耗时 ${performance.now() - start} ms`);
}