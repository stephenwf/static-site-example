import slugs from "../../public/config/slugs.json";
import { useExternalManifest } from "react-iiif-vault";
import { client } from "@/iiif.client";

export function useManifestFromSlug(manifestSlug: string) {
  const resolved = client.resolveFromSlug(
    manifestSlug,
    "Manifest",
    slugs as any,
  );

  const url = resolved?.match ?? `/${manifestSlug}/manifest.json`;

  return useExternalManifest(url);
}
