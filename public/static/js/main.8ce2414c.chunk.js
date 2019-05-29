(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(66)},66:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(34),l=a.n(o),s=a(69),r=a(5),c=a(4),u=a(7),d=a(6),m=a(8),h=a(71),p=a(70),g=a(23),v=a(68),f=a(20),w=a.n(f),E=new(function(){function e(){Object(r.a)(this,e),this.auth=w.a.create({baseURL:"https://film-trails.herokuapp.com",withCredentials:!0})}return Object(c.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/signup",{username:t,password:a}).then(function(e){return e.data})}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then(function(e){return e.data})}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then(function(e){return e.data})}},{key:"me",value:function(e){return this.auth.get("/auth/me").then(function(e){return e.data})}}]),e}()),b=i.a.createContext(),y=b.Provider,k=b.Consumer,j=function(e){return function(t){function a(){return Object(r.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(c.a)(a,[{key:"render",value:function(){var t=this;return i.a.createElement(k,null,function(a){return i.a.createElement(e,Object.assign({isLogged:a.isLogged,user:a.user,logout:a.logout,login:a.login,signup:a.signup},t.props))})}}]),a}(n.Component)},P=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={isLogged:!1,user:{},status:"loading"},a.setUser=function(e){a.setState({isLogged:!0,user:e})},a.logoutUser=function(){return E.logout().then(function(){a.setState({isLogged:!1,user:{}})}).catch(function(e){return console.log(e)})},a.loginUser=function(e){return E.login(e).then(function(e){a.setUser(e)}).catch(function(e){return e})},a.signupUser=function(e){return E.signup(e).then(function(e){a.setUser(e)}).catch(function(e){return console.log(e)})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.me().then(function(t){e.setState({isLogged:!0,user:t,status:"loaded"})}).catch(function(t){e.setState({isLogged:!1,user:{},status:"loaded"})})}},{key:"render",value:function(){var e=this.state,t=e.isLogged,a=e.user,n=e.status,o=this.props.children;switch(n){case"loading":return i.a.createElement("div",null,"Loading");default:return i.a.createElement(y,{value:{isLogged:t,user:a,logout:this.logoutUser,login:this.loginUser,signup:this.signupUser}},o)}}}]),t}(n.Component),O=j(function(e){var t=e.component,a=e.isLogged,n=Object(g.a)(e,["component","isLogged"]);return i.a.createElement(p.a,Object.assign({},n,{render:function(e){return a?i.a.createElement(t,e):i.a.createElement(v.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}),N=j(function(e){var t=e.component,a=e.isLogged,n=Object(g.a)(e,["component","isLogged"]);return i.a.createElement(p.a,Object.assign({},n,{render:function(e){return a?i.a.createElement(v.a,{to:{pathname:"/location/add",state:{from:e.location}}}):i.a.createElement(t,e)}}))}),C=a(67);var S=function(){return i.a.createElement("div",{className:"logo"},i.a.createElement("img",{src:"/img/logo.svg",alt:"FilmTrails"}),i.a.createElement("h1",null,"FILM TRAILS"))},L=j(function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isLogged,a=e.user,n=e.logout,o=a.username;return t?i.a.createElement("div",{className:"navbar"},i.a.createElement(S,null),i.a.createElement("div",{className:"logout"},i.a.createElement("p",null,i.a.createElement("span",null,o),i.a.createElement("img",{src:"/img/logout.png",alt:"logout",onClick:n})))):i.a.createElement("div",{className:"navbar"},i.a.createElement(S,null),i.a.createElement("div",{className:"login"},i.a.createElement(C.a,{className:"link-nav",to:"/login"},i.a.createElement("img",{src:"/img/user.png",alt:"login"}))))}}]),t}(n.Component)),U=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",null,i.a.createElement(C.a,{className:"link-nav",to:"/"},i.a.createElement("img",{src:"/img/map-icon.svg",alt:"Map Search"}))),i.a.createElement("div",null,i.a.createElement(C.a,{className:"link-nav",to:"/search"},i.a.createElement("img",{src:"/img/map-icon.svg",alt:"Search List"}))),i.a.createElement("div",null,i.a.createElement(C.a,{className:"link-nav",to:"/location/add"},i.a.createElement("img",{src:"/img/map-add.svg",alt:"Map Add"}))))}}]),t}(n.Component),D=a(2),x=j(function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.props.signup({username:t,password:n}).then(function(){a.setState({username:"",password:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(D.a)({},n,i))},a.removePlaceholder=function(e){return e.target.placeholder=""},a.addPlaceholderUsername=function(e){return e.target.placeholder="Username"},a.addPlaceholderPassword=function(e){return e.target.placeholder="Password"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return i.a.createElement("div",{className:"signup-page"},i.a.createElement("div",{className:"background"}),i.a.createElement("div",{className:"form-box"},i.a.createElement("form",{onSubmit:this.handleFormSubmit},i.a.createElement("input",{type:"text",name:"username",placeholder:"Username",onFocus:this.removePlaceholder,onBlur:this.addPlaceholderUsername,value:t,onChange:this.handleChange}),i.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onFocus:this.removePlaceholder,onBlur:this.addPlaceholderPassword,value:a,onChange:this.handleChange}),i.a.createElement("input",{id:"form-button",type:"submit",value:"Signup"}),i.a.createElement(C.a,{className:"signup-link",to:"/login"},"Already have an account? Login."))))}}]),t}(n.Component)),M=j(function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={username:"",password:"",notFilledFields:!1},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,i=t.password;a.props.login({username:n,password:i}).then(function(e){})},a.handleChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(D.a)({},n,i))},a.removePlaceholder=function(e){return e.target.placeholder=""},a.addPlaceholderUsername=function(e){return e.target.placeholder="Username"},a.addPlaceholderPassword=function(e){return e.target.placeholder="Password"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.notFilledFields;return i.a.createElement("div",{className:"login-page"},i.a.createElement("div",{className:"background"}),i.a.createElement("div",{className:"form-box"},i.a.createElement("form",{onSubmit:this.handleFormSubmit},i.a.createElement("input",{type:"text",name:"username",placeholder:"Username",onFocus:this.removePlaceholder,onBlur:this.addPlaceholderUsername,value:t,onChange:this.handleChange}),i.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onFocus:this.removePlaceholder,onBlur:this.addPlaceholderPassword,value:a,onChange:this.handleChange}),i.a.createElement("input",{id:"form-button",type:"submit",value:"Login"}),n?i.a.createElement("p",null,"Missing some fields"):null,i.a.createElement(C.a,{className:"signup-link",to:"/signup"},"Create your account to add film locations"))))}}]),t}(n.Component)),T=a(10),V=new(function(){function e(){Object(r.a)(this,e),this.location=w.a.create({baseURL:"https://film-trails.herokuapp.com",withCredentials:!0})}return Object(c.a)(e,[{key:"view",value:function(e){return this.location.get("/location/"+e).then(function(e){return e.data})}},{key:"add",value:function(e){return this.location.post("/location/add",e).then(function(e){return e.data})}},{key:"delete",value:function(e){return this.location.delete("/location/delete/"+e).then(function(e){return e.data})}},{key:"imageUpload",value:function(e){return this.location.post("/location/add/picture",e).then(function(e){return e.data})}},{key:"search",value:function(e){return console.log("launching search------\x3e"),console.log(e),this.location.get("/search/?lon="+e.lon+"&lat="+e.lat+"&dist="+e.dist).then(function(e){return e.data})}}]),e}()),z=j(function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).changeView=function(t){e.setState({viewport:t})},e.locateUser=function(){navigator.geolocation.getCurrentPosition(function(t){var a={latitude:t.coords.latitude,longitude:t.coords.longitude},n={latitude:t.coords.latitude,longitude:t.coords.longitude,zoom:e.state.viewport.zoom,bearing:e.state.viewport.bearing,pitch:e.state.viewport.pitch,width:e.state.viewport.width,height:e.state.viewport.height};e.setState({currentPosition:a,viewport:n})})},e.handleClick=function(t){var a={lon:t.lngLat[0],lat:t.lngLat[1]};e.setState({savePosition:a,lat:a.lat,lon:a.lon})},e.handleChange=function(t){var a=t.target,n=a.name,i=a.value;e.setState(Object(D.a)({},n,i))},e.fileOnchange=function(t){var a=t.target.files[0],n=new FormData;n.append("photo",a),V.imageUpload(n).then(function(t){e.setState({scenePictureUrl:t})}).catch(function(e){return console.log(e)})},e.handleFormSubmit=function(t){t.preventDefault();var a={title:e.state.title,placeName:e.state.placeName,scenePictureUrl:e.state.scenePictureUrl,coords:{coordinates:[e.state.lon,e.state.lat],type:"Point"}};V.add(a).then(function(t){e.props.history.push("/location/"+t._id)})},e.controlButton=function(){return!(e.state.title&&e.state.scenePictureUrl&&e.state.lat&&e.state.lon)},e.state={title:"",lat:"",lon:"",placeName:"",scenePictureUrl:"",disable:!0,viewport:{latitude:41.5,longitude:2.3,zoom:10,bearing:0,pitch:0,width:"100vp",height:200},currentPosition:{latitude:null,longitude:null},savePosition:null},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){!this.controlButton()&&this.state.disable?this.setState({disable:!1}):this.controlButton()&&!this.state.disable&&this.setState({disable:!0})}},{key:"render",value:function(){var e=this.state.viewport;return i.a.createElement("div",{className:"add-location-page"},i.a.createElement("h2",null,"Add a new movie location"),i.a.createElement("div",{className:"add-location"},i.a.createElement("h3",null,"Select location:"),i.a.createElement("button",{className:"get-location-button",onClick:this.locateUser},"Current location")),i.a.createElement("div",{className:"add-map"},i.a.createElement(T.b,Object.assign({},e,{mapboxApiAccessToken:"pk.eyJ1IjoiZ3VzYmUiLCJhIjoiY2p3MjV6YmtyMDVpdDN6bzZ1cmc3anhrNyJ9.rBgwRSc60q9AdH4RTpm9qA",mapStyle:"mapbox://styles/gusbe/cjw3cw74r0vw01cpiazy0w3f4",onViewportChange:this.changeView,onClick:this.handleClick}),this.state.currentPosition.latitude?i.a.createElement(T.a,{key:"currentLocation",latitude:this.state.currentPosition.latitude,longitude:this.state.currentPosition.longitude,offsetLeft:-10,offsetTop:-10},i.a.createElement("div",null,i.a.createElement("img",{src:"/img/blue.svg",alt:"savePosition",style:{width:"20px"}}))):null,this.state.savePosition?i.a.createElement(T.a,{key:"saveLocation",latitude:this.state.savePosition.lat,longitude:this.state.savePosition.lon,offsetLeft:-8,offsetTop:-27},i.a.createElement("div",null,i.a.createElement("img",{src:"/img/logo-red.svg",alt:"savePosition",style:{width:"16px"}}))):null)),i.a.createElement("div",{className:"add-form"},i.a.createElement("form",{onSubmit:this.handleFormSubmit},i.a.createElement("label",{className:"lat-lon-inputs",name:"lon"},"Lon:"),i.a.createElement("input",{className:"lat-lon-inputs",type:"text",name:"lon",value:this.state.lon,onChange:this.handleChange}),i.a.createElement("label",{className:"lat-lon-inputs",name:"lat"},"Lat:"),i.a.createElement("input",{className:"lat-lon-inputs",type:"text",name:"lat",value:this.state.lat,onChange:this.handleChange}),i.a.createElement("h3",null,"Place name:"),i.a.createElement("input",{type:"text",name:"placeName",value:this.state.placeName,onChange:this.handleChange}),i.a.createElement("h3",null,"Movie title:"),i.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleChange}),i.a.createElement("h3",null,"Upload a scene picture:"),i.a.createElement("input",{type:"file",onChange:this.fileOnchange,name:"image"}),this.state.disable?i.a.createElement("input",{id:"add-button-disabled",type:"submit",value:"Complete all the fields",disabled:!0}):i.a.createElement("input",{id:"add-button",type:"submit",value:"Send new location"}))))}}]),t}(n.Component)),A=j(function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).showDelete=function(){a.state.deleteLink?a.setState({deleteLink:!1}):a.setState({deleteLink:!0})},a.deleteElement=function(){var e=a.props.match.params.id;V.delete(e).then(function(e){a.setState({redirectSearch:!0})})},a.state={id:"",title:"",lat:"",lon:"",placeName:"",scenePictureUrl:"",author:"",owner:!1,viewport:{latitude:null,longitude:null,zoom:null,bearing:null,pitch:null,width:null,height:null},currentPosition:{latitude:null,longitude:null},deleteLink:!1,redirectSearch:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;V.view(t).then(function(t){var a=t._id,n=t.scenePictureUrl,i=t.title,o=t.coords,l=t.user,s=t.placeName,r=!1;e.props.user._id===l._id&&(r=!0);var c={latitude:o.coordinates[1],longitude:o.coordinates[0],zoom:11,bearing:0,pitch:0,width:"100vp",height:150};e.setState({id:a,title:i,lat:o.coordinates[1],lon:o.coordinates[0],placeName:s,scenePictureUrl:n,author:l.username,owner:r,viewport:c})})}},{key:"render",value:function(){var e=this.state,t=e.viewport,a=e.lat,n=e.lon;return i.a.createElement("div",{className:"view-page"},this.state.redirectSearch?i.a.createElement(v.a,{to:"/"}):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"view-map"},a?i.a.createElement(T.b,Object.assign({},t,{mapboxApiAccessToken:"pk.eyJ1IjoiZ3VzYmUiLCJhIjoiY2p3MjV6YmtyMDVpdDN6bzZ1cmc3anhrNyJ9.rBgwRSc60q9AdH4RTpm9qA",mapStyle:"mapbox://styles/gusbe/cjw3cw74r0vw01cpiazy0w3f4"}),i.a.createElement(T.a,{key:"sss",latitude:a,longitude:n,offsetLeft:-8,offsetTop:-27},i.a.createElement("div",null,i.a.createElement("img",{src:"/img/logo-red.svg",alt:"currentPosition",style:{width:"20px",fill:"red"}}))),this.state.currentPosition.latitude?i.a.createElement(T.a,{key:"currentLocation",latitude:this.state.currentPosition.latitude,longitude:this.state.currentPosition.longitude,offsetLeft:-10,offsetTop:-10},i.a.createElement("div",null,i.a.createElement("img",{src:"/img/pin.png",alt:"currentPosition",style:{width:"20px"}}))):null):null),i.a.createElement("div",{className:"view-title"},i.a.createElement("h1",null,this.state.title),i.a.createElement("h2",null,this.state.placeName)),i.a.createElement("div",{className:"view-image"},i.a.createElement("img",{src:this.state.scenePictureUrl,alt:this.state.title}),i.a.createElement("p",null,"Uploaded by: ",this.state.author," ")),this.state.owner?i.a.createElement("div",{className:"view-links"},this.state.deleteLink?i.a.createElement("p",{className:"view-links-component"},"Do you really want to delete this location?",i.a.createElement("a",{href:"#;",className:"view-links-component-link",onClick:this.deleteElement},"Yes"),i.a.createElement("a",{href:"#;",className:"view-links-component-link",onClick:this.showDelete},"No")):i.a.createElement("p",{className:"view-links-component"},i.a.createElement(C.a,{className:"view-links-component-link",to:"/location/"+this.state.id+"/update"},"Update"),i.a.createElement("a",{href:"#;",className:"view-links-component-link",onClick:this.showDelete},"Delete"))):null))}}]),t}(n.Component)),F=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).showMarker=function(){var e={lon:a.state.lon,lat:a.state.lat};a.props.changeDetailMarker(e)},a.unshowMarker=function(){a.props.changeDetailMarker({lat:null,lon:null})},a.state={distance:e.info.distance,scenePictureUrl:e.info.scenePictureUrl,title:e.info.title,_id:e.info._id,lat:e.info.coords.coordinates[1],lon:e.info.coords.coordinates[0],placeName:e.info.placeName},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e;return e=this.state.distance/1e3<1?"".concat(Math.trunc(this.state.distance)," meters"):this.state.distance/1e3<5?"".concat((this.state.distance/1e3).toFixed(2)," Kms"):"".concat(Math.trunc(this.state.distance/1e3)-1," Kms"),i.a.createElement(C.a,{to:"/location/".concat(this.state._id),className:"link-location"},i.a.createElement("div",{className:"one-result",onMouseOver:this.showMarker,onMouseOut:this.unshowMarker},i.a.createElement("div",{className:"location-info-one-result",style:{backgroundImage:"url("+this.state.scenePictureUrl+")"}}),i.a.createElement("div",{className:"title-distance"},i.a.createElement("p",{id:"title-one-result"},this.state.title),i.a.createElement("div",{className:"place-distance"},i.a.createElement("p",{id:"place-one-result"},this.state.placeName),i.a.createElement("p",{id:"distance-one-result"},e)))))}}]),t}(n.Component),_=function(e){function t(e){return Object(r.a)(this,t),Object(u.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.results.map(function(t){return i.a.createElement("div",{key:t._id},i.a.createElement(F,{info:t,changeDetailMarker:e.props.changeDetailMarker}))});return i.a.createElement("div",null,t)}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).launchSearch=function(){var e,t;null!==a.state.savePosition?(e=a.state.savePosition.lat,t=a.state.savePosition.lon):(e=a.state.viewport.latitude,t=a.state.viewport.longitude);var n=0,i=a.state.viewport.zoom;i<2?n=65e5:i<3?n=5e6:i<4?n=2e6:i<5?n=135e4:i<6?n=75e4:i<7?n=35e4:i<8?n=175e3:i<9?n=91e3:i<10?n=42500:i<11?n=21500:i<12?n=12500:i<13?n=6500:i<14?n=2500:i<15?n=1250:i<16&&(n=650);var o={lat:e,lon:t,dist:n};V.search(o).then(function(e){a.setState({searchParams:o,results:e})})},a.changeView=function(e){a.setState({viewport:e})},a.locateUser=function(){navigator.geolocation.getCurrentPosition(function(e){var t={latitude:e.coords.latitude,longitude:e.coords.longitude},n={lon:e.coords.longitude,lat:e.coords.latitude},i={latitude:e.coords.latitude,longitude:e.coords.longitude,zoom:a.state.viewport.zoom,bearing:a.state.viewport.bearing,pitch:a.state.viewport.pitch,width:a.state.viewport.width,height:a.state.viewport.height};a.setState({currentPosition:t,savePosition:n,viewport:i})})},a.handleClick=function(e){window.scrollTo(0,0);var t={lon:e.lngLat[0],lat:e.lngLat[1]};a.setState({savePosition:t,lat:t.lat,lon:t.lon})},a.changeDetailMarker=function(e){a.setState({detailPosition:e})},a.state={results:[],searchParams:{lat:41.39,lon:2.17,dist:12.5},viewport:{latitude:41.39,longitude:2.17,zoom:12,bearing:0,pitch:0,width:"100vp",height:300},currentPosition:{latitude:null,longitude:null},savePosition:{lon:2.17,lat:41.39},detailPosition:{lon:null,lat:null},lastSearch:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){this.state.lastSearch+1e3<Date.now()&&(this.setState({lastSearch:Date.now()}),this.launchSearch())}},{key:"render",value:function(){var e=this.state.viewport;return i.a.createElement("div",{className:"search-list-page"},i.a.createElement("div",{className:"list-map"},i.a.createElement("button",{className:"list-current-location-button",onClick:this.locateUser},"Current location"),i.a.createElement(T.b,Object.assign({},e,{mapboxApiAccessToken:"pk.eyJ1IjoiZ3VzYmUiLCJhIjoiY2p3MjV6YmtyMDVpdDN6bzZ1cmc3anhrNyJ9.rBgwRSc60q9AdH4RTpm9qA",mapStyle:"mapbox://styles/gusbe/cjw3cw74r0vw01cpiazy0w3f4",onViewportChange:this.changeView,onClick:this.handleClick}),this.state.currentPosition.latitude?i.a.createElement(T.a,{key:"currentLocation",latitude:this.state.currentPosition.latitude,longitude:this.state.currentPosition.longitude,offsetLeft:-10,offsetTop:-10},i.a.createElement("div",null,i.a.createElement("img",{src:"/img/blue.svg",alt:"savePosition",style:{width:"20px"}}))):null,this.state.savePosition?i.a.createElement(T.a,{key:"saveLocation",latitude:this.state.savePosition.lat,longitude:this.state.savePosition.lon,offsetLeft:-13,offsetTop:-27},i.a.createElement("div",null,i.a.createElement("img",{src:"/img/pin-search.svg",alt:"savePosition",style:{width:"26px"}}))):null,this.state.results.map(function(e){return i.a.createElement(T.a,{key:e._id,latitude:e.coords.coordinates[1],longitude:e.coords.coordinates[0],offsetLeft:-10,offsetTop:-10},i.a.createElement("div",null,i.a.createElement("img",{src:"/img/logo-red.svg",alt:"pin",style:{width:"16px"}})))}),this.state.detailPosition.lon?i.a.createElement(T.a,{key:"detailPosition",latitude:this.state.detailPosition.lat,longitude:this.state.detailPosition.lon,offsetLeft:-10,offsetTop:-10},i.a.createElement("div",null,i.a.createElement("img",{src:"/img/logo-orange.svg",alt:"savePosition",style:{width:"16px"}}))):null)),i.a.createElement("div",{className:"result-list"},i.a.createElement("h2",null,this.state.results.length," film locations"),i.a.createElement(_,{results:this.state.results,changeDetailMarker:this.changeDetailMarker})))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).launchSearch=function(){var e={lat:a.state.viewport.latitude,lon:a.state.viewport.longitude,dist:3e7};V.search(e).then(function(t){a.setState({searchParams:e,results:t})})},a.changeView=function(e){a.setState({viewport:e})},a.locateUser=function(){navigator.geolocation.getCurrentPosition(function(e){var t={latitude:e.coords.latitude,longitude:e.coords.longitude},n={latitude:e.coords.latitude,longitude:e.coords.longitude,zoom:a.state.viewport.zoom,bearing:a.state.viewport.bearing,pitch:a.state.viewport.pitch,width:a.state.viewport.width,height:a.state.viewport.height};a.setState({currentPosition:t,viewport:n})})},a.closeLocation=function(e){e.stopPropagation(),a.setState({selectedLocation:!1})},a.goToViewLocation=function(){a.setState({goToViewLocation:a.state.selectedLocation._id})},a.state={viewport:{latitude:41.39,longitude:2.17,zoom:12,bearing:0,pitch:0,width:"100vp",height:"95vh"},currentPosition:{latitude:null,longitude:null},selectedLocation:null,results:[],lastSearch:null,goToViewLocation:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("keydown",function(t){"Escape"===t.key&&e.setState({selectedLocation:null})})}},{key:"componentDidUpdate",value:function(){this.state.lastSearch+1e3<Date.now()&&(this.setState({lastSearch:Date.now()}),this.state.results=[],this.launchSearch())}},{key:"render",value:function(){var e=this,t=this.state,a=t.viewport,n=t.selectedLocation,o=t.goToViewLocation;return o?i.a.createElement(v.a,{to:"/location/".concat(o)}):i.a.createElement("div",{className:"search-map-page"},i.a.createElement("button",{className:"current-location-button",onClick:this.locateUser},"Current location"),n?i.a.createElement("div",{className:"location-info",onClick:this.goToViewLocation,style:{backgroundImage:"url("+n.scenePictureUrl+")"}},i.a.createElement("div",{className:"close-location-inf",onClick:this.closeLocation},i.a.createElement("img",{src:"/img/close-window.png",alt:"close"})),i.a.createElement("p",null,n.placeName),i.a.createElement("p",{className:"title-card"},n.title)):null,i.a.createElement("div",{className:"search-map"},i.a.createElement(T.b,Object.assign({},a,{mapboxApiAccessToken:"pk.eyJ1IjoiZ3VzYmUiLCJhIjoiY2p3MjV6YmtyMDVpdDN6bzZ1cmc3anhrNyJ9.rBgwRSc60q9AdH4RTpm9qA",mapStyle:"mapbox://styles/gusbe/cjw3cw74r0vw01cpiazy0w3f4",onViewportChange:this.changeView}),this.state.results.map(function(t){return i.a.createElement(T.a,{key:t._id,latitude:t.coords.coordinates[1],longitude:t.coords.coordinates[0],offsetLeft:n&&n._id===t._id?-12:-8,offsetTop:n&&n._id===t._id?-40:-27},i.a.createElement("div",{onClick:function(a){a.preventDefault(),e.setState({selectedLocation:t})}},n&&n._id===t._id?i.a.createElement("img",{src:"/img/logo-orange.svg",alt:"pin",style:{width:"24px"}}):i.a.createElement("img",{src:"/img/logo-red.svg",alt:"pin",style:{width:"16px"}})))}),this.state.currentPosition.latitude?i.a.createElement(T.a,{key:"currentLocation",latitude:this.state.currentPosition.latitude,longitude:this.state.currentPosition.longitude,offsetLeft:-10,offsetTop:-10},i.a.createElement("div",null,i.a.createElement("img",{src:"/img/blue.svg",alt:"currentPosition",style:{width:"20px"}}))):null)))}}]),t}(n.Component);a(63).config();var Y=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(P,null,i.a.createElement("div",{className:"container"},i.a.createElement(L,null),i.a.createElement(h.a,null,i.a.createElement(p.a,{path:"/",component:I,exact:!0}),i.a.createElement(N,{path:"/signup",component:x}),i.a.createElement(N,{path:"/login",component:M}),i.a.createElement(O,{path:"/location/add",component:z,exact:!0}),i.a.createElement(p.a,{path:"/location/:id",component:A}),i.a.createElement(p.a,{path:"/search/:id",component:J}),i.a.createElement(p.a,{path:"/search",component:J})),i.a.createElement(U,null)))}}]),t}(n.Component);l.a.render(i.a.createElement(s.a,null,i.a.createElement(Y,null)),document.getElementById("root"))}},[[36,2,1]]]);
//# sourceMappingURL=main.8ce2414c.chunk.js.map