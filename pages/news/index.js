import { Menu } from "@/components/menu";
import { handler } from "../api";

export default function News({ results }) {
    return(
        <>
        <Menu />
        <h1>
            Top Stories
        </h1>
            <ul>
                {results.map((result) => (
                    <li key={result.uri}>
                        <a href={result.url}>{result.title}</a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export async function getStaticProps(){
    const nyAPIKey = process.env.NY_KEY;    
    const results = await handler(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${nyAPIKey}`);
    return {
        props: {
            results
        }
    };
}