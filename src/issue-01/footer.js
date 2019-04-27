
const React = require('react');

class Footer extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="parametric-footer">
        <div>
          <img src="/static/images/logo-bg-dark.png" />
          <div style={{display: 'flex', direction: 'row', columnGap: '1em'}}>
            <div>
              <a style={{color: 'white', textDecoration: 'none'}} href="https://parametric.press/about/">About</a>
            </div>
            <div>
              <a style={{color: 'white', textDecoration: 'none'}} href="https://twitter.com/parametricpress">Twitter</a>
            </div>
            <div>
              Subscribe
            </div>
            <div>
              <form
                action="https://tinyletter.com/parametricpress"
                method="post"
                target="popupwindow"
                onSubmit={() => { window.open('https://tinyletter.com/parametricpress', 'popupwindow', 'scrollbars=yes,width=800,height=600'); return true }}>
                <input type="text" style={{width: 200}} name="email" id="tlemail" placeholder="Email address" />
                <input type="hidden" value="1" name="embed"/>
                <input style={{width: 100, background: 'white', color: '#222', fontFamily: 'Graphik Web', fontWeight: 400, fontSize: 12}} type="submit" value="Subscribe" />
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
