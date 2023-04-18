import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const comparePasswords = async (inputpassword:string,hashedpassword:string): Promise<boolean> => {
    const isMatch = await bcrypt.compare(inputpassword, hashedpassword);
    return isMatch;
  
    
};