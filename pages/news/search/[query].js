// import { useRouter } from "next/router";
import { Menu } from "@/components/menu";
import { search } from "../../api";

export default function New({ results, query }){
    // const router = useRouter();
    // const { query } = router.query;
    return(
        <>
        <Menu />
        <h1>Search</h1>
        <p>Search query: {query}</p>
        <ul>
            {results.map((result) => (
                <li key={result.uri}>
                    <a href={result.url}>{result.title}</a>
                </li>
            ))}
        </ul>
        </>
    )
};

export async function getServerSideProps({ params }){
    const nyAPIKey = process.env.NY_KEY;    
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${nyAPIKey}`;
    const results = await search(url);
    return {
        props: {
            results,
            query: params.query
        }
    };
}