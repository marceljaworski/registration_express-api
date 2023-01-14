function log(req, res, next) {
    console.log(req.methode, req.url);
    next();
}
export default log;