//program to find the sqrt of the quadratic eqn;
/*
get coficient of the quaderatic eqn;
ex- ax^2-bx+c is our quadratic eqn ;
and its cofficients are a,b,c;
deteminant of the eqn is => b^2-4ac;
determinant is >0 roots are real => root = -b+-sqrt(determinant)/2a
determiant is = 0  root1 = root2 => -b/2a;
determinant is < 0 roots are => -b+-sqrt(-determinatei)/2a
*/
//var a,b,c,determinante,realpath,imaginarypath,root1,root2;
var a = 1;
var b = 4;
var c = 4;
var determinante = b*b-4*a*c ;
if (determinante > 0)
{
	//Math.sqrt is used for square root.
	
    var root1= -b+Math.sqrt(determinante)/(2*a);
    var root2= -b-Math.sqrt(determinante)/(2*a);
    console.log("root1:"+ root1 + "root2:"+ root2);
}
if (determinante = 0) 
{
    var root1 = root2 = -b/2*a;
    console.log("root1:" + root1+"root2:"+root2);
}
else
{
    var realpath = -b/2*a;
    var imaginarypath = Math.sqrt(-determinante)/2*a;
    console.log("root1:" +realpath+imaginarypath+" "+"  root2:"+realpath-imaginarypath+" ");
}
