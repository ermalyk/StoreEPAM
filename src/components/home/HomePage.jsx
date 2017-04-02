import React from 'react';
import { Link } from 'react-router';
import CategoryList from '../category/CategoryList.jsx';

class HomePage extends React.Component {
    render() {
        return (
          <div className="home-page">
            <CategoryList/>
          </div>
        );
    }
}

export default HomePage;
