import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CategoryList from './CategoryList.jsx';
import { Button, Item, Icon } from 'semantic-ui-react';
import { toggleCategory } from '../category/actions.js'
//
// <CategoryList categories={this.props.categories} />




class Category extends React.Component {
  constructor(props) {
    super(props);
    // this.onClickCategory = this.onClickCategory.bind(this);
  }

  onClickCategory(id, level) {
    debugger;
    this.props.dispatch(toggleCategory(id, level));
  }

  render() {
    const {id, level} = this.props;
    const width = (100 - this.props.level * 10) + '%';
    // console.log(level, ' ', width);
    // console.log(this.props);
    return (
      <Item className="all-categories" >
        <div className="category-wrap" >
          <div></div>
          <div className="category" style={{width}}>
              <div className="category-title">
                <Button animated="fade" className="icon-button" onClick={() => this.onClickCategory(id, level)}>
                  <Button.Content visible>
                    <Icon name="expand" />
                  </Button.Content>
                  <Button.Content hidden>
                    expand
                  </Button.Content>
                </Button>

                <label>{this.props.title}</label>

                <Button animated="fade" className="icon-button">
                  <Button.Content visible>
                    <Icon name="edit" />
                  </Button.Content>
                  <Button.Content hidden>
                    edit
                  </Button.Content>
                </Button>
              </div>

              <div className="delete-and-add-category">
                <Button animated="fade" className="icon-button">
                  <Button.Content visible>
                    <Icon name="trash outline" />
                  </Button.Content>
                  <Button.Content hidden>
                    Delete
                  </Button.Content>
                </Button>

                <Button animated="fade" className="icon-button">
                  <Button.Content visible>
                    <Icon name="add square" />
                  </Button.Content>
                  <Button.Content hidden>
                    Add
                  </Button.Content>
                </Button>
            </div>
          </div>
        </div>
        {this.props.categories.map(category => (
          <Category
            key={category.id}
            id={category.id}
            level={level + 1}
            title={category.title}
            categories={category.categories || []}
          />
        ))}
      </Item>
    );
  }
}

Category.PropTypes = {
  level: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

export default connect()(Category);
