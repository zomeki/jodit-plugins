import{Jodit as t}from"jodit";class n{init(t){this.jodit=t,this.onFocusFunc=this.onFocus.bind(this),t.events.on("focus",this.onFocusFunc)}destruct(){this.jodit.events.off("focus",this.onFocusFunc),t.currentInstance===this.jodit&&(t.currentInstance=null)}onFocus(n){t.currentInstance=this.jodit}}t.plugins.add("current-instance",n);export{n as default};
//# sourceMappingURL=index.module.mjs.map
