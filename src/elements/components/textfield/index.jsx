import React, { useState } from 'react';
import './style.css';
import Button from '../button';

export default function Textfield(props) {
    const handleButtonClick = () => {
        return
    }
    return (
        <>
            <div id='textfield-container'>
                <input
                    type='text'
                    id='input-textfield'
                    autoComplete='off'
                    placeholder='Today I feel...'
                />
                <Button style={{ border: 'none' }}>
                    <img className='button-icon' src={"/button-icons/paper-plane-solid-black.svg"} alt='Envie' />
                </Button>
            </div>
        </>
    );
}
