import React, { Component } from 'react';
import './FullPost.css';


class FullPost extends Component {
    render () {
        let post = null;
        if(this.props.id === this.props.articleId){
            post = (
                <div>
                    <h1 className="titleArticle">{this.props.title} Collection</h1>
                    <img alt={this.props.image} src={`/assets/${this.props.image}.png`} style={{width:'100%'}}/>
                    <p className="bodyArticle">{this.props.content}</p>
                </div>
    
            );
        }
      
        return post;
    }
}

export default FullPost;