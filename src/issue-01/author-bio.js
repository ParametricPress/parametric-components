const React = require('react');

class CustomComponent extends React.Component {

  componentDidCatch(e) {
    console.log(e);
  }
  render() {
    const { hasError, updateProps, children, ...props } = this.props;
    return (
      <div className="parametric-author-bio" style={{fontFamily: 'Graphik Web', fontSize: '16px', fontWeigth: 600, lineHeight: 1.5, margin: '3em 0 2em' }}>
        {children}
      </div>
    );
  }
}

module.exports = CustomComponent;