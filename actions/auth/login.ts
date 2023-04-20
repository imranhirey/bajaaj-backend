import connection from "../../database/Createconnection";
import { Clientlogin } from "../../interfaces";
import { comparePasswords } from "../../utils/comparepasswords";
import tokens from "../../utils/tokens";
import { isemailorphone } from "../../utils/typeprofider";

async function login(data: Clientlogin): Promise<any> {
  let isvalid =
    data.emailorphone &&
    data.password &&
    data.devicetype &&
    isemailorphone(data.emailorphone) != "none";
  console.log(
    isvalid,
    isemailorphone(data.emailorphone),
    typeof data.emailorphone
  );

  let sql = `SELECT * FROM clients WHERE email='${data.emailorphone}' OR phonenumber='${data.emailorphone}'`;
  if (isvalid) {
    return new Promise((resolve, reject) => {
      connection.query(sql, async (err, result) => {
        if (err) {
          reject(err);
        } else {
          // login process and check if password is valid => separete function maybe in the future
          let resp = await comparePasswords(data.password, result[0].password);
          if (resp) {
            let tokenka = tokens.generateToken({
              id: result[0].id,
              email: result[0].email,
              name: result[0].fullname,
              role: "client",
            });

            resolve({
              token: tokenka,
              id: result[0].id,
              message: "login successful",
            });
          } else {
            resolve({ error: "invalid password or email/phone" });
          }
        }
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      resolve({ error: "invalid input" });
    });
  }
}

export default login;
