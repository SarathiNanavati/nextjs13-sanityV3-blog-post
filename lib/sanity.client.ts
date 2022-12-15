import { ClientConfig, createClient } from "next-sanity";
import createImageUtlBuilder from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const config: ClientConfig = {
  dataset: dataset || "production",
  projectId: projectId,
  apiVersion,
  useCdn: false,
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUtlBuilder({
    dataset: config.dataset!,
    projectId: config.projectId!,
  }).image(source);
