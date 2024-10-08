import dotenv from 'dotenv';
import * as path from 'path';
import { Request, Response } from 'express'; // Import der Typen aus express
import { AxiosError } from 'axios'; // Falls der Fehler von Axios stammt

dotenv.config({
  path: path.resolve(__dirname, '../web/.env'),
});

const config = {
  integrations: {
    plentysystems: {
      location: '@plentymarkets/shop-api/server',
      configuration: {
        api: {
          url: process.env.API_ENDPOINT,
          securityToken: process.env.API_SECURITY_TOKEN ?? '',
        },
      },
      errorHandler: (error: AxiosError, req: Request, res: Response) => {
        // Verwende AxiosError für den Fehler und die Request/Response Typen von Express
        if (error?.response?.status) {
          res.status(error.response.status).send(error.response?.data);
        } else {
          res.status(500).send(error.message); // Füge 'message' hinzu, da 'error' ein Objekt ist
        }
      },
    },
  },
};

export default config;
