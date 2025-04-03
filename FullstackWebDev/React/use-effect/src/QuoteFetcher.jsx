import { useState } from "react";

const url = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {

    const [quote, setQuote] = useState({text: "", author: ""});

    const fetchQuote = async () => {
        
            const jsonResponse = await fetch(url);
            const response = await jsonResponse.json();
            const randomQuote = response.quote;
            setQuote(randomQuote)
        
    }

    useState(() => {
        fetchQuote();
    }, [])

    return (
        <>
            <h1>"{quote.text}"</h1>
            <h3>- {quote.author}</h3>

            <button onClick={fetchQuote}>Generate Quote</button>
        </>
    )
}