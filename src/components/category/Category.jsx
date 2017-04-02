import React from 'react';

class Category extends React.Component {

  render() {
    return (
      <div className="category">
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
    );
  }
}

export default Category;
