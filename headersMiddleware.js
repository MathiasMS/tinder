module.exports = function (req, res, next,end) {
  console.log("Headers");
  const headers = {
        'User-Agent'      : 'Tinder Android Version 4.5.5',
        'os_version'      : '23',
        'platform'        : 'android',
        'app-version'     : '854',
        'Accept-Language' : 'en',
    };
  res.set(headers);
  next();
}