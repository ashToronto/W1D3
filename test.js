// The string
var str = "abcabc abc";



// A map (in JavaScript, an object) for the character=>count mappings
var counts = {};

// Misc vars
var ch, index, len, count;

// Loop through the string...
for (index = 0, len = str.length; index < len; ++index) {
    // Get this character
    ch = str.charAt(index); // Not all engines support [] on strings

    // Get the count for it, if we have one; we'll get `undefined` if we
    // don't know this character yet
    count = counts[ch];

    // If we have one, store that count plus one; if not, store one
    // We can rely on `count` being falsey if we haven't seen it before,
    // because we never store falsey numbers in the `counts` object.
    counts[ch] = count ? count + 1 : 1;
}
for (ch in counts){
  console.log(ch + ":" + counts(ch));
}

