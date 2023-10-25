import { fileSystemLoader } from "@/blocks/server";

export default async function Articles() {
  const articles = await fileSystemLoader.queryContextValues("article");

  return (
    <div>
      <h2 className="text-3xl font-bold">Articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article} className="text-blue-500 hover:underline">
            <a href={`/articles/${article}`}>{article}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
