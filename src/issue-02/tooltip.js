const React = require('react');
const ReactTooltip = require('react-tooltip');

let id = 0;
class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this._id = `parametric-tooltip-${id++}`;
  }
  render() {
    const { hasError, idyll, updateProps, children, ...props } = this.props;
    return (
      <span>
        <span className="parametric-tooltip-trigger" data-tip data-for={this._id}>{children}</span>
        <ReactTooltip  className='parametric-tooltip' id={this._id} effect='solid' place='top'>
          <span dangerouslySetInnerHTML={{__html: props.content}} />
        </ReactTooltip>
      </span>
    );
  }
}

module.exports = Tooltip;
