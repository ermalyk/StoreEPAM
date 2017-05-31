import React, { PropTypes } from 'react';
import Category from '../category/Category.jsx';
import { Item } from 'semantic-ui-react';
import { connect } from 'react-redux';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {categories, level, onCategoryClick, showCategoryItems, pressedId} = this.props;
    // console.log('CategoryList categories', categories);
    return (
      <div>
        <Item.Group divided>
          {
            (categories || []).map(category => {
              const categories = category.categories || [];
              return (
                <Item.Group divided key={category.id}>
                  <Category
                    key={category.id}
                    active={category.active? true: false}
                    id={category.id}
                    level={0}
                    checked={false}
                    pressedId={pressedId}
                    title={category.title}
                    categories={categories}
                    onCategoryClick={onCategoryClick}
                    showCategoryItems={showCategoryItems}
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
  onClickCategory: PropTypes.func.isRequired,
  showCategoryItems: PropTypes.func.isRequired,
  pressedId: PropTypes.string.isRequired
};

export default CategoryList;
