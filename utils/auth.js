import { compare, hash } from "bcryptjs";

const hashPassword = async (e) => {
  const hashedPassword = await hash(e, 10);
  return hashedPassword;
};

const verifyPassword = async(password, hashedPassword) => {
    const isValid = await compare(password, hashedPassword);
    return isValid
}

export { hashPassword, verifyPassword };
