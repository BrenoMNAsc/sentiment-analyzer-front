import React from 'react';
import './style.css'
import Button, { buttonTypes } from '../button';

export default function Textfield() {
    return (<>
        <div>
            <input type='text' id='input-textfield' placeholder='Digite uma frase para saber o sentimento dela!'>
            </input>
            <Button>
                <img className='button-icon' src={"/button-icons/paper-plane-solid-black.svg"} alt='Envie' />
            </Button>
        </div>


    </>)
}