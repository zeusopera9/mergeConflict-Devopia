import React, { useState } from 'react';

const VideoPlayer = () => {
    // Function to extract video ID from YouTube URL
    const getVideoId = (url) => {
        const regex = /[?&]([^=#]+)=([^&#]*)/g;
        let match;
        while ((match = regex.exec(url))) {
            if (match[1] === 'v') {
                return match[2];
            }
        }
        return null; // Return null if no video ID found
    };

    // YouTube video URL
    const youtubeURL = 'https://www.youtube.com/watch?v=bnu4f7tl7Og&list=PLU_DCVXL8MyNPt-0lIubvzFaJW3gf6fxd&index=1';

    // Get video ID from URL
    const [youtubeID] = useState(getVideoId(youtubeURL));

    return (
        <div>
            <h2 style={{margin: '2%'}}>Algebra Grade 9</h2>
            {youtubeID && (
                <iframe
                    className='video'
                    title='Youtube player'
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
                    width='800'
                    height='450'
                />
            )}
        </div>
    );
};

export default VideoPlayer;
