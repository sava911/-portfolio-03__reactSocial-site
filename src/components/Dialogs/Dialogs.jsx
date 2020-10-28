import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className='dialogs'>
            <div className="dialogs-items">
                <div className={s.dialog}>bot 1</div>
                <div className={s.dialog}>bot 2</div>
                <div className={s.dialog}>bot 3</div>
                <div className={s.dialog}>bot 4</div>
                <div className={s.dialog}>bot 5</div>
                <div className={s.dialog}>bot 6</div>
            </div>
            <div className="massages">
                <div className="massage">hi</div>
                <div className="massage">massage massage</div>
                <div className="massage">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus aliquam aperiam assumenda beatae consequatur cum dolore eligendi eveniet excepturi harum, inventore maxime nihil nulla similique temporibus veniam voluptas voluptate?</div>
            </div>
        </div>
    )
}

export default Dialogs;