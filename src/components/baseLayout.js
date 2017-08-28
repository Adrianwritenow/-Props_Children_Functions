import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class BaseLayout extends Component {
    // This should house Header and Footer components and be able to house any children components.
  render() {
    return (
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

 export default BaseLayout;
