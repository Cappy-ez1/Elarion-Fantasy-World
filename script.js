const codexData = {
    greenwood: {
        name: "Eternal Greenwood", nation: "Independent / The Root Council", region: "The Primordial Heartlands", pop: "approx. 140,000", gov: "Circle of Elder Druids", spec: "Sylvari, Faerie, Treant", exp: "Bioluminescent Dyes, Living Wood, Soul-Elixirs",
        heroImg: "https://images.unsplash.com/photo-1511497584788-87676104235f?q=80&w=1000&auto=format&fit=crop",
        appearance: "A breathtaking metropolis woven directly into the branches of kilometer-high iron-oaks. Spiral walkways are grown from living roots, lit by hanging clusters of glowing blue moss.",
        species: [
            { name: "Sylvari (Tree-Elves)", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop", desc: "Long-lived humanoids with skin resembling polished birch." },
            { name: "Treant Elders", img: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=300&auto=format&fit=crop", desc: "Massive sentient trees acting as the living libraries." }
        ],
        economy: { res: "Pristine Mana-water, Spirit-bulbs", imp: "Forged steel tools, Salt", part: "Oasis of Zahar, Skyport Aetherhold" },
        landmarks: [{ name: "The World Tree Taproot", img: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=400&auto=format&fit=crop", desc: "The absolute center of Elarion's magical ley-lines." }],
        chars: [{ name: "Archdruidess Vaelin", title: "Speaker of the Wood", species: "Sylvari", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop", desc: "Her voice echoes simultaneously in the minds of all citizens." }],
        culture: "Cutting a live tree is a capital offense punishable by being composted into the root system.", relations: [ { type: "Ally", name: "Skyport Aetherhold" }, { type: "Rival", name: "Diamondreach" } ]
    },
    frostpeak: {
        name: "Frostpeak Citadel", nation: "Frostbound Dominion", region: "The Shardspine Mountains", pop: "85,000", gov: "Martial Engineering Admiralty", spec: "Deep Dwarves, Goliath", exp: "Runesteel, Cryo-Gems, Siege Engines",
        heroImg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
        appearance: "Carved into the sheer face of a frozen peak. Massive basalt pillars support iron-gated levels, while thick pipes spew white geothermal steam over the icy cliffs.",
        species: [{ name: "Deep Dwarves", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop", desc: "Broad, pale, and completely blind to the cold." }],
        economy: { res: "Mithril Ore, Blue Diamond", imp: "Grain, Timber", part: "Skyport Aetherhold, Stormhold" },
        landmarks: [{ name: "The Great Piston", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop", desc: "An impossibly huge steam engine heating the mountain vaults." }],
        chars: [{ name: "Thane Torvald", title: "High Mechanist", species: "Dwarf", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop", desc: "Wears a brass respirator powered by a trapped fire elemental." }],
        culture: "A hyper-industrial society where worth is measured by the durability of what you build.", relations: [ { type: "Ally", name: "Stormhold" }, { type: "Rival", name: "Sunspire" } ]
    },
    skyport: {
        name: "Skyport Aetherhold", nation: "Frostbound Dominion", region: "The High Zephyr Plateaus", pop: "210,000", gov: "The Sky-Merchant Syndicate", spec: "Humans, Halflings, Aether-touched", exp: "Airships, Refined Aether-fuel",
        heroImg: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop",
        appearance: "A multi-tiered floating city suspended over the clouds by four colossal tethering chains of enchanted titanium. Hundreds of zeppelins dock at extending mahogany piers.",
        species: [{ name: "Aether-Touched", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop", desc: "Humans born at high altitudes whose eyes glow with static." }],
        economy: { res: "Raw Cloud-Gas, Static", imp: "Heavy stone, Iron ore", part: "Universal Trade hub" },
        landmarks: [{ name: "The Grand Aerodrome", img: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=400&auto=format&fit=crop", desc: "Capable of hosting 40 sky-galleons at once." }],
        chars: [{ name: "Commodore Silas Vane", title: "Master of the Docks", species: "Human", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop", desc: "A former pirate turned sovereign tax collector." }],
        culture: "Obsessed with punctuality, weather vanes, and high-stakes cloud gambling.", relations: [ { type: "Trade Partner", name: "Eternal Greenwood" }, { type: "Ally", name: "Frostpeak Citadel" } ]
    },
    diamondreach: {
        name: "Diamondreach", nation: "Emberfall Magocracy", region: "The Obsidian Caldera", pop: "95,000", gov: "The Prime Arch-Mages", spec: "High Elves, Fire Genasi", exp: "Enchanted Prisms, Arcane Tomes",
        heroImg: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1000&auto=format&fit=crop",
        appearance: "Slender, asymmetrical towers of pale white crystal jut out of the dark obsidian floor, refracting the orange glow of the slow-churning magma rivers below.",
        species: [{ name: "Fire Genasi", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop", desc: "Humanoids with ashen skin and hair of flickering heat-shimmer." }],
        economy: { res: "Liquid Mana, Basalt", imp: "Quicksilver, Rare herbs", part: "Sunspire" },
        landmarks: [{ name: "The Prism Library", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=400&auto=format&fit=crop", desc: "Composed entirely of data-encoded quartz crystals." }],
        chars: [{ name: "Ignis Lex", title: "Grand Evoker", species: "Fire Genasi", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop", desc: "Author of the Seven Laws of Thermomancy." }],
        culture: "An intensely competitive academic meritocracy where spells are patented corporate property.", relations: [ { type: "Rival", name: "Eternal Greenwood" }, { type: "Ally", name: "The Shard-Forge" } ]
    },
    shardforge: {
        name: "The Shard-Forge", nation: "Emberfall Magocracy", region: "The Basalt Basin", pop: "42,000", gov: "The Overseer Guild", spec: "Earth Genasi, Gnomes, Automata", exp: "Raw Ley-Crystals, Adamantine",
        heroImg: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1000&auto=format&fit=crop",
        appearance: "A heavy, circular fortress dropped directly into a volcanic depression. Massive pink and cyan glowing crystals the size of cathedrals jut out of the earth.",
        species: [{ name: "Warforged Constructs", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop", desc: "Sentient stone laborers built to withstand high crystal radiation." }],
        economy: { res: "Raw Aether-Quartz, Magma", imp: "Cooling Oils, Heavy Iron", part: "Diamondreach" },
        landmarks: [{ name: "The Great Arc-Smelter", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=400&auto=format&fit=crop", desc: "Uses raw lightning channeled from crystals to instantly liquefy titanium." }],
        chars: [{ name: "Master Gneiss", title: "Chief Resonance Officer", species: "Earth Genasi", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop", desc: "A man made entirely of jagged granite who communicates in low hums." }],
        culture: "They handle the heavy fabrication the Arch-Mages of Diamondreach deem beneath them.", relations: [ { type: "Subservient Ally", name: "Diamondreach" }, { type: "Trade Partner", name: "Stormhold" } ]
    },
    roottide: {
        name: "Root-Tide Delta", nation: "Independent", region: "The Southern Silt-Mouth", pop: "31,000", gov: "The Harbormaster's Coalition", spec: "Humans, Otter-Folk, Half-Elves", exp: "River Salmon, Silt-Clay",
        heroImg: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1000&auto=format&fit=crop",
        appearance: "A sprawling network of lashed-together river barges and stilt-houses perched where the Greenwood's freshwater river dumps into the ocean.",
        species: [{ name: "Lutra (River-Folk)", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop", desc: "Sleek, semi-aquatic mammalian traders who navigate treacherous root-currents." }],
        economy: { res: "Freshwater Silt, Driftwood", imp: "Canvas, Tar, Spices", part: "Stormhold, Eternal Greenwood" },
        landmarks: [{ name: "The Great Log-Boom", img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=400&auto=format&fit=crop", desc: "A floating toll gate catching valuable timber drifting down from the deep forest." }],
        chars: [{ name: "Captain 'Slippery' Jack", title: "High Toll-Keeper", species: "Half-Elf", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop", desc: "Has never paid a genuine tariff in thirty years on the river." }],
        culture: "The absolute masters of the grey market. If an item left the Greenwood, it passed through here.", relations: [ { type: "Neutral", name: "Eternal Greenwood" }, { type: "Trade Partner", name: "Stormhold" } ]
    },
    sunspire: {
        name: "Sunspire", nation: "Golden Dunes Confederacy", region: "The Scorched Wastes", pop: "320,000", gov: "The Solar Oligarchy", spec: "Humans, Leonin", exp: "Solar Glass, Gold Bullion",
        heroImg: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop",
        appearance: "A blindingly golden desert megalopolis. At its center sits a 900-meter needle of solid polished brass casting a massive cooling magical shade.",
        species: [{ name: "Leonin", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop", desc: "Proud, golden-furred feline humanoids serving as the Sun-Guard." }],
        economy: { res: "Deep Subterranean Aquifers, Sand-Gold", imp: "Heavy Armor, Hardwoods", part: "Diamondreach, Oasis of Zahar" },
        landmarks: [{ name: "The Great Sundial Plaza", img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=400&auto=format&fit=crop", desc: "The shadow dictates the market price of gold minute-by-minute." }],
        chars: [{ name: "Solarch Malek", title: "The Golden Hand", species: "Human", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop", desc: "Holds the surrounding desert tribes in absolute financial thrall." }],
        culture: "To be poor in Sunspire is viewed as a moral failing of spiritual laziness.", relations: [ { type: "Ally", name: "Oasis of Zahar" }, { type: "Rival", name: "Frostpeak Citadel" } ]
    },
    zahar: {
        name: "Oasis of Zahar", nation: "Golden Dunes Confederacy", region: "The Shifting Sea of Sand", pop: "190,000", gov: "The Grand Bazaar Directorate", spec: "Djinn-blooded, Tabaxi", exp: "Enchanted Water, Silk Carpets",
        heroImg: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1000&auto=format&fit=crop",
        appearance: "A wildly vibrant tent-city blooming around an impossible lake of crystal-blue freshwater in the dead center of the deep desert.",
        species: [{ name: "Djinn-Blooded", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop", desc: "Mortals carrying the heritage of wish-granters." }],
        economy: { res: "Ever-Flowing Oasis Water", imp: "Mercenaries, Ice", part: "All Nations (Neutral Zone)" },
        landmarks: [{ name: "The Mirror Lake", img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=400&auto=format&fit=crop", desc: "Reveals the drinker's darkest secret to anyone on the shore." }],
        chars: [{ name: "Kadir Al-Zahar", title: "Master of Scales", species: "Djinn-blood", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop", desc: "Claims to have won the Oasis in a game of dice against a god." }],
        culture: "Paying an asking price without haggling is considered an insult to the shopkeeper's honor.", relations: [ { type: "Neutral Free Zone", name: "All Powers" } ]
    },
    stormhold: {
        name: "Stormhold", nation: "Tempest Maritime Union", region: "The Thundering Coast", pop: "165,000", gov: "The Sovereign Fleet Captains", spec: "Sea-Orcs, Triton", exp: "Leviathan Oil, Deep Pearls",
        heroImg: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1000&auto=format&fit=crop",
        appearance: "A brutal, salt-bleached fortress slammed into black sea-cliffs. Giant iron rods catch non-stop bolts from the bay's perpetual monsoon.",
        species: [{ name: "Triton", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop", desc: "Amphibious warriors managing underwater ship-locks." }],
        economy: { res: "Whalebone, Ambergris", imp: "Citrus fruits, High-grade timber", part: "Frostpeak Citadel" },
        landmarks: [{ name: "The Maw-Gate", img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=400&auto=format&fit=crop", desc: "80-foot bronze sea-serpent jaws clamping shut during typhoons." }],
        chars: [{ name: "Admiral Maeve", title: "First of the Fleet", species: "Human", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop", desc: "Replaced her left arm with a heavy titanium boarding hook." }],
        culture: "Criminals are sentenced to row on deep-trench leviathan hunting vessels.", relations: [ { type: "Ally", name: "Frostpeak Citadel" }, { type: "Trade Partner", name: "Root-Tide Delta" } ]
    },
    vestige: {
        name: "Isle of Vestiges", nation: "Unclaimed Territory", region: "The Drowned Reach", pop: "approx. 1,200", gov: "Joint Archeological Expedition", spec: "Scholars, Scavengers", exp: "Pre-Calamity Relics",
        heroImg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
        appearance: "A massive ancient stone ruin jutting out of the open southern ocean. Inside the crumbling pale arches sits a cluster of canvas research tents.",
        species: [{ name: "Drowned Echoes", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop", desc: "Harmless translucent spirits re-enacting chores from 4,000 years ago." }],
        economy: { res: "Unidentified Artifacts", imp: "Canned Rations, Digging Supplies", part: "Skyport Aetherhold" },
        landmarks: [{ name: "The Whispering Monolith", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=400&auto=format&fit=crop", desc: "A smooth black pillar that vibrates when spoken to in forgotten dialects." }],
        chars: [{ name: "Professor Thaddeus", title: "Head Epigrapher", species: "High Elf", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop", desc: "Believes the World Tree is an ancient invasive parasite." }],
        culture: "An obsessive, paranoid camp where researchers fiercely protect their translation notes.", relations: [ { type: "Hostile to", name: "Eternal Greenwood" }, { type: "Funded by", name: "Skyport Syndicate" } ]
    }
}; // <-- Syntax uncorrupted

document.addEventListener("DOMContentLoaded", () => {
    try { lucide.createIcons(); } catch(e){} 
}); // <-- Syntax closed

function openMobileMenu() {
    const modal = document.getElementById('mobile-menu-modal');
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';
} // <-- Syntax closed

function closeMobileMenu() {
    const modal = document.getElementById('mobile-menu-modal');
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
} // <-- Syntax closed

function openCity(key) {
    const data = codexData[key];
    if(!data) return;
    document.getElementById('panel-nation').textContent = data.nation;
    document.getElementById('panel-title').textContent = data.name;
    document.getElementById('panel-hero').src = data.heroImg;
    document.getElementById('q-region').textContent = data.region;
    document.getElementById('q-pop').textContent = data.pop;
    document.getElementById('q-gov').textContent = data.gov;
    document.getElementById('q-spec').textContent = data.spec;
    document.getElementById('q-exp').textContent = data.exp;
    document.getElementById('panel-desc').textContent = `"${data.appearance}"`;
    document.getElementById('eco-res').textContent = data.economy.res;
    document.getElementById('eco-imp').textContent = data.economy.imp;
    document.getElementById('eco-part').textContent = data.economy.part;
    document.getElementById('panel-culture').textContent = data.culture;
    
    const specGrid = document.getElementById('panel-species-grid');
    specGrid.innerHTML = data.species.map(s => `
        <div class="flex gap-4 bg-dark p-3.5 rounded border border-gold/20 items-start">
            <img src="${s.img}" class="w-14 h-14 rounded object-cover flex-shrink-0 gold-border">
            <div>
                <strong class="text-gold font-heading text-sm block">${s.name}</strong>
                <span class="text-gray-300 text-xs leading-snug block mt-1">${s.desc}</span>
            </div>
        </div>
    `).join('');
    
    const landGrid = document.getElementById('panel-landmarks');
    landGrid.innerHTML = data.landmarks.map(l => `
        <div class="group relative overflow-hidden rounded gold-border h-36 bg-dark">
            <img src="${l.img}" class="w-full h-full object-cover transition duration-300 group-hover:scale-105 filter brightness-75">
            <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-4 flex flex-col justify-end">
                <span class="text-gold font-heading font-black text-sm">${l.name}</span>
                <span class="text-gray-200 text-xs mt-0.5 line-clamp-2">${l.desc}</span>
            </div>
        </div>
    `).join('');
    
    const charBox = document.getElementById('panel-characters');
    charBox.innerHTML = data.chars.map(c => `
        <div class="flex gap-4 bg-codexLighter p-4 rounded gold-border items-center">
            <img src="${c.img}" class="w-16 h-16 rounded-full object-cover gold-border flex-shrink-0 shadow-md">
            <div class="flex-1">
                <div class="flex justify-between items-baseline">
                    <h4 class="text-parchment font-heading font-black text-base">${c.name}</h4>
                    <span class="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded border border-gold/30">${c.species}</span>
                </div>
                <span class="text-goldDim italic block text-xs mb-1.5">${c.title}</span>
                <p class="text-gray-200 text-xs sm:text-sm leading-relaxed">${c.desc}</p>
            </div>
        </div>
    `).join('');
    
    const relBox = document.getElementById('panel-relations');
    relBox.innerHTML = data.relations.map(r => {
        let badgeCol = "border-blue-500/40 bg-blue-500/10 text-blue-300";
        if(r.type.includes('Ally')) badgeCol = "border-emerald-500/40 bg-emerald-500/10 text-emerald-300";
        if(r.type.includes('Rival') || r.type.includes('Hostile')) badgeCol = "border-red-500/40 bg-red-500/10 text-red-300";
        if(r.type.includes('Partner') || r.type.includes('Funded')) badgeCol = "border-amber-500/40 bg-amber-500/10 text-amber-300";
        return `<span class="px-3 py-1.5 rounded border ${badgeCol} flex items-center gap-1.5 shadow-sm text-xs font-sans">
            <span class="opacity-75 font-bold">${r.type}:</span> ${r.name}
        </span>`;
    }).join('');
    
    const panel = document.getElementById('city-panel');
    panel.classList.remove('translate-x-full');
    panel.classList.add('translate-x-0');
} // <-- Syntax closed

function closeCityPanel() {
    const panel = document.getElementById('city-panel');
    panel.classList.remove('translate-x-0');
    panel.classList.add('translate-x-full');
} // <-- Syntax closed