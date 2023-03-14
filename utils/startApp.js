import logoutButton from '../components/logoutButton';
import { showVocab } from '../pages/vocab';
import { getVocab } from '../api/vocabData';
import domBuilder from '../components/shared/domBuilder';
import navigationEvents from '../events/navEvents';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navBar from '../components/shared/navBar';

const startApp = (user) => {
  domBuilder(user);
  navigationEvents(user);
  domEvents(user);
  formEvents(user);
  logoutButton();
  showVocab(user);
  navBar();

  // TODO: Put all vocab cards on the DOM on App load
  getVocab(user.uid).then((vocab) => showVocab(vocab));
};

export default startApp;
