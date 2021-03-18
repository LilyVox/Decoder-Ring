# Decoder-Ring
A set of three cipher algorithms I wrote using a test driven development process and displayed on a web page using bootstrap. The goal was DRY, performant and readable code.

## The challenge: 
The difficulties in this project came from writing the cipher algorithms from scratch, which I had no practice with before this. Further difficulties arose in debugging, especially input sanitization and output normalization. Each cipher had to ignore capitals, maintain spaces and even maintain symbols across conversion.

### Caesar Cipher
The Caesar cipher was hard to figure out. First we used unicode values to have a the value for each letter we could shift, but in the end I abandoned that approach in favor of a simpler method which used an alphabet like a lookup table and kept the output in intended bounds with modulo 26.

### The Polybius Cipher
Figuring out this cipher required learning things they didn't teach us yet; the solutions around me involved regular expressions to sanitize the input but that wasn't enough. However my solution checks our cipher for a letter, if it's there we encode it and if it's not I sent it back out. To handle decoding I took 2 digit substrings, not reading spaces, and used the same helper function to handle decoding as encoding by checking the type of input, numbers decode and letters encode. 

### Substitution Cipher
This is where the rest of the ciphers clicked for me. There were several approaches we tried for this, but in the end my solution takes in the de/encoding alphabet and creates an object whose keys have values equal to the en/decoding alphabet or vice versa. My solution could theoretically work with any two alphabets, but that was out of our scope to implement. 

## TakeAways
The genius, or hubris, of the solutions I wrote is that they have the same body text for encoding and decoding, handling encoding as "inverse decoding" most of the time which made decoding very easy. Things that helped me write it were like "return early and often" helped debugging, logging the data to console as I'm typing it up helped visualize the flow of the code. 
