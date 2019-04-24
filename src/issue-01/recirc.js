import React from 'react';
import ARTICLES from './articles';

class Recirc extends React.Component {

  getArticles() {
    const idx = ARTICLES.findIndex((element) => {
      return element.slug = this.props.slug
    });

    const len = ARTICLES.length;
    const f = (n) => {
      return ARTICLES[(n % len)];
    }

    return [f(idx + 1), f(idx + 2), f(idx + 3)];
  }

  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="parametric-recirc-module">
        <hr style={{margin: 0, marginTop: 12, height: 4, marginBottom: 12}} />
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{width: 60, marginRight: '2em', transform: 'rotate(-20deg)'}}>
            <img style={{width: '100%', margin: 0, position: 'relative', top: 6}} src="static/images/diamond.png" />
          </div>
          <div style={{fontSize: 22, lineHeight: 1.2}}>
            More from the Parametric Press
            {/* <img style={{display: 'inline', height: 12, width: 'auto'}} src="static/images/logo.png" />. */}
          </div>
        </div>
        <div style={{fontSize: 16, lineHeight: 1.2, marginLeft: 0}}>
          {
            this.getArticles().map((article) => {
              return (
                <div key={article.slug}>
                  <a style={{color: '#222'}} href={article.slug}>
                    <div style={{fontWeight: 500, marginTop: '1em'}}>
                      {article.title}
                    </div>
                    <div style={{fontWeight: 400, fontSize: 14, textDecoration: 'none'}}>
                      {article.description}
                    </div>
                  </a>
                </div>
              )
            })
          }
        </div>
        <hr style={{margin: 0, marginTop: 12, height: 1}} />
      </div>
    );
  }
}

module.exports = Recirc;
