import*as t from"jodit";var i=t.Jodit||t;class o{init(t){this.jodit=t,this.onBlurFunc=this.onBlur.bind(this),t.events.on("blur",this.onBlurFunc)}destruct(){this.jodit.events.off("blur",this.onBlurFunc)}onBlur(t){"<p><br></p>"===this.jodit.value&&(this.jodit.value="")}}i.plugins.add("block-normalizer",o);export{o as default};
//# sourceMappingURL=index.module.mjs.map
