import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
          <div >
            <h1>Hoho</h1>
            <Link to="about" className=""> Learn More </Link>
          </div>
        );
    }
}

export default HomePage;
