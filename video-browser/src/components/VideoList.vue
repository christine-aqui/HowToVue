// v-for="video in videos" ... think of a foreach...
<template>
  <ul class='list-group'>
    <VideoListItem
    v-for="video in videos"
    :video="video"
    :key="video.etag"
    ></VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem';


export default {
  name: 'VideoList',
  components: {
    VideoListItem,
  },
  props: {
    videos: Array
    // this videos is the property being passed down by the parent "App.vue"
    //  is al also checking that that videos passed is an array.
  }
  // ['videos'],
};
</script>

<style>

</style>