const nyAPIKey = process.env.NY_KEY;    

export async function handler(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

export async function search(url) {
    const response = await fetch(url);
    const data = await response.json();
    const docs = data.response.docs ?? [];
    const results = docs.map((doc) => {
        return {
            uri: doc.uri,
            url: doc.web_url,
            title: doc.headline.main
        };
    });
    return results;
}