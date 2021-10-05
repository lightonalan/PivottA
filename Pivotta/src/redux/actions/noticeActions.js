import * as types from './types';

export function getListNoticeAction(payload, callbacks) {
  return {
    type: types.GET_LIST_NOTICE_BOARD,
    payload,
    callbacks,
  };
}
export function getListNoticeSuccessAction(payload) {
  return {
    type: types.GET_LIST_NOTICE_BOARD_SUCCESS,
    payload,
  };
}
export function getListNoticeFailedAction(payload) {
  return {
    type: types.GET_LIST_NOTICE_BOARD_FAILED,
    payload,
  };
}
export function addTopicAction(payload, callbacks) {
  return {
    type: types.ADD_TOPIC,
    payload,
    callbacks,
  };
}

export function addCommentTopicAction(payload, callbacks) {
  return {
    type: types.ADD_COMMENT_TOPIC,
    payload,
    callbacks,
  };
}

export function getListCommentAction(payload, callbacks) {
  return {
    type: types.GET_COMMENTS,
    payload,
    callbacks,
  };
}
