import './style.css';
import React from 'react';

class ImageCard extends React.Component{
    render(){
        return(
            <div className="image-card-container">
                {this.props.imageCardList.map((item, index)=>{
                    return <div className="imageWrapper"><img id={"img-"+index} src={item}/></div>
                })}
            </div>
        )
    }
}

export default ImageCard;