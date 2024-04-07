import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { dotenvFilepath } from "../config/pathConstants";
import { jsonError } from "../config/jsonResponse";

dotenv.config({ path: dotenvFilepath });

type VerificationCode = string;

export const sendVerificationEmail = (
  emailTo: string
): Promise<VerificationCode> => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "iosubdavid7@gmail.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    let verificationCode = Math.floor(Math.random() * 1000000).toString();

    const mailConfig = {
      from: "Instagram <instagram@gmail.com >", //does not work with gmail, only envelope from changes in info response
      to: emailTo,
      subject: "Verify Email Address",
      text: `Verification Code: ${verificationCode}`,
    };

    transporter.sendMail(mailConfig, (err, info) => {
      if (err) return reject(jsonError(err, { info }));

      return resolve(verificationCode);
    });
  });
};
