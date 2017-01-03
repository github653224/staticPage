function music(id) {
	var btn = document.getElementById("audio_btn").className;
	if(btn.indexOf("off")>0){
		document.getElementById("audio_btn").outerHTML = "<div id=\"audio_btn\" class=\"video_exist play_yinfu\" style=\"display: block;\" onclick=\"music('audio_btn')\"> <div id=\"yinfu\" class=\"rotate\"></div> <audio loop=\"\" src=\"./static/images/bj.mp3\" id=\"media\" autoplay=\"\" preload=\"\"></audio></div>";
		document.getElementById("media").play();
	}else{
		document.getElementById("audio_btn").outerHTML = "<div id=\"audio_btn\" class=\"video_exist off\" style=\"display: block;\" onclick=\"music('audio_btn')\"> <div id=\"yinfu\" class=\"\"></div> <audio loop=\"\" src=\"./static/images/bj.mp3\" id=\"media\" autoplay=\"\" preload=\"\"></audio></div>";
		document.getElementById("media").pause();
	}
}
	