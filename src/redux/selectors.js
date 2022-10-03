export function getContacts(state) {
    return state.contacts.contacts;
}

export function getOneContact(userId) {
    return (state) => {
        const contacts = state.contacts.contacts;
        return contacts.find((item) => item.userId === userId);
    }
}

export function getCorrespondentId(state) {
    return state.contacts.correspondentId;
}

export function getLastAction(state) {
    return state.messages.lastAction;
}

export function getChatById(correspondentId) {
    return (state) => {
        const map = state.messages.messages;
        const key = +correspondentId;
        return map.has(key) ? map.get(key) : [];
    }
}

export function getLastMsgId(state) {
    const map = state?.messages?.messages;

    if (!map) {
        return 0;
    }

    if (!map.size) {
        return 0;
    }

    let allMsg = [];
    for (let value of map.values()) {
        allMsg = [ ...allMsg, ...value ];
    }

    let objectWithMaxId = allMsg.reduce(function(prev, cur) {
        return cur.id > prev.id ? cur : prev;
    },  {id: -1});

    return objectWithMaxId.id;
}

export function getMsgCount(state) {
    const map = state?.messages?.messages;

    if (!map) {
        return 0;
    }

    if (!map.size) {
        return 0;
    }

    let allMsg = [];
    for (let value of map.values()) {
        allMsg = [ ...allMsg, ...value ];
    }

    return allMsg.length;
}