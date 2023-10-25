"use client";

import { block } from "@page-blocks/react";
import { z } from "zod";
import { getValue } from "@iiif/helpers";
import { useManifestFromSlug } from "@/hooks/use-manifest-from-slug";

export default block(
  {
    label: "Manifest Title",
    requiredContext: ["manifest"],
    props: z.object({}),
    examples: [
      {
        label: "Example",
        props: {},
        context: { manifest: "manifests/recipe/0005-image-service" },
      },
    ],
  },
  function ManifestTitle(props) {
    const { manifest } = useManifestFromSlug(props.context.manifest);

    return (
      <>
        {manifest ? (
          <h1 className="text-3xl font-bold mb-4">
            {getValue(manifest.label)}
          </h1>
        ) : null}
      </>
    );
  },
);
