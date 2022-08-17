onEvent('recipes', event => {
    event.recipes.create.item_application('kubejs:livingwood_casing', ['botania:livingwood', 'kubejs:livingrock_ingot']);
    event.recipes.create.item_application('kubejs:dreamwood_casing', ['botania:dreamwood', 'kubejs:livingrock_ingot']);

    event.shaped('kubejs:gold_lens', [' a ', 'aba', ' a '], { a: '#forge:ingots/gold', b: '#forge:glass_panes' });
    event.shaped('kubejs:manasteel_lens', [' a ', 'aba', ' a '], { a: '#forge:ingots/manasteel', b: '#forge:glass_panes' });
    event.remove({ output: 'botania:lens_normal' });
    event.recipes.botania.mana_infusion('botania:lens_normal','kubejs:manasteel_lens');
    event.recipes.botania.elven_trade(['kubejs:elementium_lens'], 'kubejs:manasteel_lens');

    event.remove({ output: 'botania:mana_spreader' });
    event.shaped('botania:mana_spreader', ['   ', 'abc', '   '], { a: 'kubejs:gold_lens', b: 'kubejs:livingwood_casing', c: '#botania:petals' });
    event.remove({ output: 'botania:redstone_spreader' });
    event.recipes.create.item_application('botania:redstone_spreader', ['botania:mana_spreader', 'minecraft:redstone_block']);
    event.remove({ output: 'botania:elven_spreader' });
    event.shaped('botania:elven_spreader', ['   ', 'abc', '   '], { a: 'kubejs:elementium_lens', b: 'kubejs:dreamwood_casing', c: '#botania:petals' });

    event.stonecutting('kubejs:livingrock_ingot', 'botania:livingrock');
});