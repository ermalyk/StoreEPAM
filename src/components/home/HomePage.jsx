import React from 'react';
import { Link } from 'react-router';
import CategoryList from '../category/CategoryList.jsx';
import ToDoItemList from '../toDoItem/ToDoItemList.jsx';
import { getCategories } from '../../Helpers/getData.js';
import "./HomePageStyle.less";

const categories1 = [
  {
    id: 1,
    level: 1,
    title: 'Category 1',
    categories: [],
    items: [
      {
        checked: false,
        title: 'To-Do Item #1'
      },
      {
        checked: false,
        title: 'To-Do Item #2'
      }
    ]
  },
  {
    id: 2, level: 1,
    title: 'Category 2',
    categories: [{ id: 1, title: 'Category 2 1'}, {id: 2, title: 'Category 2 2'}, {id: 3, title: 'Category 2 3'}],
    items: []
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
    ],
    items: []
  }
];

const categories = getCategories();
class HomePage extends React.Component {
    render() {
        return (
          <div classNmae="home-page">
            <div className="search">
              <div/>
              <div>
                <input type="checkbox" />
                <label>Show done</label>
                <input type="text" />
              </div>
            </div>
            <progress value="20" max="100"></progress>
            <div className="add-text-fields">
              <div>
                <input type="text" />
                <button>Add</button>
              </div>
              <div>
                <input type="text" />
                <button>Add</button>
              </div>
            </div>
            <div className="home-page">
              <div className="categories-section">
                <CategoryList className="category-list" categories={categories} />
              </div>
              <div className="item-section">
                <ToDoItemList className="item-list" categories={categories} />
              </div>
            </div>
          </div>
        );
    }
}

export default HomePage;
