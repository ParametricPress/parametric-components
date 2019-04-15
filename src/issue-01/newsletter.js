const React = require('react');

class Newsletter extends React.Component {
  render() {
    return (
      <div className="parametric-recirc-module">
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{width: 60, marginRight: '1em'}}>
          <img style={{width: '100%', position: 'relative', top: 6}} src="static/images/diamond.png" />
        </div>
        <div style={{fontSize: 24, lineHeight: 1.1}}>
          Get updates from the Parametric Press
          {/* <img style={{display: 'inline', height: 12, width: 'auto'}} src="static/images/logo.png" />. */}
        </div>
      </div>
      <hr style={{margin: '12px 0'}} />
      <div style={{fontSize: 16}}>
        <form
          style={{
          }}
          action="https://tinyletter.com/parametricpress"
          method="post"
          target="popupwindow"
          onSubmit="window.open('https://tinyletter.com/parametricpress', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
          <p>
            <label htmlFor="tlemail">
              Enter your email address:
            </label>
          </p>
          <p>
            <input type="text" style={{width: '100%', padding: '0.5em'}} name="email" id="tlemail" placeholder="example@domain.com" />
          </p>
          <input type="hidden" value="1" name="embed"/>
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
    );
  }
}

module.exports = Newsletter;
