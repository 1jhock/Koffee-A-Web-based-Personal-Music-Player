$(document).ready(function(){$('[data-toggle="tooltip"]').tooltip(),$("body").tooltip({selector:'[data-toggle="tooltip"]'}),$(".hidden-playlists").hide(),$("#timer").hide(),$("#recommendations-container").hide(),$("#discovery-container").hide(),$("#chartjs").hide(),$("#playing-playlist").hide(),$("#trend-container").hide();var t,e=[];PlayerUI={cache:{playingTitle:$("#playing"),playingArtist:$("#artist"),albumArt:$("#album-art"),audio:$("#audio")[0]},isFullScreen:!1,isNightMode:!1,disableControl:!0,currentSong:{songIndex:0,shuffle:!1,repeat:!1,currentPlayingPlaylist:null,playlistType:["pl","mp","rc","ds","ch","sc"]},changeBackground:function(){var t=getAverageRGB(document.getElementById("album-art"));$("html, body").css({background:"linear-gradient(to bottom, rgba("+t.r+","+t.g+","+t.b+", 100), white)",transition:"all 0.7s ease-in"})},updatePlaying:function(t,e,r,a){initControl(),$("source").attr("src",a),this.cache.albumArt.attr("src",r),this.cache.playingTitle.text(t),this.cache.playingArtist.text(e),this.cache.audio.load(),this.cache.audio.play(),$("#play").html('<i class="fa fa-pause"></i>'),$("title").text("Now Playing: "+t),setTimeout(function(){$("#count-song").trigger("submit")},1e3)},next:function(){switch(this.isFullScreen?setTimeout(this.changeBackground,1e3):setTimeout(function(){$("html, body").css({background:"white"})},1e3),this.currentSong.shuffle?this.currentSong.songIndex=Math.floor(Math.random()*e.length)+1:this.currentSong.songIndex+=1,this.currentSong.songIndex==e.length&&(this.currentSong.songIndex=0),this.currentSong.currentPlayingPlaylist){case"pl":PlayerUI.updatePlaying($("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").next().find("input#hidden-title").val(),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").siblings(":eq(1)").text(),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").next().find("input#hidden-album").val(),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").attr("href")),$("#cur-title").attr("value",$.trim($("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").next().text())),$("#cur-artist").attr("value",$.trim($("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").siblings(":eq(1)").text()));break;case"mp":var r=$(".most-played-thumb:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-title"),a=$(".most-played-thumb:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-artist"),n=$("td:contains("+r+")").prev("td").find("a").attr("href"),i=$("td:contains("+r+")").find("input#hidden-album").attr("value");$("#cur-title").attr("value",r),$("#cur-artist").attr("value",a),PlayerUI.updatePlaying(r,a,i,n),$("#cur-title").attr("value",r),$("#cur-artist").attr("value",r);break;case"rc":var r=$(".play-btn:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-title"),a=$(".play-btn:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-artist"),n=$("td").filter(function(){return $.trim($(this).text())==r}).prev("td").find("a").attr("href"),i=$("td").filter(function(){return $.trim($(this).text())==r}).find("input#hidden-album").attr("value");PlayerUI.updatePlaying(r,a,i,n),$("#cur-title").attr("value",r),$("#cur-artist").attr("value",r);break;case"ds":var r=$(".play-btn:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-title"),a=$(".play-btn:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-artist"),n=$("td").filter(function(){return $.trim($(this).text())==r}).prev("td").find("a").attr("href"),i=$("td").filter(function(){return $.trim($(this).text())==r}).find("input#hidden-album").attr("value");PlayerUI.updatePlaying(r,a,i,n),$("#cur-title").attr("value",r),$("#cur-artist").attr("value",a);break;case"ch":var n=e[PlayerUI.currentSong.songIndex],r=$("a").filter(function(){return $.trim($(this).attr("href"))==n}).parent().next("td").find("input#hidden-title").attr("value"),i=$("a").filter(function(){return $.trim($(this).attr("href"))==n}).parent().next("td").find("input#hidden-album").attr("value"),a=$.trim($("a").filter(function(){return $.trim($(this).attr("href"))==n}).parent().next("td").next("td").text());PlayerUI.updatePlaying(r,a,i,n),$("#cur-title").attr("value",r),$("#cur-artist").attr("value",a)}$("#"+t).find("a.music-entry").html('<i class="fa fa-play"></i>'),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").html('<i class="fa fa-volume-up"></i>'),$("#"+t).find("a.music-entry").parent().parent("tr").removeClass("row-active"),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").parent().parent("tr").addClass("row-active")},prev:function(){switch(this.isFullScreen?setTimeout(this.changeBackground,1e3):setTimeout(function(){$("html, body").css({background:"white"})},1e3),this.currentSong.songIndex-=1,this.currentSong.songIndex<0&&(this.currentSong.songIndex=e.length-1),this.currentSong.currentPlayingPlaylist){case"pl":PlayerUI.updatePlaying($("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").next().find("input#hidden-title").val(),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").siblings(":eq(1)").text(),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").next().find("input#hidden-album").val(),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").attr("href")),$("#cur-title").attr("value",$.trim($("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").next().text())),$("#cur-artist").attr("value",$.trim($("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").siblings(":eq(1)").text()));break;case"mp":var r=$(".most-played-thumb:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-title"),a=$(".most-played-thumb:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-artist"),n=$("td:contains("+r+")").prev("td").find("a").attr("href"),i=$("td:contains("+r+")").find("input#hidden-album").attr("value");$("#cur-title").attr("value",r),$("#cur-artist").attr("value",a),PlayerUI.updatePlaying(r,a,i,n),$("#cur-title").attr("value",r),$("#cur-artist").attr("value",r);break;case"rc":var r=$(".play-btn:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-title"),a=$(".play-btn:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-artist"),n=$("td").filter(function(){return $.trim($(this).text())==r}).prev("td").find("a").attr("href"),i=$("td").filter(function(){return $.trim($(this).text())==r}).find("input#hidden-album").attr("value");PlayerUI.updatePlaying(r,a,i,n),$("#cur-title").attr("value",r),$("#cur-artist").attr("value",r);break;case"ds":var r=$(".play-btn:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-title"),a=$(".play-btn:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-artist"),n=$("td").filter(function(){return $.trim($(this).text())==r}).prev("td").find("a").attr("href"),i=$("td").filter(function(){return $.trim($(this).text())==r}).find("input#hidden-album").attr("value");PlayerUI.updatePlaying(r,a,i,n),$("#cur-title").attr("value",r),$("#cur-artist").attr("value",a);break;case"ch":var n=e[PlayerUI.currentSong.songIndex],r=$("a").filter(function(){return $.trim($(this).attr("href"))==n}).parent().next("td").find("input#hidden-title").attr("value"),i=$("a").filter(function(){return $.trim($(this).attr("href"))==n}).parent().next("td").find("input#hidden-album").attr("value"),a=$.trim($("a").filter(function(){return $.trim($(this).attr("href"))==n}).parent().next("td").next("td").text());PlayerUI.updatePlaying(r,a,i,n),$("#cur-title").attr("value",r),$("#cur-artist").attr("value",a)}$("#"+t).find("a.music-entry").html('<i class="fa fa-play"></i>'),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").html('<i class="fa fa-volume-up"></i>'),$("#"+t).find("a.music-entry").parent().parent("tr").removeClass("row-active"),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").parent().parent("tr").addClass("row-active")}},initControl(),$("#next").on("click",function(t){PlayerUI.next(),t.preventDefault()}),$("#prev").on("click",function(t){PlayerUI.prev(),t.preventDefault()}),$("a.music-entry").on("click",function(r){PlayerUI.disableControl=!1,PlayerUI.currentSong.songIndex=e.indexOf($(this).attr("href")),PlayerUI.updatePlaying($("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").next().find("input#hidden-title").val(),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").siblings(":eq(1)").text(),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").next().find("input#hidden-album").val(),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").attr("href")),setPlayingPlaylist(PlayerUI.currentSong.playlistType[0],$("#selected-playlist").text()),$("#"+t).find("a.music-entry").html('<i class="fa fa-play"></i>'),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").html('<i class="fa fa-volume-up"></i>'),$("#"+t).find("a.music-entry").parent().parent("tr").removeClass("row-active"),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").parent().parent("tr").addClass("row-active"),$("#cur-title").attr("value",$.trim($("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").next().text())),$("#cur-artist").attr("value",$.trim($("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").siblings(":eq(1)").text())),r.preventDefault()}),$("a.folder-playlist").on("click",function(r){e=[],t=$(this).attr("href"),hideEmptyPlaylist(t),Array.from($("#"+t).find("a.music-entry")).forEach(function(t,r){e.push(t.getAttribute("href"))}),PlayerUI.currentSong.currentPlayingPlaylist=PlayerUI.currentSong.playlistType[0],$("#playlist-title").html('<span id="selected-playlist">'+$(this).text()+"</span>"),$(this).addClass("side-list-active"),$(".folder-playlist").removeClass("side-list-active"),toggleHideplaylist($("#"+$(this).attr("href")),[$("#trend-container"),$(".hidden-playlists"),$("#recommendations-container"),$("#discovery-container"),$("#placeholder"),$("#chartjs")]),r.preventDefault()}),$("#recommendations").click(function(t){$("#playlist-title").html('<span id="selected-playlist">Recommendations</span>'),toggleHideplaylist($("#recommendations-container"),[$("#trend-container"),$(".hidden-playlists"),$("#discovery-container"),$("#placeholder"),$("#chartjs")]),t.preventDefault()}),$("#discovery").click(function(t){$("#playlist-title").html('<span id="selected-playlist">Discover Songs</span>'),toggleHideplaylist($("#discovery-container"),[$("#trend-container"),$(".hidden-playlists"),$("#recommendations-container"),$("#placeholder"),$("#chartjs")]),t.preventDefault()}),$("#top-fifteen").click(function(t){$("#playlist-title").html('<span id="selected-playlist">Most played songs Chart</span>'),toggleHideplaylist($("#chartjs"),[$("#trend-container"),$(".hidden-playlists"),$("#recommendations-container"),$("#discovery-container"),$("#placeholder"),$("#placeholder")]),t.preventDefault()}),$("#trend").click(function(t){$("#playlist-title").html('<span id="selected-playlist">Most played songs Chart</span>'),toggleHideplaylist($("#trend-container"),[$("#chartjs"),$(".hidden-playlists"),$("#recommendations-container"),$("#discovery-container"),$("#placeholder"),$("#placeholder")]),t.preventDefault()}),$("#search-btn").click(function(t){PlayerUI.disableControl=!0;var r=$("#search-song");if(""!=$("#search-song").val()){PlayerUI.currentSong.currentPlayingPlaylist=PlayerUI.currentSong.playlistType[5],setPlayingPlaylist(PlayerUI.currentSong.playlistType[5]),$("#playlist-title").html('<span id="selected-playlist">Playing fro search</span>');var a=r.val(),n=r.attr("data-artist"),i=r.attr("data-album-art"),l=$("td").filter(function(){return $.trim($(this).text())==a}).prev("td").find("a").attr("href");PlayerUI.currentSong.songIndex=e.indexOf(l),$("#cur-title").attr("value",a),$("#cur-artist").attr("value",n),PlayerUI.updatePlaying(a,n,i,l)}else $("#trend-search").attr("style","border: 1px solid red !important");t.preventDefault()}),$("#most-played").on("click",".most-played-thumb",function(t){PlayerUI.disableControl=!1,e=[],Array.from($(".most-played-thumb")).forEach(function(t,r){e.push($("td:contains("+t.getAttribute("data-title")+")").prev("td").find("a").attr("href"))}),PlayerUI.currentSong.currentPlayingPlaylist=PlayerUI.currentSong.playlistType[1],setPlayingPlaylist(PlayerUI.currentSong.playlistType[1]);var r=$(this).attr("data-title"),a=$(this).attr("data-artist"),n=$("td").filter(function(){return $.trim($(this).text())==r}).prev("td").find("a").attr("href"),i=$("td").filter(function(){return $.trim($(this).text())==r}).find("input#hidden-album").attr("value");PlayerUI.currentSong.songIndex=e.indexOf(n),$("#cur-title").attr("value",r),$("#cur-artist").attr("value",a),PlayerUI.updatePlaying(r,a,i,n)}),$("#recommendations-body").on("click",".play-btn",function(t){PlayerUI.disableControl=!1,e=[],Array.from($("#recommendations-body").find(".play-btn")).forEach(function(t,r){e.push($("td:contains("+t.getAttribute("data-title")+")").prev("td").find("a").attr("href"))}),PlayerUI.currentSong.currentPlayingPlaylist=PlayerUI.currentSong.playlistType[2],setPlayingPlaylist(PlayerUI.currentSong.playlistType[2]);var r=$(this).attr("data-title"),a=$(this).attr("data-artist"),n=$("td").filter(function(){return $.trim($(this).text())==r}).prev("td").find("a").attr("href"),i=$("td").filter(function(){return $.trim($(this).text())==r}).find("input#hidden-album").attr("value");PlayerUI.currentSong.songIndex=e.indexOf(n),$("#cur-title").attr("value",r),$("#cur-artist").attr("value",a),PlayerUI.updatePlaying(r,a,i,n)}),$("#discovery-body").on("click",".play-btn",function(t){PlayerUI.disableControl=!1,e=[],Array.from($("#discovery-body").find(".play-btn")).forEach(function(t,r){e.push($("td:contains("+t.getAttribute("data-title")+")").prev("td").find("a").attr("href"))}),PlayerUI.currentSong.currentPlayingPlaylist=PlayerUI.currentSong.playlistType[3],setPlayingPlaylist(PlayerUI.currentSong.playlistType[3]);var r=$(this).attr("data-title"),a=$(this).attr("data-artist"),n=$("td").filter(function(){return $.trim($(this).text())==r}).prev("td").find("a").attr("href"),i=$("td").filter(function(){return $.trim($(this).text())==r}).find("input#hidden-album").attr("value");PlayerUI.currentSong.songIndex=e.indexOf(n),$("#cur-title").attr("value",r),$("#cur-artist").attr("value",a),PlayerUI.updatePlaying(r,a,i,n)}),$("#audio")[0].onended=function(){switch(PlayerUI.currentSong.shuffle?PlayerUI.currentSong.songIndex=Math.floor(Math.random()*e.length)+1:PlayerUI.currentSong.songIndex+=1,PlayerUI.currentSong.songIndex==e.length&&(PlayerUI.currentSong.songIndex=0),PlayerUI.currentSong.currentPlayingPlaylist){case"pl":PlayerUI.updatePlaying($("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").next().find("input#hidden-title").val(),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").siblings(":eq(1)").text(),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").next().find("input#hidden-album").val(),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").attr("href")),$("#cur-title").attr("value",$.trim($("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").next().text())),$("#cur-artist").attr("value",$.trim($("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").closest("td").siblings(":eq(1)").text()));break;case"mp":var r=$(".most-played-thumb:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-title"),a=$(".most-played-thumb:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-artist"),n=$("td:contains("+r+")").prev("td").find("a").attr("href"),i=$("td:contains("+r+")").find("input#hidden-album").attr("value");$("#cur-title").attr("value",r),$("#cur-artist").attr("value",a),PlayerUI.updatePlaying(r,a,i,n),$("#cur-title").attr("value",r),$("#cur-artist").attr("value",r);break;case"rc":var r=$(".play-btn:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-title"),a=$(".play-btn:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-artist"),n=$("td").filter(function(){return $.trim($(this).text())==r}).prev("td").find("a").attr("href"),i=$("td").filter(function(){return $.trim($(this).text())==r}).find("input#hidden-album").attr("value");PlayerUI.updatePlaying(r,a,i,n),$("#cur-title").attr("value",r),$("#cur-artist").attr("value",r);break;case"ds":var r=$(".play-btn:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-title"),a=$(".play-btn:eq("+[PlayerUI.currentSong.songIndex]+")").attr("data-artist"),n=$("td").filter(function(){return $.trim($(this).text())==r}).prev("td").find("a").attr("href"),i=$("td").filter(function(){return $.trim($(this).text())==r}).find("input#hidden-album").attr("value");PlayerUI.updatePlaying(r,a,i,n),$("#cur-title").attr("value",r),$("#cur-artist").attr("value",a);break;case"ch":var n=e[PlayerUI.currentSong.songIndex],r=$("a").filter(function(){return $.trim($(this).attr("href"))==n}).parent().next("td").find("input#hidden-title").attr("value"),i=$("a").filter(function(){return $.trim($(this).attr("href"))==n}).parent().next("td").find("input#hidden-album").attr("value"),a=$.trim($("a").filter(function(){return $.trim($(this).attr("href"))==n}).parent().next("td").next("td").text());PlayerUI.updatePlaying(r,a,i,n),$("#cur-title").attr("value",r),$("#cur-artist").attr("value",a)}$("#"+t).find("a.music-entry").html('<i class="fa fa-play"></i>'),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").html('<i class="fa fa-volume-up"></i>'),$("#"+t).find("a.music-entry").parent().parent("tr").removeClass("row-active"),$("#"+t).find("a.music-entry:eq("+[PlayerUI.currentSong.songIndex]+")").parent().parent("tr").addClass("row-active")};var r;$("#zoom").click(function(){PlayerUI.isFullScreen=!1,$("#player").toggleClass("zoom-player"),$("#album-art").toggleClass("album-art-zoom"),$("#zoom").toggleClass("control-activate"),$("#side").toggleClass("zoom-side"),$(".container").toggleClass("container-zoom"),$(".control-widget").attr("data-placement","top"),r?(PlayerUI.isNightMode?$("html, body").css({background:"rgba(255, 248, 225, 0.2"}):$("html, body").css({background:"white"}),r=$("#volume-control > .fa").removeClass("volume-zoom-mode"),r=$("#playing-playlist").removeClass("playing-playlist-inverse"),r=$("#side").removeClass("full-screen-ver"),r=$("nav").show(),r=$("#track-lists").show(),r=$("#recommendations").show(),r=$("#full-screen-player").removeClass("full-screen-activate"),r=null):(PlayerUI.isFullScreen=!0,PlayerUI.isFullScreen?setTimeout(PlayerUI.changeBackground,1e3):setTimeout(function(){$("html, body").css({background:"white"})},1e3),r=$("#playing-playlist").addClass("playing-playlist-inverse"),r=$("#volume-control > .fa").addClass("volume-zoom-mode"),r=$("#side").addClass("full-screen-ver"),r=$("#recommendations").hide(),r=$("nav").hide(),r=$("#track-lists").hide(),r=$("html, body").addClass("full-screen-color"),r=$("#full-screen-player").addClass("full-screen-activate"))});var a;$("#repeat").click(function(){$(this).toggleClass("control-activate"),a?(PlayerUI.currentSong.repeat=!1,a=PlayerUI.currentSong.repeat,a=null):(PlayerUI.currentSong.repeat=!0,a=PlayerUI.currentSong.repeat),$("audio")[0].loop=PlayerUI.currentSong.repeat});var n;$("#chill-mode").click(function(){if(PlayerUI.disableControl=!1,$(this).toggleClass("control-activate"),n)alert("nope"),n="decoy",n=null;else{n="decoy",e=[],Array.from($("a.music-entry")).forEach(function(t,r){e.push(t.getAttribute("href"))}),PlayerUI.currentSong.currentPlayingPlaylist=PlayerUI.currentSong.playlistType[4],setPlayingPlaylist(PlayerUI.currentSong.playlistType[4]);var t=e[0],r=$("a").filter(function(){return $.trim($(this).attr("href"))==t}).parent().next("td").find("input#hidden-title").attr("value"),a=$("a").filter(function(){return $.trim($(this).attr("href"))==t}).parent().next("td").find("input#hidden-album").attr("value"),i=$.trim($("a").filter(function(){return $.trim($(this).attr("href"))==t}).parent().next("td").next("td").text());PlayerUI.currentSong.songIndex=e.indexOf(t),$("#cur-title").attr("value",r),$("#cur-artist").attr("value",i),PlayerUI.updatePlaying(r,i,a,t)}});var i;$("#shuffle").click(function(){$(this).toggleClass("control-activate"),i?(PlayerUI.currentSong.shuffle=!1,i=PlayerUI.currentSong.shuffle,i=null):(PlayerUI.currentSong.shuffle=!0,i=PlayerUI.currentSong.shuffle)});var l;$("#dark-mode").click(function(){$(this).toggleClass("control-activate"),l?(PlayerUI.isNightMode=!1,l=$("#volume-control > .fa").removeClass("volume-zoom-mode"),l=$("#side").removeClass("dark-mode-control"),l=$("html, body").css({"background-color":"white"}),l=null):(l=$("#volume-control > .fa").addClass("volume-zoom-mode"),l=$("#side").addClass("dark-mode-control"),l=$("html, body").css({"background-color":"rgba(255, 204, 153, 0.1)"}),PlayerUI.isNightMode=!0)}),$("a.list-group-item").click(function(t){t.preventDefault()})});