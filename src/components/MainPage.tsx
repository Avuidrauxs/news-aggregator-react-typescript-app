import React, { Component} from 'react';
import axios from 'axios';
import  { NewsItem }  from './NewsItem';
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
                console.log(response, 'popo');
                this.setState({
                    articles: response.data.articles
                })
                return response;
            }

    componentDidMount() {
        this.getArticles();
    }

    render() {
        return <NewsItem articles={this.state.articles}/>
    }
}
