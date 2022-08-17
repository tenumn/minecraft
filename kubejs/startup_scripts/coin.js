onEvent('item.registry', event => {
	/**value: 100 */
	event.create('gold_coin').displayName('金币');
	/**value: 10 */
	event.create('silver_coin').displayName('银币');
	/**value: 1 */
	event.create('copper_coin').displayName('铜币');
});