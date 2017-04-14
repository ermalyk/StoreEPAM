import React from 'react';
import CategoryList from './CategoryList.jsx';
import { Button, Image as ImageComponent, Item, Icon } from 'semantic-ui-react';
//
// <CategoryList categories={this.props.categories} />

const paragraph = <ImageComponent src="../node_modules/semantic-ui-css/assets/images/wireframe/short-paragraph.png" />;

class Category extends React.Component {

  render() {
    const {level} = this.props;
    const width = (100 - this.props.level * 10) + '%';
    console.log(level, ' ', width);

    return (
      <Item className="all-categories" >
        <div className="category-wrap">
          <div></div>
          <div className="category" style={{width}}>
              <div className="category-title">
                <Button animated="fade" className="icon-button">
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
            level={level + 1}
            title={category.title}
            categories={category.categories || []}
          />
        ))}
      </Item>
    );
  }
}

export default Category;
