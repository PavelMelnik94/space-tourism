import { makeAutoObservable } from 'mobx';

const MainStore = (scheme, preloader) =>
  makeAutoObservable(
    {
      scheme,
      preloader,

      setScheme(scheme) {
        this.scheme = scheme;
      },
      setPreloader(preloader) {
        this.preloader = preloader;
      },

      set(key, value) {
        this[key] = value;
      },
    },
    {},
    { autoBind: true },
  );

const state = MainStore();

export default state;
