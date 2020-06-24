const jwt = require("jsonwebtoken");
module.exports.verifyToken=(req, res, next)=>{
    let token = req.headers["x-access-token"];

    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }
  
    jwt.verify(token, process.env.AUTH_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Unauthorized!" });
      }
      console.log(decoded)
      req.userId = decoded.id;//chưa hiểu

      next();
    });
}