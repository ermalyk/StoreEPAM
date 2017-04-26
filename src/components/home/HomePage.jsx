import React from 'react';
import { Link } from 'react-router';
// import '../semantic/dist/semantic.min.css';
import CategoryList from '../category/CategoryList.jsx';
import ToDoItemList from '../toDoItem/ToDoItemList.jsx';
import Helper from '../../utils/helpers/GetCategories';
import { Button, Progress } from 'semantic-ui-react';

class HomePage extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        isloading: false,
        percent: 40,
        expandCategories: []
      }
    }

    componentWillMount() {
      Helper.getCategories().then(
        data => {
          this.setState({ data });
          this.setState({
            expandCategories: data.map((category) => {
              category.id = category.id;
            })
          });
          console.log('expandCategories', this.state.expandCategories);
        },
        err => {
          console.error('Uups');
        });
    }

    changeToDoItems(category) {
      this.state.data.filter
    }

    render() {
      let toggle = () => this.setState({ percent: this.state.percent === 0 ? 100 : 0 });
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

            <div>{this.state.percent}
              <Progress percent={this.state.percent} autoSuccess />
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
