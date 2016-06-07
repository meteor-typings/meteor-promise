
let promise = new MeteorPromise<number>((resolve, reject) => {});

promise.await();

let func = (arg1: number, arg2: string) => arg1;

MeteorPromise.async(func);

MeteorPromise.await(10);
