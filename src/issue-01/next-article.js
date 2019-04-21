import React from 'react';
import ARTICLES from './articles';

class CustomComponent extends React.Component {

  getNextArticle() {
    if (window.location.pathname) {

    }
  }
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="parametric-recirc-next-article" style={{borderTop: 'solid 8px #222222', borderBottom: 'solid 1px #222222', padding:'2em 0', fontFamily: 'Graphik Web', fontWeight: 'bold', fontSize: 32, marginTop: '4em', marginBlock: '8em', marginLeft: 50, width: '90vw'}}>
        <a style={{fontSize: 24, fontWeight: 400, color: '#222222', textShadow: 'none', display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div>
            <span style={{fontSize: 32, fontWeight: 'bold'}}>Read the next article</span><br/>
            The Myth of the Impartial Machine
          </div>
          <div style={{textAlign: 'right', fontSize: 32, fontWeight: 'bold'}}>
            →
          </div>
        </a>
      </div>
    );
  }
}

module.exports = CustomComponent;
