import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../../../../utils/fetchApiData';
import { Box } from '@mui/material';
import ChannelCard from './ChannelCard';
import Videos from '../Videos';

const ChannelDetails = () => {
    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState(null);

    const { channelId } = useParams();
    console.log('isi', channelId)

    useEffect(() => {
        const fetchResults = async () => {
            const data = await fetchDataFromApi(`channels?part=snippet&id=${channelId}`);
            console.log('dat', data)
            setChannelDetail(data?.items[0]);

            const videosData = await fetchDataFromApi(`search?channelId=${channelId}&part=snippet&order=date`);
            console.log('vide', videosData)
            setVideos(videosData?.items);
        };

        fetchResults();
    }, [channelId]);

    return (
        <Box minHeight="95vh">
            {
                channelDetail && videos &&

                <Box>
                    <Box>
                        <div style={{
                            height: '300px',
                            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                            zIndex: 10,
                        }} />
                        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
                    </Box>
                    <Box p={2} display="flex">
                        <Box sx={{ mr: { sm: '100px' } }} />
                        <Videos videos={videos} />
                    </Box>
                </Box>
            }

        </Box>
    )
}

export default ChannelDetails