export const cards = [
    {
        set: 'MNB',
        cardNumber: 7,
        _id: 'MNB-7',
        name: 'Spider-Man lvl1',
        isMC: true,
        level: 1,
        cost: null,
        atk: 2,
        def: 5,
        health: 5,
        hasFlight: false,
        hasRange: false,
        affiliation: 'Avengers',
        levelUpText: 'At the end of your turn, Spidey gains 1 XP for each face-up supporting character on your side.',
        superPowers: [
            {
                name: 'Great Power',
                anyTurn: true,
                phase: 'Combat',
                cost: ['Might'],
                text: 'Spider-Man gets +1/+1 this combat for each face-up supporting character on your side',
            },
        ],
    },
    {
        set: 'MNB',
        cardNumber: 8,
        _id: 'MNB-8',
        name: 'Spider-Man lvl2',
        isMC: true,
        level: 2,
        cost: null,
        atk: 4,
        def: 8,
        health: 5,
        hasFlight: false,
        hasRange: false,
        affiliation: 'Avengers',
        levelUpText: null,
        superPowers: [
            {
                name: 'Great Power',
                anyTurn: true,
                phase: 'Combat',
                cost: ['Might'],
                text: 'Spider-Man gets +1/+1 this combat for each face-up supporting character on your side',
            },
            {
                name: 'Friendly Neighbor',
                anyTurn: true,
                phase: 'Combat',
                cost: ['Intellect'],
                text: 'Remove a defender on your side from combat and replace it with Spider-Man, Switch their positions.',
            },
        ],
    },
    {
        set: 'MNB',
        cardNumber: 9,
        _id: 'MNB-9',
        name: 'Ant-Man',
        isMC: false,
        level: null,
        cost: 1,
        atk: 2,
        def: 2,
        health: 1,
        hasFlight: false,
        hasRange: false,
        affiliation: 'Avengers',
        levelUpText: null,
        keyWords: [
            {
                name: 'Shrink',
                text: "The first time he's attacked each turn, you may cancel the combat.",
            },
        ],
        superPowers: [],
    },
    {
        set: 'MNB',
        cardNumber: 10,
        _id: 'MNB-10',
        name: 'Black Widow',
        isMC: false,
        level: null,
        cost: 1,
        atk: 2,
        def: 1,
        health: 1,
        hasFlight: false,
        hasRange: true,
        affiliation: 'Avengers',
        levelUpText: null,
        keyWords: [
            {
                name: 'Sting',
                text: 'When she appears, put a -1/-1 counter on an enemy character.',
            },
        ],
        superPowers: [],
    },
    {
        set: 'MNB',
        cardNumber: 11,
        _id: 'MNB-11',
        name: 'Black Panther',
        isMC: false,
        level: null,
        cost: 2,
        atk: 3,
        def: 2,
        health: 2,
        hasFlight: false,
        hasRange: false,
        affiliation: 'Avengers',
        levelUpText: null,
        keyWords: [
            {
                name: 'Ferocious',
                text: 'During melee combat, he strikes before enemy characters',
            },
        ],
        superPowers: [],
    },
    {
        set: 'MNB',
        cardNumber: 79,
        _id: 'MNB-79',
        name: 'Green Goblin',
        isMC: true,
        level: 1,
        cost: null,
        atk: 2,
        def: 4,
        health: 5,
        hasFlight: true,
        hasRange: false,
        affiliation: 'Villains',
        levelUpText: 'When an enemy character becomes stunned, Green Goblin gainis an XP',
        superPowers: [
            {
                name: 'Sadistic Choice',
                anyTurn: false,
                phase: 'Main',
                cost: ['Intellect'],
                text: 'Choose an enemy supporting character and stun it unless that player discards a random card',
            },
        ],
    },
    {
        set: 'MNB',
        cardNumber: 87,
        _id: 'MNB-87',
        name: 'Ronan',
        isMC: false,
        level: null,
        cost: 2,
        atk: 3,
        def: 3,
        health: 2,
        hasFlight: false,
        hasRange: false,
        affiliation: 'Villains',
        levelUpText: null,
        superPowers: [
            {
                name: 'Accuse',
                anyTurn: false,
                phase: 'Main',
                cost: ['Intellect'],
                text: 'Name any card. Choose an enemy player to reveal their hand and discard each card with that name.',
            },
        ],
        keyWords: [],
    },
    {
        set: 'MNB',
        cardNumber: 88,
        _id: 'MNB-88',
        name: 'Mystique',
        isMC: false,
        level: null,
        cost: 2,
        atk: 2,
        def: 4,
        health: 1,
        hasFlight: false,
        hasRange: false,
        affiliation: 'Villains',
        levelUpText: null,
        superPowers: [
            {
                name: 'Impersonate',
                anyTurn: false,
                phase: 'Main',
                cost: ['Skill'],
                text: "Choose another face-up character. Mystique's base ATK and DEF become the same as that character's current ATK and DEF for the rest of this turn. (She'll still be affected by any +1/+1 or -1/-1 counters she has.)",
            },
        ],
        keyWords: [],
    },
    {
        set: 'MNB',
        cardNumber: 92,
        _id: 'MNB-92',
        name: 'Sabretooth',
        isMC: false,
        level: null,
        cost: 4,
        atk: 4,
        def: 4,
        health: 2,
        hasFlight: false,
        hasRange: false,
        affiliation: 'Villains',
        levelUpText: null,
        superPowers: [],
        keyWords: [
            {
                name: 'Ferocious',
                text: 'During melee combat, he strikes before enemy characters',
            },
            {
                name: 'Berserker',
                text: 'When he attacks, put a +1/+1 counter on him.',
            },
        ],
    },
    {
        set: 'MNB',
        cardNumber: 97,
        _id: 'MNB-97',
        name: 'Maagneto',
        isMC: false,
        level: null,
        cost: 6,
        atk: 7,
        def: 6,
        health: 1,
        hasFlight: true,
        hasRange: true,
        affiliation: 'Villains',
        levelUpText: null,
        superPowers: [],
        keyWords: [
            {
                name: 'Magnetic Suppression',
                text: "Enemy supporting characters can't recover. They remain stunned",
            },
        ],
    },
]
