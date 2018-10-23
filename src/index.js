/**
 * blear.utils.copy
 * @author ydr.me
 * @create 2016年06月04日14:09:36
 */

'use strict';

var modi = require('blear.core.modification');
var string = require('blear.utils.string');

var inputEl = modi.create('input', {
    style: {
        position: 'absolute',
        opacity: 0,
        width: 1,
        height: 1,
        top: -999,
        left: -999
    }
}, {
    readOnly: true
});
modi.insert(inputEl);

/**
 * 复制【必须是由用户触发，否则无效】
 * @param [text] {*} 待复制文本
 * @returns {boolean} 是否复制成功
 */
module.exports = function (text) {
    var value = string.ify(text);
    inputEl.value = value;
    inputEl.select();
    inputEl.setSelectionRange(0, value.length);
    try {
        return document.execCommand('copy');
    } catch (err) {
        return false;
    }
};
