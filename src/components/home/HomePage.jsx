import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import '../semantic/dist/semantic.min.css';
import CategoryList from '../category/CategoryList.jsx';
import ToDoItemList from '../toDoItem/ToDoItemList.jsx';
import Helper from '../../utils/helpers/GetCategories';
import { Button, Progress } from 'semantic-ui-react';

import { setCategoryList } from '../category/actions.js';

class HomePage extends React.Component {

    componentWillMount() {
      // this.props.dispatch(getCategoryList(data));
      Helper.getCategories().then(
        data => {
          this.props.dispatch(setCategoryList(data));
        },
        err => {
          console.error('Uups');
        });
    }

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
                <CategoryList className="category-list" categories={categories} />
              </div>
              <div className="item-section">
                <ToDoItemList className="item-list" categories={categories} />
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
  categories: state.categories.list
})

export default connect(mapStateToProps)(HomePage);
