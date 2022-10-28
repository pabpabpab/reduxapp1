import appConst from './getConstants';

export default function AddBotMessage(dispatch, toUserId, fromNick) {
    const botMsg = {
        id: Date.now(),
        userId: 0,
        toUserId: toUserId,
        nick: 'Bot',
        text: `Сообщение ${fromNick} отправлено`,
    }
    dispatch({type: appConst.ADD_MESSAGE_BY_BOT, payload: botMsg});
};