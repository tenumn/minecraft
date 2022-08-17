onEvent('recipes', event => {
    // 活石机壳
    event.recipes.create.item_application('kubejs:livingrock_casing', ['botania:livingwood_log', 'kubejs:livingrock_ingot']);

    // 黄金透镜
    event.shaped('kubejs:lens_gold', [' a ', 'aba', ' a '], { a: '#forge:ingots/gold', b: '#forge:glass_panes' });

    // 魔力透镜
    event.remove({ output: 'botania:lens_normal' });
    event.shaped('botania:lens_normal', [' a ', 'aba', ' a '], { a: '#forge:ingots/manasteel', b: 'kubejs:lens_gold' });

    // 源质透镜
    event.recipes.botania.elven_trade(['kubejs:lens_elementium'], 'botania:lens_normal');

    // 魔力发射器
    event.remove({ output: 'botania:mana_spreader' });
    event.shaped('botania:mana_spreader', ['   ', 'abc', '   '], { a: 'kubejs:lens_gold', b: 'kubejs:livingrock_casing', c: '#botania:petals' });

    // 活石锭
    event.stonecutting('kubejs:livingrock_ingot', 'botania:livingrock');
});

onEvent('tags.items', event => {
    // 透镜
    event.add('#botania:lens', ['kubejs:lens_elementium', 'kubejs:lens_gold']);
});