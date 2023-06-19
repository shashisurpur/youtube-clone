import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './Channels/ChannelCard'
import Loader from '../../Loader/Loader'

const Videos = ({ videos, direction }) => {
    console.log('pr', videos)

    if (!videos?.length) return <Loader />


    return (
        <Stack direction={direction || 'row'}
            flexWrap='wrap'
            justifyContent='start'
            gap={2}
        >
            {
                videos.map((video, ind) => (
                    <Box key={ind}>
                        {video?.id?.videoId && <VideoCard video={video} />}
                        {video?.id?.channelId && <ChannelCard channelDetail={video} />}

                    </Box>
                ))

            }
        </Stack>
    )
}

export default Videos