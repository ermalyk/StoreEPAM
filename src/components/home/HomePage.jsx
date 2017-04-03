import React from 'react';
import { Link } from 'react-router';
import CategoryList from '../category/CategoryList.jsx';

const categories = [
  {
    id: 1,
    level: 1,
    title: 'Category 1',
    categories: []
  },
  {
    id: 2, level: 1,
    title: 'Category 2',
    categories: [{ id: 1, title: 'Category 2 1'}, {id: 2, title: 'Category 2 2'}, {id: 3, title: 'Category 2 3'}]
  },
  {
    id: 3,
    level: 1,
    title: 'Category 3',
    categories: [
      { id: 1,
        title: 'Category 3 1',
      },
      {id: 2, title: 'Category 3 2'}
    ]
  }
];

class HomePage extends React.Component {
    render() {
        return (
          <div className="home-page">
            <CategoryList className="category-list" categories={categories} />
          </div>
        );
    }
}

export default HomePage;
