/**
 * @Class Console
 */

module.exports = React.createClass({

  propTypes: {
    text: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
        <div className="l-box">
          <form className="pure-form">
            <textarea className="pure-input-1" name="console" disabled={true} value={this.props.text} />
          </form>
        </div>
    )
  }

});
