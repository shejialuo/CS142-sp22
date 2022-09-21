'use strict';


function Cs142TemplateProcessor(template) {
  this.template = template;
}

/*
  * I think there should be a more elegant way.
  * Well, I don't wanna think.
*/
Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
  let str = "";
  for (let i = 0; i < this.template.length; i++) {
    if (this.template[i] !== '{') {
      str += this.template[i];
    } else {
      i += 2;
      let key = "";
      while (this.template[i] !== '}') {
        key += this.template[i];
        i++;
      }
      i++;
      const word = dictionary[key];
      str += word;
    }
  }
  return str;
};
