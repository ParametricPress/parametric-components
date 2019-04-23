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
    const {longTitle, headerImage, ...props} = this.props;
    return (
      <div className={'article-header'} style={{marginTop: 0}}>
        <div className="parametric-header-text">
          <div className="parametric-header-hed" style={{position: 'relative', zIndex: 2}}>
            <TextContainer {...props}>
              <div style={{position: 'relative', width: 720}}>
                <div style={{position: 'absolute', width: '100%', left: '-3em'}}>
                    <h1 className={'hed'}>
                      {
                        formatTitle(this.props.title)
                      }
                    </h1>
                    <h1 className={'hed hed-offset'}>
                      {
                        formatTitle(this.props.title)
                      }
                    </h1>
                </div>
                <div className="parametric-header-hed-text" style={{width: 720, maxWidth: 720, fontSize: '12px', lineHeight: '20px'}}>
                  <div>
                    <div className="parametric-long-title" >
                      {formatTitle(this.props.longTitle)}
                    </div>
                    <div style={{fontSize: 16, fontWeight: 'bold', marginTop: '2em', marginBottom: '3em'}}>
                      {props.date}
                    </div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', color: '#4801FF', fontSize: 12, fontWeight: 500}}>
                    <div>
                      <div style={{fontWeight: 'bold'}}>
                        Created by
                      </div>
                      <div>
                        {
                          this.props.authors.map(({name, role}) => {
                            return <div key={name}><a>{name}</a>, {role}</div>
                          })
                        }
                      </div>
                    </div>
                    <div style={{marginLeft: '4em'}}>
                      <div style={{fontWeight: 'bold'}}>
                        Metadata
                      </div>
                      <div>
                        <a href={this.props.source}>Source Code</a><br/>
                        <a href={this.props.archive}>Offline Archive</a><br/>
                        <a>DOI</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TextContainer>
          </div>
          {/* <div className='parametric-header-image' style={{position: 'relative', top: 150}}>
            <img src={this.props.headerImage ? this.props.headerImage : 'static/images/jpeg.png'} />
          </div> */}
          {/* <div style={{position: 'absolute', top: 0, right: 0}}> */}
          {/* </div> */}
          <h1 className="hed-rotate">
            {
              formatTitle(this.props.title)
            }
          </h1>
        </div>
        <TextContainer {...props}>
          <div className="parametric-article-dek" style={{fontFamily: 'Graphik Web'}}>
            {this.props.dek}
          </div>
        </TextContainer>
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
