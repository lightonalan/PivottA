/**
 *  Redux saga class init
 */
import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types'; 
import noticeSaga from './noticeSaga'; 
export default function* watch() {
  yield all([ 
    takeLatest(types.GET_LIST_NOTICE_BOARD, noticeSaga.getListNoticeSaga),
    takeLatest(types.ADD_TOPIC, noticeSaga.addTopicSaga),
    takeLatest(types.ADD_COMMENT_TOPIC, noticeSaga.addCommentTopicSaga),
    takeLatest(types.GET_COMMENTS, noticeSaga.getListCommentSaga), 
  ]);
}
