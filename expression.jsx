//psuedo effect controls 
var x = Math.round(effect("Caesar Cipher")("Frames Per Iteration"));
const sourceText = String(effect("Caesar Cipher")("Source Text"));
var skipOG = effect("Caesar Cipher")("Skip Original Text");
var isRandom = effect("Caesar Cipher")("Randomized Offset");

//initialize internal variables
const fps = 1/(thisComp.frameDuration*x); //x-modified fps
var i; //increment 
var output = ""; // 'finished' text 
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//determine offset
if (isRandom==true) i = Math.round(random(1,25));
else i = timeToFrames(time,fps)%26;

if (i == 0 && skipOG == true) i = 1; //skip offset of 0 (original text)

//generate encoded text
for (const char of sourceText) {
	temp = char;
    if (letters.includes(char)) {
        temp = temp.charCodeAt(0); //convert to int (unicode code)
		//keep uppercase letters from going out of bounds
		if (temp <= 90 && temp+i > 90) temp = 65+(temp+i-91); //if temp is uppercase and temp will go out of bounds, start at A
		//keep lowercase letters from going out of bounds
		else if (temp + i > 122) temp = 97+(temp+i-123); //temp is lowercase; if it will leave bounds, start at a
        //if not going out of bounds, just add normally
		else temp += i;
        temp = String.fromCharCode(temp); //convert back to a character
    }
    output += temp;
}
output;