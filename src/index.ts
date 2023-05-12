// import { add } from './utilits/add';
// import multiply, {  substract, add as adtwo} from "./sunstract";

import method   from "./utilits/main";

// import { multiply } from "./utilits/multiply";
// import { substract } from "./utilits/substract";
// import { add as addNumber } from "./utilits/add";
 
// import * as method from "./sunstract";
const add =(param1 : number , param2  : number) : number =>{
   return param1 + param2    
}
const result = add(5,6);
console.log(result);
console.log(method.substract(4,6));
console.log(method.add(5,5));
console.log(method.multiply(5,5));