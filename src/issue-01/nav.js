import React from 'react';

const ARTICLES = [{
  title: 'Bacone School',
  author: 'James McGirk',
  slug: 'bacone-school'
}, {
  title: 'Housing Equity',
  author: 'Alyson Powell Key',
  slug: 'housing-data-science'
}, {
  title: 'Particle Physics',
  author: 'Riccardo Maria Bianchi',
  slug: 'particle-physics'
}, {
  title: 'Death of the Compact Disc',
  author: 'Adlan Jackson',
  slug: 'death-of-the-compact-disc'
}, {
  title: 'On Dance',
  author: 'Sam Petulla',
  slug: 'on-dance'
}, {
  title: 'Deconstructing the JPEG',
  author: 'Omar Shehata',
  slug: 'deconstructing-the-jpeg'
}, {
  title: 'Bias in ML',
  author: 'Shuyan Wu & Alice Feng',
  slug: 'bias-in-machine-learning'
}]

class Nav extends React.PureComponent {

  constructor(props) {
    super(props);
    this.handleContents = this.handleContents.bind(this);
    this.state = {
      showContent: false
    }
  }

  handleContents() {
    this.setState({
      showContent: !this.state.showContent
    });
  }

  render() {
    return (
      <div style={{
        marginTop: 25,
        marginLeft: 50,
        marginRight: 50,
        zIndex: 1000}}>
          <div>
            {/* <div style={{fontFamily:'Bluu', textDecoration: 'none'}}>Parametric Press</div> */}
            <img src="static/images/logo.png" style={{display: 'inline', width:238}} />
          </div>
          <div style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            fontSize: 32,
            fontFamily: 'Graphik Web',
            textDecoration: 'underline',
            marginTop: '0.5em',
            lineHeight: '32px'
          }}>
            <a href="/" style={{color: 'black'}}>
              Issue 01<br/>
              Science + Society
            </a>
            <div style={{cursor: 'pointer', zIndex: 1000}} onClick={this.handleContents}>
              Table of Contents
            </div>

          </div>
          <div style={{
            display: this.state.showContent ? 'block' : 'none',
            position: 'fixed',
            width: 500,
            right: 0,
            top: 0,
            bottom: 0,
            padding: '2em',
            paddingTop: '8em',
            background: '#FFE533',
            overflow: 'auto',
            zIndex: 999
            }}>

            {
              ARTICLES.map(({title, slug, author}, i) => {
                return (
                <div style={{textAlign: 'right', fontSize: 32}} key={title}>
                  <div style={{marginBottom: '2em', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <div>
                      <div style={{fontFamily: 'Graphik Web'}}>
                        <a style={{color: '#222'}} href={`../${slug}/`}>{title}</a>
                      </div>
                      <div style={{fontStyle: 'italic', fontWeight: 300, fontFamily: 'Graphik Web'}}>
                        By {author}
                      </div>
                    </div>
                    <div style={{marginLeft: '1em', fontFamily: 'Graphik Web'}}>
                      0{i + 1}
                    </div>
                  </div>
                </div>
                )
              })
            }
          </div>
      </div>
    )
  }
}
export default Nav;
