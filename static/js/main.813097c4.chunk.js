(this["webpackJsonpmemory-clicker"]=this["webpackJsonpmemory-clicker"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"andromeda","image":"http://cdn.sci-news.com/images/enlarge4/image_5731e-Andromeda-Galaxy.jpg"},{"id":2,"name":"comet","image":"https://cdn.mos.cms.futurecdn.net/zzCKzkAndgXbTKNoKCUqu9-320-80.jpg"},{"id":3,"name":"earth","image":"https://images.pexels.com/photos/2422/sky-earth-galaxy-universe.jpg?cs=srgb&dl=sky-earth-galaxy-universe-2422.jpg&fm=jpg"},{"id":4,"name":"eclipse","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Total_solar_eclipse_of_March_20%2C_2015_by_Damien_Deltenre_%28licensed_for_free_use%29._%2832844461616%29.jpg/320px-Total_solar_eclipse_of_March_20%2C_2015_by_Damien_Deltenre_%28licensed_for_free_use%29._%2832844461616%29.jpg"},{"id":5,"name":"jupiter","image":"https://news.ucsc.edu/2015/03/images/jupiter-400.jpg"},{"id":6,"name":"mars","image":"https://solarsystem.nasa.gov/internal_resources/3841"},{"id":7,"name":"milky_way","image":"https://www.universetoday.com/wp-content/uploads/2013/10/milky_way.jpg"},{"id":8,"name":"neptune","image":"https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg"},{"id":9,"name":"orion","image":"http://cdn.eso.org/images/screen/eso1723a.jpg"},{"id":10,"name":"saturn","image":"https://media.npr.org/assets/img/2019/01/17/heic1814b-e14bed9bf18bca4c126f9ce26cc74c34c436ae29-s800-c85.jpg"},{"id":11,"name":"sun","image":"http://www.astronomy.com/-/media/Images/News%20and%20Observing/News/2018/11/thesun.jpg?mw=600"},{"id":12,"name":"uranus","image":"https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg"}]')},,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(2),c=t.n(r),i=t(3),o=t(4),m=t(7),l=t(5),u=t(8);t(14);var p=function(e){return s.a.createElement("div",{id:"wrapper"},e.children)};t(15);var g=function(e){return s.a.createElement("nav",{className:"navbar sticky-top navbar-light bg-light nav-justified"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",href:"https://stellie82.github.io/memoryClicker/"},"Home")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("p",{className:"nav-link",id:"message"},s.a.createElement("b",null,e.message))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("p",{className:"nav-link",id:"score"},"Your Score: ",e.score),s.a.createElement("p",{className:"nav-link disabled",id:"top-score"},"Top Score: ",e.topScore)))};t(16);var d=function(e){return s.a.createElement("div",{className:"jumbotron"},s.a.createElement("h1",null,s.a.createElement("b",null,"Space Memory")),s.a.createElement("p",null,"Click on an image to begin, but try not to click on any one more than once!"))};t(17);var h=function(e){return s.a.createElement("div",{className:e.cssShake,id:"main-container"},e.children)};t(18);var k=function(e){return s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.scoreCounter(e.name)}}))};t(19);var f=function(e){return s.a.createElement("footer",null,s.a.createElement("p",null,"Space Memory \xa9"))},_=t(6),v=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).state={elements:_,clickedImages:[],score:0,topScore:0,message:"Click on an image to begin.",cssShake:""},t.scoreCounter=function(e){var a=t.state.clickedImages,n=t.state.score,s=t.state.topScore;a.includes(e)?t.setState({clickedImages:[],score:0,message:"Sorry, you lose. Click an image to try again.",cssShake:"shake"}):(a.push(e),n++,t.setState({score:n,message:"Correct guess, keep going!",cssShake:""}),12===n?t.setState({clickedImages:[],score:0,topScore:0,message:"You win!!  Click to play again."}):n>=s&&(s++,t.setState({topScore:n}))),t.setState({elements:t.state.elements.sort((function(){return.5-Math.random()}))})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(p,null,s.a.createElement(g,{message:this.state.message,score:this.state.score,topScore:this.state.topScore}),s.a.createElement(d,null),s.a.createElement(h,{cssShake:this.state.cssShake},this.state.elements.map((function(a){return s.a.createElement(k,{scoreCounter:e.scoreCounter,name:a.name,image:a.image})}))),s.a.createElement(f,null))}}]),a}(n.Component);c.a.render(s.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.813097c4.chunk.js.map