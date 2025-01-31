(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezadmin_observatory"],{

/***/ "./assets/js/ezadmin/FileSaver.js":
/*!****************************************!*\
  !*** ./assets/js/ezadmin/FileSaver.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 *  A saveAs() & saveTextAs() FileSaver implementation.
 *  2014-06-24
 *
 *  Modify by Brian Chen
 *  Author: Eli Grey, http://eligrey.com
 *  License: X11/MIT
 *    See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs
// IE 10+ (native saveAs)
|| typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator)
// Everyone else
|| function (view) {
  "use strict";

  // IE <10 is explicitly unsupported
  if (typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
    return;
  }
  var doc = view.document
    // only get URL when necessary in case Blob.js hasn't overridden it yet
    ,
    get_URL = function get_URL() {
      return view.URL || view.webkitURL || view;
    },
    save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a"),
    can_use_save_link = !view.externalHost && "download" in save_link,
    click = function click(node) {
      var event = doc.createEvent("MouseEvents");
      event.initMouseEvent("click", true, false, view, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      node.dispatchEvent(event);
    },
    webkit_req_fs = view.webkitRequestFileSystem,
    req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem,
    throw_outside = function throw_outside(ex) {
      (view.setImmediate || view.setTimeout)(function () {
        throw ex;
      }, 0);
    },
    force_saveable_type = "application/octet-stream",
    fs_min_size = 0,
    deletion_queue = [],
    process_deletion_queue = function process_deletion_queue() {
      var i = deletion_queue.length;
      while (i--) {
        var file = deletion_queue[i];
        if (typeof file === "string") {
          // file is an object URL
          get_URL().revokeObjectURL(file);
        } else {
          // file is a File
          file.remove();
        }
      }
      deletion_queue.length = 0; // clear queue
    },
    dispatch = function dispatch(filesaver, event_types, event) {
      event_types = [].concat(event_types);
      var i = event_types.length;
      while (i--) {
        var listener = filesaver["on" + event_types[i]];
        if (typeof listener === "function") {
          try {
            listener.call(filesaver, event || filesaver);
          } catch (ex) {
            throw_outside(ex);
          }
        }
      }
    },
    FileSaver = function FileSaver(blob, name) {
      // First try a.download, then web filesystem, then object URLs
      var filesaver = this,
        type = blob.type,
        blob_changed = false,
        object_url,
        target_view,
        get_object_url = function get_object_url() {
          var object_url = get_URL().createObjectURL(blob);
          deletion_queue.push(object_url);
          return object_url;
        },
        dispatch_all = function dispatch_all() {
          dispatch(filesaver, "writestart progress write writeend".split(" "));
        }
        // on any filesys errors revert to saving with object URLs
        ,
        fs_error = function fs_error() {
          // don't create more object URLs than needed
          if (blob_changed || !object_url) {
            object_url = get_object_url(blob);
          }
          if (target_view) {
            target_view.location.href = object_url;
          } else {
            window.open(object_url, "_blank");
          }
          filesaver.readyState = filesaver.DONE;
          dispatch_all();
        },
        abortable = function abortable(func) {
          return function () {
            if (filesaver.readyState !== filesaver.DONE) {
              return func.apply(this, arguments);
            }
          };
        },
        create_if_not_found = {
          create: true,
          exclusive: false
        },
        slice;
      filesaver.readyState = filesaver.INIT;
      if (!name) {
        name = "download";
      }
      if (can_use_save_link) {
        object_url = get_object_url(blob);
        save_link.href = object_url;
        save_link.download = name;
        click(save_link);
        filesaver.readyState = filesaver.DONE;
        dispatch_all();
        return;
      }
      // Object and web filesystem URLs have a problem saving in Google Chrome when
      // viewed in a tab, so I force save with application/octet-stream
      // http://code.google.com/p/chromium/issues/detail?id=91158
      if (view.chrome && type && type !== force_saveable_type) {
        slice = blob.slice || blob.webkitSlice;
        blob = slice.call(blob, 0, blob.size, force_saveable_type);
        blob_changed = true;
      }
      // Since I can't be sure that the guessed media type will trigger a download
      // in WebKit, I append .download to the filename.
      // https://bugs.webkit.org/show_bug.cgi?id=65440
      if (webkit_req_fs && name !== "download") {
        name += ".download";
      }
      if (type === force_saveable_type || webkit_req_fs) {
        target_view = view;
      }
      if (!req_fs) {
        fs_error();
        return;
      }
      fs_min_size += blob.size;
      req_fs(view.TEMPORARY, fs_min_size, abortable(function (fs) {
        fs.root.getDirectory("saved", create_if_not_found, abortable(function (dir) {
          var save = function save() {
            dir.getFile(name, create_if_not_found, abortable(function (file) {
              file.createWriter(abortable(function (writer) {
                writer.onwriteend = function (event) {
                  target_view.location.href = file.toURL();
                  deletion_queue.push(file);
                  filesaver.readyState = filesaver.DONE;
                  dispatch(filesaver, "writeend", event);
                };
                writer.onerror = function () {
                  var error = writer.error;
                  if (error.code !== error.ABORT_ERR) {
                    fs_error();
                  }
                };
                "writestart progress write abort".split(" ").forEach(function (event) {
                  writer["on" + event] = filesaver["on" + event];
                });
                writer.write(blob);
                filesaver.abort = function () {
                  writer.abort();
                  filesaver.readyState = filesaver.DONE;
                };
                filesaver.readyState = filesaver.WRITING;
              }), fs_error);
            }), fs_error);
          };
          dir.getFile(name, {
            create: false
          }, abortable(function (file) {
            // delete file if it already exists
            file.remove();
            save();
          }), abortable(function (ex) {
            if (ex.code === ex.NOT_FOUND_ERR) {
              save();
            } else {
              fs_error();
            }
          }));
        }), fs_error);
      }), fs_error);
    },
    FS_proto = FileSaver.prototype,
    saveAs = function saveAs(blob, name) {
      return new FileSaver(blob, name);
    };
  FS_proto.abort = function () {
    var filesaver = this;
    filesaver.readyState = filesaver.DONE;
    dispatch(filesaver, "abort");
  };
  FS_proto.readyState = FS_proto.INIT = 0;
  FS_proto.WRITING = 1;
  FS_proto.DONE = 2;
  FS_proto.error = FS_proto.onwritestart = FS_proto.onprogress = FS_proto.onwrite = FS_proto.onabort = FS_proto.onerror = FS_proto.onwriteend = null;
  view.addEventListener("unload", process_deletion_queue, false);
  saveAs.unload = function () {
    process_deletion_queue();
    view.removeEventListener("unload", process_deletion_queue, false);
  };
  return saveAs;
}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || this.content);
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if ( true && module !== null) {
  module.exports = saveAs;
} else if ( true && __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") !== null && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") != null) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return saveAs;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
String.prototype.endsWithAny = function () {
  var strArray = Array.prototype.slice.call(arguments),
    $this = this.toLowerCase().toString();
  for (var i = 0; i < strArray.length; i++) {
    if ($this.indexOf(strArray[i], $this.length - strArray[i].length) !== -1) return true;
  }
  return false;
};
var saveTextAs = saveTextAs || function (textContent, fileName, charset) {
  fileName = fileName || 'download.txt';
  charset = charset || 'utf-8';
  textContent = (textContent || '').replace(/\r?\n/g, "\r\n");
  if (saveAs && Blob) {
    var blob = new Blob([textContent], {
      type: "text/plain;charset=" + charset
    });
    saveAs(blob, fileName);
    return true;
  } else {
    //IE9-
    var saveTxtWindow = window.frames.saveTxtWindow;
    if (!saveTxtWindow) {
      saveTxtWindow = document.createElement('iframe');
      saveTxtWindow.id = 'saveTxtWindow';
      saveTxtWindow.style.display = 'none';
      document.body.insertBefore(saveTxtWindow, null);
      saveTxtWindow = window.frames.saveTxtWindow;
      if (!saveTxtWindow) {
        saveTxtWindow = window.open('', '_temp', 'width=100,height=100');
        if (!saveTxtWindow) {
          window.alert('Sorry, download file could not be created.');
          return false;
        }
      }
    }
    var doc = saveTxtWindow.document;
    doc.open('text/html', 'replace');
    doc.charset = charset;
    if (fileName.endsWithAny('.htm', '.html')) {
      doc.close();
      doc.body.innerHTML = '\r\n' + textContent + '\r\n';
    } else {
      if (!fileName.endsWithAny('.txt')) fileName += '.txt';
      doc.write(textContent);
      doc.close();
    }
    var retValue = doc.execCommand('SaveAs', null, fileName);
    saveTxtWindow.close();
    return retValue;
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./assets/js/ezadmin/table2csv.js":
/*!****************************************!*\
  !*** ./assets/js/ezadmin/table2csv.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function ($) {
  "use strict";

  var optionsDefaults = {
    /* action='download' options */
    filename: "table.csv",
    /* action='output' options */
    appendTo: "body",
    /* general options */
    separator: ",",
    newline: "\n",
    quoteFields: true,
    trimContent: true,
    excludeColumns: "",
    excludeRows: ""
  };
  var options = {};
  function quote(text) {
    return "\"" + text.replace("\"", "\"\"") + "\"";
  }

  // taken from http://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server
  function download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute("href", "data:text/csv;charset=utf-8,\uFEFF" + encodeURIComponent(text));
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  function convert(table) {
    var output = "";
    var rows = table.find("tr").not(options.excludeRows);
    var numCols = rows.first().find("td,th").filter(":visible").not(options.excludeColumns).length;
    rows.each(function (ignore, elem) {
      $(elem).find("td,th").filter(":visible").not(options.excludeColumns).each(function (i, col) {
        var column = $(col);

        // Strip whitespaces
        var content = options.trimContent ? $.trim(column.text()) : column.text();
        output += options.quoteFields ? quote(content) : content;
        if (i !== numCols - 1) {
          output += options.separator;
        } else {
          output += options.newline;
        }
      });
    });
    return output;
  }
  $.fn.table2csv = function (action, opt) {
    if (_typeof(action) === "object") {
      opt = action;
      action = "download";
    } else if (action === undefined) {
      action = "download";
    }

    // type checking
    if (typeof action !== "string") {
      throw new Error("\"action\" argument must be a string");
    }
    if (opt !== undefined && _typeof(opt) !== "object") {
      throw new Error("\"options\" argument must be an object");
    }
    options = $.extend({}, optionsDefaults, opt);
    var table = this.filter("table"); // TODO use $.each

    if (table.length <= 0) {
      throw new Error("table2csv must be called on a <table> element");
    }
    if (table.length > 1) {
      throw new Error("converting multiple table elements at once is not supported yet");
    }
    var csv;
    switch (action) {
      case "download":
        csv = convert(table);
        download(options.filename, csv);
        break;
      case "output":
        csv = convert(table);
        $(options.appendTo).append($("<pre>").text(csv));
        break;
      default:
        throw new Error("\"action\" argument must be one of the supported action strings");
    }
    return this;
  };
})(jQuery);

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 1:
/*!*******************************************************************************!*\
  !*** multi ./assets/js/ezadmin/table2csv.js ./assets/js/ezadmin/FileSaver.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./assets/js/ezadmin/table2csv.js */"./assets/js/ezadmin/table2csv.js");
module.exports = __webpack_require__(/*! ./assets/js/ezadmin/FileSaver.js */"./assets/js/ezadmin/FileSaver.js");


/***/ })

},[[1,"runtime"]]]);