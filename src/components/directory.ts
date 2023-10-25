import { createDirectory } from "@page-blocks/react";
import { Card } from "@/components/card";
import * as ManifestTitle from "@/components/ManifestTitle/ManifestTitle";
import * as CloverViewer from "@/components/clover-viewer";
import { NewsCard } from "@/components/news-card";
import { FourGrid } from "@/components/four-grid";
import { ManifestCard } from "@/components/manifest-card";
import * as ManifestViewer from "@/components/manifest-viewer";
export const directory = createDirectory({
  context: {},
  resolver: {
    type: "tanstack-query",
    endpoint: "/api/page-blocks",
    screenshots: "/blocks",
  },
  blocks: {
    Card,
    ManifestTitle: ManifestTitle.default,
    CloverViewer: CloverViewer.default,
    ManifestViewer: ManifestViewer.default,
    NewsCard,
    FourGrid,
    ManifestCard,
  },
});

export const Blocks = directory.Blocks;
export const Slot = directory.Slot;

// export const SlotContext = directory.SlotContext;
