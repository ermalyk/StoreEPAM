import React, { PropTypes } from 'react';
import Category from '../category/Category.jsx';
import { Item } from 'semantic-ui-react';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    // onClickCategory= this.onClickCategory().bind(this);
}

  render() {
    const {categories, level} = this.props;
    // console.log('this.props.categories', this.props.categories);
    return (
      <div>
        <Item.Group divided>
          {
            categories.map(category => {
              const categories = category.categories || [];
              return (
                <Item.Group divided key={category.id}>
                  <Category key={category.id} level={0} checked={false} title={category.title} categories={categories} onClick={this.onClickCategory} />
                </Item.Group>
              );
            })
          }
        </Item.Group>
      </div>
    );
  }
}

CategoryList.PropTypes = {
  categories: PropTypes.object.isRequired
};

export default CategoryList;
