import { block } from "@page-blocks/react";
import { z } from "zod";
import Link from "next/link";
import { manifestSource } from "@/blocks/sources/manifest-source";

export const NewsCard = block(
  {
    label: "News card",
    props: z.object({
      tag: z.string().optional(),
      label: z.string(),
      link: z.string(),
      description: z.string().optional(),
      thumbnail: z.string().optional(),
    }),
    propSources: [manifestSource],
  },
  function NewsCard(props) {
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden">
        {props.thumbnail ? (
          <Link href={props.link || "#"} className="relative pb-2/3">
            <div className="h-48 bg-red-500">
              <img
                className="h-full w-full object-cover"
                src={props.thumbnail}
                alt=""
              />
            </div>
          </Link>
        ) : null}
        <div className="p-6">
          <div className="text-xs font-semibold text-slate-500 uppercase">
            {props.tag}
          </div>
          <Link href={props.link || "#"} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{props.label}</p>
            {props.description ? (
              <p className="mt-3 text-base text-gray-500">
                {props.description}
              </p>
            ) : null}
          </Link>
        </div>
      </div>
    );
  },
);
