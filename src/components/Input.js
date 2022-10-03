import React from 'react';
import useInput from '../myHooks/useInput';
import myData from '../data/myData';
import {useDispatch, useSelector} from 'react-redux';
import appConst from './../functions/getConstants';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {getCorrespondentId, getLastMsgId} from '../redux/selectors';


const Input = () => {
    const dispatch = useDispatch();
    const lastMsgId = useSelector(getLastMsgId);
    const correspondentId = useSelector(getCorrespondentId);

    // объект textInput
    const textInput = useInput('');

    // при нажатии на кнопку Send
    const doMessage = (e) => {
        e.preventDefault();
        const msg = {
            id: lastMsgId + 1,
            userId: myData.userId,
            toUserId: correspondentId,
            nick: myData.nick,
            text: textInput.value,
        };
        textInput.clear();
        dispatch({type: appConst.ADD_MESSAGE, payload: msg});
    }

    return (
        <form onSubmit={doMessage} className="input">
            <TextField
                {...textInput.bind}
                id="outlined-basic"
                variant="outlined"
                autoFocus
                sx={{
                    backgroundColor: '#fff',
                }}/>
            <Button
                type="submit"
                variant="contained"
                size="small">
                Send
            </Button>
        </form>
    );
}

export default Input;