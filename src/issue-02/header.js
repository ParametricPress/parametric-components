import React from 'react';
import { TextContainer } from 'idyll-components';

const formatTitle = (title) => {
  return title.reduce((memo, str, i) => {
    if (i < title.length - 1) {
      return memo.concat([<span key={str}>{str}</span>, <br key={i} />]);
    }
    return memo.concat([<span key={str}>{str}</span>]);
  }, [])
}
class Header extends React.PureComponent {
  render() {
    const {longTitle, headerImage, headerVideo, ...props} = this.props;
    return (
      <div className={'article-header'} style={{marginTop: 0}}>
        <div className="parametric-header-text">
          <div className="parametric-header-hed">
            <div className="parametric-header-hed-text" style={{fontSize: '12px', lineHeight: '20px' }}>
              <div>
                <div style={{fontSize: 16, fontWeight: 500, marginTop: 0, marginBottom: '0.5em'}}>
                  {props.date}
                </div>
                <div className="parametric-long-title" >
                  {formatTitle(this.props.longTitle)}
                </div>
                <div className="parametric-article-dek">
                  {this.props.dek}
                </div>
              </div>
            </div>
            <div className={'parametric-header-metadata-component'} style={{display: 'flex', flexDirection: 'row', fontSize: 12, fontWeight: 500, lineHeight: 1.5}}>
                <div style={{display: 'flex', flexDirection: 'row' }}>
                  <div style={{fontWeight: 'bold'}}>
                    Created by
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row' }}>
                    {
                      this.props.authors.map(({name, role, url}) => {
                        return <div key={name} style={{marginRight: '0.5em'}}><a href={url}>{name}</a></div>
                      })
                    }
                  </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row' }}>
                  <div style={{fontWeight: 'bold'}}>
                    Metadata
                  </div>
                  <a href={this.props.source}>Source Code</a>
                  <a href={this.props.archive}>Offline Archive</a>
                  <a href={this.props.doi}>DOI</a>
                </div>
              </div>
          </div>
        </div>

        {
            this.props.headerImage ?
              <div className='parametric-header-image' style={{position: 'absolute', top: 0, right: 0, left: 0, right: 0, bottom: 0, background: `url(${this.props.headerImage})`}}>
              </div> : null
          }
          {
            this.props.headerVideo ?
              <div className='parametric-header-image' style={{position: 'absolute', top: 0, right: 0, left: 0, right: 0, bottom: 0, zIndex: 10}}>
                <video src={this.props.headerVideo} muted={true} controls={false} autoPlay={true} loop={true} style={{width: '100%', height: '100vh'}} />
              </div> : null
          }
      </div>
    );
  }
}

Header._idyll = {
  name: "Header",
  tagType: "closed",
  props: [{
    name: "title",
    type: "string",
    example: '"Article Title"'
  }, {
    name: 'subtitle',
    type: 'string',
    example: '"Article subtitle."'
  }, {
    name: 'author',
    type: 'string',
    example: '"Author Name"'
  }, {
    name: 'authorLink',
    type: 'string',
    example: '"author.website"'
  }]
}

export default Header;
