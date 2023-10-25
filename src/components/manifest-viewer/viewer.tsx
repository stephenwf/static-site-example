"use client";
import {
  CanvasContext,
  CanvasPanel,
  useManifest,
  useSimpleViewer,
  useVisibleCanvases,
} from "react-iiif-vault";
import { ViewerControls } from "@/components/manifest-viewer/viewer-controls";
import { MediaControls } from "@/components/manifest-viewer/media-controls";

export function Viewer(props: { height?: number }) {
  const manifest = useManifest();
  const canvases = useVisibleCanvases();
  const { nextCanvas, previousCanvas } = useSimpleViewer();

  if (!manifest) {
    return <div>Loading..</div>;
  }

  let accumulator = 0;

  return (
    <>
      <CanvasPanel.Viewer height={props.height} containerStyle={{ flex: 1 }}>
        {canvases.map((canvas, idx) => {
          const margin = accumulator;
          accumulator += canvas.width;
          return (
            <CanvasContext canvas={canvas.id} key={canvas.id}>
              <CanvasPanel.RenderCanvas
                key={canvas.id}
                strategies={["3d-model", "media", "images"]}
                renderViewerControls={
                  idx === 0 ? () => <ViewerControls /> : undefined
                }
                renderMediaControls={
                  idx === 0 ? () => <MediaControls /> : undefined
                }
                x={margin}
              />
            </CanvasContext>
          );
        })}
      </CanvasPanel.Viewer>
      <div className="flex gap-2 my-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={previousCanvas}
        >
          previous
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={nextCanvas}
        >
          next
        </button>
      </div>
    </>
  );
}
