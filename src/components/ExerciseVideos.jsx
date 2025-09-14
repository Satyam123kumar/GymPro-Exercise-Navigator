import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ExerciseVideos = ({exerciseVideos, name}) => {
  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
      Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
      {exerciseVideos?.slice(0, 3)?.map((item, index) => (       //slice is used to fetch only 1st 3 video
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"                                                //target and rel is used to show data in pop up window
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} 
            src={item.video.thumbnails[0].url} 
            alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography variant='h6' color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
          ))}
      </Stack>
      
    </Box>
  )
}

export default ExerciseVideos
