const _0x575f32 = function () {
  let _0x518361 = true;
  return function (_0x38041c, _0x23c080) {
    const _0x239486 = _0x518361 ? function () {
      if (_0x23c080) {
        const _0x15720a = _0x23c080.apply(_0x38041c, arguments);
        _0x23c080 = null;
        return _0x15720a;
      }
    } : function () {};
    _0x518361 = false;
    return _0x239486;
  };
}();
const _0x56e253 = _0x575f32(this, function () {
  return _0x56e253.toString().search('(((.+)+)+)+$').toString().constructor(_0x56e253).search("(((.+)+)+)+$");
});
_0x56e253();
const _0x3f116e = function () {
  let _0x5efec3 = true;
  return function (_0xf23586, _0x1ebe5c) {
    const _0x86396 = _0x5efec3 ? function () {
      if (_0x1ebe5c) {
        const _0xf0e9e0 = _0x1ebe5c.apply(_0xf23586, arguments);
        _0x1ebe5c = null;
        return _0xf0e9e0;
      }
    } : function () {};
    _0x5efec3 = false;
    return _0x86396;
  };
}();
(function () {
  _0x3f116e(this, function () {
    const _0x2384cc = new RegExp("function *\\( *\\)");
    const _0x36f26e = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x19d3bc = _0x881aba("init");
    if (!_0x2384cc.test(_0x19d3bc + "chain") || !_0x36f26e.test(_0x19d3bc + "input")) {
      _0x19d3bc('0');
    } else {
      _0x881aba();
    }
  })();
})();
const _0x47e613 = function () {
  let _0x30f30f = true;
  return function (_0x13741a, _0x264a94) {
    const _0x41d023 = _0x30f30f ? function () {
      if (_0x264a94) {
        const _0x28402a = _0x264a94.apply(_0x13741a, arguments);
        _0x264a94 = null;
        return _0x28402a;
      }
    } : function () {};
    _0x30f30f = false;
    return _0x41d023;
  };
}();
const _0x18e1e3 = _0x47e613(this, function () {
  const _0x4f426c = function () {
    let _0x275533;
    try {
      _0x275533 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x4aea79) {
      _0x275533 = window;
    }
    return _0x275533;
  };
  const _0xab24cc = _0x4f426c();
  const _0x4ee46e = _0xab24cc.console = _0xab24cc.console || {};
  const _0x18f56f = ["log", 'warn', 'info', "error", 'exception', 'table', 'trace'];
  for (let _0xb4e315 = 0x0; _0xb4e315 < _0x18f56f.length; _0xb4e315++) {
    const _0x57e17f = _0x47e613.constructor.prototype.bind(_0x47e613);
    const _0x343cf1 = _0x18f56f[_0xb4e315];
    const _0x483e31 = _0x4ee46e[_0x343cf1] || _0x57e17f;
    _0x57e17f.__proto__ = _0x47e613.bind(_0x47e613);
    _0x57e17f.toString = _0x483e31.toString.bind(_0x483e31);
    _0x4ee46e[_0x343cf1] = _0x57e17f;
  }
});
_0x18e1e3();
const os = require('os');
const moment = require("moment-timezone");
const Config = require("../config");
let {
  fancytext,
  tlang,
  tiny,
  runtime,
  formatp,
  botpic,
  prefix,
  sck1
} = require('../lib');
const Secktor = require('../lib/src');
Secktor.cmd({
  'pattern': "help",
  'alias': ["menu"],
  'desc': "Help list",
  'category': "general",
  'react': '🦄',
  'filename': __filename
}, async (_0x5d8ab9, _0x19be0d, _0x5e51d5) => {
  const {
    commands: _0x2c6d19
  } = require("../lib");
  if (_0x5e51d5.split(" ")[0x0]) {
    let _0x155d74 = [];
    const _0x5751c3 = _0x2c6d19.find(_0x4abc3e => _0x4abc3e.pattern === _0x5e51d5.split(" ")[0x0].toLowerCase());
    if (!_0x5751c3) {
      return await _0x19be0d.reply("*❌No Such commands.*");
    } else {
      _0x155d74.push("*🍁Command:* " + _0x5751c3.pattern);
    }
    if (_0x5751c3.category) {
      _0x155d74.push("*🧩Category:* " + _0x5751c3.category);
    }
    if (_0x5751c3.alias) {
      _0x155d74.push("*🧩Alias:* " + _0x5751c3.alias);
    }
    if (_0x5751c3.desc) {
      _0x155d74.push("*🧩Description:* " + _0x5751c3.desc);
    }
    if (_0x5751c3.use) {
      _0x155d74.push("*〽️Usage:*\n ```" + prefix + _0x5751c3.pattern + " " + _0x5751c3.use + "```");
    }
    return await _0x19be0d.reply(_0x155d74.join("\n"));
  } else {
    const _0x1af54e = {};
    _0x2c6d19.map(async (_0x36ad4a, _0x36f694) => {
      if (_0x36ad4a.dontAddCommandList === false && _0x36ad4a.pattern !== undefined) {
        if (!_0x1af54e[_0x36ad4a.category]) {
          _0x1af54e[_0x36ad4a.category] = [];
        }
        _0x1af54e[_0x36ad4a.category].push(_0x36ad4a.pattern);
      }
    });
    moment.tz.setDefault('Asia/KOLKATA').locale('id');
    const _0x13ee8d = moment.tz("Asia/Kolkata").format("DD/MM/YYYY");
    let _0xe8637f = "╭────《 " + fancytext(Config.ownername.split(" ")[0x0], 0x3a) + " 》─────❖\n";
    _0xe8637f += '```' + ("│ ╭────────────\n│ │➮Fᴏᴜɴᴅᴇʀ- 𝙎𝙖𝙡𝙢𝙖𝙣 𝘼𝙝𝙢𝙖𝙙\n│ │➮Oᴡɴᴇʀ - " + Config.ownername + "\n│ │➮Pʀᴇꜰɪx - [ " + prefix + " ]\n│ │➮ᴛᴏᴅᴀʏ ɪs - " + _0x13ee8d + "\n│ │➮ᴜᴘ ᴛɪᴍᴇ - " + runtime(process.uptime()) + "\n│ │➮Tʜᴇᴍᴇ - " + tlang().title + "\n│ │➮Mᴇᴍᴏ - " + formatp(os.totalmem() - os.freemem()) + '/' + formatp(os.totalmem()) + "\n│ ╰────────────\n╰───────────────❖\n\n") + '```';
    for (const _0x3ef3fb in _0x1af54e) {
      _0xe8637f += "╭──── *" + tiny(_0x3ef3fb) + "* \n";
      if (_0x5e51d5.toLowerCase() == _0x3ef3fb.toLowerCase()) {
        _0xe8637f = "╭─────💃 *" + tiny(_0x3ef3fb) + "* 💃\n";
        for (const _0x11755d of _0x1af54e[_0x3ef3fb]) {
          _0xe8637f += "│ " + fancytext(_0x11755d, 0x1) + "\n";
        }
        _0xe8637f += "╰━━━━━━━━━━━━━──❖\n";
        break;
      } else {
        for (const _0x3fd338 of _0x1af54e[_0x3ef3fb]) {
          _0xe8637f += "│ " + fancytext(_0x3fd338, 0x1) + "\n";
        }
        _0xe8637f += "╰━━━━━━━━━━━━━━──❖\n";
      }
    }
    _0xe8637f += "┃© Xʟɪᴄᴏɴ-Mᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ";
    let _0x547139 = {
      'image': {
        'url': await botpic()
      },
      'caption': _0xe8637f
    };
    return await _0x5d8ab9.sendMessage(_0x19be0d.chat, _0x547139);
  }
});
Secktor.cmd({
  'pattern': "list",
  'desc': "list menu",
  'category': "general",
  'react': '🦄'
}, async (_0x431752, _0x128fd9) => {
  const {
    commands: _0x2ce8b2
  } = require('../lib');
  let _0x3388fe = "\n  ╭━━*" + Config.botname + "*\n  ┃  Theme: " + tlang().title + "\n  ┃  Prefix: " + prefix + "\n  ┃  Uptime: " + runtime(process.uptime()) + "\n  ┃  Mem: " + formatp(os.totalmem() - os.freemem()) + '/' + formatp(os.totalmem()) + "\n  ╰━━━━━━━━━━━━━━❖\n";
  for (let _0x14d71f = 0x0; _0x14d71f < _0x2ce8b2.length; _0x14d71f++) {
    if (_0x2ce8b2[_0x14d71f].pattern == undefined) {
      continue;
    }
    _0x3388fe += "╭ " + (_0x14d71f + 0x1) + " *" + fancytext(_0x2ce8b2[_0x14d71f].pattern, 0x1) + "*\n";
    _0x3388fe += "╰➛ " + fancytext(_0x2ce8b2[_0x14d71f].desc, 0x1) + "\n";
  }
  return await _0x431752.sendMessage(_0x128fd9.chat, {
    'image': {
      'url': THUMB_IMAGE
    },
    'caption': _0x3388fe + Config.caption,
    'footer': tlang().footer,
    'headerType': 0x4
  });
});
Secktor.cmd({
  'pattern': "owner",
  'desc': "To check ping",
  'category': 'general',
  'react': '🦄',
  'filename': __filename
}, async (_0x34d46e, _0x33b4f3) => {
  const _0x506fdb = "BEGIN:VCARD\nVERSION:3.0\nFN:" + Config.ownername + "\nORG:;\n" + "TEL;type=CELL;type=VOICE;waid=" + global.owner.split(',')[0x0] + ':+' + global.owner.split(',')[0x0] + "\n" + 'END:VCARD';
  let _0x445cb9 = {
    'contacts': {
      'displayName': Config.ownername,
      'contacts': [{
        'vcard': _0x506fdb
      }]
    },
    'contextInfo': {
      'externalAdReply': {
        'title': Config.ownername,
        'body': "Touch here.",
        'renderLargerThumbnail': true,
        'thumbnailUrl': '',
        'thumbnail': log0,
        'mediaType': 0x1,
        'mediaUrl': '',
        'sourceUrl': "https://wa.me/+" + global.owner.split(',')[0x0] + '?text=Hii+bro,I+am+' + _0x33b4f3.pushName
      }
    }
  };
  return _0x34d46e.sendMessage(_0x33b4f3.chat, _0x445cb9, {
    'quoted': _0x33b4f3
  });
});
Secktor.cmd({
  'pattern': "file",
  'desc': "to get extact name where that command is in repo.\nSo user can edit that.",
  'category': "general",
  'react': '🦄',
  'filename': __filename
}, async (_0x29f7f3, _0x123f1d, _0x18cdb2) => {
  const {
    commands: _0x49d01e
  } = require('../lib');
  let _0x56210e = [];
  const _0x3c71ea = _0x49d01e.find(_0x39e332 => _0x39e332.pattern === _0x18cdb2.split(" ")[0x0].toLowerCase());
  if (!_0x3c71ea) {
    return await _0x123f1d.reply("*❌No Such commands.*");
  } else {
    _0x56210e.push("*🍁Command:* " + _0x3c71ea.pattern);
  }
  if (_0x3c71ea.category) {
    _0x56210e.push("*🧩Type:* " + _0x3c71ea.category);
  }
  if (_0x3c71ea.filename) {
    _0x56210e.push("📂FileName: " + _0x3c71ea.filename);
  }
  return _0x123f1d.reply(_0x56210e.join("\n"));
});
function _0x881aba(_0x410475) {
  function _0x4c72b4(_0x377047) {
    if (typeof _0x377047 === "string") {
      return function (_0x59ab53) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x377047 / _0x377047).length !== 0x1 || _0x377047 % 0x14 === 0x0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x4c72b4(++_0x377047);
  }
  try {
    if (_0x410475) {
      return _0x4c72b4;
    } else {
      _0x4c72b4(0x0);
    }
  } catch (_0x54f5f4) {}
}
