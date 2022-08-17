onEvent('item.registry', event => {
	event.create('lens_gold').displayName('黄金透镜');
	event.create('lens_elementium').displayName('源质透镜');
	event.create('livingrock_ingot').displayName('活石锭');
});

onEvent('block.registry', event => {
	event.create('livingrock_casing').material('wood').hardness(1.0).displayName('活石机壳');
});