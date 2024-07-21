// src/components/YouTubeRow.js

import React, { useEffect, useState } from 'react';
import { getVideos } from '../api/youtube';
import { Card, CardContent, Typography } from '@mui/material';
import styled from '@emotion/styled';
import '../YouTubeRow.css';

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const CardItem = styled(Card)`
  width: calc(25% - 20px); /* Calculate width for 4 cards in a row with gap */
  padding: 10px;
  border: 2px solid #8c8814; /* Dark purple border */
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(145deg, #f8f7f9, #f3e5f5); /* Gradient background */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.03); /* Scale up slightly on hover */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); /* Larger shadow on hover */
  }
`;

const CardMedia = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out; /* Smooth transition effect */
  &:hover {
    transform: scale(1.1); /* Scale up on hover */
  }
`;

const VideoDetails = styled.div`
  width: 100%;
  padding: 10px; /* Adjust padding as needed */
`;

const Title = styled(Typography)`
  font-size: 1rem; /* Adjust font size as needed */
  font-weight: bold;
  margin-bottom: 8px;
  color: #06010b; /* Dark purple color for title */
`;

const YouTubeRow = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const videosData = await getVideos();
      setVideos(videosData);
    };

    fetchVideos();
  }, []);

  return (
    <CardWrapper>
      {videos.map((video, index) => (
        <CardItem key={index}>
          <CardMedia>
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Thumbnail
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} // Using YouTube thumbnail URL
                alt={video.title}
              />
            </a>
          </CardMedia>
          <VideoDetails>
            <Title variant="h6" component="div">
              {video.title}
            </Title>
          </VideoDetails>
        </CardItem>
      ))}
    </CardWrapper>
  );
};

export default YouTubeRow;
