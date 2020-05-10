import React, { Component } from 'react';


type SearchBarProps = {
    searchNews: (text: string) => void;
}

type SearchBarState = {
    searchString: string;
}

export class SearchBar extends Component<SearchBarProps, SearchBarState> {

    static defaultProps = {
        searchNews: (text: string) => {}
    }

    state = {
        searchString: ''
    }

    searchNews = (e: any) => {
        const { searchString } = this.state

       if(e.key === 'Enter' && searchString !== '') {
        e.preventDefault();
        e.stopPropagation();
           this.props.searchNews(searchString)
       }
    }

    onSearchTextChange = (e: any) => {
        this.setState({
            searchString: e.target.value.toLowerCase().trim()
        })
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper main-nav">
                    <form>
                        <div className="input-field">
                            <input
                            id="search"
                            type="search"
                            value={this.state.searchString}
                            onChange={this.onSearchTextChange}
                            onKeyPress={e => this.searchNews(e)} placeholder="Enter news topic to search eg. health and press Enter" />
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        );
    }
}