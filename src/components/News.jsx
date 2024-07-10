import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import NewsItem from './NewsItem';
import './News.css';

function News(props) {  
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchData = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e50adbe8c90b4ecc88951558148bbf30&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.articles && data.totalResults) {
        setArticles(data.articles);
        setTotalResults(data.totalResults);
      } else {
        console.error("Error fetching data: Invalid response format");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < Math.ceil(totalResults / 20)) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, props.category, props.country]);

  return (
    <>
      <div className="container row">
        {articles.map((element) => (
          <div className="col-md-4" key={element.url}>
            <NewsItem
  title={element.title !== null ? element.title.slice(0, 50) : element.title}
  description={element.description !== null ? element.description.slice(0, 80) : ''}
  url={element.url}
  imgUrl={element.urlToImage ? element.urlToImage : "data:image/png;base64,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"}
/>

          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between">
        <button type="button" disabled={page === 1} className="btn btn-light mx-3 previous" onClick={handlePrev}>Previous</button>
        <button type="button" disabled={page >= Math.ceil(totalResults / 20)} className="btn btn-light mx-3 next" onClick={handleNext}>Next</button>
      </div>
    </>
  );
}

News.propTypes = {
  country: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default News;
