import React from 'react';
import CategoryList from './CategoryList.jsx';
//
// <CategoryList categories={this.props.categories} />

class Category extends React.Component {

  render() {
    const {level} = this.props;
    const width = (100 - this.props.level * 10) + '%';
    console.log(level, ' ', width);

    return (
      <div className="all-categories" >
        <div className="category-wrap">
          <div></div>
          <div className="category" style={{width}}>
            <div>
              <button className="expandCatalog"></button>
              <label>{this.props.title}</label>
              <button className="editCatalog"></button>
            </div>
            <div>
              <button className="deleteCatalog"></button>
              <button className="addCatalog"></button>
            </div>
          </div>
        </div>
        {this.props.categories.map(category => (
          <Category
            key={category.id}
            level={level + 1}
            title={category.title}
            categories={category.categories || []}
          />
        ))}
      </div>
    );
  }
}

export default Category;
