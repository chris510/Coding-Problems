// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

class ListNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.dummy = this.tail = new ListNode();
    this.nodes = new Map();
    this.capacity = capacity;
  }
  
  remove(key) {
    const node = this.nodes.get(key);
    if (!node) return;
    
    node.prev.next = node.next;
    
    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
    
    this.nodes.delete(key);
  }
  
  get(key) {
    if (this.nodes.has(key)) {
      this.put(key, this.nodes.get(key).val);
      return this.tail.val;
    }
    return -1;
  }
  
  put(key, val) {
    this.remove(key);
    if (this.nodes.size === this.capacity) this.remove(this.dummy.next.key);
    
    const oldTail = this.tail;
    this.tail = oldTail.next = new ListNode(key, val);
    this.tail.prev = oldTail;
    this.nodes.set(key, this.tail);
  }
}

// Time Complexity: O(1) since we have access through hashmap and remove/delete from linekdlist;
// Space Complexity: O(c) where the max items in the LRU cached is the capacity that is given.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4