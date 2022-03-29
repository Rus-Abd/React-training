import React, { Component } from 'react';
import Card from '../Card/Card';
import { Item } from '../../types/types';
import './cardList.css';
type CardListProps = {
  videos: Array<Item>;
};
export default class CardList extends Component<CardListProps> {
  static defaultProps = { videos: {} };
  render() {
    return (
      <div className="card-container">
        {this.props.videos.map((video, index: number) => {
          console.log(index);
          return <Card key={video.id.videoId || index} cardInfo={video} />;
        })}
      </div>
    );
  }
}
