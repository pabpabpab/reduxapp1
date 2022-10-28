import { Route, Routes } from 'react-router-dom';

import Contacts from '../components/Contacts';
import Messages from '../components/Messages';
import NoChat from '../components/NoChat';
import InputContainer from '../components/InputContainer';

import ProfileTitle from '../components/ProfileTitle';
import AddContact from '../components/AddContact';



function MessengerPage() {
    return (
        <div className="messenger-app">
            <AddContact/>
            <Contacts/>
            <ProfileTitle/>
            <Routes>
                <Route index element={<NoChat/>}/>
                <Route path="chat/:chatId" element={<Messages/>}/>
            </Routes>
            <InputContainer/>
        </div>
    );
}

export default MessengerPage;