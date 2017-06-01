import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
// import '../semantic/dist/semantic.min.css';
import CategoryList from '../category/CategoryList.jsx';
import ToDoItemList from '../toDoItem/ToDoItemList.jsx';
import Helper from '../../utils/helpers/GetCategories';
import { Button, Progress } from 'semantic-ui-react';

import { setCategoryList, toggleCategory, showCategoryItems, addCategory, editCategory } from '../category/actions.js';
// import { addCategory } from './actions.js';
// import {
//     ADD_CATEGORY
// } from './actions';
class HomePage extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        inputNewCategory: ''
      }
      this.updateNewCategoryInputValue = this.updateNewCategoryInputValue.bind(this);
    }

    componentDidMount() {
      // this.props.dispatch(getCategoryList(data));

      Helper.getCategories().then(
        data => {
          console.log('------------------data------------------------');
          console.log(data);
          console.log('------------------data------------------------');
          // this.props.dispatch(setCategoryList(data));
          this.props.setCategoryList(data);
          console.log('setCategoryList');
        },
        err => {
          console.error('Uups');
        });
    }

    changeToDoItems(category) {
      // this.state.data.filter
    }

    updateNewCategoryInputValue(evt) {
      this.setState({
        inputNewCategory: evt.target.value
      });
    }

    render() {
      const { categories, pressedId, activeItems } = this.props.categories;
      const { addCategory, editCategory } = this.props;

      console.log('homepage categories', activeItems)
      console.log('addCategory', addCategory)

      function getItemsForSelectedCategory(categories, id) {
            console.log('categories, id ', categories, id);
            let items = categories.find((category) => {
                if (category.id && category.id === id) {
                console.log('first');
                return category.items;
              }
              if (category.categories.length > 0) {
                  console.log('second');
                  getItemsForSelectedCategory(category.categories, id);
              }
            });
            console.log('items ', items);

            if(items) return items;
            return {};
      }

      const toggle = () => {};

      return (
        <div>
          <div className="search">
            <div/>
            <div>
              <input type="checkbox" />
              <label>Show done</label>
              <input type="text" />
            </div>
          </div>

          <div>
            <Progress percent={60} autoSuccess />
            <Button onClick={toggle}>Toggle Complete</Button>
          </div>
          <div className="add-text-fields">
            <div>
              <input type="text"  value={this.state.inputNewCategory} onChange={evt => this.updateNewCategoryInputValue(evt)} />
              <Button className="icon-button" onClick={() => {addCategory(this.state.inputNewCategory)}}>
                <Button.Content>
                  Add
                </Button.Content>
              </Button>
            </div>
            <div>
              <input type="text" />
              <button>Add</button>
            </div>
          </div>
          <div className="home-page">
            <div className="categories-section">
              <CategoryList className="category-list" pressedId={pressedId} categories={categories} onCategoryClick={this.props.toggleCategory} showCategoryItems={this.props.showCategoryItems} editCategory={editCategory}/>
            </div>
            <div className="item-section">
              <ToDoItemList className="item-list" items={activeItems} />
            </div>
          </div>
        </div>
      );
    }
}

// <ToDoItemList className="item-list" items={activeItems} onCategoryClick={this.props.toggleCategory} />
// <ToDoItemList className="item-list" categories={categories} onCategoryClick={this.props.toggleCategory} />

HomePage.PropTypes = {
  categories: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  categories: state.categories.list
})

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCategory: bindActionCreators(toggleCategory, dispatch),
    setCategoryList: bindActionCreators(setCategoryList, dispatch),
    addCategory: bindActionCreators(addCategory, dispatch),
    editCategory: bindActionCreators(editCategory, dispatch),
    showCategoryItems: bindActionCreators(showCategoryItems, dispatch)
  };
}

// const mapStateToProps = (state) => {
//   return {categories: state.categories.list}
// };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
