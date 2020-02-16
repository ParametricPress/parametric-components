import React from 'react';

class Inset extends React.Component {

  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="parametric-inset">
        {props.children}
      </div>
    );
  }
}

module.exports = Inset;
