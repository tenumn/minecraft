onEvent('item.registry', event => {
	event.create('gold_coin').displayName('金币');
	event.create('silver_coin').displayName('银币');
	event.create('copper_coin').displayName('铜币');
});

onEvent('block.registry', event => {
	event.create('livingrock_casing').material('wood').hardness(1.0).displayName('活石机壳');
});