import Thumbnail from "../../features/thumbnail";

export default function Results({ results }) {
  return (
    <div className="px-5 gap-4 bg-black my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}
