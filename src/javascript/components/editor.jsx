/**
 * @Class Editor
 */

var Editor = React.createClass({

  propTypes: {
    handleChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
        <div className="editor">
          <textarea name="editor" onChange={this.props.handleChange} value={this.props.value} />
        </div>
    )
  }

});

module.exports = Editor;