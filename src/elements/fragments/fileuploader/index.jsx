import React from 'react';
import './style.css';

export default function FileUploader() {
    return (
        <>
            <label id='input-file'>
                <input type="file" />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <article id='fileuploader-text'>
                        Import other text to discover a new
                        <span style={{ color: 'var(--mandaca-blue)' }}> sentiment</span>
                    </article>
                    <img className='sparkles-icon' src='/sparkles.svg' alt='Sparkles ***'></img>
                </div>

            </label>


        </>
    );
}
