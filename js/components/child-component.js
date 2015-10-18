(function(React) {

	var ChildComponent = React.createClass({
	    render: function() {
	        return (
	            <div>Hi, I am just a Child Component.</div>
	        );
	    }
	});

	module.exports = ChildComponent;

})(window.React);