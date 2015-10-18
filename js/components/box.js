var ChildBox = require('./child-box');

var BoxContainer = React.createClass({
    render: function() {
        return (
            <div className="box">
                Hello, world! I am a Box.
                <ChildBox />
            </div>
        );
    }
});

module.exports = BoxContainer;