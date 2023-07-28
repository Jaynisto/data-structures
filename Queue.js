function Queue() {
	const queue = [];

	function enqueue(value) {
		queue.push(value);
	}

	function dequeue() {
		return queue.shift();
	}

	function pop() {
        return undefined;
    }

	return{
		enqueue,
		dequeue,
		pop
	}
}