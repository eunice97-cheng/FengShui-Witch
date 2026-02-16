// ---------- COMPLETE 60 JIA ZI DAY MASTER TABLE ----------
const JA_ZI_TABLE = [
    "Jia Zi", "Yi Chou", "Bing Yin", "Ding Mao", "Wu Chen", "Ji Si", "Geng Wu", "Xin Wei", "Ren Shen", "Gui You",
    "Jia Xu", "Yi Hai", "Bing Zi", "Ding Chou", "Wu Yin", "Ji Mao", "Geng Chen", "Xin Si", "Ren Wu", "Gui Wei",
    "Jia Shen", "Yi You", "Bing Xu", "Ding Hai", "Wu Zi", "Ji Chou", "Geng Yin", "Xin Mao", "Ren Chen", "Gui Si",
    "Jia Wu", "Yi Wei", "Bing Shen", "Ding You", "Wu Xu", "Ji Hai", "Geng Zi", "Xin Chou", "Ren Yin", "Gui Mao",
    "Jia Chen", "Yi Si", "Bing Wu", "Ding Wei", "Wu Shen", "Ji You", "Geng Xu", "Xin Hai", "Ren Zi", "Gui Chou",
    "Jia Yin", "Yi Mao", "Bing Chen", "Ding Si", "Wu Wu", "Ji Wei", "Geng Shen", "Xin You", "Ren Xu", "Gui Hai"
];

function getElementFromStem(stem) {
    const stemMap = {
        'Jia': 'Wood', 'Yi': 'Wood',
        'Bing': 'Fire', 'Ding': 'Fire',
        'Wu': 'Earth', 'Ji': 'Earth',
        'Geng': 'Metal', 'Xin': 'Metal',
        'Ren': 'Water', 'Gui': 'Water'
    };
    return stemMap[stem] || 'Earth';
}

function getElementIcon(element) {
    const icons = {
        'Wood': 'fa-leaf',
        'Fire': 'fa-fire',
        'Earth': 'fa-mountain',
        'Metal': 'fa-coins',
        'Water': 'fa-water'
    };
    return icons[element] || 'fa-leaf';
}

// ---------- SECTOR DATA (ALL 9) ----------
const sectorData = {
    's': { n: "South · 5 Yellow", c: "Salt Water Cure", a: "Avoid red, drilling, noise", r: "White ceramic jar, sea salt, 6 old coins, topped with water. Let salt crystallize over months. Replace before Lunar New Year. No lid. Place in South but not directly behind door." },
    'nw': { n: "Northwest · 2 Black", c: "Metal Wu Lou (Gourd)", a: "Avoid candles, fire, renovation", r: "Hollow brass gourd, remove the lid. Place in NW corner of bedroom or living room. Drains illness energy. Burn sandalwood weekly." },
    'se': { n: "Southeast · 9 Purple", c: "9-stalk Bamboo / Purple Light", a: "Avoid clutter, stagnant qi", r: "Activate future prosperity: 9 stalks of lucky bamboo in blue vase. Or small purple LED lamp. Fire of Period 9 brings joyful events." },
    'n': { n: "North · 6 White", c: "Three Guardians", a: "Avoid back-to-north seating", r: "Place Pi Xiu, Fu Dog, Chi Lin facing main door. Transforms Three Killings into protection. Light incense each Tuesday." },
    'sw': { n: "Southwest · 7 Red", c: "Water feature + silence", a: "Avoid sharp objects, loud noise", r: "Small water fountain or black tourmaline. 7 Red causes arguments; water drains metal energy. Keep colors muted." },
    'e': { n: "East · 8 White", c: "8 crystals / wealth bowl", a: "Do not place toilet here", r: "8 white crystals or a wealth bowl with 8 coins. This is the #1 wealth star in Period 9. Activate with moving air (small fan)." },
    'w': { n: "West · 3 Jade", c: "Red carpet / 9 red envelopes", a: "Avoid blue/black", r: "3 Jade brings disputes. Place red items to reduce wood energy. Or hang windchime with yang lines (solid, not dotted or dashed. odd number of lines/chimes)." },
    'ne': { n: "Northeast · 4 Green", c: "4 writing/painting brushes / Wen Chang pagoda", a: "Avoid metal bins", r: "For academic success: 4 bamboo brushes in pot, or small wooden pagoda. Excellent for students." },
    'mid': { n: "Center · 1 White", c: "Glass of fresh water", a: "Avoid earth pottery", r: "Star of romance and communication. Keep a glass of clean water, change every 2 days. Add white pebbles." }
};

// ---------- ZODIAC DATA ----------
const zodiacs = [
    { n: "Rat", img: "rat.jpg", c: "Career: Direct clash with Tai Sui. This is a year to consolidate, not advance. Reflect on achievements, avoid power struggles.", w: "Wealth: Protect liquid assets. Think of capital as hibernating — no lending.", h: "Health: Vulnerable immunity. Prioritize rest and adaptogenic herbs.", l: "Love: Misunderstandings may arise. Extra gentleness is needed." },
    { n: "Ox", img: "ox.jpg", c: "Career: Steady recognition. Your reliability builds unseen foundations.", w: "Wealth: Property and slow accumulation favored. Avoid get-rich schemes.", h: "Health: Spleen and digestion — eat warm, cooked foods.", l: "Love: Supportive and calm. Long-term bonds deepen." },
    { n: "Tiger", img: "tiger.jpg", c: "Career: Strategize quietly. Not yet time to leap; research and plan.", w: "Wealth: Conserve. Fire year drains wood. No risky expansion.", h: "Health: Liver chi stagnation. Stretch, limit alcohol.", l: "Love: Space needed. Introspection benefits partnership." },
    { n: "Rabbit", img: "rabbit.jpg", c: "Career: Collaboration blooms. Network, merge skills with others.", w: "Wealth: Gains through partnerships, commissions.", h: "Health: Anxiety may surface. Breathwork helps.", l: "Love: High romantic potential. Open conversations." },
    { n: "Dragon", img: "dragon.jpg", c: "Career: Ambition high, but timing not ripe. Wait for autumn.", w: "Wealth: Steady savings, no luxury expenditure.", h: "Health: Heat-related skin issues. Hydrate.", l: "Love: Family harmony is priority. Nurture elders." },
    { n: "Snake", img: "snake.jpg", c: "Career: Reinvention. You're shedding old skin — embrace new training.", w: "Wealth: Invest in high-level skills, not stocks.", h: "Health: Mental fatigue; meditate.", l: "Love: Mysterious attraction. Go slow." },
    { n: "Horse", img: "horse.jpg", c: "Career: Your year — but power requires diplomacy. Lead with inclusion, not authority.", w: "Wealth: Earned income favored. Speculation is unwise now.", h: "Health: Heart, blood pressure. Avoid overstimulation.", l: "Love: Volatile; set ego aside." },
    { n: "Goat", img: "goat.jpg", c: "Career: Rebuilding slowly. Friends become allies.", w: "Wealth: Debts gradually clear. Persistence pays.", h: "Health: Prone to burnout. Pace yourself.", l: "Love: Healing old wounds. Gentle honesty." },
    { n: "Monkey", img: "monkey.jpg", c: "Career: Focus — avoid scattering energy. Depth over breadth.", w: "Wealth: Multiple small streams. Stay liquid.", h: "Health: Respiratory; protect lungs.", l: "Love: Active social year, but quality > quantity." },
    { n: "Rooster", img: "rooster.jpg", c: "Career: Ten-year foundation. Laying bricks, not chasing promotions.", w: "Wealth: No speculation. Rely on salary.", h: "Health: Dryness; hydration crucial.", l: "Love: Transparency resolves old doubts." },
    { n: "Dog", img: "dog.jpg", c: "Career: Heavy responsibility. You're the pillar. Delegate if possible.", w: "Wealth: Stable, avoid high-risk tools.", h: "Health: Joints & fatigue. Magnesium helps.", l: "Love: Set boundaries with grace." },
    { n: "Pig", img: "pig.jpg", c: "Career: Reflective, not stagnant. Learning year.", w: "Wealth: Moderation. No lavish purchases.", h: "Health: Kidney energy; rest and warmth.", l: "Love: Quiet domestic joy." }
];

// ---------- TAB FUNCTION ----------
function openTab(evt, tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// ---------- SECTOR SELECTION WITH CURE IMAGES ----------
function setSector(id) {
    document.querySelectorAll('.sector').forEach(el => el.classList.remove('selected'));
    const activeSector = document.querySelector(`.sector[data-sector="${id}"]`);
    if (activeSector) activeSector.classList.add('selected');

    const d = sectorData[id] || { n: "Sector", c: "Keep clean", a: "Noise", r: "Maintain general cleanliness." };

    const cureImageMap = {
        'se': 'cure-9',
        's': 'cure-5',
        'sw': 'cure-7',
        'e': 'cure-8',
        'w': 'cure-3',
        'ne': 'cure-4',
        'n': 'cure-6',
        'nw': 'cure-2',
        'mid': 'cure-1'
    };

    const imageBase = cureImageMap[id] || 'cure-default';
    const imagePathPng = `${imageBase}.png`;
    const imagePathJpg = `${imageBase}.jpg`;

    document.getElementById('cure-output').innerHTML = `
        <h3>${d.n} <span class="annotation">方位化解</span></h3>
        <p><strong>⟡ Primary cure:</strong> ${d.c}</p>
        <p><strong>⟡ Avoid:</strong> ${d.a}</p>
        <div class="recipe-block">
            <strong>📜 Placement guidance:</strong><br>${d.r}
        </div>
        <div style="margin-top:1.5rem; width:100%; background:transparent; padding:0;">
            <img src="${imagePathPng}" alt="${d.n} cure" onerror="this.onerror=null; this.src='${imagePathJpg}'" style="width:100%; height:auto; max-height:400px; object-fit:contain; border:none; border-radius:0; background:transparent; display:block;">
        </div>
    `;
}

// ---------- ZODIAC INIT WITH ANIMAL IMAGES ----------
function initZodiac() {
    const container = document.getElementById('z-grid');
    container.innerHTML = zodiacs.map(z => `
        <div class="z-card">
            <div class="z-card-header">
                <h3>${z.n} <span class="annotation">生肖</span></h3>
                <div class="zodiac-avatar">
                    <img src="${z.img}" alt="${z.n}" style="width:100%; height:100%; object-fit:cover; border-radius:30px;">
                </div>
            </div>
            <div class="z-row"><strong>✨ Career</strong>${z.c}</div>
            <div class="z-row"><strong>💰 Wealth</strong>${z.w}</div>
            <div class="z-row"><strong>🌿 Health</strong>${z.h}</div>
            <div class="z-row"><strong>❤️ Love</strong>${z.l}</div>
        </div>
    `).join('');
}

// ---------- ZODIAC CALCULATOR ----------
function showZodiacFromYear() {
    const year = parseInt(document.getElementById('yearInput').value);
    if (isNaN(year) || year < 1900 || year > 2031) {
        document.getElementById('zodiacResult').innerText = '❌ Enter 1900-2031';
        return;
    }
    const animals = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];
    const idx = year % 12;
    document.getElementById('zodiacResult').innerText = `${year} → ${animals[idx]}`;
}

// ---------- DAY MASTER CALCULATION ----------
function getDayMasterFromDate(date) {
    const baseDate = new Date(1924, 1, 5);
    const targetDate = new Date(date);
    baseDate.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);
    const diffTime = targetDate - baseDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const index = ((diffDays % 60) + 60) % 60;
    return JA_ZI_TABLE[index];
}

// ---------- RESONANCE CALCULATION ----------
function calcRes() {
    const dateStr = document.getElementById('birthDate').value;
    if (!dateStr) {
        document.getElementById('res-result').innerHTML = '🕯️ Please select a birth date';
        document.getElementById('resElaborate').innerHTML = '';
        document.getElementById('resStemBranch').innerHTML = '';
        document.getElementById('resElementIconContainer').style.display = 'none';
        return;
    }

    const birthDate = new Date(dateStr);
    if (!birthDate.getTime()) return;

    const dayPillar = getDayMasterFromDate(birthDate);
    const stem = dayPillar.split(' ')[0];
    const element = getElementFromStem(stem);

    const advice = {
        "Wood": "Wood produces Fire — your creativity fuels 2026, yet you may feel drained by year's intensity. Like a tree giving shade, remember to root. Nourish kidneys, rest eyes, and collaborate. Burnout is a risk; set gentle boundaries. Your growth is steady, not explosive.",
        "Fire": "Two fires intensify ambition. You're competitive, but avoid scorching allies. 2026 asks for disciplined passion—cool down with moonlight, swim, or white clothing. Your leadership inspires, but share credit. Channel fire into creation, not domination.",
        "Earth": "Earth is supported by Fire. 2026 feels productive; learning is easy. Yet fire can dry earth—stay hydrated, both body and emotions. Mentor others; your stability anchors the year. This is a harvest season for patience.",
        "Metal": "Fire melts Metal. You may feel under pressure, but pressure creates diamonds. Refine skills, speak less, listen more. Avoid forced confrontations; this is a year of inner alchemy. What doesn't break you becomes your edge.",
        "Water": "Water controls Fire, but in a Fire year you are tested. Wealth opportunities appear, but must be caught with precision. You are the strategist. Guard against arrogance—diplomacy wins. Your adaptability is your superpower."
    };

    document.getElementById('res-result').innerHTML = `☯ Your Day Master: ${stem} · ${element}`;
    document.getElementById('resStemBranch').innerHTML = `60-cycle pillar: ${dayPillar}`;
    document.getElementById('resElaborate').innerHTML = `<span style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 24px; display:block;">🧘 ${advice[element]}</span>`;

    const iconContainer = document.getElementById('resElementIconContainer');
    const iconElement = document.getElementById('resElementIcon');
    const iconName = document.getElementById('resElementName');

    iconElement.className = `fas ${getElementIcon(element)}`;
    iconName.innerText = element;
    iconContainer.style.display = 'flex';
}

// ---------- THEME TOGGLE ----------
function initThemeToggle() {
    const btn = document.getElementById('themeToggle');
    const icon = btn.querySelector('i');
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');

        if (document.body.classList.contains('dark')) {
            icon.className = 'fas fa-sun';
            btn.title = 'Light mode';
        } else {
            icon.className = 'fas fa-moon';
            btn.title = 'Dark mode';
        }
        
        updateFooterLogos();
    });
}

// ---------- MUSIC TOGGLE ----------
function initMusicToggle() {
    const btn = document.getElementById('musicToggle');
    const icon = btn.querySelector('i');
    let musicOn = false;
    btn.addEventListener('click', () => {
        musicOn = !musicOn;
        if (musicOn) {
            icon.className = 'fas fa-volume-up';
            btn.title = 'Stop ambient sound';
        } else {
            icon.className = 'fas fa-music';
            btn.title = 'Play ambient sound';
        }
    });
}

// ---------- SECTOR LISTENERS ----------
function initSectorListeners() {
    document.querySelectorAll('.sector').forEach(el => {
        el.addEventListener('click', (e) => {
            setSector(el.dataset.sector);
        });
    });
}

// ---------- AFFLICTIONS IMAGES ----------
function addAfflictionImages() {
    const taiSuiDiv = document.querySelector('.aff-item.danger');
    if (taiSuiDiv) {
        const taiSuiImages = document.createElement('div');
        taiSuiImages.style.marginTop = '1.5rem';
        taiSuiImages.style.display = 'flex';
        taiSuiImages.style.gap = '1rem';
        taiSuiImages.style.flexWrap = 'wrap';
        taiSuiImages.innerHTML = `
            <div style="flex:1; min-width:200px;">
                <img src="cure-5.png" alt="cure-5" onerror="this.onerror=null; this.src='cure-5.jpg'" style="width:100%; height:auto; max-height:250px; object-fit:contain; border:none; border-radius:0; background:transparent; display:block;">
            </div>
            <div style="flex:1; min-width:200px;">
                <img src="pi xiu.png" alt="pi xiu" onerror="this.onerror=null; this.src='pi xiu.jpg'" style="width:100%; height:auto; max-height:250px; object-fit:contain; border:none; border-radius:0; background:transparent; display:block;">
            </div>
        `;
        taiSuiDiv.appendChild(taiSuiImages);
    }

    const threeKillingsDiv = document.querySelector('.aff-item.warning');
    if (threeKillingsDiv) {
        const threeKillingsImage = document.createElement('div');
        threeKillingsImage.style.marginTop = '1.5rem';
        threeKillingsImage.style.width = '100%';
        threeKillingsImage.innerHTML = `
            <div style="width:100%;">
                <img src="cure-6.png" alt="cure-6" onerror="this.onerror=null; this.src='cure-6.jpg'" style="width:100%; height:auto; max-height:300px; object-fit:contain; border:none; border-radius:0; background:transparent; display:block;">
            </div>
        `;
        threeKillingsDiv.appendChild(threeKillingsImage);
    }
}

// ---------- REDESIGNED FOOTER ----------
function initFooter() {
    const footer = document.querySelector('.footer');
    if (!footer) return;
    
    footer.innerHTML = '';
    footer.style.cssText = `
        background: var(--hero-bg);
        color: var(--hero-text);
        padding: 2rem 2.5rem;
        border-radius: 0 0 40px 40px;
        border-top: 2px solid var(--accent);
        margin-top: 1rem;
        position: relative;
        z-index: 10;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    `;
    
    const mainFooter = document.createElement('div');
    mainFooter.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
    `;
    
    const leftSection = document.createElement('div');
    leftSection.style.cssText = `
        display: flex;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;
    `;
    
    const arcanaDiv = document.createElement('a');
    arcanaDiv.href = 'https://arcanastudiolabs.com/';
    arcanaDiv.target = '_blank';
    arcanaDiv.style.cssText = `
        display: flex;
        align-items: center;
        gap: 1rem;
        text-decoration: none;
        color: var(--hero-text);
        transition: transform 0.3s ease;
    `;
    arcanaDiv.onmouseover = () => { arcanaDiv.style.transform = 'translateY(-2px)'; };
    arcanaDiv.onmouseout = () => { arcanaDiv.style.transform = 'translateY(0)'; };
    
    const arcanaLogo = document.createElement('img');
    arcanaLogo.id = 'arcanaLogo';
    arcanaLogo.alt = 'Arcana Studio Labs';
    arcanaLogo.style.cssText = `
        width: 50px;
        height: 50px;
        object-fit: contain;
        border-radius: 12px;
        background: transparent;
    `;
    
    const arcanaText = document.createElement('div');
    arcanaText.style.cssText = `
        display: flex;
        flex-direction: column;
    `;
    
    const arcanaName = document.createElement('span');
    arcanaName.style.cssText = `
        font-weight: 800;
        font-size: 1.2rem;
        letter-spacing: -0.5px;
        background: linear-gradient(135deg, var(--accent), var(--gold));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    `;
    arcanaName.textContent = 'Arcana Studio Labs';
    
    const arcanaLink = document.createElement('span');
    arcanaLink.style.cssText = `
        font-size: 0.8rem;
        color: var(--gold);
        opacity: 0.8;
    `;
    arcanaLink.textContent = 'arcanastudiolabs.com';
    
    arcanaText.appendChild(arcanaName);
    arcanaText.appendChild(arcanaLink);
    arcanaDiv.appendChild(arcanaLogo);
    arcanaDiv.appendChild(arcanaText);
    
    const divider = document.createElement('div');
    divider.style.cssText = `
        width: 2px;
        height: 40px;
        background: linear-gradient(to bottom, transparent, var(--accent), transparent);
    `;
    
    const witchDiv = document.createElement('a');
    witchDiv.href = 'https://codex-witch.arcanastudiolabs.com/';
    witchDiv.target = '_blank';
    witchDiv.style.cssText = `
        display: flex;
        align-items: center;
        gap: 1rem;
        text-decoration: none;
        color: var(--hero-text);
        transition: transform 0.3s ease;
    `;
    witchDiv.onmouseover = () => { witchDiv.style.transform = 'translateY(-2px)'; };
    witchDiv.onmouseout = () => { witchDiv.style.transform = 'translateY(0)'; };
    
    const witchLogo = document.createElement('img');
    witchLogo.id = 'witchLogo';
    witchLogo.alt = 'The Codex of Witch';
    witchLogo.style.cssText = `
        width: 50px;
        height: 50px;
        object-fit: contain;
        border-radius: 12px;
        background: transparent;
    `;
    
    const witchText = document.createElement('div');
    witchText.style.cssText = `
        display: flex;
        flex-direction: column;
    `;
    
    const witchName = document.createElement('span');
    witchName.style.cssText = `
        font-weight: 800;
        font-size: 1.2rem;
        letter-spacing: -0.5px;
        background: linear-gradient(135deg, var(--gold), var(--accent));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    `;
    witchName.textContent = 'The Codex of Witch';
    
    const witchLink = document.createElement('span');
    witchLink.style.cssText = `
        font-size: 0.8rem;
        color: var(--gold);
        opacity: 0.8;
    `;
    witchLink.textContent = 'codex-witch.arcanastudiolabs.com';
    
    witchText.appendChild(witchName);
    witchText.appendChild(witchLink);
    witchDiv.appendChild(witchLogo);
    witchDiv.appendChild(witchText);
    
    leftSection.appendChild(arcanaDiv);
    leftSection.appendChild(divider);
    leftSection.appendChild(witchDiv);
    
    const rightSection = document.createElement('div');
    rightSection.style.cssText = `
        display: flex;
        align-items: center;
        gap: 2rem;
    `;
    
    const copyright = document.createElement('div');
    copyright.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.3rem;
    `;
    
    const year = document.createElement('span');
    year.style.cssText = `
        font-weight: 700;
        font-size: 1.1rem;
        color: var(--accent);
    `;
    year.textContent = '© Arana Studio Labs';
    
    const rights = document.createElement('span');
    rights.style.cssText = `
        font-size: 0.8rem;
        color: var(--gold);
        opacity: 0.7;
    `;
    rights.textContent = 'Sacred texts, digital ink';
    
    copyright.appendChild(year);
    copyright.appendChild(rights);
    
    const sealDiv = document.createElement('div');
    sealDiv.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 0.5rem 1rem;
        background: rgba(207, 122, 92, 0.1);
        border-radius: 50px;
        border: 1px solid var(--accent);
    `;
    
    const sealIcon = document.createElement('i');
    sealIcon.className = 'fas fa-seal';
    sealIcon.style.cssText = `
        color: var(--accent);
        font-size: 1.2rem;
    `;
    
    const sealText = document.createElement('span');
    sealText.style.cssText = `
        font-weight: 600;
        letter-spacing: 2px;
        color: var(--hero-text);
    `;
    sealText.textContent = 'Feng Shui Guide 2026';
    
    sealDiv.appendChild(sealIcon);
    sealDiv.appendChild(sealText);
    
    rightSection.appendChild(copyright);
    rightSection.appendChild(sealDiv);
    
    mainFooter.appendChild(leftSection);
    mainFooter.appendChild(rightSection);
    
    const bottomBar = document.createElement('div');
    bottomBar.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(207, 122, 92, 0.3);
        font-size: 0.9rem;
    `;
    
    const fireHorse = document.createElement('span');
    fireHorse.style.cssText = `
        color: var(--accent);
        font-weight: 600;
    `;
    fireHorse.innerHTML = '🔥 丙午 Fire Horse 2026 🔥';
    
    const dot = document.createElement('span');
    dot.style.cssText = `
        color: var(--accent);
        font-size: 0.5rem;
    `;
    dot.innerHTML = '⦿';
    
    const codex = document.createElement('span');
    codex.style.cssText = `
        color: var(--gold);
        font-weight: 500;
    `;
    codex.textContent = 'The Codex of The Witch';
    
    bottomBar.appendChild(fireHorse);
    bottomBar.appendChild(dot);
    bottomBar.appendChild(codex);
    
    footer.appendChild(mainFooter);
    footer.appendChild(bottomBar);
    
    updateFooterLogos();
}

// ---------- UPDATE FOOTER LOGOS BASED ON THEME ----------
function updateFooterLogos() {
    const isDark = document.body.classList.contains('dark');
    
    const arcanaLogo = document.getElementById('arcanaLogo');
    if (arcanaLogo) {
        arcanaLogo.src = isDark ? 'logo.png' : 'logo1.jpg';
        arcanaLogo.onerror = function() {
            this.onerror = null;
            this.src = isDark ? 'logo.jpg' : 'logo1.png';
        };
    }
    
    const witchLogo = document.getElementById('witchLogo');
    if (witchLogo) {
        witchLogo.src = isDark ? 'logo2.png' : 'logo3.jpg';
        witchLogo.onerror = function() {
            this.onerror = null;
            this.src = isDark ? 'logo2.jpg' : 'logo3.png';
        };
    }
}

// ---------- ON LOAD ----------
window.onload = function () {
    document.body.classList.add('dark');
    initZodiac();
    initSectorListeners();
    initThemeToggle();
    initMusicToggle();
    setSector('s');
    document.getElementById('yearInput').value = '1986';
    addAfflictionImages();
    initFooter();
};