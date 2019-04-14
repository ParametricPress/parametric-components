const React = require('react');

class Newsletter extends React.Component {
  render() {
    return (
      <form
        style={{
          border: '1px solid #ccc',
          padding: 3,
          textAlign: 'center'
        }}
        action="https://tinyletter.com/parametricpress"
        method="post"
        target="popupwindow"
        onSubmit="window.open('https://tinyletter.com/parametricpress', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
        <p>
          <label htmlFor="tlemail">
            Enter your email address
          </label>
        </p>
        <p>
          <input type="text" style={{width: 140}} name="email" id="tlemail" />
        </p>
        <input type="hidden" value="1" name="embed"/>
        <input type="submit" value="Subscribe" />
      </form>
    );
  }
}

module.exports = Newsletter;
