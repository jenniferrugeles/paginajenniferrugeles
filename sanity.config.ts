"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { projectId, dataset, apiVersion } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId: projectId || "",
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
