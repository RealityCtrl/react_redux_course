import React from 'react';

class VideoDetail extends React.Component {
    render(){
        if(!this.props.video){
            return <div>Loading</div>
        }
        return(
        <div>
            <div className="ui embed">
                <iframe title="video player" src={`https://youtube.com/embed/${this.props.video.id.videoId}`} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{this.props.video.snippet.title}</h4>
                <p>{this.props.video.snippet.description}</p>
            </div>
        </div>)
    }
}

export default VideoDetail;