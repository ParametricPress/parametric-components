import React from 'react';
import ARTICLES from './articles';

class Recirc extends React.Component {

  getArticles() {
    const idx = ARTICLES.findIndex((element) => {
      return element.slug === this.props.slug
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
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{fontSize: 18, lineHeight: 1.2, fontWeight: 'bold'}}>
            More from the Parametric Press
          </div>
        </div>
        <div style={{fontSize: 18, lineHeight: 1.2, marginLeft: 0}}>
          {
            this.getArticles().map((article) => {
              return (
                <div key={article.slug} className="parametric-recirc-article">
                  <a style={{color: '#222'}} href={`/issue-01/${article.slug}/`}>
                    <div style={{fontWeight: 500}}>
                      {article.title}
                    </div>
                    <div style={{fontWeight: 400, fontSize: 16, lineHeight: 1.2, textDecoration: 'none'}}>
                      {article.description}
                    </div>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

module.exports = Recirc;
