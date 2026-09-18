import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, sanityConfigured } from "./env";

export { sanityConfigured };

export const sanityClient = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;
