(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n(6),s=n.n(r),i=n(2),u=n(7),j=(n(13),function(e){var t=e.num,n=e.team,r=e.teamSwitch,s=e.addTable,u=e.winner,j=e.count,o=e.updateCount,l=Object(a.useState)(!1),b=Object(i.a)(l,2),d=b[0],O=b[1],f=Object(a.useState)(" "),h=Object(i.a)(f,2),m=h[0],v=h[1],x=n?"X":"O";return Object(a.useEffect)((function(){d&&(s(t,x),r(),v(x),o(j+1))}),[d]),Object(a.useEffect)((function(){0===j&&(O(!1),v(" "))}),[j]),d||u?Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"marker border p-0",children:m})}):Object(c.jsx)("div",{onClick:function(){d||O(!0)},children:Object(c.jsx)("div",{className:"marker border p-0",children:m})})}),o=function(e){var t=e.team,n=e.setTeam,r=e.setWinner,s=e.count,o=e.updateCount,l=e.winner,b=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],d=Object(a.useState)([]),O=Object(i.a)(d,2),f=O[0],h=O[1],m=function(){n(!t)},v=function(e,t){var n=Object(u.a)(f);n[e]=t,h(n)};Object(a.useEffect)((function(){var e=function(){for(var e=0;e<b.length;e++){var t=Object(i.a)(b[e],3),n=t[0],c=t[1],a=t[2];if(f[n]&&f[n]===f[c]&&f[n]===f[a])return f[n]}}();if(0===s)return h([]);e&&r(e)}),[s]);var x=function(){for(var e=[],n=0;n<arguments.length;n++)e.push(Object(c.jsx)("div",{className:"col-sm p-0",children:Object(c.jsx)(j,{count:s,updateCount:o,winner:l,num:n<0||arguments.length<=n?void 0:arguments[n],team:t,addTable:v,teamSwitch:m})},n<0||arguments.length<=n?void 0:arguments[n]));return Object(c.jsx)("div",{className:"row",children:e},arguments.length<=0?void 0:arguments[0])};return Object(c.jsxs)("div",{children:[x(1,2,3),x(4,5,6),x(7,8,9)]})},l=function(e){var t=e.team,n=e.winner,a=e.count,r=e.updateCount;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"p-3",children:["Current Player: ",t]}),Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)("button",{onClick:function(){r(0)},type:"button",className:"btn btn-secondary",children:"Restart"}),n?Object(c.jsxs)("div",{className:"alert alert-success text-center m-3",role:"alert",children:[n," is the Winner! Press Restart to play again"]}):9===a?Object(c.jsx)("div",{className:"alert alert-warning text-center m-3",role:"alert",children:"Draw! Press Restart to play again"}):""]})]})},b=function(){var e=Object(a.useState)("false"),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(null),u=Object(i.a)(s,2),j=u[0],b=u[1],d=Object(a.useState)(0),O=Object(i.a)(d,2),f=O[0],h=O[1],m=n?"X":"O";return Object(a.useEffect)((function(){0===f&&(b(null),r("false"))}),[f]),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{children:"Tic Tac Toe"}),Object(c.jsx)(o,{team:n,setTeam:r,setWinner:b,count:f,updateCount:h,winner:j}),Object(c.jsx)(l,{team:m,winner:j,count:f,updateCount:h})]})};s.a.render(Object(c.jsx)(b,{}),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e0be970b.chunk.js.map