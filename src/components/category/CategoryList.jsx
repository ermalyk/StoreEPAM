import React, { PropTypes } from 'react';
import Category from '../category/Category.jsx';
import { Item } from 'semantic-ui-react';
import { connect } from 'react-redux';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      categories,
      level,
      onCategoryClick,
      showCategoryItems,
      pressedId,
      editCategory,
      addSubCategory
    } = this.props;
    // console.log('CategoryList categories', categories);
    return (
      <div>
        <Item.Group divided>
          {
            (categories || []).map(category => (
                  <Category
                    key={category.id}
                    active={category.active? true: false}
                    id={category.id}
                    level={0}
                    checked={false}
                    pressedId={pressedId}
                    title={category.title}
                    categories={category.categories || []}
                    onCategoryClick={onCategoryClick}
                    showCategoryItems={showCategoryItems}
                    editCategory={editCategory}
                    addSubCategory={addSubCategory}
                  />
              )
            )
          }
        </Item.Group>
      </div>
    );
  }
}

CategoryList.PropTypes = {
  categories: PropTypes.object.isRequired,
  pressedId: PropTypes.string.isRequired,
  onClickCategory: PropTypes.func.isRequired,
  showCategoryItems: PropTypes.func.isRequired,
  editCategory: PropTypes.func.isRequired,
  addSubCategory: PropTypes.func.isRequired
};

export default CategoryList;
