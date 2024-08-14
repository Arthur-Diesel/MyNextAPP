import { Menu } from "@/components/menu";
import { handler } from "@/pages/api";

export default function News({ results, title }) {
  return (
    <>
      <Menu />
      <h1>{title}</h1>
      <ul>
        {results.map((result) => (
          <li key={result.uri}>
            <a href={result.url}>{result.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { path: "top-stories" },
      },
      {
        params: { path: "popular" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const nyAPIKey = process.env.NY_KEY;
  const topStoriesUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${nyAPIKey}`;
  const popularUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${nyAPIKey}`;

  switch (params.path) {
    case "top-stories":
      return {
        props: {
          results: await handler(topStoriesUrl),
          title: "Top Stories",
        },
      };
    case "popular":
      return {
        props: {
          results: await handler(popularUrl),
          title: "Most Popular",
        },
      };
    default:
      return {
        props: {
          results: await handler(topStoriesUrl),
          title: "Top Stories",
        },
      };
  }
}
