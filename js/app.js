/*var MAX_TEXTAREA_COUNT = 140;
document.querySelector('#js-message').addEventListener('keyup', count);
document.querySelector('#js-message').addEventListener( 'keypress', maxLength);

/**
 * TextCounter
 */
var TextCounter = {
    maxChar: 140,
    textArea: null,
    textAreaTotal: null,
    textAreaLeft: null,
    init: function() {
        this.textArea = document.querySelector('#js-message');
        this.textAreaTotal = document.querySelector('#js-message-left-total');
        this.textAreaLeft = document.querySelector('#js-message-left-symbols');
        this.textArea.addEventListener('keypress', this.maxLength);
        this.textArea.addEventListener('keyup', this.count);
    },
    maxLength: function(evt) {
		if (this.value.length == TextCounter.maxChar) {
			evt.preventDefault();
			this.classList.add('uncorrect');
		}
	},
	count: function(evt) {
		var counter = this.value.length;
		TextCounter.textAreaTotal.innerHTML = counter;
		TextCounter.textAreaLeft.textContent = TextCounter.maxChar - counter;
	},
	
};

TextCounter.init();
//TextCounter.textArea.addEventListener( 'keypress', TextCounter.maxLength);