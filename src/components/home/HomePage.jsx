import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
// import '../semantic/dist/semantic.min.css';
import CategoryList from '../category/CategoryList.jsx';
import ToDoItemList from '../toDoItem/ToDoItemList.jsx';
import Helper from '../../utils/helpers/GetCategories';
import { Button, Progress } from 'semantic-ui-react';

import { setCategoryList, toggleCategory } from '../category/actions.js';

class HomePage extends React.Component {

    componentDidMount() {
      // this.props.dispatch(getCategoryList(data));
      
      Helper.getCategories().then(
        data => {
          console.log(data);
          // this.props.dispatch(setCategoryList(data));
          this.props.setCategoryList(data);
        },
        err => {
          console.error('Uups');
        });
    }

    // onClickCategory(id, level) {
    //   this.props.dispatch(toggleCategory(id, level));
    // }
    
    changeToDoItems(category) {
      // this.state.data.filter
    }

    render() {
      const { categories } = this.props;

      let toggle = () => {
        // Dispathc action
      };
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
                <input type="text" />
                <button>Add</button>
              </div>
              <div>
                <input type="text" />
                <button>Add</button>
              </div>
            </div>
            <div className="home-page">
              <div className="categories-section">
                <CategoryList className="category-list" categories={categories} onCategoryClick={this.props.toggleCategory} />
              </div>
              <div className="item-section">
                <ToDoItemList className="item-list" categories={categories} onCategoryClick={this.props.toggleCategory} />
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
  categories: state.categories.list
})

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCategory: bindActionCreators(toggleCategory, dispatch),
    setCategoryList: bindActionCreators(setCategoryList, dispatch)
  };
}

// const mapStateToProps = (state) => {
//   return {categories: state.categories.list}
// };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
