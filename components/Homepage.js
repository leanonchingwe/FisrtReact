import Link from 'next/link';

export default function Homepage({ articles }) {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Latest Financial News</h1>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.id}`}>
              <a className="text-blue-500 hover:underline">{article.title}</a>
            </Link>
            <p className="text-gray-600">{article.date}</p>
            <p>{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
