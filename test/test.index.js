/**
 * karma 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var copy = require('../src/index.js');
var mod = require('blear.core.modification');

describe('测试文件', function () {

    var buttonEl = mod.create('button');
    buttonEl.innerHTML = '点击复制';
    buttonEl.onclick = function () {
        alert(copy(Math.random()));
    };
    mod.insert(buttonEl);

    it('exports', function () {
        var copied = copy('abc');
        // 因为不是用户主动触发的，所以是 false
        expect(copied).toBe(false);
    });

});
