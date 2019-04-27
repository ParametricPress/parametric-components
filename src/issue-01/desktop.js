import React from 'react';

class Desktop extends React.Component {

  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="desktop">
        {props.children}
      </div>
    );
  }
}

module.exports = Desktop;
