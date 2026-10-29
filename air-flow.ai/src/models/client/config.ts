import env from "@/env";

import { Client, Account, Storage, Databases, Avatars } from "appwrite";

const client = new Client()
  .setEndpoint(env.API_APPWRITE_ENDPOINT) // Your API Endpoint
  .setProject(env.APPWRITE_PROJECT_ID); // Your project ID

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);
const avatars = new Avatars(client);

export { client, account, databases, storage, avatars };
