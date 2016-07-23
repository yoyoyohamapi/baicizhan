import topic from '../mock/topic';

export function getTopic(param, cb) {
    setTimeout(() => {
        cb(null, topic);
    }, 0);
}