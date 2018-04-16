// basic implementation of Stack Data Structure
function Stack() {
  items = [];

  this.push = element => {
    items.push(element);
  };

  this.pop = () => {
    return items.pop();
  };

  this.peek = () => {
    return items[items.length - 1];
  };

  this.isEmpty = () => {
    return items.length === 0;
  };

  this.size = () => {
    return items.length;
  };

  this.clear = () => {
    items = [];
  };

  this.print = () => {
    console.log(items.toString());
  };
}

/*
//tests
let stack = new Stack()
console.log(stack.isEmpty())
stack.push('onin')
stack.push('bot')
stack.push('test')
console.log(stack.size())
stack.pop()
console.log(stack.size())
stack.print()
console.log(stack.peek())
stack.clear()
console.log(stack.size())
*/
