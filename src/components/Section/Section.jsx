import React, { Component } from 'react';
import './Section.css';


class Section extends Component {
    render() {
        return (
            <section className="Section">
                <h2 className="Section__header">{this.props.title}</h2>
                {this.props.children}
            </section>
        )
    }
}

export default Section;