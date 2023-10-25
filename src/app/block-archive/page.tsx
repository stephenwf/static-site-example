import { redirect } from "next/navigation";
import { BlockArchive } from "@/blocks/block-archive";

export default function Page(): JSX.Element {
  if (process.env.NODE_ENV === "production") {
    redirect("/");
  }

  return (
    <div>
      <BlockArchive />
    </div>
  );
}
