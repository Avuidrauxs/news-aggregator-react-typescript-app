import React, { Component } from 'react';
import axios from 'axios';
import { NewsItem } from './NewsItem';
import { NewsArticle } from '../models/index';

type MainPageProps = { name: string; }

type MainPageState = { articles: any[]; }

export class MainPage extends Component<MainPageProps, MainPageState> {

    constructor(props: MainPageProps) {
        super(props);

        this.state = {
            articles: []
        }
    }

    getArticles = async () => {
        const response = await axios.get(`${process.env.NEWS_API_URL_EVERYTHING}q=health`);
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
                <nav>
                    <div className="nav-wrapper main-nav">
                        <a href="#" className="brand-logo center title-style">News Aggregator</a>
                    </div>
                </nav>
                <div className="divider"></div>
                <div className="container news-container">
                    <nav>
                        <div className="nav-wrapper main-nav">
                            <form>
                                <div className="input-field">
                                    <input id="search" type="search" placeholder="Enter news topic to search for" />
                                    <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                    <i className="material-icons">close</i>
                                </div>
                            </form>
                        </div>
                    </nav>
                    <NewsItem articles={this.state.articles} />
                </div>
            </div>
        )
    }
}
