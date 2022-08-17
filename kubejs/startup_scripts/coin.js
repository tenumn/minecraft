onEvent('item.registry', event => {
	event.create('gold_coin').displayName('金币');
	event.create('silver_coin').displayName('银币');
	event.create('copper_coin').displayName('铜币');
});