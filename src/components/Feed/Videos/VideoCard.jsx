import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../../../utils/constants'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({ video }) => {
    const { id: { videoId }, snippet } = video
    return (
        <Card 
        sx={{
            width:{xs:'100%' ,sm:'350px',md:'350px'},
            boxShadow:'none',
            borderRadius:0,
            // p:{xs:1,md:0}
        }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet.thumbnails.high.url}
                    alt={snippet.tittle}
                    sx={{ width: 380, height: 180 }}
                />
            </Link>
            <CardContent
                sx={{
                    height: '106px',
                    background: '#1e1e1e'
                }}
            >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1'
                        color='#FFF'
                        fontWeight='bold'
                    >

                        {snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}

                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle1'
                        color='#FFF'
                        fontWeight='bold'
                    >
                        {
                            snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)
                        }
                         <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard