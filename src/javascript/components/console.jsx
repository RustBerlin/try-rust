/**
 * @Class Console
 */

module.exports = React.createClass({

  propTypes: {
    text: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
        <form>
          <textarea name="console" readOnly value={this.props.text} />
        </form>
    )
  }

});