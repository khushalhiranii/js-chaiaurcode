console.log("1"+2+2)
console.log(2+2+"1");
console.log(2+"1"+2);

console.log( null > 0)
console.log( null == 0 );
console.log( null >= 0 );
// The reason is that an equality check == and comparisons >,<,>=,<= work differently
// comparison converts null to number i.e. in line umber 7 null=0, therefore null>=0 => true
//  we avoid these type of conversions and this is same with "undefined" also


console.log("2" == 2); // does not check datatype
console.log("2" === 2); // checks datatype also