import React from 'react';

import './post-form.styles.scss';

class PostForm extends React.Component {
    state = {
        section: '',
        category: '',
        partNumber: '',
        description: '',
        imgId: ''
    };

    render() {
        return(
            <form action='post' className='post-form'>
                <input type="text" className='post-form__input' name='section' placeholder='section' required />
                <input type="text" className='post-form__input' name='category' placeholder='category' required />
                <input type="text" className='post-form__input' name='partNumber' placeholder='partNumber' required />
                <input type="text" className='post-form__input' name='description' placeholder='description' required />
                <div className='post-form__img-container'>
                    <label htmlFor="imgId">Upload product image: </label>
                    <input type="file" className='post-form__input' name='imgId' placeholder='imgId' required />
                </div>
                <button type='submit' className='post-form__submit'>
                    Submit Entry
                </button>
            </form>    
        );
    }
}

export default PostForm;