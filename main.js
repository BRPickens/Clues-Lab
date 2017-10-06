var myFriends = ['Lovelight', 'Jeff', 'Daniel', 'Tyffani', 'Erica']
var weaponName = ['Baseball', 'Letter Opener', 'Spoon', 'Cabbage Patch Kids doll', 'Syrup', 'Decorative Pillow', 'Freddy Krueger doll', 'Care Bear Stare (Dont Ask)', 'Lego on the floor', 'Tyler\'s sense of humor', 'Hadouken', 'Banana Gun', 'Angel Arm', 'Burning Finger', 'Spirit Ball', 'Giga Drill Break', 'Falcon Punch', 'Getsuga Tenshou', 'Senbonzakura', 'Death Note'];
var locationsName = ['Gotham donut shop', 'Innovate Depot Room E126', 'bathroom', 'kitchen', 'living room', 'Care-a-Lot', 'Elm Street', 'Namek', 'Kame House', 'Hueco Mundo']
var accusedHeading;

$(document).ready(function () {
    for (i = 1; i <=100; i++) {
        var element = {
            friend: myFriends[Math.floor((Math.random() * myFriends.length) + 0)],
            weapons: weaponName[Math.floor((Math.random() * weaponName) + 0)],
            locations: locationsName[Math.floor((Math.random() * locationsName) + 0)]
        }
        accusedHeading
        }
    })





// * When the page first loads, insert 100 h3 elements onto the page
// * The h3 elements should simply say Accusation 1, Accusation 2, Accusation 3, ... Accusation 100
// * Clicking on an h3 element should display an alert that says a statement in the following format:
// ```
// Accusation i: I accuse FRIEND_NAME, with the WEAPON_NAME in the LOCATION_NAME!
// ex: Accusation 7: I accuse Jane, with the paper clip in the copy room!
// ```
// * You need an array of 5 friend names
// * You need an array of 10 location names
// * You need an array of 20 weapon/object names (feel free to be silly/absurd)
// * You will use the value of i in the loop to determine which of the above array items to use
// * Make sure you only select valid array indexes
// * Modulus is your friend
// * ex: 10 mod 10 is 0, 11 mod 10 is 1, 12 mod 10 is 2, ...
// * You only need to use one loop for this assignment