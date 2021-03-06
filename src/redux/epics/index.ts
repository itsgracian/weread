import { Epic, combineEpics } from 'redux-observable';
import { RootState, RootAction } from '..';
import {
  welcomeEpic,
  loginWithGoogleEpic,
  logoutEpic,
  verifyAuthenticationEpic,
} from './AuthEpic';

import {
  uploadImageEpic,
  uploadAudioBookEpic,
  uploadPdfEpic,
  deleteBookFileEpic,
  listenToAllBookEpic,
  newBookEpic,
  listenToAllCategoryEpic,
  searchBookEpic,
  listenToSpecificBookEpic
} from './BookEpic';

export default combineEpics(
  welcomeEpic,
  loginWithGoogleEpic,
  logoutEpic,
  verifyAuthenticationEpic,
  uploadImageEpic,
  uploadAudioBookEpic,
  uploadPdfEpic,
  deleteBookFileEpic,
  listenToAllBookEpic,
  newBookEpic,
  listenToAllCategoryEpic,
  searchBookEpic,
  listenToSpecificBookEpic
);

export type RootEpic = Epic<RootAction, RootAction, RootState>;
