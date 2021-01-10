import './style.css';
import React from 'react';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 }
];


class Items extends React.Component{
    render(){
        return(
            <div id={this.props.divId} className="item-main-container">
                <div className="heading-view-all-btn-container">
                    <h2 className="container-heading-text">{this.props.headingText}</h2>
                    <div className="view-all-btn-container">
                        <button className="item-card-view-all-btn">VIEW ALL</button>
                    </div>
                </div>
            <hr/>
            <Carousel breakPoints={breakPoints}>
                {this.props.itemImageCardList.map((item, index)=>{
                        return(
                            <div className="item-card">
                                <div className="item-image-container">
                                    <img id={"item-img-"+index} src={item}/>
                                </div>
                                <div className="item-title-text">{this.props.itemTitleList[index]}</div>
                                <div className="item-description-text-1">{this.props.itemDescription1List[index]}</div>
                                <div className="item-description-text-2">{this.props.itemDescription2List[index]}</div>
                            </div>
                        )
                })}
            </Carousel>
            
                        


            
            
            
            
            
            
            
            </div>

            




        )
    }
}

export default Items;