import "./style.css";
import React from 'react';


class Footer extends React.Component{
    render(){
        return(
            <footer className="footer-main-container">
                <div className="content-container">
                    <div className="list-items-links-container">
                        {this.props.sectionTitleList.map((item, index)=>{
                            return(
                                <div id={item} className="footer-list-section">
                                    <h3 className="list-title-text">{this.props.titleTextList[index]}</h3>
                                    <div className="footerItemList">
                                        {this.props[`section${index}itemList`].map((item, index)=>{
                                            return(
                                                <a href="">{item}</a>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div class="vl"></div>
                    <div className="mail-us-address-container"></div>
                </div>
                <hr/>
                <div className="footer-items-container">
                    <div className="footer-items"></div>
                    <div className="card-img-container"></div>
                </div>
            </footer>
        )
    }
}


export default Footer;