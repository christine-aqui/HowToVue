<template>
  <ul>
  <VideoListItem></VideoListItem>
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