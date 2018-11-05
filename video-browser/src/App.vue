// ln5 note for v-bind:videos="videos".
// "videos" property on the right is the name of the property we shear as it exist in the parent.
//  videos= property on the left is the name we want to show up in the child.
//  v-bind will re-render any time videos on the parent is updated. this will update the child
//  note v-bind is the same as :
<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class='row'>
      <VideoDetail :video="selectedVideo" />
      <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail'


  export default {
    name: 'App',
    components: {
      SearchBar,
      VideoList,
      VideoDetail,
    },
    data() {
      return { videos: [] , selectedVideo: null };
    },
    methods: {
      onVideoSelect(video){
        // console.log(video);
        this.selectedVideo = video;
      },
      onTermChange(searchTerm) {
        // console.log(searchTerm);
        axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm
          }
        }).then(response => {
          this.videos = response.data.items
        });
      },
    }
  };
</script>