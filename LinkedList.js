function LinkedList() {
    let startNode = null;
    let lastNode = null;

    function add(value) {
        const newNode = {
            value: value,
            next: null,
        };

        if (!startNode) {
            startNode = newNode;
            lastNode = newNode;
        } else {
            lastNode.next = newNode;
            lastNode = newNode;
        }
    }

    function count() {
        let currentNode = startNode;
        let count = 0;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }

    function clear() {
        startNode = null;
        lastNode = null;
    }

    function contains(value) {
        let currentNode = startNode;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    function forEach(fn) {
        let currentNode = startNode;
        while (currentNode) {
            fn(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    function first() {
        return startNode ? startNode.value : null;
    }

    function last() {
        return lastNode ? lastNode.value : null;
    }

    return {
        add,
        clear,
        contains,
        count,
        first,
        last,
        forEach,
    };
}
