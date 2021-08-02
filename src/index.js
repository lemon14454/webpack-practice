import "./index.css";

class Test {
  #a = 100;
}

const test = new Test();

console.log("test:", test.a);

if (PRODUCTION) {
  console.log("this project is in production");
} else {
  console.log("this project is in development");
}
