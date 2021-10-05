const UnauthorizeStatusCode = 400;
// const OldVersionAppStatusCode = 423;

export default UnauthorizeInterceptor = {
  onFullfilled: response => {
    return Promise.resolve(response);
  },

  onRejected: error => {
    if (error) {
      console.log(error);
      if (
        error &&
        error.response &&
        error.response.status === UnauthorizeStatusCode
      ) {
        alert(
          error &&
            error.response &&
            error.response.data &&
            error.response.data.message
            ? error.response.data.message
            : 'Server error',
        );
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  },
};
