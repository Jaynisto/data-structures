function Stack() {
	let lastContainer = null;
	function push (value) {
		if(!lastContainer){
			lastContainer = Node(value, null)
		}else{
			const newNode = Node(value, null)
			newNode.setNextNode(lastContainer);
			lastContainer = newNode;
		}

	}

	function pop() {
		if(lastContainer){
			const value = lastContainer.getValue()
			lastContainer = lastContainer.getNextNode()
			return value;
		}
		return null;

	}

	return {
		push,
		pop
	}
}