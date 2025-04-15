var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to false");
	console.log("Loop is set to false");
});

// play video
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.getElementById("volume").innerText = document.getElementById("slider").value + "%";
	console.log("Play Video");
});

// pause video
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

// slow video
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	video.play();
	console.log("Slow down video");
	console.log("Speed is " + video.playbackRate);
});

// speed up video
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	video.play();
	console.log("Speed up video");
	console.log("Speed is " + video.playbackRate);
});

// skip video
document.querySelector("#skip").addEventListener("click", function() {
	if(video.duration - video.currentTime >= 10){
		video.currentTime += 10;
	}else{
		video.currentTime = 0;
	}
	video.play();
	console.log("Skip ahead");
	console.log("Video current time is " + video.currentTime);
});

// mute video
document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == false){
		video.muted = true;
		document.getElementById("mute").innerText = "Unmute";
		console.log("Mute");
	}else{
		video.muted = false;
		document.getElementById("mute").innerText = "Mute";
		console.log("Unmute");
	}
});

// change volume
document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.getElementById("slider").value / 100;
	document.getElementById("volume").innerText = document.getElementById("slider").value + "%";
	console.log("The current value is " + video.volume);
	console.log("<span id = 'volume'>" + video.volume * 100 + "%" + "</span>");
	document.getElementById("volume").innerText = video.volume * 100 + "%";
});

// vintage video style
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});
// origin video style
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});