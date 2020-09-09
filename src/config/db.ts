import dotenv from 'dotenv';
dotenv.config();
export const dbConfig = {
  connectionString: process.env.CONNECTION_URI,
  database: 'asad-ali',
  cosmos_endpoint: 'https://asad-ali.mongo.cosmos.azure.com:443/',
  cosmos_key:
    'JJplGc028XrEoEDz3LQrxRp49jeRFb4rXmtpBSCLHxJXVaHiVkGw2CkRyHu8uppw7l3riRhYlnC3S4FpHVR9Hg==',
};
