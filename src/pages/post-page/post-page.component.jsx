import React from 'react';

import './post-page.styles.scss';

import PostForm from '../../components/post-form/post-form.component';

class PostPage extends React.Component {
    state = {

    };

    capturePostData = () => {

    }

    render() {
        return(
            <div className='post-page'>
                <PostForm capturePostData={this.capturePostData} />
            </div>
        );
    }
}

export default PostPage;