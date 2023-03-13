import { getSingleVocab } from './vocabData';

// TODO: Get data for viewVocab
const VocabDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE VOCAB
  getSingleVocab(firebaseKey).then((vocabObject) => {
    getSingleVocab(firebaseKey)
      .then(() => resolve({ ...vocabObject }));
  }).catch(reject);
});

export default VocabDetails;
