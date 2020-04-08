<script>
 import S from './stores.js';
 let P={};
 Object.entries(S).map(([k,v])=>v.subscribe(nv=>P[k]=nv));
 const l = console.log;
 let seekPercent;
 let loadPercent;
 const barWidth=300;
 const computeBuffered = (tr) =>  tr.map(x=>x.end-x.start).reduce((a,b)=>a+b,0)

 export let url;
 
 $: seekPercent = (P.seekProgress && P.duration) ? ((P.seekProgress/P.duration)) : 0;
 $: loadPercent = (P.loadProgress && P.duration) ? ((computeBuffered(P.loadProgress)/P.duration)):0;

</script>
<div><video
	 bind:duration={P.duration}
	 bind:currentTime={P.seekProgress}
	 bind:buffered={P.loadProgress}
	 bind:seekable={P.seekProgress}
	 autoPlay
	 muted
	 src={url}/>
    <div/>

    <div class='progressbar' style='width:{barWidth}px'>
	<div class='loadbar' style='width:{barWidth*loadPercent}px'/>
	<div class='seekbar' style='width:{barWidth*seekPercent}px'/>      
    </div>
</div>
<style>
 video {
     max-width:300px;
     max-height:300px;
 }
 .loadbar {
     background-color:lightgray;
     height:100%;
 }
 .seekbar {
     position:relative;
     top:-50px;
     background-color:green;
     height:50px;
     }
 .progressbar {
     background-color:gray;
     height:50px;
     }
</style>
