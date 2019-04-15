import React from 'react';

class Recirc extends React.Component {

  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="parametric-recirc-module">
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{width: 60, marginRight: '1em'}}>
            <img style={{width: '100%', position: 'relative', top: 6}} src="static/images/diamond.png" />
          </div>
          <div style={{fontSize: 24, lineHeight: 1.1}}>
            More from the Parametric Press
            {/* <img style={{display: 'inline', height: 12, width: 'auto'}} src="static/images/logo.png" />. */}
          </div>
        </div>
        <hr style={{margin: 0, marginTop: 12}} />
        <div style={{fontSize: 16}}>
          <div style={{fontWeight: 500, marginTop: '1em'}}>
            On Particle Physics
          </div>
          <div style={{fontWeight: 400, fontStyle: 'italic'}}>
            TK TK Description
          </div>
          <div style={{fontWeight: 500, marginTop: '1em'}}>
            Anything That Flies, On Anything That Moves
          </div>
          <div style={{fontWeight: 400, fontStyle: 'italic'}}>
            TK TK Description
          </div>
          <div style={{fontWeight: 500, marginTop: '1em'}}>
            Deconstructing the JPEG
          </div>
          <div style={{fontWeight: 400, fontStyle: 'italic'}}>
            TK TK Description
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Recirc;
