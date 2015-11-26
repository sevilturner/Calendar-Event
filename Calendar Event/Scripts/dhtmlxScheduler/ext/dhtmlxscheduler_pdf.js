/*
@license
dhtmlxScheduler.Net v.3.3.3 

This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
Scheduler.plugin(function(e){!function(){function t(e){return e.replace(E,"\n").replace(w,"")}function a(e,t){e=parseFloat(e),t=parseFloat(t),isNaN(t)||(e-=t);var a=i(e);return e=e-a.width+a.cols*x,isNaN(e)?"auto":100*e/x}function n(e,t,a){e=parseFloat(e),t=parseFloat(t),!isNaN(t)&&a&&(e-=t);var n=i(e);return e=e-n.width+n.cols*x,isNaN(e)?"auto":100*e/(x-(isNaN(t)?0:t))}function i(t){for(var a=0,n=e._els.dhx_cal_header[0].childNodes,i=n[1]?n[1].childNodes:n[0].childNodes,r=0;r<i.length;r++){var s=i[r].style?i[r]:i[r].parentNode,d=parseFloat(s.style.width);

if(!(t>d))break;t-=d+1,a+=d+1}return{width:a,cols:r}}function r(e){return e=parseFloat(e),isNaN(e)?"auto":100*e/b}function s(e,t){return(window.getComputedStyle?window.getComputedStyle(e,null)[t]:e.currentStyle?e.currentStyle[t]:null)||""}function d(t,a){for(var n=parseInt(t.style.left,10),i=0;i<e._cols.length;i++)if(n-=e._cols[i],0>n)return i;return a}function o(t,a){for(var n=parseInt(t.style.top,10),i=0;i<e._colsS.heights.length;i++)if(e._colsS.heights[i]>n)return i;return a}function _(e){return e?"<"+e+">":"";

}function l(e){return e?"</"+e+">":""}function h(e,t,a,n){var i="<"+e+" profile='"+t+"'";return a&&(i+=" header='"+a+"'"),n&&(i+=" footer='"+n+"'"),i+=">"}function c(){var a="",n=e._mode;if(e.matrix&&e.matrix[e._mode]&&(n="cell"==e.matrix[e._mode].render?"matrix":"timeline"),a+="<scale mode='"+n+"' today='"+e._els.dhx_cal_date[0].innerHTML+"'>","week_agenda"==e._mode)for(var i=e._els.dhx_cal_data[0].getElementsByTagName("DIV"),r=0;r<i.length;r++)"dhx_wa_scale_bar"==i[r].className&&(a+="<column>"+t(i[r].innerHTML)+"</column>");
else if("agenda"==e._mode||"map"==e._mode){var i=e._els.dhx_cal_header[0].childNodes[0].childNodes;a+="<column>"+t(i[0].innerHTML)+"</column><column>"+t(i[1].innerHTML)+"</column>"}else if("year"==e._mode)for(var i=e._els.dhx_cal_data[0].childNodes,r=0;r<i.length;r++)a+="<month label='"+t(i[r].childNodes[0].innerHTML)+"'>",a+=v(i[r].childNodes[1].childNodes),a+=u(i[r].childNodes[2]),a+="</month>";else{a+="<x>";var i=e._els.dhx_cal_header[0].childNodes;a+=v(i),a+="</x>";var s=e._els.dhx_cal_data[0];

if(e.matrix&&e.matrix[e._mode]){a+="<y>";for(var r=0;r<s.firstChild.rows.length;r++){var d=s.firstChild.rows[r];a+="<row><![CDATA["+t(d.cells[0].innerHTML)+"]]></row>"}a+="</y>",b=s.firstChild.rows[0].cells[0].offsetHeight}else if("TABLE"==s.firstChild.tagName)a+=u(s);else{for(s=s.childNodes[s.childNodes.length-1];-1==s.className.indexOf("dhx_scale_holder");)s=s.previousSibling;s=s.childNodes,a+="<y>";for(var r=0;r<s.length;r++)a+="\n<row><![CDATA["+t(s[r].innerHTML)+"]]></row>";a+="</y>",b=s[0].offsetHeight;

}}return a+="</scale>"}function u(e){for(var a="",n=e.firstChild.rows,i=0;i<n.length;i++){for(var r=[],s=0;s<n[i].cells.length;s++)r.push(n[i].cells[s].firstChild.innerHTML);a+="\n<row height='"+e.firstChild.rows[i].cells[0].offsetHeight+"'><![CDATA["+t(r.join("|"))+"]]></row>",b=e.firstChild.rows[0].cells[0].offsetHeight}return a}function v(a){var n,i="";e.matrix&&e.matrix[e._mode]&&(e.matrix[e._mode].second_scale&&(n=a[1].childNodes),a=a[0].childNodes);for(var r=0;r<a.length;r++)i+="\n<column><![CDATA["+t(a[r].innerHTML)+"]]></column>";

if(x=a[0].offsetWidth,n)for(var s=0,d=a[0].offsetWidth,o=1,r=0;r<n.length;r++)i+="\n<column second_scale='"+o+"'><![CDATA["+t(n[r].innerHTML)+"]]></column>",s+=n[r].offsetWidth,s>=d&&(d+=a[o]?a[o].offsetWidth:0,o++),x=n[0].offsetWidth;return i}function f(i){var _="",l=e._rendered,h=e.matrix&&e.matrix[e._mode];if("agenda"==e._mode||"map"==e._mode)for(var c=0;c<l.length;c++)_+="<event><head><![CDATA["+t(l[c].childNodes[0].innerHTML)+"]]></head><body><![CDATA["+t(l[c].childNodes[2].innerHTML)+"]]></body></event>";
else if("week_agenda"==e._mode)for(var c=0;c<l.length;c++)_+="<event day='"+l[c].parentNode.getAttribute("day")+"'><body>"+t(l[c].innerHTML)+"</body></event>";else if("year"==e._mode)for(var l=e.get_visible_events(),c=0;c<l.length;c++){var u=l[c].start_date;for(u.valueOf()<e._min_date.valueOf()&&(u=e._min_date);u<l[c].end_date;){var v=u.getMonth()+12*(u.getFullYear()-e._min_date.getFullYear())-e.week_starts._month,f=e.week_starts[v]+u.getDate()-1,g=i?s(e._get_year_cell(u),"color"):"",m=i?s(e._get_year_cell(u),"backgroundColor"):"";

if(_+="<event day='"+f%7+"' week='"+Math.floor(f/7)+"' month='"+v+"' backgroundColor='"+m+"' color='"+g+"'></event>",u=e.date.add(u,1,"day"),u.valueOf()>=e._max_date.valueOf())break}}else if(h&&"cell"==h.render)for(var l=e._els.dhx_cal_data[0].getElementsByTagName("TD"),c=0;c<l.length;c++){var g=i?s(l[c],"color"):"",m=i?s(l[c],"backgroundColor"):"";_+="\n<event><body backgroundColor='"+m+"' color='"+g+"'><![CDATA["+t(l[c].innerHTML)+"]]></body></event>"}else for(var c=0;c<l.length;c++){var p,y;if(e.matrix&&e.matrix[e._mode])p=a(l[c].style.left),
y=a(l[c].offsetWidth)-1;else{var x=e.config.use_select_menu_space?0:26;p=n(l[c].style.left,x,!0),y=n(l[c].style.width,x)-1}if(!isNaN(1*y)){var w=r(l[c].style.top),E=r(l[c].style.height),k=l[c].className.split(" ")[0].replace("dhx_cal_","");if("dhx_tooltip_line"!==k){var D=e.getEvent(l[c].getAttribute("event_id"));if(D){var f=D._sday,N=D._sweek,M=D._length||0;if("month"==e._mode)E=parseInt(l[c].offsetHeight,10),w=parseInt(l[c].style.top,10)-e.xy.month_head_height,f=d(l[c],f),N=o(l[c],N);else if(e.matrix&&e.matrix[e._mode]){
f=0;var C=l[c].parentNode.parentNode.parentNode;N=C.rowIndex;var L=b;b=l[c].parentNode.offsetHeight,w=r(l[c].style.top),w-=.2*w,b=L}else{if(l[c].parentNode==e._els.dhx_cal_data[0])continue;var O=e._els.dhx_cal_data[0].childNodes[0],T=parseFloat(-1!=O.className.indexOf("dhx_scale_holder")?O.style.left:0);p+=a(l[c].parentNode.style.left,T)}if(_+="\n<event week='"+N+"' day='"+f+"' type='"+k+"' x='"+p+"' y='"+w+"' width='"+y+"' height='"+E+"' len='"+M+"'>","event"==k){_+="<header><![CDATA["+t(l[c].childNodes[1].innerHTML)+"]]></header>";

var g=i?s(l[c].childNodes[2],"color"):"",m=i?s(l[c].childNodes[2],"backgroundColor"):"";_+="<body backgroundColor='"+m+"' color='"+g+"'><![CDATA["+t(l[c].childNodes[2].innerHTML)+"]]></body>"}else{var g=i?s(l[c],"color"):"",m=i?s(l[c],"backgroundColor"):"";_+="<body backgroundColor='"+m+"' color='"+g+"'><![CDATA["+t(l[c].innerHTML)+"]]></body>"}_+="</event>"}}}}return _}function g(t,a,n,i,r,s){var d=!1;"fullcolor"==i&&(d=!0,i="color"),i=i||"color";var o="";if(t){var u=e._date,v=e._mode;a=e.date[n+"_start"](a),
a=e.date["get_"+n+"_end"]?e.date["get_"+n+"_end"](a):e.date.add(a,1,n),o=h("pages",i,r,s);for(var g=new Date(t);+a>+g;g=this.date.add(g,1,n))this.setCurrentView(g,n),o+=_("page")+c().replace("–","-")+f(d)+l("page");o+=l("pages"),this.setCurrentView(u,v)}else o=h("data",i,r,s)+c().replace("–","-")+f(d)+l("data");return o}function m(t,a){var n=e.uid(),i=document.createElement("div");i.style.display="none",document.body.appendChild(i),i.innerHTML='<form id="'+n+'" method="post" target="_blank" action="'+a+'" accept-charset="utf-8" enctype="application/x-www-form-urlencoded"><input type="hidden" name="mycoolxmlbody"/> </form>',
document.getElementById(n).firstChild.value=encodeURIComponent(t),document.getElementById(n).submit(),i.parentNode.removeChild(i)}function p(e,t,a,n,i,r,s){var d="";d="object"==typeof i?y(i):g.apply(this,[e,t,a,i,r,s]),m(d,n)}function y(e){for(var t="<data>",a=0;a<e.length;a++)t+=e[a].source.getPDFData(e[a].start,e[a].end,e[a].view,e[a].mode,e[a].header,e[a].footer);return t+="</data>"}var x,b,w=new RegExp("<[^>]*>","g"),E=new RegExp("<br[^>]*>","g");e.getPDFData=g,e.toPDF=function(e,t,a,n){return p.apply(this,[null,null,null,e,t,a,n]);

},e.toPDFRange=function(t,a,n,i,r,s,d){return"string"==typeof t&&(t=e.templates.api_date(t),a=e.templates.api_date(a)),p.apply(this,arguments)}}()});