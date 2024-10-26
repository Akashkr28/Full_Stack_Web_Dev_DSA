/*Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory. */

var reverseString = function(s) {
    let n = s.length;
    let i = 0;
    let j = n-1;
    while( i <= j) {
        // swapping the values
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;

        // move to the next position
        i++;
        j--
    }
};