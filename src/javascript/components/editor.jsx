/**
 * @Class Console
 */

module.exports = React.createClass({

  propTypes: {
    code: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
        <div className="l-box">
          <form className="pure-form">
            <textarea className="pure-input-1" name="code" value={this.props.code} />
          </form>
        </div>
    )
  }

});
