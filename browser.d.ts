declare module 'meteor-promise' {
  export = MeteorPromise;
}

declare var MeteorPromise: MeteorPromise.IMeteorPromise;

declare namespace MeteorPromise {
  export interface IMeteorPromise extends Promise.Ipromise {}

  export interface IThenable<T> extends Promise.IThenable<T> {}
}
