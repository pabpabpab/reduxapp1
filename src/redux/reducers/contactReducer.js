import appConst from './../../functions/getConstants';
import startContacts from './../../data/contactsFromServer';

const initialState = {
    contacts: startContacts,
    correspondentId: 0, // текущий собеседник
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case appConst.DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((item) => item.userId !== action.payload),
            };
        case appConst.ADD_CONTACT:
            const newContact = {
                userId: Date.now(),
                nick: action.payload,
            };
            return {
                ...state,
                contacts: [...state.contacts, newContact]
            };
        case appConst.SET_CORRESPONDENT_ID:
            return {
                ...state,
                correspondentId: action.payload,
            };
        default:
            return state;
    }
}

export default contactReducer;