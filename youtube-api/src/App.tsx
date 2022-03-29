import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import youtube from './api/youtube';
import CardList from './components/CardList/CardList';
import { searchBarProps } from './types/types';
import './App.css';

export default class App extends Component<searchBarProps> {
  static defaultProps = { onFormSubmit: {} };
  state = { videos: [], selectedVideo: null };
  handleSubmit = async (searchTerm: string) => {
    const response = await youtube.get(`search`, {
      params: {
        part: 'snippet',
        maxResults: 6,
        key: process.env.REACT_APP_YOUTUBE_KEY,
        q: searchTerm,
        type: 'video',
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
    console.log(response);
  };
  render(): React.ReactNode {
    return (
      <div className="home">
        <SearchBar onFormSubmit={this.handleSubmit} />
        <CardList videos={this.state.videos}></CardList>
      </div>
    );
  }
}
