(function(Reflux, CounterActions, global) {
	
	'use strict';

	var localStorageKey = 'counter';

	function getItemByKey(list, itemKey) {
		return _.find(list, function(item) {
			return item.key === itemKey;
		});
	}

	global.CounterStore = Reflux.createStore({
		listenables: [CounterActions],
		onAddToCounterValue: function(addToCounter) {
			this.counter += addToCounter;
			localStorage.setItem(localStorageKey, this.counter);
			this.updateCounter();
		},
		removeItem: function() {
			this.counter--;
			localStorage.setItem(localStorageKey, this.counter);
			this.updateCounter();
		},
		updateCounter: function() {
			this.trigger(this.counter);
		},
		getInitialState: function() {
			this.counter = parseInt(localStorage.getItem(localStorageKey));
			if (isNaN(this.counter) || this.counter == undefined) {
				this.counter = 0;
			}
			return this.counter;
		}
	});

})(window.Reflux, window.CounterActions, window);