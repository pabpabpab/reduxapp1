import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomLink from './CustomLink';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import appConst from './../functions/getConstants';

const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteContact = (userId) => {
        dispatch({type: appConst.DELETE_CONTACT, payload: userId});
        dispatch({type: appConst.DELETE_MESSAGES_BY_USER_ID, payload: userId});
        dispatch({type: appConst.SET_CORRESPONDENT_ID, payload: 0});
        navigate("/messenger");
    };

    return (
        <div className={'contact-item'}>
            <CustomLink to={`/messenger/chat/${contact.userId}`}>
                {contact.nick}
            </CustomLink>
            <button
                onClick={() => handleDeleteContact(contact.userId)}
                className={'contact-item__delete-button'}>
                &#10006;
            </button>
        </div>
    );
};

ContactItem.propTypes = {
    message: PropTypes.shape({
        userId: PropTypes.number.isRequired,
        nick: PropTypes.string.isRequired,
    }),
}

export default ContactItem;
