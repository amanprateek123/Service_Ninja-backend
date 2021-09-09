const jwt = require("jsonwebtoken");

const auth = (req: any, res: any, next: any) => {
  const token: string | undefined = req.headers["authorization"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded: object = jwt.verify(token, 'jaimatadi');
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default auth;