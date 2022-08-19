onEvent('recipes', event => {
    // 活木机壳
    event.recipes.create.item_application('kubejs:livingwood_casing', ['botania:livingwood', 'kubejs:livingrock_ingot']);
    // 梦之木机壳
    event.recipes.create.item_application('kubejs:dreamwood_casing', ['botania:dreamwood', 'kubejs:livingrock_ingot']);
    // 黄金透镜 (空)
    event.shaped('kubejs:gold_lens', [' a ', 'aba', ' a '], { a: '#forge:ingots/gold', b: '#forge:glass_panes' });
    // 魔力透镜 (空)
    event.shaped('kubejs:manasteel_lens', [' a ', 'aba', ' a '], { a: '#forge:ingots/manasteel', b: '#forge:glass_panes' });
    // 魔力透镜
    event.remove({ output: 'botania:lens_normal' });
    event.recipes.botania.mana_infusion('botania:lens_normal', 'kubejs:manasteel_lens');
    // 源质透镜 (空)
    event.recipes.botania.elven_trade(['kubejs:elementium_lens'], 'kubejs:manasteel_lens');
    // 活石锭
    event.stonecutting('kubejs:livingrock_ingot', 'botania:livingrock');
    // 活石石砖
    event.shaped('4x botania:livingrock_bricks', ['aa', 'aa'], { a: 'kubejs:livingrock_ingot' });
    // 魔力分配器
    event.remove({ output: 'botania:mana_distributor' });
    event.shaped('botania:mana_distributor', ['   ', 'aba'], { a: 'kubejs:manasteel_lens', b: 'kubejs:livingwood_casing' });
    // 微光发射器
    event.remove({ output: 'botania:light_launcher' });
    event.shaped('botania:light_launcher', [' a', ' b'], { a: 'botania:light_relay', b: 'kubejs:dreamwood_casing' });
    // 魔力之星
    event.recipes.botania.mana_infusion('kubejs:mana_star', 'minecraft:nether_star');
    // 符文祭坛
    event.remove({ output: 'botania:runic_altar' });
    event.shaped('botania:runic_altar', [' a', ' b'], { a: 'kubejs:mana_star', b: 'kubejs:livingwood_casing' });
    // 魔力发射器
    event.remove({ output: 'botania:mana_spreader' });
    event.shaped('botania:mana_spreader', ['   ', 'abc'], { a: 'kubejs:gold_lens', b: 'kubejs:livingwood_casing', c: '#botania:petals' });
    // 魔力发射器 (红石)
    event.remove({ output: 'botania:redstone_spreader' });
    event.recipes.create.item_application('botania:redstone_spreader', ['botania:mana_spreader', 'botania:redstone_root']);
    // 精灵魔力发射器
    event.remove({ output: 'botania:elven_spreader' });
    event.shaped('botania:elven_spreader', ['   ', 'abc'], { a: 'kubejs:elementium_lens', b: 'kubejs:dreamwood_casing', c: '#botania:petals' });
    // 盖亚魔力发射器
    event.remove({ output: 'botania:gaia_spreader' });
    event.recipes.create.item_application('botania:gaia_spreader', ['botania:elven_spreader', 'botania:gaia_ingot']);
});