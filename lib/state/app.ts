import { atom } from 'recoil';

export const navState = atom({
  key: 'isNavShown',
  default: false,
});
