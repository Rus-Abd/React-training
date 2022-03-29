import React, { Component } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import youtube from './api/';
import CardList from './Components/CardList/CardList';
import { searchBarProps } from './types/types';
import './home.css';

export default class Home extends Component<searchBarProps> {
  static defaultProps = { onFormSubmit: {} };
  state = { videos: [], selectedVideo: null };
  handleSubmit = async (searchTerm: string) => {
    const response = await youtube.get(`search`, {
      params: {
        part: 'snippet',
        maxResults: 6,
        key: 'AIzaSyCZrjrobr9h2seY8rTgeDFOrZMPW7XoPg4',
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
