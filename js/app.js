var TextCounter = {
	counter: 0,
	maxChar: 140,
	insertMode: false,
	textArea: null,
	textAreaTotal: null,
	textAreaLeft: null,

	init: function() {
		this.textArea = document.querySelector('#js-message');
		this.textAreaTotal = document.querySelector('#js-message-left-total');
		this.textAreaLeft = document.querySelector('#js-message-left-symbols');

		this.events();
	},
	events: function() {
		this.textArea.addEventListener('keypress', this.maxLength);
		this.textArea.addEventListener('keyup', this.count);
		this.textArea.addEventListener('keyup', this.insertModeOn);
	},
	maxLength: function(evt) {
		this.maxLength = TextCounter.maxChar;
	},
	countTotal: function() {
		TextCounter.textAreaTotal.innerHTML = TextCounter.counter;
	},
	countLeft: function() {
		TextCounter.textAreaLeft.innerHTML = TextCounter.maxChar - TextCounter.counter;
	},
	count: function(evt) {
		TextCounter.counter = this.value.length;

		TextCounter.countTotal();
		TextCounter.countLeft();
	},
	setInserMode: function(evt) {
		if (evt.key === 'Insert') {
			TextCounter.insertMode = TextCounter.insertMode ? false :  true;
		} 
	},
	isSpecalKeys: function(evt) {
		switch (evt.key) {
			case "ArrowDown":
			case "ArrowUp":
			case "ArrowLeft":
			case "ArrowRight":
			case "Enter":
			case "Escape":
			case "Alt":
			case "Home":
			case "Escape":
			case "Alt":
			case "Home":
			case "Insert":
			case "Control":
			case "Meta":
			case "End":
			case "PageUp":
			case "PageDown":
			case "Shift":
			return true;
			default: false;
		}
	},
	insertModeOn: function(evt) {	
		TextCounter.setInserMode(evt);

		if (TextCounter.insertMode) {
			if (!TextCounter.isSpecalKeys(evt)) {
				var currentSymbol = this.selectionStart;
				this.value = this.value.substr(0, currentSymbol) + this.value.substr(currentSymbol + 1);
				this.selectionEnd = currentSymbol;
			}
		}
	}
};

TextCounter.init();