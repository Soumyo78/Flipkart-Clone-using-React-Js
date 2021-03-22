import React from 'react';
import './style.css';

class Navbar extends React.Component{
    render(){
        return(
            <nav className="nav-list">
                {this.props.navMenuList.map((item, index)=>{
                    return <li>
                        <a id={this.props.idList[index]} href={this.props.hrefList[index]}>
                            <div className="nav-icon-text-container">
                                <img className="nav-bar-pic" src={this.props.navPicList[index]} alt={item} />
                                <h5>{item}</h5>
                            </div>
                        </a>
                    </li>
                })}
            </nav>
        )
    }
}

export default Navbar;