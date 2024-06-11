function errorHandler(e, req, res, next) {


  if (e.name === "JsonWebTokenError") {
 
    return res.status(401).json({ error: "Autorización inválida" });
  } else {
   
    return res
      .status(e.code || 500)
      .json({ message: e.error || "Error" });
  }
}

module.exports = errorHandler;
