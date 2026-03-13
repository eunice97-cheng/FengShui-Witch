"use strict";

const TAB_DEFAULT = "stars";
const THEME_KEY = "codex-theme";
const THEME_META_COLORS = {
    night: "#0b0d10",
    sun: "#f6f0e6"
};
const sectorSequence = ["se", "s", "sw", "e", "mid", "w", "ne", "n", "nw"];
const zodiacCycle = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];

const sectorData = {
    se: {
        id: "se",
        short: "SE",
        direction: "Southeast",
        starNumber: 9,
        starName: "9 Purple",
        title: "Future prosperity",
        tone: "bright",
        element: "Fire",
        influence: "Visibility, joy, reputation, and events that need momentum.",
        cure: "9-stalk bamboo or a purple light activation.",
        avoid: "Clutter, stale air, and forgotten corners.",
        summary: "A bright palace that responds well to movement, elegance, and clean fire energy.",
        guidance: "Use 9 stalks of lucky bamboo in a blue vase, or place a small purple lamp here. Keep the sector active, refreshed, and visually alive so the fire can express itself cleanly.",
        image: "cure-9.jpg",
        imageAlt: "Activation cure for the Southeast sector"
    },
    s: {
        id: "s",
        short: "S",
        direction: "South",
        starNumber: 5,
        starName: "5 Yellow",
        title: "Major caution",
        tone: "warning",
        element: "Earth",
        influence: "Volatility, disruption, and the cost of unnecessary agitation.",
        cure: "Traditional salt water cure with metal support.",
        avoid: "Drilling, red objects, loud renovation, or constant disturbance.",
        summary: "The most sensitive sector of the year. Stillness is stronger than force here.",
        guidance: "Place a white ceramic jar filled with sea salt, 6 coins, and water. Let it crystallize naturally. Keep the area quiet and do not treat this sector like an activation zone.",
        image: "cure-5.jpg",
        imageAlt: "Salt water cure for the South sector"
    },
    sw: {
        id: "sw",
        short: "SW",
        direction: "Southwest",
        starNumber: 7,
        starName: "7 Red",
        title: "Conflict and leakage",
        tone: "balanced",
        element: "Metal",
        influence: "Arguments, theft, gossip, and sharp interpersonal edges.",
        cure: "Water feature or black tourmaline with a quieter palette.",
        avoid: "Sharp decor, loud sound, and too much metal symbolism.",
        summary: "This palace wants cooling and emotional quiet so the metal does not turn cutting.",
        guidance: "A small water feature or black tourmaline can soften the 7 Red star. Keep the area calm, dimmer, and less reactive than the rest of the home.",
        image: "cure-7.jpg",
        imageAlt: "Cooling cure for the Southwest sector"
    },
    e: {
        id: "e",
        short: "E",
        direction: "East",
        starNumber: 8,
        starName: "8 White",
        title: "Wealth engine",
        tone: "bright",
        element: "Earth",
        influence: "Resources, opportunities, and practical material growth.",
        cure: "8 crystals or a wealth bowl with moving air.",
        avoid: "Neglect, clutter, or a heavy drain such as a bathroom focus.",
        summary: "One of the strongest sectors for building stable gains in 2026.",
        guidance: "Use 8 white crystals or a wealth bowl with coins. A touch of movement, such as a fan or healthy airflow, helps the sector stay alive without making it frantic.",
        image: "cure-8.png",
        imageAlt: "Wealth activation cure for the East sector"
    },
    mid: {
        id: "mid",
        short: "Mid",
        direction: "Center",
        starNumber: 1,
        starName: "1 White",
        title: "Flow and connection",
        tone: "balanced",
        element: "Water",
        influence: "Communication, romance, movement, and emotional clarity.",
        cure: "Fresh water with white pebbles.",
        avoid: "Heavy earth objects and stagnant decorative clutter.",
        summary: "A gentle connector in the middle of the home that benefits from clarity and openness.",
        guidance: "Keep a glass of clean water in the center and refresh it every couple of days. Let the center feel open, breathable, and lightly activated rather than crowded.",
        image: "cure-1.png",
        imageAlt: "Fresh water cure for the center sector"
    },
    w: {
        id: "w",
        short: "W",
        direction: "West",
        starNumber: 3,
        starName: "3 Jade",
        title: "Disputes and friction",
        tone: "balanced",
        element: "Wood",
        influence: "Arguments, temper spikes, and reactive speech.",
        cure: "Red element support such as a carpet or red accents.",
        avoid: "Blue and black tones that feed the wood star.",
        summary: "This sector needs warmth and maturity so disagreements do not harden into conflict.",
        guidance: "Use red decor to reduce the wood energy. If you use a wind chime, choose one with a strong yang feel and an odd number of chimes.",
        image: "cure-3.png",
        imageAlt: "Conflict-reducing cure for the West sector"
    },
    ne: {
        id: "ne",
        short: "NE",
        direction: "Northeast",
        starNumber: 4,
        starName: "4 Green",
        title: "Scholar and craft",
        tone: "balanced",
        element: "Wood",
        influence: "Study, writing, refinement, romance, and creative fluency.",
        cure: "Writing brushes or a Wen Chang pagoda.",
        avoid: "Metal-heavy storage and dead academic clutter.",
        summary: "A strong palace for students, makers, and anyone learning in public.",
        guidance: "Use 4 brushes in a container or a small wooden pagoda. Keep this sector elegant, intentional, and alive with learning tools rather than storage bins.",
        image: "cure-4.png",
        imageAlt: "Academic cure for the Northeast sector"
    },
    n: {
        id: "n",
        short: "N",
        direction: "North",
        starNumber: 6,
        starName: "6 White",
        title: "Authority and guardianship",
        tone: "cool",
        element: "Metal",
        influence: "Discipline, protection, leadership, and strategic control.",
        cure: "Three guardians placed with respect.",
        avoid: "Turning your back to the North for long periods.",
        summary: "A stern but useful palace. Protective energy is strong when the sector is treated deliberately.",
        guidance: "Place Pi Xiu, Fu Dog, or Chi Lin facing the main door to transform the Three Killings pressure into a more guarded stance. Keep the setup dignified rather than theatrical.",
        image: "cure-6.jpg",
        imageAlt: "Protective guardians for the North sector"
    },
    nw: {
        id: "nw",
        short: "NW",
        direction: "Northwest",
        starNumber: 2,
        starName: "2 Black",
        title: "Illness watch",
        tone: "warning",
        element: "Earth",
        influence: "Fatigue, sluggishness, and health-related drain.",
        cure: "Metal Wu Lou or hollow brass gourd.",
        avoid: "Fire activation and persistent warmth.",
        summary: "This palace benefits from metal, simplicity, and less intensity.",
        guidance: "Use a metal Wu Lou or brass gourd, especially in rest spaces. Keep the Northwest cooler, calmer, and less stimulated than usual.",
        image: "cure-2.png",
        imageAlt: "Metal cure for the Northwest sector"
    }
};

const afflictionData = [
    {
        id: "tai-sui",
        tone: "warning",
        badge: "High caution",
        title: "Tai Sui and 5 Yellow",
        chinese: "太岁 · 五黄",
        location: "South (157.5° - 202.5°)",
        explanation: "In 2026, the Grand Duke sits in the South and the 5 Yellow amplifies the cost of disturbance. This is a sector to respect, not provoke.",
        copy: "Avoid heavy construction, drilling, or sitting with your back to the South for long periods. The goal is not fear. The goal is quiet discipline.",
        remedy: "Use a white ceramic jar filled with sea salt, 6 old coins, and water. Leave it uncovered and let the salt crystallize naturally. A Pi Xiu facing outward can reinforce protective intent.",
        images: [
            { src: "cure-5.jpg", alt: "Salt water cure" },
            { src: "pi xiu.jpg", alt: "Pi Xiu protection cure" }
        ]
    },
    {
        id: "three-killings",
        tone: "cool",
        badge: "Protective stance",
        title: "Three Killings",
        chinese: "三杀",
        location: "North (322.5° - 37.5°)",
        explanation: "Three Killings is less about panic and more about posture. In 2026 it asks for awareness around loss, pressure, and unnecessary confrontation.",
        copy: "Avoid treating the North like a place to lean back into carelessly. Respect the sector and use guardians as a symbolic boundary rather than a magical weapon.",
        remedy: "Place Chi Lin, Fu Dog, or Pi Yao in the North facing the main door. Refresh water and incense with intention, and keep the setup out of the bedroom.",
        images: [
            { src: "cure-6.jpg", alt: "Guardians for Three Killings" }
        ]
    }
];

const zodiacData = [
    { key: "rat", name: "Rat", tone: "Regroup", image: "rat.JPG", career: "Direct clash with Tai Sui makes this a year to consolidate instead of forcing advancement.", wealth: "Protect liquid assets and keep risk low while the year runs hot.", health: "Guard immunity and recovery time. Rest is strategy, not laziness.", love: "Misunderstandings can flare quickly, so choose gentleness over speed." },
    { key: "ox", name: "Ox", tone: "Steady build", image: "ox.JPG", career: "Reliability reads as power this year. Quiet consistency opens doors.", wealth: "Property, savings, and slow accumulation are favored over speculation.", health: "Support digestion and spleen energy with warmer, simpler meals.", love: "Stable bonds strengthen when you stay patient and emotionally present." },
    { key: "tiger", name: "Tiger", tone: "Strategize", image: "tiger.JPG", career: "The year rewards planning more than bold leaps. Research first, move later.", wealth: "Conserve resources. Fire can overdraw wood when you move too fast.", health: "Release liver tension with movement, stretching, and fewer stimulants.", love: "Give yourself space to think so you do not confuse pressure with intuition." },
    { key: "rabbit", name: "Rabbit", tone: "Collaborate", image: "rabbit.JPG", career: "Partnerships, networks, and shared craft all perform well for Rabbit in 2026.", wealth: "Growth comes through cooperation, commissions, and relationship-based work.", health: "Watch for overthinking and anxiety spirals. Breathwork helps.", love: "Romantic potential is high when conversations stay honest and soft." },
    { key: "dragon", name: "Dragon", tone: "Contain", image: "dragon.JPG", career: "Ambition is strong, but timing matters. Build leverage before you spend it.", wealth: "Choose steady savings and skip prestige spending that only feeds the ego.", health: "Heat management matters. Hydrate and pay attention to skin or inflammation.", love: "Family harmony improves when you slow down enough to listen." },
    { key: "snake", name: "Snake", tone: "Reinvent", image: "snake.JPG", career: "This is an excellent year for reinvention, retraining, and strategic shedding.", wealth: "Invest in skill depth rather than noisy opportunities.", health: "Mental fatigue is the hidden tax. Meditation and solitude are useful medicine.", love: "Attraction is strong, but patience protects you from misreading chemistry." },
    { key: "horse", name: "Horse", tone: "Lead carefully", image: "horse.JPG", career: "Your year can elevate you fast, but only if leadership stays inclusive and disciplined.", wealth: "Earned income is stronger than speculation. Work the lane you can actually control.", health: "Mind the heart, blood pressure, and overstimulation from constant motion.", love: "Intensity runs high. Drop ego quickly when tension appears." },
    { key: "goat", name: "Goat", tone: "Rebuild", image: "goat.JPG", career: "The year favors patient rebuilding and alliances formed through trust.", wealth: "Debt reduction and long-haul consistency outperform flashy gains.", health: "Burnout can sneak up on you. Pace is part of the cure.", love: "Gentle honesty helps old wounds heal instead of repeat." },
    { key: "monkey", name: "Monkey", tone: "Focus", image: "monkey.JPG", career: "Depth beats scatter. Pick fewer bets and execute them well.", wealth: "Multiple smaller income streams can work if you stay liquid and organized.", health: "Protect the lungs and respiratory system, especially under stress.", love: "The social field is active, but quality still matters more than quantity." },
    { key: "rooster", name: "Rooster", tone: "Lay foundations", image: "rooster.JPG", career: "Treat 2026 like a long-build year. Lay bricks instead of chasing applause.", wealth: "Keep it straightforward. Salary and disciplined routines outperform speculation.", health: "Dryness is the recurring theme, so hydration matters more than usual.", love: "Transparency clears old doubts faster than trying to appear perfect." },
    { key: "dog", name: "Dog", tone: "Hold the line", image: "dog.JPG", career: "Responsibility may increase, so delegation becomes a survival skill.", wealth: "Stay stable and avoid unnecessary complexity in tools or investments.", health: "Watch fatigue, joints, and depletion from carrying too much.", love: "Boundaries help love feel safer instead of heavier." },
    { key: "pig", name: "Pig", tone: "Reflect", image: "pig.JPG", career: "A quieter learning year still has value. Reflection now creates cleaner moves later.", wealth: "Moderation is the winning move. Skip lavish purchases that only impress for a minute.", health: "Kidney energy benefits from warmth, rest, and fewer extremes.", love: "Domestic life can feel quietly sweet if you do not rush the mood." }
];

const JA_ZI_TABLE = [
    "Jia Zi", "Yi Chou", "Bing Yin", "Ding Mao", "Wu Chen", "Ji Si", "Geng Wu", "Xin Wei", "Ren Shen", "Gui You",
    "Jia Xu", "Yi Hai", "Bing Zi", "Ding Chou", "Wu Yin", "Ji Mao", "Geng Chen", "Xin Si", "Ren Wu", "Gui Wei",
    "Jia Shen", "Yi You", "Bing Xu", "Ding Hai", "Wu Zi", "Ji Chou", "Geng Yin", "Xin Mao", "Ren Chen", "Gui Si",
    "Jia Wu", "Yi Wei", "Bing Shen", "Ding You", "Wu Xu", "Ji Hai", "Geng Zi", "Xin Chou", "Ren Yin", "Gui Mao",
    "Jia Chen", "Yi Si", "Bing Wu", "Ding Wei", "Wu Shen", "Ji You", "Geng Xu", "Xin Hai", "Ren Zi", "Gui Chou",
    "Jia Yin", "Yi Mao", "Bing Chen", "Ding Si", "Wu Wu", "Ji Wei", "Geng Shen", "Xin You", "Ren Xu", "Gui Hai"
];

const elementGuidance = {
    Wood: {
        relationship: "Wood feeds the Fire Horse year, so your output can become fuel.",
        focus: "Protect your energy budget and avoid over-giving.",
        guidance: "2026 rewards your creativity and generosity, but it can also drain you fast. Root your work, pace your commitments, and remember that growth needs recovery time."
    },
    Fire: {
        relationship: "Fire meeting Fire amplifies ambition, visibility, and heat.",
        focus: "Use discipline so intensity becomes leadership instead of overwhelm.",
        guidance: "This year can magnify your presence. Share credit, cool down regularly, and choose creation over domination so your fire stays magnetic rather than scorching."
    },
    Earth: {
        relationship: "Fire supports Earth, so the year can feel productive and stabilizing.",
        focus: "Stay hydrated and avoid becoming rigid while you build.",
        guidance: "2026 can help Earth Day Masters turn effort into structure. Teach what you know, keep emotions moving, and do not let productivity harden into emotional dryness."
    },
    Metal: {
        relationship: "Fire melts Metal, so pressure may feel higher and more personal.",
        focus: "Refine instead of resisting every challenge head-on.",
        guidance: "The year tests Metal through heat, deadlines, and exposure. Let the pressure sharpen your craft, choose precision over force, and make room for quieter forms of authority."
    },
    Water: {
        relationship: "Water controls Fire, so the year tests your timing and clarity.",
        focus: "Stay strategic, not arrogant, when opportunities show up.",
        guidance: "2026 can reward Water Day Masters who stay flexible and exact. Diplomacy matters. Use your adaptability as a tactical advantage rather than reacting from pride."
    }
};

const refs = {};
const audioState = {
    context: null,
    masterGain: null,
    filter: null,
    oscillators: [],
    lfo: null,
    shimmer: null,
    isPlaying: false,
    suspendTimer: null
};

document.addEventListener("DOMContentLoaded", () => {
    cacheDom();
    renderStarGrid();
    renderAfflictions();
    renderZodiacs();
    initTabs();
    initThemeToggle();
    initAmbientToggle();
    initForms();
    setSector("s");
    activateTab(resolveTabFromHash(), { updateHash: false });
});

function cacheDom() {
    refs.body = document.body;
    refs.themeColorMeta = document.getElementById("themeColorMeta");
    refs.tabButtons = Array.from(document.querySelectorAll("[data-tab-target]"));
    refs.panels = Array.from(document.querySelectorAll(".panel"));
    refs.loShuGrid = document.getElementById("loShuGrid");
    refs.sectorDetail = document.getElementById("sectorDetail");
    refs.sectorTitle = document.getElementById("sectorTitle");
    refs.sectorSynopsis = document.getElementById("sectorSynopsis");
    refs.sectorInfluence = document.getElementById("sectorInfluence");
    refs.sectorCure = document.getElementById("sectorCure");
    refs.sectorAvoid = document.getElementById("sectorAvoid");
    refs.sectorElement = document.getElementById("sectorElement");
    refs.sectorGuidance = document.getElementById("sectorGuidance");
    refs.sectorImage = document.getElementById("sectorImage");
    refs.afflictionGrid = document.getElementById("afflictionGrid");
    refs.zodiacGrid = document.getElementById("zodiacGrid");
    refs.zodiacForm = document.getElementById("zodiacForm");
    refs.yearInput = document.getElementById("yearInput");
    refs.zodiacResult = document.getElementById("zodiacResult");
    refs.resonanceForm = document.getElementById("resonanceForm");
    refs.birthDate = document.getElementById("birthDate");
    refs.resonanceCard = document.getElementById("resonanceCard");
    refs.resStatusLabel = refs.resonanceCard.querySelector(".detail-panel__label");
    refs.resResultTitle = document.getElementById("resResultTitle");
    refs.resStemBranch = document.getElementById("resStemBranch");
    refs.resRelationship = document.getElementById("resRelationship");
    refs.resFocus = document.getElementById("resFocus");
    refs.resElaborate = document.getElementById("resElaborate");
    refs.resElementBadge = document.getElementById("resElementBadge");
    refs.resElementName = document.getElementById("resElementName");
    refs.themeToggle = document.getElementById("themeToggle");
    refs.themeToggleMeta = document.getElementById("themeToggleMeta");
    refs.musicToggle = document.getElementById("musicToggle");
    refs.musicToggleMeta = document.getElementById("musicToggleMeta");
    refs.arcanaLogo = document.getElementById("arcanaLogo");
    refs.witchLogo = document.getElementById("witchLogo");
}

function initTabs() {
    refs.tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => activateTab(button.dataset.tabTarget));
        button.addEventListener("keydown", (event) => handleTabKeydown(event, index));
    });

    window.addEventListener("hashchange", () => {
        activateTab(resolveTabFromHash(), { updateHash: false });
    });
}

function handleTabKeydown(event, currentIndex) {
    const relevantKeys = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"];
    if (!relevantKeys.includes(event.key)) {
        return;
    }

    event.preventDefault();

    let nextIndex = currentIndex;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextIndex = (currentIndex + 1) % refs.tabButtons.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        nextIndex = (currentIndex - 1 + refs.tabButtons.length) % refs.tabButtons.length;
    } else if (event.key === "Home") {
        nextIndex = 0;
    } else if (event.key === "End") {
        nextIndex = refs.tabButtons.length - 1;
    }

    const nextButton = refs.tabButtons[nextIndex];
    nextButton.focus();
    activateTab(nextButton.dataset.tabTarget);
}

function resolveTabFromHash() {
    const hash = window.location.hash.replace("#", "");
    const match = refs.panels.find((panel) => panel.id === hash);
    return match ? match.id : TAB_DEFAULT;
}

function activateTab(tabId, { updateHash = true } = {}) {
    refs.tabButtons.forEach((button) => {
        const isActive = button.dataset.tabTarget === tabId;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-selected", String(isActive));
        button.tabIndex = isActive ? 0 : -1;
    });

    refs.panels.forEach((panel) => {
        const isActive = panel.id === tabId;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
    });

    if (updateHash && window.location.hash !== `#${tabId}`) {
        history.replaceState(null, "", `#${tabId}`);
    }
}

function renderStarGrid() {
    refs.loShuGrid.innerHTML = sectorSequence.map((sectorId) => {
        const sector = sectorData[sectorId];
        return `
            <button type="button" class="sector-btn ${sectorToneClass(sector.tone)}" data-sector="${sector.id}" aria-pressed="false">
                <span class="sector-btn__dir">${sector.short}</span>
                <div>
                    <p class="sector-btn__number">${sector.starNumber}</p>
                    <p class="sector-btn__title">${sector.title}</p>
                </div>
            </button>
        `;
    }).join("");

    refs.loShuGrid.querySelectorAll(".sector-btn").forEach((button) => {
        button.addEventListener("click", () => setSector(button.dataset.sector));
    });
}

function setSector(sectorId) {
    const sector = sectorData[sectorId];
    if (!sector) {
        return;
    }

    refs.loShuGrid.querySelectorAll(".sector-btn").forEach((button) => {
        const isActive = button.dataset.sector === sectorId;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    refs.sectorDetail.dataset.tone = sector.tone;
    refs.sectorTitle.textContent = `${sector.direction} - ${sector.starName}`;
    refs.sectorSynopsis.textContent = sector.summary;
    refs.sectorInfluence.textContent = sector.influence;
    refs.sectorCure.textContent = sector.cure;
    refs.sectorAvoid.textContent = sector.avoid;
    refs.sectorElement.textContent = sector.element;
    refs.sectorGuidance.textContent = sector.guidance;
    refs.sectorImage.src = sector.image;
    refs.sectorImage.alt = sector.imageAlt;
}

function renderAfflictions() {
    refs.afflictionGrid.innerHTML = afflictionData.map((entry) => {
        const gallery = entry.images.map((image) => `
            <img src="${image.src}" alt="${image.alt}" loading="lazy" decoding="async">
        `).join("");

        return `
            <article class="affliction-card" data-tone="${entry.tone}">
                <span class="affliction-card__badge">${entry.badge}</span>
                <h3 class="affliction-card__title">${entry.title}</h3>
                <p class="affliction-card__meta">${entry.chinese} · ${entry.location}</p>
                <p class="affliction-card__copy">${entry.explanation}</p>
                <div class="affliction-card__rule">
                    <p>${entry.copy}</p>
                </div>
                <div class="affliction-card__rule">
                    <p><strong>Traditional remedy:</strong> ${entry.remedy}</p>
                </div>
                <div class="affliction-card__gallery">${gallery}</div>
            </article>
        `;
    }).join("");
}

function renderZodiacs() {
    refs.zodiacGrid.innerHTML = zodiacData.map((zodiac) => `
        <article class="zodiac-card" id="zodiac-${zodiac.key}" data-zodiac="${zodiac.name}">
            <div class="zodiac-card__header">
                <div class="zodiac-card__media">
                    <img src="${zodiac.image}" alt="${zodiac.name}" loading="lazy" decoding="async">
                </div>
                <div>
                    <h3 class="zodiac-card__name">${zodiac.name}</h3>
                    <p class="zodiac-card__tone">${zodiac.tone}</p>
                </div>
            </div>
            <div class="zodiac-card__rows">
                <div class="zodiac-card__row">
                    <span class="zodiac-card__row-label">Career</span>
                    <p class="zodiac-card__row-copy">${zodiac.career}</p>
                </div>
                <div class="zodiac-card__row">
                    <span class="zodiac-card__row-label">Wealth</span>
                    <p class="zodiac-card__row-copy">${zodiac.wealth}</p>
                </div>
                <div class="zodiac-card__row">
                    <span class="zodiac-card__row-label">Health</span>
                    <p class="zodiac-card__row-copy">${zodiac.health}</p>
                </div>
                <div class="zodiac-card__row">
                    <span class="zodiac-card__row-label">Love</span>
                    <p class="zodiac-card__row-copy">${zodiac.love}</p>
                </div>
            </div>
        </article>
    `).join("");
}

function sectorToneClass(tone) {
    const classMap = {
        warning: "sector-btn--warning",
        bright: "sector-btn--bright",
        cool: "sector-btn--cool",
        balanced: "sector-btn--balanced"
    };
    return classMap[tone] || "sector-btn--balanced";
}

function initForms() {
    refs.zodiacForm.addEventListener("submit", handleZodiacSubmit);
    refs.resonanceForm.addEventListener("submit", handleResonanceSubmit);
}

function handleZodiacSubmit(event) {
    event.preventDefault();

    const year = Number.parseInt(refs.yearInput.value, 10);
    if (Number.isNaN(year) || year < 1900 || year > 2031) {
        refs.zodiacResult.textContent = "Enter a year between 1900 and 2031 to locate the matching sign.";
        highlightZodiac(null);
        return;
    }

    const sign = zodiacCycle[((year - 2020) % 12 + 12) % 12];
    refs.zodiacResult.textContent = `${year} maps to ${sign}. The matching card has been highlighted below.`;
    highlightZodiac(sign);
}

function highlightZodiac(sign) {
    const cards = Array.from(refs.zodiacGrid.querySelectorAll(".zodiac-card"));
    cards.forEach((card) => {
        card.classList.toggle("is-match", card.dataset.zodiac === sign);
    });

    if (!sign) {
        return;
    }

    const match = document.querySelector(`[data-zodiac="${sign}"]`);
    if (match) {
        match.scrollIntoView({
            behavior: prefersReducedMotion() ? "auto" : "smooth",
            block: "nearest"
        });
    }
}

function handleResonanceSubmit(event) {
    event.preventDefault();

    const value = refs.birthDate.value;
    if (!value) {
        resetResonanceCard("Choose a date to reveal the day pillar.");
        return;
    }

    const pillar = getDayMasterFromDate(value);
    const stem = pillar.split(" ")[0];
    const element = getElementFromStem(stem);
    const guide = elementGuidance[element];

    refs.resStatusLabel.textContent = "Calculated result";
    refs.resResultTitle.textContent = `${stem} Day Master · ${element}`;
    refs.resStemBranch.textContent = `60-cycle pillar: ${pillar}`;
    refs.resRelationship.textContent = guide.relationship;
    refs.resFocus.textContent = guide.focus;
    refs.resElaborate.textContent = guide.guidance;
    refs.resElementName.textContent = element;
    refs.resElementBadge.dataset.element = element;
    refs.resElementBadge.classList.remove("element-badge--hidden");
}

function resetResonanceCard(message) {
    refs.resStatusLabel.textContent = "Awaiting input";
    refs.resResultTitle.textContent = message;
    refs.resStemBranch.textContent = "The result will show your heavenly stem, 60-cycle pillar, and how the element interacts with 2026.";
    refs.resRelationship.textContent = "Waiting for a date.";
    refs.resFocus.textContent = "Use the result to guide pacing, recovery, and timing.";
    refs.resElaborate.textContent = "Enter your birth date for a more personal reading of how this Fire Horse year interacts with your own element.";
    refs.resElementBadge.classList.add("element-badge--hidden");
    refs.resElementBadge.dataset.element = "";
}

function getDayMasterFromDate(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    const baseUtc = Date.UTC(1924, 1, 5);
    const targetUtc = Date.UTC(year, month - 1, day);
    const diffDays = Math.floor((targetUtc - baseUtc) / 86400000);
    const index = ((diffDays % 60) + 60) % 60;
    return JA_ZI_TABLE[index];
}

function getElementFromStem(stem) {
    const stemMap = {
        Jia: "Wood",
        Yi: "Wood",
        Bing: "Fire",
        Ding: "Fire",
        Wu: "Earth",
        Ji: "Earth",
        Geng: "Metal",
        Xin: "Metal",
        Ren: "Water",
        Gui: "Water"
    };
    return stemMap[stem] || "Earth";
}

function initThemeToggle() {
    const storedTheme = readStoredTheme();
    applyTheme(storedTheme);

    refs.themeToggle.addEventListener("click", () => {
        const nextTheme = getActiveTheme() === "sun" ? "night" : "sun";
        applyTheme(nextTheme);
        try {
            localStorage.setItem(THEME_KEY, nextTheme);
        } catch (error) {
            console.warn("Theme preference could not be stored.", error);
        }
    });
}

function applyTheme(theme) {
    const isSun = theme === "sun";
    refs.body.classList.toggle("theme-sun", isSun);
    refs.body.classList.toggle("theme-night", !isSun);
    refs.themeToggle.setAttribute("aria-pressed", String(isSun));
    refs.themeToggle.setAttribute("aria-label", isSun ? "Switch to night theme" : "Switch to day theme");
    refs.themeToggleMeta.textContent = isSun ? "Day" : "Night";
    if (refs.themeColorMeta) {
        refs.themeColorMeta.setAttribute("content", THEME_META_COLORS[theme]);
    }
    updateFooterLogos(theme);
}

function getActiveTheme() {
    return refs.body.classList.contains("theme-sun") ? "sun" : "night";
}

function readStoredTheme() {
    try {
        return localStorage.getItem(THEME_KEY) === "sun" ? "sun" : "night";
    } catch (error) {
        return "night";
    }
}

function updateFooterLogos(theme) {
    refs.arcanaLogo.src = theme === "sun" ? "logo1.png" : "logo.png";
    refs.witchLogo.src = theme === "sun" ? "logo3.jpg" : "logo2.jpg";
}

function initAmbientToggle() {
    refs.musicToggle.addEventListener("click", toggleAmbientAudio);
    window.addEventListener("beforeunload", disposeAmbientAudio);
    updateAmbientButton();
}

async function toggleAmbientAudio() {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) {
        refs.musicToggleMeta.textContent = "Unsupported";
        return;
    }

    if (!audioState.context) {
        createAmbientAudioEngine(AudioCtor);
    }

    clearAmbientSuspendTimer();
    if (audioState.context.state === "suspended") {
        await audioState.context.resume();
    }

    const currentGain = audioState.masterGain.gain.value;
    const now = audioState.context.currentTime;
    audioState.masterGain.gain.cancelScheduledValues(now);
    audioState.masterGain.gain.setValueAtTime(currentGain, now);

    if (audioState.isPlaying) {
        const duration = 1.2;
        audioState.masterGain.gain.linearRampToValueAtTime(0.0001, now + duration);
        audioState.isPlaying = false;
        scheduleAmbientSuspend(Math.ceil(duration * 1000) + 160);
    } else {
        const duration = 2.2;
        audioState.masterGain.gain.linearRampToValueAtTime(0.06, now + duration);
        audioState.isPlaying = true;
    }

    updateAmbientButton();
}

function createAmbientAudioEngine(AudioCtor) {
    const context = new AudioCtor();
    const masterGain = context.createGain();
    const filter = context.createBiquadFilter();

    filter.type = "lowpass";
    filter.frequency.value = 880;
    filter.Q.value = 0.6;

    masterGain.gain.value = 0.0001;

    filter.connect(masterGain);
    masterGain.connect(context.destination);

    const layers = [
        { type: "sine", frequency: 174.61, gain: 0.03 },
        { type: "triangle", frequency: 261.63, gain: 0.018 },
        { type: "sine", frequency: 392, gain: 0.01 }
    ];

    const oscillators = layers.map((layer) => {
        const oscillator = context.createOscillator();
        const layerGain = context.createGain();

        oscillator.type = layer.type;
        oscillator.frequency.value = layer.frequency;
        layerGain.gain.value = layer.gain;

        oscillator.connect(layerGain);
        layerGain.connect(filter);
        oscillator.start();

        return { oscillator, layerGain };
    });

    const lfo = context.createOscillator();
    const lfoGain = context.createGain();
    lfo.type = "sine";
    lfo.frequency.value = 0.08;
    lfoGain.gain.value = 120;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    const shimmer = context.createOscillator();
    const shimmerGain = context.createGain();
    shimmer.type = "sine";
    shimmer.frequency.value = 0.12;
    shimmerGain.gain.value = 0.01;
    shimmer.connect(shimmerGain);
    shimmerGain.connect(masterGain.gain);
    shimmer.start();

    audioState.context = context;
    audioState.masterGain = masterGain;
    audioState.filter = filter;
    audioState.oscillators = oscillators;
    audioState.lfo = lfo;
    audioState.shimmer = shimmer;
}

function updateAmbientButton() {
    refs.musicToggle.setAttribute("aria-pressed", String(audioState.isPlaying));
    refs.musicToggleMeta.textContent = audioState.isPlaying ? "On" : "Off";
    refs.musicToggle.setAttribute("aria-label", audioState.isPlaying ? "Turn ambient audio off" : "Turn ambient audio on");
}

function disposeAmbientAudio() {
    clearAmbientSuspendTimer();
    if (!audioState.context) {
        return;
    }

    audioState.context.close().catch(() => {
        // Ignore close errors during teardown.
    });
    audioState.context = null;
    audioState.masterGain = null;
    audioState.filter = null;
    audioState.oscillators = [];
    audioState.lfo = null;
    audioState.shimmer = null;
    audioState.isPlaying = false;
}

function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scheduleAmbientSuspend(delayMs) {
    audioState.suspendTimer = window.setTimeout(async () => {
        audioState.suspendTimer = null;
        if (!audioState.context || audioState.isPlaying || audioState.context.state !== "running") {
            return;
        }

        try {
            await audioState.context.suspend();
        } catch (error) {
            // Ignore suspend failures from browsers with stricter audio policies.
        }
    }, delayMs);
}

function clearAmbientSuspendTimer() {
    if (!audioState.suspendTimer) {
        return;
    }

    window.clearTimeout(audioState.suspendTimer);
    audioState.suspendTimer = null;
}
