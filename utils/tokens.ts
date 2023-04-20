import jwt from "jsonwebtoken";
import { InToken, OutToken } from "../interfaces";
class Token {
  consgructor() {}
  generateToken(data: InToken): any {
    const secret = process.env.JSONWEBTOKENSECRET;

    const token: OutToken = {
      // no exiire time
      token: jwt.sign(data, secret, { expiresIn: "9000h"}),
      timecreated: new Date(),
      revoked: false,
    };
    return token;
  }

  verifyToken(token: string): any {
    const secret = process.env.JSONWEBTOKENSECRET;
    try {
      const decoded = jwt.verify(token, secret);
      return decoded;
    } catch (err) {
      return err;
    }
  }
}

const token = new Token();
export default token;
