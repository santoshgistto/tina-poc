import { defineConfig, defineSchema } from "tinacms";
import { MainContentModel } from "./schema/mainContentModel";

//    const content = window.localStorage.getItem(LOCAL_STORAGE_CONTENT_KEY);
//  window.localStorage.setItem( LOCAL_STORAGE_CONTENT_KEY,JSON.stringify(storySaveData)

import root_content_model from '../content/contentModel/root_content_model.json'

const schema = defineSchema({
  collections: [
    MainContentModel,
    ...root_content_model.collections,
  ],
});

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD, // Netlify branch env
  token: process.env.TINA_TOKEN,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema,
});

export default config;
