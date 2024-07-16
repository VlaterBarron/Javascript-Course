let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    document.getElementById("inputText").value = testText;
    document.getElementById("output").innerHTML = "";
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").readOnly = false;
    startTime = new Date().getTime();

    var button = document.getElementById("btn");
    button.innerHTML = "End test";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();
    document.getElementById("userInput").readOnly = true;

    var timeElapsed = (endTime - startTime) / 1000;
    var userTypedText = document.getElementById("userInput").value;

    var typedWords = userTypedText.split(/\s+/).filter(word => word !== "").length;
    var wpm = 0;

    if(timeElapsed !== 0 && !isNaN(typedWords)) wpm = Math.round(typedWords*60/timeElapsed);

    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing test results:</h2>" + 
    "<p>Words Typed: " + typedWords + "</p>" +
    "<p>Time Elapsed " + timeElapsed.toFixed(2) + " seconds</p>" +
    "<p>Words per minute (WPM) " + wpm  + "</p>";

    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
} 