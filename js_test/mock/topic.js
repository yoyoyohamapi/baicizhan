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
            desc: '主语',
            position: [10, 40],
            relates: [],
            visible: true
        },
        {
            key: 2,
            words: [
                {title: 'usually'},
                {title: 'broad'},
                {title: 'and'},
                {title: 'flat'}
            ],
            desc: '形容词后置, 扁而宽的树叶',
            position: [10, 120],
            relates: [1]
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
            desc: '谓语, 吸收能量',
            position: [10, 200],
            relates: [1]
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
            desc: '并列结构, 吸收二氧化碳',
            position: [10, 280],
            relates: [3]
        },
        {
            key: 5,
            words: [
                {title: 'to'}, {title: 'survive'}
            ],
            desc: '表目的, 以生存',
            position: [10, 360]
        }
    ]
};