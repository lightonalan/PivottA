import { call, put } from "@redux-saga/core/effects";
import API from "src/common/network/API"
import responseCode from "src/utils/constant/responseCode";
import { getListNoticeSuccessAction } from "../actions/noticeActions";
function* getListNoticeSaga(action) {
    const { onSuccess, onFailed } = action.callbacks;
    try {
        const response = yield API.getListNoticeApi(action.payload);
        if (response && response.status == responseCode.OK) {
            yield call(onSuccess, response.data) 
        } else {
            yield call(onFailed, '')
        }

    } catch (err) {

        yield call(onFailed, '')
    }

}
function* addTopicSaga(action) {
    const { onSuccess, onFailed } = action.callbacks;
    try {
        const response = yield API.addTopicApi(action.payload);
        if (response && response.status === responseCode.OK) {
            yield call(onSuccess, response.data)
        } else {
            yield call(onFailed, '')
        }
    } catch (err) {
        const response = err.response;
        const message = response?.data?.error?.message || ''
        yield call(onFailed, message)
    }
}
function* addCommentTopicSaga(action) {
    const { onSuccess, onFailed } = action.callbacks;
    try {
        const response = yield API.addCommentTopicApi(action.payload);
        console.log("addCommentTopicSaga", response);
        if (response) {
            yield call(onSuccess, response)
        } else {
            yield call(onFailed, '')
        }

    } catch (err) {
        console.log(err);
        yield call(onFailed, '')
    }
}
function* getListCommentSaga(action) {
    const { onSuccess, onFailed } = action.callbacks;
    try {
        const response = yield API.getCommentsApi(action.payload);
        if (response) {
            yield call(onSuccess, response.data)
        } else {
            yield call(onFailed, '')
        }

    } catch (err) {
        console.log(err);
        yield call(onFailed, '')
    }
}
export default {
    getListNoticeSaga,
    addTopicSaga,
    addCommentTopicSaga,
    getListCommentSaga
}