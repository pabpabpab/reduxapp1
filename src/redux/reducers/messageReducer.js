import appConst from './../../functions/getConstants';
import startMessages from './../../data/messagesFromServer';
import packMessagesIntoMap from './../../functions/packMessagesIntoMap';
import addMsgIntoMap from './../../functions/addMsgIntoMap';
import deleteOneMessageFromMap from './../../functions/deleteOneMessageFromMap';

const initialState = {
    messages: packMessagesIntoMap(startMessages), // map-структура
    lastAction: '',
};

const messageReducer = (state = initialState, action) => {
    let newMessages;
    switch (action.type) {
        case appConst.ADD_MESSAGE:
            newMessages = addMsgIntoMap(state, action);
            return {
                ...state,
                messages: newMessages,
                lastAction: appConst.ADD_MESSAGE,
            }
        case appConst.ADD_MESSAGE_BY_BOT:
            newMessages = addMsgIntoMap(state, action);
            return {
                ...state,
                messages: newMessages,
                lastAction: appConst.ADD_MESSAGE_BY_BOT,
            }
        case appConst.DELETE_MESSAGE:
            newMessages = deleteOneMessageFromMap(state, action);
            return {
                ...state,
                messages: newMessages,
                lastAction: appConst.DELETE_MESSAGES_BY_USER_ID,
            };
        case appConst.DELETE_MESSAGES_BY_USER_ID:
            return {
                ...state,
                messages: state.messages.delete(action.payload),
                lastAction: appConst.DELETE_MESSAGES_BY_USER_ID,
            };
        default:
            return state;
    }
}

export default messageReducer;

