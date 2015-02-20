/**
 * @Class Console
 */

var Console = React.createClass({

  propTypes: {
    value: React.PropTypes.string.isRequired,
    handleCompileClick: React.PropTypes.func.isRequired
  },

  render: function () {
    return (
        <div className="console">
          <div className="menu">
            <div className="compile" onClick={this.props.handleCompileClick}>Run</div>
          </div>
          <textarea name="console" readOnly value={this.props.value} />
        </div>
    )
  }

});

module.exports = Console;