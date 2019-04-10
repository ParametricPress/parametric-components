import React from 'react';

class Right extends React.Component {

  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="parametric-float-right">
        {props.children}
      </div>
    );
  }
}

module.exports = Right;
