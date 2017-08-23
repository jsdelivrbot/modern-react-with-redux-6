import _ from 'lodash';
import React, { Component } from 'react';
//same as const Component = React.component;
import YTSearch from 'youtube-api-search'; 
import SearchBar from './search_bar';
import VideoList from './video-list';
import VideoDetail from './video-detail';

const API_KEY = 'AIzaSyCHB3zgtTIfkRuq3D7y8tgM4CyNH7M2KIE';

export default class App extends Component {
  constructor(props){
  	super(props);
  	this.state = { 
  		videos: [],
  		selectedVideo: null
  	 };

  	this.videoSearch('react.js');

  }	

  videoSearch(term){
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
      	<SearchBar onSearchTermChange={videoSearch}/>
      	<VideoDetail video={this.state.selectedVideo}/>
      	<VideoList 
      	onVideoSelect={selectedVideo => this.setState({selectedVideo})}
      	videos={this.state.videos}/>
      </div>      
    );
  }
}
