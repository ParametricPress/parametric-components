import React from 'react';

class Recirc extends React.Component {

  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="parametric-recirc-module">
        <hr style={{margin: 0, marginTop: 12, height: 4, marginBottom: 12}} />
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{width: 60, marginRight: '2em', transform: 'rotate(-20deg)'}}>
            <img style={{width: '100%', position: 'relative', top: 6}} src="static/images/diamond.png" />
          </div>
          <div style={{fontSize: 22, lineHeight: 1.2}}>
            More from the Parametric Press
            {/* <img style={{display: 'inline', height: 12, width: 'auto'}} src="static/images/logo.png" />. */}
          </div>
        </div>
        <div style={{fontSize: 18, lineHeight: 1.2, marginLeft: 0}}>
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
        <hr style={{margin: 0, marginTop: 12, height: 1}} />
      </div>
    );
  }
}

module.exports = Recirc;
