import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CategoryList from './CategoryList.jsx';
import {Button, Item, Icon} from 'semantic-ui-react';
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
      editCategory
    } = this.props;


console.log('--------id--------', id);
    const width = (100 - this.props.level * 10) + '%';
    // console.log(level, ' ', width); console.log(this.props);
    // console.log('--------------category-------------');
    // console.log(categories);
    // console.log('--------------category-------------');
    return (
      <Item className="all-categories" key={id}>
        <div  className={(pressedId === id) ? 'category-wrap activeCategory' : 'category-wrap'}  onClick={() => showCategoryItems(id)}>
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

              <Button animated="fade" className="icon-button" onClick={() => editCategory(id)}>
                <Button.Content visible>
                  <Icon name="edit"/>
                </Button.Content>
                <Button.Content hidden>
                  edit
                </Button.Content>
              </Button>
            </div>

            <div className="delete-and-add-category">
              <Button animated="fade" className="icon-button">
                <Button.Content visible>
                  <Icon name="trash outline"/>
                </Button.Content>
                <Button.Content hidden>
                  Delete
                </Button.Content>
              </Button>

              <Button animated="fade" className="icon-button">
                <Button.Content visible>
                  <Icon name="add square"/>
                </Button.Content>
                <Button.Content hidden>
                  Add
                </Button.Content>
              </Button>
            </div>
          </div>
        </div>
        <div className={active ? '' : 'hideCategory'}>
          {categories
            .map(category => (<div ><Category
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
            /></div>))}
          </div>
      </Item>
    );
  }
}

Category.PropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
  showCategoryItems: PropTypes.func.isRequired,
  editCategory: PropTypes.func.isRequired
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
