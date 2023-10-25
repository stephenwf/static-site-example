"use client";

import { SimpleViewerProvider, VaultProvider } from "react-iiif-vault";
import { Viewer } from "@/components/manifest-viewer/viewer";
import { block } from "@page-blocks/react";
import { z } from "zod";
import { ManifestSearchResponse } from "@/blocks/sources/manifest-source";

export const ManifestViewer = block(
  {
    label: "Manifest viewer",
    props: z.object({
      manifest: z.string(),
      height: z.number().optional(),
      // pagingEnabled: z.boolean().optional(),
    }),
    propSources: [
      {
        type: "search",
        url: `/api/manifests?q=%`,
        mapToList: (response: ManifestSearchResponse) => {
          return response.results.map((result) => ({
            label: result.label,
            thumbnail: result.thumbnail,
            props: {
              manifest: result.id,
            } as any,
          }));
        },
      },
    ],
  },
  function ManifestViewer({ manifest, height }) {
    return (
      <VaultProvider>
        <SimpleViewerProvider pagingEnabled={true} manifest={manifest}>
          <Viewer height={height} />
        </SimpleViewerProvider>
      </VaultProvider>
    );
  },
);

export default ManifestViewer;
