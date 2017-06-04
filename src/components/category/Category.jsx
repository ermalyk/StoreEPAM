import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CategoryList from './CategoryList.jsx';
import {Button, Item, Icon} from 'semantic-ui-react';
import ModalDialog from '../common/modalDialog';
// import { toggleCategory } from '../category/actions.js'
//
// <CategoryList categories={this.props.categories} />

class Category extends React.Component {
  constructor(props) {
    super(props);
    // this.onClickCategory = this.onClickCategory.bind(this);
  }

  // onClickCategory(id, level) {
  //   // debugger;
  //   toggleCategory(id, level);
  // }

  render() {
    const {
      id,
      level,
      title,
      onCategoryClick,
      categories,
      active,
      pressedId,
      showCategoryItems,
      editCategory,
      addSubCategory,
      deleteCategory
    } = this.props;

    const width = (100 - this.props.level * 10) + '%';

    return (
      <Item className="all-categories" key={id}>
        <div
          className={(pressedId === id) ? 'category-wrap activeCategory' : 'category-wrap'}
          onClick={() => showCategoryItems(id)}>
          <div/>
          <div className="category" style={{
            width
          }}>
            <div className="category-title">
              <Button
                animated="fade"
                className="icon-button"
                onClick={() => onCategoryClick(id, level)}>
                <Button.Content visible>
                  <Icon name="expand"/>
                </Button.Content>
                <Button.Content hidden>
                  expand
                </Button.Content>
              </Button>

              <label>{title}</label>
              <ModalDialog
                id={id}
                title={title}
                typeName="Category "
                buttonTitle="Edit"
                callback={editCategory}
              />

            </div>

            <div className="delete-and-add-category">
              <Button
                animated="fade"
                className="icon-button"
                onClick={() => deleteCategory(id)}>
                <Button.Content visible>
                  <Icon name="trash outline"/>
                </Button.Content>
                <Button.Content hidden>
                  Delete
                </Button.Content>
              </Button>

              <ModalDialog
                id={id}
                title={'Add sub-category to ' + title}
                typeName="Category "
                buttonTitle="Add"
                callback={addSubCategory}
              />
            </div>
          </div>
        </div>
        <div className={active ? '' : 'hideCategory'}>
          {categories
            .map(category => (<Category
              key={category.id}
              id={category.id}
              active={category.active ? true : false}
              level={level + 1}
              title={category.title}
              pressedId={pressedId}
              categories={category.categories || []}
              onCategoryClick={onCategoryClick}
              showCategoryItems={showCategoryItems}
              editCategory={editCategory}
              addSubCategory={addSubCategory}
              deleteCategory={deleteCategory}
            />))}
          </div>
      </Item>
    );
  }
}

Category.PropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  // callback: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
  showCategoryItems: PropTypes.func.isRequired,
  editCategory: PropTypes.func.isRequired,
  addSubCategory: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleCategory: bindActionCreators(toggleCategory, dispatch)
//   };
// }

// const mapStateToProps = (state) => {
//   return {categories: state.categories.list}
// };

export default Category;
