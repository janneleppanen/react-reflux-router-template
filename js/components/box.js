(function(React, Reflux, CounterActions, CounterStore) {

	var ChildComponent = require('./child-component');
	
	var BoxContainer = React.createClass({
		mixins: [Reflux.connect(CounterStore,"counter")],
		getInitialState: function () {
			
		},
	    render: function() {
	    	function handleClick(addToCounter) {
				CounterActions.addToCounterValue(addToCounter);
			};
	        return (
	            <div className="box">
	                <h2>Counter: {this.state.counter}</h2>

	                <button onClick={handleClick.bind(this, 1)}>+</button>
	                <button onClick={handleClick.bind(this, -1)}>-</button>

	                <hr />
	                <ChildComponent />
	            </div>
	        );
	    }
	});

	module.exports = BoxContainer;

})(window.React, window.Reflux, window.CounterActions, window.CounterStore);