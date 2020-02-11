import React, {Fragment} from 'react';

const InputBlocks = props => {
    return (
        <Fragment>
            <input className="author"
                   name="author"
                   type="text"
                   placeholder="Имя автора..."
                   onChange={props.onChangeAuthor}/>

            <input className="messages"
                   name="message"
                   type="text"
                   placeholder="Введите сообщение..."
                   onChange={props.onChangeMessage}/>
            <button onClick={props.onClick}>Отправить</button>
        </Fragment>
    );
};

export default InputBlocks;