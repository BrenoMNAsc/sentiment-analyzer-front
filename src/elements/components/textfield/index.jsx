import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css';
import Button from '../button';
import SentimentAnalyzer from '../../../services/sentimentHook';

export default function Textfield(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const sentiment = await SentimentAnalyzer(data.textfield);
        props.handleSentiment(sentiment);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div id='textfield-container'>
                    <input
                        {...register('textfield', { required: true })}
                        type='text'
                        id='input-textfield'
                        autoComplete='off'
                        placeholder='Today I feel...'
                    />
                    <Button type={'submit'} style={{ border: 'none' }}>
                        <img className='button-icon' src={"/button-icons/paper-plane-solid-black.svg"} alt='Envie' />
                    </Button>
                </div>
                {errors.textfield && <p className='error-message'>Este campo é obrigatório</p>}
            </div>

        </form>
    );
}
