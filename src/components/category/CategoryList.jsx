import React, { PropTypes } from 'react';
import Category from '../category/Category.jsx';
import { Item } from 'semantic-ui-react';
import { connect } from 'react-redux';

// @connect((store) => {
//   retrun {
//     foo: 1
//   };
// })
class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    //this.onClickCategory= this.onClickCategory().bind(this);
  }

  render() {
    const {store, categories, level} = this.props;
    console.log(store);
    // console.log('this.props.categories', this.props.categories);
    return (
      <div>
        <Item.Group divided>
          {
            categories.map(category => {
              const categories = category.categories || [];
              return (
                <Item.Group divided key={category.id}>
                  <Category key={category.id} id={category.id} level={0} checked={false} title={category.title} categories={categories} onClickCategory={this.onClickCategory} />
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
  onClickCategory: PropTypes.func.isRequired
};

export default CategoryList;
