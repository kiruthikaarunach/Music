import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

// Sample data for images and descriptions
const images = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/300',
    description: 'Description for Image 1',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/300',
    description: 'Description for Image 2',
  },
  {
    id: 3,
    imageUrl: 'https://via.placeholder.com/300',
    description: 'Description for Image 3',
  },
  {
    id: 4,
    imageUrl: 'https://via.placeholder.com/300',
    description: 'Description for Image 4',
  },
];

// Styled components for consistent styling
const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Home = () => {
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to My Home Page
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <StyledCard>
              <CardMedia component="img" height="140" image={image.imageUrl} alt={`Image ${image.id}`} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Image {image.id}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {image.description}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
