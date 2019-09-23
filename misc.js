
/**
 * Ternary operator vs if operator
 */
let a = (z ? x : y)

// is same as
let a;
if(z)
{
    a = x;
}
else
{
    a = y;
}


/**
 * Array spacing example
 */
var derArray = ['hello','world','how\'re','doing'];
var derArray = ['hello', 'world', 'how\'re', 'doing'];


/**
 * Control structure
 */
if (condition1 || condition2) {
    action1();
}
else if (condition3 && condition4) {
    action2();
}
else {
    defaultAction();
}


// vs
if(condition1 || condition2) {
    action1();
}
else if(condition3 && condition4) {
    action2();
}
else{
    defaultAction();
}

/**
 * Control structures combined
 */
if(a == true && b == false)
{
    //...
}

// vs
if((a == true) && (b == false))
{
    //...
}



/**
 * Indentation
 */
var series = [
{
name: 'One',
    data:[]
  }, { name: 'Two',
      data: []    }, {
name: 'Three',
data: []}];
  function demo(input)
       {
input[0].name='Blah';
   input.push({name: 'new',
  data:   [
2,
        5,10]
}   )
} demo(series);
        console.log(series);



// vs
var series = [{
    name: 'One',
    data: []
}, {
    name: 'Two',
    data: []
}, {
    name: 'Three',
    data: []
}];

function demo(input) {
    input[0].name = 'Blah';
    input.push({
        name: 'new',
        data: [
            2, 5, 10
        ]
    })
}

demo(series);
console.log(series);

