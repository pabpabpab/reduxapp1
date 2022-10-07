import appConst from '../../data/constants';
import startContacts from './../../data/contactsFromServer';

const initialState = {
    contacts: startContacts,
    correspondentId: 0, // текущий собеседник
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case appConst.SET_ALL_CONTACTS:
            return {
                ...state,
                contacts: [...action.payload],
            };
        case appConst.DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((item) => item.id !== action.payload),
            };
        case appConst.ADD_CONTACT:
            const newContact = {
                id: Date.now(),
                username: action.payload,
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