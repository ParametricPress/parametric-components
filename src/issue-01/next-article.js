import React from 'react';
import ARTICLES from './articles';

class CustomComponent extends React.Component {

  getNextArticle() {
    const idx = ARTICLES.findIndex((element) => {
      return element.slug = this.props.slug
    });

    const len = ARTICLES.length;
    return ARTICLES[((idx + 1) % len)];
  }

  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    const article = this.getNextArticle();
    return (
      <div className="parametric-recirc-next-article" style={{borderTop: 'solid 8px #222222', borderBottom: 'solid 1px #222222', fontFamily: 'Graphik Web', fontWeight: 'bold', fontSize: 32, marginTop: '2em', marginBottom: '4em', width: '90vw'}}>
        <a href={article.slug} style={{fontSize: 24, fontWeight: 400, color: '#222222', textShadow: 'none', display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: '2em 0'}}>
          <div>
            <span style={{fontSize: 32, fontWeight: 'bold'}}>Read the next article</span><br/>
            <span className="highlight-hover">{article.title}</span>
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
