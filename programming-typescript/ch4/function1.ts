// 5 ways to declare a function
function greet1(name: string) {
  return "hello " + name;
}

// the most shocking:
const greet5 = new Function("name", 'return "hello " + name');

const theName = "phil";
console.log(greet1(theName));
console.log(greet5(theName));

interface Context {
  appId?: string;
  userId?: string;
}

function log(
  message: string,
  context: Context = {
    appId: "",
    userId: "",
  }
) {
  const time = new Date().toLocaleTimeString();
  console.log(time, message, context.userId);
}

function anotherLog({ appId = "pew", userId = "pa" }: Context) {
  console.log(appId, userId);
}

anotherLog({appId: 'my app id', userId: 'my user id'})
anotherLog({})