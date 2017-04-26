import React, {PropTypes} from 'react';

class StorePAge extends React.Component {
  constructor(props) {
    super(props);

  }

  // store.subscribe( (a) => {console.log();} );

  render() {
    console.log(this.getState());
    return (
      <div>
        <h1>Store</h1>
      </div>
    );
  }
}

export default StorePAge;
