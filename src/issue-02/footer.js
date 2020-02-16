
const React = require('react');

class Footer extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="parametric-footer">
        <div>
          <img src="https://parametric.press/issue-01/static/images/logo-bg-dark.png" />
          <div className="parametric-footer-link-container">
            <div>
              <a style={{color: 'white', textDecoration: 'none'}} href="/issue-01/">Issue 01</a>
            </div>
            <div>
              <a style={{color: 'white', textDecoration: 'none'}} href="/about/">About</a>
            </div>
            <div>
              <a style={{color: 'white', textDecoration: 'none'}} href="https://parametric.press/rss.xml">RSS</a>
            </div>
            <div>
              <a style={{color: 'white', textDecoration: 'none'}} href="https://facebook.com/parametric.press"><img style={{position: 'relative', top: '25%', height:18, width: 'auto'}} src="/static/images/facebook.png" /></a>
            </div>
            <div>
              <a style={{color: 'white', textDecoration: 'none'}} href="https://twitter.com/parametricpress"><img style={{position: 'relative', top: '25%', height:18, width: 'auto'}} src="/static/images/twitter.png" /></a>
            </div>
            <div>
              <form
                action="https://tinyletter.com/parametricpress"
                method="post"
                target="popupwindow"
                onSubmit={() => { window.open('https://tinyletter.com/parametricpress', 'popupwindow', 'scrollbars=yes,width=800,height=600'); return true }}>
                <input type="text" name="email" id="tlemail" placeholder="Email address" />
                <input type="hidden" value="1" name="embed"/>
                <input style={{background: 'white', color: '#222', fontFamily: 'Graphik Web', fontWeight: 400, fontSize: 12}} type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

module.exports = Footer;
