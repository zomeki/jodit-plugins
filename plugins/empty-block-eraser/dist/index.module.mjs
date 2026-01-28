import{Jodit as t}from"jodit";class i{init(t){this.jodit=t,this.onBlurFunc=this.onBlur.bind(this),t.events.on("blur",this.onBlurFunc)}destruct(){this.jodit.events.off("blur",this.onBlurFunc)}onBlur(t){"<p><br></p>"===this.jodit.value&&(this.jodit.value="")}}t.plugins.add("block-normalizer",i);export{i as default};
//# sourceMappingURL=index.module.mjs.map
