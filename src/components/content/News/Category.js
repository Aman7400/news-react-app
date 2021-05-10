import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Category.css";

import Heading from "../Heading";

const Category = (props) => {
  const category = props.category;

  const url = `https://newsapi.org/v2/sources?category=${category}&apiKey=2733b97009454e16a9d34c31cb765a2a`;

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);

      console.log(result.data.sources);
      //   setNews(result.data.sources);
      setNews(result.data.sources);

      //   console.log(result.data.articles);
      //   setLatestNews(result.data.articles);
      //   console.log(latestNews[0].title);
    };
    fetchData();
  }, [url]);

  return (
    <>
      <div
        style={{
          marginTop: "10vh",
        }}
      >
        <Heading text={category} />
        <div className="container category">
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
    </>
  );
};

export default Category;
