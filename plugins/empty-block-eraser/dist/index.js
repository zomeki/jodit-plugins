"use strict";var t=require("jodit");class i{init(t){this.jodit=t,this.onBlurFunc=this.onBlur.bind(this),t.events.on("blur",this.onBlurFunc)}destruct(){this.jodit.events.off("blur",this.onBlurFunc)}onBlur(t){"<p><br></p>"===this.jodit.value&&(this.jodit.value="")}}t.Jodit.plugins.add("block-normalizer",i),module.exports=i;
//# sourceMappingURL=index.js.map
