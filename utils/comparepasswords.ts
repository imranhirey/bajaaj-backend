import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const comparePasswords = async (inputpassword:string,hashedpassword:string): Promise<boolean> => {
    console.log(inputpassword, hashedpassword)
    const isMatch = await bcrypt.compare(inputpassword, hashedpassword);
    console.log(isMatch)
    return isMatch;
  
    
};