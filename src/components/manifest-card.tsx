import { block } from "@page-blocks/react";
import {
  manifestSource,
  manifestSourceProps,
} from "@/blocks/sources/manifest-source";

export const ManifestCard = block(
  {
    label: "Manifest card",
    props: manifestSourceProps,
    propSources: [manifestSource],
    examples: [
      {
        label: "Manifest label",
        props: {
          label: "Manifest label",
          thumbnail:
            "https://iiif.wellcomecollection.org/thumbs/b12024727_0001.jp2/full/1024,/0/default.jpg",
          link: "#",
          description: "Secondary label",
        },
        display: { width: 320 },
        context: {},
      },
    ],
  },
  function ManifestCard(props) {
    return (
      <a
        href={props.link}
        className="border p-3 rounded hover:border-green-700 transition-colors flex flex-col w-full"
      >
        <div className="flex-1 bg-white rounded overflow-hidden aspect-square mb-3">
          <img
            alt=""
            src={props.thumbnail}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h2 className="font-semibold text-slate-800">{props.label}</h2>
        </div>
        {props.description ? (
          <>
            <hr className="my-2" />
            <div>{props.description}</div>
          </>
        ) : null}
      </a>
    );
  },
);
