module.exports = {
  beforeRequest: function (requestParams, context, ee, next) {
    let size = 0;

    // Zlicz URL
    if (requestParams.url) {
      console.log(requestParams.url);
      size += Buffer.byteLength(requestParams.url, "utf8");
    }

    // Zlicz body (GraphQL POST)
    if (requestParams.body) {
      console.log(requestParams.body);
      size += Buffer.byteLength(requestParams.body, "utf8");
    }

    // Body JSON
    if (requestParams.json) {
      const jsonString = JSON.stringify(requestParams.json);
      size += Buffer.byteLength(jsonString, "utf8");
    }

    console.log("Request size (bytes):", size);
    return next();
  },
};
