import React from 'react';
import ARTICLES from './articles';

class CustomComponent extends React.Component {

  getNextArticle() {
    if (window.location.pathname) {

    }
  }
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="parametric-recirc">
        <a>Next<br/>Article</a>

        <div>

        </div>
      </div>
    );
  }
}

module.exports = CustomComponent;
