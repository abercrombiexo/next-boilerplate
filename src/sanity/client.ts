import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "kv0uj26e",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});