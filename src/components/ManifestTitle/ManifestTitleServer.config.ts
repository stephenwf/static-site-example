import { z } from "zod";

export const config = {
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
};
