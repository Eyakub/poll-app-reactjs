(this["webpackJsonppoll-app"]=this["webpackJsonppoll-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a(48)},29:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(14),r=a.n(o),i=(a(29),a(23)),s=a(8),c=a(9),p=a(11),u=a(10),d=a(49),m=a(50),h=function(e){return 0===e.polls.length?l.a.createElement("p",null,"There is no Poll"):l.a.createElement(d.a,null,e.polls.map((function(t){return l.a.createElement(m.a,{key:t.id,onClick:function(){return e.selectPoll(t.id)},style:{cursor:"pointer"}},t.title.length>30?t.title.substr(0,30)+"...":t.title)})))},g=a(54),v=a(56),f=a(62),E=a(57),O=a(58),b=a(16),y=a(12),C=a.n(y),S=a(51),w=a(52),P=a(53),k=a(55),j=function(e){var t=e.title,a=e.description,n=e.options,o=e.errors,r=e.buttonValue,i=e.handleChange,s=e.handleOptionChange,c=e.createOption,p=e.deleteOption,u=e.handleSubmit;return l.a.createElement(S.a,{onSubmit:u},l.a.createElement(w.a,null,l.a.createElement(P.a,{for:"title"},"Title"),l.a.createElement(g.a,{name:"title",id:"title",placeholder:"Enter your title",value:t,onChange:i,invalid:!!o.title}),o.title&&l.a.createElement(k.a,null,o.title)),l.a.createElement(w.a,null,l.a.createElement(P.a,{for:"Description"},"Description"),l.a.createElement(g.a,{type:"textarea",name:"description",id:"description",placeholder:"Enter your description",value:a,onChange:i,invalid:!!o.description}),o.description&&l.a.createElement(k.a,null,o.description)),l.a.createElement(w.a,null,l.a.createElement(P.a,null,"Enter Options",l.a.createElement("span",{style:{marginLeft:"30px",background:"green",color:"white",padding:"5px",borderRadius:"5px",cursor:"pointer"},onClick:c},"Add option")),n.map((function(e,t){return l.a.createElement("div",{key:e.id,className:"d-flex my-2"},l.a.createElement(g.a,{value:e.value,onChange:function(e){return s(e,t)},invalid:!(!o.options||!o.options[t])}),o.options&&l.a.createElement(k.a,null,o.options),l.a.createElement(v.a,{color:"danger",disabled:n.length<=2,className:"ml-2",onClick:function(){return p(t)}},"Delete"))}))),l.a.createElement(v.a,{color:"primary",type:"submit"},r))},M=[{id:C.a.generate(),value:"",vote:0},{id:C.a.generate(),value:"",vote:0}],x=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={title:"",description:"",options:M,errors:{}},e.componentDidMount=function(){var t=e.props.poll;t&&Object.keys(t).length>0&&e.setState({title:t.title,description:t.description,options:t.options})},e.handleChange=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.handleOptionChange=function(t,a){var n=e.state.options;n[a].value=t.target.value,e.setState({options:n})},e.createOption=function(){var t=e.state.options;t.length<5?(t.push({id:C.a.generate(),value:"",vote:0}),e.setState({options:t})):alert("You can create max 5 options")},e.deleteOption=function(t){var a=e.state.options;a.length>2?(a.splice(t,1),e.setState({options:a})):alert("You must have at least two options.")},e.handleSubmit=function(t){t.preventDefault();var a=e.validate(),n=a.isValid,l=a.errors;if(console.log("isvalid - ",n),n){var o=e.state,r={title:o.title,description:o.description,options:o.options};e.props.isUpdate?(r.id=e.props.poll.id,e.props.submit(r),alert("Updated Successfully")):(e.props.submit(r),t.target.reset(),e.setState({title:"",description:"",options:M,errors:{}}))}else e.setState({errors:l})},e.validate=function(){var t={},a=e.state,n=a.title,l=a.description,o=a.options;n?n.length<20?t.title="Title Too short":n.length>100&&(t.title="Title too long"):t.title="Please provide a title",l?!l>500&&(t.description="Description too long"):t.description="Please provide a description";var r=[];return o.forEach((function(e,t){e.value?e.value.length>100&&(r[t]="Option text too long"):r[t]="Option text Empty"})),r.length>0&&(t.options=r),{errors:t,isValid:0===Object.keys(t).length}},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.options,o=e.errors;return l.a.createElement(j,{title:t,description:a,options:n,buttonValue:this.props.buttonValue||"Create Poll",errors:o,handleChange:this.handleChange,handleOptionChange:this.handleOptionChange,createOption:this.createOption,deleteOption:this.deleteOption,handleSubmit:this.handleSubmit})}}]),a}(l.a.Component),N=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={openModal:!1},e.toggleModal=function(){e.setState({openModal:!e.state.openModal})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{background:"#efefef",padding:"10px"}},l.a.createElement("div",{className:"d-flex mb-5"},l.a.createElement(g.a,{type:"search",placeholder:"Search",value:this.props.searchTerm,onChange:function(t){return e.props.handleSearch(t.target.value)}}),l.a.createElement(v.a,{color:"success",className:"ml-2",onClick:this.toggleModal},"New")),l.a.createElement("h3",null,"List of Polls"),l.a.createElement("hr",null),l.a.createElement(h,{polls:this.props.polls,selectPoll:this.props.selectPoll}),l.a.createElement(f.a,{isOpen:this.state.openModal,toggle:this.toggleModal,unmountOnClose:!0},l.a.createElement(E.a,{toggle:this.toggleModal},"Create new Poll"),l.a.createElement(O.a,null,l.a.createElement(x,{submit:this.props.addNewPoll}))))}}]),a}(l.a.Component),V=a(63),T=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={name:"",selectedOption:"",errors:{}},e.handleChange=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.validate(),n=a.errors;a.isValid?(e.props.getOpinion({pollId:e.props.poll.id,name:e.state.name,selectedOption:e.state.selectedOption}),t.target.reset(),e.setState({name:"",selectedOption:"",errors:{}})):e.setState({errors:n})},e.validate=function(){var t={};return e.state.name?e.state.name.length>20&&(t.name="Name too long"):t.name="Please provide a name",e.state.selectedOption||(t.selectedOption="Please select one option"),{errors:t,isValid:0===Object.keys(t).length}},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(S.a,{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",null,"Options"),l.a.createElement(v.a,{color:"warning",type:"button",className:"ml-auto",onClick:this.props.toggleModal},"Edit"),l.a.createElement(v.a,{type:"button",className:"ml-2",onClick:function(){return e.props.deletePoll(e.props.poll.id)}},"Delete")),this.props.poll.options.map((function(t){return l.a.createElement(w.a,{className:"my-2",key:t.id},l.a.createElement(P.a,{className:"d-flex"},l.a.createElement(V.a,{type:"radio",id:t.id,name:"selectedOption",value:t.id,onChange:e.handleChange,invalid:!!e.state.errors.selectedOption}),t.value,l.a.createElement("span",{style:{padding:"5px 20px",background:"green",color:"white",borderRadius:"5px"},className:"ml-auto"},t.vote),l.a.createElement("span",{style:{padding:"5px 20px",background:"orange",color:"white",borderRadius:"5px"}},e.props.poll.totalVote>0?(100*t.vote/e.props.poll.totalVote).toFixed(2):0,"%")))})),l.a.createElement(w.a,{className:"my-3"},l.a.createElement(P.a,null,"Enter your Name"),l.a.createElement(g.a,{name:"name",placeholder:"Your name",value:this.state.value,onChange:this.handleChange,invalid:!!this.state.errors.name}),this.state.errors.name&&l.a.createElement(k.a,null,this.state.errors.name)),l.a.createElement(v.a,{type:"submit"},"Submit your Opinion"))}}]),a}(l.a.Component),D=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={openModal:!1},e.toggleModal=function(){e.setState({openModal:!e.state.openModal}),console.log(e.state.openModal)},e}return Object(c.a)(a,[{key:"render",value:function(){if(0===Object.keys(this.props.poll).length)return l.a.createElement("div",null,l.a.createElement("h3",null,"Welcome to my Application"),l.a.createElement("p",null,"You can create as many poll as you want. Click the new butotn to createa new poll."));var e=this.props,t=e.poll,a=e.getOpinion,n=e.updatePoll,o=e.deletePoll;return l.a.createElement("div",null,l.a.createElement("h3",null,t.title),l.a.createElement("p",null,t.description),l.a.createElement("br",null),l.a.createElement(T,{poll:t,getOpinion:a,toggleModal:this.toggleModal,deletePoll:o}),l.a.createElement(f.a,{isOpenk:this.state.openModal,toggle:this.toggleModal,unmountOnClose:!0},l.a.createElement(E.a,{toggle:this.toggleModal},"Update Poll"),l.a.createElement(O.a,null,l.a.createElement(x,{poll:t,isUpdate:!0,submit:n,buttonValue:"Update Poll"}))))}}]),a}(l.a.Component),A=a(59),J=a(60),W=a(61),U=[{id:"1",title:"What is your favorite programming language",description:"There are a lot of popular languages available. Among them what is your favorite?",options:[{id:"1",value:"C",vote:0},{id:"2",value:"Python",vote:0},{id:"3",value:"Java",vote:0},{id:"4",value:"JS",vote:0}],created:new Date,totalVote:0,opinions:[]},{id:"2",title:"Which one is the Covid-19 reason?",description:"There are a lot of popular languages available. Among them what is your favorite?",options:[{id:"1",value:"Fever",vote:0},{id:"2",value:"Cold",vote:0},{id:"3",value:"High pressure",vote:0},{id:"4",value:"Others",vote:0}],created:new Date,totalVote:0,opinions:[]},{id:"3",title:"What is your favorite programming language",description:"There are a lot of popular languages available. Among them what is your favorite?",options:[{id:"1",value:"C",vote:0},{id:"2",value:"Python",vote:0},{id:"3",value:"Java",vote:0},{id:"4",value:"JS",vote:0}],created:new Date,totalVote:0,opinions:[]}],L=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={polls:[],selectedPoll:{},searchTerm:""},e.addNewPoll=function(t){t.id=C.a.generate(),t.created=new Date,t.totalVote=0,t.opinions=[],e.setState({polls:e.state.polls.concat(t)})},e.updatePoll=function(t){console.log("update poll ");var a=Object(i.a)(e.state.polls),n=a.find((function(e){return e.id===t.id}));n.title=t.title,n.description=t.description,n.options=t.options,e.setState({polls:a})},e.deletePoll=function(t){var a=e.state.polls.filter((function(e){return e.id!==t}));e.setState({polls:a,selectedPoll:{}})},e.selectPoll=function(t){var a=e.state.polls.find((function(e){return e.id===t}));console.log("select poll - ",t),e.setState({selectedPoll:a})},e.getOpinion=function(t){var a=e.state.polls,n=a.find((function(e){return e.id===t.pollId})),l=n.options.find((function(e){return e.id===t.selectedOption}));n.totalVote++,l.vote++;var o={id:C.a.generate(),name:t.name,selectedOption:t.selectedOption};n.opinions.push(o),e.setState({polls:a})},e.handleSearch=function(t){e.setState({searchTerm:t})},e.performSearch=function(){return e.state.polls.filter((function(t){return t.title.toLowerCase().includes(e.state.searchTerm.toLowerCase())}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({polls:U}),console.log(U)}},{key:"render",value:function(){var e=this.performSearch();return console.log(this.state),l.a.createElement(A.a,{className:"my-5"},l.a.createElement(J.a,null,l.a.createElement(W.a,{md:4},l.a.createElement(N,{polls:e,searchTerm:this.state.searchTerm,handleSearch:this.handleSearch,selectPoll:this.selectPoll,addNewPoll:this.addNewPoll})),l.a.createElement(W.a,{md:8},l.a.createElement(D,{poll:this.state.selectedPoll,getOpinion:this.getOpinion,updatePoll:this.updatePoll,deletePoll:this.deletePoll}))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.cd928b59.chunk.js.map