import sendMultipartRequest from "./sendMultipartRequest";

export default {
  getMemos() {
    return sendMultipartRequest({
      url: "/api/memos",
      method: "get",
    });
  },
  getMemo(memoId) {
    return sendMultipartRequest({
      url: "/api/memos/" + memoId,
      method: "get",
    });
  },
  addMemo(data) {
    return sendMultipartRequest({
      url: "/api/memos",
      method: "post",
      data,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  deleteMemo(memoId) {
    return sendMultipartRequest({
        url: "/api/memos/" + memoId,
        method: "delete",
      });
  }
};
