declare module 'meteor-promise' {
  export = MeteorPromise;
}

declare var MeteorPromise: MeteorPromise.IMeteorPromise;

declare namespace MeteorPromise {
  export interface IMeteorPromise extends Promise.Ipromise {
    new <T>(resolver: (resolve: (value: T) => void,
            reject: (reason: any) => void) => void): IThenable<T>;

    await<T>(arg: T): T;

    awaitAll(args: Array<Promise.IThenable<any>>): any;

    async<T>(fn: (...args) => T, allowReuseOfCurrentFiber?: boolean): T;

    asyncApply<T>(fn: (...args) => T, context?: any,
                  args?: any[], allowReuseOfCurrentFiber?: boolean): T;
  }

  export interface IThenable<T> extends Promise.IThenable<T> {
    await(): T;
  }
}
