import React, { PropTypes } from 'react';
import { Progress } from 'semantic-ui-react';
import Category from '../category/Category.jsx';

// const categories = [
//   {id: 1, title: 'Category 1'},
//   {
//     id: 2,
//     title: 'Category 2',
//     categories: [{title: 'Category 2 1'}, {title: 'Category 2 2'}, {title: 'Category 2 3'}]
//   },
//   {id: 3, title: 'Category 3'}
// ];


class CategoryList extends React.Component {

  render() {

    const {categories, level} = this.props;
    return (
      <div>
        {
          categories.map(category => {
            const categories = category.categories || [];
            return (
              <Category key={category.id} level={0} title={category.title} categories={categories}/>
            );
          })
        }
        <Progress percent={40} active>
          Active
        </Progress>
      </div>
    );
  }
}

CategoryList.PropTypes = {
  categories: PropTypes.object.isRequired
};

export default CategoryList;
