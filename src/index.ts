// import World from "./world";
// const root = document.getElementById('root')
// const world = new World("Hello World!");
// world.sayHello(root)




//04.関数の方ていぎ
import { logMessage } from "./function/basic";
import { isUserSignedIn, isUserSignedIn2,sumPrice } from "./function/parameters"
logMessage("Hello , WOlrd!")
isUserSignedIn("ABC","Torahack")
isUserSignedIn("DEF")
isUserSignedIn2("ABC")
isUserSignedIn2("DEF")
const sum = sumPrice(1,1000,45,5,40)
console.log("func sample 5:",sum)
