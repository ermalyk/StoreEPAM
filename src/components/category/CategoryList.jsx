import React, { PropTypes } from 'react';
import Category from '../category/Category.jsx';
import { Item } from 'semantic-ui-react';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {categories, level} = this.props;
    return (
      <div>
        {
          categories.map(category => {
            const categories = category.categories || [];
            return (
              <Item.Group divided key={category.id}>
                <Category key={category.id} level={0} title={category.title} categories={categories} />
              </Item.Group>
            );
          })
        }

      </div>
    );
  }
}

CategoryList.PropTypes = {
  categories: PropTypes.object.isRequired
};

export default CategoryList;
