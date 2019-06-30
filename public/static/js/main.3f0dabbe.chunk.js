(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,n){e.exports=n(70)},44:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(34),i=n.n(o),c=(n(44),n(13)),s=n(14),d=n(6),l=n(7),u=n(10),h=n(8),p=n(1),m=n(9),f=n(3),v=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={editing:!1,name:""},n.toggleEditing=n.toggleEditing.bind(Object(p.a)(n)),n.updateName=n.updateName.bind(Object(p.a)(n)),n.doneEditing=n.doneEditing.bind(Object(p.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"toggleEditing",value:function(){console.log("editing");var e=!this.state.editing;this.setState({editing:e})}},{key:"updateName",value:function(e){var t=Object(f.a)({},this.state);t.name=e.target.value,this.setState(t)}},{key:"doneEditing",value:function(){var e=Object(f.a)({},this.state);e.editing=!1,this.setState(e),this.props.edit(this.state.name)}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t,n){if(e.name!==this.props.name){var a=Object(f.a)({},this.state);a.name=this.props.name,this.setState(a)}}},{key:"render",value:function(){var e=this.props,t=e.path,n=e.name;return r.a.createElement(r.a.Fragment,null,this.state.editing&&this.props.edit?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{value:this.state.name,onChange:this.updateName}),r.a.createElement("button",{onClick:this.doneEditing},"done")):r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:t,style:{textTransform:"capitalize"}},n),this.props.edit?r.a.createElement("button",{onClick:this.toggleEditing},"edit"):""))}}]),t}(r.a.Component);var b=function(e){return console.log(e),r.a.createElement("ul",null,e.links.map(function(e,t){return r.a.createElement("li",{key:t,style:{float:"left",listStyle:"none",padding:"5px"}},r.a.createElement(v,{path:e.path,name:e.name,edit:e.edit?e.edit:void 0}))}))},g=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={redirectToCreate:!1},n.redirectToCreate=n.redirectToCreate.bind(Object(p.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"redirectToCreate",value:function(){this.setState({redirectToCreate:!0})}},{key:"render",value:function(){var e=this.props.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{links:[{name:"projects",path:"/projects"}]}),r.a.createElement("button",{onClick:this.redirectToCreate},"New Project"),this.state.redirectToCreate?r.a.createElement(s.a,{to:"".concat(e.path,"/create")}):"",r.a.createElement("ul",{style:{clear:"both"}},r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat(e.url,"/1")},"Project 1")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat(e.url,"/2")},"Project 2"))))}}]),t}(r.a.Component),j=n(17),E=n.n(j),O=n(37),y=n.n(O),k={get:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.send(e,"get",{},t)},post:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.send(e,"post",t,n)},put:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.send(e,"put",t,n)},delete:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.send(e,"delete",t,n)},send:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return n.length>0&&!0===a&&(n=y.a.stringify(n)),new Promise(function(a,r){E.a.defaults.headers["X-Requested-With"]="XMLHttpRequest";var o=document.querySelector('meta[name="csrf-token"]').getAttribute("content");o&&(E.a.defaults.headers["CSRF-Token"]=o),E.a.defaults.withCredentials=!0,E.a[t.toLowerCase()](e,n).then(function(e){return a(e.data)}).catch(function(e){if(e.response){var t=e.response.status;if(401===t||403===t||419===t)return console.log("Ajax error: ",e),void(window.location.href="/login");r(422===t?{validationErrors:e.response.data.errors}:e.response.data)}else e.request?console.log(e.request):console.log("Error",e.message);console.log(e.config)})})}},N=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={id:0,title:"",redirectToEdit:!1},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.createProject=n.createProject.bind(Object(p.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=Object(f.a)({},this.state);t.title=e.target.value,this.setState(t)}},{key:"createProject",value:function(){var e=this;k.post("/projects",{title:this.state.title}).then(function(t){if(console.log(t),"undefined"!==typeof t.project.id){var n=Object(f.a)({},e.state);n.id=t.project.id,n.redirectToEdit=!0,e.setState(n)}}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{links:[{name:"projects",path:"/projects"},{name:"create",path:"/projects/create"}]}),r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleChange,type:"text",value:this.state.title}),r.a.createElement("button",{onClick:this.createProject},"Create")),this.state.redirectToEdit?r.a.createElement(s.a,{to:"/projects/".concat(this.state.id)}):"")}}]),t}(r.a.Component),C=n(38);n(68);var P=function(e){var t=function(e){for(var t=0;t<e.length;t++){var n=Object(f.a)({},e[t]);if(0===n.parent_id)return n.nodes=[],n}return{}}(e);return 0===t.length?t:(t.nodes=function e(t,n){for(var a=[],r=0;r<n.length;r++){var o=Object(f.a)({},n[r]);o.parent_id===t&&(o.nodes=e(o.id,n),a.push(o))}return a.sort(function(e,t){return e.id-t.id}),a}(t.id,e),t)},S=(n(69),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={node:{id:"",title:"",url:"",parent_id:!1}},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.updateNode=n.updateNode.bind(Object(p.a)(n)),n.changeParent=n.changeParent.bind(Object(p.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=Object(f.a)({},this.state.node);t[e.target.name]=e.target.value,this.setState({node:t})}},{key:"changeParent",value:function(e){var t=Object(f.a)({},this.state.node);t.parent_id=e,this.setState({node:t})}},{key:"updateNode",value:function(){this.props.updateNode(this.state.node)}},{key:"componentDidMount",value:function(){this.setState({node:this.props.node})}},{key:"render",value:function(){var e=this,t=this.state.node;return r.a.createElement("span",{className:"node-expansion"},r.a.createElement("input",{onChange:this.handleChange,name:"title",value:t.title}),r.a.createElement("input",{onChange:this.handleChange,name:"url",value:t.url}),this.props.availableParents.map(function(t){return r.a.createElement("span",{key:t.id,onClick:function(){return e.changeParent(t.id)},style:{padding:"5px"}},t.title)}),r.a.createElement("button",{onClick:this.updateNode},"done"))}}]),t}(r.a.Component)),x=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={expandNode:0,nodes:[]},n.toggleExpandNode=n.toggleExpandNode.bind(Object(p.a)(n)),n.updateNode=n.updateNode.bind(Object(p.a)(n)),n.availableParents=n.availableParents.bind(Object(p.a)(n)),n.createNode=n.createNode.bind(Object(p.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"toggleExpandNode",value:function(e,t){this.setState({expandNode:t})}},{key:"availableParents",value:function(e,t){var n=function e(t){var n=[],a={id:t.id,parent_id:t.parent_id,title:t.title,url:t.url};if(n.push(a),"undefined"!==typeof t.nodes&&t.nodes.length>0)for(var r=0;r<t.nodes.length;r++)for(var o=e(t.nodes[r]),i=0;i<o.length;i++)n.push(o[i]);return n=n.sort(function(e,t){return e.id-t.id})}(e).map(function(e){return e.id});return t.filter(function(t){return-1===n.indexOf(t.id)&&t.id!==e.parent_id})}},{key:"createNode",value:function(e,t){e.stopPropagation(),this.props.createNode(t)}},{key:"updateNode",value:function(e){var t=this;setTimeout(function(e){return t.setState({expandNode:0})},100),this.props.updateNode(e)}},{key:"buildTree",value:function(e,t){var n=this;return r.a.createElement("ul",null,e.map(function(e){return r.a.createElement("li",{key:"li_"+e.id},r.a.createElement("span",{style:{position:"relative"},onClick:function(t){return n.toggleExpandNode(t,e.id)},className:"node-title"},e.title,r.a.createElement("button",{onClick:function(t){return n.createNode(t,e.id)}},"+"),n.state.expandNode===e.id?r.a.createElement(S,{node:e,availableParents:n.availableParents(e,n.props.nodes),updateNode:n.updateNode}):""),"undefined"!==typeof e[t]&&e[t].length>0?n.buildTree(e[t],t):"")}))}},{key:"componentDidMount",value:function(){var e=[P(this.props.nodes)];this.setState({nodes:e})}},{key:"componentDidUpdate",value:function(e,t,n){if(e.nodes!==this.props.nodes){var a=[P(this.props.nodes)];this.setState({nodes:a})}}},{key:"render",value:function(){var e=this.props.nodesKey?this.props.nodesKey:"nodes";return r.a.createElement("div",null,r.a.createElement("div",{className:"tree"},this.buildTree(this.state.nodes,e)))}}]),t}(r.a.Component),T=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={project:{title:""},nodes:[]},n.createNode=n.createNode.bind(Object(p.a)(n)),n.updateNode=n.updateNode.bind(Object(p.a)(n)),n.editProjectTitle=n.editProjectTitle.bind(Object(p.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"createNode",value:function(e){var t,n,a=this.state.nodes.map(function(e){return JSON.parse(JSON.stringify(e))});a.push({id:(t=1e7,n=9e7,t=Math.ceil(t),n=Math.ceil(n),Math.floor(Math.random()*(n-t))+t),parent_id:e,title:"New Node",url:""}),this.setState({nodes:a})}},{key:"updateNode",value:function(e){for(var t=Object(C.a)(this.state.nodes),n=0;n<t.length;n++)if(e.id===t[n].id)return t[n]=e,void this.setState({nodes:t})}},{key:"editProjectTitle",value:function(e){var t=Object(f.a)({},this.state.project);t.title=e,this.setState({project:t})}},{key:"componentDidMount",value:function(){var e=this;console.log(Object({NODE_ENV:"production",PUBLIC_URL:""}),"");var t="/projects/".concat(this.props.match.params.id);k.get(t,[]).then(function(t){if(console.log(t),"undefined"!==typeof t.project.id){var n=Object(f.a)({},e.state);n.project=t.project,"undefined"!==typeof t.project.nodes&&(n.nodes=t.project.nodes),e.setState(n)}}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=[{name:"projects",path:"/projects"},{name:this.state.project.title,path:"/projects/".concat(this.props.match.params.id),edit:this.editProjectTitle}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{links:e}),r.a.createElement("div",{style:{clear:"both",marginBottom:"30px"}}),this.state.nodes.length<1?"":r.a.createElement(x,{nodes:this.state.nodes,nodesKey:"nodes",createNode:this.createNode,updateNode:this.updateNode}))}}]),t}(r.a.Component);var w=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"".concat(t.path,"/create"),component:N}),r.a.createElement(s.b,{exact:!0,path:"".concat(t.path,"/:id"),component:T}),r.a.createElement(s.b,{exact:!0,path:t.path,component:g})))};var _=function(){return r.a.createElement(c.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{exact:!0,path:"/",render:function(){return r.a.createElement(s.a,{to:"/projects"})}}),r.a.createElement(s.b,{path:"/projects",component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.3f0dabbe.chunk.js.map