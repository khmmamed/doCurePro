'use strict';
/**
 * HTML.js
 * Created by khm@med Co(r)p on 11/02/17.
 * 
 * - Update on 19/03/17
 * - Update on 13/04/17
 *****************************************/
var  _       =   require('lodash');

/**
 * 
 * @constructor
 */
function HTML(doctype, html, title, link, meta, script, noscript, body) {
    
    this.doctype = doctype ? '<!DOCTYPE '+doctype+'>' : '<!DOCTYPE html>';

    this.html = html ? '<html '+html+'>' : '<html>';

    this.title = title;

    this.link = link;

    this.meta = meta;

    this.script = script;

    this.head = '';
    
    this.body = body;

}

/**
 * head Tags
 *
 *****************************************/

/**
 * head tag
 * @returns {string}
 */
HTML.prototype.startHead = function () {


    var head = '<head>';

    if(this.title) head += '<title>'+this.title+'</title>';

    if(this.link) {
        for (var i = 0; i<this.link.length; i++) {
            head += '<link ' + this.link[i] + ' />';
        }
    }

    if(this.meta) {
        for (var i = 0; i<this.meta.length; i++) {
            head += '<meta ' + this.meta[i] + ' >';
        }
    }

    if(this.script) {
        for (var i = 0; i<this.script.length; i++) {
            head += '<script ' + this.script[i] + ' ></script>';
        }
    }


    return head ;
};

/**
 * close head tag
 * @type {string}
 */
HTML.prototype.closeHead = '</head>';

/**
 * body Tags
 *
 *****************************************/

/**
 * open body tag
 * @param attr
 * @returns {string}
 */
HTML.prototype.startBody = function (attr) {

    return '<body'+ this.attribute(attr) +'>';
};

/**
 * close body tag
 * @type {string}
 */
HTML.prototype.closeBody = '</body>';

/**
 * open header
 * @param attr
 * @returns {string}
 */
HTML.prototype.startHeader = function (attr) {

    return '<header'+ this.attribute(attr) +'>';
};

/**
 * close header
 * @type {string}
 */
HTML.prototype.closeHeader = '</header>';

/**
 * start nav
 * @param attr
 * @returns {string}
 */
HTML.prototype.startNav = function (attr) {

    return '<nav'+ this.attribute(attr) +'>';
};

/**
 * close nav
 * @type {string}
 */
HTML.prototype.closeNav = '</nav>';

/**
 * start a
 * @param attr
 * @returns {string}
 */
HTML.prototype.startA = function (attr) {

    return '<a '+ this.attribute(attr) +'>';
};

/**
 * close a
 * @type {string}
 */
HTML.prototype.closeA = '</a>';

/**
 * Generate new div
 * 
 * @param attr
 * @returns {string}
 */
HTML.prototype.startDiv = function (attr) {

    return '<div '+ this.attribute(attr) +'>';
};

/**
 * start h
 * @param level
 * @param attr
 * @returns {string}
 */
HTML.prototype.startH = function (level, attr) {

    return '<h'+level+ this.attribute(attr) +'>';
};

/**
 * end h4
 * @param level
 * @returns {string}
 */
HTML.prototype.endH = function (level) {

    return '</h'+level+'>';
};

/**
 * Generate new ul tag
 * 
 * @param attr
 * @returns {string}
 */
HTML.prototype.startUl = function (attr) {
    
    return '<ul'+ this.attribute(attr) + '>';
};

/**
 * Generate new li tag
 * with attr
 * 
 * @param attr
 * @returns {string}
 */
HTML.prototype.startLi = function (attr) {
    
    
    return '<li'+ this.attribute(attr) + '>';
};

/**
 * close li
 * @param attr
 * @returns {string}
 */
HTML.prototype.endLi = '</li>';

/**
 * start i
 * @param attr
 * @returns {string}
 */
HTML.prototype.startI = function (attr) {
    
    
    return '<i'+ this.attribute(attr) + '>';
};

/**
 * end i
 * @type {string}
 */
HTML.prototype.endI = '</i>';

/**
 * Create list menu
 * 
 * @param list
 * @returns {string}
 */
HTML.prototype.startList = function (list) {
    
    var li = '';
    
    _.forEach(list, function (value) {
       
        li += '<li>'+value+'</li>';
    });
    
    return li;
};

/**
 * prepare attributes
 * 
 * @param attr
 * @returns {string}
 */
HTML.prototype.attribute = function (attr) {

    var attribute = '';

    _.forEach(attr, function (value, key) {
        attribute += ' '+ key + '= "' + value + '" ';
    });
    
    return attribute;
};

/**
 * Generate new img tag
 * 
 * @param src
 * @param alt
 * @param width
 * @param height
 * @param attr
 * @returns {string}
 */
HTML.prototype.img = function (src, alt, width, height, attr) {

    var img = '';

    if (src) img += '<img src="'+src+'" ';
    if (alt) img += 'alt="'+alt +'" ';
    if (width) img += 'width="'+width +'" ';
    if (height) img += 'width="'+height +'" ';
    if (attr) img += this.attribute(attr);
    
    img += '/>';
    
    return img
};

/**
 * generate new form tag
 *
 * @param attr
 * @returns {string}
 */
HTML.prototype.startForm = function (attr) {

    return '<form'+this.attribute(attr)+'>';
};

/**
 * end form
 * @type {string}
 */
HTML.prototype.endForm = '</form>';

/**
 * start button
 * @param attr
 * @returns {string}
 */
HTML.prototype.startButton = function (attr) {

    return '<button'+this.attribute(attr)+'>';
};

/**
 * end button
 * @type {string}
 */
HTML.prototype.endButton = '</button>';

/**
 * Generate new input tag
 *
 * @param type
 * @param name
 * @param value
 * @param placeholder
 * @param attr
 * @returns {string}
 */
HTML.prototype.input = function (type, name, value, placeholder,attr) {

    var input = '';

    if (type) input += '<input type="'+ type +'" ';
    if (name) input += 'name="'+ name +'" ';
    if (value) input += 'value="'+ value +'" ';
    if (placeholder) input += 'palceholder="'+ value +'" ';
    if (attr) input += this.attribute(attr);

    input += '/>';

    return input;
};

/**
 * Generate new tag
 * @param row
 * @param col
 * @param attr
 * @returns {string}
 */
HTML.prototype.startTextArea = function (row ,col, attr) {

    var textArea = '<textarea';

    if(row) textArea += ' row="'+ row + '"';
    if(col) textArea += ' col="'+ col + '"';
    if(attr) textArea += ' '+ this.attribute(attr);

    return textArea += '>';
};

/**
 * Generate new label
 *
 * @param attr
 * @returns {string}
 */
HTML.prototype.startLabel = function (attr) {

    return '<label'+this.attribute(attr)+'>';
};

/**
 * start span
 * @param attr
 * @returns {string}
 */
HTML.prototype.startSpan = function (attr) {

    return '<span'+this.attribute(attr)+'>';
};

/**
 * end span
 * @type {string}
 */
HTML.prototype.endSpan = '</span>';

/**
 * Generate
 * 
 * @param multiple
 * @param attr
 * @returns {string}
 */
HTML.prototype.select = function (multiple, attr) {
    var select = '<select';
    
    if(multiple) select += ' multiple';
    if(attr) select += ' '+this.attribute(attr);
    
    return select += '>';
};

/**
 * Comments
 * @param text
 * @returns {string}
 */
HTML.prototype.comments = function (text) {

    return '<!-- '+ text + ' -->';
};


//Close tags
//----------

/**
 * close label
 * @type {string}
 */
HTML.prototype.endLabel = '</label>';

/**
 * close textarea tag
 * @type {string}
 */
HTML.prototype.endTextArea = '</textarea>';

/**
 * Close form
 * @type {string}
 */
HTML.prototype.endForm = '</form>';

/**
 * close div tag
 *
 * @type {string}
 */
HTML.prototype.endDiv = '</div>';

/**
 * close ul tag
 * 
 * @type {string}
 */
HTML.prototype.endUl = '</ul>';

/**
 * Close li tag
 * 
 * @type {string}
 */
HTML.prototype.endLi = '</li>';


module.exports = HTML;