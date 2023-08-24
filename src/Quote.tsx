import { useState, useEffect } from "react";

const URL = "https://api.quotable.io/random";

function RandomQuote() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  useEffect(() => {

    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then(json => {
        console.log(json.content + " ~ " + json.author);
        setQuote(json.content);
        setAuthor(json.author);
      });
    }
    fetchData();
  }, []);
  if (author === null || quote === null) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
      <p id="quote">{quote}</p> 
      <p id="author">~ {author}</p>
      </>
    );
  }
}

function Quote() {
  return (
    <div>
      <h3><RandomQuote /></h3>
    </div>
  )
}

export default Quote;