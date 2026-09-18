import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { projectId, dataset } from "./env";

const builder = projectId ? createImageUrlBuilder({ projectId, dataset }) : null;

export function urlForImage(source: Image) {
  return builder ? builder.image(source).auto("format").fit("max") : null;
}
