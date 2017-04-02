import React from 'react';
import Category from '../category/Category.jsx';

const categories = [
  {id: 1, title: 'Category 1'},
  {
    id: 2,
    title: 'Category 2',
    subcategory: [{title: 'Category 2 1'}, {title: 'Category 2 2'}, {title: 'Category 2 3'}]
  },
  {id: 3, title: 'Category 3'}
];

class CategoryList extends React.Component {

  render() {

    let listCategory = category => {
      return (
        <Category key={category.id} title={category.title}/>
      );
    };

    return (
      <div>
        {
          categories.map(category => {
            return (
              <Category key={category.id} title={category.title}/>
            );
          })
        }
      </div>
    );
  }
}

export default CategoryList;
