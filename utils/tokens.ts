import jwt from "jsonwebtoken";
import { AppToken } from "../interfaces";
class Token {
  consgructor() {}
  public static generateToken(): any {
    const payload = { id: 1, name: "John Doe" };
    const secret = process.env.JSONWEBTOKENSECRET;

    const token: AppToken = {
      token: jwt.sign(payload, secret, { expiresIn: "1h" }),
      timecreated: new Date(),
      revoked: false,
    };
    return token;
  }
}

const token = new Token();
export default token;
