(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(71)},44:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),i=a.n(o),c=(a(44),a(13)),s=a(14),l=a(6),d=a(7),u=a(10),p=a(8),h=a(1),m=a(9),f=a(3),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={editing:!1,name:""},a.toggleEditing=a.toggleEditing.bind(Object(h.a)(a)),a.updateName=a.updateName.bind(Object(h.a)(a)),a.doneEditing=a.doneEditing.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"toggleEditing",value:function(){var e=!this.state.editing;this.setState({editing:e})}},{key:"updateName",value:function(e){var t=Object(f.a)({},this.state);t.name=e.target.value,this.setState(t)}},{key:"doneEditing",value:function(){var e=Object(f.a)({},this.state);e.editing=!1,this.props.edit(this.state.name),this.setState(e)}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t,a){if(e.name!==this.props.name){var n=Object(f.a)({},this.state);n.name=this.props.name,this.setState(n)}}},{key:"render",value:function(){var e=this.props,t=e.path,a=e.name;return r.a.createElement(r.a.Fragment,null,this.state.editing&&this.props.edit?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{value:this.state.name,onChange:this.updateName}),r.a.createElement("button",{onClick:this.doneEditing},"done")):r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:t,style:{textTransform:"capitalize"}},a),this.props.edit?r.a.createElement("button",{onClick:this.toggleEditing},"edit"):""))}}]),t}(r.a.Component);var b=function(e){return console.log(e),r.a.createElement("ul",null,e.links.map(function(e,t){return r.a.createElement("li",{key:t,style:{float:"left",listStyle:"none",padding:"5px"}},r.a.createElement(v,{path:e.path,name:e.name,edit:e.edit?e.edit:void 0}))}))},j=a(17),g=a.n(j),E=a(37),N=a.n(E),y={get:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.send(e,"get",{},t)},post:function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.send(e,"post",t,a)},put:function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.send(e,"put",t,a)},delete:function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.send(e,"delete",t,a)},send:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return a.length>0&&!0===n&&(a=N.a.stringify(a)),new Promise(function(n,r){g.a.defaults.headers["X-Requested-With"]="XMLHttpRequest";var o=document.querySelector('meta[name="csrf-token"]').getAttribute("content");o&&(g.a.defaults.headers["CSRF-Token"]=o),g.a.defaults.withCredentials=!0,g.a[t.toLowerCase()](e,a).then(function(e){return n(e.data)}).catch(function(e){if(e.response){var t=e.response.status;if(401===t||403===t||419===t)return console.log("Ajax error: ",e),void(window.location.href="/login");r(422===t?{validationErrors:e.response.data.errors}:e.response.data)}else e.request?console.log(e.request):console.log("Error",e.message);console.log(e.config)})})}},O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={redirectToCreate:!1,projects:[]},a.redirectToCreate=a.redirectToCreate.bind(Object(h.a)(a)),a.deleteProject=a.deleteProject.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"redirectToCreate",value:function(){this.setState({redirectToCreate:!0})}},{key:"deleteProject",value:function(e){y.delete("".concat(this.props.match.url,"/").concat(e)).catch(function(e){return console.error(e)}),this.setState({projects:this.state.projects.filter(function(t){return t.id!==e})})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.path;y.get(t).then(function(t){console.log(t),void 0!==typeof t.projects&&e.setState({projects:t.projects})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this,t=this.props.match;return r.a.createElement("div",{className:"grid-wrapper"},r.a.createElement("div",{className:"topnav-area"}),r.a.createElement("div",{className:"sidebar-area"},r.a.createElement("ul",null,r.a.createElement("li",null,"item 1"),r.a.createElement("li",null,"item 1"),r.a.createElement("li",null,"item 1"),r.a.createElement("li",null,"item 1"))),r.a.createElement("div",{className:"breadcrumbs-area"},r.a.createElement(b,{links:[{name:"projects",path:"/projects"}]})),r.a.createElement("div",{className:"content-area"},r.a.createElement("button",{onClick:this.redirectToCreate},"New Project"),this.state.redirectToCreate?r.a.createElement(s.a,{to:"".concat(t.path,"/create")}):"",r.a.createElement("ul",{style:{clear:"both"}},this.state.projects.map(function(a){return r.a.createElement("li",{key:a.id},r.a.createElement(c.b,{to:"".concat(t.url,"/").concat(a.id)},a.title),r.a.createElement("button",{onClick:function(){return e.deleteProject(a.id)}},"delete"))}))))}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={id:0,title:"",redirectToEdit:!1},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.createProject=a.createProject.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){var t=Object(f.a)({},this.state);t.title=e.target.value,this.setState(t)}},{key:"createProject",value:function(){var e=this;y.post("/projects",{title:this.state.title}).then(function(t){if(console.log(t),"undefined"!==typeof t.project.id){var a=Object(f.a)({},e.state);a.id=t.project.id,a.redirectToEdit=!0,e.setState(a)}}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{links:[{name:"projects",path:"/projects"},{name:"create",path:"/projects/create"}]}),r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleChange,type:"text",value:this.state.title}),r.a.createElement("button",{onClick:this.createProject},"Create")),this.state.redirectToEdit?r.a.createElement(s.a,{to:"/projects/".concat(this.state.id)}):"")}}]),t}(r.a.Component),C=a(38);a(68);var P=function(e){var t=function(e){for(var t=0;t<e.length;t++){var a=Object(f.a)({},e[t]);if(0===a.parent_id)return a.nodes=[],a}return{}}(e);return 0===t.length?t:(t.nodes=function e(t,a){for(var n=[],r=0;r<a.length;r++){var o=Object(f.a)({},a[r]);o.parent_id===t&&(o.nodes=e(o.id,a),n.push(o))}return n.sort(function(e,t){return e.id-t.id}),n}(t.id,e),t)},S=(a(69),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={node:{id:"",title:"",url:"",parent_id:!1}},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.updateNode=a.updateNode.bind(Object(h.a)(a)),a.changeParent=a.changeParent.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){var t=Object(f.a)({},this.state.node);t[e.target.name]=e.target.value,this.setState({node:t})}},{key:"changeParent",value:function(e){var t=Object(f.a)({},this.state.node);t.parent_id=e,this.setState({node:t})}},{key:"updateNode",value:function(){this.props.updateNode(this.state.node)}},{key:"componentDidMount",value:function(){this.setState({node:this.props.node})}},{key:"render",value:function(){var e=this,t=this.state.node;return r.a.createElement("span",{className:"node-expansion"},r.a.createElement("input",{onChange:this.handleChange,name:"title",value:t.title}),r.a.createElement("input",{onChange:this.handleChange,name:"url",value:t.url}),this.props.availableParents.map(function(t){return r.a.createElement("span",{key:t.id,onClick:function(){return e.changeParent(t.id)},style:{padding:"5px"}},t.title)}),r.a.createElement("button",{onClick:this.updateNode},"done"))}}]),t}(r.a.Component)),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={expandNode:0,nodes:[]},a.toggleExpandNode=a.toggleExpandNode.bind(Object(h.a)(a)),a.updateNode=a.updateNode.bind(Object(h.a)(a)),a.availableParents=a.availableParents.bind(Object(h.a)(a)),a.createNode=a.createNode.bind(Object(h.a)(a)),a.deleteNode=a.deleteNode.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"toggleExpandNode",value:function(e,t){this.setState({expandNode:t})}},{key:"availableParents",value:function(e,t){var a=function e(t){var a=[],n={id:t.id,parent_id:t.parent_id,title:t.title,url:t.url};if(a.push(n),"undefined"!==typeof t.nodes&&t.nodes.length>0)for(var r=0;r<t.nodes.length;r++)for(var o=e(t.nodes[r]),i=0;i<o.length;i++)a.push(o[i]);return a=a.sort(function(e,t){return e.id-t.id})}(e).map(function(e){return e.id});return t.filter(function(t){return-1===a.indexOf(t.id)&&t.id!==e.parent_id})}},{key:"createNode",value:function(e,t){e.stopPropagation(),this.props.createNode(t)}},{key:"deleteNode",value:function(e,t){e.stopPropagation(),this.props.deleteNode(t)}},{key:"updateNode",value:function(e){var t=this;setTimeout(function(e){return t.setState({expandNode:0})},100),this.props.updateNode(e)}},{key:"buildTree",value:function(e,t){var a=this;return r.a.createElement("ul",null,e.map(function(e){return r.a.createElement("li",{key:"li_"+e.id},r.a.createElement("span",{style:{position:"relative"},onClick:function(t){return a.toggleExpandNode(t,e.id)},className:"node-title"},e.title,r.a.createElement("button",{onClick:function(t){return a.createNode(t,e.id)}},"+"),r.a.createElement("button",{onClick:function(t){return a.deleteNode(t,e.id)}},"-"),a.state.expandNode===e.id?r.a.createElement(S,{node:e,availableParents:a.availableParents(e,a.props.nodes),updateNode:a.updateNode}):""),"undefined"!==typeof e[t]&&e[t].length>0?a.buildTree(e[t],t):"")}))}},{key:"componentDidMount",value:function(){var e=[P(this.props.nodes)];this.setState({nodes:e})}},{key:"componentDidUpdate",value:function(e,t,a){if(e.nodes!==this.props.nodes){var n=[P(this.props.nodes)];this.setState({nodes:n})}}},{key:"render",value:function(){var e=this.props.nodesKey?this.props.nodesKey:"nodes";return r.a.createElement("div",null,r.a.createElement("div",{className:"tree"},this.buildTree(this.state.nodes,e)))}}]),t}(r.a.Component),x=(a(70),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={project:{id:0,title:""},nodes:[]},a.createNode=a.createNode.bind(Object(h.a)(a)),a.updateNode=a.updateNode.bind(Object(h.a)(a)),a.deleteNode=a.deleteNode.bind(Object(h.a)(a)),a.editProjectTitle=a.editProjectTitle.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"createNode",value:function(e){var t,a,n=this,r={id:(t=1e7,a=9e7,t=Math.ceil(t),a=Math.ceil(a),Math.floor(Math.random()*(a-t))+t),parent_id:e,title:"New Node",url:""};y.post("/projects/".concat(this.props.match.params.id,"/nodes"),r).then(function(e){if("undefined"!==typeof e.node){var t=n.state.nodes.map(function(t){return t.id===r.id&&(t.id=e.node.id),t});n.setState({nodes:t})}}).catch(function(e){return console.error(e)});var o=this.state.nodes.map(function(e){return JSON.parse(JSON.stringify(e))});o.push(r),this.setState({nodes:o})}},{key:"updateNode",value:function(e){for(var t=Object(C.a)(this.state.nodes),a=0;a<t.length;a++)if(e.id===t[a].id)return t[a]=e,y.put("/projects/".concat(this.props.match.params.id,"/nodes/").concat(e.id),e).catch(function(e){return console.error(e)}),void this.setState({nodes:t})}},{key:"deleteNode",value:function(e){y.delete("/projects/".concat(this.props.match.params.id,"/nodes/").concat(e)).catch(function(e){return console.error(e)});var t=this.state.nodes.filter(function(t){return t.id!==e});this.setState({nodes:t})}},{key:"editProjectTitle",value:function(e){var t=Object(f.a)({},this.state.project);t.title=e,console.log(this.props.match.url),y.put(this.props.match.url,t).catch(function(e){return console.error(e)}),this.setState({project:t})}},{key:"componentDidMount",value:function(){var e=this;console.log(Object({NODE_ENV:"production",PUBLIC_URL:""}),"");var t="/projects/".concat(this.props.match.params.id);y.get(t,[]).then(function(t){if(console.log(t),"undefined"!==typeof t.project.id){var a=Object(f.a)({},e.state);a.project=t.project,"undefined"!==typeof t.project.nodes&&(a.nodes=t.project.nodes),e.setState(a)}}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=[{name:"projects",path:"/projects"},{name:this.state.project.title,path:"/projects/".concat(this.props.match.params.id),edit:this.editProjectTitle}];return r.a.createElement("div",{className:"grid-wrapper"},r.a.createElement("div",{className:"topnav-area"}),r.a.createElement("div",{className:"sidebar-area"},r.a.createElement("h3",null,"Player settings"),r.a.createElement("label",null,"Autoplay"),r.a.createElement("input",{type:"checkbox"})),r.a.createElement("div",{className:"breadcrumbs-area"},r.a.createElement(b,{links:e}),r.a.createElement("div",{style:{clear:"both",marginBottom:"30px"}})),r.a.createElement("div",{className:"content-area"},this.state.nodes.length<1?"":r.a.createElement(w,{nodes:this.state.nodes,nodesKey:"nodes",createNode:this.createNode,updateNode:this.updateNode,deleteNode:this.deleteNode}),r.a.createElement("div",{className:"player-preview-popup-container"},0!==this.state.project.id?r.a.createElement("div",{className:"player-preview-popup-iframe-wrapper"},r.a.createElement("iframe",{src:"https://localhost:3000?projectId=".concat(this.state.project.id),allow:"autoplay"})):"No project")))}}]),t}(r.a.Component));var T=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"".concat(t.path,"/create"),component:k}),r.a.createElement(s.b,{exact:!0,path:"".concat(t.path,"/:id"),component:x}),r.a.createElement(s.b,{exact:!0,path:t.path,component:O})))};var _=function(){return r.a.createElement(c.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{exact:!0,path:"/",render:function(){return r.a.createElement(s.a,{to:"/projects"})}}),r.a.createElement(s.b,{path:"/projects",component:T})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.565e68d6.chunk.js.map