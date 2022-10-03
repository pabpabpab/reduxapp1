import React from 'react';
import {useDispatch} from 'react-redux';
import appConst from './../functions/getConstants';
import useInput from '../myHooks/useInput';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const AddContact = () => {
    const dispatch = useDispatch();

    // объект textInput
    const textInput = useInput('');

    // при нажатии на кнопку Add
    const doAddContact = (e) => {
        e.preventDefault();
        const userName = textInput.value;
        textInput.clear();
        dispatch({type: appConst.ADD_CONTACT, payload: userName});
    }

    return (
        <form onSubmit={doAddContact} className={'add-contact'}>
            <TextField
                {...textInput.bind}
                id="outlined-basic"
                variant="outlined"
                sx={{
                    backgroundColor: '#fff',
                }}/>
            <Button
                type="submit"
                variant="contained"
                size="small">
                Add
            </Button>
        </form>
    );

};

export default AddContact;