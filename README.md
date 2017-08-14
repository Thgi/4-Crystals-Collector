# 4-Crystals-Collector

This website is used to show how to separate your CSS and Javascript into separate files instead of having it embeded into 1 HTML.

The website is a game that generates a random number on the screen. The player is given 4 different crystals which also has a random number generated for each crystal. However, the user doesn't know what each crystal's random number is. The user must use the combination of crystals to create a total that matches the random number number. If the user matches the number, then they win the game. Otherwise they lose. The wins and losses counter increases based on whether you win or lose the game.

The site is also an example of how to use jQuery. jQuery allows you to quickly access parts and write less code. You can recognize the use of jQuery by the use of the $.

Here is an example of the jQuery vs using vanilla Javascript

jQuery:
$( "button.continue" ).html( "Next Step..." )

JavaScript
document.getElementById("txt").innerHTML

In order to use jQuery in your Javascript, you need to use the following code in the head of your HTML:
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
