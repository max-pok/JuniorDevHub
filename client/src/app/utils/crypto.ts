import AES from 'crypto-js/aes';
import { environment } from 'src/environments/environment';

export const encrypt = (data) => {
  let encryptedData = {};
  const keys = Object.keys(data);
  const values = Object.values(data);

  values.forEach((plaintext, index) => {
    const ciphertext = AES.encrypt(
      plaintext,
      environment.CRYPTO_SECRET_KEY
    ).toString();

    encryptedData = { ...encryptedData, [keys[index]]: ciphertext };
  });
  return encryptedData;
};
