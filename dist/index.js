// import multiply, {  substract, add as adtwo} from "./sunstract";
import { multiply } from "./utilits/multiply";
import { substract } from "./utilits/substract";
import { add as addNumber } from "./utilits/add";
// import * as method from "./sunstract";
const add = (param1, param2) => {
    return param1 + param2;
};
const result = add(5, 6);
console.log(result);
console.log(substract(4, 6));
console.log(addNumber(5, 5));
console.log(multiply(5, 5));
