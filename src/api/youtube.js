// src/api/youtube.js

const API_KEY = 'AIzaSyDeeOpUB_gZ-Jqwk_3CnCkX_ksVf4gAA7c';
const CHANNEL_ID = 'UCn7DXjsdQFrx5SCSCWySoDw';


export const getVideos = async () => {
  let nextPageToken = '';
  const videos = [];

  do {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50&pageToken=${nextPageToken}`);
      const data = await response.json();

      if (data.items) {
        data.items.forEach(item => {
          if (item.id.videoId) {
            videos.push({
              id: item.id.videoId,
              title: item.snippet.title,
              description: item.snippet.description,
            });
          }
        });
        nextPageToken = data.nextPageToken;
      } else {
        console.error('No items found in response:', data);
        break;
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
      break;
    }
  } while (nextPageToken);

  return videos;
};
