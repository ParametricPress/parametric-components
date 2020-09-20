import React from 'react';
import ARTICLES from './articles';

class CustomComponent extends React.Component {

  getNextArticle() {
    const idx = ARTICLES.findIndex((element) => {
      return element.slug === this.props.slug
    });
    const len = ARTICLES.length;
    return ARTICLES[((idx + 1) % len)];
  }

  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    const article = this.getNextArticle();
    return (
      <div className="parametric-recirc-next-article" style={{fontFamily: 'Graphik Web', fontWeight: 'bold', marginTop: '2em', marginBottom: 0, background: '#D8FFA2'}}>
        <a href={`/issue-02/${article.slug}/`} style={{fontSize: 56, lineHeight: '64px', fontWeight: 400, color: '#222222', textShadow: 'none', display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: '1em 0', textDecoration: 'none'}}>
          <div>
            <span style={{fontWeight: 'bold'}}>Read the next article</span><br/>
            <span className="highlight-hover" style={{fontSize: 32, lineHeight: '48px', fontFamily: 'Editorial New'}}>{article.title}</span>
          </div>
          <div style={{textAlign: 'right', fontWeight: 'bold'}}>
            →
          </div>
        </a>
      </div>
    );
  }
}

module.exports = CustomComponent;
