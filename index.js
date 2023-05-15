class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return currentNode;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.nextNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    if (previousNode) {
      previousNode.nextNode = null;
      this.tail = previousNode;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;

    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentIndex;
      }

      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return null;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
    } else if (index === this.length) {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    } else {
      const previousNode = this.at(index - 1);
      newNode.nextNode = previousNode.nextNode;
      previousNode.nextNode = newNode;
    }

    this.length++;
  }
  removeAt(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let removedNode = null;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.nextNode;
      if (this.length === 1) {
        this.tail = null;
      }
    } else if (index === this.length - 1) {
      removedNode = this.tail;
      const previousNode = this.at(index - 1);
      previousNode.nextNode = null;
      this.tail = previousNode;
    } else {
      const previousNode = this.at(index - 1);
      removedNode = previousNode.nextNode;
      previousNode.nextNode = removedNode.nextNode;
    }

    this.length--;

    return removedNode.value;
  }

  toString() {
    let currentNode = this.head;
    let str = '';

    while (currentNode) {
      str += `(${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
    }

    str += 'null';
    return str;
  }
}

const list = new LinkedList();

//Append Nodes
list.append(3);
list.append(5);
list.append(7);

console.log("Linked List After Append Nodes( 3,5,7): ", list.toString());
console.log("Size After Append: ", list.size());

//Prepend Nodes
list.prepend(9);
list.prepend(11);

console.log("Linked List After Prepend Nodes(9,11): ", list.toString());
console.log("Size After Prepend: ", list.size());
console.log("Value at Index 1 after Prepend Node:", list.at(1).value);

//Remove Node by Index Number
list.removeAt(1);

console.log("Linked List After removing Node (9) at Index 1: ", list.toString());
console.log("List Size after Removing Node : ", list.size());
console.log("value at Index 1 after Removing Node:", list.at(1).value);

//Insert Nodes
list.insertAt(4, 1);
list.insertAt(6, 3);

console.log("Linked List after inserting two Nodes (4,6) at index 1 & 3: ", list.toString());
console.log("List Size after inserting Node:", list.size());
console.log("Value at Index 1 after inserting Nodes: ", list.at(1).value);

// Pop the linked List means removing Last Node
console.log("Linked List before pop: ", list.toString());
list.pop();
console.log("Linked List after pop: ", list.toString());

//other functionalities
console.log("List contain value of 4: ", list.contains(4));
console.log("Tail Value (Last Node): ", list.tail.value);
console.log("Head Value: (First Node): ", list.head.value);
console.log("Find Value of 2 at the Index of: ", list.find(2));
console.log("Find Value of 5 at the Index of: ", list.find(5));
console.log("Linked List in String Format: ", list.toString());


console.log("\n\n Best of Luck , Pakistan \n\n");

