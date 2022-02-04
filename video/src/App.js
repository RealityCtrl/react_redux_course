import React from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetails'
import youtube from './api/Youtube';
import './App.css';

class App extends React.Component {
  state = {videos:[], selectedVideo:null}

  componentDidMount(){
    this.onSearchSubmit('music')
  }
  
   onSearchSubmit = async (term) => {
      console.log(term);
       const response = await youtube.get('/search',{
          params: {
            part: 'snippet',
            maxResults: 5,
            q: term,
            type:'video',
           },
       });
       this.setState({videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
  }

  onVideoSelect = async(video) =>{
    console.log(video)
    this.setState({selectedVideo: video})
  }

  render(){
      return (
          <div className="ui container" style={{marginTop:'10px'}}>
              <SearchBar onSubmit={this.onSearchSubmit}/>
              <div className="ui grid">
                <div className="ui row">
                  <div className="eleven wide column">
                    <VideoDetail video={this.state.selectedVideo} />
                  </div>
                  <div className="five wide column">
                    <VideoList 
                      videos={this.state.videos} 
                      onVideoSelect={this.onVideoSelect}/>
                  </div>
                </div>
              </div>
          </div>)
          ;
  }
}

export default App;
