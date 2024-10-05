import React, {Component} from "react";
import "./Exhibit.css";

class Exhibit extends Component {
    render() {
        return (
            <div className="Exhibit">
                <h3 className="ExhibitHead">{this.props.name}</h3>
                {/* props.children represents the content 
                between the opening and the closing tags 
                when invoking/rendering a component: */}
                <p className="ExhibitText">{this.props.children}</p>
            </div>
        )
    }
}

export default Exhibit;