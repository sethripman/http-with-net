module.exports = rawReq => {
  let request = rawReq.toString().split('\n');
  let stringReq = request.toString().split(' ');

  let method = stringReq[0];
  let path = stringReq[1];
  const body = rawReq.split('\r\n\r\n')[1];

  return { method, path, body };
};
