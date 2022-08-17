onEvent('item.registry', event => {
	event.create('gold_lens').displayName('黄金透镜 (空)');
	event.create('manasteel_lens').displayName('魔力透镜 (空)');
	event.create('elementium_lens').displayName('源质透镜 (空)');

	event.create('livingrock_ingot').displayName('活石锭');
});

onEvent('block.registry', event => {
	event.create('livingwood_casing').material('wood').hardness(1.0).displayName('活木机壳');
	event.create('dreamwood_casing').material('wood').hardness(1.0).displayName('梦之木机壳');
});