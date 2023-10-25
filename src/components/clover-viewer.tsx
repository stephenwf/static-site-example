"use client";
import { block } from "@page-blocks/react";
import { z } from "zod";
import { getManifestUrl } from "@/iiif.client";
import dynamic from "next/dynamic";

const LazyClover = dynamic(() => import("@samvera/clover-iiif"), {
  ssr: false,
});
export default block(
  {
    label: "Clover Viewer",
    requiredContext: ["manifest"],
    props: z.object({}),
    examples: [
      {
        label: "Clover viewer",
        props: {},
        context: { manifest: "manifests/recipe/0005-image-service" },
      },
    ],
  },
  function CloverViewer(props) {
    if (!props.context.manifest) {
      return null;
    }

    const manifest = getManifestUrl(props.context.manifest);
    return (
      <div style={{ height: 600, display: "block" }}>
        <LazyClover
          iiifContent={manifest}
          options={{ canvasHeight: "530px" }}
        />
      </div>
    );
  },
);
