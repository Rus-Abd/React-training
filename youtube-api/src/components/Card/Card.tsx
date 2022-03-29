import React, { Component } from 'react';
import { Item } from '../../types/types';
import './card.css';
type cardType = {
  cardInfo: Item;
};
export default class Card extends Component<cardType> {
  static defaultProps = { cardInfo: {} };
  passedData = this.props.cardInfo;
  render() {
    return (
      <div className="card">
        <iframe
          src={'https://www.youtube.com/embed/' + this.passedData.id.videoId}
          frameBorder="0"
          title="this.passedData.snippet.channelTitle"
        ></iframe>
        <div className="card-details">
          <h2>{this.passedData.snippet.channelTitle}</h2>
          <h4>{this.passedData.snippet.title}</h4>
          <p>{this.passedData.snippet.description || 'No Description'}</p>
        </div>
      </div>
    );
  }
}
