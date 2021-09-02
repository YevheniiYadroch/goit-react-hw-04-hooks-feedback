import React from 'react';
import './Section.css';


function Section({ title, children }) {
        return (
            <section className="Section">
                <h2 className="Section__header">{title}</h2>
                {children}
            </section>
        )
}

export default Section;