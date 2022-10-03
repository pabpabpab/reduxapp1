export default function deleteOneMessageFromMap(state, action) {
    const map = state.messages;
    const {msgId, correspondentId} = action.payload;
    const key = correspondentId;
    if (map.has(key)) {
        const oldValue = map.get(key);
        const newValue = oldValue.filter((item) => item.id !== msgId);
        return map.set(key, newValue);
    }
    return map.get(key);
};