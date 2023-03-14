// import {
//   getVocab
// } from '../api/vocabData';
import { signOut } from '../utils/auth';
// import { showVocab } from '../pages/vocab';
// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  // test
  document.querySelector('#login-form-container')
    .addEventListener('click', signOut);
  // TODO: ALL VOCAB
  // document.querySelector('#all-vocab').addEventListener('click', () => {
  //   getVocab(user.uid).then(showVocab);
  // });
  // document.querySelector('#html-vocab').addEventListener('click', () => {
  //   htmlVocab(user.uid).then(showVocab);
  // });
  // document.querySelector('#css-vocab').addEventListener('click', () => {
  //   cssVocab(user.uid).then(showVocab);
  // });

  // document.querySelector('#js-vocab').addEventListener('click', () => {
  //   jsVocab(user.uid).then(showVocab);
  // });
};
export default navigationEvents;
