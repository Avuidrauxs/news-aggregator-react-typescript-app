import React, { Component } from 'react';
import Loader from 'react-loader';
import { NewsArticle } from '../models/index';
import placeholderImage from '../assets/images/placeholder.png';


type NewsItemProps = {
  articles: NewsArticle[];
}


export class NewsItem extends Component<NewsItemProps> {

  static defaultProps = {
    articles: []
  }

  checkState = (key: any, status: boolean) => {
    if(status){
      // console.log('article' + key, 'popo');
      
      // document.getElementById(`article10`).src = placeholderImage;
    }
  }

  render() {
    const articles = this.props.articles;
    
    const showArticles = () => {
      return articles.map((article: NewsArticle, key) => (
        <div className="col s4">
        <div className="card news-card" key={`article${key}`} id={`article${key}`}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator news-image" src={article.urlToImage} alt="No image" onError={this.checkState(key, true)}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{article.title}<i className="material-icons right">more_vert</i></span>
     <p><a href={article.url} target="_blank">Read Article Here</a></p>
         </div>
         <div className="card-reveal">
           <span className="card-title grey-text text-darken-4">{article.title}<i className="material-icons right">close</i></span>
     <p>{article.content} <a href={article.url} target="_blank">Read More</a></p>
         </div>
       </div>
       </div>
      ))
    }
  return <div className="row">
    {
    articles.length !== 0 ? showArticles() : <Loader />
   }
  </div>
  }
}
