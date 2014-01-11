/* --------------------------------------------------------------


@author Alexander Hansson
@version 0.1

Just put the id "text" where you want to count the time it takes to read that piece of text.
Calculated on that an adult reads 200 words per minute.

        
-------------------------------------------------------------- */

(function() {

    var el = document.getElementById("text");
    count(el);

})();


function count(el) {

        var text = el.innerText || el.textContent;

        var ord = text.split(' ').length;
        var wordMin = ((ord/200)*60);
        var wordInt = parseInt(wordMin);
        var wordDec = wordInt.toFixed(0);

        var seconds = Math.floor(wordDec),
        hours = Math.floor(seconds / 3600);
    	seconds -= hours*3600;
    	var minutes = Math.floor(seconds / 60);
    	seconds -= minutes*60;

    	if (hours < 10) {
    		hours = "0"+hours;
    	}

    	if (minutes < 10) {
    		minutes = "0"+minutes;
    	}
    	
    	if (seconds < 10) {
    		seconds = "0"+seconds;
    	}

        alert("Reading time: " + minutes + ':' + seconds);

}




