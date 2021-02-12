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
                    <div className="mail-us-address-container">
                        <div className="mail-us-container">
                            <h3 className="list-title-text">Mail Us:</h3>
                            Flipkart Internet Private Limited,<br/>
                            Buildings Alyssa, Begonia & <br/>
                            Clove Embassy Tech Village, <br/>
                            Outer Ring Road, Devarabeesanahalli Village,<br/>
                            Bengaluru, 560103,<br/>
                            Karnataka, India<br/>
                        </div>
                        <div className="address-container">
                            <h3 className="list-title-text">Registered Office Address:</h3>
                            Flipkart Internet Private Limited,<br/>
                            Buildings Alyssa, Begonia &<br/>
                            Clove Embassy Tech Village,<br/>
                            Outer Ring Road, Devarabeesanahalli Village,<br/>
                            Bengaluru, 560103,<br/>
                            Karnataka, India<br/>
                            CIN : SAMPLECINNUMBER12345678<br/>
                            Telephone: <a className="tel-number" href="">1800 XXX XXXX</a><br/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="footer-items-container">
                    <div className="footer-items">This is a clone of flipkart's original site. By Soumyo Roy.</div>
                    <div className="card-img-container">This clone is done for educational purpose only.</div>
                </div>
            </footer>
        )
    }
}


export default Footer;