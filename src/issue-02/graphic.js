import React from 'react';

class Graphic extends React.Component {

  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="parametric-graphic">

        <div className="parametric-graphic-hed">
          {props.hed}
        </div>
        
        <div className="parametric-graphic-subhed">
          {props.subhed}
        </div>
        
        {props.children}

        {props.source ? (
          <div className="parametric-graphic-source">
            <div className="parametric-graphic-source-label-wrapper">
              <div className="parametric-graphic-source-label">SOURCE</div>
              <div className="parametric-graphic-source-citation">{props.source}</div>
            </div>
            <div className="parametric-graphic-source-watermark">Parametric Press</div>
          </div>
        ) : (null)}

      </div>
    );
  }
}

module.exports = Graphic;
