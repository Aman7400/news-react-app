import axios from "axios";
import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import NewsCard from "./NewsCard";
import "./NewsRows.css";

const NewsRow = (props) => {
  const [latestNews, setLatestNews] = useState([]);

  // Sources URl
  // https://newsapi.org/v2/sources?category=business&apiKey=2733b97009454e16a9d34c31cb765a2a

  // const url = `https://newsapi.org/v2/sources?category=${category}&apiKey=2733b97009454e16a9d34c31cb765a2a`;

  const url =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=2733b97009454e16a9d34c31cb765a2a";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);

      // console.log(result.data.sources);
      setLatestNews(result.data.articles);
      // console.log(latestNews);

      //   console.log(result.data.articles);
      //   setLatestNews(result.data.articles);
      //   console.log(latestNews[0].title);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="news-section">
        <Heading text="Latest News" />
        <div className="news-row container-fluid">
          {latestNews.map((item, index) => {
            return <NewsCard item={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default NewsRow;
