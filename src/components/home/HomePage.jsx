import React from 'react';
import { Link } from 'react-router';
// import '../semantic/dist/semantic.min.css';
import CategoryList from '../category/CategoryList.jsx';
import ToDoItemList from '../toDoItem/ToDoItemList.jsx';
import Helper from '../../utils/helpers/GetCategories';

class HomePage extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        isloading: false
      }
    }

    componentWillMount() {
      Helper.getCategories().then(
        data => {
          this.setState({ data });
        },
        err => {
          console.error('Uups');
        });
    }

    render() {
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
            <progress value="20" max="100"></progress>
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
                <CategoryList className="category-list" categories={this.state.data} />
              </div>
              <div className="item-section">
                <ToDoItemList className="item-list" categories={this.state.data} />
              </div>
            </div>
          </div>
        );
    }
}

export default HomePage;
