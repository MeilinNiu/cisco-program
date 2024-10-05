import React, {Component} from "react";
import "./Banner.css";

class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                {this.props.bannerText}
            </div>
        );
    }
}

export default Banner;