<script>
 import S from './stores.js';
 import HTMLVideo from './HTMLVideo.svelte';
 const l = console.log;
 const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms)) 
 let videoLoadError,isVideoLoading,videoURL;
 S.videoLoadError.subscribe(nv => videoLoadError=nv);
 S.isVideoLoading.subscribe(nv => isVideoLoading=nv);
 S.videoURL.subscribe(nv => videoURL=nv);
 const getVideo = async () => {
     S.videoLoadError.set(false);
     S.isVideoLoading.set(true);
     try {
	 const iserr = (Math.random()<=0.2);
	 if (iserr) throw new Error('could not load video');
	 await sleep(Math.random()*10*1000);
	 S.videoURL.set("http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4");
     } catch (err) {
	 S.videoLoadError.set(true);
     }
     S.isVideoLoading.set(false);
  }
</script>
<main>
    {#if videoLoadError}
	<div class='err'>ERROR</div>
    {:else}
	<HTMLVideo url={videoURL}/>
    {/if}
    <button
	disabled={isVideoLoading}
	on:click={getVideo}>load video</button>
</main>
<style>
 .err { color:red;}
</style>
