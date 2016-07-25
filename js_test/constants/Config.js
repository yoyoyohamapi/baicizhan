// 拖动项配置
export const ItemTypes = {
    TEXT_DRAGGABLE: 'TEXT_DRAGGABLE'
};

// 其他配置
export const MAX_WRONG_COUNT = 2; // 最大错误次数

// 拖动正确与错误的加减分
export const RIGHT_SCORE = 1;
export const WRONG_SCORE = -1;

export const TIP_TIMEOUT = 300;

export const CandidateStatus = {
    COMPLETE: 'complete',
    CURRENT: 'current',
    PENDING: 'pending'
};

export const DashboardStatus = {
    NONE: '',
    NOTIFY: 'notify', // 提示正确,
    READY: 'ready', // 等待读取
    READING: 'reading' // READING状态
};