import React, { useEffect, useState } from "react";

function News_cards() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles || []);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="container my-3">
      <div className="row">
        {articles.map((article,index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-3" style={{ width: "18rem" }}>
              <img
                src={article.urlToImage}
                className="card-img-top"
                alt="News"
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">
                  {article.description}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News_cards;
