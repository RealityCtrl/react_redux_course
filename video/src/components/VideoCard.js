import React from 'react';
import './VideoCard.css'
class VideoCard extends React.Component {

    render(){
    
        return (
        <div onClick={()=>this.props.onVideoSelect(this.props.video)}
            className="video-item item">
            <img className="ui image"
                src={this.props.video.snippet.thumbnails.medium.url} 
                alt={this.props.video.snippet.description}/>
            <div className="content">
                <div className="header">
                    {this.props.video.snippet.title}
                </div>
            </div>
        </div>
        )
    }
}

export default VideoCard;