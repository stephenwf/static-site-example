import { block } from "@page-blocks/react";
import { z } from "zod";

export const Card = block(
  {
    label: "Card",
    props: z.object({
      title: z.string(),
    }),
  },
  function Card(props) {
    return <div>Card: {props.title}</div>;
  },
);
