
import { extract } from "hss-iiif";

extract(
  {
    id: "testing-js-extract",
    name: "testing js extract",
    types: ["Manifest"],
  },
  async (resource, api) => {
    console.log('extracting', resource.id);
    return {};
  },
);

