import React from 'react';
import {useSelector} from 'react-redux';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import { getContacts } from './../redux/selectors';

const Contacts = () => {
    const contacts = useSelector(
        getContacts,
        (prev, next) => prev.length === next.length
    );

    return (
        <div className="contacts">
            {
                contacts.map((contact) => {
                    return (
                        <ContactItem
                            contact={contact}
                            key={contact.id}
                        />
                    )
                })
            }
        </div>
    );
};

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
}

export default Contacts;