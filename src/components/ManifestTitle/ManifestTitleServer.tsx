"use server";
import { block } from "@page-blocks/react";
import { loadManifest } from "@/iiif";
import { getValue } from "@iiif/helpers";
import { config } from "./ManifestTitleServer.config";

const ManifestTitleServer = block(
  config,
  async function ManifestTitleServer(props) {
    const manifest = await loadManifest(props.context.manifest);

    return (
      <>
        <h1 className="text-3xl font-bold mb-4">{getValue(manifest.label)}</h1>
      </>
    );
  },
);

export default ManifestTitleServer;
