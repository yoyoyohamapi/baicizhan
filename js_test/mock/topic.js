/**
 * 题目仿真
 * @type {Array}
 */
export default {
    // 完整句子
    sentence: 'Leaves, usually broad and flat, take in energy from sunlight and carbon dioxide from the air to survive.',

    // 分块
    blocks: [
        {
            key: 1,
            words: [
                {title: 'Leaves'}
            ],
            desc: '树叶',
            position: [50, 150, 60, 195],
            relates: {},
            visible: true,
            sound: '/static/sound/1.m4a'
        },
        {
            key: 2,
            words: [
                {title: 'usually'},
                {title: 'broad'},
                {title: 'and'},
                {title: 'flat'}
            ],
            desc: '通常扁而宽',
            position: [100, 90, 325, 105],
            relates: {
                1: [[120, 150], [120, 128]] // key==>lines
            },
            sound: '/static/sound/2.m4a'
        },
        {
            key: 3,
            words: [
                {title: 'take'},
                {title: 'in'},
                {
                    title: 'energy',
                    highlight: true
                },
                {title: 'from'},
                {title: 'sunlight'}],
            desc: '从阳光中吸收能量',
            position: [150, 150, 170, 195],
            relates: {
                1: [[130, 170], [150, 170]] // key==>lines
            },
            sound: '/static/sound/3.m4a'
        },
        {
            key: 4,
            words: [
                {title: 'and'},
                {
                    title: 'carbon',
                    highlight: true
                },
                {
                    title: 'dioxide',
                    highlight: true
                },
                {title: 'from'},
                {title: 'the'},
                {title: 'air'}
            ],
            desc: '并从空气中吸收二氧化碳',
            position: [200, 235, 230, 270],
            relates: {
                3: [[170, 174], [170, 255], [200, 255]] // key ==> lines
            },
            sound: '/static/sound/4.m4a'
        },
        {
            key: 5,
            words: [
                {title: 'to'}, {title: 'survive'}
            ],
            desc: '来生存',
            position: [450, 150, 560, 155],
            relates: {
                3: [[418, 170], [450, 170]], // key==>lines
                4: [[435, 170], [435, 235]] // key==>lines
            },
            sound: '/static/sound/5.m4a'
        }
    ]
};