import React, {PropTypes} from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import { Input, Menu } from 'semantic-ui-react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' }
  }

  redirect(to) {
      browserHistory.push({
        pathname: to
      });
      console.log(browserHistory);
  }
  render() {
    this.handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
      // this.redirect(this.state.activeItem.name);
          // <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} as={ Link } to="./" >asdf</Menu.Item>
          // <Menu.Item name="Store" active={activeItem === 'Store'} onClick={this.handleItemClick} as={ Link } to="./store"  />
          // <Menu.Item name="About" active={activeItem === 'About'} onClick={this.handleItemClick} as={ Link } to="./about"  />

  };
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing>
          <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} as={ IndexLink } to="/" >Home</Menu.Item>
          <Menu.Item name="store" active={activeItem === 'store'} onClick={this.handleItemClick} as={ Link } to="/store" >Store</Menu.Item>
          <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick} as={ Link } to="/about" >About</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>

    );
  }
}

export default Header;
