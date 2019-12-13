module.exports = inputObject => {
  return `HTTP/1.1 ${inputObject.status}
  Accept-Ranges: bytes
  Content-Length: ${inputObject.body.length - 1}
  Content-Type: ${inputObject.contentType}
  ${inputObject.body}`;
};
