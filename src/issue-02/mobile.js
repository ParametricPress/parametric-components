import React from 'react';

class Mobile extends React.Component {

  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="mobile">
        {props.children}
      </div>
    );
  }
}

module.exports = Mobile;
