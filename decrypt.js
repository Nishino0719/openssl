const crypto = require("crypto");
const fs = require("fs");
require("dotenv").config;

const algorithm = "aes-256-cbc";
const key = process.env.DECRYPTE_KEY;
const iv = process.env.DECRYPTE_IV;

const decrypt = (key, iv, source) => {
  const deciper = crypto.createDecipheriv(
    algorithm,
    Buffer.from(key, "hex"),
    Buffer.from(iv, "hex")
  );

  const data = Buffer.from(source, "base64").slice(16);
  const start = deciper.update(data);
  const final = deciper.final();
  const result = Buffer.concat([start, final]).toString("utf8");
  return result;
};

const source = fs.readFileSync("encrypted.txt", { encoding: "utf8" });
const result = decrypt(key, iv, source);

console.log("decrypto", result);
