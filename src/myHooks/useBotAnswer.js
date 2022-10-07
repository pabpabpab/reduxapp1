import {useEffect, useMemo, useState} from 'react';
import appConst from '../data/constants';
import {useDispatch, useSelector} from 'react-redux';
import {getChatById, getCorrespondentId, getLastAction, getLastMsgId, getMsgCount} from '../redux/selectors';
import usePrevious from './usePrevious';

const useBotAnswer = () => {
    const dispatch = useDispatch();
    const msgCount = useSelector(getMsgCount);
    const correspondentId = useSelector(getCorrespondentId);
    const lastAction = useSelector(getLastAction);
    const lastMsgId = useSelector(getLastMsgId);

    const getSelectedChat = useMemo(() => getChatById(correspondentId), [correspondentId]);
    const currentMessages = useSelector(getSelectedChat);


    // обновление флага для useEffect, только когда кол-во сообщений становится больше
    const [updateFlag, setUpdateFlag] = useState(0);
    const prevMsgCount = usePrevious(msgCount);
    useEffect(() => {
        // console.log('prev - ', prevMsgCount);
        // console.log('new - ', msgCount);
        if (msgCount > prevMsgCount) {
            // console.log('update');
            setUpdateFlag(Date.now());
        }
    }, [prevMsgCount, msgCount]);


    useEffect(
        () => {
            // console.log('useEffect');

            if (!correspondentId) {
                return undefined;
            }

            if (!lastAction) {
                return undefined;
            }

            if (!msgCount) {
                return undefined;
            }

            if (!currentMessages) {
                return undefined;
            }

            if (!currentMessages?.length) {
                return undefined;
            }

            if (lastAction !== appConst.ADD_MESSAGE) {
                return undefined;
            }

            const lastMsg = currentMessages[currentMessages.length - 1];

            const botMsg = {
                id: lastMsgId + 1,
                userId: 0,
                toUserId: correspondentId,
                nick: 'Bot',
                text: `Сообщение ${lastMsg.nick} отправлено`,
            }

            setTimeout(() => {
                dispatch({type: appConst.ADD_MESSAGE_BY_BOT, payload: botMsg});
            }, 2000);
        },
        [updateFlag],
    );

}

export default useBotAnswer;

