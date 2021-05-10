//   https://newsapi.org/v2/everything?q=Apple&from=2021-05-10&sortBy=popularity&apiKey=API_KEY

//   const url = `https://newsapi.org/v2/everything?q=${query}&language=en&from=2021-05-10&sortBy=popularity&apiKey=2733b97009454e16a9d34c31cb765a2a`;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [query, SetQuery] = useState("");
  const [search, SetSearch] = useState("");
  const [news, SetNews] = useState([]);

  function onSubmit(data) {
    data.preventDefault();
    // console.log(data.target.query.value);

    SetSearch(data.target.query.value);
  }

  const url = `https://newsapi.org/v2/everything?q=${search}&language=en&from=2021-05-10&sortBy=popularity&apiKey=2733b97009454e16a9d34c31cb765a2a`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);

      SetNews(result.data.articles);
    };
    fetchData();
  }, [url]);

  return (
    <div
      style={{
        minHeight: "100vh",
        height: "auto",
        marginTop: "10vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "2.5rem",
        }}
      >
        <form onSubmit={onSubmit} className="form-inline">
          <input
            autoComplete="off"
            onChange={(e) => SetQuery(e.target.value)}
            className="form-control m-2"
            name="query"
            value={query}
            placeholder="Search any topic ..."
            type="text"
          />
          <button type="submit" className="btn btn-dark ">
            Search
          </button>
        </form>
      </div>

      <div className="container">
        {news.map((item) => {
          return (
            <>
              <div className="news-item">
                <a
                  className="mb-5 "
                  target="_blank"
                  href={item.url}
                  rel="noreferrer"
                >
                  {item.description}
                </a>
              </div>
              <div class="dropdown-divider"></div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
