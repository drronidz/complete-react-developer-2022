import React from "react";

// Styles
import './categories.styles.scss'

const App = () => {
    const categories = [
        {id: 1, title: 'Hats'},
        {id: 2, title: 'Jackets'},
        {id: 3, title: 'Sneakers'},
        {id: 1, title: 'Women\'s'},
        {id: 1, title: 'Men\'s'},
    ]
    return (
        <div className="categories-container">
            {categories.map(({id, title}) => (
                <div key={id} className="category-container">
                    <div  className="background-image"/>
                    <div className="category-body-container">
                        <h2>{title}</h2>
                        <p>Shop Now</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default App;
