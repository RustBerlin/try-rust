/**
 * @Class Editor
 */

module.exports = React.createClass({

  propTypes: {
    defaultValue: React.PropTypes.string.isRequired,
    handleChange: React.PropTypes.func.isRequired
  },

  render: function () {
    return (
        <form>
          <textarea name="editor" onChange={this.props.handleChange} value={this.props.value || this.props.defaultValue} />
        </form>
    )
  }

});