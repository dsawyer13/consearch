(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/Concert.7c44ccca.png"},31:function(e,t,a){e.exports=a(46)},36:function(e,t,a){},37:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),l=a.n(r),o=a(7),s=a(11),i=Object(n.createContext)({}),u={results:[],page:"",lastPage:"",city:"",distance:""},m=JSON.parse(localStorage.getItem("state"));function E(e,t){switch(t.type){case"FETCH_RESULTS":return Object(s.a)({},e,{results:t.payload._embedded.events});case"SET_PAGE":return Object(s.a)({},e,{page:1});case"SET_LAST_PAGE":return Object(s.a)({},e,{lastPage:t.payload.page.totalPages});case"SET_CITY":return Object(s.a)({},e,{city:t.payload});case"SET_DISTANCE":return Object(s.a)({},e,{distance:t.payload});case"NEXT_PAGE":case"LAST_PAGE":return Object(s.a)({},e,{page:t.payload});default:throw new Error("Action type must be defined")}}var p=function(e){var t=e.children,a=Object(n.useReducer)(E,m||u),r=Object(o.a)(a,2),l=r[0],s=r[1];return Object(n.useEffect)(function(){localStorage.setItem("state",JSON.stringify(l))},[l]),c.a.createElement(i.Provider,{value:[l,s]},t)},d=(a(36),a(13)),f=a(10),h=a(47),v=a(48),y=Object({NODE_ENV:"production",PUBLIC_URL:"/consearch"}).REACT_APP_TM_URL||"https://app.ticketmaster.com/discovery/v2/events.json?apikey=p48FaIihgbRfceXm48vMgx9sScj9hrus&countryCode=US&classificationName=music&sort=date,asc&size=10",b=Object({NODE_ENV:"production",PUBLIC_URL:"/consearch"}).REACT_APP_ITUNES_URL||"https://itunes.apple.com/search?term=",g=(a(37),a(19),a(23)),S=a.n(g),N=a(14),O=a(24),j=a(25);N.b.add(j.a);var C=function(){return c.a.createElement("div",{className:"logo landing-logo"},"ConSearch")},T=Object(f.f)(function(e){var t=e.history,a=Object(n.useState)(""),r=Object(o.a)(a,2),l=r[0],s=r[1],u=Object(n.useState)(""),m=Object(o.a)(u,2),E=m[0],p=m[1],d=Object(n.useContext)(i),f=Object(o.a)(d,2),b=(f[0],f[1]);return c.a.createElement(h.a,{className:"search-form",onSubmit:function(e){if(e.preventDefault(),""!==l.trim()){var a=E.substr(0,E.length-3);!function(e,t){fetch("".concat(y,"&city=").concat(e,"&distance=").concat(t)).then(function(e){return e.json()}).then(function(a){b({type:"FETCH_RESULTS",payload:a}),b({type:"SET_CITY",payload:e}),b({type:"SET_DISTANCE",payload:t}),b({type:"SET_PAGE"}),b({type:"SET_LAST_PAGE",payload:a})}).catch(function(e){return console.error("ERROR:",e.message)})}(l,a),s(""),p("Distance..."),t.push("/results")}}},c.a.createElement(h.a.Control,{className:"city-input input",type:"text",placeholder:"Enter a City...",onChange:function(e){return s(e.target.value)},value:l,name:"city"}),c.a.createElement(h.a.Control,{className:"dist-input input",as:"select",onChange:function(e){return p(e.target.value)},value:E,name:"distance",placeholder:"Distance..."},c.a.createElement("option",null,"10 mi"),c.a.createElement("option",null,"25 mi"),c.a.createElement("option",null,"50 mi"),c.a.createElement("option",null,"75 mi"),c.a.createElement("option",null,"100 mi")),c.a.createElement(v.a,{className:"landing-btn",type:"submit"},c.a.createElement(O.a,{icon:"search",size:"sm"})," Search"))}),_=function(){return c.a.createElement("div",{className:"landing-body"},c.a.createElement(C,null),c.a.createElement("div",{className:"landing-content"},c.a.createElement("h1",null,"Find Local Music"),c.a.createElement("h1",null,"Wherever You Are"),c.a.createElement("p",null,"ConSearch helps you search for upcoming music events and lets you listen to what will be playing at the event."),c.a.createElement(T,null)),c.a.createElement("div",{className:"imgContainer"},c.a.createElement("img",{className:"bgImage",alt:"background",src:S.a})))},R=(a(45),function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),u=s[0],m=s[1],E=Object(n.useContext)(i),p=Object(o.a)(E,2),f=(p[0],p[1]);return c.a.createElement("nav",null,c.a.createElement("div",{className:"logo nav-logo"},c.a.createElement(d.b,{to:"/"}," ConSearch")),c.a.createElement(h.a,{className:"nav-form",onSubmit:function(e){if(e.preventDefault(),""!==a.trim()){var t=u.substr(0,u.length-3);!function(e,t){fetch("".concat(y,"&city=").concat(e,"&distance=").concat(t)).then(function(e){return e.json()}).then(function(a){f({type:"FETCH_RESULTS",payload:a}),f({type:"SET_CITY",payload:e}),f({type:"SET_DISTANCE",payload:t}),f({type:"SET_PAGE"})}).catch(function(e){return console.error("ERROR:",e)})}(a,t)}}},c.a.createElement(h.a.Control,{className:"city-input input",placeholder:"Enter a city...",onChange:function(e){return r(e.target.value)},value:a,name:"city"}),c.a.createElement(h.a.Control,{className:"dist-input input",as:"select",onChange:function(e){return m(e.target.value)},value:u,name:"distance",placeholder:"Distance..."},c.a.createElement("option",null,"10 mi"),c.a.createElement("option",null,"25 mi"),c.a.createElement("option",null,"50 mi"),c.a.createElement("option",null,"75 mi"),c.a.createElement("option",null,"100 mi")),c.a.createElement(v.a,{type:"submit"},"Search")))}),A=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),u=i[0],m=i[1],E=e.pics.filter(function(e){return"4_3"===e.ratio})[0].url,p=e.rawName.attractions?e.rawName.attractions[0].name:"",d=new Date(e.date),f=d.getFullYear(),h=d.getMonth()+1,y=d.getDate();y<10&&(y="0"+y),h<10&&(h="0"+h);var g=h+"/"+y+"/"+f;return c.a.createElement("div",{className:"result-item"},c.a.createElement("div",{className:"photo"},c.a.createElement("img",{src:E,alt:"artist"})),c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"date"},g),c.a.createElement("div",{className:"artist"},e.title),c.a.createElement("div",{className:"venue"},"@ ",e.venue),c.a.createElement("div",{className:"audio-player"},r),c.a.createElement("div",{className:"error"},u)),c.a.createElement("div",{className:"buttons"},c.a.createElement(v.a,{className:"ticket-button",variant:"danger",target:"_blank",href:e.tmLink},"TICKETS"),c.a.createElement(v.a,{className:"play-button",variant:"warning",onClick:function(){!function(e){var t=encodeURIComponent(e);fetch("".concat(b).concat(t)).then(function(e){return e.json()}).then(function(e){if(e.results.length<1)throw new Error("Invalid Artist");m(""),l(c.a.createElement("audio",{controls:"controls",src:e.results[0].previewUrl}))}).catch(function(e){return m("Music Unavailable")})}(p)}},"PLAY")))},w=function(){var e=Object(n.useContext)(i),t=Object(o.a)(e,2),a=t[0],r=t[1],l=a.page,s=1===l?"":c.a.createElement(v.a,{className:"last",onClick:function(){fetch("".concat(y,"&city=").concat(a.city,"&distance=").concat(a.distance,"&page=").concat(l-1)).then(function(e){return e.json()}).then(function(e){r({type:"FETCH_RESULTS",payload:e}),r({type:"LAST_PAGE",payload:l-1})}).catch(function(e){return console.error("ERROR:",e.message)})}},"Last"),u=l<=a.lastPage?c.a.createElement(v.a,{className:"next",onClick:function(){fetch("".concat(y,"&city=").concat(a.city,"&distance=").concat(a.distance,"&page=").concat(l+1)).then(function(e){return e.json()}).then(function(e){r({type:"FETCH_RESULTS",payload:e}),r({type:"NEXT_PAGE",payload:l+1})}).catch(function(e){return console.error("ERROR:",e.message)})}},"Next"):"";return c.a.createElement("div",{className:"button-container"},s,u)},P=function(){var e=Object(n.useContext)(i),t=Object(o.a)(e,2),a=t[0];t[1];return Object(n.useEffect)(function(){window.scrollTo(0,0)}),c.a.createElement("div",{className:"results-body"},c.a.createElement(R,null),c.a.createElement("section",{className:"results"},a.results.map(function(e,t){return c.a.createElement(A,{rawName:e._embedded,key:t,pics:e.images,date:e.dates.start.localDate,title:e.name,venue:e._embedded.venues[0].name,tmLink:e.url})}),c.a.createElement(w,null)))};var L=function(){return c.a.createElement("main",{className:"App"},c.a.createElement(d.a,null,c.a.createElement(f.c,null,c.a.createElement(f.a,{exact:!0,path:"/",component:_}),c.a.createElement(f.a,{exact:!0,path:"/results",component:P}))))};l.a.render(c.a.createElement(p,null,c.a.createElement(L,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.baa2990c.chunk.js.map