const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["flying", "fire"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

    const pokemon_with_id_divisible_by_3 = pokémon.filter(item => item['id'] % 3 == 0)
    const fire_type_pokemon = pokémon.filter(type => type['types'].includes('fire'))
    const pokemon_with_multiple_types = pokémon.filter(item => item['types'].length >= 2)
    const pokemon_names = pokémon.map(item => item['name'])
    const pokemon_names_with_id_greater_than_99 = pokémon.filter(pokemon => pokemon['id'] > 99).map(pokemon => pokemon['name'])
    const pokemon_names_with_only_posion_type = pokémon.filter(pokemon => pokemon["types"] == "poison").map(pokemon => pokemon['name'])
    const other_type_of_pokemon_with_flying_type = pokémon.filter(pokemon => pokemon["types"].includes('flying')).map(item => item['types'].filter(item => item != "flying"))
    const number_of_normal_pokemon = pokémon.filter(pokemon => pokemon['types'].includes("normal")).length
    console.log()
    