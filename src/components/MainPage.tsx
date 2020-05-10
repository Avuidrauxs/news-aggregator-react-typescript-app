import React, { Component } from 'react';
import axios from 'axios';
import { NewsItem } from './NewsItem';
import { NewsArticle } from '../models/index';
import { NavBar } from './NavBar';
import { SearchBar } from './SearchBar';

type MainPageState = { articles: NewsArticle[]; }

export class MainPage extends Component<{}, MainPageState> {

    state = {
        articles: []
    }

    getArticles = async (topic = 'sports') => {
        const response = await axios.get(`${process.env.NEWS_API_URL_EVERYTHING}q=${topic}`);
        this.setState({
            articles: response.data.articles
        })
        return response;
    }

    componentDidMount() {
        this.getArticles();
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="divider"></div>
                <div className="container news-container">
                    <SearchBar searchNews={this.getArticles}/>
                    <NewsItem articles={this.state.articles} />
                </div>
            </div>
        )
    }
}
