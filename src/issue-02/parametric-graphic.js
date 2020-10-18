import React from 'react';

class ParametricGraphic extends React.Component {

  renderSource() {
    let source = this.props.source || this.props.sources;

    if (!source) {
      return <div className="parametric-graphic-source-label-wrapper"></div>;
    }

    if (typeof source === 'string') {
      return (
        <div className="parametric-graphic-source-label-wrapper">
          <div className="parametric-graphic-source-label">SOURCE</div>
          <div className="parametric-graphic-source-citation">{source}</div>
        </div>
      )
    }

    if (!Array.isArray(source)) {
      source = [source];
    }

    return (
      <div className="parametric-graphic-source-label-wrapper">
        <div className="parametric-graphic-source-label">SOURCE</div>
        <div className="parametric-graphic-source-citation">
          {source.map((s, idx) => {
            if (typeof s === 'string') {
              return <span key={`${idx}-${s}`}>{s}</span>;
            }
            return <a key={`${idx}-${s.label}`} href={s.url}>{s.label}</a>
          }).reduce((memo, el, idx, arr) => {
            memo.push(el);
            if (idx < arr.length - 1) {
              memo.push(' ');
            }
            return memo;
          }, [])}
        </div>
      </div>
    )
  }

  render() {
    const { hasError, idyll, updateProps, style, ...props } = this.props;
    return (
      <div className={`parametric-graphic ${props.className || ''}`} style={{...style}}>

        <div className="parametric-graphic-hed">
          {props.hed}
        </div>

        <div className="parametric-graphic-subhed">
          {props.subhed}
        </div>

        {props.children}

        <div className="parametric-graphic-source">
          {this.renderSource()}
          <div className="parametric-graphic-source-watermark">Parametric Press</div>
        </div>



      </div>
    );
  }
}

module.exports = ParametricGraphic;
