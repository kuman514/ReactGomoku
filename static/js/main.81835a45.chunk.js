(this["webpackJsonpreact-gomoku"]=this["webpackJsonpreact-gomoku"]||[]).push([[0],{10:function(e,r,t){},12:function(e,r,t){"use strict";t.r(r);var n=t(1),c=t.n(n),a=t(4),i=t.n(a),o=(t(9),t(10),t(2)),u=t(0);var s=function(e){return Object(u.jsx)("div",{className:"Title",children:e.title})},l=[["LeftTopCorner","TopEdge","RightTopCorner"],["LeftEdge","InBoard","RightEdge"],["LeftBottomCorner","BottomEdge","RightBottomCorner"]];var f=function(e){var r=e.keyPos.split(",").map((function(e){return parseInt(e)})),t=Object(o.a)(r,2),n=t[0],c=t[1],a=l[0===n?0:18===n?2:1][0===c?0:18===c?2:1],i=e.tracked?"TrackedResult":"";return Object(u.jsx)("button",{className:"BoardButton Player".concat(e.who," ").concat(a," ").concat(i),id:e.keyPos,disabled:e.clicked||e.winnerExists,children:0!==e.who?e.theme[e.who-1]:"\ud83d\udd34"},e.keyPos)};var h=function(e){return Object(u.jsxs)("div",{className:"Bottom",children:[e.info&&""!==e.info?Object(u.jsxs)("div",{children:[" ",e.info," "]}):"",Object(u.jsx)("button",{onClick:function(){e.onClickUndo()},children:"Undo"}),Object(u.jsx)("button",{onClick:function(){e.onClickReset()},children:"Reset"}),Object(u.jsx)("button",{onClick:function(){e.onClickSaveReplay()},children:"Save As Replay"})]})};var y=function(e){return Object(u.jsx)("div",{className:"WinnerEffect",children:Object(u.jsx)("div",{className:"WinnerEffectContent",children:Object(u.jsxs)("span",{children:["Player ",e.winner," Wins!"]})})})},d=19;var j=function(e){var r=Object(n.useState)({tiles:Array.from({length:d},(function(){return Array.from({length:19},(function(){return 0}))})),curPlayer:1,history:Array(),winner:0,winningTracks:Array()}),t=Object(o.a)(r,2),c=t[0],a=t[1],i=function(e){e&&(e.pause(),e.currentTime=0)},s=function(r){i(e.player1PutSFX),i(e.player2PutSFX),i(e.undoSFX),i(e.resetSFX),i(e.resultSFX),r&&r.play()},l=function(e,r){return!(e<0||e>18||r<0||r>18)},j=function(e,r,t){var n=Array.from({length:d},(function(e,r){return Array.from(c.tiles[r])}));return n[e][r]=t,n},m=function(e){switch(e){case 1:return 2;case 2:return 1;default:return 0}},p=function(e,r,t){for(var n=t[e][r],c=[[1,0],[0,1],[1,1],[1,-1]],a=0;a<c.length;a++){for(var i=Object(o.a)(c[a],2),u=i[0],s=i[1],f=[[e,r]],h=e+u,y=r+s;l(h,y)&&t[h][y]===n;)f.push([h,y]),h+=u,y+=s;for(h=e-u,y=r-s;l(h,y)&&t[h][y]===n;)f.push([h,y]),h-=u,y-=s;if(5===f.length)return[n,f]}return[0,[]]},b=new Set(c.winningTracks.map((function(e){return"".concat(e[0],",").concat(e[1])})));return Object(u.jsxs)("div",{className:"Board",onClick:function(r){var t=r.target.id.split(",").map((function(e){return parseInt(e)})),n=Object(o.a)(t,2),i=n[0],u=n[1];Number.isNaN(i)||Number.isNaN(u)||function(r,t){if(0===c.tiles[r][t]){var n=j(r,t,c.curPlayer),i=m(c.curPlayer),u=p(r,t,n),l=Object(o.a)(u,2),f=l[0],h=l[1],y=Array.from(c.history);if(y.push([r,t]),0!==f)s(e.resultSFX);else switch(c.curPlayer){case 1:s(e.player1PutSFX);break;case 2:s(e.player2PutSFX)}a({tiles:n,curPlayer:i,history:y,winner:f,winningTracks:h})}}(i,u)},children:[Object(u.jsx)("div",{className:"Tiles",children:c.tiles.map((function(r,t){return r.map((function(r,n){return Object(u.jsx)(f,{keyPos:"".concat(t,",").concat(n),who:r,clicked:0!==r,winnerExists:0!==c.winner,tracked:0!==c.winner&&b.has("".concat(t,",").concat(n)),theme:e.themeButtons},"r".concat(t,"c").concat(n))}))}))}),Object(u.jsx)(h,{info:0!==c.winner?"Player ".concat(c.winner," wins!"):361===c.history.length?"Draw!":"Player ".concat(c.curPlayer,"'s turn!"),onClickUndo:function(){if(0!==c.history.length){s(e.undoSFX);var r=Array.from(c.history),t=r.pop();if(void 0!==t){var n=Object(o.a)(t,2),i=n[0],u=n[1];if(l(i,u)){var f=j(i,u,0),h=m(c.curPlayer);a({tiles:f,curPlayer:h,history:r,winner:0,winningTracks:Array()})}}}},onClickReset:function(){s(e.resetSFX),a({tiles:Array.from({length:d},(function(){return Array.from({length:19},(function(){return 0}))})),curPlayer:1,history:Array(),winner:0,winningTracks:Array()})},onClickSaveReplay:function(){var e={width:19,height:d,history:c.history},r=document.createElement("a"),t=new Blob([JSON.stringify(e)],{type:"json"});r.href=URL.createObjectURL(t),r.download="replay.json",r.click()}}),0!==c.winner?Object(u.jsx)(y,{winner:c.winner}):""]})};var m=function(e){return Object(u.jsxs)("div",{className:"ModeChanger",onChange:function(r){e.onChangeMode(r.target.value)},children:[Object(u.jsx)("input",{type:"radio",id:"game",name:"mode",value:"game",defaultChecked:!0}),Object(u.jsx)("label",{children:"Game Mode"}),Object(u.jsx)("input",{type:"radio",id:"replay",name:"mode",value:"replay"}),Object(u.jsx)("label",{children:"Replay"})]})};var p=function(e){return Object(u.jsxs)("div",{className:"Bottom",children:[Object(u.jsx)("button",{onClick:function(){e.onClickPrev()},children:"Prev"}),"".concat(e.curTrack," / ").concat(e.maxTrack),Object(u.jsx)("button",{onClick:function(){e.onClickNext()},children:"Next"})]})};var b=function(e){var r=Object(n.useState)({tiles:Array.from({length:19},(function(){return Array.from({length:19},(function(){return 0}))})),curPlayer:1,currentTrack:0,winner:0,winningTracks:Array(),history:Array()}),t=Object(o.a)(r,2),c=t[0],a=t[1],i=function(e){e&&(e.pause(),e.currentTime=0)},s=function(r){i(e.player1PutSFX),i(e.player2PutSFX),i(e.undoSFX),i(e.resetSFX),i(e.resultSFX),r&&r.play()},l=function(e,r){return!(e<0||e>18||r<0||r>18)},h=function(e,r,t){var n=Array.from({length:19},(function(e,r){return Array.from(c.tiles[r])}));return n[e][r]=t,n},y=function(e){switch(e){case 1:return 2;case 2:return 1;default:return 0}},d=function(e,r,t){for(var n=t[e][r],c=[[1,0],[0,1],[1,1],[1,-1]],a=0;a<c.length;a++){for(var i=Object(o.a)(c[a],2),u=i[0],s=i[1],f=[[e,r]],h=e+u,y=r+s;l(h,y)&&t[h][y]===n;)f.push([h,y]),h+=u,y+=s;for(h=e-u,y=r-s;l(h,y)&&t[h][y]===n;)f.push([h,y]),h-=u,y-=s;if(5===f.length)return[n,f]}return[0,[]]},j=new Set(c.winningTracks.map((function(e){return"".concat(e[0],",").concat(e[1])})));return Object(u.jsxs)("div",{className:"Board",children:[Object(u.jsx)("div",{className:"Tiles",children:c.tiles.map((function(r,t){return r.map((function(r,n){return Object(u.jsx)(f,{keyPos:"".concat(t,",").concat(n),who:r,clicked:!0,winnerExists:0!==c.winner,tracked:0!==c.winner&&j.has("".concat(t,",").concat(n)),theme:e.themeButtons},"r".concat(t,"c").concat(n))}))}))}),Object(u.jsx)("label",{children:"Replay File: "}),Object(u.jsx)("input",{type:"file",accept:"application/json",onChange:function(e){e.target.files&&function(e){if(!(e.length<=0)){var r=new FileReader;r.addEventListener("load",(function(){var e=JSON.parse(r.result);19===e.width&&19===e.height&&null!==e.history&&void 0!==e.history&&a({tiles:Array.from({length:19},(function(){return Array.from({length:19},(function(){return 0}))})),curPlayer:1,currentTrack:0,winner:0,winningTracks:Array(),history:e.history})})),r.readAsText(e[0])}}(e.target.files)}}),Object(u.jsx)(p,{curTrack:c.currentTrack,maxTrack:c.history.length,onClickPrev:function(){if(!(c.currentTrack<=0)){s(e.undoSFX);var r=c.currentTrack-1,t=Object(o.a)(c.history[r],2),n=t[0],i=t[1];if(l(n,i)){var u=h(n,i,0),f=y(c.curPlayer);a({tiles:u,curPlayer:f,currentTrack:r,winner:0,winningTracks:Array(),history:c.history})}}},onClickNext:function(){if(!(c.currentTrack>=c.history.length)){var r=Object(o.a)(c.history[c.currentTrack],2),t=r[0],n=r[1];if(l(t,n)){var i=h(t,n,c.curPlayer),u=y(c.curPlayer),f=d(t,n,i),j=Object(o.a)(f,2),m=j[0],p=j[1];if(0!==m)s(e.resultSFX);else switch(c.curPlayer){case 1:s(e.player1PutSFX);break;case 2:s(e.player2PutSFX)}var b=c.currentTrack+1;a({tiles:i,curPlayer:u,currentTrack:b,winner:m,winningTracks:p,history:c.history})}}}})]})},S={player1PutSFX:document.querySelector("#player1PutSFX"),player2PutSFX:document.querySelector("#player2PutSFX"),resetSFX:document.querySelector("#resetSFX"),undoSFX:document.querySelector("#undoSFX"),resultSFX:document.querySelector("#resultSFX")},k={default:["\u26ab","\u26aa"],halloween:["\ud83d\udfe4","\ud83d\udfe0"],winter:["\ud83d\udd34","\ud83d\udfe2"]},g={default:"React Gomoku",halloween:"Halloween Gomoku",winter:"Holiday Gomoku"},v=function(){var e=new Date,r=e.getDate(),t=e.getMonth();return 9===t&&31===r?"halloween":0===t&&1===r||11===t&&25===r?"winter":"default"}();var w=function(){var e=Object(n.useState)({mode:"game"}),r=Object(o.a)(e,2),t=r[0],c=r[1];return Object(u.jsxs)("main",{className:"Main",children:[Object(u.jsx)(s,{title:g[v]}),Object(u.jsx)(m,{onChangeMode:function(e){e!==t.mode&&c({mode:e})}}),function(){switch(t.mode){case"game":return Object(u.jsx)(j,{player1PutSFX:S.player1PutSFX,player2PutSFX:S.player2PutSFX,resetSFX:S.resetSFX,undoSFX:S.undoSFX,resultSFX:S.resultSFX,themeButtons:k[v]});case"replay":return Object(u.jsx)(b,{player1PutSFX:S.player1PutSFX,player2PutSFX:S.player2PutSFX,resetSFX:S.resetSFX,undoSFX:S.undoSFX,resultSFX:S.resultSFX,themeButtons:k[v]})}}()]})};var O=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(w,{})})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(r){var t=r.getCLS,n=r.getFID,c=r.getFCP,a=r.getLCP,i=r.getTTFB;t(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),F()},9:function(e,r,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.81835a45.chunk.js.map