import{d as c,r as l,b as r,o as i,c as u,a as t,t as d}from"./index-Dja9HlKk.js";const v={class:"container"},m={class:"text-center"},b=c({__name:"SetsView",setup(S){const e=l(0),o=()=>{e.value++,localStorage.setItem("sets",e.value.toString())},n=()=>{e.value>0&&(e.value--,localStorage.setItem("sets",e.value.toString()))},a=()=>{e.value=0,localStorage.setItem("sets",e.value.toString())};return r(()=>{console.log("SetsView mounted");const s=localStorage.getItem("sets");s&&(e.value=parseInt(s))}),(s,g)=>(i(),u("div",v,[t("h1",m,"Sets done: "+d(e.value),1),t("div",{class:"row"},[t("div",{class:"col-6 text-center my-2"},[t("button",{class:"btn btn-warning w-100",onClick:n},"-")]),t("div",{class:"col-6 text-center my-2"},[t("button",{class:"btn btn-success w-100",onClick:o},"+")]),t("div",{class:"col-12 text-center"},[t("button",{class:"btn btn-danger w-100",onClick:a},"reset")])])]))}});export{b as default};
