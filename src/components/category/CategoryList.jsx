import React, { PropTypes } from 'react';
import Category from '../category/Category.jsx';
import { Item } from 'semantic-ui-react';
import { connect } from 'react-redux';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {categories, level, onCategoryClick} = this.props;
    return (
      <div>
        <Item.Group divided>
          {
            categories.map(category => {
              const categories = category.categories || [];
              console.log(category.active);
              return (
                <Item.Group divided key={category.id}>
                  <Category 
                    key={category.id}
                    active={category.active}
                    id={category.id} 
                    level={0} 
                    checked={false} 
                    title={category.title} 
                    categories={categories} 
                    onCategoryClick={onCategoryClick}
                  />
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
  categories: PropTypes.object.isRequired,
  onClickCategory: PropTypes.func.isRequired
};

export default CategoryList;
