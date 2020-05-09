import React, { Component } from 'react';
import { NewsArticle } from '../models/index';


type NewsItemProps = {
  articles: NewsArticle[];
}


export class NewsItem extends Component<NewsItemProps> {

  static defaultProps = {
    articles: []
  }

  render() {
    const articles = this.props.articles;
    console.log(articles, 'lopo');
    
    const showArticles = () => {
      return articles.map((article: NewsArticle, key) => (
        <div className="col s4">
        <div className="card news-card" key={`article${key}`}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={article.urlToImage} alt="No image"/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{article.title}<i className="material-icons right">more_vert</i></span>
     <p><a href={article.url}>Read Article Here</a></p>
         </div>
         <div className="card-reveal">
           <span className="card-title grey-text text-darken-4">{article.title}<i className="material-icons right">close</i></span>
     <p>{article.content} <a href={article.url}>Read More</a></p>
         </div>
       </div>
       </div>
      ))
    }
  return <div className="row">
    {
    articles.length !== 0 ? showArticles() : <h3>No articles</h3>
  }
  </div>
  }
}
