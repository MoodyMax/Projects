//ES5 Globals Constant
var PI = 3.14;
PI = 42; // stop me from doing this!

//ES2015 Global Constant
const PI = 3.14159;

//1: var can be redeclared while let cannot. var also has function scope rules while let has block scope rules
//2: var can be redeclared while const cannot. var also has function scope rules while const has block scope rules
//3: unlike let, const cannpt be reassigned to another value
//4: It explains the intricacies of the js compiler in refresnse to how it acts when each keyword is used
