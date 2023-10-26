import metadataAnalysis from "../../../public/meta/metadata-analysis.json";
export default function MetadataAnalysis() {
  return (
    <div>
      <h1 className="text-slate-800 text-3xl my-12 text-center place-items-center">
        Metadata Analysis
      </h1>

      <div className="p-8 rounded bg-slate-100">
        <h2 className="text-slate-800 text-2xl mb-6  place-items-center">
          Found topic type candidates
        </h2>
        {Object.entries(metadataAnalysis.foundKeys).map(([key, count]) => (
          <div key={key} className="flex gap-2">
            {key} - <span className="text-slate-700">{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
