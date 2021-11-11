/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function addListNode(val, targetList) {
  if (!targetList) {
    return new ListNode(val);
  } else {
    targetList.next = new ListNode(val);
    return targetList;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let resultList = null;
  let resultListHead = null;
  let carry = 0;

  while (l1 || l2) {
    const val1 = l1 && l1.val ? l1.val : 0;
    const val2 = l2 && l2.val ? l2.val : 0;

    let currentResult = val1 + val2 + carry;

    if (currentResult > 9) {
      currentResult = currentResult % 10;
      carry = 1;
    } else {
      carry = 0;
    }

    const newNode = new ListNode(currentResult);

    if (!resultList) {
      resultList = newNode;
      resultListHead = resultList;
    } else {
      resultListHead.next = newNode;
      resultListHead = resultListHead.next;
    }

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  if (carry > 0) {
    resultListHead.next = new ListNode(carry);
  }

  return resultList;
};

/** TEST PART: */
function buildList(numArray) {
  let list = null;
  let head = list;

  numArray.forEach((val) => {
    if (!list) {
      list = new ListNode(val);
      head = list;

      return;
    }

    if (!head.next) {
      head.next = new ListNode(val);
      head = head.next;
    } else {
      head = head.next;
    }
  });

  return list;
}

// TEST 1:
// 2->4->3
const l1 = buildList([2, 4, 3]);

// 5->6->4
const l2 = buildList([5, 6, 4]);

// expect 7 -> 0 -> 8
const case1 = addTwoNumbers(l1, l2);
console.log({ case1 });

// TEST 2
const l3 = buildList([9, 9, 9, 9, 9, 9, 9]);
const l4 = buildList([9, 9, 9, 9]);

// expect 8->9->9->9->0->0->0->1
const case2 = addTwoNumbers(l3, l4);
console.log({ case2 });

// TEST 3
const case3 = addTwoNumbers(buildList([0]), buildList([0]));
console.log({ case3 });
