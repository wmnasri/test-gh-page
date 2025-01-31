(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezadmin_default"],{

/***/ "./assets/js/ezadmin/lib/bootstrap-table/bootstrap-table.js":
/*!******************************************************************!*\
  !*** ./assets/js/ezadmin/lib/bootstrap-table/bootstrap-table.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * version: 1.12.1
 * https://github.com/wenzhixin/bootstrap-table/
 */

(function ($) {
  'use strict';

  // TOOLS DEFINITION
  // ======================
  var bootstrapVersion = 3;
  try {
    bootstrapVersion = parseInt($.fn.dropdown.Constructor.VERSION, 10);
  } catch (e) {}
  var bs = {
    3: {
      buttonsClass: 'default',
      iconsPrefix: 'glyphicon',
      icons: {
        paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
        paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
        refresh: 'glyphicon-refresh icon-refresh',
        toggleOff: 'glyphicon-list-alt icon-list-alt',
        toggleOn: 'glyphicon-list-alt icon-list-alt',
        columns: 'glyphicon-th icon-th',
        detailOpen: 'glyphicon-plus icon-plus',
        detailClose: 'glyphicon-minus icon-minus',
        fullscreen: 'glyphicon-fullscreen'
      },
      pullClass: 'pull',
      toobarDropdowHtml: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
      toobarDropdowItemHtml: '<li role="menuitem"><label>%s</label></li>',
      pageDropdownHtml: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
      pageDropdownItemHtml: '<li role="menuitem" class="%s"><a href="#">%s</a></li>'
    },
    4: {
      buttonsClass: 'secondary',
      iconsPrefix: 'fa',
      icons: {
        paginationSwitchDown: 'fa-toggle-down',
        paginationSwitchUp: 'fa-toggle-up',
        refresh: 'fa-refresh',
        toggleOff: 'fa-toggle-off',
        toggleOn: 'fa-toggle-on',
        columns: 'fa-th-list',
        detailOpen: 'fa-plus',
        detailClose: 'fa-minus',
        fullscreen: 'fa-arrows-alt'
      },
      pullClass: 'float',
      toobarDropdowHtml: ['<div class="dropdown-menu dropdown-menu-right">', '</div>'],
      toobarDropdowItemHtml: '<label class="dropdown-item">%s</label>',
      pageDropdownHtml: ['<div class="dropdown-menu">', '</div>'],
      pageDropdownItemHtml: '<a class="dropdown-item %s" href="#">%s</a>'
    }
  }[bootstrapVersion];
  var cachedWidth = null;

  // it only does '%s', and return '' when arguments are undefined
  var sprintf = function sprintf(str) {
    var args = arguments,
      flag = true,
      i = 1;
    str = str.replace(/%s/g, function () {
      var arg = args[i++];
      if (typeof arg === 'undefined') {
        flag = false;
        return '';
      }
      return arg;
    });
    return flag ? str : '';
  };
  var getPropertyFromOther = function getPropertyFromOther(list, from, to, value) {
    var result = '';
    $.each(list, function (i, item) {
      if (item[from] === value) {
        result = item[to];
        return false;
      }
      return true;
    });
    return result;
  };

  // http://jsfiddle.net/wenyi/47nz7ez9/3/
  var setFieldIndex = function setFieldIndex(columns) {
    var i,
      j,
      k,
      totalCol = 0,
      flag = [];
    for (i = 0; i < columns[0].length; i++) {
      totalCol += columns[0][i].colspan || 1;
    }
    for (i = 0; i < columns.length; i++) {
      flag[i] = [];
      for (j = 0; j < totalCol; j++) {
        flag[i][j] = false;
      }
    }
    for (i = 0; i < columns.length; i++) {
      for (j = 0; j < columns[i].length; j++) {
        var r = columns[i][j],
          rowspan = r.rowspan || 1,
          colspan = r.colspan || 1,
          index = $.inArray(false, flag[i]);
        if (colspan === 1) {
          r.fieldIndex = index;
          // when field is undefined, use index instead
          if (typeof r.field === 'undefined') {
            r.field = index;
          }
        }
        for (k = 0; k < rowspan; k++) {
          flag[i + k][index] = true;
        }
        for (k = 0; k < colspan; k++) {
          flag[i][index + k] = true;
        }
      }
    }
  };
  var getScrollBarWidth = function getScrollBarWidth() {
    if (cachedWidth === null) {
      var inner = $('<p/>').addClass('fixed-table-scroll-inner'),
        outer = $('<div/>').addClass('fixed-table-scroll-outer'),
        w1,
        w2;
      outer.append(inner);
      $('body').append(outer);
      w1 = inner[0].offsetWidth;
      outer.css('overflow', 'scroll');
      w2 = inner[0].offsetWidth;
      if (w1 === w2) {
        w2 = outer[0].clientWidth;
      }
      outer.remove();
      cachedWidth = w1 - w2;
    }
    return cachedWidth;
  };
  var calculateObjectValue = function calculateObjectValue(self, name, args, defaultValue) {
    var func = name;
    if (typeof name === 'string') {
      // support obj.func1.func2
      var names = name.split('.');
      if (names.length > 1) {
        func = window;
        $.each(names, function (i, f) {
          func = func[f];
        });
      } else {
        func = window[name];
      }
    }
    if (_typeof(func) === 'object') {
      return func;
    }
    if (typeof func === 'function') {
      return func.apply(self, args || []);
    }
    if (!func && typeof name === 'string' && sprintf.apply(this, [name].concat(args))) {
      return sprintf.apply(this, [name].concat(args));
    }
    return defaultValue;
  };
  var compareObjects = function compareObjects(objectA, objectB, compareLength) {
    // Create arrays of property names
    var getOwnPropertyNames = Object.getOwnPropertyNames || function (obj) {
      var arr = [];
      for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
          arr.push(k);
        }
      }
      return arr;
    };
    var objectAProperties = getOwnPropertyNames(objectA),
      objectBProperties = getOwnPropertyNames(objectB),
      propName = '';
    if (compareLength) {
      // If number of properties is different, objects are not equivalent
      if (objectAProperties.length !== objectBProperties.length) {
        return false;
      }
    }
    for (var i = 0; i < objectAProperties.length; i++) {
      propName = objectAProperties[i];

      // If the property is not in the object B properties, continue with the next property
      if ($.inArray(propName, objectBProperties) > -1) {
        // If values of same property are not equal, objects are not equivalent
        if (objectA[propName] !== objectB[propName]) {
          return false;
        }
      }
    }

    // If we made it this far, objects are considered equivalent
    return true;
  };
  var escapeHTML = function escapeHTML(text) {
    if (typeof text === 'string') {
      return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/`/g, '&#x60;');
    }
    return text;
  };
  var getRealDataAttr = function getRealDataAttr(dataAttr) {
    for (var attr in dataAttr) {
      var auxAttr = attr.split(/(?=[A-Z])/).join('-').toLowerCase();
      if (auxAttr !== attr) {
        dataAttr[auxAttr] = dataAttr[attr];
        delete dataAttr[attr];
      }
    }
    return dataAttr;
  };
  var getItemField = function getItemField(item, field, escape) {
    var value = item;
    if (typeof field !== 'string' || item.hasOwnProperty(field)) {
      return escape ? escapeHTML(item[field]) : item[field];
    }
    var props = field.split('.');
    for (var p in props) {
      if (props.hasOwnProperty(p)) {
        value = value && value[props[p]];
      }
    }
    return escape ? escapeHTML(value) : value;
  };
  var isIEBrowser = function isIEBrowser() {
    return !!(navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./));
  };
  var objectKeys = function objectKeys() {
    // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    if (!Object.keys) {
      Object.keys = function () {
        var hasOwnProperty = Object.prototype.hasOwnProperty,
          hasDontEnumBug = !{
            toString: null
          }.propertyIsEnumerable('toString'),
          dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
          dontEnumsLength = dontEnums.length;
        return function (obj) {
          if (_typeof(obj) !== 'object' && (typeof obj !== 'function' || obj === null)) {
            throw new TypeError('Object.keys called on non-object');
          }
          var result = [],
            prop,
            i;
          for (prop in obj) {
            if (hasOwnProperty.call(obj, prop)) {
              result.push(prop);
            }
          }
          if (hasDontEnumBug) {
            for (i = 0; i < dontEnumsLength; i++) {
              if (hasOwnProperty.call(obj, dontEnums[i])) {
                result.push(dontEnums[i]);
              }
            }
          }
          return result;
        };
      }();
    }
  };

  // BOOTSTRAP TABLE CLASS DEFINITION
  // ======================

  var BootstrapTable = function BootstrapTable(el, options) {
    this.options = options;
    this.$el = $(el);
    this.$el_ = this.$el.clone();
    this.timeoutId_ = 0;
    this.timeoutFooter_ = 0;
    this.init();
  };
  BootstrapTable.DEFAULTS = {
    classes: 'table table-hover',
    sortClass: undefined,
    locale: undefined,
    height: undefined,
    undefinedText: '-',
    sortName: undefined,
    sortOrder: 'asc',
    sortStable: false,
    rememberOrder: false,
    striped: false,
    columns: [[]],
    data: [],
    totalField: 'total',
    dataField: 'rows',
    method: 'get',
    url: undefined,
    ajax: undefined,
    cache: true,
    contentType: 'application/json',
    dataType: 'json',
    ajaxOptions: {},
    queryParams: function queryParams(params) {
      return params;
    },
    queryParamsType: 'limit',
    // undefined
    responseHandler: function responseHandler(res) {
      return res;
    },
    pagination: false,
    onlyInfoPagination: false,
    paginationLoop: true,
    sidePagination: 'client',
    // client or server
    totalRows: 0,
    // server side need to set
    pageNumber: 1,
    pageSize: 10,
    pageList: [10, 25, 50, 100],
    paginationHAlign: 'right',
    //right, left
    paginationVAlign: 'bottom',
    //bottom, top, both
    paginationDetailHAlign: 'left',
    //right, left
    paginationPreText: '&lsaquo;',
    paginationNextText: '&rsaquo;',
    search: false,
    searchOnEnterKey: false,
    strictSearch: false,
    searchAlign: 'right',
    selectItemName: 'btSelectItem',
    showHeader: true,
    showFooter: false,
    showColumns: false,
    showPaginationSwitch: false,
    showRefresh: false,
    showToggle: false,
    showFullscreen: false,
    smartDisplay: true,
    escape: false,
    minimumCountColumns: 1,
    idField: undefined,
    uniqueId: undefined,
    cardView: false,
    detailView: false,
    detailFormatter: function detailFormatter(index, row) {
      return '';
    },
    detailFilter: function detailFilter(index, row) {
      return true;
    },
    trimOnSearch: true,
    clickToSelect: false,
    singleSelect: false,
    toolbar: undefined,
    toolbarAlign: 'left',
    buttonsToolbar: undefined,
    buttonsAlign: 'right',
    checkboxHeader: true,
    sortable: true,
    silentSort: true,
    maintainSelected: false,
    searchTimeOut: 500,
    searchText: '',
    iconSize: undefined,
    buttonsClass: bs.buttonsClass,
    iconsPrefix: bs.iconsPrefix,
    // glyphicon or fa (font awesome)
    icons: bs.icons,
    customSearch: $.noop,
    customSort: $.noop,
    ignoreClickToSelectOn: function ignoreClickToSelectOn(element) {
      return $.inArray(element.tagName, ['A', 'BUTTON']);
    },
    rowStyle: function rowStyle(row, index) {
      return {};
    },
    rowAttributes: function rowAttributes(row, index) {
      return {};
    },
    footerStyle: function footerStyle(row, index) {
      return {};
    },
    onAll: function onAll(name, args) {
      return false;
    },
    onClickCell: function onClickCell(field, value, row, $element) {
      return false;
    },
    onDblClickCell: function onDblClickCell(field, value, row, $element) {
      return false;
    },
    onClickRow: function onClickRow(item, $element) {
      return false;
    },
    onDblClickRow: function onDblClickRow(item, $element) {
      return false;
    },
    onSort: function onSort(name, order) {
      return false;
    },
    onCheck: function onCheck(row) {
      return false;
    },
    onUncheck: function onUncheck(row) {
      return false;
    },
    onCheckAll: function onCheckAll(rows) {
      return false;
    },
    onUncheckAll: function onUncheckAll(rows) {
      return false;
    },
    onCheckSome: function onCheckSome(rows) {
      return false;
    },
    onUncheckSome: function onUncheckSome(rows) {
      return false;
    },
    onLoadSuccess: function onLoadSuccess(data) {
      return false;
    },
    onLoadError: function onLoadError(status) {
      return false;
    },
    onColumnSwitch: function onColumnSwitch(field, checked) {
      return false;
    },
    onPageChange: function onPageChange(number, size) {
      return false;
    },
    onSearch: function onSearch(text) {
      return false;
    },
    onToggle: function onToggle(cardView) {
      return false;
    },
    onPreBody: function onPreBody(data) {
      return false;
    },
    onPostBody: function onPostBody() {
      return false;
    },
    onPostHeader: function onPostHeader() {
      return false;
    },
    onExpandRow: function onExpandRow(index, row, $detail) {
      return false;
    },
    onCollapseRow: function onCollapseRow(index, row) {
      return false;
    },
    onRefreshOptions: function onRefreshOptions(options) {
      return false;
    },
    onRefresh: function onRefresh(params) {
      return false;
    },
    onResetView: function onResetView() {
      return false;
    },
    onScrollBody: function onScrollBody() {
      return false;
    }
  };
  BootstrapTable.LOCALES = {};
  BootstrapTable.LOCALES['en-US'] = BootstrapTable.LOCALES.en = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Loading, please wait...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return sprintf('%s rows per page', pageNumber);
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return sprintf('Showing %s to %s of %s rows', pageFrom, pageTo, totalRows);
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return sprintf('Showing %s rows', totalRows);
    },
    formatSearch: function formatSearch() {
      return 'Search';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No matching records found';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Refresh';
    },
    formatToggle: function formatToggle() {
      return 'Toggle';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatColumns: function formatColumns() {
      return 'Columns';
    },
    formatAllRows: function formatAllRows() {
      return 'All';
    }
  };
  $.extend(BootstrapTable.DEFAULTS, BootstrapTable.LOCALES['en-US']);
  BootstrapTable.COLUMN_DEFAULTS = {
    radio: false,
    checkbox: false,
    checkboxEnabled: true,
    field: undefined,
    title: undefined,
    titleTooltip: undefined,
    'class': undefined,
    align: undefined,
    // left, right, center
    halign: undefined,
    // left, right, center
    falign: undefined,
    // left, right, center
    valign: undefined,
    // top, middle, bottom
    width: undefined,
    sortable: false,
    order: 'asc',
    // asc, desc
    visible: true,
    switchable: true,
    clickToSelect: true,
    formatter: undefined,
    footerFormatter: undefined,
    events: undefined,
    sorter: undefined,
    sortName: undefined,
    cellStyle: undefined,
    searchable: true,
    searchFormatter: true,
    cardVisible: true,
    escape: false,
    showSelectTitle: false
  };
  BootstrapTable.EVENTS = {
    'all.bs.table': 'onAll',
    'click-cell.bs.table': 'onClickCell',
    'dbl-click-cell.bs.table': 'onDblClickCell',
    'click-row.bs.table': 'onClickRow',
    'dbl-click-row.bs.table': 'onDblClickRow',
    'sort.bs.table': 'onSort',
    'check.bs.table': 'onCheck',
    'uncheck.bs.table': 'onUncheck',
    'check-all.bs.table': 'onCheckAll',
    'uncheck-all.bs.table': 'onUncheckAll',
    'check-some.bs.table': 'onCheckSome',
    'uncheck-some.bs.table': 'onUncheckSome',
    'load-success.bs.table': 'onLoadSuccess',
    'load-error.bs.table': 'onLoadError',
    'column-switch.bs.table': 'onColumnSwitch',
    'page-change.bs.table': 'onPageChange',
    'search.bs.table': 'onSearch',
    'toggle.bs.table': 'onToggle',
    'pre-body.bs.table': 'onPreBody',
    'post-body.bs.table': 'onPostBody',
    'post-header.bs.table': 'onPostHeader',
    'expand-row.bs.table': 'onExpandRow',
    'collapse-row.bs.table': 'onCollapseRow',
    'refresh-options.bs.table': 'onRefreshOptions',
    'reset-view.bs.table': 'onResetView',
    'refresh.bs.table': 'onRefresh',
    'scroll-body.bs.table': 'onScrollBody'
  };
  BootstrapTable.prototype.init = function () {
    this.initLocale();
    this.initContainer();
    this.initTable();
    this.initHeader();
    this.initData();
    this.initHiddenRows();
    this.initFooter();
    this.initToolbar();
    this.initPagination();
    this.initBody();
    this.initSearchText();
    this.initServer();
  };
  BootstrapTable.prototype.initLocale = function () {
    if (this.options.locale) {
      var parts = this.options.locale.split(/-|_/);
      parts[0].toLowerCase();
      if (parts[1]) {
        parts[1].toUpperCase();
      }
      if ($.fn.bootstrapTable.locales[this.options.locale]) {
        // locale as requested
        $.extend(this.options, $.fn.bootstrapTable.locales[this.options.locale]);
      } else if ($.fn.bootstrapTable.locales[parts.join('-')]) {
        // locale with sep set to - (in case original was specified with _)
        $.extend(this.options, $.fn.bootstrapTable.locales[parts.join('-')]);
      } else if ($.fn.bootstrapTable.locales[parts[0]]) {
        // short locale language code (i.e. 'en')
        $.extend(this.options, $.fn.bootstrapTable.locales[parts[0]]);
      }
    }
  };
  BootstrapTable.prototype.initContainer = function () {
    this.$container = $(['<div class="bootstrap-table">', '<div class="fixed-table-toolbar"></div>', this.options.paginationVAlign === 'top' || this.options.paginationVAlign === 'both' ? '<div class="fixed-table-pagination" style="clear: both;"></div>' : '', '<div class="fixed-table-container">', '<div class="fixed-table-header"><table></table></div>', '<div class="fixed-table-body">', '<div class="fixed-table-loading">', this.options.formatLoadingMessage(), '</div>', '</div>', '<div class="fixed-table-footer"><table><tr></tr></table></div>', '</div>', this.options.paginationVAlign === 'bottom' || this.options.paginationVAlign === 'both' ? '<div class="fixed-table-pagination"></div>' : '', '</div>'].join(''));
    this.$container.insertAfter(this.$el);
    this.$tableContainer = this.$container.find('.fixed-table-container');
    this.$tableHeader = this.$container.find('.fixed-table-header');
    this.$tableBody = this.$container.find('.fixed-table-body');
    this.$tableLoading = this.$container.find('.fixed-table-loading');
    this.$tableFooter = this.$container.find('.fixed-table-footer');
    // checking if custom table-toolbar exists or not
    if (this.options.buttonsToolbar) {
      this.$toolbar = $('body').find(this.options.buttonsToolbar);
    } else {
      this.$toolbar = this.$container.find('.fixed-table-toolbar');
    }
    this.$pagination = this.$container.find('.fixed-table-pagination');
    this.$tableBody.append(this.$el);
    this.$container.after('<div class="clearfix"></div>');
    this.$el.addClass(this.options.classes);
    if (this.options.striped) {
      this.$el.addClass('table-striped');
    }
    if ($.inArray('table-no-bordered', this.options.classes.split(' ')) !== -1) {
      this.$tableContainer.addClass('table-no-bordered');
    }
  };
  BootstrapTable.prototype.initTable = function () {
    var that = this,
      columns = [],
      data = [];
    this.$header = this.$el.find('>thead');
    if (!this.$header.length) {
      this.$header = $('<thead></thead>').appendTo(this.$el);
    }
    this.$header.find('tr').each(function () {
      var column = [];
      $(this).find('th').each(function () {
        // Fix #2014 - getFieldIndex and elsewhere assume this is string, causes issues if not
        if (typeof $(this).data('field') !== 'undefined') {
          $(this).data('field', $(this).data('field') + '');
        }
        column.push($.extend({}, {
          title: $(this).html(),
          'class': $(this).attr('class'),
          titleTooltip: $(this).attr('title'),
          rowspan: $(this).attr('rowspan') ? +$(this).attr('rowspan') : undefined,
          colspan: $(this).attr('colspan') ? +$(this).attr('colspan') : undefined
        }, $(this).data()));
      });
      columns.push(column);
    });
    if (!$.isArray(this.options.columns[0])) {
      this.options.columns = [this.options.columns];
    }
    this.options.columns = $.extend(true, [], columns, this.options.columns);
    this.columns = [];
    this.fieldsColumnsIndex = [];
    setFieldIndex(this.options.columns);
    $.each(this.options.columns, function (i, columns) {
      $.each(columns, function (j, column) {
        column = $.extend({}, BootstrapTable.COLUMN_DEFAULTS, column);
        if (typeof column.fieldIndex !== 'undefined') {
          that.columns[column.fieldIndex] = column;
          that.fieldsColumnsIndex[column.field] = column.fieldIndex;
        }
        that.options.columns[i][j] = column;
      });
    });

    // if options.data is setting, do not process tbody data
    if (this.options.data.length) {
      return;
    }
    var m = [];
    this.$el.find('>tbody>tr').each(function (y) {
      var row = {};

      // save tr's id, class and data-* attributes
      row._id = $(this).attr('id');
      row._class = $(this).attr('class');
      row._data = getRealDataAttr($(this).data());
      $(this).find('>td').each(function (x) {
        var $this = $(this),
          cspan = +$this.attr('colspan') || 1,
          rspan = +$this.attr('rowspan') || 1,
          tx,
          ty;

        // skip already occupied cells in current row
        for (; m[y] && m[y][x]; x++);
        for (tx = x; tx < x + cspan; tx++) {
          //mark matrix elements occupied by current cell with true
          for (ty = y; ty < y + rspan; ty++) {
            if (!m[ty]) {
              //fill missing rows
              m[ty] = [];
            }
            m[ty][tx] = true;
          }
        }
        var field = that.columns[x].field;
        row[field] = $(this).html();
        // save td's id, class and data-* attributes
        row['_' + field + '_id'] = $(this).attr('id');
        row['_' + field + '_class'] = $(this).attr('class');
        row['_' + field + '_rowspan'] = $(this).attr('rowspan');
        row['_' + field + '_colspan'] = $(this).attr('colspan');
        row['_' + field + '_title'] = $(this).attr('title');
        row['_' + field + '_data'] = getRealDataAttr($(this).data());
      });
      data.push(row);
    });
    this.options.data = data;
    if (data.length) this.fromHtml = true;
  };
  BootstrapTable.prototype.initHeader = function () {
    var that = this,
      visibleColumns = {},
      html = [];
    this.header = {
      fields: [],
      styles: [],
      classes: [],
      formatters: [],
      events: [],
      sorters: [],
      sortNames: [],
      cellStyles: [],
      searchables: []
    };
    $.each(this.options.columns, function (i, columns) {
      html.push('<tr>');
      if (i === 0 && !that.options.cardView && that.options.detailView) {
        html.push(sprintf('<th class="detail" rowspan="%s"><div class="fht-cell"></div></th>', that.options.columns.length));
      }
      $.each(columns, function (j, column) {
        var text = '',
          halign = '',
          // header align style
          align = '',
          // body align style
          style = '',
          class_ = sprintf(' class="%s"', column['class']),
          order = that.options.sortOrder || column.order,
          unitWidth = 'px',
          width = column.width;
        if (column.width !== undefined && !that.options.cardView) {
          if (typeof column.width === 'string') {
            if (column.width.indexOf('%') !== -1) {
              unitWidth = '%';
            }
          }
        }
        if (column.width && typeof column.width === 'string') {
          width = column.width.replace('%', '').replace('px', '');
        }
        halign = sprintf('text-align: %s; ', column.halign ? column.halign : column.align);
        align = sprintf('text-align: %s; ', column.align);
        style = sprintf('vertical-align: %s; ', column.valign);
        style += sprintf('width: %s; ', (column.checkbox || column.radio) && !width ? !column.showSelectTitle ? '36px' : undefined : width ? width + unitWidth : undefined);
        if (typeof column.fieldIndex !== 'undefined') {
          that.header.fields[column.fieldIndex] = column.field;
          that.header.styles[column.fieldIndex] = align + style;
          that.header.classes[column.fieldIndex] = class_;
          that.header.formatters[column.fieldIndex] = column.formatter;
          that.header.events[column.fieldIndex] = column.events;
          that.header.sorters[column.fieldIndex] = column.sorter;
          that.header.sortNames[column.fieldIndex] = column.sortName;
          that.header.cellStyles[column.fieldIndex] = column.cellStyle;
          that.header.searchables[column.fieldIndex] = column.searchable;
          if (!column.visible) {
            return;
          }
          if (that.options.cardView && !column.cardVisible) {
            return;
          }
          visibleColumns[column.field] = column;
        }
        html.push('<th' + sprintf(' title="%s"', column.titleTooltip), column.checkbox || column.radio ? sprintf(' class="bs-checkbox %s"', column['class'] || '') : class_, sprintf(' style="%s"', halign + style), sprintf(' rowspan="%s"', column.rowspan), sprintf(' colspan="%s"', column.colspan), sprintf(' data-field="%s"', column.field), j === 0 && column.fieldIndex ? ' data-not-first-th' : '', '>');
        html.push(sprintf('<div class="th-inner %s">', that.options.sortable && column.sortable ? 'sortable both' : ''));
        text = that.options.escape ? escapeHTML(column.title) : column.title;
        var title = text;
        if (column.checkbox) {
          text = '';
          if (!that.options.singleSelect && that.options.checkboxHeader) {
            text = '<input name="btSelectAll" type="checkbox" />';
          }
          that.header.stateField = column.field;
        }
        if (column.radio) {
          text = '';
          that.header.stateField = column.field;
          that.options.singleSelect = true;
        }
        if (!text && column.showSelectTitle) {
          text += title;
        }
        html.push(text);
        html.push('</div>');
        html.push('<div class="fht-cell"></div>');
        html.push('</div>');
        html.push('</th>');
      });
      html.push('</tr>');
    });
    this.$header.html(html.join(''));
    this.$header.find('th[data-field]').each(function (i) {
      $(this).data(visibleColumns[$(this).data('field')]);
    });
    this.$container.off('click', '.th-inner').on('click', '.th-inner', function (event) {
      var $this = $(this);
      if (that.options.detailView && !$this.parent().hasClass('bs-checkbox')) {
        if ($this.closest('.bootstrap-table')[0] !== that.$container[0]) {
          return false;
        }
      }
      if (that.options.sortable && $this.parent().data().sortable) {
        that.onSort(event);
      }
    });
    this.$header.children().children().off('keypress').on('keypress', function (event) {
      if (that.options.sortable && $(this).data().sortable) {
        var code = event.keyCode || event.which;
        if (code == 13) {
          //Enter keycode
          that.onSort(event);
        }
      }
    });
    $(window).off('resize.bootstrap-table');
    if (!this.options.showHeader || this.options.cardView) {
      this.$header.hide();
      this.$tableHeader.hide();
      this.$tableLoading.css('top', 0);
    } else {
      this.$header.show();
      this.$tableHeader.show();
      this.$tableLoading.css('top', this.$header.outerHeight() + 1);
      // Assign the correct sortable arrow
      this.getCaret();
      $(window).on('resize.bootstrap-table', $.proxy(this.resetWidth, this));
    }
    this.$selectAll = this.$header.find('[name="btSelectAll"]');
    this.$selectAll.off('click').on('click', function () {
      var checked = $(this).prop('checked');
      that[checked ? 'checkAll' : 'uncheckAll']();
      that.updateSelected();
    });
  };
  BootstrapTable.prototype.initFooter = function () {
    if (!this.options.showFooter || this.options.cardView) {
      this.$tableFooter.hide();
    } else {
      this.$tableFooter.show();
    }
  };

  /**
   * @param data
   * @param type: append / prepend
   */
  BootstrapTable.prototype.initData = function (data, type) {
    if (type === 'append') {
      this.options.data = this.options.data.concat(data);
    } else if (type === 'prepend') {
      this.options.data = [].concat(data).concat(this.options.data);
    } else {
      this.options.data = data || this.options.data;
    }
    this.data = this.options.data;
    if (this.options.sidePagination === 'server') {
      return;
    }
    this.initSort();
  };
  BootstrapTable.prototype.initSort = function () {
    var that = this,
      name = this.options.sortName,
      order = this.options.sortOrder === 'desc' ? -1 : 1,
      index = $.inArray(this.options.sortName, this.header.fields),
      timeoutId = 0;
    if (this.options.customSort !== $.noop) {
      this.options.customSort.apply(this, [this.options.sortName, this.options.sortOrder]);
      return;
    }
    if (index !== -1) {
      if (this.options.sortStable) {
        $.each(this.data, function (i, row) {
          row._position = i;
        });
      }
      this.data.sort(function (a, b) {
        if (that.header.sortNames[index]) {
          name = that.header.sortNames[index];
        }
        var aa = getItemField(a, name, that.options.escape),
          bb = getItemField(b, name, that.options.escape),
          value = calculateObjectValue(that.header, that.header.sorters[index], [aa, bb, a, b]);
        if (value !== undefined) {
          if (that.options.sortStable && value === 0) {
            return a._position - b._position;
          }
          return order * value;
        }

        // Fix #161: undefined or null string sort bug.
        if (aa === undefined || aa === null) {
          aa = '';
        }
        if (bb === undefined || bb === null) {
          bb = '';
        }
        if (that.options.sortStable && aa === bb) {
          aa = a._position;
          bb = b._position;
          return a._position - b._position;
        }

        // IF both values are numeric, do a numeric comparison
        if ($.isNumeric(aa) && $.isNumeric(bb)) {
          // Convert numerical values form string to float.
          aa = parseFloat(aa);
          bb = parseFloat(bb);
          if (aa < bb) {
            return order * -1;
          }
          return order;
        }
        if (aa === bb) {
          return 0;
        }

        // If value is not a string, convert to string
        if (typeof aa !== 'string') {
          aa = aa.toString();
        }
        if (aa.localeCompare(bb) === -1) {
          return order * -1;
        }
        return order;
      });
      if (this.options.sortClass !== undefined) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
          that.$el.removeClass(that.options.sortClass);
          var index = that.$header.find(sprintf('[data-field="%s"]', that.options.sortName).index() + 1);
          that.$el.find(sprintf('tr td:nth-child(%s)', index)).addClass(that.options.sortClass);
        }, 250);
      }
    }
  };
  BootstrapTable.prototype.onSort = function (event) {
    var $this = event.type === "keypress" ? $(event.currentTarget) : $(event.currentTarget).parent(),
      $this_ = this.$header.find('th').eq($this.index());
    this.$header.add(this.$header_).find('span.order').remove();
    if (this.options.sortName === $this.data('field')) {
      this.options.sortOrder = this.options.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.options.sortName = $this.data('field');
      if (this.options.rememberOrder) {
        this.options.sortOrder = $this.data('order') === 'asc' ? 'desc' : 'asc';
      } else {
        this.options.sortOrder = this.columns[this.fieldsColumnsIndex[$this.data('field')]].order;
      }
    }
    this.trigger('sort', this.options.sortName, this.options.sortOrder);
    $this.add($this_).data('order', this.options.sortOrder);

    // Assign the correct sortable arrow
    this.getCaret();
    if (this.options.sidePagination === 'server') {
      this.initServer(this.options.silentSort);
      return;
    }
    this.initSort();
    this.initBody();
  };
  BootstrapTable.prototype.initToolbar = function () {
    var that = this,
      html = [],
      timeoutId = 0,
      $keepOpen,
      $search,
      switchableCount = 0;
    if (this.$toolbar.find('.bs-bars').children().length) {
      $('body').append($(this.options.toolbar));
    }
    this.$toolbar.html('');
    if (typeof this.options.toolbar === 'string' || _typeof(this.options.toolbar) === 'object') {
      $(sprintf('<div class="bs-bars %s-%s"></div>', bs.pullClass, this.options.toolbarAlign)).appendTo(this.$toolbar).append($(this.options.toolbar));
    }

    // showColumns, showToggle, showRefresh
    html = [sprintf('<div class="columns columns-%s btn-group %s-%s">', this.options.buttonsAlign, bs.pullClass, this.options.buttonsAlign)];
    if (typeof this.options.icons === 'string') {
      this.options.icons = calculateObjectValue(null, this.options.icons);
    }
    if (this.options.showPaginationSwitch) {
      html.push(sprintf('<button class="btn' + sprintf(' btn-%s', this.options.buttonsClass) + sprintf(' btn-%s', this.options.iconSize) + '" type="button" name="paginationSwitch" aria-label="pagination Switch" title="%s">', this.options.formatPaginationSwitch()), sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.paginationSwitchDown), '</button>');
    }
    if (this.options.showFullscreen) {
      this.$toolbar.find('button[name="fullscreen"]').off('click').on('click', $.proxy(this.toggleFullscreen, this));
    }
    if (this.options.showRefresh) {
      html.push(sprintf('<button class="btn' + sprintf(' btn-%s', this.options.buttonsClass) + sprintf(' btn-%s', this.options.iconSize) + '" type="button" name="refresh" aria-label="refresh" title="%s">', this.options.formatRefresh()), sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.refresh), '</button>');
    }
    if (this.options.showToggle) {
      html.push(sprintf('<button class="btn' + sprintf(' btn-%s', this.options.buttonsClass) + sprintf(' btn-%s', this.options.iconSize) + '" type="button" name="toggle" aria-label="toggle" title="%s">', this.options.formatToggle()), sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.toggleOff), '</button>');
    }
    if (this.options.showFullscreen) {
      html.push(sprintf('<button class="btn' + sprintf(' btn-%s', this.options.buttonsClass) + sprintf(' btn-%s', this.options.iconSize) + '" type="button" name="fullscreen" aria-label="fullscreen" title="%s">', this.options.formatFullscreen()), sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.fullscreen), '</button>');
    }
    if (this.options.showColumns) {
      html.push(sprintf('<div class="keep-open btn-group" title="%s">', this.options.formatColumns()), '<button type="button" aria-label="columns" class="btn' + sprintf(' btn-%s', this.options.buttonsClass) + sprintf(' btn-%s', this.options.iconSize) + ' dropdown-toggle" data-toggle="dropdown">', sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.columns), ' <span class="caret"></span>', '</button>', bs.toobarDropdowHtml[0]);
      $.each(this.columns, function (i, column) {
        if (column.radio || column.checkbox) {
          return;
        }
        if (that.options.cardView && !column.cardVisible) {
          return;
        }
        var checked = column.visible ? ' checked="checked"' : '';
        if (column.switchable) {
          html.push(sprintf(bs.toobarDropdowItemHtml, sprintf('<input type="checkbox" data-field="%s" value="%s"%s> %s', column.field, i, checked, column.title)));
          switchableCount++;
        }
      });
      html.push(bs.toobarDropdowHtml[1], '</div>');
    }
    html.push('</div>');

    // Fix #188: this.showToolbar is for extensions
    if (this.showToolbar || html.length > 2) {
      this.$toolbar.append(html.join(''));
    }
    if (this.options.showPaginationSwitch) {
      this.$toolbar.find('button[name="paginationSwitch"]').off('click').on('click', $.proxy(this.togglePagination, this));
    }
    if (this.options.showRefresh) {
      this.$toolbar.find('button[name="refresh"]').off('click').on('click', $.proxy(this.refresh, this));
    }
    if (this.options.showToggle) {
      this.$toolbar.find('button[name="toggle"]').off('click').on('click', function () {
        that.toggleView();
      });
    }
    if (this.options.showColumns) {
      $keepOpen = this.$toolbar.find('.keep-open');
      if (switchableCount <= this.options.minimumCountColumns) {
        $keepOpen.find('input').prop('disabled', true);
      }
      $keepOpen.find('li').off('click').on('click', function (event) {
        event.stopImmediatePropagation();
      });
      $keepOpen.find('input').off('click').on('click', function () {
        var $this = $(this);
        that.toggleColumn($(this).val(), $this.prop('checked'), false);
        that.trigger('column-switch', $(this).data('field'), $this.prop('checked'));
      });
    }
    if (this.options.search) {
      html = [];
      html.push(sprintf('<div class="%s-%s search">', bs.pullClass, this.options.searchAlign), sprintf('<input class="form-control' + sprintf(' input-%s', this.options.iconSize) + '" type="text" placeholder="%s">', this.options.formatSearch()), '</div>');
      this.$toolbar.append(html.join(''));
      $search = this.$toolbar.find('.search input');
      $search.off('keyup drop blur').on('keyup drop blur', function (event) {
        if (that.options.searchOnEnterKey && event.keyCode !== 13) {
          return;
        }
        if ($.inArray(event.keyCode, [37, 38, 39, 40]) > -1) {
          return;
        }
        clearTimeout(timeoutId); // doesn't matter if it's 0
        timeoutId = setTimeout(function () {
          that.onSearch(event);
        }, that.options.searchTimeOut);
      });
      if (isIEBrowser()) {
        $search.off('mouseup').on('mouseup', function (event) {
          clearTimeout(timeoutId); // doesn't matter if it's 0
          timeoutId = setTimeout(function () {
            that.onSearch(event);
          }, that.options.searchTimeOut);
        });
      }
    }
  };
  BootstrapTable.prototype.onSearch = function (event) {
    var text = $.trim($(event.currentTarget).val());

    // trim search input
    if (this.options.trimOnSearch && $(event.currentTarget).val() !== text) {
      $(event.currentTarget).val(text);
    }
    if (text === this.searchText) {
      return;
    }
    this.searchText = text;
    this.options.searchText = text;
    this.options.pageNumber = 1;
    this.initSearch();
    if (event.firedByInitSearchText) {
      if (this.options.sidePagination === 'client') {
        this.updatePagination();
      }
    } else {
      this.updatePagination();
    }
    this.trigger('search', text);
  };
  BootstrapTable.prototype.initSearch = function () {
    var that = this;
    if (this.options.sidePagination !== 'server') {
      if (this.options.customSearch !== $.noop) {
        window[this.options.customSearch].apply(this, [this.searchText]);
        return;
      }
      var s = this.searchText && (this.options.escape ? escapeHTML(this.searchText) : this.searchText).toLowerCase();
      var f = $.isEmptyObject(this.filterColumns) ? null : this.filterColumns;

      // Check filter
      this.data = f ? $.grep(this.options.data, function (item, i) {
        for (var key in f) {
          if ($.isArray(f[key]) && $.inArray(item[key], f[key]) === -1 || !$.isArray(f[key]) && item[key] !== f[key]) {
            return false;
          }
        }
        return true;
      }) : this.options.data;
      this.data = s ? $.grep(this.data, function (item, i) {
        for (var j = 0; j < that.header.fields.length; j++) {
          if (!that.header.searchables[j]) {
            continue;
          }
          var key = $.isNumeric(that.header.fields[j]) ? parseInt(that.header.fields[j], 10) : that.header.fields[j];
          var column = that.columns[that.fieldsColumnsIndex[key]];
          var value;
          if (typeof key === 'string') {
            value = item;
            var props = key.split('.');
            for (var prop_index = 0; prop_index < props.length; prop_index++) {
              if (value[props[prop_index]] != null) {
                value = value[props[prop_index]];
              }
            }

            // Fix #142: respect searchForamtter boolean
            if (column && column.searchFormatter) {
              value = calculateObjectValue(column, that.header.formatters[j], [value, item, i], value);
            }
          } else {
            value = item[key];
          }
          if (typeof value === 'string' || typeof value === 'number') {
            if (that.options.strictSearch) {
              if ((value + '').toLowerCase() === s) {
                return true;
              }
            } else {
              if ((value + '').toLowerCase().indexOf(s) !== -1) {
                return true;
              }
            }
          }
        }
        return false;
      }) : this.data;
    }
  };
  BootstrapTable.prototype.initPagination = function () {
    if (!this.options.pagination) {
      this.$pagination.hide();
      return;
    } else {
      this.$pagination.show();
    }
    var that = this,
      html = [],
      $allSelected = false,
      i,
      from,
      to,
      $pageList,
      $pre,
      $next,
      $number,
      data = this.getData(),
      pageList = this.options.pageList;
    if (this.options.sidePagination !== 'server') {
      this.options.totalRows = data.length;
    }
    this.totalPages = 0;
    if (this.options.totalRows) {
      if (this.options.pageSize === this.options.formatAllRows()) {
        this.options.pageSize = this.options.totalRows;
        $allSelected = true;
      } else if (this.options.pageSize === this.options.totalRows) {
        // Fix #667 Table with pagination,
        // multiple pages and a search that matches to one page throws exception
        var pageLst = typeof this.options.pageList === 'string' ? this.options.pageList.replace('[', '').replace(']', '').replace(/ /g, '').toLowerCase().split(',') : this.options.pageList;
        if ($.inArray(this.options.formatAllRows().toLowerCase(), pageLst) > -1) {
          $allSelected = true;
        }
      }
      this.totalPages = ~~((this.options.totalRows - 1) / this.options.pageSize) + 1;
      this.options.totalPages = this.totalPages;
    }
    if (this.totalPages > 0 && this.options.pageNumber > this.totalPages) {
      this.options.pageNumber = this.totalPages;
    }
    this.pageFrom = (this.options.pageNumber - 1) * this.options.pageSize + 1;
    this.pageTo = this.options.pageNumber * this.options.pageSize;
    if (this.pageTo > this.options.totalRows) {
      this.pageTo = this.options.totalRows;
    }
    html.push(sprintf('<div class="%s-%s pagination-detail">', bs.pullClass, this.options.paginationDetailHAlign), '<span class="pagination-info">', this.options.onlyInfoPagination ? this.options.formatDetailPagination(this.options.totalRows) : this.options.formatShowingRows(this.pageFrom, this.pageTo, this.options.totalRows), '</span>');
    if (!this.options.onlyInfoPagination) {
      html.push('<span class="page-list">');
      var pageNumber = [sprintf('<span class="btn-group %s">', this.options.paginationVAlign === 'top' || this.options.paginationVAlign === 'both' ? 'dropdown' : 'dropup'), '<button type="button" class="btn' + sprintf(' btn-%s', this.options.buttonsClass) + sprintf(' btn-%s', this.options.iconSize) + ' dropdown-toggle" data-toggle="dropdown">', '<span class="page-size">', $allSelected ? this.options.formatAllRows() : this.options.pageSize, '</span>', ' <span class="caret"></span>', '</button>', bs.pageDropdownHtml[0]];
      if (typeof this.options.pageList === 'string') {
        var list = this.options.pageList.replace('[', '').replace(']', '').replace(/ /g, '').split(',');
        pageList = [];
        $.each(list, function (i, value) {
          pageList.push(value.toUpperCase() === that.options.formatAllRows().toUpperCase() || value.toUpperCase() === "UNLIMITED" ? that.options.formatAllRows() : +value);
        });
      }
      $.each(pageList, function (i, page) {
        if (!that.options.smartDisplay || i === 0 || pageList[i - 1] < that.options.totalRows) {
          var active;
          if ($allSelected) {
            active = page === that.options.formatAllRows() ? 'active' : '';
          } else {
            active = page === that.options.pageSize ? 'active' : '';
          }
          pageNumber.push(sprintf(bs.pageDropdownItemHtml, active, page));
        }
      });
      pageNumber.push(bs.pageDropdownHtml[1] + '</span>');
      html.push(this.options.formatRecordsPerPage(pageNumber.join('')));
      html.push('</span>');
      html.push('</div>', sprintf('<div class="%s-%s pagination">', bs.pullClass, this.options.paginationHAlign), '<ul class="pagination' + sprintf(' pagination-%s', this.options.iconSize) + '">', sprintf('<li class="page-item page-pre"><a class="page-link" href="#">%s</a></li>', this.options.paginationPreText));
      if (this.totalPages < 5) {
        from = 1;
        to = this.totalPages;
      } else {
        from = this.options.pageNumber - 2;
        to = from + 4;
        if (from < 1) {
          from = 1;
          to = 5;
        }
        if (to > this.totalPages) {
          to = this.totalPages;
          from = to - 4;
        }
      }
      if (this.totalPages >= 6) {
        if (this.options.pageNumber >= 3) {
          html.push(sprintf('<li class="page-item page-first%s">', 1 === this.options.pageNumber ? ' active' : ''), '<a class="page-link" href="#">', 1, '</a>', '</li>');
          from++;
        }
        if (this.options.pageNumber >= 4) {
          if (this.options.pageNumber == 4 || this.totalPages == 6 || this.totalPages == 7) {
            from--;
          } else {
            html.push('<li class="page-item page-first-separator disabled">', '<a class="page-link" href="#">...</a>', '</li>');
          }
          to--;
        }
      }
      if (this.totalPages >= 7) {
        if (this.options.pageNumber >= this.totalPages - 2) {
          from--;
        }
      }
      if (this.totalPages == 6) {
        if (this.options.pageNumber >= this.totalPages - 2) {
          to++;
        }
      } else if (this.totalPages >= 7) {
        if (this.totalPages == 7 || this.options.pageNumber >= this.totalPages - 3) {
          to++;
        }
      }
      for (i = from; i <= to; i++) {
        html.push(sprintf('<li class="page-item%s">', i === this.options.pageNumber ? ' active' : ''), '<a class="page-link" href="#">', i, '</a>', '</li>');
      }
      if (this.totalPages >= 8) {
        if (this.options.pageNumber <= this.totalPages - 4) {
          html.push('<li class="page-item page-last-separator disabled">', '<a class="page-link" href="#">...</a>', '</li>');
        }
      }
      if (this.totalPages >= 6) {
        if (this.options.pageNumber <= this.totalPages - 3) {
          html.push(sprintf('<li class="page-item page-last%s">', this.totalPages === this.options.pageNumber ? ' active' : ''), '<a class="page-link" href="#">', this.totalPages, '</a>', '</li>');
        }
      }
      html.push(sprintf('<li class="page-item page-next"><a class="page-link" href="#">%s</a></li>', this.options.paginationNextText), '</ul>', '</div>');
    }
    this.$pagination.html(html.join(''));
    if (!this.options.onlyInfoPagination) {
      $pageList = this.$pagination.find('.page-list a');
      $pre = this.$pagination.find('.page-pre');
      $next = this.$pagination.find('.page-next');
      $number = this.$pagination.find('.page-item').not('.page-next, .page-pre');
      if (this.options.smartDisplay) {
        if (this.totalPages <= 1) {
          this.$pagination.find('div.pagination').hide();
        }
        if (pageList.length < 2 || this.options.totalRows <= pageList[0]) {
          this.$pagination.find('span.page-list').hide();
        }

        // when data is empty, hide the pagination
        this.$pagination[this.getData().length ? 'show' : 'hide']();
      }
      if (!this.options.paginationLoop) {
        if (this.options.pageNumber === 1) {
          $pre.addClass('disabled');
        }
        if (this.options.pageNumber === this.totalPages) {
          $next.addClass('disabled');
        }
      }
      if ($allSelected) {
        this.options.pageSize = this.options.formatAllRows();
      }
      // removed the events for last and first, onPageNumber executeds the same logic
      $pageList.off('click').on('click', $.proxy(this.onPageListChange, this));
      $pre.off('click').on('click', $.proxy(this.onPagePre, this));
      $next.off('click').on('click', $.proxy(this.onPageNext, this));
      $number.off('click').on('click', $.proxy(this.onPageNumber, this));
    }
  };
  BootstrapTable.prototype.updatePagination = function (event) {
    // Fix #171: IE disabled button can be clicked bug.
    if (event && $(event.currentTarget).hasClass('disabled')) {
      return;
    }
    if (!this.options.maintainSelected) {
      this.resetRows();
    }
    this.initPagination();
    if (this.options.sidePagination === 'server') {
      this.initServer();
    } else {
      this.initBody();
    }
    this.trigger('page-change', this.options.pageNumber, this.options.pageSize);
  };
  BootstrapTable.prototype.onPageListChange = function (event) {
    event.preventDefault();
    var $this = $(event.currentTarget);
    $this.parent().addClass('active').siblings().removeClass('active');
    this.options.pageSize = $this.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ? this.options.formatAllRows() : +$this.text();
    this.$toolbar.find('.page-size').text(this.options.pageSize);
    this.updatePagination(event);
    return false;
  };
  BootstrapTable.prototype.onPagePre = function (event) {
    event.preventDefault();
    if (this.options.pageNumber - 1 === 0) {
      this.options.pageNumber = this.options.totalPages;
    } else {
      this.options.pageNumber--;
    }
    this.updatePagination(event);
    return false;
  };
  BootstrapTable.prototype.onPageNext = function (event) {
    event.preventDefault();
    if (this.options.pageNumber + 1 > this.options.totalPages) {
      this.options.pageNumber = 1;
    } else {
      this.options.pageNumber++;
    }
    this.updatePagination(event);
    return false;
  };
  BootstrapTable.prototype.onPageNumber = function (event) {
    event.preventDefault();
    if (this.options.pageNumber === +$(event.currentTarget).text()) {
      return;
    }
    this.options.pageNumber = +$(event.currentTarget).text();
    this.updatePagination(event);
    return false;
  };
  BootstrapTable.prototype.initRow = function (item, i, data, parentDom) {
    var that = this,
      key,
      html = [],
      style = {},
      csses = [],
      data_ = '',
      attributes = {},
      htmlAttributes = [];
    if ($.inArray(item, this.hiddenRows) > -1) {
      return;
    }
    style = calculateObjectValue(this.options, this.options.rowStyle, [item, i], style);
    if (style && style.css) {
      for (key in style.css) {
        csses.push(key + ': ' + style.css[key]);
      }
    }
    attributes = calculateObjectValue(this.options, this.options.rowAttributes, [item, i], attributes);
    if (attributes) {
      for (key in attributes) {
        htmlAttributes.push(sprintf('%s="%s"', key, escapeHTML(attributes[key])));
      }
    }
    if (item._data && !$.isEmptyObject(item._data)) {
      $.each(item._data, function (k, v) {
        // ignore data-index
        if (k === 'index') {
          return;
        }
        data_ += sprintf(' data-%s="%s"', k, v);
      });
    }
    html.push('<tr', sprintf(' %s', htmlAttributes.join(' ')), sprintf(' id="%s"', $.isArray(item) ? undefined : item._id), sprintf(' class="%s"', style.classes || ($.isArray(item) ? undefined : item._class)), sprintf(' data-index="%s"', i), sprintf(' data-uniqueid="%s"', item[this.options.uniqueId]), sprintf('%s', data_), '>');
    if (this.options.cardView) {
      html.push(sprintf('<td colspan="%s"><div class="card-views">', this.header.fields.length));
    }
    if (!this.options.cardView && this.options.detailView) {
      html.push('<td>');
      if (calculateObjectValue(null, this.options.detailFilter, [i, item])) {
        html.push('<a class="detail-icon" href="#">', sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.detailOpen), '</a>');
      }
      html.push('</td>');
    }
    $.each(this.header.fields, function (j, field) {
      var text = '',
        value_ = getItemField(item, field, that.options.escape),
        value = '',
        type = '',
        cellStyle = {},
        id_ = '',
        class_ = that.header.classes[j],
        data_ = '',
        rowspan_ = '',
        colspan_ = '',
        title_ = '',
        column = that.columns[j];
      if (that.fromHtml && typeof value_ === 'undefined') {
        if (!column.checkbox && !column.radio) {
          return;
        }
      }
      if (!column.visible) {
        return;
      }
      if (that.options.cardView && !column.cardVisible) {
        return;
      }
      if (column.escape) {
        value_ = escapeHTML(value_);
      }
      style = sprintf('style="%s"', csses.concat(that.header.styles[j]).join('; '));

      // handle td's id and class
      if (item['_' + field + '_id']) {
        id_ = sprintf(' id="%s"', item['_' + field + '_id']);
      }
      if (item['_' + field + '_class']) {
        class_ = sprintf(' class="%s"', item['_' + field + '_class']);
      }
      if (item['_' + field + '_rowspan']) {
        rowspan_ = sprintf(' rowspan="%s"', item['_' + field + '_rowspan']);
      }
      if (item['_' + field + '_colspan']) {
        colspan_ = sprintf(' colspan="%s"', item['_' + field + '_colspan']);
      }
      if (item['_' + field + '_title']) {
        title_ = sprintf(' title="%s"', item['_' + field + '_title']);
      }
      cellStyle = calculateObjectValue(that.header, that.header.cellStyles[j], [value_, item, i, field], cellStyle);
      if (cellStyle.classes) {
        class_ = sprintf(' class="%s"', cellStyle.classes);
      }
      if (cellStyle.css) {
        var csses_ = [];
        for (var key in cellStyle.css) {
          csses_.push(key + ': ' + cellStyle.css[key]);
        }
        style = sprintf('style="%s"', csses_.concat(that.header.styles[j]).join('; '));
      }
      value = calculateObjectValue(column, that.header.formatters[j], [value_, item, i, field], value_);
      if (item['_' + field + '_data'] && !$.isEmptyObject(item['_' + field + '_data'])) {
        $.each(item['_' + field + '_data'], function (k, v) {
          // ignore data-index
          if (k === 'index') {
            return;
          }
          data_ += sprintf(' data-%s="%s"', k, v);
        });
      }
      if (column.checkbox || column.radio) {
        type = column.checkbox ? 'checkbox' : type;
        type = column.radio ? 'radio' : type;
        text = [sprintf(that.options.cardView ? '<div class="card-view %s">' : '<td class="bs-checkbox %s">', column['class'] || ''), '<input' + sprintf(' data-index="%s"', i) + sprintf(' name="%s"', that.options.selectItemName) + sprintf(' type="%s"', type) + sprintf(' value="%s"', item[that.options.idField]) + sprintf(' checked="%s"', value === true || value_ || value && value.checked ? 'checked' : undefined) + sprintf(' disabled="%s"', !column.checkboxEnabled || value && value.disabled ? 'disabled' : undefined) + ' />', that.header.formatters[j] && typeof value === 'string' ? value : '', that.options.cardView ? '</div>' : '</td>'].join('');
        item[that.header.stateField] = value === true || !!value_ || value && value.checked;
      } else {
        value = typeof value === 'undefined' || value === null ? that.options.undefinedText : value;
        text = that.options.cardView ? ['<div class="card-view">', that.options.showHeader ? sprintf('<span class="title" %s>%s</span>', style, getPropertyFromOther(that.columns, 'field', 'title', field)) : '', sprintf('<span class="value">%s</span>', value), '</div>'].join('') : [sprintf('<td%s %s %s %s %s %s %s>', id_, class_, style, data_, rowspan_, colspan_, title_), value, '</td>'].join('');

        // Hide empty data on Card view when smartDisplay is set to true.
        if (that.options.cardView && that.options.smartDisplay && value === '') {
          // Should set a placeholder for event binding correct fieldIndex
          text = '<div class="card-view"></div>';
        }
      }
      html.push(text);
    });
    if (this.options.cardView) {
      html.push('</div></td>');
    }
    html.push('</tr>');
    return html.join(' ');
  };
  BootstrapTable.prototype.initBody = function (fixedScroll) {
    var that = this,
      html = [],
      data = this.getData();
    this.trigger('pre-body', data);
    this.$body = this.$el.find('>tbody');
    if (!this.$body.length) {
      this.$body = $('<tbody></tbody>').appendTo(this.$el);
    }

    //Fix #389 Bootstrap-table-flatJSON is not working

    if (!this.options.pagination || this.options.sidePagination === 'server') {
      this.pageFrom = 1;
      this.pageTo = data.length;
    }
    var trFragments = $(document.createDocumentFragment());
    var hasTr;
    for (var i = this.pageFrom - 1; i < this.pageTo; i++) {
      var item = data[i];
      var tr = this.initRow(item, i, data, trFragments);
      hasTr = hasTr || !!tr;
      if (tr && tr !== true) {
        trFragments.append(tr);
      }
    }

    // show no records
    if (!hasTr) {
      trFragments.append('<tr class="no-records-found">' + sprintf('<td colspan="%s">%s</td>', this.$header.find('th').length, this.options.formatNoMatches()) + '</tr>');
    }
    this.$body.html(trFragments);
    if (!fixedScroll) {
      this.scrollTo(0);
    }

    // click to select by column
    this.$body.find('> tr[data-index] > td').off('click dblclick').on('click dblclick', function (e) {
      var $td = $(this),
        $tr = $td.parent(),
        item = that.data[$tr.data('index')],
        index = $td[0].cellIndex,
        fields = that.getVisibleFields(),
        field = fields[that.options.detailView && !that.options.cardView ? index - 1 : index],
        column = that.columns[that.fieldsColumnsIndex[field]],
        value = getItemField(item, field, that.options.escape);
      if ($td.find('.detail-icon').length) {
        return;
      }
      that.trigger(e.type === 'click' ? 'click-cell' : 'dbl-click-cell', field, value, item, $td);
      that.trigger(e.type === 'click' ? 'click-row' : 'dbl-click-row', item, $tr, field);

      // if click to select - then trigger the checkbox/radio click
      if (e.type === 'click' && that.options.clickToSelect && column.clickToSelect && that.options.ignoreClickToSelectOn(e.target)) {
        var $selectItem = $tr.find(sprintf('[name="%s"]', that.options.selectItemName));
        if ($selectItem.length) {
          $selectItem[0].click(); // #144: .trigger('click') bug
        }
      }
    });

    this.$body.find('> tr[data-index] > td > .detail-icon').off('click').on('click', function (e) {
      e.preventDefault();
      var $this = $(this),
        $tr = $this.parent().parent(),
        index = $tr.data('index'),
        row = data[index]; // Fix #980 Detail view, when searching, returns wrong row

      // remove and update
      if ($tr.next().is('tr.detail-view')) {
        $this.find('i').attr('class', sprintf('%s %s', that.options.iconsPrefix, that.options.icons.detailOpen));
        that.trigger('collapse-row', index, row, $tr.next());
        $tr.next().remove();
      } else {
        $this.find('i').attr('class', sprintf('%s %s', that.options.iconsPrefix, that.options.icons.detailClose));
        $tr.after(sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>', $tr.find('td').length));
        var $element = $tr.next().find('td');
        var content = calculateObjectValue(that.options, that.options.detailFormatter, [index, row, $element], '');
        if ($element.length === 1) {
          $element.append(content);
        }
        that.trigger('expand-row', index, row, $element);
      }
      that.resetView();
      return false;
    });
    this.$selectItem = this.$body.find(sprintf('[name="%s"]', this.options.selectItemName));
    this.$selectItem.off('click').on('click', function (event) {
      event.stopImmediatePropagation();
      var $this = $(this),
        checked = $this.prop('checked'),
        row = that.data[$this.data('index')];
      if ($(this).is(':radio') || that.options.singleSelect) {
        $.each(that.options.data, function (i, row) {
          row[that.header.stateField] = false;
        });
      }
      row[that.header.stateField] = checked;
      if (that.options.singleSelect) {
        that.$selectItem.not(this).each(function () {
          that.data[$(this).data('index')][that.header.stateField] = false;
        });
        that.$selectItem.filter(':checked').not(this).prop('checked', false);
      }
      that.updateSelected();
      that.trigger(checked ? 'check' : 'uncheck', row, $this);
    });
    $.each(this.header.events, function (i, events) {
      if (!events) {
        return;
      }
      // fix bug, if events is defined with namespace
      if (typeof events === 'string') {
        events = calculateObjectValue(null, events);
      }
      var field = that.header.fields[i],
        fieldIndex = $.inArray(field, that.getVisibleFields());
      if (fieldIndex === -1) {
        return;
      }
      if (that.options.detailView && !that.options.cardView) {
        fieldIndex += 1;
      }
      for (var key in events) {
        that.$body.find('>tr:not(.no-records-found)').each(function () {
          var $tr = $(this),
            $td = $tr.find(that.options.cardView ? '.card-view' : 'td').eq(fieldIndex),
            index = key.indexOf(' '),
            name = key.substring(0, index),
            el = key.substring(index + 1),
            func = events[key];
          $td.find(el).off(name).on(name, function (e) {
            var index = $tr.data('index'),
              row = that.data[index],
              value = row[field];
            func.apply(this, [e, value, row, index]);
          });
        });
      }
    });
    this.updateSelected();
    this.resetView();
    this.trigger('post-body', data);
  };
  BootstrapTable.prototype.initServer = function (silent, query, url) {
    var that = this,
      data = {},
      index = $.inArray(this.options.sortName, this.header.fields),
      params = {
        searchText: this.searchText,
        sortName: this.options.sortName,
        sortOrder: this.options.sortOrder
      },
      request;
    if (this.header.sortNames[index]) {
      params.sortName = this.header.sortNames[index];
    }
    if (this.options.pagination && this.options.sidePagination === 'server') {
      params.pageSize = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize;
      params.pageNumber = this.options.pageNumber;
    }
    if (!(url || this.options.url) && !this.options.ajax) {
      return;
    }
    if (this.options.queryParamsType === 'limit') {
      params = {
        search: params.searchText,
        sort: params.sortName,
        order: params.sortOrder
      };
      if (this.options.pagination && this.options.sidePagination === 'server') {
        params.offset = this.options.pageSize === this.options.formatAllRows() ? 0 : this.options.pageSize * (this.options.pageNumber - 1);
        params.limit = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize;
        if (params.limit === 0) {
          delete params.limit;
        }
      }
    }
    if (!$.isEmptyObject(this.filterColumnsPartial)) {
      params.filter = JSON.stringify(this.filterColumnsPartial, null);
    }
    data = calculateObjectValue(this.options, this.options.queryParams, [params], data);
    $.extend(data, query || {});

    // false to stop request
    if (data === false) {
      return;
    }
    if (!silent) {
      this.$tableLoading.show();
    }
    request = $.extend({}, calculateObjectValue(null, this.options.ajaxOptions), {
      type: this.options.method,
      url: url || this.options.url,
      data: this.options.contentType === 'application/json' && this.options.method === 'post' ? JSON.stringify(data) : data,
      cache: this.options.cache,
      contentType: this.options.contentType,
      dataType: this.options.dataType,
      success: function success(res) {
        res = calculateObjectValue(that.options, that.options.responseHandler, [res], res);
        that.load(res);
        that.trigger('load-success', res);
        if (!silent) that.$tableLoading.hide();
      },
      error: function error(res) {
        var data = [];
        if (that.options.sidePagination === 'server') {
          data = {};
          data[that.options.totalField] = 0;
          data[that.options.dataField] = [];
        }
        that.load(data);
        that.trigger('load-error', res.status, res);
        if (!silent) that.$tableLoading.hide();
      }
    });
    if (this.options.ajax) {
      calculateObjectValue(this, this.options.ajax, [request], null);
    } else {
      if (this._xhr && this._xhr.readyState !== 4) {
        this._xhr.abort();
      }
      this._xhr = $.ajax(request);
    }
  };
  BootstrapTable.prototype.initSearchText = function () {
    if (this.options.search) {
      this.searchText = '';
      if (this.options.searchText !== '') {
        var $search = this.$toolbar.find('.search input');
        $search.val(this.options.searchText);
        this.onSearch({
          currentTarget: $search,
          firedByInitSearchText: true
        });
      }
    }
  };
  BootstrapTable.prototype.getCaret = function () {
    var that = this;
    $.each(this.$header.find('th'), function (i, th) {
      $(th).find('.sortable').removeClass('desc asc').addClass($(th).data('field') === that.options.sortName ? that.options.sortOrder : 'both');
    });
  };
  BootstrapTable.prototype.updateSelected = function () {
    var checkAll = this.$selectItem.filter(':enabled').length && this.$selectItem.filter(':enabled').length === this.$selectItem.filter(':enabled').filter(':checked').length;
    this.$selectAll.add(this.$selectAll_).prop('checked', checkAll);
    this.$selectItem.each(function () {
      $(this).closest('tr')[$(this).prop('checked') ? 'addClass' : 'removeClass']('selected');
    });
  };
  BootstrapTable.prototype.updateRows = function () {
    var that = this;
    this.$selectItem.each(function () {
      that.data[$(this).data('index')][that.header.stateField] = $(this).prop('checked');
    });
  };
  BootstrapTable.prototype.resetRows = function () {
    var that = this;
    $.each(this.data, function (i, row) {
      that.$selectAll.prop('checked', false);
      that.$selectItem.prop('checked', false);
      if (that.header.stateField) {
        row[that.header.stateField] = false;
      }
    });
    this.initHiddenRows();
  };
  BootstrapTable.prototype.trigger = function (name) {
    var args = Array.prototype.slice.call(arguments, 1);
    name += '.bs.table';
    this.options[BootstrapTable.EVENTS[name]].apply(this.options, args);
    this.$el.trigger($.Event(name), args);
    this.options.onAll(name, args);
    this.$el.trigger($.Event('all.bs.table'), [name, args]);
  };
  BootstrapTable.prototype.resetHeader = function () {
    // fix #61: the hidden table reset header bug.
    // fix bug: get $el.css('width') error sometime (height = 500)
    clearTimeout(this.timeoutId_);
    this.timeoutId_ = setTimeout($.proxy(this.fitHeader, this), this.$el.is(':hidden') ? 100 : 0);
  };
  BootstrapTable.prototype.fitHeader = function () {
    var that = this,
      fixedBody,
      scrollWidth,
      focused,
      focusedTemp;
    if (that.$el.is(':hidden')) {
      that.timeoutId_ = setTimeout($.proxy(that.fitHeader, that), 100);
      return;
    }
    fixedBody = this.$tableBody.get(0);
    scrollWidth = fixedBody.scrollWidth > fixedBody.clientWidth && fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.outerHeight() ? getScrollBarWidth() : 0;
    this.$el.css('margin-top', -this.$header.outerHeight());
    focused = $(':focus');
    if (focused.length > 0) {
      var $th = focused.parents('th');
      if ($th.length > 0) {
        var dataField = $th.attr('data-field');
        if (dataField !== undefined) {
          var $headerTh = this.$header.find("[data-field='" + dataField + "']");
          if ($headerTh.length > 0) {
            $headerTh.find(":input").addClass("focus-temp");
          }
        }
      }
    }
    this.$header_ = this.$header.clone(true, true);
    this.$selectAll_ = this.$header_.find('[name="btSelectAll"]');
    this.$tableHeader.css({
      'margin-right': scrollWidth
    }).find('table').css('width', this.$el.outerWidth()).html('').attr('class', this.$el.attr('class')).append(this.$header_);
    focusedTemp = $('.focus-temp:visible:eq(0)');
    if (focusedTemp.length > 0) {
      focusedTemp.focus();
      this.$header.find('.focus-temp').removeClass('focus-temp');
    }

    // fix bug: $.data() is not working as expected after $.append()
    this.$header.find('th[data-field]').each(function (i) {
      that.$header_.find(sprintf('th[data-field="%s"]', $(this).data('field'))).data($(this).data());
    });
    var visibleFields = this.getVisibleFields(),
      $ths = this.$header_.find('th');
    this.$body.find('>tr:first-child:not(.no-records-found) > *').each(function (i) {
      var $this = $(this),
        index = i;
      if (that.options.detailView && !that.options.cardView) {
        if (i === 0) {
          that.$header_.find('th.detail').find('.fht-cell').width($this.innerWidth());
        }
        index = i - 1;
      }
      if (index === -1) {
        return;
      }
      var $th = that.$header_.find(sprintf('th[data-field="%s"]', visibleFields[index]));
      if ($th.length > 1) {
        $th = $($ths[$this[0].cellIndex]);
      }
      var zoomWidth = $th.width() - $th.find('.fht-cell').width();
      $th.find('.fht-cell').width($this.innerWidth() - zoomWidth);
    });
    this.horizontalScroll();
    this.trigger('post-header');
  };
  BootstrapTable.prototype.resetFooter = function () {
    var that = this,
      data = that.getData(),
      html = [];
    if (!this.options.showFooter || this.options.cardView) {
      //do nothing
      return;
    }
    if (!this.options.cardView && this.options.detailView) {
      html.push('<td><div class="th-inner">&nbsp;</div><div class="fht-cell"></div></td>');
    }
    $.each(this.columns, function (i, column) {
      var key,
        falign = '',
        // footer align style
        valign = '',
        csses = [],
        style = {},
        class_ = sprintf(' class="%s"', column['class']);
      if (!column.visible) {
        return;
      }
      if (that.options.cardView && !column.cardVisible) {
        return;
      }
      falign = sprintf('text-align: %s; ', column.falign ? column.falign : column.align);
      valign = sprintf('vertical-align: %s; ', column.valign);
      style = calculateObjectValue(null, that.options.footerStyle);
      if (style && style.css) {
        for (key in style.css) {
          csses.push(key + ': ' + style.css[key]);
        }
      }
      html.push('<td', class_, sprintf(' style="%s"', falign + valign + csses.concat().join('; ')), '>');
      html.push('<div class="th-inner">');
      html.push(calculateObjectValue(column, column.footerFormatter, [data], '&nbsp;') || '&nbsp;');
      html.push('</div>');
      html.push('<div class="fht-cell"></div>');
      html.push('</div>');
      html.push('</td>');
    });
    this.$tableFooter.find('tr').html(html.join(''));
    this.$tableFooter.show();
    clearTimeout(this.timeoutFooter_);
    this.timeoutFooter_ = setTimeout($.proxy(this.fitFooter, this), this.$el.is(':hidden') ? 100 : 0);
  };
  BootstrapTable.prototype.fitFooter = function () {
    var that = this,
      $footerTd,
      elWidth,
      scrollWidth;
    clearTimeout(this.timeoutFooter_);
    if (this.$el.is(':hidden')) {
      this.timeoutFooter_ = setTimeout($.proxy(this.fitFooter, this), 100);
      return;
    }
    elWidth = this.$el.css('width');
    scrollWidth = elWidth > this.$tableBody.width() ? getScrollBarWidth() : 0;
    this.$tableFooter.css({
      'margin-right': scrollWidth
    }).find('table').css('width', elWidth).attr('class', this.$el.attr('class'));
    $footerTd = this.$tableFooter.find('td');
    this.$body.find('>tr:first-child:not(.no-records-found) > *').each(function (i) {
      var $this = $(this);
      $footerTd.eq(i).find('.fht-cell').width($this.innerWidth());
    });
    this.horizontalScroll();
  };
  BootstrapTable.prototype.horizontalScroll = function () {
    var that = this;
    // horizontal scroll event
    // TODO: it's probably better improving the layout than binding to scroll event

    that.trigger('scroll-body');
    this.$tableBody.off('scroll').on('scroll', function () {
      if (that.options.showHeader && that.options.height) {
        that.$tableHeader.scrollLeft($(this).scrollLeft());
      }
      if (that.options.showFooter && !that.options.cardView) {
        that.$tableFooter.scrollLeft($(this).scrollLeft());
      }
    });
  };
  BootstrapTable.prototype.toggleColumn = function (index, checked, needUpdate) {
    if (index === -1) {
      return;
    }
    this.columns[index].visible = checked;
    this.initHeader();
    this.initSearch();
    this.initPagination();
    this.initBody();
    if (this.options.showColumns) {
      var $items = this.$toolbar.find('.keep-open input').prop('disabled', false);
      if (needUpdate) {
        $items.filter(sprintf('[value="%s"]', index)).prop('checked', checked);
      }
      if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
        $items.filter(':checked').prop('disabled', true);
      }
    }
  };
  BootstrapTable.prototype.getVisibleFields = function () {
    var that = this,
      visibleFields = [];
    $.each(this.header.fields, function (j, field) {
      var column = that.columns[that.fieldsColumnsIndex[field]];
      if (!column.visible) {
        return;
      }
      visibleFields.push(field);
    });
    return visibleFields;
  };

  // PUBLIC FUNCTION DEFINITION
  // =======================

  BootstrapTable.prototype.resetView = function (params) {
    var padding = 0;
    if (params && params.height) {
      this.options.height = params.height;
    }
    this.$selectAll.prop('checked', this.$selectItem.length > 0 && this.$selectItem.length === this.$selectItem.filter(':checked').length);
    if (this.options.height) {
      var toolbarHeight = this.$toolbar.outerHeight(true),
        paginationHeight = this.$pagination.outerHeight(true),
        height = this.options.height - toolbarHeight - paginationHeight;
      this.$tableContainer.css('height', height + 'px');
    }
    if (this.options.cardView) {
      // remove the element css
      this.$el.css('margin-top', '0');
      this.$tableContainer.css('padding-bottom', '0');
      this.$tableFooter.hide();
      return;
    }
    if (this.options.showHeader && this.options.height) {
      this.$tableHeader.show();
      this.resetHeader();
      padding += this.$header.outerHeight();
    } else {
      this.$tableHeader.hide();
      this.trigger('post-header');
    }
    if (this.options.showFooter) {
      this.resetFooter();
      if (this.options.height) {
        padding += this.$tableFooter.outerHeight() + 1;
      }
    }

    // Assign the correct sortable arrow
    this.getCaret();
    this.$tableContainer.css('padding-bottom', padding + 'px');
    this.trigger('reset-view');
  };
  BootstrapTable.prototype.getData = function (useCurrentPage) {
    var data = this.options.data;
    if (this.searchText || this.options.sortName || !$.isEmptyObject(this.filterColumns) || !$.isEmptyObject(this.filterColumnsPartial)) {
      data = this.data;
    }
    if (useCurrentPage) {
      return data.slice(this.pageFrom - 1, this.pageTo);
    }
    return data;
  };
  BootstrapTable.prototype.load = function (data) {
    var fixedScroll = false;

    // #431: support pagination
    if (this.options.pagination && this.options.sidePagination === 'server') {
      this.options.totalRows = data[this.options.totalField];
      fixedScroll = data.fixedScroll;
      data = data[this.options.dataField];
    } else if (!$.isArray(data)) {
      // support fixedScroll
      fixedScroll = data.fixedScroll;
      data = data.data;
    }
    this.initData(data);
    this.initSearch();
    this.initPagination();
    this.initBody(fixedScroll);
  };
  BootstrapTable.prototype.append = function (data) {
    this.initData(data, 'append');
    this.initSearch();
    this.initPagination();
    this.initSort();
    this.initBody(true);
  };
  BootstrapTable.prototype.prepend = function (data) {
    this.initData(data, 'prepend');
    this.initSearch();
    this.initPagination();
    this.initSort();
    this.initBody(true);
  };
  BootstrapTable.prototype.remove = function (params) {
    var len = this.options.data.length,
      i,
      row;
    if (!params.hasOwnProperty('field') || !params.hasOwnProperty('values')) {
      return;
    }
    for (i = len - 1; i >= 0; i--) {
      row = this.options.data[i];
      if (!row.hasOwnProperty(params.field)) {
        continue;
      }
      if ($.inArray(row[params.field], params.values) !== -1) {
        this.options.data.splice(i, 1);
        if (this.options.sidePagination === 'server') {
          this.options.totalRows -= 1;
        }
      }
    }
    if (len === this.options.data.length) {
      return;
    }
    this.initSearch();
    this.initPagination();
    this.initSort();
    this.initBody(true);
  };
  BootstrapTable.prototype.removeAll = function () {
    if (this.options.data.length > 0) {
      this.options.data.splice(0, this.options.data.length);
      this.initSearch();
      this.initPagination();
      this.initBody(true);
    }
  };
  BootstrapTable.prototype.getRowByUniqueId = function (id) {
    var uniqueId = this.options.uniqueId,
      len = this.options.data.length,
      dataRow = null,
      i,
      row,
      rowUniqueId;
    for (i = len - 1; i >= 0; i--) {
      row = this.options.data[i];
      if (row.hasOwnProperty(uniqueId)) {
        // uniqueId is a column
        rowUniqueId = row[uniqueId];
      } else if (row._data.hasOwnProperty(uniqueId)) {
        // uniqueId is a row data property
        rowUniqueId = row._data[uniqueId];
      } else {
        continue;
      }
      if (typeof rowUniqueId === 'string') {
        id = id.toString();
      } else if (typeof rowUniqueId === 'number') {
        if (Number(rowUniqueId) === rowUniqueId && rowUniqueId % 1 === 0) {
          id = parseInt(id);
        } else if (rowUniqueId === Number(rowUniqueId) && rowUniqueId !== 0) {
          id = parseFloat(id);
        }
      }
      if (rowUniqueId === id) {
        dataRow = row;
        break;
      }
    }
    return dataRow;
  };
  BootstrapTable.prototype.removeByUniqueId = function (id) {
    var len = this.options.data.length,
      row = this.getRowByUniqueId(id);
    if (row) {
      this.options.data.splice(this.options.data.indexOf(row), 1);
    }
    if (len === this.options.data.length) {
      return;
    }
    this.initSearch();
    this.initPagination();
    this.initBody(true);
  };
  BootstrapTable.prototype.updateByUniqueId = function (params) {
    var that = this;
    var allParams = $.isArray(params) ? params : [params];
    $.each(allParams, function (i, params) {
      var rowId;
      if (!params.hasOwnProperty('id') || !params.hasOwnProperty('row')) {
        return;
      }
      rowId = $.inArray(that.getRowByUniqueId(params.id), that.options.data);
      if (rowId === -1) {
        return;
      }
      $.extend(that.options.data[rowId], params.row);
    });
    this.initSearch();
    this.initPagination();
    this.initSort();
    this.initBody(true);
  };
  BootstrapTable.prototype.refreshColumnTitle = function (params) {
    if (!params.hasOwnProperty('field') || !params.hasOwnProperty('title')) {
      return;
    }
    this.columns[this.fieldsColumnsIndex[params.field]].title = this.options.escape ? escapeHTML(params.title) : params.title;
    if (this.columns[this.fieldsColumnsIndex[params.field]].visible) {
      var header = this.options.height !== undefined ? this.$tableHeader : this.$header;
      header.find('th[data-field]').each(function (i) {
        if ($(this).data('field') === params.field) {
          $($(this).find(".th-inner")[0]).text(params.title);
          return false;
        }
      });
    }
  };
  BootstrapTable.prototype.insertRow = function (params) {
    if (!params.hasOwnProperty('index') || !params.hasOwnProperty('row')) {
      return;
    }
    this.options.data.splice(params.index, 0, params.row);
    this.initSearch();
    this.initPagination();
    this.initSort();
    this.initBody(true);
  };
  BootstrapTable.prototype.updateRow = function (params) {
    var that = this;
    var allParams = $.isArray(params) ? params : [params];
    $.each(allParams, function (i, params) {
      if (!params.hasOwnProperty('index') || !params.hasOwnProperty('row')) {
        return;
      }
      $.extend(that.options.data[params.index], params.row);
    });
    this.initSearch();
    this.initPagination();
    this.initSort();
    this.initBody(true);
  };
  BootstrapTable.prototype.initHiddenRows = function () {
    this.hiddenRows = [];
  };
  BootstrapTable.prototype.showRow = function (params) {
    this.toggleRow(params, true);
  };
  BootstrapTable.prototype.hideRow = function (params) {
    this.toggleRow(params, false);
  };
  BootstrapTable.prototype.toggleRow = function (params, visible) {
    var row, index;
    if (params.hasOwnProperty('index')) {
      row = this.getData()[params.index];
    } else if (params.hasOwnProperty('uniqueId')) {
      row = this.getRowByUniqueId(params.uniqueId);
    }
    if (!row) {
      return;
    }
    index = $.inArray(row, this.hiddenRows);
    if (!visible && index === -1) {
      this.hiddenRows.push(row);
    } else if (visible && index > -1) {
      this.hiddenRows.splice(index, 1);
    }
    this.initBody(true);
  };
  BootstrapTable.prototype.getHiddenRows = function (show) {
    var that = this,
      data = this.getData(),
      rows = [];
    $.each(data, function (i, row) {
      if ($.inArray(row, that.hiddenRows) > -1) {
        rows.push(row);
      }
    });
    this.hiddenRows = rows;
    return rows;
  };
  BootstrapTable.prototype.mergeCells = function (options) {
    var row = options.index,
      col = $.inArray(options.field, this.getVisibleFields()),
      rowspan = options.rowspan || 1,
      colspan = options.colspan || 1,
      i,
      j,
      $tr = this.$body.find('>tr'),
      $td;
    if (this.options.detailView && !this.options.cardView) {
      col += 1;
    }
    $td = $tr.eq(row).find('>td').eq(col);
    if (row < 0 || col < 0 || row >= this.data.length) {
      return;
    }
    for (i = row; i < row + rowspan; i++) {
      for (j = col; j < col + colspan; j++) {
        $tr.eq(i).find('>td').eq(j).hide();
      }
    }
    $td.attr('rowspan', rowspan).attr('colspan', colspan).show();
  };
  BootstrapTable.prototype.updateCell = function (params) {
    if (!params.hasOwnProperty('index') || !params.hasOwnProperty('field') || !params.hasOwnProperty('value')) {
      return;
    }
    this.data[params.index][params.field] = params.value;
    if (params.reinit === false) {
      return;
    }
    this.initSort();
    this.initBody(true);
  };
  BootstrapTable.prototype.updateCellById = function (params) {
    var that = this;
    if (!params.hasOwnProperty('id') || !params.hasOwnProperty('field') || !params.hasOwnProperty('value')) {
      return;
    }
    var allParams = $.isArray(params) ? params : [params];
    $.each(allParams, function (i, params) {
      var rowId;
      rowId = $.inArray(that.getRowByUniqueId(params.id), that.options.data);
      if (rowId === -1) {
        return;
      }
      that.data[rowId][params.field] = params.value;
    });
    if (params.reinit === false) {
      return;
    }
    this.initSort();
    this.initBody(true);
  };
  BootstrapTable.prototype.getOptions = function () {
    //Deep copy
    return $.extend(true, {}, this.options);
  };
  BootstrapTable.prototype.getSelections = function () {
    var that = this;
    return $.grep(this.options.data, function (row) {
      // fix #2424: from html with checkbox
      return row[that.header.stateField] === true;
    });
  };
  BootstrapTable.prototype.getAllSelections = function () {
    var that = this;
    return $.grep(this.options.data, function (row) {
      return row[that.header.stateField];
    });
  };
  BootstrapTable.prototype.checkAll = function () {
    this.checkAll_(true);
  };
  BootstrapTable.prototype.uncheckAll = function () {
    this.checkAll_(false);
  };
  BootstrapTable.prototype.checkInvert = function () {
    var that = this;
    var rows = that.$selectItem.filter(':enabled');
    var checked = rows.filter(':checked');
    rows.each(function () {
      $(this).prop('checked', !$(this).prop('checked'));
    });
    that.updateRows();
    that.updateSelected();
    that.trigger('uncheck-some', checked);
    checked = that.getSelections();
    that.trigger('check-some', checked);
  };
  BootstrapTable.prototype.checkAll_ = function (checked) {
    var rows;
    if (!checked) {
      rows = this.getSelections();
    }
    this.$selectAll.add(this.$selectAll_).prop('checked', checked);
    this.$selectItem.filter(':enabled').prop('checked', checked);
    this.updateRows();
    if (checked) {
      rows = this.getSelections();
    }
    this.trigger(checked ? 'check-all' : 'uncheck-all', rows);
  };
  BootstrapTable.prototype.check = function (index) {
    this.check_(true, index);
  };
  BootstrapTable.prototype.uncheck = function (index) {
    this.check_(false, index);
  };
  BootstrapTable.prototype.check_ = function (checked, index) {
    var $el = this.$selectItem.filter(sprintf('[data-index="%s"]', index)).prop('checked', checked);
    this.data[index][this.header.stateField] = checked;
    this.updateSelected();
    this.trigger(checked ? 'check' : 'uncheck', this.data[index], $el);
  };
  BootstrapTable.prototype.checkBy = function (obj) {
    this.checkBy_(true, obj);
  };
  BootstrapTable.prototype.uncheckBy = function (obj) {
    this.checkBy_(false, obj);
  };
  BootstrapTable.prototype.checkBy_ = function (checked, obj) {
    if (!obj.hasOwnProperty('field') || !obj.hasOwnProperty('values')) {
      return;
    }
    var that = this,
      rows = [];
    $.each(this.options.data, function (index, row) {
      if (!row.hasOwnProperty(obj.field)) {
        return false;
      }
      if ($.inArray(row[obj.field], obj.values) !== -1) {
        var $el = that.$selectItem.filter(':enabled').filter(sprintf('[data-index="%s"]', index)).prop('checked', checked);
        row[that.header.stateField] = checked;
        rows.push(row);
        that.trigger(checked ? 'check' : 'uncheck', row, $el);
      }
    });
    this.updateSelected();
    this.trigger(checked ? 'check-some' : 'uncheck-some', rows);
  };
  BootstrapTable.prototype.destroy = function () {
    this.$el.insertBefore(this.$container);
    $(this.options.toolbar).insertBefore(this.$el);
    this.$container.next().remove();
    this.$container.remove();
    this.$el.html(this.$el_.html()).css('margin-top', '0').attr('class', this.$el_.attr('class') || ''); // reset the class
  };

  BootstrapTable.prototype.showLoading = function () {
    this.$tableLoading.show();
  };
  BootstrapTable.prototype.hideLoading = function () {
    this.$tableLoading.hide();
  };
  BootstrapTable.prototype.togglePagination = function () {
    this.options.pagination = !this.options.pagination;
    var button = this.$toolbar.find('button[name="paginationSwitch"] i');
    if (this.options.pagination) {
      button.attr("class", this.options.iconsPrefix + " " + this.options.icons.paginationSwitchDown);
    } else {
      button.attr("class", this.options.iconsPrefix + " " + this.options.icons.paginationSwitchUp);
    }
    this.updatePagination();
  };
  BootstrapTable.prototype.toggleFullscreen = function () {
    this.$el.closest('.bootstrap-table').toggleClass('fullscreen');
  };
  BootstrapTable.prototype.refresh = function (params) {
    if (params && params.url) {
      this.options.url = params.url;
    }
    if (params && params.pageNumber) {
      this.options.pageNumber = params.pageNumber;
    }
    if (params && params.pageSize) {
      this.options.pageSize = params.pageSize;
    }
    this.initServer(params && params.silent, params && params.query, params && params.url);
    this.trigger('refresh', params);
  };
  BootstrapTable.prototype.resetWidth = function () {
    if (this.options.showHeader && this.options.height) {
      this.fitHeader();
    }
    if (this.options.showFooter && !this.options.cardView) {
      this.fitFooter();
    }
  };
  BootstrapTable.prototype.showColumn = function (field) {
    this.toggleColumn(this.fieldsColumnsIndex[field], true, true);
  };
  BootstrapTable.prototype.hideColumn = function (field) {
    this.toggleColumn(this.fieldsColumnsIndex[field], false, true);
  };
  BootstrapTable.prototype.getHiddenColumns = function () {
    return $.grep(this.columns, function (column) {
      return !column.visible;
    });
  };
  BootstrapTable.prototype.getVisibleColumns = function () {
    return $.grep(this.columns, function (column) {
      return column.visible;
    });
  };
  BootstrapTable.prototype.toggleAllColumns = function (visible) {
    var that = this;
    $.each(this.columns, function (i, column) {
      that.columns[i].visible = visible;
    });
    this.initHeader();
    this.initSearch();
    this.initPagination();
    this.initBody();
    if (this.options.showColumns) {
      var $items = this.$toolbar.find('.keep-open input').prop('disabled', false);
      if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
        $items.filter(':checked').prop('disabled', true);
      }
    }
  };
  BootstrapTable.prototype.showAllColumns = function () {
    this.toggleAllColumns(true);
  };
  BootstrapTable.prototype.hideAllColumns = function () {
    this.toggleAllColumns(false);
  };
  BootstrapTable.prototype.filterBy = function (columns) {
    this.filterColumns = $.isEmptyObject(columns) ? {} : columns;
    this.options.pageNumber = 1;
    this.initSearch();
    this.updatePagination();
  };
  BootstrapTable.prototype.scrollTo = function (value) {
    if (typeof value === 'string') {
      value = value === 'bottom' ? this.$tableBody[0].scrollHeight : 0;
    }
    if (typeof value === 'number') {
      this.$tableBody.scrollTop(value);
    }
    if (typeof value === 'undefined') {
      return this.$tableBody.scrollTop();
    }
  };
  BootstrapTable.prototype.getScrollPosition = function () {
    return this.scrollTo();
  };
  BootstrapTable.prototype.selectPage = function (page) {
    if (page > 0 && page <= this.options.totalPages) {
      this.options.pageNumber = page;
      this.updatePagination();
    }
  };
  BootstrapTable.prototype.prevPage = function () {
    if (this.options.pageNumber > 1) {
      this.options.pageNumber--;
      this.updatePagination();
    }
  };
  BootstrapTable.prototype.nextPage = function () {
    if (this.options.pageNumber < this.options.totalPages) {
      this.options.pageNumber++;
      this.updatePagination();
    }
  };
  BootstrapTable.prototype.toggleView = function () {
    this.options.cardView = !this.options.cardView;
    this.initHeader();
    // Fixed remove toolbar when click cardView button.
    //that.initToolbar();
    var $icon = this.$toolbar.find('button[name="toggle"] i');
    if (this.options.cardView) {
      $icon.removeClass(this.options.icons.toggleOff);
      $icon.addClass(this.options.icons.toggleOn);
    } else {
      $icon.removeClass(this.options.icons.toggleOn);
      $icon.addClass(this.options.icons.toggleOff);
    }
    this.initBody();
    this.trigger('toggle', this.options.cardView);
  };
  BootstrapTable.prototype.refreshOptions = function (options) {
    //If the objects are equivalent then avoid the call of destroy / init methods
    if (compareObjects(this.options, options, true)) {
      return;
    }
    this.options = $.extend(this.options, options);
    this.trigger('refresh-options', this.options);
    this.destroy();
    this.init();
  };
  BootstrapTable.prototype.resetSearch = function (text) {
    var $search = this.$toolbar.find('.search input');
    $search.val(text || '');
    this.onSearch({
      currentTarget: $search
    });
  };
  BootstrapTable.prototype.expandRow_ = function (expand, index) {
    var $tr = this.$body.find(sprintf('> tr[data-index="%s"]', index));
    if ($tr.next().is('tr.detail-view') === (expand ? false : true)) {
      $tr.find('> td > .detail-icon').click();
    }
  };
  BootstrapTable.prototype.expandRow = function (index) {
    this.expandRow_(true, index);
  };
  BootstrapTable.prototype.collapseRow = function (index) {
    this.expandRow_(false, index);
  };
  BootstrapTable.prototype.expandAllRows = function (isSubTable) {
    if (isSubTable) {
      var $tr = this.$body.find(sprintf('> tr[data-index="%s"]', 0)),
        that = this,
        detailIcon = null,
        executeInterval = false,
        idInterval = -1;
      if (!$tr.next().is('tr.detail-view')) {
        $tr.find('> td > .detail-icon').click();
        executeInterval = true;
      } else if (!$tr.next().next().is('tr.detail-view')) {
        $tr.next().find(".detail-icon").click();
        executeInterval = true;
      }
      if (executeInterval) {
        try {
          idInterval = setInterval(function () {
            detailIcon = that.$body.find("tr.detail-view").last().find(".detail-icon");
            if (detailIcon.length > 0) {
              detailIcon.click();
            } else {
              clearInterval(idInterval);
            }
          }, 1);
        } catch (ex) {
          clearInterval(idInterval);
        }
      }
    } else {
      var trs = this.$body.children();
      for (var i = 0; i < trs.length; i++) {
        this.expandRow_(true, $(trs[i]).data("index"));
      }
    }
  };
  BootstrapTable.prototype.collapseAllRows = function (isSubTable) {
    if (isSubTable) {
      this.expandRow_(false, 0);
    } else {
      var trs = this.$body.children();
      for (var i = 0; i < trs.length; i++) {
        this.expandRow_(false, $(trs[i]).data("index"));
      }
    }
  };
  BootstrapTable.prototype.updateFormatText = function (name, text) {
    if (this.options[sprintf('format%s', name)]) {
      if (typeof text === 'string') {
        this.options[sprintf('format%s', name)] = function () {
          return text;
        };
      } else if (typeof text === 'function') {
        this.options[sprintf('format%s', name)] = text;
      }
    }
    this.initToolbar();
    this.initPagination();
    this.initBody();
  };

  // BOOTSTRAP TABLE PLUGIN DEFINITION
  // =======================

  var allowedMethods = ['getOptions', 'getSelections', 'getAllSelections', 'getData', 'load', 'append', 'prepend', 'remove', 'removeAll', 'insertRow', 'updateRow', 'updateCell', 'updateByUniqueId', 'removeByUniqueId', 'getRowByUniqueId', 'showRow', 'hideRow', 'getHiddenRows', 'mergeCells', 'refreshColumnTitle', 'checkAll', 'uncheckAll', 'checkInvert', 'check', 'uncheck', 'checkBy', 'uncheckBy', 'refresh', 'resetView', 'resetWidth', 'destroy', 'showLoading', 'hideLoading', 'showColumn', 'hideColumn', 'getHiddenColumns', 'getVisibleColumns', 'showAllColumns', 'hideAllColumns', 'filterBy', 'scrollTo', 'getScrollPosition', 'selectPage', 'prevPage', 'nextPage', 'togglePagination', 'toggleView', 'refreshOptions', 'resetSearch', 'expandRow', 'collapseRow', 'expandAllRows', 'collapseAllRows', 'updateFormatText', 'updateCellById'];
  $.fn.bootstrapTable = function (option) {
    var value,
      args = Array.prototype.slice.call(arguments, 1);
    this.each(function () {
      var $this = $(this),
        data = $this.data('bootstrap.table'),
        options = $.extend({}, BootstrapTable.DEFAULTS, $this.data(), _typeof(option) === 'object' && option);
      if (typeof option === 'string') {
        if ($.inArray(option, allowedMethods) < 0) {
          throw new Error("Unknown method: " + option);
        }
        if (!data) {
          return;
        }
        value = data[option].apply(data, args);
        if (option === 'destroy') {
          $this.removeData('bootstrap.table');
        }
      }
      if (!data) {
        $this.data('bootstrap.table', data = new BootstrapTable(this, options));
      }
    });
    return typeof value === 'undefined' ? this : value;
  };
  $.fn.bootstrapTable.Constructor = BootstrapTable;
  $.fn.bootstrapTable.defaults = BootstrapTable.DEFAULTS;
  $.fn.bootstrapTable.columnDefaults = BootstrapTable.COLUMN_DEFAULTS;
  $.fn.bootstrapTable.locales = BootstrapTable.LOCALES;
  $.fn.bootstrapTable.methods = allowedMethods;
  $.fn.bootstrapTable.utils = {
    bootstrapVersion: bootstrapVersion,
    sprintf: sprintf,
    compareObjects: compareObjects,
    calculateObjectValue: calculateObjectValue,
    getItemField: getItemField,
    objectKeys: objectKeys,
    isIEBrowser: isIEBrowser
  };

  // BOOTSTRAP TABLE INIT
  // =======================

  $(function () {
    $('[data-toggle="table"]').bootstrapTable();
  });
})(jQuery);

/***/ }),

/***/ "./assets/js/ezadmin/lib/bootstrap-table/bootstrap.min.js":
/*!****************************************************************!*\
  !*** ./assets/js/ezadmin/lib/bootstrap-table/bootstrap.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? e(exports, __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! popper.js */ "popper.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! popper.js */ "popper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t, e, c) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }
  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function h(r) {
    for (var t = 1; t < arguments.length; t++) {
      var s = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(s);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(s).filter(function (t) {
        return Object.getOwnPropertyDescriptor(s, t).enumerable;
      }))), e.forEach(function (t) {
        var e, n, i;
        e = r, i = s[n = t], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = i;
      });
    }
    return r;
  }
  e = e && e.hasOwnProperty("default") ? e["default"] : e, c = c && c.hasOwnProperty("default") ? c["default"] : c;
  var r,
    n,
    s,
    a,
    l,
    u,
    f,
    d,
    _,
    g,
    m,
    p,
    v,
    E,
    y,
    T,
    C,
    I,
    A,
    D,
    b,
    S,
    w,
    N,
    O,
    k,
    P,
    L,
    j,
    R,
    H,
    W,
    M,
    x,
    U,
    K,
    F,
    V,
    Q,
    B,
    Y,
    G,
    q,
    z,
    X,
    J,
    Z,
    $,
    tt,
    et,
    nt,
    it,
    rt,
    st,
    ot,
    at,
    lt,
    ht,
    ct,
    ut,
    ft,
    dt,
    _t,
    gt,
    mt,
    pt,
    vt,
    Et,
    yt,
    Tt,
    Ct,
    It,
    At,
    Dt,
    bt,
    St,
    wt,
    Nt,
    Ot,
    kt,
    Pt,
    Lt,
    jt,
    Rt,
    Ht,
    Wt,
    Mt,
    xt,
    Ut,
    Kt,
    Ft,
    Vt,
    Qt,
    Bt,
    Yt,
    Gt,
    qt,
    zt,
    Xt,
    Jt,
    Zt,
    $t,
    te,
    ee,
    ne,
    ie,
    re,
    se,
    oe,
    ae,
    le,
    he,
    ce,
    ue,
    fe,
    de,
    _e,
    ge,
    me,
    pe,
    ve,
    Ee,
    ye,
    Te,
    Ce,
    Ie,
    Ae,
    De,
    be,
    Se,
    we,
    Ne,
    Oe,
    ke,
    Pe,
    Le,
    je,
    Re,
    He,
    We,
    Me,
    xe,
    Ue,
    Ke,
    Fe,
    Ve,
    Qe,
    Be,
    Ye,
    Ge,
    qe,
    ze,
    Xe,
    Je,
    Ze,
    $e,
    tn,
    en,
    nn,
    rn,
    sn,
    on,
    an,
    ln,
    hn,
    cn,
    un,
    fn,
    dn,
    _n,
    gn,
    mn,
    pn,
    vn,
    En,
    yn,
    Tn,
    Cn = function (i) {
      var e = "transitionend";
      function t(t) {
        var e = this,
          n = !1;
        return i(this).one(l.TRANSITION_END, function () {
          n = !0;
        }), setTimeout(function () {
          n || l.triggerTransitionEnd(e);
        }, t), this;
      }
      var l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function getUID(t) {
          for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
          return t;
        },
        getSelectorFromElement: function getSelectorFromElement(t) {
          var e = t.getAttribute("data-target");
          e && "#" !== e || (e = t.getAttribute("href") || "");
          try {
            return 0 < i(document).find(e).length ? e : null;
          } catch (t) {
            return null;
          }
        },
        getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
          if (!t) return 0;
          var e = i(t).css("transition-duration");
          return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0;
        },
        reflow: function reflow(t) {
          return t.offsetHeight;
        },
        triggerTransitionEnd: function triggerTransitionEnd(t) {
          i(t).trigger(e);
        },
        supportsTransitionEnd: function supportsTransitionEnd() {
          return Boolean(e);
        },
        isElement: function isElement(t) {
          return (t[0] || t).nodeType;
        },
        typeCheckConfig: function typeCheckConfig(t, e, n) {
          for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i],
              s = e[i],
              o = s && l.isElement(s) ? "element" : (a = s, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
            if (!new RegExp(r).test(o)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".');
          }
          var a;
        }
      };
      return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = {
        bindType: e,
        delegateType: e,
        handle: function handle(t) {
          if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
        }
      }, l;
    }(e),
    In = (n = "alert", a = "." + (s = "bs.alert"), l = (r = e).fn[n], u = {
      CLOSE: "close" + a,
      CLOSED: "closed" + a,
      CLICK_DATA_API: "click" + a + ".data-api"
    }, f = "alert", d = "fade", _ = "show", g = function () {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return t.close = function (t) {
        var e = this._element;
        t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
      }, t.dispose = function () {
        r.removeData(this._element, s), this._element = null;
      }, t._getRootElement = function (t) {
        var e = Cn.getSelectorFromElement(t),
          n = !1;
        return e && (n = r(e)[0]), n || (n = r(t).closest("." + f)[0]), n;
      }, t._triggerCloseEvent = function (t) {
        var e = r.Event(u.CLOSE);
        return r(t).trigger(e), e;
      }, t._removeElement = function (e) {
        var n = this;
        if (r(e).removeClass(_), r(e).hasClass(d)) {
          var t = Cn.getTransitionDurationFromElement(e);
          r(e).one(Cn.TRANSITION_END, function (t) {
            return n._destroyElement(e, t);
          }).emulateTransitionEnd(t);
        } else this._destroyElement(e);
      }, t._destroyElement = function (t) {
        r(t).detach().trigger(u.CLOSED).remove();
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var t = r(this),
            e = t.data(s);
          e || (e = new i(this), t.data(s, e)), "close" === n && e[n](this);
        });
      }, i._handleDismiss = function (e) {
        return function (t) {
          t && t.preventDefault(), e.close(this);
        };
      }, o(i, null, [{
        key: "VERSION",
        get: function get() {
          return "4.1.1";
        }
      }]), i;
    }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())), r.fn[n] = g._jQueryInterface, r.fn[n].Constructor = g, r.fn[n].noConflict = function () {
      return r.fn[n] = l, g._jQueryInterface;
    }, g),
    An = (p = "button", E = "." + (v = "bs.button"), y = ".data-api", T = (m = e).fn[p], C = "active", I = "btn", D = '[data-toggle^="button"]', b = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = {
      CLICK_DATA_API: "click" + E + y,
      FOCUS_BLUR_DATA_API: (A = "focus") + E + y + " blur" + E + y
    }, k = function () {
      function n(t) {
        this._element = t;
      }
      var t = n.prototype;
      return t.toggle = function () {
        var t = !0,
          e = !0,
          n = m(this._element).closest(b)[0];
        if (n) {
          var i = m(this._element).find(S)[0];
          if (i) {
            if ("radio" === i.type) if (i.checked && m(this._element).hasClass(C)) t = !1;else {
              var r = m(n).find(w)[0];
              r && m(r).removeClass(C);
            }
            if (t) {
              if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
              i.checked = !m(this._element).hasClass(C), m(i).trigger("change");
            }
            i.focus(), e = !1;
          }
        }
        e && this._element.setAttribute("aria-pressed", !m(this._element).hasClass(C)), t && m(this._element).toggleClass(C);
      }, t.dispose = function () {
        m.removeData(this._element, v), this._element = null;
      }, n._jQueryInterface = function (e) {
        return this.each(function () {
          var t = m(this).data(v);
          t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]();
        });
      }, o(n, null, [{
        key: "VERSION",
        get: function get() {
          return "4.1.1";
        }
      }]), n;
    }(), m(document).on(O.CLICK_DATA_API, D, function (t) {
      t.preventDefault();
      var e = t.target;
      m(e).hasClass(I) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle");
    }).on(O.FOCUS_BLUR_DATA_API, D, function (t) {
      var e = m(t.target).closest(N)[0];
      m(e).toggleClass(A, /^focus(in)?$/.test(t.type));
    }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function () {
      return m.fn[p] = T, k._jQueryInterface;
    }, k),
    Dn = (L = "carousel", R = "." + (j = "bs.carousel"), H = ".data-api", W = (P = e).fn[L], M = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0
    }, x = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean"
    }, U = "next", K = "prev", F = "left", V = "right", Q = {
      SLIDE: "slide" + R,
      SLID: "slid" + R,
      KEYDOWN: "keydown" + R,
      MOUSEENTER: "mouseenter" + R,
      MOUSELEAVE: "mouseleave" + R,
      TOUCHEND: "touchend" + R,
      LOAD_DATA_API: "load" + R + H,
      CLICK_DATA_API: "click" + R + H
    }, B = "carousel", Y = "active", G = "slide", q = "carousel-item-right", z = "carousel-item-left", X = "carousel-item-next", J = "carousel-item-prev", Z = {
      ACTIVE: ".active",
      ACTIVE_ITEM: ".active.carousel-item",
      ITEM: ".carousel-item",
      NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
      INDICATORS: ".carousel-indicators",
      DATA_SLIDE: "[data-slide], [data-slide-to]",
      DATA_RIDE: '[data-ride="carousel"]'
    }, $ = function () {
      function s(t, e) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0], this._addEventListeners();
      }
      var t = s.prototype;
      return t.next = function () {
        this._isSliding || this._slide(U);
      }, t.nextWhenVisible = function () {
        !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next();
      }, t.prev = function () {
        this._isSliding || this._slide(K);
      }, t.pause = function (t) {
        t || (this._isPaused = !0), P(this._element).find(Z.NEXT_PREV)[0] && (Cn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, t.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, t.to = function (t) {
        var e = this;
        this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0];
        var n = this._getItemIndex(this._activeElement);
        if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) P(this._element).one(Q.SLID, function () {
          return e.to(t);
        });else {
          if (n === t) return this.pause(), void this.cycle();
          var i = n < t ? U : K;
          this._slide(i, this._items[t]);
        }
      }, t.dispose = function () {
        P(this._element).off(R), P.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, t._getConfig = function (t) {
        return t = h({}, M, t), Cn.typeCheckConfig(L, t, x), t;
      }, t._addEventListeners = function () {
        var e = this;
        this._config.keyboard && P(this._element).on(Q.KEYDOWN, function (t) {
          return e._keydown(t);
        }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function (t) {
          return e.pause(t);
        }).on(Q.MOUSELEAVE, function (t) {
          return e.cycle(t);
        }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function () {
          e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t);
          }, 500 + e._config.interval);
        }));
      }, t._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
          case 37:
            t.preventDefault(), this.prev();
            break;
          case 39:
            t.preventDefault(), this.next();
        }
      }, t._getItemIndex = function (t) {
        return this._items = P.makeArray(P(t).parent().find(Z.ITEM)), this._items.indexOf(t);
      }, t._getItemByDirection = function (t, e) {
        var n = t === U,
          i = t === K,
          r = this._getItemIndex(e),
          s = this._items.length - 1;
        if ((i && 0 === r || n && r === s) && !this._config.wrap) return e;
        var o = (r + (t === K ? -1 : 1)) % this._items.length;
        return -1 === o ? this._items[this._items.length - 1] : this._items[o];
      }, t._triggerSlideEvent = function (t, e) {
        var n = this._getItemIndex(t),
          i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),
          r = P.Event(Q.SLIDE, {
            relatedTarget: t,
            direction: e,
            from: i,
            to: n
          });
        return P(this._element).trigger(r), r;
      }, t._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);
          var e = this._indicatorsElement.children[this._getItemIndex(t)];
          e && P(e).addClass(Y);
        }
      }, t._slide = function (t, e) {
        var n,
          i,
          r,
          s = this,
          o = P(this._element).find(Z.ACTIVE_ITEM)[0],
          a = this._getItemIndex(o),
          l = e || o && this._getItemByDirection(t, o),
          h = this._getItemIndex(l),
          c = Boolean(this._interval);
        if (t === U ? (n = z, i = X, r = F) : (n = q, i = J, r = V), l && P(l).hasClass(Y)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
          this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
          var u = P.Event(Q.SLID, {
            relatedTarget: l,
            direction: r,
            from: a,
            to: h
          });
          if (P(this._element).hasClass(G)) {
            P(l).addClass(i), Cn.reflow(l), P(o).addClass(n), P(l).addClass(n);
            var f = Cn.getTransitionDurationFromElement(o);
            P(o).one(Cn.TRANSITION_END, function () {
              P(l).removeClass(n + " " + i).addClass(Y), P(o).removeClass(Y + " " + i + " " + n), s._isSliding = !1, setTimeout(function () {
                return P(s._element).trigger(u);
              }, 0);
            }).emulateTransitionEnd(f);
          } else P(o).removeClass(Y), P(l).addClass(Y), this._isSliding = !1, P(this._element).trigger(u);
          c && this.cycle();
        }
      }, s._jQueryInterface = function (i) {
        return this.each(function () {
          var t = P(this).data(j),
            e = h({}, M, P(this).data());
          "object" == _typeof(i) && (e = h({}, e, i));
          var n = "string" == typeof i ? i : e.slide;
          if (t || (t = new s(this, e), P(this).data(j, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
            t[n]();
          } else e.interval && (t.pause(), t.cycle());
        });
      }, s._dataApiClickHandler = function (t) {
        var e = Cn.getSelectorFromElement(this);
        if (e) {
          var n = P(e)[0];
          if (n && P(n).hasClass(B)) {
            var i = h({}, P(n).data(), P(this).data()),
              r = this.getAttribute("data-slide-to");
            r && (i.interval = !1), s._jQueryInterface.call(P(n), i), r && P(n).data(j).to(r), t.preventDefault();
          }
        }
      }, o(s, null, [{
        key: "VERSION",
        get: function get() {
          return "4.1.1";
        }
      }, {
        key: "Default",
        get: function get() {
          return M;
        }
      }]), s;
    }(), P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function () {
      P(Z.DATA_RIDE).each(function () {
        var t = P(this);
        $._jQueryInterface.call(t, t.data());
      });
    }), P.fn[L] = $._jQueryInterface, P.fn[L].Constructor = $, P.fn[L].noConflict = function () {
      return P.fn[L] = W, $._jQueryInterface;
    }, $),
    bn = (et = "collapse", it = "." + (nt = "bs.collapse"), rt = (tt = e).fn[et], st = {
      toggle: !0,
      parent: ""
    }, ot = {
      toggle: "boolean",
      parent: "(string|element)"
    }, at = {
      SHOW: "show" + it,
      SHOWN: "shown" + it,
      HIDE: "hide" + it,
      HIDDEN: "hidden" + it,
      CLICK_DATA_API: "click" + it + ".data-api"
    }, lt = "show", ht = "collapse", ct = "collapsing", ut = "collapsed", ft = "width", dt = "height", _t = {
      ACTIVES: ".show, .collapsing",
      DATA_TOGGLE: '[data-toggle="collapse"]'
    }, gt = function () {
      function a(t, e) {
        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = tt.makeArray(tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
        for (var n = tt(_t.DATA_TOGGLE), i = 0; i < n.length; i++) {
          var r = n[i],
            s = Cn.getSelectorFromElement(r);
          null !== s && 0 < tt(s).filter(t).length && (this._selector = s, this._triggerArray.push(r));
        }
        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }
      var t = a.prototype;
      return t.toggle = function () {
        tt(this._element).hasClass(lt) ? this.hide() : this.show();
      }, t.show = function () {
        var t,
          e,
          n = this;
        if (!this._isTransitioning && !tt(this._element).hasClass(lt) && (this._parent && 0 === (t = tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = tt(t).not(this._selector).data(nt)) && e._isTransitioning))) {
          var i = tt.Event(at.SHOW);
          if (tt(this._element).trigger(i), !i.isDefaultPrevented()) {
            t && (a._jQueryInterface.call(tt(t).not(this._selector), "hide"), e || tt(t).data(nt, null));
            var r = this._getDimension();
            tt(this._element).removeClass(ht).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && tt(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), this.setTransitioning(!0);
            var s = "scroll" + (r[0].toUpperCase() + r.slice(1)),
              o = Cn.getTransitionDurationFromElement(this._element);
            tt(this._element).one(Cn.TRANSITION_END, function () {
              tt(n._element).removeClass(ct).addClass(ht).addClass(lt), n._element.style[r] = "", n.setTransitioning(!1), tt(n._element).trigger(at.SHOWN);
            }).emulateTransitionEnd(o), this._element.style[r] = this._element[s] + "px";
          }
        }
      }, t.hide = function () {
        var t = this;
        if (!this._isTransitioning && tt(this._element).hasClass(lt)) {
          var e = tt.Event(at.HIDE);
          if (tt(this._element).trigger(e), !e.isDefaultPrevented()) {
            var n = this._getDimension();
            if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Cn.reflow(this._element), tt(this._element).addClass(ct).removeClass(ht).removeClass(lt), 0 < this._triggerArray.length) for (var i = 0; i < this._triggerArray.length; i++) {
              var r = this._triggerArray[i],
                s = Cn.getSelectorFromElement(r);
              if (null !== s) tt(s).hasClass(lt) || tt(r).addClass(ut).attr("aria-expanded", !1);
            }
            this.setTransitioning(!0);
            this._element.style[n] = "";
            var o = Cn.getTransitionDurationFromElement(this._element);
            tt(this._element).one(Cn.TRANSITION_END, function () {
              t.setTransitioning(!1), tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN);
            }).emulateTransitionEnd(o);
          }
        }
      }, t.setTransitioning = function (t) {
        this._isTransitioning = t;
      }, t.dispose = function () {
        tt.removeData(this._element, nt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, t._getConfig = function (t) {
        return (t = h({}, st, t)).toggle = Boolean(t.toggle), Cn.typeCheckConfig(et, t, ot), t;
      }, t._getDimension = function () {
        return tt(this._element).hasClass(ft) ? ft : dt;
      }, t._getParent = function () {
        var n = this,
          t = null;
        Cn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = tt(this._config.parent)[0];
        var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
        return tt(t).find(e).each(function (t, e) {
          n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
        }), t;
      }, t._addAriaAndCollapsedClass = function (t, e) {
        if (t) {
          var n = tt(t).hasClass(lt);
          0 < e.length && tt(e).toggleClass(ut, !n).attr("aria-expanded", n);
        }
      }, a._getTargetFromElement = function (t) {
        var e = Cn.getSelectorFromElement(t);
        return e ? tt(e)[0] : null;
      }, a._jQueryInterface = function (i) {
        return this.each(function () {
          var t = tt(this),
            e = t.data(nt),
            n = h({}, st, t.data(), "object" == _typeof(i) && i ? i : {});
          if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(nt, e)), "string" == typeof i) {
            if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
            e[i]();
          }
        });
      }, o(a, null, [{
        key: "VERSION",
        get: function get() {
          return "4.1.1";
        }
      }, {
        key: "Default",
        get: function get() {
          return st;
        }
      }]), a;
    }(), tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var n = tt(this),
        e = Cn.getSelectorFromElement(this);
      tt(e).each(function () {
        var t = tt(this),
          e = t.data(nt) ? "toggle" : n.data();
        gt._jQueryInterface.call(t, e);
      });
    }), tt.fn[et] = gt._jQueryInterface, tt.fn[et].Constructor = gt, tt.fn[et].noConflict = function () {
      return tt.fn[et] = rt, gt._jQueryInterface;
    }, gt),
    Sn = (pt = "dropdown", Et = "." + (vt = "bs.dropdown"), yt = ".data-api", Tt = (mt = e).fn[pt], Ct = new RegExp("38|40|27"), It = {
      HIDE: "hide" + Et,
      HIDDEN: "hidden" + Et,
      SHOW: "show" + Et,
      SHOWN: "shown" + Et,
      CLICK: "click" + Et,
      CLICK_DATA_API: "click" + Et + yt,
      KEYDOWN_DATA_API: "keydown" + Et + yt,
      KEYUP_DATA_API: "keyup" + Et + yt
    }, At = "disabled", Dt = "show", bt = "dropup", St = "dropright", wt = "dropleft", Nt = "dropdown-menu-right", Ot = "position-static", kt = '[data-toggle="dropdown"]', Pt = ".dropdown form", Lt = ".dropdown-menu", jt = ".navbar-nav", Rt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Ht = "top-start", Wt = "top-end", Mt = "bottom-start", xt = "bottom-end", Ut = "right-start", Kt = "left-start", Ft = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic"
    }, Vt = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string"
    }, Qt = function () {
      function l(t, e) {
        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
      }
      var t = l.prototype;
      return t.toggle = function () {
        if (!this._element.disabled && !mt(this._element).hasClass(At)) {
          var t = l._getParentFromElement(this._element),
            e = mt(this._menu).hasClass(Dt);
          if (l._clearMenus(), !e) {
            var n = {
                relatedTarget: this._element
              },
              i = mt.Event(It.SHOW, n);
            if (mt(t).trigger(i), !i.isDefaultPrevented()) {
              if (!this._inNavbar) {
                if ("undefined" == typeof c) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                var r = this._element;
                "parent" === this._config.reference ? r = t : Cn.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && mt(t).addClass(Ot), this._popper = new c(r, this._menu, this._getPopperConfig());
              }
              "ontouchstart" in document.documentElement && 0 === mt(t).closest(jt).length && mt(document.body).children().on("mouseover", null, mt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), mt(this._menu).toggleClass(Dt), mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN, n));
            }
          }
        }
      }, t.dispose = function () {
        mt.removeData(this._element, vt), mt(this._element).off(Et), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
      }, t.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
      }, t._addEventListeners = function () {
        var e = this;
        mt(this._element).on(It.CLICK, function (t) {
          t.preventDefault(), t.stopPropagation(), e.toggle();
        });
      }, t._getConfig = function (t) {
        return t = h({}, this.constructor.Default, mt(this._element).data(), t), Cn.typeCheckConfig(pt, t, this.constructor.DefaultType), t;
      }, t._getMenuElement = function () {
        if (!this._menu) {
          var t = l._getParentFromElement(this._element);
          this._menu = mt(t).find(Lt)[0];
        }
        return this._menu;
      }, t._getPlacement = function () {
        var t = mt(this._element).parent(),
          e = Mt;
        return t.hasClass(bt) ? (e = Ht, mt(this._menu).hasClass(Nt) && (e = Wt)) : t.hasClass(St) ? e = Ut : t.hasClass(wt) ? e = Kt : mt(this._menu).hasClass(Nt) && (e = xt), e;
      }, t._detectNavbar = function () {
        return 0 < mt(this._element).closest(".navbar").length;
      }, t._getPopperConfig = function () {
        var e = this,
          t = {};
        "function" == typeof this._config.offset ? t.fn = function (t) {
          return t.offsets = h({}, t.offsets, e._config.offset(t.offsets) || {}), t;
        } : t.offset = this._config.offset;
        var n = {
          placement: this._getPlacement(),
          modifiers: {
            offset: t,
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          }
        };
        return "static" === this._config.display && (n.modifiers.applyStyle = {
          enabled: !1
        }), n;
      }, l._jQueryInterface = function (e) {
        return this.each(function () {
          var t = mt(this).data(vt);
          if (t || (t = new l(this, "object" == _typeof(e) ? e : null), mt(this).data(vt, t)), "string" == typeof e) {
            if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
            t[e]();
          }
        });
      }, l._clearMenus = function (t) {
        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = mt.makeArray(mt(kt)), n = 0; n < e.length; n++) {
          var i = l._getParentFromElement(e[n]),
            r = mt(e[n]).data(vt),
            s = {
              relatedTarget: e[n]
            };
          if (r) {
            var o = r._menu;
            if (mt(i).hasClass(Dt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && mt.contains(i, t.target))) {
              var a = mt.Event(It.HIDE, s);
              mt(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && mt(document.body).children().off("mouseover", null, mt.noop), e[n].setAttribute("aria-expanded", "false"), mt(o).removeClass(Dt), mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN, s)));
            }
          }
        }
      }, l._getParentFromElement = function (t) {
        var e,
          n = Cn.getSelectorFromElement(t);
        return n && (e = mt(n)[0]), e || t.parentNode;
      }, l._dataApiKeydownHandler = function (t) {
        if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || mt(t.target).closest(Lt).length)) : Ct.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !mt(this).hasClass(At))) {
          var e = l._getParentFromElement(this),
            n = mt(e).hasClass(Dt);
          if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
            var i = mt(e).find(Rt).get();
            if (0 !== i.length) {
              var r = i.indexOf(t.target);
              38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus();
            }
          } else {
            if (27 === t.which) {
              var s = mt(e).find(kt)[0];
              mt(s).trigger("focus");
            }
            mt(this).trigger("click");
          }
        }
      }, o(l, null, [{
        key: "VERSION",
        get: function get() {
          return "4.1.1";
        }
      }, {
        key: "Default",
        get: function get() {
          return Ft;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return Vt;
        }
      }]), l;
    }(), mt(document).on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API + " " + It.KEYUP_DATA_API, Qt._clearMenus).on(It.CLICK_DATA_API, kt, function (t) {
      t.preventDefault(), t.stopPropagation(), Qt._jQueryInterface.call(mt(this), "toggle");
    }).on(It.CLICK_DATA_API, Pt, function (t) {
      t.stopPropagation();
    }), mt.fn[pt] = Qt._jQueryInterface, mt.fn[pt].Constructor = Qt, mt.fn[pt].noConflict = function () {
      return mt.fn[pt] = Tt, Qt._jQueryInterface;
    }, Qt),
    wn = (Yt = "modal", qt = "." + (Gt = "bs.modal"), zt = (Bt = e).fn[Yt], Xt = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0
    }, Jt = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean"
    }, Zt = {
      HIDE: "hide" + qt,
      HIDDEN: "hidden" + qt,
      SHOW: "show" + qt,
      SHOWN: "shown" + qt,
      FOCUSIN: "focusin" + qt,
      RESIZE: "resize" + qt,
      CLICK_DISMISS: "click.dismiss" + qt,
      KEYDOWN_DISMISS: "keydown.dismiss" + qt,
      MOUSEUP_DISMISS: "mouseup.dismiss" + qt,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + qt,
      CLICK_DATA_API: "click" + qt + ".data-api"
    }, $t = "modal-scrollbar-measure", te = "modal-backdrop", ee = "modal-open", ne = "fade", ie = "show", re = {
      DIALOG: ".modal-dialog",
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      STICKY_CONTENT: ".sticky-top",
      NAVBAR_TOGGLER: ".navbar-toggler"
    }, se = function () {
      function r(t, e) {
        this._config = this._getConfig(e), this._element = t, this._dialog = Bt(t).find(re.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
      }
      var t = r.prototype;
      return t.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t);
      }, t.show = function (t) {
        var e = this;
        if (!this._isTransitioning && !this._isShown) {
          Bt(this._element).hasClass(ne) && (this._isTransitioning = !0);
          var n = Bt.Event(Zt.SHOW, {
            relatedTarget: t
          });
          Bt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Bt(document.body).addClass(ee), this._setEscapeEvent(), this._setResizeEvent(), Bt(this._element).on(Zt.CLICK_DISMISS, re.DATA_DISMISS, function (t) {
            return e.hide(t);
          }), Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function () {
            Bt(e._element).one(Zt.MOUSEUP_DISMISS, function (t) {
              Bt(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
            });
          }), this._showBackdrop(function () {
            return e._showElement(t);
          }));
        }
      }, t.hide = function (t) {
        var e = this;
        if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
          var n = Bt.Event(Zt.HIDE);
          if (Bt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
            this._isShown = !1;
            var i = Bt(this._element).hasClass(ne);
            if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Bt(document).off(Zt.FOCUSIN), Bt(this._element).removeClass(ie), Bt(this._element).off(Zt.CLICK_DISMISS), Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS), i) {
              var r = Cn.getTransitionDurationFromElement(this._element);
              Bt(this._element).one(Cn.TRANSITION_END, function (t) {
                return e._hideModal(t);
              }).emulateTransitionEnd(r);
            } else this._hideModal();
          }
        }
      }, t.dispose = function () {
        Bt.removeData(this._element, Gt), Bt(window, document, this._element, this._backdrop).off(qt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
      }, t.handleUpdate = function () {
        this._adjustDialog();
      }, t._getConfig = function (t) {
        return t = h({}, Xt, t), Cn.typeCheckConfig(Yt, t, Jt), t;
      }, t._showElement = function (t) {
        var e = this,
          n = Bt(this._element).hasClass(ne);
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Cn.reflow(this._element), Bt(this._element).addClass(ie), this._config.focus && this._enforceFocus();
        var i = Bt.Event(Zt.SHOWN, {
            relatedTarget: t
          }),
          r = function r() {
            e._config.focus && e._element.focus(), e._isTransitioning = !1, Bt(e._element).trigger(i);
          };
        if (n) {
          var s = Cn.getTransitionDurationFromElement(this._element);
          Bt(this._dialog).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
        } else r();
      }, t._enforceFocus = function () {
        var e = this;
        Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN, function (t) {
          document !== t.target && e._element !== t.target && 0 === Bt(e._element).has(t.target).length && e._element.focus();
        });
      }, t._setEscapeEvent = function () {
        var e = this;
        this._isShown && this._config.keyboard ? Bt(this._element).on(Zt.KEYDOWN_DISMISS, function (t) {
          27 === t.which && (t.preventDefault(), e.hide());
        }) : this._isShown || Bt(this._element).off(Zt.KEYDOWN_DISMISS);
      }, t._setResizeEvent = function () {
        var e = this;
        this._isShown ? Bt(window).on(Zt.RESIZE, function (t) {
          return e.handleUpdate(t);
        }) : Bt(window).off(Zt.RESIZE);
      }, t._hideModal = function () {
        var t = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
          Bt(document.body).removeClass(ee), t._resetAdjustments(), t._resetScrollbar(), Bt(t._element).trigger(Zt.HIDDEN);
        });
      }, t._removeBackdrop = function () {
        this._backdrop && (Bt(this._backdrop).remove(), this._backdrop = null);
      }, t._showBackdrop = function (t) {
        var e = this,
          n = Bt(this._element).hasClass(ne) ? ne : "";
        if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = te, n && Bt(this._backdrop).addClass(n), Bt(this._backdrop).appendTo(document.body), Bt(this._element).on(Zt.CLICK_DISMISS, function (t) {
            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
          }), n && Cn.reflow(this._backdrop), Bt(this._backdrop).addClass(ie), !t) return;
          if (!n) return void t();
          var i = Cn.getTransitionDurationFromElement(this._backdrop);
          Bt(this._backdrop).one(Cn.TRANSITION_END, t).emulateTransitionEnd(i);
        } else if (!this._isShown && this._backdrop) {
          Bt(this._backdrop).removeClass(ie);
          var r = function r() {
            e._removeBackdrop(), t && t();
          };
          if (Bt(this._element).hasClass(ne)) {
            var s = Cn.getTransitionDurationFromElement(this._backdrop);
            Bt(this._backdrop).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
          } else r();
        } else t && t();
      }, t._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }, t._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }, t._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();
        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, t._setScrollbar = function () {
        var r = this;
        if (this._isBodyOverflowing) {
          Bt(re.FIXED_CONTENT).each(function (t, e) {
            var n = Bt(e)[0].style.paddingRight,
              i = Bt(e).css("padding-right");
            Bt(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px");
          }), Bt(re.STICKY_CONTENT).each(function (t, e) {
            var n = Bt(e)[0].style.marginRight,
              i = Bt(e).css("margin-right");
            Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px");
          }), Bt(re.NAVBAR_TOGGLER).each(function (t, e) {
            var n = Bt(e)[0].style.marginRight,
              i = Bt(e).css("margin-right");
            Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px");
          });
          var t = document.body.style.paddingRight,
            e = Bt(document.body).css("padding-right");
          Bt(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px");
        }
      }, t._resetScrollbar = function () {
        Bt(re.FIXED_CONTENT).each(function (t, e) {
          var n = Bt(e).data("padding-right");
          "undefined" != typeof n && Bt(e).css("padding-right", n).removeData("padding-right");
        }), Bt(re.STICKY_CONTENT + ", " + re.NAVBAR_TOGGLER).each(function (t, e) {
          var n = Bt(e).data("margin-right");
          "undefined" != typeof n && Bt(e).css("margin-right", n).removeData("margin-right");
        });
        var t = Bt(document.body).data("padding-right");
        "undefined" != typeof t && Bt(document.body).css("padding-right", t).removeData("padding-right");
      }, t._getScrollbarWidth = function () {
        var t = document.createElement("div");
        t.className = $t, document.body.appendChild(t);
        var e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t), e;
      }, r._jQueryInterface = function (n, i) {
        return this.each(function () {
          var t = Bt(this).data(Gt),
            e = h({}, Xt, Bt(this).data(), "object" == _typeof(n) && n ? n : {});
          if (t || (t = new r(this, e), Bt(this).data(Gt, t)), "string" == typeof n) {
            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
            t[n](i);
          } else e.show && t.show(i);
        });
      }, o(r, null, [{
        key: "VERSION",
        get: function get() {
          return "4.1.1";
        }
      }, {
        key: "Default",
        get: function get() {
          return Xt;
        }
      }]), r;
    }(), Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function (t) {
      var e,
        n = this,
        i = Cn.getSelectorFromElement(this);
      i && (e = Bt(i)[0]);
      var r = Bt(e).data(Gt) ? "toggle" : h({}, Bt(e).data(), Bt(this).data());
      "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
      var s = Bt(e).one(Zt.SHOW, function (t) {
        t.isDefaultPrevented() || s.one(Zt.HIDDEN, function () {
          Bt(n).is(":visible") && n.focus();
        });
      });
      se._jQueryInterface.call(Bt(e), r, this);
    }), Bt.fn[Yt] = se._jQueryInterface, Bt.fn[Yt].Constructor = se, Bt.fn[Yt].noConflict = function () {
      return Bt.fn[Yt] = zt, se._jQueryInterface;
    }, se),
    Nn = (ae = "tooltip", he = "." + (le = "bs.tooltip"), ce = (oe = e).fn[ae], ue = "bs-tooltip", fe = new RegExp("(^|\\s)" + ue + "\\S+", "g"), ge = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !(_e = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
      }),
      selector: !(de = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)"
      }),
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent"
    }, pe = "out", ve = {
      HIDE: "hide" + he,
      HIDDEN: "hidden" + he,
      SHOW: (me = "show") + he,
      SHOWN: "shown" + he,
      INSERTED: "inserted" + he,
      CLICK: "click" + he,
      FOCUSIN: "focusin" + he,
      FOCUSOUT: "focusout" + he,
      MOUSEENTER: "mouseenter" + he,
      MOUSELEAVE: "mouseleave" + he
    }, Ee = "fade", ye = "show", Te = ".tooltip-inner", Ce = ".arrow", Ie = "hover", Ae = "focus", De = "click", be = "manual", Se = function () {
      function i(t, e) {
        if ("undefined" == typeof c) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
      }
      var t = i.prototype;
      return t.enable = function () {
        this._isEnabled = !0;
      }, t.disable = function () {
        this._isEnabled = !1;
      }, t.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, t.toggle = function (t) {
        if (this._isEnabled) if (t) {
          var e = this.constructor.DATA_KEY,
            n = oe(t.currentTarget).data(e);
          n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
        } else {
          if (oe(this.getTipElement()).hasClass(ye)) return void this._leave(null, this);
          this._enter(null, this);
        }
      }, t.dispose = function () {
        clearTimeout(this._timeout), oe.removeData(this.element, this.constructor.DATA_KEY), oe(this.element).off(this.constructor.EVENT_KEY), oe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && oe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, t.show = function () {
        var e = this;
        if ("none" === oe(this.element).css("display")) throw new Error("Please use show on visible elements");
        var t = oe.Event(this.constructor.Event.SHOW);
        if (this.isWithContent() && this._isEnabled) {
          oe(this.element).trigger(t);
          var n = oe.contains(this.element.ownerDocument.documentElement, this.element);
          if (t.isDefaultPrevented() || !n) return;
          var i = this.getTipElement(),
            r = Cn.getUID(this.constructor.NAME);
          i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && oe(i).addClass(Ee);
          var s = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
            o = this._getAttachment(s);
          this.addAttachmentClass(o);
          var a = !1 === this.config.container ? document.body : oe(this.config.container);
          oe(i).data(this.constructor.DATA_KEY, this), oe.contains(this.element.ownerDocument.documentElement, this.tip) || oe(i).appendTo(a), oe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c(this.element, i, {
            placement: o,
            modifiers: {
              offset: {
                offset: this.config.offset
              },
              flip: {
                behavior: this.config.fallbackPlacement
              },
              arrow: {
                element: Ce
              },
              preventOverflow: {
                boundariesElement: this.config.boundary
              }
            },
            onCreate: function onCreate(t) {
              t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
            },
            onUpdate: function onUpdate(t) {
              e._handlePopperPlacementChange(t);
            }
          }), oe(i).addClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().on("mouseover", null, oe.noop);
          var l = function l() {
            e.config.animation && e._fixTransition();
            var t = e._hoverState;
            e._hoverState = null, oe(e.element).trigger(e.constructor.Event.SHOWN), t === pe && e._leave(null, e);
          };
          if (oe(this.tip).hasClass(Ee)) {
            var h = Cn.getTransitionDurationFromElement(this.tip);
            oe(this.tip).one(Cn.TRANSITION_END, l).emulateTransitionEnd(h);
          } else l();
        }
      }, t.hide = function (t) {
        var e = this,
          n = this.getTipElement(),
          i = oe.Event(this.constructor.Event.HIDE),
          r = function r() {
            e._hoverState !== me && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), oe(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
          };
        if (oe(this.element).trigger(i), !i.isDefaultPrevented()) {
          if (oe(n).removeClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().off("mouseover", null, oe.noop), this._activeTrigger[De] = !1, this._activeTrigger[Ae] = !1, this._activeTrigger[Ie] = !1, oe(this.tip).hasClass(Ee)) {
            var s = Cn.getTransitionDurationFromElement(n);
            oe(n).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
          } else r();
          this._hoverState = "";
        }
      }, t.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      }, t.isWithContent = function () {
        return Boolean(this.getTitle());
      }, t.addAttachmentClass = function (t) {
        oe(this.getTipElement()).addClass(ue + "-" + t);
      }, t.getTipElement = function () {
        return this.tip = this.tip || oe(this.config.template)[0], this.tip;
      }, t.setContent = function () {
        var t = oe(this.getTipElement());
        this.setElementContent(t.find(Te), this.getTitle()), t.removeClass(Ee + " " + ye);
      }, t.setElementContent = function (t, e) {
        var n = this.config.html;
        "object" == _typeof(e) && (e.nodeType || e.jquery) ? n ? oe(e).parent().is(t) || t.empty().append(e) : t.text(oe(e).text()) : t[n ? "html" : "text"](e);
      }, t.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");
        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
      }, t._getAttachment = function (t) {
        return _e[t.toUpperCase()];
      }, t._setListeners = function () {
        var i = this;
        this.config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) oe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
            return i.toggle(t);
          });else if (t !== be) {
            var e = t === Ie ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === Ie ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
            oe(i.element).on(e, i.config.selector, function (t) {
              return i._enter(t);
            }).on(n, i.config.selector, function (t) {
              return i._leave(t);
            });
          }
          oe(i.element).closest(".modal").on("hide.bs.modal", function () {
            return i.hide();
          });
        }), this.config.selector ? this.config = h({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }, t._fixTitle = function () {
        var t = _typeof(this.element.getAttribute("data-original-title"));
        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, t._enter = function (t, e) {
        var n = this.constructor.DATA_KEY;
        (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ae : Ie] = !0), oe(e.getTipElement()).hasClass(ye) || e._hoverState === me ? e._hoverState = me : (clearTimeout(e._timeout), e._hoverState = me, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
          e._hoverState === me && e.show();
        }, e.config.delay.show) : e.show());
      }, t._leave = function (t, e) {
        var n = this.constructor.DATA_KEY;
        (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ae : Ie] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = pe, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
          e._hoverState === pe && e.hide();
        }, e.config.delay.hide) : e.hide());
      }, t._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
        return !1;
      }, t._getConfig = function (t) {
        return "number" == typeof (t = h({}, this.constructor.Default, oe(this.element).data(), "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Cn.typeCheckConfig(ae, t, this.constructor.DefaultType), t;
      }, t._getDelegateConfig = function () {
        var t = {};
        if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        return t;
      }, t._cleanTipClass = function () {
        var t = oe(this.getTipElement()),
          e = t.attr("class").match(fe);
        null !== e && 0 < e.length && t.removeClass(e.join(""));
      }, t._handlePopperPlacementChange = function (t) {
        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
      }, t._fixTransition = function () {
        var t = this.getTipElement(),
          e = this.config.animation;
        null === t.getAttribute("x-placement") && (oe(t).removeClass(Ee), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var t = oe(this).data(le),
            e = "object" == _typeof(n) && n;
          if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), oe(this).data(le, t)), "string" == typeof n)) {
            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
            t[n]();
          }
        });
      }, o(i, null, [{
        key: "VERSION",
        get: function get() {
          return "4.1.1";
        }
      }, {
        key: "Default",
        get: function get() {
          return ge;
        }
      }, {
        key: "NAME",
        get: function get() {
          return ae;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return le;
        }
      }, {
        key: "Event",
        get: function get() {
          return ve;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return he;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return de;
        }
      }]), i;
    }(), oe.fn[ae] = Se._jQueryInterface, oe.fn[ae].Constructor = Se, oe.fn[ae].noConflict = function () {
      return oe.fn[ae] = ce, Se._jQueryInterface;
    }, Se),
    On = (Ne = "popover", ke = "." + (Oe = "bs.popover"), Pe = (we = e).fn[Ne], Le = "bs-popover", je = new RegExp("(^|\\s)" + Le + "\\S+", "g"), Re = h({}, Nn.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), He = h({}, Nn.DefaultType, {
      content: "(string|element|function)"
    }), We = "fade", xe = ".popover-header", Ue = ".popover-body", Ke = {
      HIDE: "hide" + ke,
      HIDDEN: "hidden" + ke,
      SHOW: (Me = "show") + ke,
      SHOWN: "shown" + ke,
      INSERTED: "inserted" + ke,
      CLICK: "click" + ke,
      FOCUSIN: "focusin" + ke,
      FOCUSOUT: "focusout" + ke,
      MOUSEENTER: "mouseenter" + ke,
      MOUSELEAVE: "mouseleave" + ke
    }, Fe = function (t) {
      var e, n;
      function i() {
        return t.apply(this, arguments) || this;
      }
      n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
      var r = i.prototype;
      return r.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, r.addAttachmentClass = function (t) {
        we(this.getTipElement()).addClass(Le + "-" + t);
      }, r.getTipElement = function () {
        return this.tip = this.tip || we(this.config.template)[0], this.tip;
      }, r.setContent = function () {
        var t = we(this.getTipElement());
        this.setElementContent(t.find(xe), this.getTitle());
        var e = this._getContent();
        "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ue), e), t.removeClass(We + " " + Me);
      }, r._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content;
      }, r._cleanTipClass = function () {
        var t = we(this.getTipElement()),
          e = t.attr("class").match(je);
        null !== e && 0 < e.length && t.removeClass(e.join(""));
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var t = we(this).data(Oe),
            e = "object" == _typeof(n) ? n : null;
          if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), we(this).data(Oe, t)), "string" == typeof n)) {
            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
            t[n]();
          }
        });
      }, o(i, null, [{
        key: "VERSION",
        get: function get() {
          return "4.1.1";
        }
      }, {
        key: "Default",
        get: function get() {
          return Re;
        }
      }, {
        key: "NAME",
        get: function get() {
          return Ne;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return Oe;
        }
      }, {
        key: "Event",
        get: function get() {
          return Ke;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return ke;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return He;
        }
      }]), i;
    }(Nn), we.fn[Ne] = Fe._jQueryInterface, we.fn[Ne].Constructor = Fe, we.fn[Ne].noConflict = function () {
      return we.fn[Ne] = Pe, Fe._jQueryInterface;
    }, Fe),
    kn = (Qe = "scrollspy", Ye = "." + (Be = "bs.scrollspy"), Ge = (Ve = e).fn[Qe], qe = {
      offset: 10,
      method: "auto",
      target: ""
    }, ze = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    }, Xe = {
      ACTIVATE: "activate" + Ye,
      SCROLL: "scroll" + Ye,
      LOAD_DATA_API: "load" + Ye + ".data-api"
    }, Je = "dropdown-item", Ze = "active", $e = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: ".active",
      NAV_LIST_GROUP: ".nav, .list-group",
      NAV_LINKS: ".nav-link",
      NAV_ITEMS: ".nav-item",
      LIST_ITEMS: ".list-group-item",
      DROPDOWN: ".dropdown",
      DROPDOWN_ITEMS: ".dropdown-item",
      DROPDOWN_TOGGLE: ".dropdown-toggle"
    }, tn = "offset", en = "position", nn = function () {
      function n(t, e) {
        var n = this;
        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + $e.NAV_LINKS + "," + this._config.target + " " + $e.LIST_ITEMS + "," + this._config.target + " " + $e.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Ve(this._scrollElement).on(Xe.SCROLL, function (t) {
          return n._process(t);
        }), this.refresh(), this._process();
      }
      var t = n.prototype;
      return t.refresh = function () {
        var e = this,
          t = this._scrollElement === this._scrollElement.window ? tn : en,
          r = "auto" === this._config.method ? t : this._config.method,
          s = r === en ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Ve.makeArray(Ve(this._selector)).map(function (t) {
          var e,
            n = Cn.getSelectorFromElement(t);
          if (n && (e = Ve(n)[0]), e) {
            var i = e.getBoundingClientRect();
            if (i.width || i.height) return [Ve(e)[r]().top + s, n];
          }
          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          e._offsets.push(t[0]), e._targets.push(t[1]);
        });
      }, t.dispose = function () {
        Ve.removeData(this._element, Be), Ve(this._scrollElement).off(Ye), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, t._getConfig = function (t) {
        if ("string" != typeof (t = h({}, qe, "object" == _typeof(t) && t ? t : {})).target) {
          var e = Ve(t.target).attr("id");
          e || (e = Cn.getUID(Qe), Ve(t.target).attr("id", e)), t.target = "#" + e;
        }
        return Cn.typeCheckConfig(Qe, t, ze), t;
      }, t._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, t._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, t._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, t._process = function () {
        var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();
        if (this._scrollHeight !== e && this.refresh(), n <= t) {
          var i = this._targets[this._targets.length - 1];
          this._activeTarget !== i && this._activate(i);
        } else {
          if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
          for (var r = this._offsets.length; r--;) {
            this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
          }
        }
      }, t._activate = function (e) {
        this._activeTarget = e, this._clear();
        var t = this._selector.split(",");
        t = t.map(function (t) {
          return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
        });
        var n = Ve(t.join(","));
        n.hasClass(Je) ? (n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze), n.addClass(Ze)) : (n.addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS + ", " + $e.LIST_ITEMS).addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)), Ve(this._scrollElement).trigger(Xe.ACTIVATE, {
          relatedTarget: e
        });
      }, t._clear = function () {
        Ve(this._selector).filter($e.ACTIVE).removeClass(Ze);
      }, n._jQueryInterface = function (e) {
        return this.each(function () {
          var t = Ve(this).data(Be);
          if (t || (t = new n(this, "object" == _typeof(e) && e), Ve(this).data(Be, t)), "string" == typeof e) {
            if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
            t[e]();
          }
        });
      }, o(n, null, [{
        key: "VERSION",
        get: function get() {
          return "4.1.1";
        }
      }, {
        key: "Default",
        get: function get() {
          return qe;
        }
      }]), n;
    }(), Ve(window).on(Xe.LOAD_DATA_API, function () {
      for (var t = Ve.makeArray(Ve($e.DATA_SPY)), e = t.length; e--;) {
        var n = Ve(t[e]);
        nn._jQueryInterface.call(n, n.data());
      }
    }), Ve.fn[Qe] = nn._jQueryInterface, Ve.fn[Qe].Constructor = nn, Ve.fn[Qe].noConflict = function () {
      return Ve.fn[Qe] = Ge, nn._jQueryInterface;
    }, nn),
    Pn = (on = "." + (sn = "bs.tab"), an = (rn = e).fn.tab, ln = {
      HIDE: "hide" + on,
      HIDDEN: "hidden" + on,
      SHOW: "show" + on,
      SHOWN: "shown" + on,
      CLICK_DATA_API: "click" + on + ".data-api"
    }, hn = "dropdown-menu", cn = "active", un = "disabled", fn = "fade", dn = "show", _n = ".dropdown", gn = ".nav, .list-group", mn = ".active", pn = "> li > .active", vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', En = ".dropdown-toggle", yn = "> .dropdown-menu .active", Tn = function () {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return t.show = function () {
        var n = this;
        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && rn(this._element).hasClass(cn) || rn(this._element).hasClass(un))) {
          var t,
            i,
            e = rn(this._element).closest(gn)[0],
            r = Cn.getSelectorFromElement(this._element);
          if (e) {
            var s = "UL" === e.nodeName ? pn : mn;
            i = (i = rn.makeArray(rn(e).find(s)))[i.length - 1];
          }
          var o = rn.Event(ln.HIDE, {
              relatedTarget: this._element
            }),
            a = rn.Event(ln.SHOW, {
              relatedTarget: i
            });
          if (i && rn(i).trigger(o), rn(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
            r && (t = rn(r)[0]), this._activate(this._element, e);
            var l = function l() {
              var t = rn.Event(ln.HIDDEN, {
                  relatedTarget: n._element
                }),
                e = rn.Event(ln.SHOWN, {
                  relatedTarget: i
                });
              rn(i).trigger(t), rn(n._element).trigger(e);
            };
            t ? this._activate(t, t.parentNode, l) : l();
          }
        }
      }, t.dispose = function () {
        rn.removeData(this._element, sn), this._element = null;
      }, t._activate = function (t, e, n) {
        var i = this,
          r = ("UL" === e.nodeName ? rn(e).find(pn) : rn(e).children(mn))[0],
          s = n && r && rn(r).hasClass(fn),
          o = function o() {
            return i._transitionComplete(t, r, n);
          };
        if (r && s) {
          var a = Cn.getTransitionDurationFromElement(r);
          rn(r).one(Cn.TRANSITION_END, o).emulateTransitionEnd(a);
        } else o();
      }, t._transitionComplete = function (t, e, n) {
        if (e) {
          rn(e).removeClass(dn + " " + cn);
          var i = rn(e.parentNode).find(yn)[0];
          i && rn(i).removeClass(cn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
        }
        if (rn(t).addClass(cn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Cn.reflow(t), rn(t).addClass(dn), t.parentNode && rn(t.parentNode).hasClass(hn)) {
          var r = rn(t).closest(_n)[0];
          r && rn(r).find(En).addClass(cn), t.setAttribute("aria-expanded", !0);
        }
        n && n();
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var t = rn(this),
            e = t.data(sn);
          if (e || (e = new i(this), t.data(sn, e)), "string" == typeof n) {
            if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
            e[n]();
          }
        });
      }, o(i, null, [{
        key: "VERSION",
        get: function get() {
          return "4.1.1";
        }
      }]), i;
    }(), rn(document).on(ln.CLICK_DATA_API, vn, function (t) {
      t.preventDefault(), Tn._jQueryInterface.call(rn(this), "show");
    }), rn.fn.tab = Tn._jQueryInterface, rn.fn.tab.Constructor = Tn, rn.fn.tab.noConflict = function () {
      return rn.fn.tab = an, Tn._jQueryInterface;
    }, Tn);
  !function (t) {
    if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(e), t.Util = Cn, t.Alert = In, t.Button = An, t.Carousel = Dn, t.Collapse = bn, t.Dropdown = Sn, t.Modal = wn, t.Popover = On, t.Scrollspy = kn, t.Tab = Pn, t.Tooltip = Nn, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ "./assets/js/ezadmin/lib/bootstrap-table/jquery.datetimepicker.js":
/*!************************************************************************!*\
  !*** ./assets/js/ezadmin/lib/bootstrap-table/jquery.datetimepicker.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * @preserve jQuery DateTimePicker
 * @homepage http://xdsoft.net/jqplugins/datetimepicker/
 * @author Chupurnov Valeriy (<chupurnov@gmail.com>)
 */

/**
 * @param {jQuery} $
 */
var datetimepickerFactory = function datetimepickerFactory($) {
  'use strict';

  var default_options = {
    i18n: {
      ar: {
        // Arabic
        months: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
        dayOfWeekShort: ["ن", "ث", "ع", "خ", "ج", "س", "ح"],
        dayOfWeek: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"]
      },
      ro: {
        // Romanian
        months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
        dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
        dayOfWeek: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"]
      },
      id: {
        // Indonesian
        months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
        dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
      },
      is: {
        // Icelandic
        months: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
        dayOfWeekShort: ["Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau"],
        dayOfWeek: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"]
      },
      bg: {
        // Bulgarian
        months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
        dayOfWeekShort: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        dayOfWeek: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"]
      },
      fa: {
        // Persian/Farsi
        months: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        dayOfWeekShort: ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
        dayOfWeek: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یک‌شنبه"]
      },
      ru: {
        // Russian
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayOfWeekShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        dayOfWeek: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
      },
      uk: {
        // Ukrainian
        months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
        dayOfWeekShort: ["Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"],
        dayOfWeek: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
      },
      en: {
        // English
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      },
      el: {
        // Ελληνικά
        months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
        dayOfWeekShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
        dayOfWeek: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
      },
      de: {
        // German
        months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
      },
      nl: {
        // Dutch
        months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
        dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
        dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
      },
      tr: {
        // Turkish
        months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        dayOfWeekShort: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"],
        dayOfWeek: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
      },
      fr: {
        //French
        months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
        dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
      },
      es: {
        // Spanish
        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        dayOfWeekShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
        dayOfWeek: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
      },
      th: {
        // Thai
        months: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
        dayOfWeekShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
        dayOfWeek: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"]
      },
      pl: {
        // Polish
        months: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
        dayOfWeekShort: ["nd", "pn", "wt", "śr", "cz", "pt", "sb"],
        dayOfWeek: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
      },
      pt: {
        // Portuguese
        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
      },
      ch: {
        // Simplified Chinese
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"]
      },
      se: {
        // Swedish
        months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
        dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]
      },
      km: {
        // Khmer (ភាសាខ្មែរ)
        months: ["មករា​", "កុម្ភៈ", "មិនា​", "មេសា​", "ឧសភា​", "មិថុនា​", "កក្កដា​", "សីហា​", "កញ្ញា​", "តុលា​", "វិច្ឆិកា", "ធ្នូ​"],
        dayOfWeekShort: ["អាទិ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហ​​", "សុក្រ​", "សៅរ៍"],
        dayOfWeek: ["អាទិត្យ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហស្បតិ៍​", "សុក្រ​", "សៅរ៍"]
      },
      kr: {
        // Korean
        months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
        dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
      },
      it: {
        // Italian
        months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
        dayOfWeek: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
      },
      da: {
        // Dansk
        months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
        dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
        dayOfWeek: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
      },
      no: {
        // Norwegian
        months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
        dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
        dayOfWeek: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']
      },
      ja: {
        // Japanese
        months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        dayOfWeekShort: ["日", "月", "火", "水", "木", "金", "土"],
        dayOfWeek: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"]
      },
      vi: {
        // Vietnamese
        months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        dayOfWeek: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"]
      },
      sl: {
        // Slovenščina
        months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
        dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
        dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"]
      },
      cs: {
        // Čeština
        months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
        dayOfWeekShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]
      },
      hu: {
        // Hungarian
        months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
        dayOfWeekShort: ["Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"],
        dayOfWeek: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"]
      },
      az: {
        //Azerbaijanian (Azeri)
        months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
        dayOfWeekShort: ["B", "Be", "Ça", "Ç", "Ca", "C", "Ş"],
        dayOfWeek: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"]
      },
      bs: {
        //Bosanski
        months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
        dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
        dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
      },
      ca: {
        //Català
        months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
        dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
        dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
      },
      'en-GB': {
        //English (British)
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      },
      et: {
        //"Eesti"
        months: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
        dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"],
        dayOfWeek: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
      },
      eu: {
        //Euskara
        months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
        dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."],
        dayOfWeek: ['Igandea', 'Astelehena', 'Asteartea', 'Asteazkena', 'Osteguna', 'Ostirala', 'Larunbata']
      },
      fi: {
        //Finnish (Suomi)
        months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
        dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
        dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
      },
      gl: {
        //Galego
        months: ["Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
        dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"],
        dayOfWeek: ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"]
      },
      hr: {
        //Hrvatski
        months: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
        dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
        dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
      },
      ko: {
        //Korean (한국어)
        months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
        dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
      },
      lt: {
        //Lithuanian (lietuvių)
        months: ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"],
        dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"],
        dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"]
      },
      lv: {
        //Latvian (Latviešu)
        months: ["Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
        dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"],
        dayOfWeek: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
      },
      mk: {
        //Macedonian (Македонски)
        months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
        dayOfWeekShort: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
        dayOfWeek: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"]
      },
      mn: {
        //Mongolian (Монгол)
        months: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"],
        dayOfWeekShort: ["Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"],
        dayOfWeek: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"]
      },
      'pt-BR': {
        //Português(Brasil)
        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
      },
      sk: {
        //Slovenčina
        months: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
        dayOfWeekShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
        dayOfWeek: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"]
      },
      sq: {
        //Albanian (Shqip)
        months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"],
        dayOfWeekShort: ["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Shtu"],
        dayOfWeek: ["E Diel", "E Hënë", "E Martē", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"]
      },
      'sr-YU': {
        //Serbian (Srpski)
        months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
        dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"],
        dayOfWeek: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"]
      },
      sr: {
        //Serbian Cyrillic (Српски)
        months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
        dayOfWeekShort: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
        dayOfWeek: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"]
      },
      sv: {
        //Svenska
        months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
        dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
        dayOfWeek: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]
      },
      'zh-TW': {
        //Traditional Chinese (繁體中文)
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
        dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
      },
      zh: {
        //Simplified Chinese (简体中文)
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
        dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
      },
      ug: {
        // Uyghur(ئۇيغۇرچە)
        months: ["1-ئاي", "2-ئاي", "3-ئاي", "4-ئاي", "5-ئاي", "6-ئاي", "7-ئاي", "8-ئاي", "9-ئاي", "10-ئاي", "11-ئاي", "12-ئاي"],
        dayOfWeek: ["يەكشەنبە", "دۈشەنبە", "سەيشەنبە", "چارشەنبە", "پەيشەنبە", "جۈمە", "شەنبە"]
      },
      he: {
        //Hebrew (עברית)
        months: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
        dayOfWeekShort: ['א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'],
        dayOfWeek: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"]
      },
      hy: {
        // Armenian
        months: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"],
        dayOfWeekShort: ["Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"],
        dayOfWeek: ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"]
      },
      kg: {
        // Kyrgyz
        months: ['Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'],
        dayOfWeekShort: ["Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"],
        dayOfWeek: ["Жекшемб", "Дүйшөмб", "Шейшемб", "Шаршемб", "Бейшемби", "Жума", "Ишенб"]
      },
      rm: {
        // Romansh
        months: ["Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"],
        dayOfWeekShort: ["Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"],
        dayOfWeek: ["Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"]
      },
      ka: {
        // Georgian
        months: ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'],
        dayOfWeekShort: ["კვ", "ორშ", "სამშ", "ოთხ", "ხუთ", "პარ", "შაბ"],
        dayOfWeek: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]
      }
    },
    ownerDocument: document,
    contentWindow: window,
    value: '',
    rtl: false,
    format: 'Y/m/d H:i',
    formatTime: 'H:i',
    formatDate: 'Y/m/d',
    startDate: false,
    // new Date(), '1986/12/08', '-1970/01/05','-1970/01/05',
    step: 60,
    monthChangeSpinner: true,
    closeOnDateSelect: false,
    closeOnTimeSelect: true,
    closeOnWithoutClick: true,
    closeOnInputClick: true,
    openOnFocus: true,
    timepicker: true,
    datepicker: true,
    weeks: false,
    defaultTime: false,
    // use formatTime format (ex. '10:00' for formatTime:	'H:i')
    defaultDate: false,
    // use formatDate format (ex new Date() or '1986/12/08' or '-1970/01/05' or '-1970/01/05')

    minDate: false,
    maxDate: false,
    minTime: false,
    maxTime: false,
    minDateTime: false,
    maxDateTime: false,
    allowTimes: [],
    opened: false,
    initTime: true,
    inline: false,
    theme: '',
    touchMovedThreshold: 5,
    onSelectDate: function onSelectDate() {},
    onSelectTime: function onSelectTime() {},
    onChangeMonth: function onChangeMonth() {},
    onGetWeekOfYear: function onGetWeekOfYear() {},
    onChangeYear: function onChangeYear() {},
    onChangeDateTime: function onChangeDateTime() {},
    onShow: function onShow() {},
    onClose: function onClose() {},
    onGenerate: function onGenerate() {},
    withoutCopyright: true,
    inverseButton: false,
    hours12: false,
    next: 'xdsoft_next',
    prev: 'xdsoft_prev',
    dayOfWeekStart: 0,
    parentID: 'body',
    timeHeightInTimePicker: 25,
    timepickerScrollbar: true,
    todayButton: true,
    prevButton: true,
    nextButton: true,
    defaultSelect: true,
    scrollMonth: true,
    scrollTime: true,
    scrollInput: true,
    lazyInit: false,
    mask: false,
    validateOnBlur: true,
    allowBlank: true,
    yearStart: 1950,
    yearEnd: 2050,
    monthStart: 0,
    monthEnd: 11,
    style: '',
    id: '',
    fixed: false,
    roundTime: 'round',
    // ceil, floor
    className: '',
    weekends: [],
    highlightedDates: [],
    highlightedPeriods: [],
    allowDates: [],
    allowDateRe: null,
    disabledDates: [],
    disabledWeekDays: [],
    yearOffset: 0,
    beforeShowDay: null,
    enterLikeTab: true,
    showApplyButton: false
  };
  var dateHelper = null,
    defaultDateHelper = null,
    globalLocaleDefault = 'en',
    globalLocale = 'en';
  var dateFormatterOptionsDefault = {
    meridiem: ['AM', 'PM']
  };
  var initDateFormatter = function initDateFormatter() {
    var locale = default_options.i18n[globalLocale],
      opts = {
        days: locale.dayOfWeek,
        daysShort: locale.dayOfWeekShort,
        months: locale.months,
        monthsShort: $.map(locale.months, function (n) {
          return n.substring(0, 3);
        })
      };
    if (typeof DateFormatter === 'function') {
      dateHelper = defaultDateHelper = new DateFormatter({
        dateSettings: $.extend({}, dateFormatterOptionsDefault, opts)
      });
    }
  };
  var dateFormatters = {
    moment: {
      default_options: {
        format: 'YYYY/MM/DD HH:mm',
        formatDate: 'YYYY/MM/DD',
        formatTime: 'HH:mm'
      },
      formatter: {
        parseDate: function parseDate(date, format) {
          if (isFormatStandard(format)) {
            return defaultDateHelper.parseDate(date, format);
          }
          var d = moment(date, format);
          return d.isValid() ? d.toDate() : false;
        },
        formatDate: function formatDate(date, format) {
          if (isFormatStandard(format)) {
            return defaultDateHelper.formatDate(date, format);
          }
          return moment(date).format(format);
        },
        formatMask: function formatMask(format) {
          return format.replace(/Y{4}/g, '9999').replace(/Y{2}/g, '99').replace(/M{2}/g, '19').replace(/D{2}/g, '39').replace(/H{2}/g, '29').replace(/m{2}/g, '59').replace(/s{2}/g, '59');
        }
      }
    }
  };

  // for locale settings
  $.datetimepicker = {
    setLocale: function setLocale(locale) {
      var newLocale = default_options.i18n[locale] ? locale : globalLocaleDefault;
      if (globalLocale !== newLocale) {
        globalLocale = newLocale;
        // reinit date formatter
        initDateFormatter();
      }
    },
    setDateFormatter: function setDateFormatter(dateFormatter) {
      if (typeof dateFormatter === 'string' && dateFormatters.hasOwnProperty(dateFormatter)) {
        var df = dateFormatters[dateFormatter];
        $.extend(default_options, df.default_options);
        dateHelper = df.formatter;
      } else {
        dateHelper = dateFormatter;
      }
    }
  };
  var standardFormats = {
    RFC_2822: 'D, d M Y H:i:s O',
    ATOM: 'Y-m-d\TH:i:sP',
    ISO_8601: 'Y-m-d\TH:i:sO',
    RFC_822: 'D, d M y H:i:s O',
    RFC_850: 'l, d-M-y H:i:s T',
    RFC_1036: 'D, d M y H:i:s O',
    RFC_1123: 'D, d M Y H:i:s O',
    RSS: 'D, d M Y H:i:s O',
    W3C: 'Y-m-d\TH:i:sP'
  };
  var isFormatStandard = function isFormatStandard(format) {
    return Object.values(standardFormats).indexOf(format) === -1 ? false : true;
  };
  $.extend($.datetimepicker, standardFormats);

  // first init date formatter
  initDateFormatter();

  // fix for ie8
  if (!window.getComputedStyle) {
    window.getComputedStyle = function (el) {
      this.el = el;
      this.getPropertyValue = function (prop) {
        var re = /(-([a-z]))/g;
        if (prop === 'float') {
          prop = 'styleFloat';
        }
        if (re.test(prop)) {
          prop = prop.replace(re, function (a, b, c) {
            return c.toUpperCase();
          });
        }
        return el.currentStyle[prop] || null;
      };
      return this;
    };
  }
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (obj, start) {
      var i, j;
      for (i = start || 0, j = this.length; i < j; i += 1) {
        if (this[i] === obj) {
          return i;
        }
      }
      return -1;
    };
  }
  Date.prototype.countDaysInMonth = function () {
    return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
  };
  $.fn.xdsoftScroller = function (options, percent) {
    return this.each(function () {
      var timeboxparent = $(this),
        pointerEventToXY = function pointerEventToXY(e) {
          var out = {
              x: 0,
              y: 0
            },
            touch;
          if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
            touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            out.x = touch.clientX;
            out.y = touch.clientY;
          } else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover' || e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
            out.x = e.clientX;
            out.y = e.clientY;
          }
          return out;
        },
        timebox,
        parentHeight,
        height,
        scrollbar,
        scroller,
        maximumOffset = 100,
        start = false,
        startY = 0,
        startTop = 0,
        h1 = 0,
        touchStart = false,
        startTopScroll = 0,
        calcOffset = function calcOffset() {};
      if (percent === 'hide') {
        timeboxparent.find('.xdsoft_scrollbar').hide();
        return;
      }
      if (!$(this).hasClass('xdsoft_scroller_box')) {
        timebox = timeboxparent.children().eq(0);
        parentHeight = timeboxparent[0].clientHeight;
        height = timebox[0].offsetHeight;
        scrollbar = $('<div class="xdsoft_scrollbar"></div>');
        scroller = $('<div class="xdsoft_scroller"></div>');
        scrollbar.append(scroller);
        timeboxparent.addClass('xdsoft_scroller_box').append(scrollbar);
        calcOffset = function calcOffset(event) {
          var offset = pointerEventToXY(event).y - startY + startTopScroll;
          if (offset < 0) {
            offset = 0;
          }
          if (offset + scroller[0].offsetHeight > h1) {
            offset = h1 - scroller[0].offsetHeight;
          }
          timeboxparent.trigger('scroll_element.xdsoft_scroller', [maximumOffset ? offset / maximumOffset : 0]);
        };
        scroller.on('touchstart.xdsoft_scroller mousedown.xdsoft_scroller', function (event) {
          if (!parentHeight) {
            timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
          }
          startY = pointerEventToXY(event).y;
          startTopScroll = parseInt(scroller.css('margin-top'), 10);
          h1 = scrollbar[0].offsetHeight;
          if (event.type === 'mousedown' || event.type === 'touchstart') {
            if (options.ownerDocument) {
              $(options.ownerDocument.body).addClass('xdsoft_noselect');
            }
            $([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft_scroller', function arguments_callee() {
              $([options.ownerDocument.body, options.contentWindow]).off('touchend mouseup.xdsoft_scroller', arguments_callee).off('mousemove.xdsoft_scroller', calcOffset).removeClass('xdsoft_noselect');
            });
            $(options.ownerDocument.body).on('mousemove.xdsoft_scroller', calcOffset);
          } else {
            touchStart = true;
            event.stopPropagation();
            event.preventDefault();
          }
        }).on('touchmove', function (event) {
          if (touchStart) {
            event.preventDefault();
            calcOffset(event);
          }
        }).on('touchend touchcancel', function () {
          touchStart = false;
          startTopScroll = 0;
        });
        timeboxparent.on('scroll_element.xdsoft_scroller', function (event, percentage) {
          if (!parentHeight) {
            timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percentage, true]);
          }
          percentage = percentage > 1 ? 1 : percentage < 0 || isNaN(percentage) ? 0 : percentage;
          scroller.css('margin-top', maximumOffset * percentage);
          setTimeout(function () {
            timebox.css('marginTop', -parseInt((timebox[0].offsetHeight - parentHeight) * percentage, 10));
          }, 10);
        }).on('resize_scroll.xdsoft_scroller', function (event, percentage, noTriggerScroll) {
          var percent, sh;
          parentHeight = timeboxparent[0].clientHeight;
          height = timebox[0].offsetHeight;
          percent = parentHeight / height;
          sh = percent * scrollbar[0].offsetHeight;
          if (percent > 1) {
            scroller.hide();
          } else {
            scroller.show();
            scroller.css('height', parseInt(sh > 10 ? sh : 10, 10));
            maximumOffset = scrollbar[0].offsetHeight - scroller[0].offsetHeight;
            if (noTriggerScroll !== true) {
              timeboxparent.trigger('scroll_element.xdsoft_scroller', [percentage || Math.abs(parseInt(timebox.css('marginTop'), 10)) / (height - parentHeight)]);
            }
          }
        });
        timeboxparent.on('mousewheel', function (event) {
          var top = Math.abs(parseInt(timebox.css('marginTop'), 10));
          top = top - event.deltaY * 20;
          if (top < 0) {
            top = 0;
          }
          timeboxparent.trigger('scroll_element.xdsoft_scroller', [top / (height - parentHeight)]);
          event.stopPropagation();
          return false;
        });
        timeboxparent.on('touchstart', function (event) {
          start = pointerEventToXY(event);
          startTop = Math.abs(parseInt(timebox.css('marginTop'), 10));
        });
        timeboxparent.on('touchmove', function (event) {
          if (start) {
            event.preventDefault();
            var coord = pointerEventToXY(event);
            timeboxparent.trigger('scroll_element.xdsoft_scroller', [(startTop - (coord.y - start.y)) / (height - parentHeight)]);
          }
        });
        timeboxparent.on('touchend touchcancel', function () {
          start = false;
          startTop = 0;
        });
      }
      timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
    });
  };
  $.fn.datetimepicker = function (opt, opt2) {
    var result = this,
      KEY0 = 48,
      KEY9 = 57,
      _KEY0 = 96,
      _KEY9 = 105,
      CTRLKEY = 17,
      DEL = 46,
      ENTER = 13,
      ESC = 27,
      BACKSPACE = 8,
      ARROWLEFT = 37,
      ARROWUP = 38,
      ARROWRIGHT = 39,
      ARROWDOWN = 40,
      TAB = 9,
      F5 = 116,
      AKEY = 65,
      CKEY = 67,
      VKEY = 86,
      ZKEY = 90,
      YKEY = 89,
      ctrlDown = false,
      options = $.isPlainObject(opt) || !opt ? $.extend(true, {}, default_options, opt) : $.extend(true, {}, default_options),
      lazyInitTimer = 0,
      createDateTimePicker,
      destroyDateTimePicker,
      lazyInit = function lazyInit(input) {
        input.on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function initOnActionCallback() {
          if (input.is(':disabled') || input.data('xdsoft_datetimepicker')) {
            return;
          }
          clearTimeout(lazyInitTimer);
          lazyInitTimer = setTimeout(function () {
            if (!input.data('xdsoft_datetimepicker')) {
              createDateTimePicker(input);
            }
            input.off('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', initOnActionCallback).trigger('open.xdsoft');
          }, 100);
        });
      };
    createDateTimePicker = function createDateTimePicker(input) {
      var datetimepicker = $('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
        xdsoft_copyright = $('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
        datepicker = $('<div class="xdsoft_datepicker active"></div>'),
        month_picker = $('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button>' + '<div class="xdsoft_label xdsoft_month"><span></span><i></i></div>' + '<div class="xdsoft_label xdsoft_year"><span></span><i></i></div>' + '<button type="button" class="xdsoft_next"></button></div>'),
        calendar = $('<div class="xdsoft_calendar"></div>'),
        timepicker = $('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
        timeboxparent = timepicker.find('.xdsoft_time_box').eq(0),
        timebox = $('<div class="xdsoft_time_variant"></div>'),
        applyButton = $('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),
        monthselect = $('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
        yearselect = $('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
        triggerAfterOpen = false,
        XDSoft_datetime,
        xchangeTimer,
        timerclick,
        current_time_index,
        setPos,
        timer = 0,
        _xdsoft_datetime,
        forEachAncestorOf;
      if (options.id) {
        datetimepicker.attr('id', options.id);
      }
      if (options.style) {
        datetimepicker.attr('style', options.style);
      }
      if (options.weeks) {
        datetimepicker.addClass('xdsoft_showweeks');
      }
      if (options.rtl) {
        datetimepicker.addClass('xdsoft_rtl');
      }
      datetimepicker.addClass('xdsoft_' + options.theme);
      datetimepicker.addClass(options.className);
      month_picker.find('.xdsoft_month span').after(monthselect);
      month_picker.find('.xdsoft_year span').after(yearselect);
      month_picker.find('.xdsoft_month,.xdsoft_year').on('touchstart mousedown.xdsoft', function (event) {
        var select = $(this).find('.xdsoft_select').eq(0),
          val = 0,
          top = 0,
          visible = select.is(':visible'),
          items,
          i;
        month_picker.find('.xdsoft_select').hide();
        if (_xdsoft_datetime.currentTime) {
          val = _xdsoft_datetime.currentTime[$(this).hasClass('xdsoft_month') ? 'getMonth' : 'getFullYear']();
        }
        select[visible ? 'hide' : 'show']();
        for (items = select.find('div.xdsoft_option'), i = 0; i < items.length; i += 1) {
          if (items.eq(i).data('value') === val) {
            break;
          } else {
            top += items[0].offsetHeight;
          }
        }
        select.xdsoftScroller(options, top / (select.children()[0].offsetHeight - select[0].clientHeight));
        event.stopPropagation();
        return false;
      });
      var handleTouchMoved = function handleTouchMoved(event) {
        var evt = event.originalEvent;
        var touchPosition = evt.touches ? evt.touches[0] : evt;
        this.touchStartPosition = this.touchStartPosition || touchPosition;
        var xMovement = Math.abs(this.touchStartPosition.clientX - touchPosition.clientX);
        var yMovement = Math.abs(this.touchStartPosition.clientY - touchPosition.clientY);
        var distance = Math.sqrt(xMovement * xMovement + yMovement * yMovement);
        if (distance > options.touchMovedThreshold) {
          this.touchMoved = true;
        }
      };
      month_picker.find('.xdsoft_select').xdsoftScroller(options).on('touchstart mousedown.xdsoft', function (event) {
        var evt = event.originalEvent;
        this.touchMoved = false;
        this.touchStartPosition = evt.touches ? evt.touches[0] : evt;
        event.stopPropagation();
        event.preventDefault();
      }).on('touchmove', '.xdsoft_option', handleTouchMoved).on('touchend mousedown.xdsoft', '.xdsoft_option', function () {
        if (!this.touchMoved) {
          if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
            _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
          }
          var year = _xdsoft_datetime.currentTime.getFullYear();
          if (_xdsoft_datetime && _xdsoft_datetime.currentTime) {
            _xdsoft_datetime.currentTime[$(this).parent().parent().hasClass('xdsoft_monthselect') ? 'setMonth' : 'setFullYear']($(this).data('value'));
          }
          $(this).parent().parent().hide();
          datetimepicker.trigger('xchange.xdsoft');
          if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
            options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
          }
          if (year !== _xdsoft_datetime.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
            options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
          }
        }
      });
      datetimepicker.getValue = function () {
        return _xdsoft_datetime.getCurrentTime();
      };
      datetimepicker.setOptions = function (_options) {
        var highlightedDates = {};
        options = $.extend(true, {}, options, _options);
        if (_options.allowTimes && $.isArray(_options.allowTimes) && _options.allowTimes.length) {
          options.allowTimes = $.extend(true, [], _options.allowTimes);
        }
        if (_options.weekends && $.isArray(_options.weekends) && _options.weekends.length) {
          options.weekends = $.extend(true, [], _options.weekends);
        }
        if (_options.allowDates && $.isArray(_options.allowDates) && _options.allowDates.length) {
          options.allowDates = $.extend(true, [], _options.allowDates);
        }
        if (_options.allowDateRe && Object.prototype.toString.call(_options.allowDateRe) === "[object String]") {
          options.allowDateRe = new RegExp(_options.allowDateRe);
        }
        if (_options.highlightedDates && $.isArray(_options.highlightedDates) && _options.highlightedDates.length) {
          $.each(_options.highlightedDates, function (index, value) {
            var splitData = $.map(value.split(','), $.trim),
              exDesc,
              hDate = new HighlightedDate(dateHelper.parseDate(splitData[0], options.formatDate), splitData[1], splitData[2]),
              // date, desc, style
              keyDate = dateHelper.formatDate(hDate.date, options.formatDate);
            if (highlightedDates[keyDate] !== undefined) {
              exDesc = highlightedDates[keyDate].desc;
              if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
                highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
              }
            } else {
              highlightedDates[keyDate] = hDate;
            }
          });
          options.highlightedDates = $.extend(true, [], highlightedDates);
        }
        if (_options.highlightedPeriods && $.isArray(_options.highlightedPeriods) && _options.highlightedPeriods.length) {
          highlightedDates = $.extend(true, [], options.highlightedDates);
          $.each(_options.highlightedPeriods, function (index, value) {
            var dateTest,
              // start date
              dateEnd, desc, hDate, keyDate, exDesc, style;
            if ($.isArray(value)) {
              dateTest = value[0];
              dateEnd = value[1];
              desc = value[2];
              style = value[3];
            } else {
              var splitData = $.map(value.split(','), $.trim);
              dateTest = dateHelper.parseDate(splitData[0], options.formatDate);
              dateEnd = dateHelper.parseDate(splitData[1], options.formatDate);
              desc = splitData[2];
              style = splitData[3];
            }
            while (dateTest <= dateEnd) {
              hDate = new HighlightedDate(dateTest, desc, style);
              keyDate = dateHelper.formatDate(dateTest, options.formatDate);
              dateTest.setDate(dateTest.getDate() + 1);
              if (highlightedDates[keyDate] !== undefined) {
                exDesc = highlightedDates[keyDate].desc;
                if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
                  highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
                }
              } else {
                highlightedDates[keyDate] = hDate;
              }
            }
          });
          options.highlightedDates = $.extend(true, [], highlightedDates);
        }
        if (_options.disabledDates && $.isArray(_options.disabledDates) && _options.disabledDates.length) {
          options.disabledDates = $.extend(true, [], _options.disabledDates);
        }
        if (_options.disabledWeekDays && $.isArray(_options.disabledWeekDays) && _options.disabledWeekDays.length) {
          options.disabledWeekDays = $.extend(true, [], _options.disabledWeekDays);
        }
        if ((options.open || options.opened) && !options.inline) {
          input.trigger('open.xdsoft');
        }
        if (options.inline) {
          triggerAfterOpen = true;
          datetimepicker.addClass('xdsoft_inline');
          input.after(datetimepicker).hide();
        }
        if (options.inverseButton) {
          options.next = 'xdsoft_prev';
          options.prev = 'xdsoft_next';
        }
        if (options.datepicker) {
          datepicker.addClass('active');
        } else {
          datepicker.removeClass('active');
        }
        if (options.timepicker) {
          timepicker.addClass('active');
        } else {
          timepicker.removeClass('active');
        }
        if (options.value) {
          _xdsoft_datetime.setCurrentTime(options.value);
          if (input && input.val) {
            input.val(_xdsoft_datetime.str);
          }
        }
        if (isNaN(options.dayOfWeekStart)) {
          options.dayOfWeekStart = 0;
        } else {
          options.dayOfWeekStart = parseInt(options.dayOfWeekStart, 10) % 7;
        }
        if (!options.timepickerScrollbar) {
          timeboxparent.xdsoftScroller(options, 'hide');
        }
        if (options.minDate && /^[\+\-](.*)$/.test(options.minDate)) {
          options.minDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.minDate), options.formatDate);
        }
        if (options.maxDate && /^[\+\-](.*)$/.test(options.maxDate)) {
          options.maxDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.maxDate), options.formatDate);
        }
        if (options.minDateTime && /^\+(.*)$/.test(options.minDateTime)) {
          options.minDateTime = _xdsoft_datetime.strToDateTime(options.minDateTime).dateFormat(options.formatDate);
        }
        if (options.maxDateTime && /^\+(.*)$/.test(options.maxDateTime)) {
          options.maxDateTime = _xdsoft_datetime.strToDateTime(options.maxDateTime).dateFormat(options.formatDate);
        }
        applyButton.toggle(options.showApplyButton);
        month_picker.find('.xdsoft_today_button').css('visibility', !options.todayButton ? 'hidden' : 'visible');
        month_picker.find('.' + options.prev).css('visibility', !options.prevButton ? 'hidden' : 'visible');
        month_picker.find('.' + options.next).css('visibility', !options.nextButton ? 'hidden' : 'visible');
        setMask(options);
        if (options.validateOnBlur) {
          input.off('blur.xdsoft').on('blur.xdsoft', function () {
            if (options.allowBlank && (!$.trim($(this).val()).length || typeof options.mask === "string" && $.trim($(this).val()) === options.mask.replace(/[0-9]/g, '_'))) {
              $(this).val(null);
              datetimepicker.data('xdsoft_datetime').empty();
            } else {
              var d = dateHelper.parseDate($(this).val(), options.format);
              if (d) {
                // parseDate() may skip some invalid parts like date or time, so make it clear for user: show parsed date/time
                $(this).val(dateHelper.formatDate(d, options.format));
              } else {
                var splittedHours = +[$(this).val()[0], $(this).val()[1]].join(''),
                  splittedMinutes = +[$(this).val()[2], $(this).val()[3]].join('');

                // parse the numbers as 0312 => 03:12
                if (!options.datepicker && options.timepicker && splittedHours >= 0 && splittedHours < 24 && splittedMinutes >= 0 && splittedMinutes < 60) {
                  $(this).val([splittedHours, splittedMinutes].map(function (item) {
                    return item > 9 ? item : '0' + item;
                  }).join(':'));
                } else {
                  $(this).val(dateHelper.formatDate(_xdsoft_datetime.now(), options.format));
                }
              }
              datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
            }
            datetimepicker.trigger('changedatetime.xdsoft');
            datetimepicker.trigger('close.xdsoft');
          });
        }
        options.dayOfWeekStartPrev = options.dayOfWeekStart === 0 ? 6 : options.dayOfWeekStart - 1;
        datetimepicker.trigger('xchange.xdsoft').trigger('afterOpen.xdsoft');
      };
      datetimepicker.data('options', options).on('touchstart mousedown.xdsoft', function (event) {
        event.stopPropagation();
        event.preventDefault();
        yearselect.hide();
        monthselect.hide();
        return false;
      });

      //scroll_element = timepicker.find('.xdsoft_time_box');
      timeboxparent.append(timebox);
      timeboxparent.xdsoftScroller(options);
      datetimepicker.on('afterOpen.xdsoft', function () {
        timeboxparent.xdsoftScroller(options);
      });
      datetimepicker.append(datepicker).append(timepicker);
      if (options.withoutCopyright !== true) {
        datetimepicker.append(xdsoft_copyright);
      }
      datepicker.append(month_picker).append(calendar).append(applyButton);
      $(options.parentID).append(datetimepicker);
      XDSoft_datetime = function XDSoft_datetime() {
        var _this = this;
        _this.now = function (norecursion) {
          var d = new Date(),
            date,
            time;
          if (!norecursion && options.defaultDate) {
            date = _this.strToDateTime(options.defaultDate);
            d.setFullYear(date.getFullYear());
            d.setMonth(date.getMonth());
            d.setDate(date.getDate());
          }
          d.setFullYear(d.getFullYear());
          if (!norecursion && options.defaultTime) {
            time = _this.strtotime(options.defaultTime);
            d.setHours(time.getHours());
            d.setMinutes(time.getMinutes());
            d.setSeconds(time.getSeconds());
            d.setMilliseconds(time.getMilliseconds());
          }
          return d;
        };
        _this.isValidDate = function (d) {
          if (Object.prototype.toString.call(d) !== "[object Date]") {
            return false;
          }
          return !isNaN(d.getTime());
        };
        _this.setCurrentTime = function (dTime, requireValidDate) {
          if (typeof dTime === 'string') {
            _this.currentTime = _this.strToDateTime(dTime);
          } else if (_this.isValidDate(dTime)) {
            _this.currentTime = dTime;
          } else if (!dTime && !requireValidDate && options.allowBlank && !options.inline) {
            _this.currentTime = null;
          } else {
            _this.currentTime = _this.now();
          }
          datetimepicker.trigger('xchange.xdsoft');
        };
        _this.empty = function () {
          _this.currentTime = null;
        };
        _this.getCurrentTime = function () {
          return _this.currentTime;
        };
        _this.nextMonth = function () {
          if (_this.currentTime === undefined || _this.currentTime === null) {
            _this.currentTime = _this.now();
          }
          var month = _this.currentTime.getMonth() + 1,
            year;
          if (month === 12) {
            _this.currentTime.setFullYear(_this.currentTime.getFullYear() + 1);
            month = 0;
          }
          year = _this.currentTime.getFullYear();
          _this.currentTime.setDate(Math.min(new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(), _this.currentTime.getDate()));
          _this.currentTime.setMonth(month);
          if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
            options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
          }
          if (year !== _this.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
            options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
          }
          datetimepicker.trigger('xchange.xdsoft');
          return month;
        };
        _this.prevMonth = function () {
          if (_this.currentTime === undefined || _this.currentTime === null) {
            _this.currentTime = _this.now();
          }
          var month = _this.currentTime.getMonth() - 1;
          if (month === -1) {
            _this.currentTime.setFullYear(_this.currentTime.getFullYear() - 1);
            month = 11;
          }
          _this.currentTime.setDate(Math.min(new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(), _this.currentTime.getDate()));
          _this.currentTime.setMonth(month);
          if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
            options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
          }
          datetimepicker.trigger('xchange.xdsoft');
          return month;
        };
        _this.getWeekOfYear = function (datetime) {
          if (options.onGetWeekOfYear && $.isFunction(options.onGetWeekOfYear)) {
            var week = options.onGetWeekOfYear.call(datetimepicker, datetime);
            if (typeof week !== 'undefined') {
              return week;
            }
          }
          var onejan = new Date(datetime.getFullYear(), 0, 1);

          //First week of the year is th one with the first Thursday according to ISO8601
          if (onejan.getDay() !== 4) {
            onejan.setMonth(0, 1 + (4 - onejan.getDay() + 7) % 7);
          }
          return Math.ceil(((datetime - onejan) / 86400000 + onejan.getDay() + 1) / 7);
        };
        _this.strToDateTime = function (sDateTime) {
          var tmpDate = [],
            timeOffset,
            currentTime;
          if (sDateTime && sDateTime instanceof Date && _this.isValidDate(sDateTime)) {
            return sDateTime;
          }
          tmpDate = /^([+-]{1})(.*)$/.exec(sDateTime);
          if (tmpDate) {
            tmpDate[2] = dateHelper.parseDate(tmpDate[2], options.formatDate);
          }
          if (tmpDate && tmpDate[2]) {
            timeOffset = tmpDate[2].getTime() - tmpDate[2].getTimezoneOffset() * 60000;
            currentTime = new Date(_this.now(true).getTime() + parseInt(tmpDate[1] + '1', 10) * timeOffset);
          } else {
            currentTime = sDateTime ? dateHelper.parseDate(sDateTime, options.format) : _this.now();
          }
          if (!_this.isValidDate(currentTime)) {
            currentTime = _this.now();
          }
          return currentTime;
        };
        _this.strToDate = function (sDate) {
          if (sDate && sDate instanceof Date && _this.isValidDate(sDate)) {
            return sDate;
          }
          var currentTime = sDate ? dateHelper.parseDate(sDate, options.formatDate) : _this.now(true);
          if (!_this.isValidDate(currentTime)) {
            currentTime = _this.now(true);
          }
          return currentTime;
        };
        _this.strtotime = function (sTime) {
          if (sTime && sTime instanceof Date && _this.isValidDate(sTime)) {
            return sTime;
          }
          var currentTime = sTime ? dateHelper.parseDate(sTime, options.formatTime) : _this.now(true);
          if (!_this.isValidDate(currentTime)) {
            currentTime = _this.now(true);
          }
          return currentTime;
        };
        _this.str = function () {
          var format = options.format;
          if (options.yearOffset) {
            format = format.replace('Y', _this.currentTime.getFullYear() + options.yearOffset);
            format = format.replace('y', String(_this.currentTime.getFullYear() + options.yearOffset).substring(2, 4));
          }
          return dateHelper.formatDate(_this.currentTime, format);
        };
        _this.currentTime = this.now();
      };
      _xdsoft_datetime = new XDSoft_datetime();
      applyButton.on('touchend click', function (e) {
        //pathbrite
        e.preventDefault();
        datetimepicker.data('changed', true);
        _xdsoft_datetime.setCurrentTime(getCurrentValue());
        input.val(_xdsoft_datetime.str());
        datetimepicker.trigger('close.xdsoft');
      });
      month_picker.find('.xdsoft_today_button').on('touchend mousedown.xdsoft', function () {
        datetimepicker.data('changed', true);
        _xdsoft_datetime.setCurrentTime(0, true);
        datetimepicker.trigger('afterOpen.xdsoft');
      }).on('dblclick.xdsoft', function () {
        var currentDate = _xdsoft_datetime.getCurrentTime(),
          minDate,
          maxDate;
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        minDate = _xdsoft_datetime.strToDate(options.minDate);
        minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
        if (currentDate < minDate) {
          return;
        }
        maxDate = _xdsoft_datetime.strToDate(options.maxDate);
        maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
        if (currentDate > maxDate) {
          return;
        }
        input.val(_xdsoft_datetime.str());
        input.trigger('change');
        datetimepicker.trigger('close.xdsoft');
      });
      month_picker.find('.xdsoft_prev,.xdsoft_next').on('touchend mousedown.xdsoft', function () {
        var $this = $(this),
          timer = 0,
          stop = false;
        (function arguments_callee1(v) {
          if ($this.hasClass(options.next)) {
            _xdsoft_datetime.nextMonth();
          } else if ($this.hasClass(options.prev)) {
            _xdsoft_datetime.prevMonth();
          }
          if (options.monthChangeSpinner) {
            if (!stop) {
              timer = setTimeout(arguments_callee1, v || 100);
            }
          }
        })(500);
        $([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft', function arguments_callee2() {
          clearTimeout(timer);
          stop = true;
          $([options.ownerDocument.body, options.contentWindow]).off('touchend mouseup.xdsoft', arguments_callee2);
        });
      });
      timepicker.find('.xdsoft_prev,.xdsoft_next').on('touchend mousedown.xdsoft', function () {
        var $this = $(this),
          timer = 0,
          stop = false,
          period = 110;
        (function arguments_callee4(v) {
          var pheight = timeboxparent[0].clientHeight,
            height = timebox[0].offsetHeight,
            top = Math.abs(parseInt(timebox.css('marginTop'), 10));
          if ($this.hasClass(options.next) && height - pheight - options.timeHeightInTimePicker >= top) {
            timebox.css('marginTop', '-' + (top + options.timeHeightInTimePicker) + 'px');
          } else if ($this.hasClass(options.prev) && top - options.timeHeightInTimePicker >= 0) {
            timebox.css('marginTop', '-' + (top - options.timeHeightInTimePicker) + 'px');
          }
          /**
           * Fixed bug:
           * When using css3 transition, it will cause a bug that you cannot scroll the timepicker list.
           * The reason is that the transition-duration time, if you set it to 0, all things fine, otherwise, this
           * would cause a bug when you use jquery.css method.
           * Let's say: * { transition: all .5s ease; }
           * jquery timebox.css('marginTop') will return the original value which is before you clicking the next/prev button,
           * meanwhile the timebox[0].style.marginTop will return the right value which is after you clicking the
           * next/prev button.
           *
           * What we should do:
           * Replace timebox.css('marginTop') with timebox[0].style.marginTop.
           */
          timeboxparent.trigger('scroll_element.xdsoft_scroller', [Math.abs(parseInt(timebox[0].style.marginTop, 10) / (height - pheight))]);
          period = period > 10 ? 10 : period - 10;
          if (!stop) {
            timer = setTimeout(arguments_callee4, v || period);
          }
        })(500);
        $([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft', function arguments_callee5() {
          clearTimeout(timer);
          stop = true;
          $([options.ownerDocument.body, options.contentWindow]).off('touchend mouseup.xdsoft', arguments_callee5);
        });
      });
      xchangeTimer = 0;
      // base handler - generating a calendar and timepicker
      datetimepicker.on('xchange.xdsoft', function (event) {
        clearTimeout(xchangeTimer);
        xchangeTimer = setTimeout(function () {
          if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
            _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
          }
          var table = '',
            start = new Date(_xdsoft_datetime.currentTime.getFullYear(), _xdsoft_datetime.currentTime.getMonth(), 1, 12, 0, 0),
            i = 0,
            j,
            today = _xdsoft_datetime.now(),
            maxDate = false,
            minDate = false,
            minDateTime = false,
            maxDateTime = false,
            hDate,
            day,
            d,
            y,
            m,
            w,
            classes = [],
            customDateSettings,
            newRow = true,
            time = '',
            h,
            line_time,
            description;
          while (start.getDay() !== options.dayOfWeekStart) {
            start.setDate(start.getDate() - 1);
          }
          table += '<table><thead><tr>';
          if (options.weeks) {
            table += '<th></th>';
          }
          for (j = 0; j < 7; j += 1) {
            table += '<th>' + options.i18n[globalLocale].dayOfWeekShort[(j + options.dayOfWeekStart) % 7] + '</th>';
          }
          table += '</tr></thead>';
          table += '<tbody>';
          if (options.maxDate !== false) {
            maxDate = _xdsoft_datetime.strToDate(options.maxDate);
            maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate(), 23, 59, 59, 999);
          }
          if (options.minDate !== false) {
            minDate = _xdsoft_datetime.strToDate(options.minDate);
            minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
          }
          if (options.minDateTime !== false) {
            minDateTime = _xdsoft_datetime.strToDate(options.minDateTime);
            minDateTime = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), minDateTime.getHours(), minDateTime.getMinutes(), minDateTime.getSeconds());
          }
          if (options.maxDateTime !== false) {
            maxDateTime = _xdsoft_datetime.strToDate(options.maxDateTime);
            maxDateTime = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), maxDateTime.getHours(), maxDateTime.getMinutes(), maxDateTime.getSeconds());
          }
          var maxDateTimeDay;
          if (maxDateTime !== false) {
            maxDateTimeDay = (maxDateTime.getFullYear() * 12 + maxDateTime.getMonth()) * 31 + maxDateTime.getDate();
          }
          while (i < _xdsoft_datetime.currentTime.countDaysInMonth() || start.getDay() !== options.dayOfWeekStart || _xdsoft_datetime.currentTime.getMonth() === start.getMonth()) {
            classes = [];
            i += 1;
            day = start.getDay();
            d = start.getDate();
            y = start.getFullYear();
            m = start.getMonth();
            w = _xdsoft_datetime.getWeekOfYear(start);
            description = '';
            classes.push('xdsoft_date');
            if (options.beforeShowDay && $.isFunction(options.beforeShowDay.call)) {
              customDateSettings = options.beforeShowDay.call(datetimepicker, start);
            } else {
              customDateSettings = null;
            }
            if (options.allowDateRe && Object.prototype.toString.call(options.allowDateRe) === "[object RegExp]") {
              if (!options.allowDateRe.test(dateHelper.formatDate(start, options.formatDate))) {
                classes.push('xdsoft_disabled');
              }
            }
            if (options.allowDates && options.allowDates.length > 0) {
              if (options.allowDates.indexOf(dateHelper.formatDate(start, options.formatDate)) === -1) {
                classes.push('xdsoft_disabled');
              }
            }
            var currentDay = (start.getFullYear() * 12 + start.getMonth()) * 31 + start.getDate();
            if (maxDate !== false && start > maxDate || minDateTime !== false && start < minDateTime || minDate !== false && start < minDate || maxDateTime !== false && currentDay > maxDateTimeDay || customDateSettings && customDateSettings[0] === false) {
              classes.push('xdsoft_disabled');
            }
            if (options.disabledDates.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
              classes.push('xdsoft_disabled');
            }
            if (options.disabledWeekDays.indexOf(day) !== -1) {
              classes.push('xdsoft_disabled');
            }
            if (input.is('[disabled]')) {
              classes.push('xdsoft_disabled');
            }
            if (customDateSettings && customDateSettings[1] !== "") {
              classes.push(customDateSettings[1]);
            }
            if (_xdsoft_datetime.currentTime.getMonth() !== m) {
              classes.push('xdsoft_other_month');
            }
            if ((options.defaultSelect || datetimepicker.data('changed')) && dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
              classes.push('xdsoft_current');
            }
            if (dateHelper.formatDate(today, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
              classes.push('xdsoft_today');
            }
            if (start.getDay() === 0 || start.getDay() === 6 || options.weekends.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
              classes.push('xdsoft_weekend');
            }
            if (options.highlightedDates[dateHelper.formatDate(start, options.formatDate)] !== undefined) {
              hDate = options.highlightedDates[dateHelper.formatDate(start, options.formatDate)];
              classes.push(hDate.style === undefined ? 'xdsoft_highlighted_default' : hDate.style);
              description = hDate.desc === undefined ? '' : hDate.desc;
            }
            if (options.beforeShowDay && $.isFunction(options.beforeShowDay)) {
              classes.push(options.beforeShowDay(start));
            }
            if (newRow) {
              table += '<tr>';
              newRow = false;
              if (options.weeks) {
                table += '<th>' + w + '</th>';
              }
            }
            table += '<td data-date="' + d + '" data-month="' + m + '" data-year="' + y + '"' + ' class="xdsoft_date xdsoft_day_of_week' + start.getDay() + ' ' + classes.join(' ') + '" title="' + description + '">' + '<div>' + d + '</div>' + '</td>';
            if (start.getDay() === options.dayOfWeekStartPrev) {
              table += '</tr>';
              newRow = true;
            }
            start.setDate(d + 1);
          }
          table += '</tbody></table>';
          calendar.html(table);
          month_picker.find('.xdsoft_label span').eq(0).text(options.i18n[globalLocale].months[_xdsoft_datetime.currentTime.getMonth()]);
          month_picker.find('.xdsoft_label span').eq(1).text(_xdsoft_datetime.currentTime.getFullYear() + options.yearOffset);

          // generate timebox
          time = '';
          h = '';
          m = '';
          var minTimeMinutesOfDay = 0;
          if (options.minTime !== false) {
            var t = _xdsoft_datetime.strtotime(options.minTime);
            minTimeMinutesOfDay = 60 * t.getHours() + t.getMinutes();
          }
          var maxTimeMinutesOfDay = 24 * 60;
          if (options.maxTime !== false) {
            var t = _xdsoft_datetime.strtotime(options.maxTime);
            maxTimeMinutesOfDay = 60 * t.getHours() + t.getMinutes();
          }
          if (options.minDateTime !== false) {
            var t = _xdsoft_datetime.strToDateTime(options.minDateTime);
            var currentDayIsMinDateTimeDay = dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(t, options.formatDate);
            if (currentDayIsMinDateTimeDay) {
              var m = 60 * t.getHours() + t.getMinutes();
              if (m > minTimeMinutesOfDay) minTimeMinutesOfDay = m;
            }
          }
          if (options.maxDateTime !== false) {
            var t = _xdsoft_datetime.strToDateTime(options.maxDateTime);
            var currentDayIsMaxDateTimeDay = dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(t, options.formatDate);
            if (currentDayIsMaxDateTimeDay) {
              var m = 60 * t.getHours() + t.getMinutes();
              if (m < maxTimeMinutesOfDay) maxTimeMinutesOfDay = m;
            }
          }
          line_time = function line_time(h, m) {
            var now = _xdsoft_datetime.now(),
              current_time,
              isALlowTimesInit = options.allowTimes && $.isArray(options.allowTimes) && options.allowTimes.length;
            now.setHours(h);
            h = parseInt(now.getHours(), 10);
            now.setMinutes(m);
            m = parseInt(now.getMinutes(), 10);
            classes = [];
            var currentMinutesOfDay = 60 * h + m;
            if (input.is('[disabled]') || currentMinutesOfDay >= maxTimeMinutesOfDay || currentMinutesOfDay < minTimeMinutesOfDay) {
              classes.push('xdsoft_disabled');
            }
            current_time = new Date(_xdsoft_datetime.currentTime);
            current_time.setHours(parseInt(_xdsoft_datetime.currentTime.getHours(), 10));
            if (!isALlowTimesInit) {
              current_time.setMinutes(Math[options.roundTime](_xdsoft_datetime.currentTime.getMinutes() / options.step) * options.step);
            }
            if ((options.initTime || options.defaultSelect || datetimepicker.data('changed')) && current_time.getHours() === parseInt(h, 10) && (!isALlowTimesInit && options.step > 59 || current_time.getMinutes() === parseInt(m, 10))) {
              if (options.defaultSelect || datetimepicker.data('changed')) {
                classes.push('xdsoft_current');
              } else if (options.initTime) {
                classes.push('xdsoft_init_time');
              }
            }
            if (parseInt(today.getHours(), 10) === parseInt(h, 10) && parseInt(today.getMinutes(), 10) === parseInt(m, 10)) {
              classes.push('xdsoft_today');
            }
            time += '<div class="xdsoft_time ' + classes.join(' ') + '" data-hour="' + h + '" data-minute="' + m + '">' + dateHelper.formatDate(now, options.formatTime) + '</div>';
          };
          if (!options.allowTimes || !$.isArray(options.allowTimes) || !options.allowTimes.length) {
            for (i = 0, j = 0; i < (options.hours12 ? 12 : 24); i += 1) {
              for (j = 0; j < 60; j += options.step) {
                var currentMinutesOfDay = i * 60 + j;
                if (currentMinutesOfDay < minTimeMinutesOfDay) continue;
                if (currentMinutesOfDay >= maxTimeMinutesOfDay) continue;
                h = (i < 10 ? '0' : '') + i;
                m = (j < 10 ? '0' : '') + j;
                line_time(h, m);
              }
            }
          } else {
            for (i = 0; i < options.allowTimes.length; i += 1) {
              h = _xdsoft_datetime.strtotime(options.allowTimes[i]).getHours();
              m = _xdsoft_datetime.strtotime(options.allowTimes[i]).getMinutes();
              line_time(h, m);
            }
          }
          timebox.html(time);
          opt = '';
          for (i = parseInt(options.yearStart, 10); i <= parseInt(options.yearEnd, 10); i += 1) {
            opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getFullYear() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + (i + options.yearOffset) + '</div>';
          }
          yearselect.children().eq(0).html(opt);
          for (i = parseInt(options.monthStart, 10), opt = ''; i <= parseInt(options.monthEnd, 10); i += 1) {
            opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getMonth() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + options.i18n[globalLocale].months[i] + '</div>';
          }
          monthselect.children().eq(0).html(opt);
          $(datetimepicker).trigger('generate.xdsoft');
        }, 10);
        event.stopPropagation();
      }).on('afterOpen.xdsoft', function () {
        if (options.timepicker) {
          var classType, pheight, height, top;
          if (timebox.find('.xdsoft_current').length) {
            classType = '.xdsoft_current';
          } else if (timebox.find('.xdsoft_init_time').length) {
            classType = '.xdsoft_init_time';
          }
          if (classType) {
            pheight = timeboxparent[0].clientHeight;
            height = timebox[0].offsetHeight;
            top = timebox.find(classType).index() * options.timeHeightInTimePicker + 1;
            if (height - pheight < top) {
              top = height - pheight;
            }
            timeboxparent.trigger('scroll_element.xdsoft_scroller', [parseInt(top, 10) / (height - pheight)]);
          } else {
            timeboxparent.trigger('scroll_element.xdsoft_scroller', [0]);
          }
        }
      });
      timerclick = 0;
      calendar.on('touchend click.xdsoft', 'td', function (xdevent) {
        xdevent.stopPropagation(); // Prevents closing of Pop-ups, Modals and Flyouts in Bootstrap
        timerclick += 1;
        var $this = $(this),
          currentTime = _xdsoft_datetime.currentTime;
        if (currentTime === undefined || currentTime === null) {
          _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
          currentTime = _xdsoft_datetime.currentTime;
        }
        if ($this.hasClass('xdsoft_disabled')) {
          return false;
        }
        currentTime.setDate(1);
        currentTime.setFullYear($this.data('year'));
        currentTime.setMonth($this.data('month'));
        currentTime.setDate($this.data('date'));
        datetimepicker.trigger('select.xdsoft', [currentTime]);
        input.val(_xdsoft_datetime.str());
        if (options.onSelectDate && $.isFunction(options.onSelectDate)) {
          options.onSelectDate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
        }
        datetimepicker.data('changed', true);
        datetimepicker.trigger('xchange.xdsoft');
        datetimepicker.trigger('changedatetime.xdsoft');
        if ((timerclick > 1 || options.closeOnDateSelect === true || options.closeOnDateSelect === false && !options.timepicker) && !options.inline) {
          datetimepicker.trigger('close.xdsoft');
        }
        setTimeout(function () {
          timerclick = 0;
        }, 200);
      });
      timebox.on('touchstart', 'div', function (xdevent) {
        this.touchMoved = false;
      }).on('touchmove', 'div', handleTouchMoved).on('touchend click.xdsoft', 'div', function (xdevent) {
        if (!this.touchMoved) {
          xdevent.stopPropagation();
          var $this = $(this),
            currentTime = _xdsoft_datetime.currentTime;
          if (currentTime === undefined || currentTime === null) {
            _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
            currentTime = _xdsoft_datetime.currentTime;
          }
          if ($this.hasClass('xdsoft_disabled')) {
            return false;
          }
          currentTime.setHours($this.data('hour'));
          currentTime.setMinutes($this.data('minute'));
          datetimepicker.trigger('select.xdsoft', [currentTime]);
          datetimepicker.data('input').val(_xdsoft_datetime.str());
          if (options.onSelectTime && $.isFunction(options.onSelectTime)) {
            options.onSelectTime.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
          }
          datetimepicker.data('changed', true);
          datetimepicker.trigger('xchange.xdsoft');
          datetimepicker.trigger('changedatetime.xdsoft');
          if (options.inline !== true && options.closeOnTimeSelect === true) {
            datetimepicker.trigger('close.xdsoft');
          }
        }
      });
      datepicker.on('mousewheel.xdsoft', function (event) {
        if (!options.scrollMonth) {
          return true;
        }
        if (event.deltaY < 0) {
          _xdsoft_datetime.nextMonth();
        } else {
          _xdsoft_datetime.prevMonth();
        }
        return false;
      });
      input.on('mousewheel.xdsoft', function (event) {
        if (!options.scrollInput) {
          return true;
        }
        if (!options.datepicker && options.timepicker) {
          current_time_index = timebox.find('.xdsoft_current').length ? timebox.find('.xdsoft_current').eq(0).index() : 0;
          if (current_time_index + event.deltaY >= 0 && current_time_index + event.deltaY < timebox.children().length) {
            current_time_index += event.deltaY;
          }
          if (timebox.children().eq(current_time_index).length) {
            timebox.children().eq(current_time_index).trigger('mousedown');
          }
          return false;
        }
        if (options.datepicker && !options.timepicker) {
          datepicker.trigger(event, [event.deltaY, event.deltaX, event.deltaY]);
          if (input.val) {
            input.val(_xdsoft_datetime.str());
          }
          datetimepicker.trigger('changedatetime.xdsoft');
          return false;
        }
      });
      datetimepicker.on('changedatetime.xdsoft', function (event) {
        if (options.onChangeDateTime && $.isFunction(options.onChangeDateTime)) {
          var $input = datetimepicker.data('input');
          options.onChangeDateTime.call(datetimepicker, _xdsoft_datetime.currentTime, $input, event);
          delete options.value;
          $input.trigger('change');
        }
      }).on('generate.xdsoft', function () {
        if (options.onGenerate && $.isFunction(options.onGenerate)) {
          options.onGenerate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
        }
        if (triggerAfterOpen) {
          datetimepicker.trigger('afterOpen.xdsoft');
          triggerAfterOpen = false;
        }
      }).on('click.xdsoft', function (xdevent) {
        xdevent.stopPropagation();
      });
      current_time_index = 0;

      /**
       * Runs the callback for each of the specified node's ancestors.
       *
       * Return FALSE from the callback to stop ascending.
       *
       * @param {DOMNode} node
       * @param {Function} callback
       * @returns {undefined}
       */
      forEachAncestorOf = function forEachAncestorOf(node, callback) {
        do {
          node = node.parentNode;
          if (!node || callback(node) === false) {
            break;
          }
        } while (node.nodeName !== 'HTML');
      };

      /**
       * Sets the position of the picker.
       *
       * @returns {undefined}
       */
      setPos = function setPos() {
        var dateInputOffset, dateInputElem, verticalPosition, left, position, datetimepickerElem, dateInputHasFixedAncestor, $dateInput, windowWidth, verticalAnchorEdge, datetimepickerCss, windowHeight, windowScrollTop;
        $dateInput = datetimepicker.data('input');
        dateInputOffset = $dateInput.offset();
        dateInputElem = $dateInput[0];
        verticalAnchorEdge = 'top';
        verticalPosition = dateInputOffset.top + dateInputElem.offsetHeight - 1;
        left = dateInputOffset.left;
        position = "absolute";
        windowWidth = $(options.contentWindow).width();
        windowHeight = $(options.contentWindow).height();
        windowScrollTop = $(options.contentWindow).scrollTop();
        if (options.ownerDocument.documentElement.clientWidth - dateInputOffset.left < datepicker.parent().outerWidth(true)) {
          var diff = datepicker.parent().outerWidth(true) - dateInputElem.offsetWidth;
          left = left - diff;
        }
        if ($dateInput.parent().css('direction') === 'rtl') {
          left -= datetimepicker.outerWidth() - $dateInput.outerWidth();
        }
        if (options.fixed) {
          verticalPosition -= windowScrollTop;
          left -= $(options.contentWindow).scrollLeft();
          position = "fixed";
        } else {
          dateInputHasFixedAncestor = false;
          forEachAncestorOf(dateInputElem, function (ancestorNode) {
            if (ancestorNode === null) {
              return false;
            }
            if (options.contentWindow.getComputedStyle(ancestorNode).getPropertyValue('position') === 'fixed') {
              dateInputHasFixedAncestor = true;
              return false;
            }
          });
          if (dateInputHasFixedAncestor) {
            position = 'fixed';

            //If the picker won't fit entirely within the viewport then display it above the date input.
            if (verticalPosition + datetimepicker.outerHeight() > windowHeight + windowScrollTop) {
              verticalAnchorEdge = 'bottom';
              verticalPosition = windowHeight + windowScrollTop - dateInputOffset.top;
            } else {
              verticalPosition -= windowScrollTop;
            }
          } else {
            if (verticalPosition + datetimepicker[0].offsetHeight > windowHeight + windowScrollTop) {
              verticalPosition = dateInputOffset.top - datetimepicker[0].offsetHeight + 1;
            }
          }
          if (verticalPosition < 0) {
            verticalPosition = 0;
          }
          if (left + dateInputElem.offsetWidth > windowWidth) {
            left = windowWidth - dateInputElem.offsetWidth;
          }
        }
        datetimepickerElem = datetimepicker[0];
        forEachAncestorOf(datetimepickerElem, function (ancestorNode) {
          var ancestorNodePosition;
          ancestorNodePosition = options.contentWindow.getComputedStyle(ancestorNode).getPropertyValue('position');
          if (ancestorNodePosition === 'relative' && windowWidth >= ancestorNode.offsetWidth) {
            left = left - (windowWidth - ancestorNode.offsetWidth) / 2;
            return false;
          }
        });
        datetimepickerCss = {
          position: position,
          left: left,
          top: '',
          //Initialize to prevent previous values interfering with new ones.
          bottom: '' //Initialize to prevent previous values interfering with new ones.
        };

        datetimepickerCss[verticalAnchorEdge] = verticalPosition;
        datetimepicker.css(datetimepickerCss);
      };
      datetimepicker.on('open.xdsoft', function (event) {
        var onShow = true;
        if (options.onShow && $.isFunction(options.onShow)) {
          onShow = options.onShow.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
        }
        if (onShow !== false) {
          datetimepicker.show();
          setPos();
          $(options.contentWindow).off('resize.xdsoft', setPos).on('resize.xdsoft', setPos);
          if (options.closeOnWithoutClick) {
            $([options.ownerDocument.body, options.contentWindow]).on('touchstart mousedown.xdsoft', function arguments_callee6() {
              datetimepicker.trigger('close.xdsoft');
              $([options.ownerDocument.body, options.contentWindow]).off('touchstart mousedown.xdsoft', arguments_callee6);
            });
          }
        }
      }).on('close.xdsoft', function (event) {
        var onClose = true;
        month_picker.find('.xdsoft_month,.xdsoft_year').find('.xdsoft_select').hide();
        if (options.onClose && $.isFunction(options.onClose)) {
          onClose = options.onClose.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
        }
        if (onClose !== false && !options.opened && !options.inline) {
          datetimepicker.hide();
        }
        event.stopPropagation();
      }).on('toggle.xdsoft', function () {
        if (datetimepicker.is(':visible')) {
          datetimepicker.trigger('close.xdsoft');
        } else {
          datetimepicker.trigger('open.xdsoft');
        }
      }).data('input', input);
      timer = 0;
      datetimepicker.data('xdsoft_datetime', _xdsoft_datetime);
      datetimepicker.setOptions(options);
      function getCurrentValue() {
        var ct = false,
          time;
        if (options.startDate) {
          ct = _xdsoft_datetime.strToDate(options.startDate);
        } else {
          ct = options.value || (input && input.val && input.val() ? input.val() : '');
          if (ct) {
            ct = _xdsoft_datetime.strToDateTime(ct);
            if (options.yearOffset) {
              ct = new Date(ct.getFullYear() - options.yearOffset, ct.getMonth(), ct.getDate(), ct.getHours(), ct.getMinutes(), ct.getSeconds(), ct.getMilliseconds());
            }
          } else if (options.defaultDate) {
            ct = _xdsoft_datetime.strToDateTime(options.defaultDate);
            if (options.defaultTime) {
              time = _xdsoft_datetime.strtotime(options.defaultTime);
              ct.setHours(time.getHours());
              ct.setMinutes(time.getMinutes());
            }
          }
        }
        if (ct && _xdsoft_datetime.isValidDate(ct)) {
          datetimepicker.data('changed', true);
        } else {
          ct = '';
        }
        return ct || 0;
      }
      function setMask(options) {
        var isValidValue = function isValidValue(mask, value) {
            var reg = mask.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, '\\$1').replace(/_/g, '{digit+}').replace(/([0-9]{1})/g, '{digit$1}').replace(/\{digit([0-9]{1})\}/g, '[0-$1_]{1}').replace(/\{digit[\+]\}/g, '[0-9_]{1}');
            return new RegExp(reg).test(value);
          },
          getCaretPos = function getCaretPos(input) {
            try {
              if (options.ownerDocument.selection && options.ownerDocument.selection.createRange) {
                var range = options.ownerDocument.selection.createRange();
                return range.getBookmark().charCodeAt(2) - 2;
              }
              if (input.setSelectionRange) {
                return input.selectionStart;
              }
            } catch (e) {
              return 0;
            }
          },
          setCaretPos = function setCaretPos(node, pos) {
            node = typeof node === "string" || node instanceof String ? options.ownerDocument.getElementById(node) : node;
            if (!node) {
              return false;
            }
            if (node.createTextRange) {
              var textRange = node.createTextRange();
              textRange.collapse(true);
              textRange.moveEnd('character', pos);
              textRange.moveStart('character', pos);
              textRange.select();
              return true;
            }
            if (node.setSelectionRange) {
              node.setSelectionRange(pos, pos);
              return true;
            }
            return false;
          };
        if (options.mask) {
          input.off('keydown.xdsoft');
        }
        if (options.mask === true) {
          if (dateHelper.formatMask) {
            options.mask = dateHelper.formatMask(options.format);
          } else {
            options.mask = options.format.replace(/Y/g, '9999').replace(/F/g, '9999').replace(/m/g, '19').replace(/d/g, '39').replace(/H/g, '29').replace(/i/g, '59').replace(/s/g, '59');
          }
        }
        if ($.type(options.mask) === 'string') {
          if (!isValidValue(options.mask, input.val())) {
            input.val(options.mask.replace(/[0-9]/g, '_'));
            setCaretPos(input[0], 0);
          }
          input.on('paste.xdsoft', function (event) {
            // couple options here
            // 1. return false - tell them they can't paste
            // 2. insert over current characters - minimal validation
            // 3. full fledged parsing and validation
            // let's go option 2 for now

            // fires multiple times for some reason

            // https://stackoverflow.com/a/30496488/1366033
            var clipboardData = event.clipboardData || event.originalEvent.clipboardData || window.clipboardData,
              pastedData = clipboardData.getData('text'),
              val = this.value,
              pos = this.selectionStart;
            var valueBeforeCursor = val.substr(0, pos);
            var valueAfterPaste = val.substr(pos + pastedData.length);
            val = valueBeforeCursor + pastedData + valueAfterPaste;
            pos += pastedData.length;
            if (isValidValue(options.mask, val)) {
              this.value = val;
              setCaretPos(this, pos);
            } else if ($.trim(val) === '') {
              this.value = options.mask.replace(/[0-9]/g, '_');
            } else {
              input.trigger('error_input.xdsoft');
            }
            event.preventDefault();
            return false;
          });
          input.on('keydown.xdsoft', function (event) {
            var val = this.value,
              key = event.which,
              pos = this.selectionStart,
              selEnd = this.selectionEnd,
              hasSel = pos !== selEnd,
              digit;

            // only alow these characters
            if (key >= KEY0 && key <= KEY9 || key >= _KEY0 && key <= _KEY9 || key === BACKSPACE || key === DEL) {
              // get char to insert which is new character or placeholder ('_')
              digit = key === BACKSPACE || key === DEL ? '_' : String.fromCharCode(_KEY0 <= key && key <= _KEY9 ? key - KEY0 : key);

              // we're deleting something, we're not at the start, and have normal cursor, move back one
              // if we have a selection length, cursor actually sits behind deletable char, not in front
              if (key === BACKSPACE && pos && !hasSel) {
                pos -= 1;
              }

              // don't stop on a separator, continue whatever direction you were going
              //   value char - keep incrementing position while on separator char and we still have room
              //   del char   - keep decrementing position while on separator char and we still have room
              while (true) {
                var maskValueAtCurPos = options.mask.substr(pos, 1);
                var posShorterThanMaskLength = pos < options.mask.length;
                var posGreaterThanZero = pos > 0;
                var notNumberOrPlaceholder = /[^0-9_]/;
                var curPosOnSep = notNumberOrPlaceholder.test(maskValueAtCurPos);
                var continueMovingPosition = curPosOnSep && posShorterThanMaskLength && posGreaterThanZero;

                // if we hit a real char, stay where we are
                if (!continueMovingPosition) break;

                // hitting backspace in a selection, you can possibly go back any further - go forward
                pos += key === BACKSPACE && !hasSel ? -1 : 1;
              }
              if (hasSel) {
                // pos might have moved so re-calc length
                var selLength = selEnd - pos;

                // if we have a selection length we will wipe out entire selection and replace with default template for that range
                var defaultBlank = options.mask.replace(/[0-9]/g, '_');
                var defaultBlankSelectionReplacement = defaultBlank.substr(pos, selLength);
                var selReplacementRemainder = defaultBlankSelectionReplacement.substr(1); // might be empty

                var valueBeforeSel = val.substr(0, pos);
                var insertChars = digit + selReplacementRemainder;
                var charsAfterSelection = val.substr(pos + selLength);
                val = valueBeforeSel + insertChars + charsAfterSelection;
              } else {
                var valueBeforeCursor = val.substr(0, pos);
                var insertChar = digit;
                var valueAfterNextChar = val.substr(pos + 1);
                val = valueBeforeCursor + insertChar + valueAfterNextChar;
              }
              if ($.trim(val) === '') {
                // if empty, set to default
                val = defaultBlank;
              } else {
                // if at the last character don't need to do anything
                if (pos === options.mask.length) {
                  event.preventDefault();
                  return false;
                }
              }

              // resume cursor location
              pos += key === BACKSPACE ? 0 : 1;
              // don't stop on a separator, continue whatever direction you were going
              while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
                pos += key === BACKSPACE ? 0 : 1;
              }
              if (isValidValue(options.mask, val)) {
                this.value = val;
                setCaretPos(this, pos);
              } else if ($.trim(val) === '') {
                this.value = options.mask.replace(/[0-9]/g, '_');
              } else {
                input.trigger('error_input.xdsoft');
              }
            } else {
              if ([AKEY, CKEY, VKEY, ZKEY, YKEY].indexOf(key) !== -1 && ctrlDown || [ESC, ARROWUP, ARROWDOWN, ARROWLEFT, ARROWRIGHT, F5, CTRLKEY, TAB, ENTER].indexOf(key) !== -1) {
                return true;
              }
            }
            event.preventDefault();
            return false;
          });
        }
      }
      _xdsoft_datetime.setCurrentTime(getCurrentValue());
      input.data('xdsoft_datetimepicker', datetimepicker).on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function () {
        if (input.is(':disabled') || input.data('xdsoft_datetimepicker').is(':visible') && options.closeOnInputClick) {
          return;
        }
        if (!options.openOnFocus) {
          return;
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
          if (input.is(':disabled')) {
            return;
          }
          triggerAfterOpen = true;
          _xdsoft_datetime.setCurrentTime(getCurrentValue(), true);
          if (options.mask) {
            setMask(options);
          }
          datetimepicker.trigger('open.xdsoft');
        }, 100);
      }).on('keydown.xdsoft', function (event) {
        var elementSelector,
          key = event.which;
        if ([ENTER].indexOf(key) !== -1 && options.enterLikeTab) {
          elementSelector = $("input:visible,textarea:visible,button:visible,a:visible");
          datetimepicker.trigger('close.xdsoft');
          elementSelector.eq(elementSelector.index(this) + 1).focus();
          return false;
        }
        if ([TAB].indexOf(key) !== -1) {
          datetimepicker.trigger('close.xdsoft');
          return true;
        }
      }).on('blur.xdsoft', function () {
        datetimepicker.trigger('close.xdsoft');
      });
    };
    destroyDateTimePicker = function destroyDateTimePicker(input) {
      var datetimepicker = input.data('xdsoft_datetimepicker');
      if (datetimepicker) {
        datetimepicker.data('xdsoft_datetime', null);
        datetimepicker.remove();
        input.data('xdsoft_datetimepicker', null).off('.xdsoft');
        $(options.contentWindow).off('resize.xdsoft');
        $([options.contentWindow, options.ownerDocument.body]).off('mousedown.xdsoft touchstart');
        if (input.unmousewheel) {
          input.unmousewheel();
        }
      }
    };
    $(options.ownerDocument).off('keydown.xdsoftctrl keyup.xdsoftctrl').on('keydown.xdsoftctrl', function (e) {
      if (e.keyCode === CTRLKEY) {
        ctrlDown = true;
      }
    }).on('keyup.xdsoftctrl', function (e) {
      if (e.keyCode === CTRLKEY) {
        ctrlDown = false;
      }
    });
    this.each(function () {
      var datetimepicker = $(this).data('xdsoft_datetimepicker'),
        $input;
      if (datetimepicker) {
        if ($.type(opt) === 'string') {
          switch (opt) {
            case 'show':
              $(this).select().focus();
              datetimepicker.trigger('open.xdsoft');
              break;
            case 'hide':
              datetimepicker.trigger('close.xdsoft');
              break;
            case 'toggle':
              datetimepicker.trigger('toggle.xdsoft');
              break;
            case 'destroy':
              destroyDateTimePicker($(this));
              break;
            case 'reset':
              this.value = this.defaultValue;
              if (!this.value || !datetimepicker.data('xdsoft_datetime').isValidDate(dateHelper.parseDate(this.value, options.format))) {
                datetimepicker.data('changed', false);
              }
              datetimepicker.data('xdsoft_datetime').setCurrentTime(this.value);
              break;
            case 'validate':
              $input = datetimepicker.data('input');
              $input.trigger('blur.xdsoft');
              break;
            default:
              if (datetimepicker[opt] && $.isFunction(datetimepicker[opt])) {
                result = datetimepicker[opt](opt2);
              }
          }
        } else {
          datetimepicker.setOptions(opt);
        }
        return 0;
      }
      if ($.type(opt) !== 'string') {
        if (!options.lazyInit || options.open || options.inline) {
          createDateTimePicker($(this));
        } else {
          lazyInit($(this));
        }
      }
    });
    return result;
  };
  $.fn.datetimepicker.defaults = default_options;
  function HighlightedDate(date, desc, style) {
    "use strict";

    this.date = date;
    this.desc = desc;
    this.style = style;
  }
};
;
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! jquery-mousewheel */ "./node_modules/jquery-mousewheel/jquery.mousewheel.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(datetimepickerFactory);

/***/ }),

/***/ "./assets/js/ezadmin/lib/bootstrap-table/locale sync recursive ^\\.\\/.*$":
/*!********************************************************************!*\
  !*** ./assets/js/ezadmin/lib/bootstrap-table/locale sync ^\.\/.*$ ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bootstrap-table-fr-FR": "./assets/js/ezadmin/lib/bootstrap-table/locale/bootstrap-table-fr-FR.js",
	"./bootstrap-table-fr-FR.js": "./assets/js/ezadmin/lib/bootstrap-table/locale/bootstrap-table-fr-FR.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/js/ezadmin/lib/bootstrap-table/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./assets/js/ezadmin/lib/bootstrap-table/locale/bootstrap-table-fr-FR.js":
/*!*******************************************************************************!*\
  !*** ./assets/js/ezadmin/lib/bootstrap-table/locale/bootstrap-table-fr-FR.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Bootstrap Table French (France) translation
 * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
 * Modification: Tidalf (https://github.com/TidalfFR)
 */
(function ($) {
  'use strict';

  $.fn.bootstrapTable.locales['fr-FR'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Chargement en cours, patientez, s´il vous plaît ...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' lignes par page';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Affichage des lignes ' + pageFrom + ' à ' + pageTo + ' sur ' + totalRows + ' lignes au total';
    },
    formatSearch: function formatSearch() {
      return 'Rechercher';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Aucun résultat trouvé';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Montrer/Masquer pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Rafraîchir';
    },
    formatToggle: function formatToggle() {
      return 'Alterner';
    },
    formatColumns: function formatColumns() {
      return 'Colonnes';
    },
    formatAllRows: function formatAllRows() {
      return 'Tous';
    },
    formatExport: function formatExport() {
      return 'Exporter les données';
    },
    formatClearFilters: function formatClearFilters() {
      return 'Vider les filtres';
    },
    formatMultipleSort: function formatMultipleSort() {
      return 'Tri avancé';
    },
    formatAddLevel: function formatAddLevel() {
      return 'Ajouter un niveau';
    },
    formatDeleteLevel: function formatDeleteLevel() {
      return 'Supprimer un niveau';
    },
    formatColumn: function formatColumn() {
      return 'Colonne';
    },
    formatOrder: function formatOrder() {
      return 'Ordre';
    },
    formatSortBy: function formatSortBy() {
      return 'Trier par';
    },
    formatThenBy: function formatThenBy() {
      return 'Puis par';
    },
    formatSort: function formatSort() {
      return 'Trier';
    },
    formatCancel: function formatCancel() {
      return 'Annuler';
    },
    formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
      return 'Doublon(s) détecté(s)!';
    },
    formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
      return 'Supprimez ou changez les colonnes dupliquées.';
    },
    formatSortOrders: function formatSortOrders() {
      return {
        asc: 'Croissant',
        desc: 'Décroissant'
      };
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Recherche avancée';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return "Fermer";
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-FR']);
})(jQuery);

/***/ }),

/***/ "./assets/js/ezadmin/lib/bootstrap-table/moment-with-locales.js":
/*!**********************************************************************!*\
  !*** ./assets/js/ezadmin/lib/bootstrap-table/moment-with-locales.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
//! moment.js
//! version : 2.9.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (undefined) {
  /************************************
      Constants
  ************************************/

  var moment,
    VERSION = '2.9.0',
    // the global-scope this is NOT the global object in Node.js
    globalScope = typeof global !== 'undefined' && (typeof window === 'undefined' || window === global.window) ? global : this,
    oldGlobalMoment,
    round = Math.round,
    hasOwnProperty = Object.prototype.hasOwnProperty,
    i,
    YEAR = 0,
    MONTH = 1,
    DATE = 2,
    HOUR = 3,
    MINUTE = 4,
    SECOND = 5,
    MILLISECOND = 6,
    // internal storage for locale config files
    locales = {},
    // extra moment internal properties (plugins register props here)
    momentProperties = [],
    // check for nodeJS
    hasModule =  true && module && module.exports,
    // ASP.NET json date format regex
    aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
    aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,
    // format tokens
    formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
    localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    // parsing token regexes
    parseTokenOneOrTwoDigits = /\d\d?/,
    // 0 - 99
    parseTokenOneToThreeDigits = /\d{1,3}/,
    // 0 - 999
    parseTokenOneToFourDigits = /\d{1,4}/,
    // 0 - 9999
    parseTokenOneToSixDigits = /[+\-]?\d{1,6}/,
    // -999,999 - 999,999
    parseTokenDigits = /\d+/,
    // nonzero number of digits
    parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
    // any word (or two) characters or numbers including two/three word month in arabic.
    parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi,
    // +00:00 -00:00 +0000 -0000 or Z
    parseTokenT = /T/i,
    // T (ISO separator)
    parseTokenOffsetMs = /[\+\-]?\d+/,
    // 1234567890123
    parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/,
    // 123456789 123456789.123

    //strict parsing regexes
    parseTokenOneDigit = /\d/,
    // 0 - 9
    parseTokenTwoDigits = /\d\d/,
    // 00 - 99
    parseTokenThreeDigits = /\d{3}/,
    // 000 - 999
    parseTokenFourDigits = /\d{4}/,
    // 0000 - 9999
    parseTokenSixDigits = /[+-]?\d{6}/,
    // -999,999 - 999,999
    parseTokenSignedNumber = /[+-]?\d+/,
    // -inf - inf

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',
    isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/], ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/], ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/], ['GGGG-[W]WW', /\d{4}-W\d{2}/], ['YYYY-DDD', /\d{4}-\d{3}/]],
    // iso time formats and regexes
    isoTimes = [['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/], ['HH:mm', /(T| )\d\d:\d\d/], ['HH', /(T| )\d\d/]],
    // timezone chunker '+10:00' > ['10', '00'] or '-1530' > ['-', '15', '30']
    parseTimezoneChunker = /([\+\-]|\d\d)/gi,
    // getter and setter names
    proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
    unitMillisecondFactors = {
      'Milliseconds': 1,
      'Seconds': 1e3,
      'Minutes': 6e4,
      'Hours': 36e5,
      'Days': 864e5,
      'Months': 2592e6,
      'Years': 31536e6
    },
    unitAliases = {
      ms: 'millisecond',
      s: 'second',
      m: 'minute',
      h: 'hour',
      d: 'day',
      D: 'date',
      w: 'week',
      W: 'isoWeek',
      M: 'month',
      Q: 'quarter',
      y: 'year',
      DDD: 'dayOfYear',
      e: 'weekday',
      E: 'isoWeekday',
      gg: 'weekYear',
      GG: 'isoWeekYear'
    },
    camelFunctions = {
      dayofyear: 'dayOfYear',
      isoweekday: 'isoWeekday',
      isoweek: 'isoWeek',
      weekyear: 'weekYear',
      isoweekyear: 'isoWeekYear'
    },
    // format function strings
    formatFunctions = {},
    // default relative time thresholds
    relativeTimeThresholds = {
      s: 45,
      // seconds to minute
      m: 45,
      // minutes to hour
      h: 22,
      // hours to day
      d: 26,
      // days to month
      M: 11 // months to year
    },
    // tokens to ordinalize and pad
    ordinalizeTokens = 'DDD w W M D d'.split(' '),
    paddedTokens = 'M D H h m s w W'.split(' '),
    formatTokenFunctions = {
      M: function M() {
        return this.month() + 1;
      },
      MMM: function MMM(format) {
        return this.localeData().monthsShort(this, format);
      },
      MMMM: function MMMM(format) {
        return this.localeData().months(this, format);
      },
      D: function D() {
        return this.date();
      },
      DDD: function DDD() {
        return this.dayOfYear();
      },
      d: function d() {
        return this.day();
      },
      dd: function dd(format) {
        return this.localeData().weekdaysMin(this, format);
      },
      ddd: function ddd(format) {
        return this.localeData().weekdaysShort(this, format);
      },
      dddd: function dddd(format) {
        return this.localeData().weekdays(this, format);
      },
      w: function w() {
        return this.week();
      },
      W: function W() {
        return this.isoWeek();
      },
      YY: function YY() {
        return leftZeroFill(this.year() % 100, 2);
      },
      YYYY: function YYYY() {
        return leftZeroFill(this.year(), 4);
      },
      YYYYY: function YYYYY() {
        return leftZeroFill(this.year(), 5);
      },
      YYYYYY: function YYYYYY() {
        var y = this.year(),
          sign = y >= 0 ? '+' : '-';
        return sign + leftZeroFill(Math.abs(y), 6);
      },
      gg: function gg() {
        return leftZeroFill(this.weekYear() % 100, 2);
      },
      gggg: function gggg() {
        return leftZeroFill(this.weekYear(), 4);
      },
      ggggg: function ggggg() {
        return leftZeroFill(this.weekYear(), 5);
      },
      GG: function GG() {
        return leftZeroFill(this.isoWeekYear() % 100, 2);
      },
      GGGG: function GGGG() {
        return leftZeroFill(this.isoWeekYear(), 4);
      },
      GGGGG: function GGGGG() {
        return leftZeroFill(this.isoWeekYear(), 5);
      },
      e: function e() {
        return this.weekday();
      },
      E: function E() {
        return this.isoWeekday();
      },
      a: function a() {
        return this.localeData().meridiem(this.hours(), this.minutes(), true);
      },
      A: function A() {
        return this.localeData().meridiem(this.hours(), this.minutes(), false);
      },
      H: function H() {
        return this.hours();
      },
      h: function h() {
        return this.hours() % 12 || 12;
      },
      m: function m() {
        return this.minutes();
      },
      s: function s() {
        return this.seconds();
      },
      S: function S() {
        return toInt(this.milliseconds() / 100);
      },
      SS: function SS() {
        return leftZeroFill(toInt(this.milliseconds() / 10), 2);
      },
      SSS: function SSS() {
        return leftZeroFill(this.milliseconds(), 3);
      },
      SSSS: function SSSS() {
        return leftZeroFill(this.milliseconds(), 3);
      },
      Z: function Z() {
        var a = this.utcOffset(),
          b = '+';
        if (a < 0) {
          a = -a;
          b = '-';
        }
        return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
      },
      ZZ: function ZZ() {
        var a = this.utcOffset(),
          b = '+';
        if (a < 0) {
          a = -a;
          b = '-';
        }
        return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
      },
      z: function z() {
        return this.zoneAbbr();
      },
      zz: function zz() {
        return this.zoneName();
      },
      x: function x() {
        return this.valueOf();
      },
      X: function X() {
        return this.unix();
      },
      Q: function Q() {
        return this.quarter();
      }
    },
    deprecations = {},
    lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'],
    updateInProgress = false;

  // Pick the first defined of two or three arguments. dfl comes from
  // default.
  function dfl(a, b, c) {
    switch (arguments.length) {
      case 2:
        return a != null ? a : b;
      case 3:
        return a != null ? a : b != null ? b : c;
      default:
        throw new Error('Implement me');
    }
  }
  function hasOwnProp(a, b) {
    return hasOwnProperty.call(a, b);
  }
  function defaultParsingFlags() {
    // We need to deep clone this object, and es5 standard is not very
    // helpful.
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false
    };
  }
  function printMsg(msg) {
    if (moment.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
      console.warn('Deprecation warning: ' + msg);
    }
  }
  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function () {
      if (firstTime) {
        printMsg(msg);
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }
  function deprecateSimple(name, msg) {
    if (!deprecations[name]) {
      printMsg(msg);
      deprecations[name] = true;
    }
  }
  function padToken(func, count) {
    return function (a) {
      return leftZeroFill(func.call(this, a), count);
    };
  }
  function ordinalizeToken(func, period) {
    return function (a) {
      return this.localeData().ordinal(func.call(this, a), period);
    };
  }
  function monthDiff(a, b) {
    // difference in months
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
      // b is in (anchor - 1 month, anchor + 1 month)
      anchor = a.clone().add(wholeMonthDiff, 'months'),
      anchor2,
      adjust;
    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
      // linear across the month
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
      // linear across the month
      adjust = (b - anchor) / (anchor2 - anchor);
    }
    return -(wholeMonthDiff + adjust);
  }
  while (ordinalizeTokens.length) {
    i = ordinalizeTokens.pop();
    formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
  }
  while (paddedTokens.length) {
    i = paddedTokens.pop();
    formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
  }
  formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);
  function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;
    if (meridiem == null) {
      // nothing to do
      return hour;
    }
    if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
      // Fallback
      isPm = locale.isPM(meridiem);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    } else {
      // thie is not supposed to happen
      return hour;
    }
  }

  /************************************
      Constructors
  ************************************/

  function Locale() {}

  // Moment prototype object
  function Moment(config, skipOverflow) {
    if (skipOverflow !== false) {
      checkOverflow(config);
    }
    copyConfig(this, config);
    this._d = new Date(+config._d);
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
      updateInProgress = true;
      moment.updateOffset(this);
      updateInProgress = false;
    }
  }

  // Duration Constructor
  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration),
      years = normalizedInput.year || 0,
      quarters = normalizedInput.quarter || 0,
      months = normalizedInput.month || 0,
      weeks = normalizedInput.week || 0,
      days = normalizedInput.day || 0,
      hours = normalizedInput.hour || 0,
      minutes = normalizedInput.minute || 0,
      seconds = normalizedInput.second || 0,
      milliseconds = normalizedInput.millisecond || 0;

    // representation for dateAddRemove
    this._milliseconds = +milliseconds + seconds * 1e3 +
    // 1000
    minutes * 6e4 +
    // 1000 * 60
    hours * 36e5; // 1000 * 60 * 60
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days + weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months + quarters * 3 + years * 12;
    this._data = {};
    this._locale = moment.localeData();
    this._bubble();
  }

  /************************************
      Helpers
  ************************************/

  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }
    if (hasOwnProp(b, 'toString')) {
      a.toString = b.toString;
    }
    if (hasOwnProp(b, 'valueOf')) {
      a.valueOf = b.valueOf;
    }
    return a;
  }
  function copyConfig(to, from) {
    var i, prop, val;
    if (typeof from._isAMomentObject !== 'undefined') {
      to._isAMomentObject = from._isAMomentObject;
    }
    if (typeof from._i !== 'undefined') {
      to._i = from._i;
    }
    if (typeof from._f !== 'undefined') {
      to._f = from._f;
    }
    if (typeof from._l !== 'undefined') {
      to._l = from._l;
    }
    if (typeof from._strict !== 'undefined') {
      to._strict = from._strict;
    }
    if (typeof from._tzm !== 'undefined') {
      to._tzm = from._tzm;
    }
    if (typeof from._isUTC !== 'undefined') {
      to._isUTC = from._isUTC;
    }
    if (typeof from._offset !== 'undefined') {
      to._offset = from._offset;
    }
    if (typeof from._pf !== 'undefined') {
      to._pf = from._pf;
    }
    if (typeof from._locale !== 'undefined') {
      to._locale = from._locale;
    }
    if (momentProperties.length > 0) {
      for (i in momentProperties) {
        prop = momentProperties[i];
        val = from[prop];
        if (typeof val !== 'undefined') {
          to[prop] = val;
        }
      }
    }
    return to;
  }
  function absRound(number) {
    if (number < 0) {
      return Math.ceil(number);
    } else {
      return Math.floor(number);
    }
  }

  // left zero fill a number
  // see http://jsperf.com/left-zero-filling for performance comparison
  function leftZeroFill(number, targetLength, forceSign) {
    var output = '' + Math.abs(number),
      sign = number >= 0;
    while (output.length < targetLength) {
      output = '0' + output;
    }
    return (sign ? forceSign ? '+' : '' : '-') + output;
  }
  function positiveMomentsDifference(base, other) {
    var res = {
      milliseconds: 0,
      months: 0
    };
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
      --res.months;
    }
    res.milliseconds = +other - +base.clone().add(res.months, 'M');
    return res;
  }
  function momentsDifference(base, other) {
    var res;
    other = makeAs(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }
    return res;
  }

  // TODO: remove 'name' arg after deprecation is removed
  function createAdder(direction, name) {
    return function (val, period) {
      var dur, tmp;
      //invert the arguments, but complain about it
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
        tmp = val;
        val = period;
        period = tmp;
      }
      val = typeof val === 'string' ? +val : val;
      dur = moment.duration(val, period);
      addOrSubtractDurationFromMoment(this, dur, direction);
      return this;
    };
  }
  function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
      days = duration._days,
      months = duration._months;
    updateOffset = updateOffset == null ? true : updateOffset;
    if (milliseconds) {
      mom._d.setTime(+mom._d + milliseconds * isAdding);
    }
    if (days) {
      rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
    }
    if (months) {
      rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
      moment.updateOffset(mom, days || months);
    }
  }

  // check if is an array
  function isArray(input) {
    return Object.prototype.toString.call(input) === '[object Array]';
  }
  function isDate(input) {
    return Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;
  }

  // compare two arrays, return the number of differences
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
      lengthDiff = Math.abs(array1.length - array2.length),
      diffs = 0,
      i;
    for (i = 0; i < len; i++) {
      if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }
  function normalizeUnits(units) {
    if (units) {
      var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
      units = unitAliases[units] || camelFunctions[lowered] || lowered;
    }
    return units;
  }
  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
      normalizedProp,
      prop;
    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }
    return normalizedInput;
  }
  function makeList(field) {
    var count, setter;
    if (field.indexOf('week') === 0) {
      count = 7;
      setter = 'day';
    } else if (field.indexOf('month') === 0) {
      count = 12;
      setter = 'month';
    } else {
      return;
    }
    moment[field] = function (format, index) {
      var i,
        getter,
        method = moment._locale[field],
        results = [];
      if (typeof format === 'number') {
        index = format;
        format = undefined;
      }
      getter = function getter(i) {
        var m = moment().utc().set(setter, i);
        return method.call(moment._locale, m, format || '');
      };
      if (index != null) {
        return getter(index);
      } else {
        for (i = 0; i < count; i++) {
          results.push(getter(i));
        }
        return results;
      }
    };
  }
  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
      value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      if (coercedNumber >= 0) {
        value = Math.floor(coercedNumber);
      } else {
        value = Math.ceil(coercedNumber);
      }
    }
    return value;
  }
  function _daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  }
  function _weeksInYear(year, dow, doy) {
    return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
  }
  function daysInYear(year) {
    return _isLeapYear(year) ? 366 : 365;
  }
  function _isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }
  function checkOverflow(m) {
    var overflow;
    if (m._a && m._pf.overflow === -2) {
      overflow = m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH : m._a[DATE] < 1 || m._a[DATE] > _daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE : m._a[HOUR] < 0 || m._a[HOUR] > 24 || m._a[HOUR] === 24 && (m._a[MINUTE] !== 0 || m._a[SECOND] !== 0 || m._a[MILLISECOND] !== 0) ? HOUR : m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE : m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND : m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND : -1;
      if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }
      m._pf.overflow = overflow;
    }
  }
  function _isValid(m) {
    if (m._isValid == null) {
      m._isValid = !isNaN(m._d.getTime()) && m._pf.overflow < 0 && !m._pf.empty && !m._pf.invalidMonth && !m._pf.nullInput && !m._pf.invalidFormat && !m._pf.userInvalidated;
      if (m._strict) {
        m._isValid = m._isValid && m._pf.charsLeftOver === 0 && m._pf.unusedTokens.length === 0 && m._pf.bigHour === undefined;
      }
    }
    return m._isValid;
  }
  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
  }

  // pick the locale from the array
  // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
  // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
  function chooseLocale(names) {
    var i = 0,
      j,
      next,
      locale,
      split;
    while (i < names.length) {
      split = normalizeLocale(names[i]).split('-');
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split('-') : null;
      while (j > 0) {
        locale = loadLocale(split.slice(0, j).join('-'));
        if (locale) {
          return locale;
        }
        if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
          //the next array item is better than a shallower substring of this one
          break;
        }
        j--;
      }
      i++;
    }
    return null;
  }
  function loadLocale(name) {
    var oldLocale = null;
    if (!locales[name] && hasModule) {
      try {
        oldLocale = moment.locale();
        __webpack_require__("./assets/js/ezadmin/lib/bootstrap-table/locale sync recursive ^\\.\\/.*$")("./" + name);
        // because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
        moment.locale(oldLocale);
      } catch (e) {}
    }
    return locales[name];
  }

  // Return a moment from input, that is local/utc/utcOffset equivalent to
  // model.
  function makeAs(input, model) {
    var res, diff;
    if (model._isUTC) {
      res = model.clone();
      diff = (moment.isMoment(input) || isDate(input) ? +input : +moment(input)) - +res;
      // Use low-level api, because this fn is low-level api.
      res._d.setTime(+res._d + diff);
      moment.updateOffset(res, false);
      return res;
    } else {
      return moment(input).local();
    }
  }

  /************************************
      Locale
  ************************************/

  extend(Locale.prototype, {
    set: function set(config) {
      var prop, i;
      for (i in config) {
        prop = config[i];
        if (typeof prop === 'function') {
          this[i] = prop;
        } else {
          this['_' + i] = prop;
        }
      }
      // Lenient ordinal parsing accepts just a number in addition to
      // number + (possibly) stuff coming from _ordinalParseLenient.
      this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);
    },
    _months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    months: function months(m) {
      return this._months[m.month()];
    },
    _monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    monthsShort: function monthsShort(m) {
      return this._monthsShort[m.month()];
    },
    monthsParse: function monthsParse(monthName, format, strict) {
      var i, mom, regex;
      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
      }
      for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = moment.utc([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
          this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
          this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
          regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
          this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
          return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
          return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
          return i;
        }
      }
    },
    _weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdays: function weekdays(m) {
      return this._weekdays[m.day()];
    },
    _weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysShort: function weekdaysShort(m) {
      return this._weekdaysShort[m.day()];
    },
    _weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    weekdaysMin: function weekdaysMin(m) {
      return this._weekdaysMin[m.day()];
    },
    weekdaysParse: function weekdaysParse(weekdayName) {
      var i, mom, regex;
      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
      }
      for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        if (!this._weekdaysParse[i]) {
          mom = moment([2000, 1]).day(i);
          regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
          this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (this._weekdaysParse[i].test(weekdayName)) {
          return i;
        }
      }
    },
    _longDateFormat: {
      LTS: 'h:mm:ss A',
      LT: 'h:mm A',
      L: 'MM/DD/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY LT',
      LLLL: 'dddd, MMMM D, YYYY LT'
    },
    longDateFormat: function longDateFormat(key) {
      var output = this._longDateFormat[key];
      if (!output && this._longDateFormat[key.toUpperCase()]) {
        output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
          return val.slice(1);
        });
        this._longDateFormat[key] = output;
      }
      return output;
    },
    isPM: function isPM(input) {
      // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
      // Using charAt should be more compatible.
      return (input + '').toLowerCase().charAt(0) === 'p';
    },
    _meridiemParse: /[ap]\.?m?\.?/i,
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'pm' : 'PM';
      } else {
        return isLower ? 'am' : 'AM';
      }
    },
    _calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    },
    calendar: function calendar(key, mom, now) {
      var output = this._calendar[key];
      return typeof output === 'function' ? output.apply(mom, [now]) : output;
    },
    _relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    relativeTime: function relativeTime(number, withoutSuffix, string, isFuture) {
      var output = this._relativeTime[string];
      return typeof output === 'function' ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    },
    pastFuture: function pastFuture(diff, output) {
      var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
      return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
    },
    ordinal: function ordinal(number) {
      return this._ordinal.replace('%d', number);
    },
    _ordinal: '%d',
    _ordinalParse: /\d{1,2}/,
    preparse: function preparse(string) {
      return string;
    },
    postformat: function postformat(string) {
      return string;
    },
    week: function week(mom) {
      return weekOfYear(mom, this._week.dow, this._week.doy).week;
    },
    _week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 1st is the first week of the year.
    },

    firstDayOfWeek: function firstDayOfWeek() {
      return this._week.dow;
    },
    firstDayOfYear: function firstDayOfYear() {
      return this._week.doy;
    },
    _invalidDate: 'Invalid date',
    invalidDate: function invalidDate() {
      return this._invalidDate;
    }
  });

  /************************************
      Formatting
  ************************************/

  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
  }
  function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
      i,
      length;
    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }
    return function (mom) {
      var output = '';
      for (i = 0; i < length; i++) {
        output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
      }
      return output;
    };
  }

  // format date using native date object
  function formatMoment(m, format) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }
    format = expandFormat(format, m.localeData());
    if (!formatFunctions[format]) {
      formatFunctions[format] = makeFormatFunction(format);
    }
    return formatFunctions[format](m);
  }
  function expandFormat(format, locale) {
    var i = 5;
    function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
    }
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }
    return format;
  }

  /************************************
      Parsing
  ************************************/

  // get the regex to find the next token
  function getParseRegexForToken(token, config) {
    var a,
      strict = config._strict;
    switch (token) {
      case 'Q':
        return parseTokenOneDigit;
      case 'DDDD':
        return parseTokenThreeDigits;
      case 'YYYY':
      case 'GGGG':
      case 'gggg':
        return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
      case 'Y':
      case 'G':
      case 'g':
        return parseTokenSignedNumber;
      case 'YYYYYY':
      case 'YYYYY':
      case 'GGGGG':
      case 'ggggg':
        return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
      case 'S':
        if (strict) {
          return parseTokenOneDigit;
        }
      /* falls through */
      case 'SS':
        if (strict) {
          return parseTokenTwoDigits;
        }
      /* falls through */
      case 'SSS':
        if (strict) {
          return parseTokenThreeDigits;
        }
      /* falls through */
      case 'DDD':
        return parseTokenOneToThreeDigits;
      case 'MMM':
      case 'MMMM':
      case 'dd':
      case 'ddd':
      case 'dddd':
        return parseTokenWord;
      case 'a':
      case 'A':
        return config._locale._meridiemParse;
      case 'x':
        return parseTokenOffsetMs;
      case 'X':
        return parseTokenTimestampMs;
      case 'Z':
      case 'ZZ':
        return parseTokenTimezone;
      case 'T':
        return parseTokenT;
      case 'SSSS':
        return parseTokenDigits;
      case 'MM':
      case 'DD':
      case 'YY':
      case 'GG':
      case 'gg':
      case 'HH':
      case 'hh':
      case 'mm':
      case 'ss':
      case 'ww':
      case 'WW':
        return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
      case 'M':
      case 'D':
      case 'd':
      case 'H':
      case 'h':
      case 'm':
      case 's':
      case 'w':
      case 'W':
      case 'e':
      case 'E':
        return parseTokenOneOrTwoDigits;
      case 'Do':
        return strict ? config._locale._ordinalParse : config._locale._ordinalParseLenient;
      default:
        a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
        return a;
    }
  }
  function utcOffsetFromString(string) {
    string = string || '';
    var possibleTzMatches = string.match(parseTokenTimezone) || [],
      tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
      parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
      minutes = +(parts[1] * 60) + toInt(parts[2]);
    return parts[0] === '+' ? minutes : -minutes;
  }

  // function to convert string input to date
  function addTimeToArrayFromToken(token, input, config) {
    var a,
      datePartArray = config._a;
    switch (token) {
      // QUARTER
      case 'Q':
        if (input != null) {
          datePartArray[MONTH] = (toInt(input) - 1) * 3;
        }
        break;
      // MONTH
      case 'M': // fall through to MM
      case 'MM':
        if (input != null) {
          datePartArray[MONTH] = toInt(input) - 1;
        }
        break;
      case 'MMM': // fall through to MMMM
      case 'MMMM':
        a = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (a != null) {
          datePartArray[MONTH] = a;
        } else {
          config._pf.invalidMonth = input;
        }
        break;
      // DAY OF MONTH
      case 'D': // fall through to DD
      case 'DD':
        if (input != null) {
          datePartArray[DATE] = toInt(input);
        }
        break;
      case 'Do':
        if (input != null) {
          datePartArray[DATE] = toInt(parseInt(input.match(/\d{1,2}/)[0], 10));
        }
        break;
      // DAY OF YEAR
      case 'DDD': // fall through to DDDD
      case 'DDDD':
        if (input != null) {
          config._dayOfYear = toInt(input);
        }
        break;
      // YEAR
      case 'YY':
        datePartArray[YEAR] = moment.parseTwoDigitYear(input);
        break;
      case 'YYYY':
      case 'YYYYY':
      case 'YYYYYY':
        datePartArray[YEAR] = toInt(input);
        break;
      // AM / PM
      case 'a': // fall through to A
      case 'A':
        config._meridiem = input;
        // config._isPm = config._locale.isPM(input);
        break;
      // HOUR
      case 'h': // fall through to hh
      case 'hh':
        config._pf.bigHour = true;
      /* falls through */
      case 'H': // fall through to HH
      case 'HH':
        datePartArray[HOUR] = toInt(input);
        break;
      // MINUTE
      case 'm': // fall through to mm
      case 'mm':
        datePartArray[MINUTE] = toInt(input);
        break;
      // SECOND
      case 's': // fall through to ss
      case 'ss':
        datePartArray[SECOND] = toInt(input);
        break;
      // MILLISECOND
      case 'S':
      case 'SS':
      case 'SSS':
      case 'SSSS':
        datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
        break;
      // UNIX OFFSET (MILLISECONDS)
      case 'x':
        config._d = new Date(toInt(input));
        break;
      // UNIX TIMESTAMP WITH MS
      case 'X':
        config._d = new Date(parseFloat(input) * 1000);
        break;
      // TIMEZONE
      case 'Z': // fall through to ZZ
      case 'ZZ':
        config._useUTC = true;
        config._tzm = utcOffsetFromString(input);
        break;
      // WEEKDAY - human
      case 'dd':
      case 'ddd':
      case 'dddd':
        a = config._locale.weekdaysParse(input);
        // if we didn't get a weekday name, mark the date as invalid
        if (a != null) {
          config._w = config._w || {};
          config._w['d'] = a;
        } else {
          config._pf.invalidWeekday = input;
        }
        break;
      // WEEK, WEEK DAY - numeric
      case 'w':
      case 'ww':
      case 'W':
      case 'WW':
      case 'd':
      case 'e':
      case 'E':
        token = token.substr(0, 1);
      /* falls through */
      case 'gggg':
      case 'GGGG':
      case 'GGGGG':
        token = token.substr(0, 2);
        if (input) {
          config._w = config._w || {};
          config._w[token] = toInt(input);
        }
        break;
      case 'gg':
      case 'GG':
        config._w = config._w || {};
        config._w[token] = moment.parseTwoDigitYear(input);
    }
  }
  function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;

      // TODO: We need to take the current isoWeekYear, but that depends on
      // how we interpret now (local, utc, fixed offset). So create
      // a now version of current config (take local/utc/offset flags, and
      // create now).
      weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
      week = dfl(w.W, 1);
      weekday = dfl(w.E, 1);
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
      week = dfl(w.w, 1);
      if (w.d != null) {
        // weekday -- low day numbers are considered next week
        weekday = w.d;
        if (weekday < dow) {
          ++week;
        }
      } else if (w.e != null) {
        // local weekday -- counting starts from begining of week
        weekday = w.e + dow;
      } else {
        // default to begining of week
        weekday = dow;
      }
    }
    temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);
    config._a[YEAR] = temp.year;
    config._dayOfYear = temp.dayOfYear;
  }

  // convert an array to a date.
  // the array should mirror the parameters below
  // note: all values past the year are optional and will default to the lowest possible value.
  // [year, month, day , hour, minute, second, millisecond]
  function dateFromConfig(config) {
    var i,
      date,
      input = [],
      currentDate,
      yearToUse;
    if (config._d) {
      return;
    }
    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear) {
      yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);
      if (config._dayOfYear > daysInYear(yearToUse)) {
        config._pf._overflowDayOfYear = true;
      }
      date = makeUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
      config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
      config._a[HOUR] = 24;
    }
  }
  function dateFromObject(config) {
    var normalizedInput;
    if (config._d) {
      return;
    }
    normalizedInput = normalizeObjectUnits(config._i);
    config._a = [normalizedInput.year, normalizedInput.month, normalizedInput.day || normalizedInput.date, normalizedInput.hour, normalizedInput.minute, normalizedInput.second, normalizedInput.millisecond];
    dateFromConfig(config);
  }
  function currentDateArray(config) {
    var now = new Date();
    if (config._useUTC) {
      return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()];
    } else {
      return [now.getFullYear(), now.getMonth(), now.getDate()];
    }
  }

  // date from string and format string
  function makeDateFromStringAndFormat(config) {
    if (config._f === moment.ISO_8601) {
      parseISO(config);
      return;
    }
    config._a = [];
    config._pf.empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
      i,
      parsedInput,
      tokens,
      token,
      skipped,
      stringLength = string.length,
      totalParsedInputLength = 0;
    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0) {
          config._pf.unusedInput.push(skipped);
        }
        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        totalParsedInputLength += parsedInput.length;
      }
      // don't parse if it's not a known token
      if (formatTokenFunctions[token]) {
        if (parsedInput) {
          config._pf.empty = false;
        } else {
          config._pf.unusedTokens.push(token);
        }
        addTimeToArrayFromToken(token, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        config._pf.unusedTokens.push(token);
      }
    }

    // add remaining unparsed input length to the string
    config._pf.charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
      config._pf.unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._pf.bigHour === true && config._a[HOUR] <= 12) {
      config._pf.bigHour = undefined;
    }
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
    dateFromConfig(config);
    checkOverflow(config);
  }
  function unescapeFormat(s) {
    return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
      return p1 || p2 || p3 || p4;
    });
  }

  // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
  function regexpEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  // date from string and array of format strings
  function makeDateFromStringAndArray(config) {
    var tempConfig, bestMoment, scoreToBeat, i, currentScore;
    if (config._f.length === 0) {
      config._pf.invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }
    for (i = 0; i < config._f.length; i++) {
      currentScore = 0;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._pf = defaultParsingFlags();
      tempConfig._f = config._f[i];
      makeDateFromStringAndFormat(tempConfig);
      if (!_isValid(tempConfig)) {
        continue;
      }

      // if there is any input that was not parsed add a penalty for that format
      currentScore += tempConfig._pf.charsLeftOver;

      //or tokens
      currentScore += tempConfig._pf.unusedTokens.length * 10;
      tempConfig._pf.score = currentScore;
      if (scoreToBeat == null || currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }
    extend(config, bestMoment || tempConfig);
  }

  // date from iso format
  function parseISO(config) {
    var i,
      l,
      string = config._i,
      match = isoRegex.exec(string);
    if (match) {
      config._pf.iso = true;
      for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(string)) {
          // match[5] should be 'T' or undefined
          config._f = isoDates[i][0] + (match[6] || ' ');
          break;
        }
      }
      for (i = 0, l = isoTimes.length; i < l; i++) {
        if (isoTimes[i][1].exec(string)) {
          config._f += isoTimes[i][0];
          break;
        }
      }
      if (string.match(parseTokenTimezone)) {
        config._f += 'Z';
      }
      makeDateFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }

  // date from iso format or fallback
  function makeDateFromString(config) {
    parseISO(config);
    if (config._isValid === false) {
      delete config._isValid;
      moment.createFromInputFallback(config);
    }
  }
  function map(arr, fn) {
    var res = [],
      i;
    for (i = 0; i < arr.length; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }
  function makeDateFromInput(config) {
    var input = config._i,
      matched;
    if (input === undefined) {
      config._d = new Date();
    } else if (isDate(input)) {
      config._d = new Date(+input);
    } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
      config._d = new Date(+matched[1]);
    } else if (typeof input === 'string') {
      makeDateFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function (obj) {
        return parseInt(obj, 10);
      });
      dateFromConfig(config);
    } else if (_typeof(input) === 'object') {
      dateFromObject(config);
    } else if (typeof input === 'number') {
      // from milliseconds
      config._d = new Date(input);
    } else {
      moment.createFromInputFallback(config);
    }
  }
  function makeDate(y, m, d, h, M, s, ms) {
    //can't just apply() to create a date:
    //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
    var date = new Date(y, m, d, h, M, s, ms);

    //the date constructor doesn't accept years < 1970
    if (y < 1970) {
      date.setFullYear(y);
    }
    return date;
  }
  function makeUTCDate(y) {
    var date = new Date(Date.UTC.apply(null, arguments));
    if (y < 1970) {
      date.setUTCFullYear(y);
    }
    return date;
  }
  function parseWeekday(input, locale) {
    if (typeof input === 'string') {
      if (!isNaN(input)) {
        input = parseInt(input, 10);
      } else {
        input = locale.weekdaysParse(input);
        if (typeof input !== 'number') {
          return null;
        }
      }
    }
    return input;
  }

  /************************************
      Relative Time
  ************************************/

  // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }
  function relativeTime(posNegDuration, withoutSuffix, locale) {
    var duration = moment.duration(posNegDuration).abs(),
      seconds = round(duration.as('s')),
      minutes = round(duration.as('m')),
      hours = round(duration.as('h')),
      days = round(duration.as('d')),
      months = round(duration.as('M')),
      years = round(duration.as('y')),
      args = seconds < relativeTimeThresholds.s && ['s', seconds] || minutes === 1 && ['m'] || minutes < relativeTimeThresholds.m && ['mm', minutes] || hours === 1 && ['h'] || hours < relativeTimeThresholds.h && ['hh', hours] || days === 1 && ['d'] || days < relativeTimeThresholds.d && ['dd', days] || months === 1 && ['M'] || months < relativeTimeThresholds.M && ['MM', months] || years === 1 && ['y'] || ['yy', years];
    args[2] = withoutSuffix;
    args[3] = +posNegDuration > 0;
    args[4] = locale;
    return substituteTimeAgo.apply({}, args);
  }

  /************************************
      Week of Year
  ************************************/

  // firstDayOfWeek       0 = sun, 6 = sat
  //                      the day of the week that starts the week
  //                      (usually sunday or monday)
  // firstDayOfWeekOfYear 0 = sun, 6 = sat
  //                      the first week is the week that contains the first
  //                      of this day of the week
  //                      (eg. ISO weeks use thursday (4))
  function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
    var end = firstDayOfWeekOfYear - firstDayOfWeek,
      daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
      adjustedMoment;
    if (daysToDayOfWeek > end) {
      daysToDayOfWeek -= 7;
    }
    if (daysToDayOfWeek < end - 7) {
      daysToDayOfWeek += 7;
    }
    adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
    return {
      week: Math.ceil(adjustedMoment.dayOfYear() / 7),
      year: adjustedMoment.year()
    };
  }

  //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
  function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
    var d = makeUTCDate(year, 0, 1).getUTCDay(),
      daysToAdd,
      dayOfYear;
    d = d === 0 ? 7 : d;
    weekday = weekday != null ? weekday : firstDayOfWeek;
    daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
    dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;
    return {
      year: dayOfYear > 0 ? year : year - 1,
      dayOfYear: dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear
    };
  }

  /************************************
      Top Level Functions
  ************************************/

  function makeMoment(config) {
    var input = config._i,
      format = config._f,
      res;
    config._locale = config._locale || moment.localeData(config._l);
    if (input === null || format === undefined && input === '') {
      return moment.invalid({
        nullInput: true
      });
    }
    if (typeof input === 'string') {
      config._i = input = config._locale.preparse(input);
    }
    if (moment.isMoment(input)) {
      return new Moment(input, true);
    } else if (format) {
      if (isArray(format)) {
        makeDateFromStringAndArray(config);
      } else {
        makeDateFromStringAndFormat(config);
      }
    } else {
      makeDateFromInput(config);
    }
    res = new Moment(config);
    if (res._nextDay) {
      // Adding is smart enough around DST
      res.add(1, 'd');
      res._nextDay = undefined;
    }
    return res;
  }
  moment = function moment(input, format, locale, strict) {
    var c;
    if (typeof locale === 'boolean') {
      strict = locale;
      locale = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c = {};
    c._isAMomentObject = true;
    c._i = input;
    c._f = format;
    c._l = locale;
    c._strict = strict;
    c._isUTC = false;
    c._pf = defaultParsingFlags();
    return makeMoment(c);
  };
  moment.suppressDeprecationWarnings = false;
  moment.createFromInputFallback = deprecate('moment construction falls back to js Date. This is ' + 'discouraged and will be removed in upcoming major ' + 'release. Please refer to ' + 'https://github.com/moment/moment/issues/1407 for more info.', function (config) {
    config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
  });

  // Pick a moment m from moments so that m[fn](other) is true for all
  // other. This relies on the function fn to be transitive.
  //
  // moments should either be an array of moment objects or an array, whose
  // first element is an array of moment objects.
  function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return moment();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }
  moment.min = function () {
    var args = [].slice.call(arguments, 0);
    return pickBy('isBefore', args);
  };
  moment.max = function () {
    var args = [].slice.call(arguments, 0);
    return pickBy('isAfter', args);
  };

  // creating with utc
  moment.utc = function (input, format, locale, strict) {
    var c;
    if (typeof locale === 'boolean') {
      strict = locale;
      locale = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c = {};
    c._isAMomentObject = true;
    c._useUTC = true;
    c._isUTC = true;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;
    c._pf = defaultParsingFlags();
    return makeMoment(c).utc();
  };

  // creating with unix timestamp (in seconds)
  moment.unix = function (input) {
    return moment(input * 1000);
  };

  // duration
  moment.duration = function (input, key) {
    var duration = input,
      // matching against regexp is expensive, do it on demand
      match = null,
      sign,
      ret,
      parseIso,
      diffRes;
    if (moment.isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months
      };
    } else if (typeof input === 'number') {
      duration = {};
      if (key) {
        duration[key] = input;
      } else {
        duration.milliseconds = input;
      }
    } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
      sign = match[1] === '-' ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign,
        h: toInt(match[HOUR]) * sign,
        m: toInt(match[MINUTE]) * sign,
        s: toInt(match[SECOND]) * sign,
        ms: toInt(match[MILLISECOND]) * sign
      };
    } else if (!!(match = isoDurationRegex.exec(input))) {
      sign = match[1] === '-' ? -1 : 1;
      parseIso = function parseIso(inp) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
      };
      duration = {
        y: parseIso(match[2]),
        M: parseIso(match[3]),
        d: parseIso(match[4]),
        h: parseIso(match[5]),
        m: parseIso(match[6]),
        s: parseIso(match[7]),
        w: parseIso(match[8])
      };
    } else if (duration == null) {
      // checks for null or undefined
      duration = {};
    } else if (_typeof(duration) === 'object' && ('from' in duration || 'to' in duration)) {
      diffRes = momentsDifference(moment(duration.from), moment(duration.to));
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }
    ret = new Duration(duration);
    if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
      ret._locale = input._locale;
    }
    return ret;
  };

  // version number
  moment.version = VERSION;

  // default format
  moment.defaultFormat = isoFormat;

  // constant that refers to the ISO standard
  moment.ISO_8601 = function () {};

  // Plugins that add properties should also add the key here (null value),
  // so we can properly clone ourselves.
  moment.momentProperties = momentProperties;

  // This function will be called whenever a moment is mutated.
  // It is intended to keep the offset in sync with the timezone.
  moment.updateOffset = function () {};

  // This function allows you to set a threshold for relative time strings
  moment.relativeTimeThreshold = function (threshold, limit) {
    if (relativeTimeThresholds[threshold] === undefined) {
      return false;
    }
    if (limit === undefined) {
      return relativeTimeThresholds[threshold];
    }
    relativeTimeThresholds[threshold] = limit;
    return true;
  };
  moment.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', function (key, value) {
    return moment.locale(key, value);
  });

  // This function will load locale and then set the global locale.  If
  // no arguments are passed in, it will simply return the current global
  // locale key.
  moment.locale = function (key, values) {
    var data;
    if (key) {
      if (typeof values !== 'undefined') {
        data = moment.defineLocale(key, values);
      } else {
        data = moment.localeData(key);
      }
      if (data) {
        moment.duration._locale = moment._locale = data;
      }
    }
    return moment._locale._abbr;
  };
  moment.defineLocale = function (name, values) {
    if (values !== null) {
      values.abbr = name;
      if (!locales[name]) {
        locales[name] = new Locale();
      }
      locales[name].set(values);

      // backwards compat for now: also set the locale
      moment.locale(name);
      return locales[name];
    } else {
      // useful for testing
      delete locales[name];
      return null;
    }
  };
  moment.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', function (key) {
    return moment.localeData(key);
  });

  // returns locale data
  moment.localeData = function (key) {
    var locale;
    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }
    if (!key) {
      return moment._locale;
    }
    if (!isArray(key)) {
      //short-circuit everything else
      locale = loadLocale(key);
      if (locale) {
        return locale;
      }
      key = [key];
    }
    return chooseLocale(key);
  };

  // compare moment object
  moment.isMoment = function (obj) {
    return obj instanceof Moment || obj != null && hasOwnProp(obj, '_isAMomentObject');
  };

  // for typechecking Duration objects
  moment.isDuration = function (obj) {
    return obj instanceof Duration;
  };
  for (i = lists.length - 1; i >= 0; --i) {
    makeList(lists[i]);
  }
  moment.normalizeUnits = function (units) {
    return normalizeUnits(units);
  };
  moment.invalid = function (flags) {
    var m = moment.utc(NaN);
    if (flags != null) {
      extend(m._pf, flags);
    } else {
      m._pf.userInvalidated = true;
    }
    return m;
  };
  moment.parseZone = function () {
    return moment.apply(null, arguments).parseZone();
  };
  moment.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  };
  moment.isDate = isDate;

  /************************************
      Moment Prototype
  ************************************/

  extend(moment.fn = Moment.prototype, {
    clone: function clone() {
      return moment(this);
    },
    valueOf: function valueOf() {
      return +this._d - (this._offset || 0) * 60000;
    },
    unix: function unix() {
      return Math.floor(+this / 1000);
    },
    toString: function toString() {
      return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    },
    toDate: function toDate() {
      return this._offset ? new Date(+this) : this._d;
    },
    toISOString: function toISOString() {
      var m = moment(this).utc();
      if (0 < m.year() && m.year() <= 9999) {
        if ('function' === typeof Date.prototype.toISOString) {
          // native implementation is ~50x faster, use it when we can
          return this.toDate().toISOString();
        } else {
          return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
      } else {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
      }
    },
    toArray: function toArray() {
      var m = this;
      return [m.year(), m.month(), m.date(), m.hours(), m.minutes(), m.seconds(), m.milliseconds()];
    },
    isValid: function isValid() {
      return _isValid(this);
    },
    isDSTShifted: function isDSTShifted() {
      if (this._a) {
        return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
      }
      return false;
    },
    parsingFlags: function parsingFlags() {
      return extend({}, this._pf);
    },
    invalidAt: function invalidAt() {
      return this._pf.overflow;
    },
    utc: function utc(keepLocalTime) {
      return this.utcOffset(0, keepLocalTime);
    },
    local: function local(keepLocalTime) {
      if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;
        if (keepLocalTime) {
          this.subtract(this._dateUtcOffset(), 'm');
        }
      }
      return this;
    },
    format: function format(inputString) {
      var output = formatMoment(this, inputString || moment.defaultFormat);
      return this.localeData().postformat(output);
    },
    add: createAdder(1, 'add'),
    subtract: createAdder(-1, 'subtract'),
    diff: function diff(input, units, asFloat) {
      var that = makeAs(input, this),
        zoneDiff = (that.utcOffset() - this.utcOffset()) * 6e4,
        anchor,
        diff,
        output,
        daysAdjust;
      units = normalizeUnits(units);
      if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
          output = output / 3;
        } else if (units === 'year') {
          output = output / 12;
        }
      } else {
        diff = this - that;
        output = units === 'second' ? diff / 1e3 :
        // 1000
        units === 'minute' ? diff / 6e4 :
        // 1000 * 60
        units === 'hour' ? diff / 36e5 :
        // 1000 * 60 * 60
        units === 'day' ? (diff - zoneDiff) / 864e5 :
        // 1000 * 60 * 60 * 24, negate dst
        units === 'week' ? (diff - zoneDiff) / 6048e5 :
        // 1000 * 60 * 60 * 24 * 7, negate dst
        diff;
      }
      return asFloat ? output : absRound(output);
    },
    from: function from(time, withoutSuffix) {
      return moment.duration({
        to: this,
        from: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    },
    fromNow: function fromNow(withoutSuffix) {
      return this.from(moment(), withoutSuffix);
    },
    calendar: function calendar(time) {
      // We want to compare the start of today, vs this.
      // Getting start-of-today depends on whether we're locat/utc/offset
      // or not.
      var now = time || moment(),
        sod = makeAs(now, this).startOf('day'),
        diff = this.diff(sod, 'days', true),
        format = diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
      return this.format(this.localeData().calendar(format, this, moment(now)));
    },
    isLeapYear: function isLeapYear() {
      return _isLeapYear(this.year());
    },
    isDST: function isDST() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    },
    day: function day(input) {
      var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
      } else {
        return day;
      }
    },
    month: makeAccessor('Month', true),
    startOf: function startOf(units) {
      units = normalizeUnits(units);
      // the following switch intentionally omits break keywords
      // to utilize falling through the cases.
      switch (units) {
        case 'year':
          this.month(0);
        /* falls through */
        case 'quarter':
        case 'month':
          this.date(1);
        /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
          this.hours(0);
        /* falls through */
        case 'hour':
          this.minutes(0);
        /* falls through */
        case 'minute':
          this.seconds(0);
        /* falls through */
        case 'second':
          this.milliseconds(0);
        /* falls through */
      }

      // weeks are a special case
      if (units === 'week') {
        this.weekday(0);
      } else if (units === 'isoWeek') {
        this.isoWeekday(1);
      }

      // quarters are also special
      if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
      }
      return this;
    },
    endOf: function endOf(units) {
      units = normalizeUnits(units);
      if (units === undefined || units === 'millisecond') {
        return this;
      }
      return this.startOf(units).add(1, units === 'isoWeek' ? 'week' : units).subtract(1, 'ms');
    },
    isAfter: function isAfter(input, units) {
      var inputMs;
      units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
      if (units === 'millisecond') {
        input = moment.isMoment(input) ? input : moment(input);
        return +this > +input;
      } else {
        inputMs = moment.isMoment(input) ? +input : +moment(input);
        return inputMs < +this.clone().startOf(units);
      }
    },
    isBefore: function isBefore(input, units) {
      var inputMs;
      units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
      if (units === 'millisecond') {
        input = moment.isMoment(input) ? input : moment(input);
        return +this < +input;
      } else {
        inputMs = moment.isMoment(input) ? +input : +moment(input);
        return +this.clone().endOf(units) < inputMs;
      }
    },
    isBetween: function isBetween(from, to, units) {
      return this.isAfter(from, units) && this.isBefore(to, units);
    },
    isSame: function isSame(input, units) {
      var inputMs;
      units = normalizeUnits(units || 'millisecond');
      if (units === 'millisecond') {
        input = moment.isMoment(input) ? input : moment(input);
        return +this === +input;
      } else {
        inputMs = +moment(input);
        return +this.clone().startOf(units) <= inputMs && inputMs <= +this.clone().endOf(units);
      }
    },
    min: deprecate('moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548', function (other) {
      other = moment.apply(null, arguments);
      return other < this ? this : other;
    }),
    max: deprecate('moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548', function (other) {
      other = moment.apply(null, arguments);
      return other > this ? this : other;
    }),
    zone: deprecate('moment().zone is deprecated, use moment().utcOffset instead. ' + 'https://github.com/moment/moment/issues/1779', function (input, keepLocalTime) {
      if (input != null) {
        if (typeof input !== 'string') {
          input = -input;
        }
        this.utcOffset(input, keepLocalTime);
        return this;
      } else {
        return -this.utcOffset();
      }
    }),
    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    utcOffset: function utcOffset(input, keepLocalTime) {
      var offset = this._offset || 0,
        localAdjust;
      if (input != null) {
        if (typeof input === 'string') {
          input = utcOffsetFromString(input);
        }
        if (Math.abs(input) < 16) {
          input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
          localAdjust = this._dateUtcOffset();
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
          this.add(localAdjust, 'm');
        }
        if (offset !== input) {
          if (!keepLocalTime || this._changeInProgress) {
            addOrSubtractDurationFromMoment(this, moment.duration(input - offset, 'm'), 1, false);
          } else if (!this._changeInProgress) {
            this._changeInProgress = true;
            moment.updateOffset(this, true);
            this._changeInProgress = null;
          }
        }
        return this;
      } else {
        return this._isUTC ? offset : this._dateUtcOffset();
      }
    },
    isLocal: function isLocal() {
      return !this._isUTC;
    },
    isUtcOffset: function isUtcOffset() {
      return this._isUTC;
    },
    isUtc: function isUtc() {
      return this._isUTC && this._offset === 0;
    },
    zoneAbbr: function zoneAbbr() {
      return this._isUTC ? 'UTC' : '';
    },
    zoneName: function zoneName() {
      return this._isUTC ? 'Coordinated Universal Time' : '';
    },
    parseZone: function parseZone() {
      if (this._tzm) {
        this.utcOffset(this._tzm);
      } else if (typeof this._i === 'string') {
        this.utcOffset(utcOffsetFromString(this._i));
      }
      return this;
    },
    hasAlignedHourOffset: function hasAlignedHourOffset(input) {
      if (!input) {
        input = 0;
      } else {
        input = moment(input).utcOffset();
      }
      return (this.utcOffset() - input) % 60 === 0;
    },
    daysInMonth: function daysInMonth() {
      return _daysInMonth(this.year(), this.month());
    },
    dayOfYear: function dayOfYear(input) {
      var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
      return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    },
    quarter: function quarter(input) {
      return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    },
    weekYear: function weekYear(input) {
      var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
      return input == null ? year : this.add(input - year, 'y');
    },
    isoWeekYear: function isoWeekYear(input) {
      var year = weekOfYear(this, 1, 4).year;
      return input == null ? year : this.add(input - year, 'y');
    },
    week: function week(input) {
      var week = this.localeData().week(this);
      return input == null ? week : this.add((input - week) * 7, 'd');
    },
    isoWeek: function isoWeek(input) {
      var week = weekOfYear(this, 1, 4).week;
      return input == null ? week : this.add((input - week) * 7, 'd');
    },
    weekday: function weekday(input) {
      var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return input == null ? weekday : this.add(input - weekday, 'd');
    },
    isoWeekday: function isoWeekday(input) {
      // behaves the same as moment#day except
      // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
      // as a setter, sunday should belong to the previous week.
      return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
    },
    isoWeeksInYear: function isoWeeksInYear() {
      return _weeksInYear(this.year(), 1, 4);
    },
    weeksInYear: function weeksInYear() {
      var weekInfo = this.localeData()._week;
      return _weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    },
    get: function get(units) {
      units = normalizeUnits(units);
      return this[units]();
    },
    set: function set(units, value) {
      var unit;
      if (_typeof(units) === 'object') {
        for (unit in units) {
          this.set(unit, units[unit]);
        }
      } else {
        units = normalizeUnits(units);
        if (typeof this[units] === 'function') {
          this[units](value);
        }
      }
      return this;
    },
    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    locale: function locale(key) {
      var newLocaleData;
      if (key === undefined) {
        return this._locale._abbr;
      } else {
        newLocaleData = moment.localeData(key);
        if (newLocaleData != null) {
          this._locale = newLocaleData;
        }
        return this;
      }
    },
    lang: deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
      if (key === undefined) {
        return this.localeData();
      } else {
        return this.locale(key);
      }
    }),
    localeData: function localeData() {
      return this._locale;
    },
    _dateUtcOffset: function _dateUtcOffset() {
      // On Firefox.24 Date#getTimezoneOffset returns a floating point.
      // https://github.com/moment/moment/pull/1871
      return -Math.round(this._d.getTimezoneOffset() / 15) * 15;
    }
  });
  function rawMonthSetter(mom, value) {
    var dayOfMonth;

    // TODO: Move this out of here!
    if (typeof value === 'string') {
      value = mom.localeData().monthsParse(value);
      // TODO: Another silent failure?
      if (typeof value !== 'number') {
        return mom;
      }
    }
    dayOfMonth = Math.min(mom.date(), _daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
  }
  function rawGetter(mom, unit) {
    return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
  }
  function rawSetter(mom, unit, value) {
    if (unit === 'Month') {
      return rawMonthSetter(mom, value);
    } else {
      return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
  }
  function makeAccessor(unit, keepTime) {
    return function (value) {
      if (value != null) {
        rawSetter(this, unit, value);
        moment.updateOffset(this, keepTime);
        return this;
      } else {
        return rawGetter(this, unit);
      }
    };
  }
  moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
  moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
  moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
  // Setting the hour should keep the time, because the user explicitly
  // specified which hour he wants. So trying to maintain the same hour (in
  // a new timezone) makes sense. Adding/subtracting hours does not follow
  // this rule.
  moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
  // moment.fn.month is defined separately
  moment.fn.date = makeAccessor('Date', true);
  moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
  moment.fn.year = makeAccessor('FullYear', true);
  moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));

  // add plural methods
  moment.fn.days = moment.fn.day;
  moment.fn.months = moment.fn.month;
  moment.fn.weeks = moment.fn.week;
  moment.fn.isoWeeks = moment.fn.isoWeek;
  moment.fn.quarters = moment.fn.quarter;

  // add aliased format methods
  moment.fn.toJSON = moment.fn.toISOString;

  // alias isUtc for dev-friendliness
  moment.fn.isUTC = moment.fn.isUtc;

  /************************************
      Duration Prototype
  ************************************/

  function daysToYears(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    return days * 400 / 146097;
  }
  function yearsToDays(years) {
    // years * 365 + absRound(years / 4) -
    //     absRound(years / 100) + absRound(years / 400);
    return years * 146097 / 400;
  }
  extend(moment.duration.fn = Duration.prototype, {
    _bubble: function _bubble() {
      var milliseconds = this._milliseconds,
        days = this._days,
        months = this._months,
        data = this._data,
        seconds,
        minutes,
        hours,
        years = 0;

      // The following code bubbles up values, see the tests for
      // examples of what that means.
      data.milliseconds = milliseconds % 1000;
      seconds = absRound(milliseconds / 1000);
      data.seconds = seconds % 60;
      minutes = absRound(seconds / 60);
      data.minutes = minutes % 60;
      hours = absRound(minutes / 60);
      data.hours = hours % 24;
      days += absRound(hours / 24);

      // Accurately convert days to years, assume start from year 0.
      years = absRound(daysToYears(days));
      days -= absRound(yearsToDays(years));

      // 30 days to a month
      // TODO (iskren): Use anchor date (like 1st Jan) to compute this.
      months += absRound(days / 30);
      days %= 30;

      // 12 months -> 1 year
      years += absRound(months / 12);
      months %= 12;
      data.days = days;
      data.months = months;
      data.years = years;
    },
    abs: function abs() {
      this._milliseconds = Math.abs(this._milliseconds);
      this._days = Math.abs(this._days);
      this._months = Math.abs(this._months);
      this._data.milliseconds = Math.abs(this._data.milliseconds);
      this._data.seconds = Math.abs(this._data.seconds);
      this._data.minutes = Math.abs(this._data.minutes);
      this._data.hours = Math.abs(this._data.hours);
      this._data.months = Math.abs(this._data.months);
      this._data.years = Math.abs(this._data.years);
      return this;
    },
    weeks: function weeks() {
      return absRound(this.days() / 7);
    },
    valueOf: function valueOf() {
      return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
    },
    humanize: function humanize(withSuffix) {
      var output = relativeTime(this, !withSuffix, this.localeData());
      if (withSuffix) {
        output = this.localeData().pastFuture(+this, output);
      }
      return this.localeData().postformat(output);
    },
    add: function add(input, val) {
      // supports only 2.0-style add(1, 's') or add(moment)
      var dur = moment.duration(input, val);
      this._milliseconds += dur._milliseconds;
      this._days += dur._days;
      this._months += dur._months;
      this._bubble();
      return this;
    },
    subtract: function subtract(input, val) {
      var dur = moment.duration(input, val);
      this._milliseconds -= dur._milliseconds;
      this._days -= dur._days;
      this._months -= dur._months;
      this._bubble();
      return this;
    },
    get: function get(units) {
      units = normalizeUnits(units);
      return this[units.toLowerCase() + 's']();
    },
    as: function as(units) {
      var days, months;
      units = normalizeUnits(units);
      if (units === 'month' || units === 'year') {
        days = this._days + this._milliseconds / 864e5;
        months = this._months + daysToYears(days) * 12;
        return units === 'month' ? months : months / 12;
      } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(yearsToDays(this._months / 12));
        switch (units) {
          case 'week':
            return days / 7 + this._milliseconds / 6048e5;
          case 'day':
            return days + this._milliseconds / 864e5;
          case 'hour':
            return days * 24 + this._milliseconds / 36e5;
          case 'minute':
            return days * 24 * 60 + this._milliseconds / 6e4;
          case 'second':
            return days * 24 * 60 * 60 + this._milliseconds / 1000;
          // Math.floor prevents floating point math errors here
          case 'millisecond':
            return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
          default:
            throw new Error('Unknown unit ' + units);
        }
      }
    },
    lang: moment.fn.lang,
    locale: moment.fn.locale,
    toIsoString: deprecate('toIsoString() is deprecated. Please use toISOString() instead ' + '(notice the capitals)', function () {
      return this.toISOString();
    }),
    toISOString: function toISOString() {
      // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
      var years = Math.abs(this.years()),
        months = Math.abs(this.months()),
        days = Math.abs(this.days()),
        hours = Math.abs(this.hours()),
        minutes = Math.abs(this.minutes()),
        seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);
      if (!this.asSeconds()) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
      }
      return (this.asSeconds() < 0 ? '-' : '') + 'P' + (years ? years + 'Y' : '') + (months ? months + 'M' : '') + (days ? days + 'D' : '') + (hours || minutes || seconds ? 'T' : '') + (hours ? hours + 'H' : '') + (minutes ? minutes + 'M' : '') + (seconds ? seconds + 'S' : '');
    },
    localeData: function localeData() {
      return this._locale;
    },
    toJSON: function toJSON() {
      return this.toISOString();
    }
  });
  moment.duration.fn.toString = moment.duration.fn.toISOString;
  function makeDurationGetter(name) {
    moment.duration.fn[name] = function () {
      return this._data[name];
    };
  }
  for (i in unitMillisecondFactors) {
    if (hasOwnProp(unitMillisecondFactors, i)) {
      makeDurationGetter(i.toLowerCase());
    }
  }
  moment.duration.fn.asMilliseconds = function () {
    return this.as('ms');
  };
  moment.duration.fn.asSeconds = function () {
    return this.as('s');
  };
  moment.duration.fn.asMinutes = function () {
    return this.as('m');
  };
  moment.duration.fn.asHours = function () {
    return this.as('h');
  };
  moment.duration.fn.asDays = function () {
    return this.as('d');
  };
  moment.duration.fn.asWeeks = function () {
    return this.as('weeks');
  };
  moment.duration.fn.asMonths = function () {
    return this.as('M');
  };
  moment.duration.fn.asYears = function () {
    return this.as('y');
  };

  /************************************
      Default Locale
  ************************************/

  // Set default locale, other locale will inherit from English.
  moment.locale('en', {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
        output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    }
  });

  // moment.js locale configuration
  // locale : afrikaans (af)
  // author : Werner Mollentze : https://github.com/wernerm

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('af', {
      months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
      weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
      weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
      weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
      meridiemParse: /vm|nm/i,
      isPM: function isPM(input) {
        return /^nm$/i.test(input);
      },
      meridiem: function meridiem(hours, minutes, isLower) {
        if (hours < 12) {
          return isLower ? 'vm' : 'VM';
        } else {
          return isLower ? 'nm' : 'NM';
        }
      },
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd, D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[Vandag om] LT',
        nextDay: '[Môre om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[Gister om] LT',
        lastWeek: '[Laas] dddd [om] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'oor %s',
        past: '%s gelede',
        s: '\'n paar sekondes',
        m: '\'n minuut',
        mm: '%d minute',
        h: '\'n uur',
        hh: '%d ure',
        d: '\'n dag',
        dd: '%d dae',
        M: '\'n maand',
        MM: '%d maande',
        y: '\'n jaar',
        yy: '%d jaar'
      },
      ordinalParse: /\d{1,2}(ste|de)/,
      ordinal: function ordinal(number) {
        return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
      },

      week: {
        dow: 1,
        // Maandag is die eerste dag van die week.
        doy: 4 // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
      }
    });
  });
  // moment.js locale configuration
  // locale : Moroccan Arabic (ar-ma)
  // author : ElFadili Yassine : https://github.com/ElFadiliY
  // author : Abdel Said : https://github.com/abdelsaid

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('ar-ma', {
      months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
      monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
      weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
      weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
      weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[اليوم على الساعة] LT',
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'في %s',
        past: 'منذ %s',
        s: 'ثوان',
        m: 'دقيقة',
        mm: '%d دقائق',
        h: 'ساعة',
        hh: '%d ساعات',
        d: 'يوم',
        dd: '%d أيام',
        M: 'شهر',
        MM: '%d أشهر',
        y: 'سنة',
        yy: '%d سنوات'
      },
      week: {
        dow: 6,
        // Saturday is the first day of the week.
        doy: 12 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : Arabic Saudi Arabia (ar-sa)
  // author : Suhail Alkowaileet : https://github.com/xsoh

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
      },
      numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
      };
    return moment.defineLocale('ar-sa', {
      months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
      monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
      weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
      weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
      weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd D MMMM YYYY LT'
      },
      meridiemParse: /ص|م/,
      isPM: function isPM(input) {
        return 'م' === input;
      },
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 12) {
          return 'ص';
        } else {
          return 'م';
        }
      },
      calendar: {
        sameDay: '[اليوم على الساعة] LT',
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'في %s',
        past: 'منذ %s',
        s: 'ثوان',
        m: 'دقيقة',
        mm: '%d دقائق',
        h: 'ساعة',
        hh: '%d ساعات',
        d: 'يوم',
        dd: '%d أيام',
        M: 'شهر',
        MM: '%d أشهر',
        y: 'سنة',
        yy: '%d سنوات'
      },
      preparse: function preparse(string) {
        return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
          return numberMap[match];
        }).replace(/،/g, ',');
      },
      postformat: function postformat(string) {
        return string.replace(/\d/g, function (match) {
          return symbolMap[match];
        }).replace(/,/g, '،');
      },
      week: {
        dow: 6,
        // Saturday is the first day of the week.
        doy: 12 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale  : Tunisian Arabic (ar-tn)

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('ar-tn', {
      months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
      monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
      weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
      weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
      weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[اليوم على الساعة] LT',
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'في %s',
        past: 'منذ %s',
        s: 'ثوان',
        m: 'دقيقة',
        mm: '%d دقائق',
        h: 'ساعة',
        hh: '%d ساعات',
        d: 'يوم',
        dd: '%d أيام',
        M: 'شهر',
        MM: '%d أشهر',
        y: 'سنة',
        yy: '%d سنوات'
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // Locale: Arabic (ar)
  // Author: Abdel Said: https://github.com/abdelsaid
  // Changes in months, weekdays: Ahmed Elkhatib
  // Native plural forms: forabi https://github.com/forabi

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
      },
      numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
      },
      pluralForm = function pluralForm(n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
      },
      plurals = {
        s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
      },
      pluralize = function pluralize(u) {
        return function (number, withoutSuffix, string, isFuture) {
          var f = pluralForm(number),
            str = plurals[u][pluralForm(number)];
          if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
          }
          return str.replace(/%d/i, number);
        };
      },
      months = ['كانون الثاني يناير', 'شباط فبراير', 'آذار مارس', 'نيسان أبريل', 'أيار مايو', 'حزيران يونيو', 'تموز يوليو', 'آب أغسطس', 'أيلول سبتمبر', 'تشرين الأول أكتوبر', 'تشرين الثاني نوفمبر', 'كانون الأول ديسمبر'];
    return moment.defineLocale('ar', {
      months: months,
      monthsShort: months,
      weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
      weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
      weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd D MMMM YYYY LT'
      },
      meridiemParse: /ص|م/,
      isPM: function isPM(input) {
        return 'م' === input;
      },
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 12) {
          return 'ص';
        } else {
          return 'م';
        }
      },
      calendar: {
        sameDay: '[اليوم عند الساعة] LT',
        nextDay: '[غدًا عند الساعة] LT',
        nextWeek: 'dddd [عند الساعة] LT',
        lastDay: '[أمس عند الساعة] LT',
        lastWeek: 'dddd [عند الساعة] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'بعد %s',
        past: 'منذ %s',
        s: pluralize('s'),
        m: pluralize('m'),
        mm: pluralize('m'),
        h: pluralize('h'),
        hh: pluralize('h'),
        d: pluralize('d'),
        dd: pluralize('d'),
        M: pluralize('M'),
        MM: pluralize('M'),
        y: pluralize('y'),
        yy: pluralize('y')
      },
      preparse: function preparse(string) {
        return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
          return numberMap[match];
        }).replace(/،/g, ',');
      },
      postformat: function postformat(string) {
        return string.replace(/\d/g, function (match) {
          return symbolMap[match];
        }).replace(/,/g, '،');
      },
      week: {
        dow: 6,
        // Saturday is the first day of the week.
        doy: 12 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : azerbaijani (az)
  // author : topchiyev : https://github.com/topchiyev

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var suffixes = {
      1: '-inci',
      5: '-inci',
      8: '-inci',
      70: '-inci',
      80: '-inci',
      2: '-nci',
      7: '-nci',
      20: '-nci',
      50: '-nci',
      3: '-üncü',
      4: '-üncü',
      100: '-üncü',
      6: '-ncı',
      9: '-uncu',
      10: '-uncu',
      30: '-uncu',
      60: '-ıncı',
      90: '-ıncı'
    };
    return moment.defineLocale('az', {
      months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
      monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
      weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
      weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
      weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd, D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[bugün saat] LT',
        nextDay: '[sabah saat] LT',
        nextWeek: '[gələn həftə] dddd [saat] LT',
        lastDay: '[dünən] LT',
        lastWeek: '[keçən həftə] dddd [saat] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s sonra',
        past: '%s əvvəl',
        s: 'birneçə saniyyə',
        m: 'bir dəqiqə',
        mm: '%d dəqiqə',
        h: 'bir saat',
        hh: '%d saat',
        d: 'bir gün',
        dd: '%d gün',
        M: 'bir ay',
        MM: '%d ay',
        y: 'bir il',
        yy: '%d il'
      },
      meridiemParse: /gecə|səhər|gündüz|axşam/,
      isPM: function isPM(input) {
        return /^(gündüz|axşam)$/.test(input);
      },
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 4) {
          return 'gecə';
        } else if (hour < 12) {
          return 'səhər';
        } else if (hour < 17) {
          return 'gündüz';
        } else {
          return 'axşam';
        }
      },
      ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
      ordinal: function ordinal(number) {
        if (number === 0) {
          // special case for zero
          return number + '-ıncı';
        }
        var a = number % 10,
          b = number % 100 - a,
          c = number >= 100 ? 100 : null;
        return number + (suffixes[a] || suffixes[b] || suffixes[c]);
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : belarusian (be)
  // author : Dmitry Demidov : https://github.com/demidov91
  // author: Praleska: http://praleska.pro/
  // Author : Menelion Elensúle : https://github.com/Oire

  (function (factory) {
    factory(moment);
  })(function (moment) {
    function plural(word, num) {
      var forms = word.split('_');
      return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
      var format = {
        'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
        'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
        'dd': 'дзень_дні_дзён',
        'MM': 'месяц_месяцы_месяцаў',
        'yy': 'год_гады_гадоў'
      };
      if (key === 'm') {
        return withoutSuffix ? 'хвіліна' : 'хвіліну';
      } else if (key === 'h') {
        return withoutSuffix ? 'гадзіна' : 'гадзіну';
      } else {
        return number + ' ' + plural(format[key], +number);
      }
    }
    function monthsCaseReplace(m, format) {
      var months = {
          'nominative': 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_'),
          'accusative': 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_')
        },
        nounCase = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(format) ? 'accusative' : 'nominative';
      return months[nounCase][m.month()];
    }
    function weekdaysCaseReplace(m, format) {
      var weekdays = {
          'nominative': 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
          'accusative': 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_')
        },
        nounCase = /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/.test(format) ? 'accusative' : 'nominative';
      return weekdays[nounCase][m.day()];
    }
    return moment.defineLocale('be', {
      months: monthsCaseReplace,
      monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
      weekdays: weekdaysCaseReplace,
      weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
      weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY г.',
        LLL: 'D MMMM YYYY г., LT',
        LLLL: 'dddd, D MMMM YYYY г., LT'
      },
      calendar: {
        sameDay: '[Сёння ў] LT',
        nextDay: '[Заўтра ў] LT',
        lastDay: '[Учора ў] LT',
        nextWeek: function nextWeek() {
          return '[У] dddd [ў] LT';
        },
        lastWeek: function lastWeek() {
          switch (this.day()) {
            case 0:
            case 3:
            case 5:
            case 6:
              return '[У мінулую] dddd [ў] LT';
            case 1:
            case 2:
            case 4:
              return '[У мінулы] dddd [ў] LT';
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'праз %s',
        past: '%s таму',
        s: 'некалькі секунд',
        m: relativeTimeWithPlural,
        mm: relativeTimeWithPlural,
        h: relativeTimeWithPlural,
        hh: relativeTimeWithPlural,
        d: 'дзень',
        dd: relativeTimeWithPlural,
        M: 'месяц',
        MM: relativeTimeWithPlural,
        y: 'год',
        yy: relativeTimeWithPlural
      },
      meridiemParse: /ночы|раніцы|дня|вечара/,
      isPM: function isPM(input) {
        return /^(дня|вечара)$/.test(input);
      },
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 4) {
          return 'ночы';
        } else if (hour < 12) {
          return 'раніцы';
        } else if (hour < 17) {
          return 'дня';
        } else {
          return 'вечара';
        }
      },
      ordinalParse: /\d{1,2}-(і|ы|га)/,
      ordinal: function ordinal(number, period) {
        switch (period) {
          case 'M':
          case 'd':
          case 'DDD':
          case 'w':
          case 'W':
            return (number % 10 === 2 || number % 10 === 3) && number % 100 !== 12 && number % 100 !== 13 ? number + '-і' : number + '-ы';
          case 'D':
            return number + '-га';
          default:
            return number;
        }
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : bulgarian (bg)
  // author : Krasen Borisov : https://github.com/kraz

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('bg', {
      months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
      monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
      weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
      weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
      weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'LT:ss',
        L: 'D.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd, D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[Днес в] LT',
        nextDay: '[Утре в] LT',
        nextWeek: 'dddd [в] LT',
        lastDay: '[Вчера в] LT',
        lastWeek: function lastWeek() {
          switch (this.day()) {
            case 0:
            case 3:
            case 6:
              return '[В изминалата] dddd [в] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[В изминалия] dddd [в] LT';
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'след %s',
        past: 'преди %s',
        s: 'няколко секунди',
        m: 'минута',
        mm: '%d минути',
        h: 'час',
        hh: '%d часа',
        d: 'ден',
        dd: '%d дни',
        M: 'месец',
        MM: '%d месеца',
        y: 'година',
        yy: '%d години'
      },
      ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
      ordinal: function ordinal(number) {
        var lastDigit = number % 10,
          last2Digits = number % 100;
        if (number === 0) {
          return number + '-ев';
        } else if (last2Digits === 0) {
          return number + '-ен';
        } else if (last2Digits > 10 && last2Digits < 20) {
          return number + '-ти';
        } else if (lastDigit === 1) {
          return number + '-ви';
        } else if (lastDigit === 2) {
          return number + '-ри';
        } else if (lastDigit === 7 || lastDigit === 8) {
          return number + '-ми';
        } else {
          return number + '-ти';
        }
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : Bengali (bn)
  // author : Kaushik Gandhi : https://github.com/kaushikgandhi

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var symbolMap = {
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯',
        '0': '০'
      },
      numberMap = {
        '১': '1',
        '২': '2',
        '৩': '3',
        '৪': '4',
        '৫': '5',
        '৬': '6',
        '৭': '7',
        '৮': '8',
        '৯': '9',
        '০': '0'
      };
    return moment.defineLocale('bn', {
      months: 'জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
      monthsShort: 'জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্'.split('_'),
      weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার'.split('_'),
      weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি'.split('_'),
      weekdaysMin: 'রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি'.split('_'),
      longDateFormat: {
        LT: 'A h:mm সময়',
        LTS: 'A h:mm:ss সময়',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, LT',
        LLLL: 'dddd, D MMMM YYYY, LT'
      },
      calendar: {
        sameDay: '[আজ] LT',
        nextDay: '[আগামীকাল] LT',
        nextWeek: 'dddd, LT',
        lastDay: '[গতকাল] LT',
        lastWeek: '[গত] dddd, LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s পরে',
        past: '%s আগে',
        s: 'কএক সেকেন্ড',
        m: 'এক মিনিট',
        mm: '%d মিনিট',
        h: 'এক ঘন্টা',
        hh: '%d ঘন্টা',
        d: 'এক দিন',
        dd: '%d দিন',
        M: 'এক মাস',
        MM: '%d মাস',
        y: 'এক বছর',
        yy: '%d বছর'
      },
      preparse: function preparse(string) {
        return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
          return numberMap[match];
        });
      },
      postformat: function postformat(string) {
        return string.replace(/\d/g, function (match) {
          return symbolMap[match];
        });
      },
      meridiemParse: /রাত|শকাল|দুপুর|বিকেল|রাত/,
      isPM: function isPM(input) {
        return /^(দুপুর|বিকেল|রাত)$/.test(input);
      },
      //Bengali is a vast language its spoken
      //in different forms in various parts of the world.
      //I have just generalized with most common one used
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 4) {
          return 'রাত';
        } else if (hour < 10) {
          return 'শকাল';
        } else if (hour < 17) {
          return 'দুপুর';
        } else if (hour < 20) {
          return 'বিকেল';
        } else {
          return 'রাত';
        }
      },
      week: {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : tibetan (bo)
  // author : Thupten N. Chakrishar : https://github.com/vajradog

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var symbolMap = {
        '1': '༡',
        '2': '༢',
        '3': '༣',
        '4': '༤',
        '5': '༥',
        '6': '༦',
        '7': '༧',
        '8': '༨',
        '9': '༩',
        '0': '༠'
      },
      numberMap = {
        '༡': '1',
        '༢': '2',
        '༣': '3',
        '༤': '4',
        '༥': '5',
        '༦': '6',
        '༧': '7',
        '༨': '8',
        '༩': '9',
        '༠': '0'
      };
    return moment.defineLocale('bo', {
      months: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
      monthsShort: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
      weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
      weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
      weekdaysMin: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
      longDateFormat: {
        LT: 'A h:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, LT',
        LLLL: 'dddd, D MMMM YYYY, LT'
      },
      calendar: {
        sameDay: '[དི་རིང] LT',
        nextDay: '[སང་ཉིན] LT',
        nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
        lastDay: '[ཁ་སང] LT',
        lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s ལ་',
        past: '%s སྔན་ལ',
        s: 'ལམ་སང',
        m: 'སྐར་མ་གཅིག',
        mm: '%d སྐར་མ',
        h: 'ཆུ་ཚོད་གཅིག',
        hh: '%d ཆུ་ཚོད',
        d: 'ཉིན་གཅིག',
        dd: '%d ཉིན་',
        M: 'ཟླ་བ་གཅིག',
        MM: '%d ཟླ་བ',
        y: 'ལོ་གཅིག',
        yy: '%d ལོ'
      },
      preparse: function preparse(string) {
        return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
          return numberMap[match];
        });
      },
      postformat: function postformat(string) {
        return string.replace(/\d/g, function (match) {
          return symbolMap[match];
        });
      },
      meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
      isPM: function isPM(input) {
        return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(input);
      },
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 4) {
          return 'མཚན་མོ';
        } else if (hour < 10) {
          return 'ཞོགས་ཀས';
        } else if (hour < 17) {
          return 'ཉིན་གུང';
        } else if (hour < 20) {
          return 'དགོང་དག';
        } else {
          return 'མཚན་མོ';
        }
      },
      week: {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : breton (br)
  // author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

  (function (factory) {
    factory(moment);
  })(function (moment) {
    function relativeTimeWithMutation(number, withoutSuffix, key) {
      var format = {
        'mm': 'munutenn',
        'MM': 'miz',
        'dd': 'devezh'
      };
      return number + ' ' + mutation(format[key], number);
    }
    function specialMutationForYears(number) {
      switch (lastNumber(number)) {
        case 1:
        case 3:
        case 4:
        case 5:
        case 9:
          return number + ' bloaz';
        default:
          return number + ' vloaz';
      }
    }
    function lastNumber(number) {
      if (number > 9) {
        return lastNumber(number % 10);
      }
      return number;
    }
    function mutation(text, number) {
      if (number === 2) {
        return softMutation(text);
      }
      return text;
    }
    function softMutation(text) {
      var mutationTable = {
        'm': 'v',
        'b': 'v',
        'd': 'z'
      };
      if (mutationTable[text.charAt(0)] === undefined) {
        return text;
      }
      return mutationTable[text.charAt(0)] + text.substring(1);
    }
    return moment.defineLocale('br', {
      months: 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
      monthsShort: 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
      weekdays: 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
      weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
      weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
      longDateFormat: {
        LT: 'h[e]mm A',
        LTS: 'h[e]mm:ss A',
        L: 'DD/MM/YYYY',
        LL: 'D [a viz] MMMM YYYY',
        LLL: 'D [a viz] MMMM YYYY LT',
        LLLL: 'dddd, D [a viz] MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[Hiziv da] LT',
        nextDay: '[Warc\'hoazh da] LT',
        nextWeek: 'dddd [da] LT',
        lastDay: '[Dec\'h da] LT',
        lastWeek: 'dddd [paset da] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'a-benn %s',
        past: '%s \'zo',
        s: 'un nebeud segondennoù',
        m: 'ur vunutenn',
        mm: relativeTimeWithMutation,
        h: 'un eur',
        hh: '%d eur',
        d: 'un devezh',
        dd: relativeTimeWithMutation,
        M: 'ur miz',
        MM: relativeTimeWithMutation,
        y: 'ur bloaz',
        yy: specialMutationForYears
      },
      ordinalParse: /\d{1,2}(añ|vet)/,
      ordinal: function ordinal(number) {
        var output = number === 1 ? 'añ' : 'vet';
        return number + output;
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : bosnian (bs)
  // author : Nedim Cholich : https://github.com/frontyard
  // based on (hr) translation by Bojan Marković

  (function (factory) {
    factory(moment);
  })(function (moment) {
    function translate(number, withoutSuffix, key) {
      var result = number + ' ';
      switch (key) {
        case 'm':
          return withoutSuffix ? 'jedna minuta' : 'jedne minute';
        case 'mm':
          if (number === 1) {
            result += 'minuta';
          } else if (number === 2 || number === 3 || number === 4) {
            result += 'minute';
          } else {
            result += 'minuta';
          }
          return result;
        case 'h':
          return withoutSuffix ? 'jedan sat' : 'jednog sata';
        case 'hh':
          if (number === 1) {
            result += 'sat';
          } else if (number === 2 || number === 3 || number === 4) {
            result += 'sata';
          } else {
            result += 'sati';
          }
          return result;
        case 'dd':
          if (number === 1) {
            result += 'dan';
          } else {
            result += 'dana';
          }
          return result;
        case 'MM':
          if (number === 1) {
            result += 'mjesec';
          } else if (number === 2 || number === 3 || number === 4) {
            result += 'mjeseca';
          } else {
            result += 'mjeseci';
          }
          return result;
        case 'yy':
          if (number === 1) {
            result += 'godina';
          } else if (number === 2 || number === 3 || number === 4) {
            result += 'godine';
          } else {
            result += 'godina';
          }
          return result;
      }
    }
    return moment.defineLocale('bs', {
      months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
      monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
      weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
      weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
      weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'LT:ss',
        L: 'DD. MM. YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY LT',
        LLLL: 'dddd, D. MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[danas u] LT',
        nextDay: '[sutra u] LT',
        nextWeek: function nextWeek() {
          switch (this.day()) {
            case 0:
              return '[u] [nedjelju] [u] LT';
            case 3:
              return '[u] [srijedu] [u] LT';
            case 6:
              return '[u] [subotu] [u] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[u] dddd [u] LT';
          }
        },
        lastDay: '[jučer u] LT',
        lastWeek: function lastWeek() {
          switch (this.day()) {
            case 0:
            case 3:
              return '[prošlu] dddd [u] LT';
            case 6:
              return '[prošle] [subote] [u] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[prošli] dddd [u] LT';
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'za %s',
        past: 'prije %s',
        s: 'par sekundi',
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: 'dan',
        dd: translate,
        M: 'mjesec',
        MM: translate,
        y: 'godinu',
        yy: translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : catalan (ca)
  // author : Juan G. Hurtado : https://github.com/juanghurtado

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('ca', {
      months: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
      monthsShort: 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
      weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
      weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
      weekdaysMin: 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd D MMMM YYYY LT'
      },
      calendar: {
        sameDay: function sameDay() {
          return '[avui a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
        },
        nextDay: function nextDay() {
          return '[demà a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
        },
        nextWeek: function nextWeek() {
          return 'dddd [a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
        },
        lastDay: function lastDay() {
          return '[ahir a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
        },
        lastWeek: function lastWeek() {
          return '[el] dddd [passat a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'en %s',
        past: 'fa %s',
        s: 'uns segons',
        m: 'un minut',
        mm: '%d minuts',
        h: 'una hora',
        hh: '%d hores',
        d: 'un dia',
        dd: '%d dies',
        M: 'un mes',
        MM: '%d mesos',
        y: 'un any',
        yy: '%d anys'
      },
      ordinalParse: /\d{1,2}(r|n|t|è|a)/,
      ordinal: function ordinal(number, period) {
        var output = number === 1 ? 'r' : number === 2 ? 'n' : number === 3 ? 'r' : number === 4 ? 't' : 'è';
        if (period === 'w' || period === 'W') {
          output = 'a';
        }
        return number + output;
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : czech (cs)
  // author : petrbela : https://github.com/petrbela

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
      monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
    function plural(n) {
      return n > 1 && n < 5 && ~~(n / 10) !== 1;
    }
    function translate(number, withoutSuffix, key, isFuture) {
      var result = number + ' ';
      switch (key) {
        case 's':
          // a few seconds / in a few seconds / a few seconds ago
          return withoutSuffix || isFuture ? 'pár sekund' : 'pár sekundami';
        case 'm':
          // a minute / in a minute / a minute ago
          return withoutSuffix ? 'minuta' : isFuture ? 'minutu' : 'minutou';
        case 'mm':
          // 9 minutes / in 9 minutes / 9 minutes ago
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'minuty' : 'minut');
          } else {
            return result + 'minutami';
          }
          break;
        case 'h':
          // an hour / in an hour / an hour ago
          return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';
        case 'hh':
          // 9 hours / in 9 hours / 9 hours ago
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'hodiny' : 'hodin');
          } else {
            return result + 'hodinami';
          }
          break;
        case 'd':
          // a day / in a day / a day ago
          return withoutSuffix || isFuture ? 'den' : 'dnem';
        case 'dd':
          // 9 days / in 9 days / 9 days ago
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'dny' : 'dní');
          } else {
            return result + 'dny';
          }
          break;
        case 'M':
          // a month / in a month / a month ago
          return withoutSuffix || isFuture ? 'měsíc' : 'měsícem';
        case 'MM':
          // 9 months / in 9 months / 9 months ago
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'měsíce' : 'měsíců');
          } else {
            return result + 'měsíci';
          }
          break;
        case 'y':
          // a year / in a year / a year ago
          return withoutSuffix || isFuture ? 'rok' : 'rokem';
        case 'yy':
          // 9 years / in 9 years / 9 years ago
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'roky' : 'let');
          } else {
            return result + 'lety';
          }
          break;
      }
    }
    return moment.defineLocale('cs', {
      months: months,
      monthsShort: monthsShort,
      monthsParse: function (months, monthsShort) {
        var i,
          _monthsParse = [];
        for (i = 0; i < 12; i++) {
          // use custom parser to solve problem with July (červenec)
          _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
        }
        return _monthsParse;
      }(months, monthsShort),
      weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
      weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
      weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'LT:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY LT',
        LLLL: 'dddd D. MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[dnes v] LT',
        nextDay: '[zítra v] LT',
        nextWeek: function nextWeek() {
          switch (this.day()) {
            case 0:
              return '[v neděli v] LT';
            case 1:
            case 2:
              return '[v] dddd [v] LT';
            case 3:
              return '[ve středu v] LT';
            case 4:
              return '[ve čtvrtek v] LT';
            case 5:
              return '[v pátek v] LT';
            case 6:
              return '[v sobotu v] LT';
          }
        },
        lastDay: '[včera v] LT',
        lastWeek: function lastWeek() {
          switch (this.day()) {
            case 0:
              return '[minulou neděli v] LT';
            case 1:
            case 2:
              return '[minulé] dddd [v] LT';
            case 3:
              return '[minulou středu v] LT';
            case 4:
            case 5:
              return '[minulý] dddd [v] LT';
            case 6:
              return '[minulou sobotu v] LT';
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'za %s',
        past: 'před %s',
        s: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : chuvash (cv)
  // author : Anatoly Mironov : https://github.com/mirontoli

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('cv', {
      months: 'кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав'.split('_'),
      monthsShort: 'кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш'.split('_'),
      weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун'.split('_'),
      weekdaysShort: 'выр_тун_ытл_юн_кĕç_эрн_шăм'.split('_'),
      weekdaysMin: 'вр_тн_ыт_юн_кç_эр_шм'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD-MM-YYYY',
        LL: 'YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]',
        LLL: 'YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT',
        LLLL: 'dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT'
      },
      calendar: {
        sameDay: '[Паян] LT [сехетре]',
        nextDay: '[Ыран] LT [сехетре]',
        lastDay: '[Ĕнер] LT [сехетре]',
        nextWeek: '[Çитес] dddd LT [сехетре]',
        lastWeek: '[Иртнĕ] dddd LT [сехетре]',
        sameElse: 'L'
      },
      relativeTime: {
        future: function future(output) {
          var affix = /сехет$/i.exec(output) ? 'рен' : /çул$/i.exec(output) ? 'тан' : 'ран';
          return output + affix;
        },
        past: '%s каялла',
        s: 'пĕр-ик çеккунт',
        m: 'пĕр минут',
        mm: '%d минут',
        h: 'пĕр сехет',
        hh: '%d сехет',
        d: 'пĕр кун',
        dd: '%d кун',
        M: 'пĕр уйăх',
        MM: '%d уйăх',
        y: 'пĕр çул',
        yy: '%d çул'
      },
      ordinalParse: /\d{1,2}-мĕш/,
      ordinal: '%d-мĕш',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : Welsh (cy)
  // author : Robert Allen

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('cy', {
      months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
      monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
      weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
      weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
      weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
      // time formats are the same as en-gb
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd, D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[Heddiw am] LT',
        nextDay: '[Yfory am] LT',
        nextWeek: 'dddd [am] LT',
        lastDay: '[Ddoe am] LT',
        lastWeek: 'dddd [diwethaf am] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'mewn %s',
        past: '%s yn ôl',
        s: 'ychydig eiliadau',
        m: 'munud',
        mm: '%d munud',
        h: 'awr',
        hh: '%d awr',
        d: 'diwrnod',
        dd: '%d diwrnod',
        M: 'mis',
        MM: '%d mis',
        y: 'blwyddyn',
        yy: '%d flynedd'
      },
      ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
      // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
      ordinal: function ordinal(number) {
        var b = number,
          output = '',
          lookup = ['', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed',
          // 1af to 10fed
          'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
          ];

        if (b > 20) {
          if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
            output = 'fed'; // not 30ain, 70ain or 90ain
          } else {
            output = 'ain';
          }
        } else if (b > 0) {
          output = lookup[b];
        }
        return number + output;
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : danish (da)
  // author : Ulrik Nielsen : https://github.com/mrbase

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('da', {
      months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
      monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
      weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
      weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
      weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY LT',
        LLLL: 'dddd [d.] D. MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[I dag kl.] LT',
        nextDay: '[I morgen kl.] LT',
        nextWeek: 'dddd [kl.] LT',
        lastDay: '[I går kl.] LT',
        lastWeek: '[sidste] dddd [kl] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'om %s',
        past: '%s siden',
        s: 'få sekunder',
        m: 'et minut',
        mm: '%d minutter',
        h: 'en time',
        hh: '%d timer',
        d: 'en dag',
        dd: '%d dage',
        M: 'en måned',
        MM: '%d måneder',
        y: 'et år',
        yy: '%d år'
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : austrian german (de-at)
  // author : lluchs : https://github.com/lluchs
  // author: Menelion Elensúle: https://github.com/Oire
  // author : Martin Groller : https://github.com/MadMG

  (function (factory) {
    factory(moment);
  })(function (moment) {
    function processRelativeTime(number, withoutSuffix, key, isFuture) {
      var format = {
        'm': ['eine Minute', 'einer Minute'],
        'h': ['eine Stunde', 'einer Stunde'],
        'd': ['ein Tag', 'einem Tag'],
        'dd': [number + ' Tage', number + ' Tagen'],
        'M': ['ein Monat', 'einem Monat'],
        'MM': [number + ' Monate', number + ' Monaten'],
        'y': ['ein Jahr', 'einem Jahr'],
        'yy': [number + ' Jahre', number + ' Jahren']
      };
      return withoutSuffix ? format[key][0] : format[key][1];
    }
    return moment.defineLocale('de-at', {
      months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
      monthsShort: 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
      weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
      weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
      weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY LT',
        LLLL: 'dddd, D. MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[Heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[Morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[Gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
      },
      relativeTime: {
        future: 'in %s',
        past: 'vor %s',
        s: 'ein paar Sekunden',
        m: processRelativeTime,
        mm: '%d Minuten',
        h: processRelativeTime,
        hh: '%d Stunden',
        d: processRelativeTime,
        dd: processRelativeTime,
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : german (de)
  // author : lluchs : https://github.com/lluchs
  // author: Menelion Elensúle: https://github.com/Oire

  (function (factory) {
    factory(moment);
  })(function (moment) {
    function processRelativeTime(number, withoutSuffix, key, isFuture) {
      var format = {
        'm': ['eine Minute', 'einer Minute'],
        'h': ['eine Stunde', 'einer Stunde'],
        'd': ['ein Tag', 'einem Tag'],
        'dd': [number + ' Tage', number + ' Tagen'],
        'M': ['ein Monat', 'einem Monat'],
        'MM': [number + ' Monate', number + ' Monaten'],
        'y': ['ein Jahr', 'einem Jahr'],
        'yy': [number + ' Jahre', number + ' Jahren']
      };
      return withoutSuffix ? format[key][0] : format[key][1];
    }
    return moment.defineLocale('de', {
      months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
      monthsShort: 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
      weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
      weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
      weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY LT',
        LLLL: 'dddd, D. MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[Heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[Morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[Gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
      },
      relativeTime: {
        future: 'in %s',
        past: 'vor %s',
        s: 'ein paar Sekunden',
        m: processRelativeTime,
        mm: '%d Minuten',
        h: processRelativeTime,
        hh: '%d Stunden',
        d: processRelativeTime,
        dd: processRelativeTime,
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : modern greek (el)
  // author : Aggelos Karalias : https://github.com/mehiel

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('el', {
      monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
      monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
      months: function months(momentToFormat, format) {
        if (/D/.test(format.substring(0, format.indexOf('MMMM')))) {
          // if there is a day number before 'MMMM'
          return this._monthsGenitiveEl[momentToFormat.month()];
        } else {
          return this._monthsNominativeEl[momentToFormat.month()];
        }
      },
      monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
      weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
      weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
      weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
      meridiem: function meridiem(hours, minutes, isLower) {
        if (hours > 11) {
          return isLower ? 'μμ' : 'ΜΜ';
        } else {
          return isLower ? 'πμ' : 'ΠΜ';
        }
      },
      isPM: function isPM(input) {
        return (input + '').toLowerCase()[0] === 'μ';
      },
      meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
      longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd, D MMMM YYYY LT'
      },
      calendarEl: {
        sameDay: '[Σήμερα {}] LT',
        nextDay: '[Αύριο {}] LT',
        nextWeek: 'dddd [{}] LT',
        lastDay: '[Χθες {}] LT',
        lastWeek: function lastWeek() {
          switch (this.day()) {
            case 6:
              return '[το προηγούμενο] dddd [{}] LT';
            default:
              return '[την προηγούμενη] dddd [{}] LT';
          }
        },
        sameElse: 'L'
      },
      calendar: function calendar(key, mom) {
        var output = this._calendarEl[key],
          hours = mom && mom.hours();
        if (typeof output === 'function') {
          output = output.apply(mom);
        }
        return output.replace('{}', hours % 12 === 1 ? 'στη' : 'στις');
      },
      relativeTime: {
        future: 'σε %s',
        past: '%s πριν',
        s: 'λίγα δευτερόλεπτα',
        m: 'ένα λεπτό',
        mm: '%d λεπτά',
        h: 'μία ώρα',
        hh: '%d ώρες',
        d: 'μία μέρα',
        dd: '%d μέρες',
        M: 'ένας μήνας',
        MM: '%d μήνες',
        y: 'ένας χρόνος',
        yy: '%d χρόνια'
      },
      ordinalParse: /\d{1,2}η/,
      ordinal: '%dη',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : australian english (en-au)

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('en-au', {
      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd, D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
      },
      ordinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function ordinal(number) {
        var b = number % 10,
          output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
        return number + output;
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : canadian english (en-ca)
  // author : Jonathan Abourbih : https://github.com/jonbca

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('en-ca', {
      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'YYYY-MM-DD',
        LL: 'D MMMM, YYYY',
        LLL: 'D MMMM, YYYY LT',
        LLLL: 'dddd, D MMMM, YYYY LT'
      },
      calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
      },
      ordinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function ordinal(number) {
        var b = number % 10,
          output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
        return number + output;
      }
    });
  });
  // moment.js locale configuration
  // locale : great britain english (en-gb)
  // author : Chris Gedrim : https://github.com/chrisgedrim

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('en-gb', {
      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd, D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
      },
      ordinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function ordinal(number) {
        var b = number % 10,
          output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
        return number + output;
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : esperanto (eo)
  // author : Colin Dean : https://github.com/colindean
  // komento: Mi estas malcerta se mi korekte traktis akuzativojn en tiu traduko.
  //          Se ne, bonvolu korekti kaj avizi min por ke mi povas lerni!

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('eo', {
      months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
      monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
      weekdays: 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),
      weekdaysShort: 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),
      weekdaysMin: 'Di_Lu_Ma_Me_Ĵa_Ve_Sa'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'YYYY-MM-DD',
        LL: 'D[-an de] MMMM, YYYY',
        LLL: 'D[-an de] MMMM, YYYY LT',
        LLLL: 'dddd, [la] D[-an de] MMMM, YYYY LT'
      },
      meridiemParse: /[ap]\.t\.m/i,
      isPM: function isPM(input) {
        return input.charAt(0).toLowerCase() === 'p';
      },
      meridiem: function meridiem(hours, minutes, isLower) {
        if (hours > 11) {
          return isLower ? 'p.t.m.' : 'P.T.M.';
        } else {
          return isLower ? 'a.t.m.' : 'A.T.M.';
        }
      },
      calendar: {
        sameDay: '[Hodiaŭ je] LT',
        nextDay: '[Morgaŭ je] LT',
        nextWeek: 'dddd [je] LT',
        lastDay: '[Hieraŭ je] LT',
        lastWeek: '[pasinta] dddd [je] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'je %s',
        past: 'antaŭ %s',
        s: 'sekundoj',
        m: 'minuto',
        mm: '%d minutoj',
        h: 'horo',
        hh: '%d horoj',
        d: 'tago',
        //ne 'diurno', ĉar estas uzita por proksimumo
        dd: '%d tagoj',
        M: 'monato',
        MM: '%d monatoj',
        y: 'jaro',
        yy: '%d jaroj'
      },
      ordinalParse: /\d{1,2}a/,
      ordinal: '%da',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : spanish (es)
  // author : Julio Napurí : https://github.com/julionc

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
      _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
    return moment.defineLocale('es', {
      months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
      monthsShort: function monthsShort(m, format) {
        if (/-MMM-/.test(format)) {
          return _monthsShort[m.month()];
        } else {
          return monthsShortDot[m.month()];
        }
      },
      weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
      weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
      weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY LT',
        LLLL: 'dddd, D [de] MMMM [de] YYYY LT'
      },
      calendar: {
        sameDay: function sameDay() {
          return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
        },
        nextDay: function nextDay() {
          return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
        },
        nextWeek: function nextWeek() {
          return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
        },
        lastDay: function lastDay() {
          return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
        },
        lastWeek: function lastWeek() {
          return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
      },
      ordinalParse: /\d{1,2}º/,
      ordinal: '%dº',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : estonian (et)
  // author : Henry Kehlmann : https://github.com/madhenry
  // improvements : Illimar Tambek : https://github.com/ragulka

  (function (factory) {
    factory(moment);
  })(function (moment) {
    function processRelativeTime(number, withoutSuffix, key, isFuture) {
      var format = {
        's': ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
        'm': ['ühe minuti', 'üks minut'],
        'mm': [number + ' minuti', number + ' minutit'],
        'h': ['ühe tunni', 'tund aega', 'üks tund'],
        'hh': [number + ' tunni', number + ' tundi'],
        'd': ['ühe päeva', 'üks päev'],
        'M': ['kuu aja', 'kuu aega', 'üks kuu'],
        'MM': [number + ' kuu', number + ' kuud'],
        'y': ['ühe aasta', 'aasta', 'üks aasta'],
        'yy': [number + ' aasta', number + ' aastat']
      };
      if (withoutSuffix) {
        return format[key][2] ? format[key][2] : format[key][1];
      }
      return isFuture ? format[key][0] : format[key][1];
    }
    return moment.defineLocale('et', {
      months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
      monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
      weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
      weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
      weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'LT:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY LT',
        LLLL: 'dddd, D. MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[Täna,] LT',
        nextDay: '[Homme,] LT',
        nextWeek: '[Järgmine] dddd LT',
        lastDay: '[Eile,] LT',
        lastWeek: '[Eelmine] dddd LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s pärast',
        past: '%s tagasi',
        s: processRelativeTime,
        m: processRelativeTime,
        mm: processRelativeTime,
        h: processRelativeTime,
        hh: processRelativeTime,
        d: processRelativeTime,
        dd: '%d päeva',
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : euskara (eu)
  // author : Eneko Illarramendi : https://github.com/eillarra

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('eu', {
      months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
      monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
      weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
      weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
      weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'YYYY-MM-DD',
        LL: 'YYYY[ko] MMMM[ren] D[a]',
        LLL: 'YYYY[ko] MMMM[ren] D[a] LT',
        LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] LT',
        l: 'YYYY-M-D',
        ll: 'YYYY[ko] MMM D[a]',
        lll: 'YYYY[ko] MMM D[a] LT',
        llll: 'ddd, YYYY[ko] MMM D[a] LT'
      },
      calendar: {
        sameDay: '[gaur] LT[etan]',
        nextDay: '[bihar] LT[etan]',
        nextWeek: 'dddd LT[etan]',
        lastDay: '[atzo] LT[etan]',
        lastWeek: '[aurreko] dddd LT[etan]',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s barru',
        past: 'duela %s',
        s: 'segundo batzuk',
        m: 'minutu bat',
        mm: '%d minutu',
        h: 'ordu bat',
        hh: '%d ordu',
        d: 'egun bat',
        dd: '%d egun',
        M: 'hilabete bat',
        MM: '%d hilabete',
        y: 'urte bat',
        yy: '%d urte'
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : Persian (fa)
  // author : Ebrahim Byagowi : https://github.com/ebraminio

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var symbolMap = {
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹',
        '0': '۰'
      },
      numberMap = {
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9',
        '۰': '0'
      };
    return moment.defineLocale('fa', {
      months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
      monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
      weekdays: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split('_'),
      weekdaysShort: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split('_'),
      weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd, D MMMM YYYY LT'
      },
      meridiemParse: /قبل از ظهر|بعد از ظهر/,
      isPM: function isPM(input) {
        return /بعد از ظهر/.test(input);
      },
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 12) {
          return 'قبل از ظهر';
        } else {
          return 'بعد از ظهر';
        }
      },
      calendar: {
        sameDay: '[امروز ساعت] LT',
        nextDay: '[فردا ساعت] LT',
        nextWeek: 'dddd [ساعت] LT',
        lastDay: '[دیروز ساعت] LT',
        lastWeek: 'dddd [پیش] [ساعت] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'در %s',
        past: '%s پیش',
        s: 'چندین ثانیه',
        m: 'یک دقیقه',
        mm: '%d دقیقه',
        h: 'یک ساعت',
        hh: '%d ساعت',
        d: 'یک روز',
        dd: '%d روز',
        M: 'یک ماه',
        MM: '%d ماه',
        y: 'یک سال',
        yy: '%d سال'
      },
      preparse: function preparse(string) {
        return string.replace(/[۰-۹]/g, function (match) {
          return numberMap[match];
        }).replace(/،/g, ',');
      },
      postformat: function postformat(string) {
        return string.replace(/\d/g, function (match) {
          return symbolMap[match];
        }).replace(/,/g, '،');
      },
      ordinalParse: /\d{1,2}م/,
      ordinal: '%dم',
      week: {
        dow: 6,
        // Saturday is the first day of the week.
        doy: 12 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : finnish (fi)
  // author : Tarmo Aidantausta : https://github.com/bleadof

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
      numbersFuture = ['nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden', numbersPast[7], numbersPast[8], numbersPast[9]];
    function translate(number, withoutSuffix, key, isFuture) {
      var result = '';
      switch (key) {
        case 's':
          return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
        case 'm':
          return isFuture ? 'minuutin' : 'minuutti';
        case 'mm':
          result = isFuture ? 'minuutin' : 'minuuttia';
          break;
        case 'h':
          return isFuture ? 'tunnin' : 'tunti';
        case 'hh':
          result = isFuture ? 'tunnin' : 'tuntia';
          break;
        case 'd':
          return isFuture ? 'päivän' : 'päivä';
        case 'dd':
          result = isFuture ? 'päivän' : 'päivää';
          break;
        case 'M':
          return isFuture ? 'kuukauden' : 'kuukausi';
        case 'MM':
          result = isFuture ? 'kuukauden' : 'kuukautta';
          break;
        case 'y':
          return isFuture ? 'vuoden' : 'vuosi';
        case 'yy':
          result = isFuture ? 'vuoden' : 'vuotta';
          break;
      }
      result = verbalNumber(number, isFuture) + ' ' + result;
      return result;
    }
    function verbalNumber(number, isFuture) {
      return number < 10 ? isFuture ? numbersFuture[number] : numbersPast[number] : number;
    }
    return moment.defineLocale('fi', {
      months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
      monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
      weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
      weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
      weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
      longDateFormat: {
        LT: 'HH.mm',
        LTS: 'HH.mm.ss',
        L: 'DD.MM.YYYY',
        LL: 'Do MMMM[ta] YYYY',
        LLL: 'Do MMMM[ta] YYYY, [klo] LT',
        LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] LT',
        l: 'D.M.YYYY',
        ll: 'Do MMM YYYY',
        lll: 'Do MMM YYYY, [klo] LT',
        llll: 'ddd, Do MMM YYYY, [klo] LT'
      },
      calendar: {
        sameDay: '[tänään] [klo] LT',
        nextDay: '[huomenna] [klo] LT',
        nextWeek: 'dddd [klo] LT',
        lastDay: '[eilen] [klo] LT',
        lastWeek: '[viime] dddd[na] [klo] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s päästä',
        past: '%s sitten',
        s: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : faroese (fo)
  // author : Ragnar Johannesen : https://github.com/ragnar123

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('fo', {
      months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
      monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
      weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
      weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
      weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd D. MMMM, YYYY LT'
      },
      calendar: {
        sameDay: '[Í dag kl.] LT',
        nextDay: '[Í morgin kl.] LT',
        nextWeek: 'dddd [kl.] LT',
        lastDay: '[Í gjár kl.] LT',
        lastWeek: '[síðstu] dddd [kl] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'um %s',
        past: '%s síðani',
        s: 'fá sekund',
        m: 'ein minutt',
        mm: '%d minuttir',
        h: 'ein tími',
        hh: '%d tímar',
        d: 'ein dagur',
        dd: '%d dagar',
        M: 'ein mánaði',
        MM: '%d mánaðir',
        y: 'eitt ár',
        yy: '%d ár'
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : canadian french (fr-ca)
  // author : Jonathan Abourbih : https://github.com/jonbca

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('fr-ca', {
      months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
      monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
      weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
      weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
      weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'YYYY-MM-DD',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[Aujourd\'hui à] LT',
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'dans %s',
        past: 'il y a %s',
        s: 'quelques secondes',
        m: 'une minute',
        mm: '%d minutes',
        h: 'une heure',
        hh: '%d heures',
        d: 'un jour',
        dd: '%d jours',
        M: 'un mois',
        MM: '%d mois',
        y: 'un an',
        yy: '%d ans'
      },
      ordinalParse: /\d{1,2}(er|)/,
      ordinal: function ordinal(number) {
        return number + (number === 1 ? 'er' : '');
      }
    });
  });
  // moment.js locale configuration
  // locale : french (fr)
  // author : John Fischer : https://github.com/jfroffice

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('fr', {
      months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
      monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
      weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
      weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
      weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[Aujourd\'hui à] LT',
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'dans %s',
        past: 'il y a %s',
        s: 'quelques secondes',
        m: 'une minute',
        mm: '%d minutes',
        h: 'une heure',
        hh: '%d heures',
        d: 'un jour',
        dd: '%d jours',
        M: 'un mois',
        MM: '%d mois',
        y: 'un an',
        yy: '%d ans'
      },
      ordinalParse: /\d{1,2}(er|)/,
      ordinal: function ordinal(number) {
        return number + (number === 1 ? 'er' : '');
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : frisian (fy)
  // author : Robin van der Vliet : https://github.com/robin0van0der0v

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
      monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');
    return moment.defineLocale('fy', {
      months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
      monthsShort: function monthsShort(m, format) {
        if (/-MMM-/.test(format)) {
          return monthsShortWithoutDots[m.month()];
        } else {
          return monthsShortWithDots[m.month()];
        }
      },
      weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
      weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
      weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD-MM-YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[hjoed om] LT',
        nextDay: '[moarn om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[juster om] LT',
        lastWeek: '[ôfrûne] dddd [om] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'oer %s',
        past: '%s lyn',
        s: 'in pear sekonden',
        m: 'ien minút',
        mm: '%d minuten',
        h: 'ien oere',
        hh: '%d oeren',
        d: 'ien dei',
        dd: '%d dagen',
        M: 'ien moanne',
        MM: '%d moannen',
        y: 'ien jier',
        yy: '%d jierren'
      },
      ordinalParse: /\d{1,2}(ste|de)/,
      ordinal: function ordinal(number) {
        return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : galician (gl)
  // author : Juan G. Hurtado : https://github.com/juanghurtado

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('gl', {
      months: 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'.split('_'),
      monthsShort: 'Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.'.split('_'),
      weekdays: 'Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado'.split('_'),
      weekdaysShort: 'Dom._Lun._Mar._Mér._Xov._Ven._Sáb.'.split('_'),
      weekdaysMin: 'Do_Lu_Ma_Mé_Xo_Ve_Sá'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd D MMMM YYYY LT'
      },
      calendar: {
        sameDay: function sameDay() {
          return '[hoxe ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
        },
        nextDay: function nextDay() {
          return '[mañá ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
        },
        nextWeek: function nextWeek() {
          return 'dddd [' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
        },
        lastDay: function lastDay() {
          return '[onte ' + (this.hours() !== 1 ? 'á' : 'a') + '] LT';
        },
        lastWeek: function lastWeek() {
          return '[o] dddd [pasado ' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: function future(str) {
          if (str === 'uns segundos') {
            return 'nuns segundos';
          }
          return 'en ' + str;
        },
        past: 'hai %s',
        s: 'uns segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'unha hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un ano',
        yy: '%d anos'
      },
      ordinalParse: /\d{1,2}º/,
      ordinal: '%dº',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : Hebrew (he)
  // author : Tomer Cohen : https://github.com/tomer
  // author : Moshe Simantov : https://github.com/DevelopmentIL
  // author : Tal Ater : https://github.com/TalAter

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('he', {
      months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
      monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
      weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
      weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
      weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [ב]MMMM YYYY',
        LLL: 'D [ב]MMMM YYYY LT',
        LLLL: 'dddd, D [ב]MMMM YYYY LT',
        l: 'D/M/YYYY',
        ll: 'D MMM YYYY',
        lll: 'D MMM YYYY LT',
        llll: 'ddd, D MMM YYYY LT'
      },
      calendar: {
        sameDay: '[היום ב־]LT',
        nextDay: '[מחר ב־]LT',
        nextWeek: 'dddd [בשעה] LT',
        lastDay: '[אתמול ב־]LT',
        lastWeek: '[ביום] dddd [האחרון בשעה] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'בעוד %s',
        past: 'לפני %s',
        s: 'מספר שניות',
        m: 'דקה',
        mm: '%d דקות',
        h: 'שעה',
        hh: function hh(number) {
          if (number === 2) {
            return 'שעתיים';
          }
          return number + ' שעות';
        },
        d: 'יום',
        dd: function dd(number) {
          if (number === 2) {
            return 'יומיים';
          }
          return number + ' ימים';
        },
        M: 'חודש',
        MM: function MM(number) {
          if (number === 2) {
            return 'חודשיים';
          }
          return number + ' חודשים';
        },
        y: 'שנה',
        yy: function yy(number) {
          if (number === 2) {
            return 'שנתיים';
          } else if (number % 10 === 0 && number !== 10) {
            return number + ' שנה';
          }
          return number + ' שנים';
        }
      }
    });
  });
  // moment.js locale configuration
  // locale : hindi (hi)
  // author : Mayank Singhal : https://github.com/mayanksinghal

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
      },
      numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
      };
    return moment.defineLocale('hi', {
      months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
      monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
      weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
      weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
      weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
      longDateFormat: {
        LT: 'A h:mm बजे',
        LTS: 'A h:mm:ss बजे',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, LT',
        LLLL: 'dddd, D MMMM YYYY, LT'
      },
      calendar: {
        sameDay: '[आज] LT',
        nextDay: '[कल] LT',
        nextWeek: 'dddd, LT',
        lastDay: '[कल] LT',
        lastWeek: '[पिछले] dddd, LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s में',
        past: '%s पहले',
        s: 'कुछ ही क्षण',
        m: 'एक मिनट',
        mm: '%d मिनट',
        h: 'एक घंटा',
        hh: '%d घंटे',
        d: 'एक दिन',
        dd: '%d दिन',
        M: 'एक महीने',
        MM: '%d महीने',
        y: 'एक वर्ष',
        yy: '%d वर्ष'
      },
      preparse: function preparse(string) {
        return string.replace(/[१२३४५६७८९०]/g, function (match) {
          return numberMap[match];
        });
      },
      postformat: function postformat(string) {
        return string.replace(/\d/g, function (match) {
          return symbolMap[match];
        });
      },
      // Hindi notation for meridiems are quite fuzzy in practice. While there exists
      // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
      meridiemParse: /रात|सुबह|दोपहर|शाम/,
      meridiemHour: function meridiemHour(hour, meridiem) {
        if (hour === 12) {
          hour = 0;
        }
        if (meridiem === 'रात') {
          return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'सुबह') {
          return hour;
        } else if (meridiem === 'दोपहर') {
          return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'शाम') {
          return hour + 12;
        }
      },
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 4) {
          return 'रात';
        } else if (hour < 10) {
          return 'सुबह';
        } else if (hour < 17) {
          return 'दोपहर';
        } else if (hour < 20) {
          return 'शाम';
        } else {
          return 'रात';
        }
      },
      week: {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : hrvatski (hr)
  // author : Bojan Marković : https://github.com/bmarkovic

  // based on (sl) translation by Robert Sedovšek

  (function (factory) {
    factory(moment);
  })(function (moment) {
    function translate(number, withoutSuffix, key) {
      var result = number + ' ';
      switch (key) {
        case 'm':
          return withoutSuffix ? 'jedna minuta' : 'jedne minute';
        case 'mm':
          if (number === 1) {
            result += 'minuta';
          } else if (number === 2 || number === 3 || number === 4) {
            result += 'minute';
          } else {
            result += 'minuta';
          }
          return result;
        case 'h':
          return withoutSuffix ? 'jedan sat' : 'jednog sata';
        case 'hh':
          if (number === 1) {
            result += 'sat';
          } else if (number === 2 || number === 3 || number === 4) {
            result += 'sata';
          } else {
            result += 'sati';
          }
          return result;
        case 'dd':
          if (number === 1) {
            result += 'dan';
          } else {
            result += 'dana';
          }
          return result;
        case 'MM':
          if (number === 1) {
            result += 'mjesec';
          } else if (number === 2 || number === 3 || number === 4) {
            result += 'mjeseca';
          } else {
            result += 'mjeseci';
          }
          return result;
        case 'yy':
          if (number === 1) {
            result += 'godina';
          } else if (number === 2 || number === 3 || number === 4) {
            result += 'godine';
          } else {
            result += 'godina';
          }
          return result;
      }
    }
    return moment.defineLocale('hr', {
      months: 'sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_'),
      monthsShort: 'sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
      weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
      weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
      weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'LT:ss',
        L: 'DD. MM. YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY LT',
        LLLL: 'dddd, D. MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[danas u] LT',
        nextDay: '[sutra u] LT',
        nextWeek: function nextWeek() {
          switch (this.day()) {
            case 0:
              return '[u] [nedjelju] [u] LT';
            case 3:
              return '[u] [srijedu] [u] LT';
            case 6:
              return '[u] [subotu] [u] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[u] dddd [u] LT';
          }
        },
        lastDay: '[jučer u] LT',
        lastWeek: function lastWeek() {
          switch (this.day()) {
            case 0:
            case 3:
              return '[prošlu] dddd [u] LT';
            case 6:
              return '[prošle] [subote] [u] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[prošli] dddd [u] LT';
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'za %s',
        past: 'prije %s',
        s: 'par sekundi',
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: 'dan',
        dd: translate,
        M: 'mjesec',
        MM: translate,
        y: 'godinu',
        yy: translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : hungarian (hu)
  // author : Adam Brunner : https://github.com/adambrunner

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
    function translate(number, withoutSuffix, key, isFuture) {
      var num = number,
        suffix;
      switch (key) {
        case 's':
          return isFuture || withoutSuffix ? 'néhány másodperc' : 'néhány másodperce';
        case 'm':
          return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
          return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
          return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'hh':
          return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'd':
          return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
          return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
          return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'MM':
          return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'y':
          return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
        case 'yy':
          return num + (isFuture || withoutSuffix ? ' év' : ' éve');
      }
      return '';
    }
    function week(isFuture) {
      return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
    }
    return moment.defineLocale('hu', {
      months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
      monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
      weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
      weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
      weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'LT:ss',
        L: 'YYYY.MM.DD.',
        LL: 'YYYY. MMMM D.',
        LLL: 'YYYY. MMMM D., LT',
        LLLL: 'YYYY. MMMM D., dddd LT'
      },
      meridiemParse: /de|du/i,
      isPM: function isPM(input) {
        return input.charAt(1).toLowerCase() === 'u';
      },
      meridiem: function meridiem(hours, minutes, isLower) {
        if (hours < 12) {
          return isLower === true ? 'de' : 'DE';
        } else {
          return isLower === true ? 'du' : 'DU';
        }
      },
      calendar: {
        sameDay: '[ma] LT[-kor]',
        nextDay: '[holnap] LT[-kor]',
        nextWeek: function nextWeek() {
          return week.call(this, true);
        },
        lastDay: '[tegnap] LT[-kor]',
        lastWeek: function lastWeek() {
          return week.call(this, false);
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s múlva',
        past: '%s',
        s: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : Armenian (hy-am)
  // author : Armendarabyan : https://github.com/armendarabyan

  (function (factory) {
    factory(moment);
  })(function (moment) {
    function monthsCaseReplace(m, format) {
      var months = {
          'nominative': 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_'),
          'accusative': 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_')
        },
        nounCase = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(format) ? 'accusative' : 'nominative';
      return months[nounCase][m.month()];
    }
    function monthsShortCaseReplace(m, format) {
      var monthsShort = 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_');
      return monthsShort[m.month()];
    }
    function weekdaysCaseReplace(m, format) {
      var weekdays = 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_');
      return weekdays[m.day()];
    }
    return moment.defineLocale('hy-am', {
      months: monthsCaseReplace,
      monthsShort: monthsShortCaseReplace,
      weekdays: weekdaysCaseReplace,
      weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
      weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY թ.',
        LLL: 'D MMMM YYYY թ., LT',
        LLLL: 'dddd, D MMMM YYYY թ., LT'
      },
      calendar: {
        sameDay: '[այսօր] LT',
        nextDay: '[վաղը] LT',
        lastDay: '[երեկ] LT',
        nextWeek: function nextWeek() {
          return 'dddd [օրը ժամը] LT';
        },
        lastWeek: function lastWeek() {
          return '[անցած] dddd [օրը ժամը] LT';
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s հետո',
        past: '%s առաջ',
        s: 'մի քանի վայրկյան',
        m: 'րոպե',
        mm: '%d րոպե',
        h: 'ժամ',
        hh: '%d ժամ',
        d: 'օր',
        dd: '%d օր',
        M: 'ամիս',
        MM: '%d ամիս',
        y: 'տարի',
        yy: '%d տարի'
      },
      meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
      isPM: function isPM(input) {
        return /^(ցերեկվա|երեկոյան)$/.test(input);
      },
      meridiem: function meridiem(hour) {
        if (hour < 4) {
          return 'գիշերվա';
        } else if (hour < 12) {
          return 'առավոտվա';
        } else if (hour < 17) {
          return 'ցերեկվա';
        } else {
          return 'երեկոյան';
        }
      },
      ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
      ordinal: function ordinal(number, period) {
        switch (period) {
          case 'DDD':
          case 'w':
          case 'W':
          case 'DDDo':
            if (number === 1) {
              return number + '-ին';
            }
            return number + '-րդ';
          default:
            return number;
        }
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : Bahasa Indonesia (id)
  // author : Mohammad Satrio Utomo : https://github.com/tyok
  // reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('id', {
      months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
      weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
      weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
      weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
      longDateFormat: {
        LT: 'HH.mm',
        LTS: 'LT.ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [pukul] LT',
        LLLL: 'dddd, D MMMM YYYY [pukul] LT'
      },
      meridiemParse: /pagi|siang|sore|malam/,
      meridiemHour: function meridiemHour(hour, meridiem) {
        if (hour === 12) {
          hour = 0;
        }
        if (meridiem === 'pagi') {
          return hour;
        } else if (meridiem === 'siang') {
          return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'sore' || meridiem === 'malam') {
          return hour + 12;
        }
      },
      meridiem: function meridiem(hours, minutes, isLower) {
        if (hours < 11) {
          return 'pagi';
        } else if (hours < 15) {
          return 'siang';
        } else if (hours < 19) {
          return 'sore';
        } else {
          return 'malam';
        }
      },
      calendar: {
        sameDay: '[Hari ini pukul] LT',
        nextDay: '[Besok pukul] LT',
        nextWeek: 'dddd [pukul] LT',
        lastDay: '[Kemarin pukul] LT',
        lastWeek: 'dddd [lalu pukul] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'dalam %s',
        past: '%s yang lalu',
        s: 'beberapa detik',
        m: 'semenit',
        mm: '%d menit',
        h: 'sejam',
        hh: '%d jam',
        d: 'sehari',
        dd: '%d hari',
        M: 'sebulan',
        MM: '%d bulan',
        y: 'setahun',
        yy: '%d tahun'
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : icelandic (is)
  // author : Hinrik Örn Sigurðsson : https://github.com/hinrik

  (function (factory) {
    factory(moment);
  })(function (moment) {
    function plural(n) {
      if (n % 100 === 11) {
        return true;
      } else if (n % 10 === 1) {
        return false;
      }
      return true;
    }
    function translate(number, withoutSuffix, key, isFuture) {
      var result = number + ' ';
      switch (key) {
        case 's':
          return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
        case 'm':
          return withoutSuffix ? 'mínúta' : 'mínútu';
        case 'mm':
          if (plural(number)) {
            return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
          } else if (withoutSuffix) {
            return result + 'mínúta';
          }
          return result + 'mínútu';
        case 'hh':
          if (plural(number)) {
            return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
          }
          return result + 'klukkustund';
        case 'd':
          if (withoutSuffix) {
            return 'dagur';
          }
          return isFuture ? 'dag' : 'degi';
        case 'dd':
          if (plural(number)) {
            if (withoutSuffix) {
              return result + 'dagar';
            }
            return result + (isFuture ? 'daga' : 'dögum');
          } else if (withoutSuffix) {
            return result + 'dagur';
          }
          return result + (isFuture ? 'dag' : 'degi');
        case 'M':
          if (withoutSuffix) {
            return 'mánuður';
          }
          return isFuture ? 'mánuð' : 'mánuði';
        case 'MM':
          if (plural(number)) {
            if (withoutSuffix) {
              return result + 'mánuðir';
            }
            return result + (isFuture ? 'mánuði' : 'mánuðum');
          } else if (withoutSuffix) {
            return result + 'mánuður';
          }
          return result + (isFuture ? 'mánuð' : 'mánuði');
        case 'y':
          return withoutSuffix || isFuture ? 'ár' : 'ári';
        case 'yy':
          if (plural(number)) {
            return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
          }
          return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
      }
    }
    return moment.defineLocale('is', {
      months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
      monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
      weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
      weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
      weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY [kl.] LT',
        LLLL: 'dddd, D. MMMM YYYY [kl.] LT'
      },
      calendar: {
        sameDay: '[í dag kl.] LT',
        nextDay: '[á morgun kl.] LT',
        nextWeek: 'dddd [kl.] LT',
        lastDay: '[í gær kl.] LT',
        lastWeek: '[síðasta] dddd [kl.] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'eftir %s',
        past: 'fyrir %s síðan',
        s: translate,
        m: translate,
        mm: translate,
        h: 'klukkustund',
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : italian (it)
  // author : Lorenzo : https://github.com/aliem
  // author: Mattia Larentis: https://github.com/nostalgiaz

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('it', {
      months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
      monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
      weekdays: 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
      weekdaysShort: 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
      weekdaysMin: 'D_L_Ma_Me_G_V_S'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd, D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[Oggi alle] LT',
        nextDay: '[Domani alle] LT',
        nextWeek: 'dddd [alle] LT',
        lastDay: '[Ieri alle] LT',
        lastWeek: function lastWeek() {
          switch (this.day()) {
            case 0:
              return '[la scorsa] dddd [alle] LT';
            default:
              return '[lo scorso] dddd [alle] LT';
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: function future(s) {
          return (/^[0-9].+$/.test(s) ? 'tra' : 'in') + ' ' + s;
        },
        past: '%s fa',
        s: 'alcuni secondi',
        m: 'un minuto',
        mm: '%d minuti',
        h: 'un\'ora',
        hh: '%d ore',
        d: 'un giorno',
        dd: '%d giorni',
        M: 'un mese',
        MM: '%d mesi',
        y: 'un anno',
        yy: '%d anni'
      },
      ordinalParse: /\d{1,2}º/,
      ordinal: '%dº',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : japanese (ja)
  // author : LI Long : https://github.com/baryon

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('ja', {
      months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
      monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
      weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
      weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
      weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
      longDateFormat: {
        LT: 'Ah時m分',
        LTS: 'LTs秒',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日LT',
        LLLL: 'YYYY年M月D日LT dddd'
      },
      meridiemParse: /午前|午後/i,
      isPM: function isPM(input) {
        return input === '午後';
      },
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 12) {
          return '午前';
        } else {
          return '午後';
        }
      },
      calendar: {
        sameDay: '[今日] LT',
        nextDay: '[明日] LT',
        nextWeek: '[来週]dddd LT',
        lastDay: '[昨日] LT',
        lastWeek: '[前週]dddd LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s後',
        past: '%s前',
        s: '数秒',
        m: '1分',
        mm: '%d分',
        h: '1時間',
        hh: '%d時間',
        d: '1日',
        dd: '%d日',
        M: '1ヶ月',
        MM: '%dヶ月',
        y: '1年',
        yy: '%d年'
      }
    });
  });
  // moment.js locale configuration
  // locale : Georgian (ka)
  // author : Irakli Janiashvili : https://github.com/irakli-janiashvili

  (function (factory) {
    factory(moment);
  })(function (moment) {
    function monthsCaseReplace(m, format) {
      var months = {
          'nominative': 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
          'accusative': 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
        },
        nounCase = /D[oD] *MMMM?/.test(format) ? 'accusative' : 'nominative';
      return months[nounCase][m.month()];
    }
    function weekdaysCaseReplace(m, format) {
      var weekdays = {
          'nominative': 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
          'accusative': 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_')
        },
        nounCase = /(წინა|შემდეგ)/.test(format) ? 'accusative' : 'nominative';
      return weekdays[nounCase][m.day()];
    }
    return moment.defineLocale('ka', {
      months: monthsCaseReplace,
      monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
      weekdays: weekdaysCaseReplace,
      weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
      weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
      longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd, D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[დღეს] LT[-ზე]',
        nextDay: '[ხვალ] LT[-ზე]',
        lastDay: '[გუშინ] LT[-ზე]',
        nextWeek: '[შემდეგ] dddd LT[-ზე]',
        lastWeek: '[წინა] dddd LT-ზე',
        sameElse: 'L'
      },
      relativeTime: {
        future: function future(s) {
          return /(წამი|წუთი|საათი|წელი)/.test(s) ? s.replace(/ი$/, 'ში') : s + 'ში';
        },
        past: function past(s) {
          if (/(წამი|წუთი|საათი|დღე|თვე)/.test(s)) {
            return s.replace(/(ი|ე)$/, 'ის წინ');
          }
          if (/წელი/.test(s)) {
            return s.replace(/წელი$/, 'წლის წინ');
          }
        },
        s: 'რამდენიმე წამი',
        m: 'წუთი',
        mm: '%d წუთი',
        h: 'საათი',
        hh: '%d საათი',
        d: 'დღე',
        dd: '%d დღე',
        M: 'თვე',
        MM: '%d თვე',
        y: 'წელი',
        yy: '%d წელი'
      },
      ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
      ordinal: function ordinal(number) {
        if (number === 0) {
          return number;
        }
        if (number === 1) {
          return number + '-ლი';
        }
        if (number < 20 || number <= 100 && number % 20 === 0 || number % 100 === 0) {
          return 'მე-' + number;
        }
        return number + '-ე';
      },
      week: {
        dow: 1,
        doy: 7
      }
    });
  });
  // moment.js locale configuration
  // locale : khmer (km)
  // author : Kruy Vanna : https://github.com/kruyvanna

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('km', {
      months: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
      monthsShort: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
      weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
      weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
      weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd, D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[ថ្ងៃនៈ ម៉ោង] LT',
        nextDay: '[ស្អែក ម៉ោង] LT',
        nextWeek: 'dddd [ម៉ោង] LT',
        lastDay: '[ម្សិលមិញ ម៉ោង] LT',
        lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%sទៀត',
        past: '%sមុន',
        s: 'ប៉ុន្មានវិនាទី',
        m: 'មួយនាទី',
        mm: '%d នាទី',
        h: 'មួយម៉ោង',
        hh: '%d ម៉ោង',
        d: 'មួយថ្ងៃ',
        dd: '%d ថ្ងៃ',
        M: 'មួយខែ',
        MM: '%d ខែ',
        y: 'មួយឆ្នាំ',
        yy: '%d ឆ្នាំ'
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : korean (ko)
  //
  // authors
  //
  // - Kyungwook, Park : https://github.com/kyungw00k
  // - Jeeeyul Lee <jeeeyul@gmail.com>
  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('ko', {
      months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
      monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
      weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
      weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
      weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
      longDateFormat: {
        LT: 'A h시 m분',
        LTS: 'A h시 m분 s초',
        L: 'YYYY.MM.DD',
        LL: 'YYYY년 MMMM D일',
        LLL: 'YYYY년 MMMM D일 LT',
        LLLL: 'YYYY년 MMMM D일 dddd LT'
      },
      calendar: {
        sameDay: '오늘 LT',
        nextDay: '내일 LT',
        nextWeek: 'dddd LT',
        lastDay: '어제 LT',
        lastWeek: '지난주 dddd LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s 후',
        past: '%s 전',
        s: '몇초',
        ss: '%d초',
        m: '일분',
        mm: '%d분',
        h: '한시간',
        hh: '%d시간',
        d: '하루',
        dd: '%d일',
        M: '한달',
        MM: '%d달',
        y: '일년',
        yy: '%d년'
      },
      ordinalParse: /\d{1,2}일/,
      ordinal: '%d일',
      meridiemParse: /오전|오후/,
      isPM: function isPM(token) {
        return token === '오후';
      },
      meridiem: function meridiem(hour, minute, isUpper) {
        return hour < 12 ? '오전' : '오후';
      }
    });
  });
  // moment.js locale configuration
  // locale : Luxembourgish (lb)
  // author : mweimerskirch : https://github.com/mweimerskirch, David Raison : https://github.com/kwisatz

  // Note: Luxembourgish has a very particular phonological rule ('Eifeler Regel') that causes the
  // deletion of the final 'n' in certain contexts. That's what the 'eifelerRegelAppliesToWeekday'
  // and 'eifelerRegelAppliesToNumber' methods are meant for

  (function (factory) {
    factory(moment);
  })(function (moment) {
    function processRelativeTime(number, withoutSuffix, key, isFuture) {
      var format = {
        'm': ['eng Minutt', 'enger Minutt'],
        'h': ['eng Stonn', 'enger Stonn'],
        'd': ['een Dag', 'engem Dag'],
        'M': ['ee Mount', 'engem Mount'],
        'y': ['ee Joer', 'engem Joer']
      };
      return withoutSuffix ? format[key][0] : format[key][1];
    }
    function processFutureTime(string) {
      var number = string.substr(0, string.indexOf(' '));
      if (eifelerRegelAppliesToNumber(number)) {
        return 'a ' + string;
      }
      return 'an ' + string;
    }
    function processPastTime(string) {
      var number = string.substr(0, string.indexOf(' '));
      if (eifelerRegelAppliesToNumber(number)) {
        return 'viru ' + string;
      }
      return 'virun ' + string;
    }

    /**
     * Returns true if the word before the given number loses the '-n' ending.
     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
     *
     * @param number {integer}
     * @returns {boolean}
     */
    function eifelerRegelAppliesToNumber(number) {
      number = parseInt(number, 10);
      if (isNaN(number)) {
        return false;
      }
      if (number < 0) {
        // Negative Number --> always true
        return true;
      } else if (number < 10) {
        // Only 1 digit
        if (4 <= number && number <= 7) {
          return true;
        }
        return false;
      } else if (number < 100) {
        // 2 digits
        var lastDigit = number % 10,
          firstDigit = number / 10;
        if (lastDigit === 0) {
          return eifelerRegelAppliesToNumber(firstDigit);
        }
        return eifelerRegelAppliesToNumber(lastDigit);
      } else if (number < 10000) {
        // 3 or 4 digits --> recursively check first digit
        while (number >= 10) {
          number = number / 10;
        }
        return eifelerRegelAppliesToNumber(number);
      } else {
        // Anything larger than 4 digits: recursively check first n-3 digits
        number = number / 1000;
        return eifelerRegelAppliesToNumber(number);
      }
    }
    return moment.defineLocale('lb', {
      months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
      monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
      weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
      weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
      weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
      longDateFormat: {
        LT: 'H:mm [Auer]',
        LTS: 'H:mm:ss [Auer]',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY LT',
        LLLL: 'dddd, D. MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[Haut um] LT',
        sameElse: 'L',
        nextDay: '[Muer um] LT',
        nextWeek: 'dddd [um] LT',
        lastDay: '[Gëschter um] LT',
        lastWeek: function lastWeek() {
          // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
          switch (this.day()) {
            case 2:
            case 4:
              return '[Leschten] dddd [um] LT';
            default:
              return '[Leschte] dddd [um] LT';
          }
        }
      },
      relativeTime: {
        future: processFutureTime,
        past: processPastTime,
        s: 'e puer Sekonnen',
        m: processRelativeTime,
        mm: '%d Minutten',
        h: processRelativeTime,
        hh: '%d Stonnen',
        d: processRelativeTime,
        dd: '%d Deeg',
        M: processRelativeTime,
        MM: '%d Méint',
        y: processRelativeTime,
        yy: '%d Joer'
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : Lithuanian (lt)
  // author : Mindaugas Mozūras : https://github.com/mmozuras

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var units = {
        'm': 'minutė_minutės_minutę',
        'mm': 'minutės_minučių_minutes',
        'h': 'valanda_valandos_valandą',
        'hh': 'valandos_valandų_valandas',
        'd': 'diena_dienos_dieną',
        'dd': 'dienos_dienų_dienas',
        'M': 'mėnuo_mėnesio_mėnesį',
        'MM': 'mėnesiai_mėnesių_mėnesius',
        'y': 'metai_metų_metus',
        'yy': 'metai_metų_metus'
      },
      weekDays = 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_');
    function translateSeconds(number, withoutSuffix, key, isFuture) {
      if (withoutSuffix) {
        return 'kelios sekundės';
      } else {
        return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
      }
    }
    function translateSingular(number, withoutSuffix, key, isFuture) {
      return withoutSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
    }
    function special(number) {
      return number % 10 === 0 || number > 10 && number < 20;
    }
    function forms(key) {
      return units[key].split('_');
    }
    function translate(number, withoutSuffix, key, isFuture) {
      var result = number + ' ';
      if (number === 1) {
        return result + translateSingular(number, withoutSuffix, key[0], isFuture);
      } else if (withoutSuffix) {
        return result + (special(number) ? forms(key)[1] : forms(key)[0]);
      } else {
        if (isFuture) {
          return result + forms(key)[1];
        } else {
          return result + (special(number) ? forms(key)[1] : forms(key)[2]);
        }
      }
    }
    function relativeWeekDay(moment, format) {
      var nominative = format.indexOf('dddd HH:mm') === -1,
        weekDay = weekDays[moment.day()];
      return nominative ? weekDay : weekDay.substring(0, weekDay.length - 2) + 'į';
    }
    return moment.defineLocale('lt', {
      months: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
      monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
      weekdays: relativeWeekDay,
      weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
      weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'YYYY-MM-DD',
        LL: 'YYYY [m.] MMMM D [d.]',
        LLL: 'YYYY [m.] MMMM D [d.], LT [val.]',
        LLLL: 'YYYY [m.] MMMM D [d.], dddd, LT [val.]',
        l: 'YYYY-MM-DD',
        ll: 'YYYY [m.] MMMM D [d.]',
        lll: 'YYYY [m.] MMMM D [d.], LT [val.]',
        llll: 'YYYY [m.] MMMM D [d.], ddd, LT [val.]'
      },
      calendar: {
        sameDay: '[Šiandien] LT',
        nextDay: '[Rytoj] LT',
        nextWeek: 'dddd LT',
        lastDay: '[Vakar] LT',
        lastWeek: '[Praėjusį] dddd LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'po %s',
        past: 'prieš %s',
        s: translateSeconds,
        m: translateSingular,
        mm: translate,
        h: translateSingular,
        hh: translate,
        d: translateSingular,
        dd: translate,
        M: translateSingular,
        MM: translate,
        y: translateSingular,
        yy: translate
      },
      ordinalParse: /\d{1,2}-oji/,
      ordinal: function ordinal(number) {
        return number + '-oji';
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : latvian (lv)
  // author : Kristaps Karlsons : https://github.com/skakri

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var units = {
      'mm': 'minūti_minūtes_minūte_minūtes',
      'hh': 'stundu_stundas_stunda_stundas',
      'dd': 'dienu_dienas_diena_dienas',
      'MM': 'mēnesi_mēnešus_mēnesis_mēneši',
      'yy': 'gadu_gadus_gads_gadi'
    };
    function format(word, number, withoutSuffix) {
      var forms = word.split('_');
      if (withoutSuffix) {
        return number % 10 === 1 && number !== 11 ? forms[2] : forms[3];
      } else {
        return number % 10 === 1 && number !== 11 ? forms[0] : forms[1];
      }
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
      return number + ' ' + format(units[key], number, withoutSuffix);
    }
    return moment.defineLocale('lv', {
      months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
      monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
      weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
      weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
      weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD.MM.YYYY',
        LL: 'YYYY. [gada] D. MMMM',
        LLL: 'YYYY. [gada] D. MMMM, LT',
        LLLL: 'YYYY. [gada] D. MMMM, dddd, LT'
      },
      calendar: {
        sameDay: '[Šodien pulksten] LT',
        nextDay: '[Rīt pulksten] LT',
        nextWeek: 'dddd [pulksten] LT',
        lastDay: '[Vakar pulksten] LT',
        lastWeek: '[Pagājušā] dddd [pulksten] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s vēlāk',
        past: '%s agrāk',
        s: 'dažas sekundes',
        m: 'minūti',
        mm: relativeTimeWithPlural,
        h: 'stundu',
        hh: relativeTimeWithPlural,
        d: 'dienu',
        dd: relativeTimeWithPlural,
        M: 'mēnesi',
        MM: relativeTimeWithPlural,
        y: 'gadu',
        yy: relativeTimeWithPlural
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : macedonian (mk)
  // author : Borislav Mickov : https://github.com/B0k0

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('mk', {
      months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
      monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
      weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
      weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
      weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'LT:ss',
        L: 'D.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd, D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[Денес во] LT',
        nextDay: '[Утре во] LT',
        nextWeek: 'dddd [во] LT',
        lastDay: '[Вчера во] LT',
        lastWeek: function lastWeek() {
          switch (this.day()) {
            case 0:
            case 3:
            case 6:
              return '[Во изминатата] dddd [во] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[Во изминатиот] dddd [во] LT';
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'после %s',
        past: 'пред %s',
        s: 'неколку секунди',
        m: 'минута',
        mm: '%d минути',
        h: 'час',
        hh: '%d часа',
        d: 'ден',
        dd: '%d дена',
        M: 'месец',
        MM: '%d месеци',
        y: 'година',
        yy: '%d години'
      },
      ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
      ordinal: function ordinal(number) {
        var lastDigit = number % 10,
          last2Digits = number % 100;
        if (number === 0) {
          return number + '-ев';
        } else if (last2Digits === 0) {
          return number + '-ен';
        } else if (last2Digits > 10 && last2Digits < 20) {
          return number + '-ти';
        } else if (lastDigit === 1) {
          return number + '-ви';
        } else if (lastDigit === 2) {
          return number + '-ри';
        } else if (lastDigit === 7 || lastDigit === 8) {
          return number + '-ми';
        } else {
          return number + '-ти';
        }
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : malayalam (ml)
  // author : Floyd Pink : https://github.com/floydpink

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('ml', {
      months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
      monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
      weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
      weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
      weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
      longDateFormat: {
        LT: 'A h:mm -നു',
        LTS: 'A h:mm:ss -നു',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, LT',
        LLLL: 'dddd, D MMMM YYYY, LT'
      },
      calendar: {
        sameDay: '[ഇന്ന്] LT',
        nextDay: '[നാളെ] LT',
        nextWeek: 'dddd, LT',
        lastDay: '[ഇന്നലെ] LT',
        lastWeek: '[കഴിഞ്ഞ] dddd, LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s കഴിഞ്ഞ്',
        past: '%s മുൻപ്',
        s: 'അൽപ നിമിഷങ്ങൾ',
        m: 'ഒരു മിനിറ്റ്',
        mm: '%d മിനിറ്റ്',
        h: 'ഒരു മണിക്കൂർ',
        hh: '%d മണിക്കൂർ',
        d: 'ഒരു ദിവസം',
        dd: '%d ദിവസം',
        M: 'ഒരു മാസം',
        MM: '%d മാസം',
        y: 'ഒരു വർഷം',
        yy: '%d വർഷം'
      },
      meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
      isPM: function isPM(input) {
        return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(input);
      },
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 4) {
          return 'രാത്രി';
        } else if (hour < 12) {
          return 'രാവിലെ';
        } else if (hour < 17) {
          return 'ഉച്ച കഴിഞ്ഞ്';
        } else if (hour < 20) {
          return 'വൈകുന്നേരം';
        } else {
          return 'രാത്രി';
        }
      }
    });
  });
  // moment.js locale configuration
  // locale : Marathi (mr)
  // author : Harshad Kale : https://github.com/kalehv

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
      },
      numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
      };
    return moment.defineLocale('mr', {
      months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
      monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
      weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
      weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
      weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
      longDateFormat: {
        LT: 'A h:mm वाजता',
        LTS: 'A h:mm:ss वाजता',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, LT',
        LLLL: 'dddd, D MMMM YYYY, LT'
      },
      calendar: {
        sameDay: '[आज] LT',
        nextDay: '[उद्या] LT',
        nextWeek: 'dddd, LT',
        lastDay: '[काल] LT',
        lastWeek: '[मागील] dddd, LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s नंतर',
        past: '%s पूर्वी',
        s: 'सेकंद',
        m: 'एक मिनिट',
        mm: '%d मिनिटे',
        h: 'एक तास',
        hh: '%d तास',
        d: 'एक दिवस',
        dd: '%d दिवस',
        M: 'एक महिना',
        MM: '%d महिने',
        y: 'एक वर्ष',
        yy: '%d वर्षे'
      },
      preparse: function preparse(string) {
        return string.replace(/[१२३४५६७८९०]/g, function (match) {
          return numberMap[match];
        });
      },
      postformat: function postformat(string) {
        return string.replace(/\d/g, function (match) {
          return symbolMap[match];
        });
      },
      meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
      meridiemHour: function meridiemHour(hour, meridiem) {
        if (hour === 12) {
          hour = 0;
        }
        if (meridiem === 'रात्री') {
          return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'सकाळी') {
          return hour;
        } else if (meridiem === 'दुपारी') {
          return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'सायंकाळी') {
          return hour + 12;
        }
      },
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 4) {
          return 'रात्री';
        } else if (hour < 10) {
          return 'सकाळी';
        } else if (hour < 17) {
          return 'दुपारी';
        } else if (hour < 20) {
          return 'सायंकाळी';
        } else {
          return 'रात्री';
        }
      },
      week: {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : Bahasa Malaysia (ms-MY)
  // author : Weldan Jamili : https://github.com/weldan

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('ms-my', {
      months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
      monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
      weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
      weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
      weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
      longDateFormat: {
        LT: 'HH.mm',
        LTS: 'LT.ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [pukul] LT',
        LLLL: 'dddd, D MMMM YYYY [pukul] LT'
      },
      meridiemParse: /pagi|tengahari|petang|malam/,
      meridiemHour: function meridiemHour(hour, meridiem) {
        if (hour === 12) {
          hour = 0;
        }
        if (meridiem === 'pagi') {
          return hour;
        } else if (meridiem === 'tengahari') {
          return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'petang' || meridiem === 'malam') {
          return hour + 12;
        }
      },
      meridiem: function meridiem(hours, minutes, isLower) {
        if (hours < 11) {
          return 'pagi';
        } else if (hours < 15) {
          return 'tengahari';
        } else if (hours < 19) {
          return 'petang';
        } else {
          return 'malam';
        }
      },
      calendar: {
        sameDay: '[Hari ini pukul] LT',
        nextDay: '[Esok pukul] LT',
        nextWeek: 'dddd [pukul] LT',
        lastDay: '[Kelmarin pukul] LT',
        lastWeek: 'dddd [lepas pukul] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'dalam %s',
        past: '%s yang lepas',
        s: 'beberapa saat',
        m: 'seminit',
        mm: '%d minit',
        h: 'sejam',
        hh: '%d jam',
        d: 'sehari',
        dd: '%d hari',
        M: 'sebulan',
        MM: '%d bulan',
        y: 'setahun',
        yy: '%d tahun'
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : Burmese (my)
  // author : Squar team, mysquar.com

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var symbolMap = {
        '1': '၁',
        '2': '၂',
        '3': '၃',
        '4': '၄',
        '5': '၅',
        '6': '၆',
        '7': '၇',
        '8': '၈',
        '9': '၉',
        '0': '၀'
      },
      numberMap = {
        '၁': '1',
        '၂': '2',
        '၃': '3',
        '၄': '4',
        '၅': '5',
        '၆': '6',
        '၇': '7',
        '၈': '8',
        '၉': '9',
        '၀': '0'
      };
    return moment.defineLocale('my', {
      months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
      monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
      weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
      weekdaysShort: 'နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
      weekdaysMin: 'နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[ယနေ.] LT [မှာ]',
        nextDay: '[မနက်ဖြန်] LT [မှာ]',
        nextWeek: 'dddd LT [မှာ]',
        lastDay: '[မနေ.က] LT [မှာ]',
        lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'လာမည့် %s မှာ',
        past: 'လွန်ခဲ့သော %s က',
        s: 'စက္ကန်.အနည်းငယ်',
        m: 'တစ်မိနစ်',
        mm: '%d မိနစ်',
        h: 'တစ်နာရီ',
        hh: '%d နာရီ',
        d: 'တစ်ရက်',
        dd: '%d ရက်',
        M: 'တစ်လ',
        MM: '%d လ',
        y: 'တစ်နှစ်',
        yy: '%d နှစ်'
      },
      preparse: function preparse(string) {
        return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
          return numberMap[match];
        });
      },
      postformat: function postformat(string) {
        return string.replace(/\d/g, function (match) {
          return symbolMap[match];
        });
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : norwegian bokmål (nb)
  // authors : Espen Hovlandsdal : https://github.com/rexxars
  //           Sigurd Gartmann : https://github.com/sigurdga

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('nb', {
      months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
      monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
      weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
      weekdaysShort: 'søn_man_tirs_ons_tors_fre_lør'.split('_'),
      weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
      longDateFormat: {
        LT: 'H.mm',
        LTS: 'LT.ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY [kl.] LT',
        LLLL: 'dddd D. MMMM YYYY [kl.] LT'
      },
      calendar: {
        sameDay: '[i dag kl.] LT',
        nextDay: '[i morgen kl.] LT',
        nextWeek: 'dddd [kl.] LT',
        lastDay: '[i går kl.] LT',
        lastWeek: '[forrige] dddd [kl.] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'om %s',
        past: 'for %s siden',
        s: 'noen sekunder',
        m: 'ett minutt',
        mm: '%d minutter',
        h: 'en time',
        hh: '%d timer',
        d: 'en dag',
        dd: '%d dager',
        M: 'en måned',
        MM: '%d måneder',
        y: 'ett år',
        yy: '%d år'
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : nepali/nepalese
  // author : suvash : https://github.com/suvash

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
      },
      numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
      };
    return moment.defineLocale('ne', {
      months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
      monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
      weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
      weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
      weekdaysMin: 'आइ._सो._मङ्_बु._बि._शु._श.'.split('_'),
      longDateFormat: {
        LT: 'Aको h:mm बजे',
        LTS: 'Aको h:mm:ss बजे',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, LT',
        LLLL: 'dddd, D MMMM YYYY, LT'
      },
      preparse: function preparse(string) {
        return string.replace(/[१२३४५६७८९०]/g, function (match) {
          return numberMap[match];
        });
      },
      postformat: function postformat(string) {
        return string.replace(/\d/g, function (match) {
          return symbolMap[match];
        });
      },
      meridiemParse: /राती|बिहान|दिउँसो|बेलुका|साँझ|राती/,
      meridiemHour: function meridiemHour(hour, meridiem) {
        if (hour === 12) {
          hour = 0;
        }
        if (meridiem === 'राती') {
          return hour < 3 ? hour : hour + 12;
        } else if (meridiem === 'बिहान') {
          return hour;
        } else if (meridiem === 'दिउँसो') {
          return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'बेलुका' || meridiem === 'साँझ') {
          return hour + 12;
        }
      },
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 3) {
          return 'राती';
        } else if (hour < 10) {
          return 'बिहान';
        } else if (hour < 15) {
          return 'दिउँसो';
        } else if (hour < 18) {
          return 'बेलुका';
        } else if (hour < 20) {
          return 'साँझ';
        } else {
          return 'राती';
        }
      },
      calendar: {
        sameDay: '[आज] LT',
        nextDay: '[भोली] LT',
        nextWeek: '[आउँदो] dddd[,] LT',
        lastDay: '[हिजो] LT',
        lastWeek: '[गएको] dddd[,] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%sमा',
        past: '%s अगाडी',
        s: 'केही समय',
        m: 'एक मिनेट',
        mm: '%d मिनेट',
        h: 'एक घण्टा',
        hh: '%d घण्टा',
        d: 'एक दिन',
        dd: '%d दिन',
        M: 'एक महिना',
        MM: '%d महिना',
        y: 'एक बर्ष',
        yy: '%d बर्ष'
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : dutch (nl)
  // author : Joris Röling : https://github.com/jjupiter

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
      monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
    return moment.defineLocale('nl', {
      months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
      monthsShort: function monthsShort(m, format) {
        if (/-MMM-/.test(format)) {
          return monthsShortWithoutDots[m.month()];
        } else {
          return monthsShortWithDots[m.month()];
        }
      },
      weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
      weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
      weekdaysMin: 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD-MM-YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'over %s',
        past: '%s geleden',
        s: 'een paar seconden',
        m: 'één minuut',
        mm: '%d minuten',
        h: 'één uur',
        hh: '%d uur',
        d: 'één dag',
        dd: '%d dagen',
        M: 'één maand',
        MM: '%d maanden',
        y: 'één jaar',
        yy: '%d jaar'
      },
      ordinalParse: /\d{1,2}(ste|de)/,
      ordinal: function ordinal(number) {
        return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : norwegian nynorsk (nn)
  // author : https://github.com/mechuwind

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('nn', {
      months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
      monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
      weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
      weekdaysShort: 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
      weekdaysMin: 'su_må_ty_on_to_fr_lø'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[I dag klokka] LT',
        nextDay: '[I morgon klokka] LT',
        nextWeek: 'dddd [klokka] LT',
        lastDay: '[I går klokka] LT',
        lastWeek: '[Føregåande] dddd [klokka] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'om %s',
        past: 'for %s sidan',
        s: 'nokre sekund',
        m: 'eit minutt',
        mm: '%d minutt',
        h: 'ein time',
        hh: '%d timar',
        d: 'ein dag',
        dd: '%d dagar',
        M: 'ein månad',
        MM: '%d månader',
        y: 'eit år',
        yy: '%d år'
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : polish (pl)
  // author : Rafal Hirsz : https://github.com/evoL

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
      monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
    function plural(n) {
      return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1;
    }
    function translate(number, withoutSuffix, key) {
      var result = number + ' ';
      switch (key) {
        case 'm':
          return withoutSuffix ? 'minuta' : 'minutę';
        case 'mm':
          return result + (plural(number) ? 'minuty' : 'minut');
        case 'h':
          return withoutSuffix ? 'godzina' : 'godzinę';
        case 'hh':
          return result + (plural(number) ? 'godziny' : 'godzin');
        case 'MM':
          return result + (plural(number) ? 'miesiące' : 'miesięcy');
        case 'yy':
          return result + (plural(number) ? 'lata' : 'lat');
      }
    }
    return moment.defineLocale('pl', {
      months: function months(momentToFormat, format) {
        if (/D MMMM/.test(format)) {
          return monthsSubjective[momentToFormat.month()];
        } else {
          return monthsNominative[momentToFormat.month()];
        }
      },
      monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
      weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
      weekdaysShort: 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
      weekdaysMin: 'N_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd, D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[Dziś o] LT',
        nextDay: '[Jutro o] LT',
        nextWeek: '[W] dddd [o] LT',
        lastDay: '[Wczoraj o] LT',
        lastWeek: function lastWeek() {
          switch (this.day()) {
            case 0:
              return '[W zeszłą niedzielę o] LT';
            case 3:
              return '[W zeszłą środę o] LT';
            case 6:
              return '[W zeszłą sobotę o] LT';
            default:
              return '[W zeszły] dddd [o] LT';
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'za %s',
        past: '%s temu',
        s: 'kilka sekund',
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: '1 dzień',
        dd: '%d dni',
        M: 'miesiąc',
        MM: translate,
        y: 'rok',
        yy: translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : brazilian portuguese (pt-br)
  // author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('pt-br', {
      months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
      monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
      weekdays: 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
      weekdaysShort: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
      weekdaysMin: 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY [às] LT',
        LLLL: 'dddd, D [de] MMMM [de] YYYY [às] LT'
      },
      calendar: {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: function lastWeek() {
          return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' :
          // Saturday + Sunday
          '[Última] dddd [às] LT'; // Monday - Friday
        },

        sameElse: 'L'
      },
      relativeTime: {
        future: 'em %s',
        past: '%s atrás',
        s: 'segundos',
        m: 'um minuto',
        mm: '%d minutos',
        h: 'uma hora',
        hh: '%d horas',
        d: 'um dia',
        dd: '%d dias',
        M: 'um mês',
        MM: '%d meses',
        y: 'um ano',
        yy: '%d anos'
      },
      ordinalParse: /\d{1,2}º/,
      ordinal: '%dº'
    });
  });
  // moment.js locale configuration
  // locale : portuguese (pt)
  // author : Jefferson : https://github.com/jalex79

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('pt', {
      months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
      monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
      weekdays: 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
      weekdaysShort: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
      weekdaysMin: 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY LT',
        LLLL: 'dddd, D [de] MMMM [de] YYYY LT'
      },
      calendar: {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: function lastWeek() {
          return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' :
          // Saturday + Sunday
          '[Última] dddd [às] LT'; // Monday - Friday
        },

        sameElse: 'L'
      },
      relativeTime: {
        future: 'em %s',
        past: 'há %s',
        s: 'segundos',
        m: 'um minuto',
        mm: '%d minutos',
        h: 'uma hora',
        hh: '%d horas',
        d: 'um dia',
        dd: '%d dias',
        M: 'um mês',
        MM: '%d meses',
        y: 'um ano',
        yy: '%d anos'
      },
      ordinalParse: /\d{1,2}º/,
      ordinal: '%dº',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : romanian (ro)
  // author : Vlad Gurdiga : https://github.com/gurdiga
  // author : Valentin Agachi : https://github.com/avaly

  (function (factory) {
    factory(moment);
  })(function (moment) {
    function relativeTimeWithPlural(number, withoutSuffix, key) {
      var format = {
          'mm': 'minute',
          'hh': 'ore',
          'dd': 'zile',
          'MM': 'luni',
          'yy': 'ani'
        },
        separator = ' ';
      if (number % 100 >= 20 || number >= 100 && number % 100 === 0) {
        separator = ' de ';
      }
      return number + separator + format[key];
    }
    return moment.defineLocale('ro', {
      months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
      monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
      weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
      weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
      weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'LT:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY H:mm',
        LLLL: 'dddd, D MMMM YYYY H:mm'
      },
      calendar: {
        sameDay: '[azi la] LT',
        nextDay: '[mâine la] LT',
        nextWeek: 'dddd [la] LT',
        lastDay: '[ieri la] LT',
        lastWeek: '[fosta] dddd [la] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'peste %s',
        past: '%s în urmă',
        s: 'câteva secunde',
        m: 'un minut',
        mm: relativeTimeWithPlural,
        h: 'o oră',
        hh: relativeTimeWithPlural,
        d: 'o zi',
        dd: relativeTimeWithPlural,
        M: 'o lună',
        MM: relativeTimeWithPlural,
        y: 'un an',
        yy: relativeTimeWithPlural
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : russian (ru)
  // author : Viktorminator : https://github.com/Viktorminator
  // Author : Menelion Elensúle : https://github.com/Oire

  (function (factory) {
    factory(moment);
  })(function (moment) {
    function plural(word, num) {
      var forms = word.split('_');
      return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
      var format = {
        'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
        'hh': 'час_часа_часов',
        'dd': 'день_дня_дней',
        'MM': 'месяц_месяца_месяцев',
        'yy': 'год_года_лет'
      };
      if (key === 'm') {
        return withoutSuffix ? 'минута' : 'минуту';
      } else {
        return number + ' ' + plural(format[key], +number);
      }
    }
    function monthsCaseReplace(m, format) {
      var months = {
          'nominative': 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
          'accusative': 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_')
        },
        nounCase = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(format) ? 'accusative' : 'nominative';
      return months[nounCase][m.month()];
    }
    function monthsShortCaseReplace(m, format) {
      var monthsShort = {
          'nominative': 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
          'accusative': 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_')
        },
        nounCase = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(format) ? 'accusative' : 'nominative';
      return monthsShort[nounCase][m.month()];
    }
    function weekdaysCaseReplace(m, format) {
      var weekdays = {
          'nominative': 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
          'accusative': 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_')
        },
        nounCase = /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(format) ? 'accusative' : 'nominative';
      return weekdays[nounCase][m.day()];
    }
    return moment.defineLocale('ru', {
      months: monthsCaseReplace,
      monthsShort: monthsShortCaseReplace,
      weekdays: weekdaysCaseReplace,
      weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
      weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
      monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY г.',
        LLL: 'D MMMM YYYY г., LT',
        LLLL: 'dddd, D MMMM YYYY г., LT'
      },
      calendar: {
        sameDay: '[Сегодня в] LT',
        nextDay: '[Завтра в] LT',
        lastDay: '[Вчера в] LT',
        nextWeek: function nextWeek() {
          return this.day() === 2 ? '[Во] dddd [в] LT' : '[В] dddd [в] LT';
        },
        lastWeek: function lastWeek(now) {
          if (now.week() !== this.week()) {
            switch (this.day()) {
              case 0:
                return '[В прошлое] dddd [в] LT';
              case 1:
              case 2:
              case 4:
                return '[В прошлый] dddd [в] LT';
              case 3:
              case 5:
              case 6:
                return '[В прошлую] dddd [в] LT';
            }
          } else {
            if (this.day() === 2) {
              return '[Во] dddd [в] LT';
            } else {
              return '[В] dddd [в] LT';
            }
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'через %s',
        past: '%s назад',
        s: 'несколько секунд',
        m: relativeTimeWithPlural,
        mm: relativeTimeWithPlural,
        h: 'час',
        hh: relativeTimeWithPlural,
        d: 'день',
        dd: relativeTimeWithPlural,
        M: 'месяц',
        MM: relativeTimeWithPlural,
        y: 'год',
        yy: relativeTimeWithPlural
      },
      meridiemParse: /ночи|утра|дня|вечера/i,
      isPM: function isPM(input) {
        return /^(дня|вечера)$/.test(input);
      },
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 4) {
          return 'ночи';
        } else if (hour < 12) {
          return 'утра';
        } else if (hour < 17) {
          return 'дня';
        } else {
          return 'вечера';
        }
      },
      ordinalParse: /\d{1,2}-(й|го|я)/,
      ordinal: function ordinal(number, period) {
        switch (period) {
          case 'M':
          case 'd':
          case 'DDD':
            return number + '-й';
          case 'D':
            return number + '-го';
          case 'w':
          case 'W':
            return number + '-я';
          default:
            return number;
        }
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : slovak (sk)
  // author : Martin Minka : https://github.com/k2s
  // based on work of petrbela : https://github.com/petrbela

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
      monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
    function plural(n) {
      return n > 1 && n < 5;
    }
    function translate(number, withoutSuffix, key, isFuture) {
      var result = number + ' ';
      switch (key) {
        case 's':
          // a few seconds / in a few seconds / a few seconds ago
          return withoutSuffix || isFuture ? 'pár sekúnd' : 'pár sekundami';
        case 'm':
          // a minute / in a minute / a minute ago
          return withoutSuffix ? 'minúta' : isFuture ? 'minútu' : 'minútou';
        case 'mm':
          // 9 minutes / in 9 minutes / 9 minutes ago
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'minúty' : 'minút');
          } else {
            return result + 'minútami';
          }
          break;
        case 'h':
          // an hour / in an hour / an hour ago
          return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';
        case 'hh':
          // 9 hours / in 9 hours / 9 hours ago
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'hodiny' : 'hodín');
          } else {
            return result + 'hodinami';
          }
          break;
        case 'd':
          // a day / in a day / a day ago
          return withoutSuffix || isFuture ? 'deň' : 'dňom';
        case 'dd':
          // 9 days / in 9 days / 9 days ago
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'dni' : 'dní');
          } else {
            return result + 'dňami';
          }
          break;
        case 'M':
          // a month / in a month / a month ago
          return withoutSuffix || isFuture ? 'mesiac' : 'mesiacom';
        case 'MM':
          // 9 months / in 9 months / 9 months ago
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'mesiace' : 'mesiacov');
          } else {
            return result + 'mesiacmi';
          }
          break;
        case 'y':
          // a year / in a year / a year ago
          return withoutSuffix || isFuture ? 'rok' : 'rokom';
        case 'yy':
          // 9 years / in 9 years / 9 years ago
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'roky' : 'rokov');
          } else {
            return result + 'rokmi';
          }
          break;
      }
    }
    return moment.defineLocale('sk', {
      months: months,
      monthsShort: monthsShort,
      monthsParse: function (months, monthsShort) {
        var i,
          _monthsParse = [];
        for (i = 0; i < 12; i++) {
          // use custom parser to solve problem with July (červenec)
          _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
        }
        return _monthsParse;
      }(months, monthsShort),
      weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
      weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
      weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'LT:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY LT',
        LLLL: 'dddd D. MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[dnes o] LT',
        nextDay: '[zajtra o] LT',
        nextWeek: function nextWeek() {
          switch (this.day()) {
            case 0:
              return '[v nedeľu o] LT';
            case 1:
            case 2:
              return '[v] dddd [o] LT';
            case 3:
              return '[v stredu o] LT';
            case 4:
              return '[vo štvrtok o] LT';
            case 5:
              return '[v piatok o] LT';
            case 6:
              return '[v sobotu o] LT';
          }
        },
        lastDay: '[včera o] LT',
        lastWeek: function lastWeek() {
          switch (this.day()) {
            case 0:
              return '[minulú nedeľu o] LT';
            case 1:
            case 2:
              return '[minulý] dddd [o] LT';
            case 3:
              return '[minulú stredu o] LT';
            case 4:
            case 5:
              return '[minulý] dddd [o] LT';
            case 6:
              return '[minulú sobotu o] LT';
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'za %s',
        past: 'pred %s',
        s: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : slovenian (sl)
  // author : Robert Sedovšek : https://github.com/sedovsek

  (function (factory) {
    factory(moment);
  })(function (moment) {
    function translate(number, withoutSuffix, key) {
      var result = number + ' ';
      switch (key) {
        case 'm':
          return withoutSuffix ? 'ena minuta' : 'eno minuto';
        case 'mm':
          if (number === 1) {
            result += 'minuta';
          } else if (number === 2) {
            result += 'minuti';
          } else if (number === 3 || number === 4) {
            result += 'minute';
          } else {
            result += 'minut';
          }
          return result;
        case 'h':
          return withoutSuffix ? 'ena ura' : 'eno uro';
        case 'hh':
          if (number === 1) {
            result += 'ura';
          } else if (number === 2) {
            result += 'uri';
          } else if (number === 3 || number === 4) {
            result += 'ure';
          } else {
            result += 'ur';
          }
          return result;
        case 'dd':
          if (number === 1) {
            result += 'dan';
          } else {
            result += 'dni';
          }
          return result;
        case 'MM':
          if (number === 1) {
            result += 'mesec';
          } else if (number === 2) {
            result += 'meseca';
          } else if (number === 3 || number === 4) {
            result += 'mesece';
          } else {
            result += 'mesecev';
          }
          return result;
        case 'yy':
          if (number === 1) {
            result += 'leto';
          } else if (number === 2) {
            result += 'leti';
          } else if (number === 3 || number === 4) {
            result += 'leta';
          } else {
            result += 'let';
          }
          return result;
      }
    }
    return moment.defineLocale('sl', {
      months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
      monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
      weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
      weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
      weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'LT:ss',
        L: 'DD. MM. YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY LT',
        LLLL: 'dddd, D. MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[danes ob] LT',
        nextDay: '[jutri ob] LT',
        nextWeek: function nextWeek() {
          switch (this.day()) {
            case 0:
              return '[v] [nedeljo] [ob] LT';
            case 3:
              return '[v] [sredo] [ob] LT';
            case 6:
              return '[v] [soboto] [ob] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[v] dddd [ob] LT';
          }
        },
        lastDay: '[včeraj ob] LT',
        lastWeek: function lastWeek() {
          switch (this.day()) {
            case 0:
            case 3:
            case 6:
              return '[prejšnja] dddd [ob] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[prejšnji] dddd [ob] LT';
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'čez %s',
        past: '%s nazaj',
        s: 'nekaj sekund',
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: 'en dan',
        dd: translate,
        M: 'en mesec',
        MM: translate,
        y: 'eno leto',
        yy: translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : Albanian (sq)
  // author : Flakërim Ismani : https://github.com/flakerimi
  // author: Menelion Elensúle: https://github.com/Oire (tests)
  // author : Oerd Cukalla : https://github.com/oerd (fixes)

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('sq', {
      months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
      monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
      weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
      weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
      weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
      meridiemParse: /PD|MD/,
      isPM: function isPM(input) {
        return input.charAt(0) === 'M';
      },
      meridiem: function meridiem(hours, minutes, isLower) {
        return hours < 12 ? 'PD' : 'MD';
      },
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd, D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[Sot në] LT',
        nextDay: '[Nesër në] LT',
        nextWeek: 'dddd [në] LT',
        lastDay: '[Dje në] LT',
        lastWeek: 'dddd [e kaluar në] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'në %s',
        past: '%s më parë',
        s: 'disa sekonda',
        m: 'një minutë',
        mm: '%d minuta',
        h: 'një orë',
        hh: '%d orë',
        d: 'një ditë',
        dd: '%d ditë',
        M: 'një muaj',
        MM: '%d muaj',
        y: 'një vit',
        yy: '%d vite'
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : Serbian-cyrillic (sr-cyrl)
  // author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var translator = {
      words: {
        //Different grammatical cases
        m: ['један минут', 'једне минуте'],
        mm: ['минут', 'минуте', 'минута'],
        h: ['један сат', 'једног сата'],
        hh: ['сат', 'сата', 'сати'],
        dd: ['дан', 'дана', 'дана'],
        MM: ['месец', 'месеца', 'месеци'],
        yy: ['година', 'године', 'година']
      },
      correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
        return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
      },
      translate: function translate(number, withoutSuffix, key) {
        var wordKey = translator.words[key];
        if (key.length === 1) {
          return withoutSuffix ? wordKey[0] : wordKey[1];
        } else {
          return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
        }
      }
    };
    return moment.defineLocale('sr-cyrl', {
      months: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар'],
      monthsShort: ['јан.', 'феб.', 'мар.', 'апр.', 'мај', 'јун', 'јул', 'авг.', 'сеп.', 'окт.', 'нов.', 'дец.'],
      weekdays: ['недеља', 'понедељак', 'уторак', 'среда', 'четвртак', 'петак', 'субота'],
      weekdaysShort: ['нед.', 'пон.', 'уто.', 'сре.', 'чет.', 'пет.', 'суб.'],
      weekdaysMin: ['не', 'по', 'ут', 'ср', 'че', 'пе', 'су'],
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'LT:ss',
        L: 'DD. MM. YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY LT',
        LLLL: 'dddd, D. MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[данас у] LT',
        nextDay: '[сутра у] LT',
        nextWeek: function nextWeek() {
          switch (this.day()) {
            case 0:
              return '[у] [недељу] [у] LT';
            case 3:
              return '[у] [среду] [у] LT';
            case 6:
              return '[у] [суботу] [у] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[у] dddd [у] LT';
          }
        },
        lastDay: '[јуче у] LT',
        lastWeek: function lastWeek() {
          var lastWeekDays = ['[прошле] [недеље] [у] LT', '[прошлог] [понедељка] [у] LT', '[прошлог] [уторка] [у] LT', '[прошле] [среде] [у] LT', '[прошлог] [четвртка] [у] LT', '[прошлог] [петка] [у] LT', '[прошле] [суботе] [у] LT'];
          return lastWeekDays[this.day()];
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'за %s',
        past: 'пре %s',
        s: 'неколико секунди',
        m: translator.translate,
        mm: translator.translate,
        h: translator.translate,
        hh: translator.translate,
        d: 'дан',
        dd: translator.translate,
        M: 'месец',
        MM: translator.translate,
        y: 'годину',
        yy: translator.translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : Serbian-latin (sr)
  // author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var translator = {
      words: {
        //Different grammatical cases
        m: ['jedan minut', 'jedne minute'],
        mm: ['minut', 'minute', 'minuta'],
        h: ['jedan sat', 'jednog sata'],
        hh: ['sat', 'sata', 'sati'],
        dd: ['dan', 'dana', 'dana'],
        MM: ['mesec', 'meseca', 'meseci'],
        yy: ['godina', 'godine', 'godina']
      },
      correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
        return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
      },
      translate: function translate(number, withoutSuffix, key) {
        var wordKey = translator.words[key];
        if (key.length === 1) {
          return withoutSuffix ? wordKey[0] : wordKey[1];
        } else {
          return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
        }
      }
    };
    return moment.defineLocale('sr', {
      months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
      monthsShort: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
      weekdays: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
      weekdaysShort: ['ned.', 'pon.', 'uto.', 'sre.', 'čet.', 'pet.', 'sub.'],
      weekdaysMin: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su'],
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'LT:ss',
        L: 'DD. MM. YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY LT',
        LLLL: 'dddd, D. MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[danas u] LT',
        nextDay: '[sutra u] LT',
        nextWeek: function nextWeek() {
          switch (this.day()) {
            case 0:
              return '[u] [nedelju] [u] LT';
            case 3:
              return '[u] [sredu] [u] LT';
            case 6:
              return '[u] [subotu] [u] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[u] dddd [u] LT';
          }
        },
        lastDay: '[juče u] LT',
        lastWeek: function lastWeek() {
          var lastWeekDays = ['[prošle] [nedelje] [u] LT', '[prošlog] [ponedeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
          return lastWeekDays[this.day()];
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'za %s',
        past: 'pre %s',
        s: 'nekoliko sekundi',
        m: translator.translate,
        mm: translator.translate,
        h: translator.translate,
        hh: translator.translate,
        d: 'dan',
        dd: translator.translate,
        M: 'mesec',
        MM: translator.translate,
        y: 'godinu',
        yy: translator.translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : swedish (sv)
  // author : Jens Alm : https://github.com/ulmus

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('sv', {
      months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
      monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
      weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
      weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
      weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'YYYY-MM-DD',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[Idag] LT',
        nextDay: '[Imorgon] LT',
        lastDay: '[Igår] LT',
        nextWeek: 'dddd LT',
        lastWeek: '[Förra] dddd[en] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'om %s',
        past: 'för %s sedan',
        s: 'några sekunder',
        m: 'en minut',
        mm: '%d minuter',
        h: 'en timme',
        hh: '%d timmar',
        d: 'en dag',
        dd: '%d dagar',
        M: 'en månad',
        MM: '%d månader',
        y: 'ett år',
        yy: '%d år'
      },
      ordinalParse: /\d{1,2}(e|a)/,
      ordinal: function ordinal(number) {
        var b = number % 10,
          output = ~~(number % 100 / 10) === 1 ? 'e' : b === 1 ? 'a' : b === 2 ? 'a' : b === 3 ? 'e' : 'e';
        return number + output;
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : tamil (ta)
  // author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

  (function (factory) {
    factory(moment);
  })(function (moment) {
    /*var symbolMap = {
            '1': '௧',
            '2': '௨',
            '3': '௩',
            '4': '௪',
            '5': '௫',
            '6': '௬',
            '7': '௭',
            '8': '௮',
            '9': '௯',
            '0': '௦'
        },
        numberMap = {
            '௧': '1',
            '௨': '2',
            '௩': '3',
            '௪': '4',
            '௫': '5',
            '௬': '6',
            '௭': '7',
            '௮': '8',
            '௯': '9',
            '௦': '0'
        }; */

    return moment.defineLocale('ta', {
      months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
      monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
      weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
      weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
      weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, LT',
        LLLL: 'dddd, D MMMM YYYY, LT'
      },
      calendar: {
        sameDay: '[இன்று] LT',
        nextDay: '[நாளை] LT',
        nextWeek: 'dddd, LT',
        lastDay: '[நேற்று] LT',
        lastWeek: '[கடந்த வாரம்] dddd, LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s இல்',
        past: '%s முன்',
        s: 'ஒரு சில விநாடிகள்',
        m: 'ஒரு நிமிடம்',
        mm: '%d நிமிடங்கள்',
        h: 'ஒரு மணி நேரம்',
        hh: '%d மணி நேரம்',
        d: 'ஒரு நாள்',
        dd: '%d நாட்கள்',
        M: 'ஒரு மாதம்',
        MM: '%d மாதங்கள்',
        y: 'ஒரு வருடம்',
        yy: '%d ஆண்டுகள்'
      },
      /*        preparse: function (string) {
                  return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
                      return numberMap[match];
                  });
              },
              postformat: function (string) {
                  return string.replace(/\d/g, function (match) {
                      return symbolMap[match];
                  });
              },*/
      ordinalParse: /\d{1,2}வது/,
      ordinal: function ordinal(number) {
        return number + 'வது';
      },
      // refer http://ta.wikipedia.org/s/1er1
      meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 2) {
          return ' யாமம்';
        } else if (hour < 6) {
          return ' வைகறை'; // வைகறை
        } else if (hour < 10) {
          return ' காலை'; // காலை
        } else if (hour < 14) {
          return ' நண்பகல்'; // நண்பகல்
        } else if (hour < 18) {
          return ' எற்பாடு'; // எற்பாடு
        } else if (hour < 22) {
          return ' மாலை'; // மாலை
        } else {
          return ' யாமம்';
        }
      },
      meridiemHour: function meridiemHour(hour, meridiem) {
        if (hour === 12) {
          hour = 0;
        }
        if (meridiem === 'யாமம்') {
          return hour < 2 ? hour : hour + 12;
        } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
          return hour;
        } else if (meridiem === 'நண்பகல்') {
          return hour >= 10 ? hour : hour + 12;
        } else {
          return hour + 12;
        }
      },
      week: {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : thai (th)
  // author : Kridsada Thanabulpong : https://github.com/sirn

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('th', {
      months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
      monthsShort: 'มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา'.split('_'),
      weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
      weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
      // yes, three characters difference
      weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
      longDateFormat: {
        LT: 'H นาฬิกา m นาที',
        LTS: 'LT s วินาที',
        L: 'YYYY/MM/DD',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY เวลา LT',
        LLLL: 'วันddddที่ D MMMM YYYY เวลา LT'
      },
      meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
      isPM: function isPM(input) {
        return input === 'หลังเที่ยง';
      },
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 12) {
          return 'ก่อนเที่ยง';
        } else {
          return 'หลังเที่ยง';
        }
      },
      calendar: {
        sameDay: '[วันนี้ เวลา] LT',
        nextDay: '[พรุ่งนี้ เวลา] LT',
        nextWeek: 'dddd[หน้า เวลา] LT',
        lastDay: '[เมื่อวานนี้ เวลา] LT',
        lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'อีก %s',
        past: '%sที่แล้ว',
        s: 'ไม่กี่วินาที',
        m: '1 นาที',
        mm: '%d นาที',
        h: '1 ชั่วโมง',
        hh: '%d ชั่วโมง',
        d: '1 วัน',
        dd: '%d วัน',
        M: '1 เดือน',
        MM: '%d เดือน',
        y: '1 ปี',
        yy: '%d ปี'
      }
    });
  });
  // moment.js locale configuration
  // locale : Tagalog/Filipino (tl-ph)
  // author : Dan Hagman

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('tl-ph', {
      months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
      monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
      weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
      weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
      weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'MM/D/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY LT',
        LLLL: 'dddd, MMMM DD, YYYY LT'
      },
      calendar: {
        sameDay: '[Ngayon sa] LT',
        nextDay: '[Bukas sa] LT',
        nextWeek: 'dddd [sa] LT',
        lastDay: '[Kahapon sa] LT',
        lastWeek: 'dddd [huling linggo] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'sa loob ng %s',
        past: '%s ang nakalipas',
        s: 'ilang segundo',
        m: 'isang minuto',
        mm: '%d minuto',
        h: 'isang oras',
        hh: '%d oras',
        d: 'isang araw',
        dd: '%d araw',
        M: 'isang buwan',
        MM: '%d buwan',
        y: 'isang taon',
        yy: '%d taon'
      },
      ordinalParse: /\d{1,2}/,
      ordinal: function ordinal(number) {
        return number;
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : turkish (tr)
  // authors : Erhan Gundogan : https://github.com/erhangundogan,
  //           Burak Yiğit Kaya: https://github.com/BYK

  (function (factory) {
    factory(moment);
  })(function (moment) {
    var suffixes = {
      1: '\'inci',
      5: '\'inci',
      8: '\'inci',
      70: '\'inci',
      80: '\'inci',
      2: '\'nci',
      7: '\'nci',
      20: '\'nci',
      50: '\'nci',
      3: '\'üncü',
      4: '\'üncü',
      100: '\'üncü',
      6: '\'ncı',
      9: '\'uncu',
      10: '\'uncu',
      30: '\'uncu',
      60: '\'ıncı',
      90: '\'ıncı'
    };
    return moment.defineLocale('tr', {
      months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
      monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
      weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
      weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
      weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd, D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[bugün saat] LT',
        nextDay: '[yarın saat] LT',
        nextWeek: '[haftaya] dddd [saat] LT',
        lastDay: '[dün] LT',
        lastWeek: '[geçen hafta] dddd [saat] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s sonra',
        past: '%s önce',
        s: 'birkaç saniye',
        m: 'bir dakika',
        mm: '%d dakika',
        h: 'bir saat',
        hh: '%d saat',
        d: 'bir gün',
        dd: '%d gün',
        M: 'bir ay',
        MM: '%d ay',
        y: 'bir yıl',
        yy: '%d yıl'
      },
      ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
      ordinal: function ordinal(number) {
        if (number === 0) {
          // special case for zero
          return number + '\'ıncı';
        }
        var a = number % 10,
          b = number % 100 - a,
          c = number >= 100 ? 100 : null;
        return number + (suffixes[a] || suffixes[b] || suffixes[c]);
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : Morocco Central Atlas Tamaziɣt in Latin (tzm-latn)
  // author : Abdel Said : https://github.com/abdelsaid

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('tzm-latn', {
      months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
      monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
      weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
      weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
      weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[asdkh g] LT',
        nextDay: '[aska g] LT',
        nextWeek: 'dddd [g] LT',
        lastDay: '[assant g] LT',
        lastWeek: 'dddd [g] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'dadkh s yan %s',
        past: 'yan %s',
        s: 'imik',
        m: 'minuḍ',
        mm: '%d minuḍ',
        h: 'saɛa',
        hh: '%d tassaɛin',
        d: 'ass',
        dd: '%d ossan',
        M: 'ayowr',
        MM: '%d iyyirn',
        y: 'asgas',
        yy: '%d isgasn'
      },
      week: {
        dow: 6,
        // Saturday is the first day of the week.
        doy: 12 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : Morocco Central Atlas Tamaziɣt (tzm)
  // author : Abdel Said : https://github.com/abdelsaid

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('tzm', {
      months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
      monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
      weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
      weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
      weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'dddd D MMMM YYYY LT'
      },
      calendar: {
        sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
        nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
        nextWeek: 'dddd [ⴴ] LT',
        lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
        lastWeek: 'dddd [ⴴ] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
        past: 'ⵢⴰⵏ %s',
        s: 'ⵉⵎⵉⴽ',
        m: 'ⵎⵉⵏⵓⴺ',
        mm: '%d ⵎⵉⵏⵓⴺ',
        h: 'ⵙⴰⵄⴰ',
        hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
        d: 'ⴰⵙⵙ',
        dd: '%d oⵙⵙⴰⵏ',
        M: 'ⴰⵢoⵓⵔ',
        MM: '%d ⵉⵢⵢⵉⵔⵏ',
        y: 'ⴰⵙⴳⴰⵙ',
        yy: '%d ⵉⵙⴳⴰⵙⵏ'
      },
      week: {
        dow: 6,
        // Saturday is the first day of the week.
        doy: 12 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : ukrainian (uk)
  // author : zemlanin : https://github.com/zemlanin
  // Author : Menelion Elensúle : https://github.com/Oire

  (function (factory) {
    factory(moment);
  })(function (moment) {
    function plural(word, num) {
      var forms = word.split('_');
      return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
      var format = {
        'mm': 'хвилина_хвилини_хвилин',
        'hh': 'година_години_годин',
        'dd': 'день_дні_днів',
        'MM': 'місяць_місяці_місяців',
        'yy': 'рік_роки_років'
      };
      if (key === 'm') {
        return withoutSuffix ? 'хвилина' : 'хвилину';
      } else if (key === 'h') {
        return withoutSuffix ? 'година' : 'годину';
      } else {
        return number + ' ' + plural(format[key], +number);
      }
    }
    function monthsCaseReplace(m, format) {
      var months = {
          'nominative': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
          'accusative': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_')
        },
        nounCase = /D[oD]? *MMMM?/.test(format) ? 'accusative' : 'nominative';
      return months[nounCase][m.month()];
    }
    function weekdaysCaseReplace(m, format) {
      var weekdays = {
          'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
          'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
          'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
        },
        nounCase = /(\[[ВвУу]\]) ?dddd/.test(format) ? 'accusative' : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(format) ? 'genitive' : 'nominative';
      return weekdays[nounCase][m.day()];
    }
    function processHoursFunction(str) {
      return function () {
        return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
      };
    }
    return moment.defineLocale('uk', {
      months: monthsCaseReplace,
      monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
      weekdays: weekdaysCaseReplace,
      weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
      weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY р.',
        LLL: 'D MMMM YYYY р., LT',
        LLLL: 'dddd, D MMMM YYYY р., LT'
      },
      calendar: {
        sameDay: processHoursFunction('[Сьогодні '),
        nextDay: processHoursFunction('[Завтра '),
        lastDay: processHoursFunction('[Вчора '),
        nextWeek: processHoursFunction('[У] dddd ['),
        lastWeek: function lastWeek() {
          switch (this.day()) {
            case 0:
            case 3:
            case 5:
            case 6:
              return processHoursFunction('[Минулої] dddd [').call(this);
            case 1:
            case 2:
            case 4:
              return processHoursFunction('[Минулого] dddd [').call(this);
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'за %s',
        past: '%s тому',
        s: 'декілька секунд',
        m: relativeTimeWithPlural,
        mm: relativeTimeWithPlural,
        h: 'годину',
        hh: relativeTimeWithPlural,
        d: 'день',
        dd: relativeTimeWithPlural,
        M: 'місяць',
        MM: relativeTimeWithPlural,
        y: 'рік',
        yy: relativeTimeWithPlural
      },
      // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason

      meridiemParse: /ночі|ранку|дня|вечора/,
      isPM: function isPM(input) {
        return /^(дня|вечора)$/.test(input);
      },
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 4) {
          return 'ночі';
        } else if (hour < 12) {
          return 'ранку';
        } else if (hour < 17) {
          return 'дня';
        } else {
          return 'вечора';
        }
      },
      ordinalParse: /\d{1,2}-(й|го)/,
      ordinal: function ordinal(number, period) {
        switch (period) {
          case 'M':
          case 'd':
          case 'DDD':
          case 'w':
          case 'W':
            return number + '-й';
          case 'D':
            return number + '-го';
          default:
            return number;
        }
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : uzbek (uz)
  // author : Sardor Muminov : https://github.com/muminoff

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('uz', {
      months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
      monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
      weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
      weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
      weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY LT',
        LLLL: 'D MMMM YYYY, dddd LT'
      },
      calendar: {
        sameDay: '[Бугун соат] LT [да]',
        nextDay: '[Эртага] LT [да]',
        nextWeek: 'dddd [куни соат] LT [да]',
        lastDay: '[Кеча соат] LT [да]',
        lastWeek: '[Утган] dddd [куни соат] LT [да]',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'Якин %s ичида',
        past: 'Бир неча %s олдин',
        s: 'фурсат',
        m: 'бир дакика',
        mm: '%d дакика',
        h: 'бир соат',
        hh: '%d соат',
        d: 'бир кун',
        dd: '%d кун',
        M: 'бир ой',
        MM: '%d ой',
        y: 'бир йил',
        yy: '%d йил'
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : vietnamese (vi)
  // author : Bang Nguyen : https://github.com/bangnk

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('vi', {
      months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
      monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
      weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
      weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
      weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'LT:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM [năm] YYYY',
        LLL: 'D MMMM [năm] YYYY LT',
        LLLL: 'dddd, D MMMM [năm] YYYY LT',
        l: 'DD/M/YYYY',
        ll: 'D MMM YYYY',
        lll: 'D MMM YYYY LT',
        llll: 'ddd, D MMM YYYY LT'
      },
      calendar: {
        sameDay: '[Hôm nay lúc] LT',
        nextDay: '[Ngày mai lúc] LT',
        nextWeek: 'dddd [tuần tới lúc] LT',
        lastDay: '[Hôm qua lúc] LT',
        lastWeek: 'dddd [tuần rồi lúc] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s tới',
        past: '%s trước',
        s: 'vài giây',
        m: 'một phút',
        mm: '%d phút',
        h: 'một giờ',
        hh: '%d giờ',
        d: 'một ngày',
        dd: '%d ngày',
        M: 'một tháng',
        MM: '%d tháng',
        y: 'một năm',
        yy: '%d năm'
      },
      ordinalParse: /\d{1,2}/,
      ordinal: function ordinal(number) {
        return number;
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : chinese (zh-cn)
  // author : suupic : https://github.com/suupic
  // author : Zeno Zeng : https://github.com/zenozeng

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('zh-cn', {
      months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
      monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
      weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
      weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
      weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
      longDateFormat: {
        LT: 'Ah点mm',
        LTS: 'Ah点m分s秒',
        L: 'YYYY-MM-DD',
        LL: 'YYYY年MMMD日',
        LLL: 'YYYY年MMMD日LT',
        LLLL: 'YYYY年MMMD日ddddLT',
        l: 'YYYY-MM-DD',
        ll: 'YYYY年MMMD日',
        lll: 'YYYY年MMMD日LT',
        llll: 'YYYY年MMMD日ddddLT'
      },
      meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
      meridiemHour: function meridiemHour(hour, meridiem) {
        if (hour === 12) {
          hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
          return hour;
        } else if (meridiem === '下午' || meridiem === '晚上') {
          return hour + 12;
        } else {
          // '中午'
          return hour >= 11 ? hour : hour + 12;
        }
      },
      meridiem: function meridiem(hour, minute, isLower) {
        var hm = hour * 100 + minute;
        if (hm < 600) {
          return '凌晨';
        } else if (hm < 900) {
          return '早上';
        } else if (hm < 1130) {
          return '上午';
        } else if (hm < 1230) {
          return '中午';
        } else if (hm < 1800) {
          return '下午';
        } else {
          return '晚上';
        }
      },
      calendar: {
        sameDay: function sameDay() {
          return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
        },
        nextDay: function nextDay() {
          return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
        },
        lastDay: function lastDay() {
          return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
        },
        nextWeek: function nextWeek() {
          var startOfWeek, prefix;
          startOfWeek = moment().startOf('week');
          prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[下]' : '[本]';
          return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
        },
        lastWeek: function lastWeek() {
          var startOfWeek, prefix;
          startOfWeek = moment().startOf('week');
          prefix = this.unix() < startOfWeek.unix() ? '[上]' : '[本]';
          return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
        },
        sameElse: 'LL'
      },
      ordinalParse: /\d{1,2}(日|月|周)/,
      ordinal: function ordinal(number, period) {
        switch (period) {
          case 'd':
          case 'D':
          case 'DDD':
            return number + '日';
          case 'M':
            return number + '月';
          case 'w':
          case 'W':
            return number + '周';
          default:
            return number;
        }
      },
      relativeTime: {
        future: '%s内',
        past: '%s前',
        s: '几秒',
        m: '1分钟',
        mm: '%d分钟',
        h: '1小时',
        hh: '%d小时',
        d: '1天',
        dd: '%d天',
        M: '1个月',
        MM: '%d个月',
        y: '1年',
        yy: '%d年'
      },
      week: {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
    });
  });
  // moment.js locale configuration
  // locale : traditional chinese (zh-tw)
  // author : Ben : https://github.com/ben-lin

  (function (factory) {
    factory(moment);
  })(function (moment) {
    return moment.defineLocale('zh-tw', {
      months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
      monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
      weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
      weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
      weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
      longDateFormat: {
        LT: 'Ah點mm',
        LTS: 'Ah點m分s秒',
        L: 'YYYY年MMMD日',
        LL: 'YYYY年MMMD日',
        LLL: 'YYYY年MMMD日LT',
        LLLL: 'YYYY年MMMD日ddddLT',
        l: 'YYYY年MMMD日',
        ll: 'YYYY年MMMD日',
        lll: 'YYYY年MMMD日LT',
        llll: 'YYYY年MMMD日ddddLT'
      },
      meridiemParse: /早上|上午|中午|下午|晚上/,
      meridiemHour: function meridiemHour(hour, meridiem) {
        if (hour === 12) {
          hour = 0;
        }
        if (meridiem === '早上' || meridiem === '上午') {
          return hour;
        } else if (meridiem === '中午') {
          return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === '下午' || meridiem === '晚上') {
          return hour + 12;
        }
      },
      meridiem: function meridiem(hour, minute, isLower) {
        var hm = hour * 100 + minute;
        if (hm < 900) {
          return '早上';
        } else if (hm < 1130) {
          return '上午';
        } else if (hm < 1230) {
          return '中午';
        } else if (hm < 1800) {
          return '下午';
        } else {
          return '晚上';
        }
      },
      calendar: {
        sameDay: '[今天]LT',
        nextDay: '[明天]LT',
        nextWeek: '[下]ddddLT',
        lastDay: '[昨天]LT',
        lastWeek: '[上]ddddLT',
        sameElse: 'L'
      },
      ordinalParse: /\d{1,2}(日|月|週)/,
      ordinal: function ordinal(number, period) {
        switch (period) {
          case 'd':
          case 'D':
          case 'DDD':
            return number + '日';
          case 'M':
            return number + '月';
          case 'w':
          case 'W':
            return number + '週';
          default:
            return number;
        }
      },
      relativeTime: {
        future: '%s內',
        past: '%s前',
        s: '幾秒',
        m: '一分鐘',
        mm: '%d分鐘',
        h: '一小時',
        hh: '%d小時',
        d: '一天',
        dd: '%d天',
        M: '一個月',
        MM: '%d個月',
        y: '一年',
        yy: '%d年'
      }
    });
  });
  moment.locale('en');

  /************************************
      Exposing Moment
  ************************************/

  function makeGlobal(shouldDeprecate) {
    /*global ender:false */
    if (typeof ender !== 'undefined') {
      return;
    }
    oldGlobalMoment = globalScope.moment;
    if (shouldDeprecate) {
      globalScope.moment = deprecate('Accessing Moment through the global scope is ' + 'deprecated, and will be removed in an upcoming ' + 'release.', moment);
    } else {
      globalScope.moment = moment;
    }
  }

  // CommonJS module is defined
  if (hasModule) {
    module.exports = moment;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
      if (module.config && module.config() && module.config().noGlobal === true) {
        // release the global variable
        globalScope.moment = oldGlobalMoment;
      }
      return moment;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    makeGlobal(true);
  } else {}
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./assets/js/ezadmin/lib/bootstrap-table/popper.min.js":
/*!*************************************************************!*\
  !*** ./assets/js/ezadmin/lib/bootstrap-table/popper.min.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function (e, t) {
  'object' == ( false ? undefined : _typeof(exports)) && 'undefined' != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function () {
  'use strict';

  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }
  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = getComputedStyle(e, null);
    return t ? o[t] : o;
  }
  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }
  function n(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case 'HTML':
      case 'BODY':
        return e.ownerDocument.body;
      case '#document':
        return e.body;
    }
    var i = t(e),
      r = i.overflow,
      p = i.overflowX,
      s = i.overflowY;
    return /(auto|scroll)/.test(r + s + p) ? e : n(o(e));
  }
  function r(e) {
    var o = e && e.offsetParent,
      i = o && o.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : e ? e.ownerDocument.documentElement : document.documentElement;
  }
  function p(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e);
  }
  function s(e) {
    return null === e.parentNode ? e : s(e.parentNode);
  }
  function d(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = o ? e : t,
      n = o ? t : e,
      a = document.createRange();
    a.setStart(i, 0), a.setEnd(n, 0);
    var l = a.commonAncestorContainer;
    if (e !== l && t !== l || i.contains(n)) return p(l) ? l : r(l);
    var f = s(e);
    return f.host ? d(f.host, t) : d(e, s(t).host);
  }
  function a(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
      o = 'top' === t ? 'scrollTop' : 'scrollLeft',
      i = e.nodeName;
    if ('BODY' === i || 'HTML' === i) {
      var n = e.ownerDocument.documentElement,
        r = e.ownerDocument.scrollingElement || n;
      return r[o];
    }
    return e[o];
  }
  function l(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      i = a(t, 'top'),
      n = a(t, 'left'),
      r = o ? -1 : 1;
    return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e;
  }
  function f(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
      i = 'Left' == o ? 'Right' : 'Bottom';
    return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + i + 'Width'], 10);
  }
  function m(e, t, o, i) {
    return J(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0);
  }
  function h() {
    var e = document.body,
      t = document.documentElement,
      o = ie() && getComputedStyle(t);
    return {
      height: m('Height', e, t, o),
      width: m('Width', e, t, o)
    };
  }
  function c(e) {
    return se({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    });
  }
  function g(e) {
    var o = {};
    if (ie()) try {
      o = e.getBoundingClientRect();
      var i = a(e, 'top'),
        n = a(e, 'left');
      o.top += i, o.left += n, o.bottom += i, o.right += n;
    } catch (e) {} else o = e.getBoundingClientRect();
    var r = {
        left: o.left,
        top: o.top,
        width: o.right - o.left,
        height: o.bottom - o.top
      },
      p = 'HTML' === e.nodeName ? h() : {},
      s = p.width || e.clientWidth || r.right - r.left,
      d = p.height || e.clientHeight || r.bottom - r.top,
      l = e.offsetWidth - s,
      m = e.offsetHeight - d;
    if (l || m) {
      var g = t(e);
      l -= f(g, 'x'), m -= f(g, 'y'), r.width -= l, r.height -= m;
    }
    return c(r);
  }
  function u(e, o) {
    var i = ie(),
      r = 'HTML' === o.nodeName,
      p = g(e),
      s = g(o),
      d = n(e),
      a = t(o),
      f = parseFloat(a.borderTopWidth, 10),
      m = parseFloat(a.borderLeftWidth, 10),
      h = c({
        top: p.top - s.top - f,
        left: p.left - s.left - m,
        width: p.width,
        height: p.height
      });
    if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
      var u = parseFloat(a.marginTop, 10),
        b = parseFloat(a.marginLeft, 10);
      h.top -= f - u, h.bottom -= f - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b;
    }
    return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = l(h, o)), h;
  }
  function b(e) {
    var t = e.ownerDocument.documentElement,
      o = u(e, t),
      i = J(t.clientWidth, window.innerWidth || 0),
      n = J(t.clientHeight, window.innerHeight || 0),
      r = a(t),
      p = a(t, 'left'),
      s = {
        top: r - o.top + o.marginTop,
        left: p - o.left + o.marginLeft,
        width: i,
        height: n
      };
    return c(s);
  }
  function w(e) {
    var i = e.nodeName;
    return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || w(o(e));
  }
  function y(e, t, i, r) {
    var p = {
        top: 0,
        left: 0
      },
      s = d(e, t);
    if ('viewport' === r) p = b(s);else {
      var a;
      'scrollParent' === r ? (a = n(o(t)), 'BODY' === a.nodeName && (a = e.ownerDocument.documentElement)) : 'window' === r ? a = e.ownerDocument.documentElement : a = r;
      var l = u(a, s);
      if ('HTML' === a.nodeName && !w(s)) {
        var f = h(),
          m = f.height,
          c = f.width;
        p.top += l.top - l.marginTop, p.bottom = m + l.top, p.left += l.left - l.marginLeft, p.right = c + l.left;
      } else p = l;
    }
    return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p;
  }
  function E(e) {
    var t = e.width,
      o = e.height;
    return t * o;
  }
  function v(e, t, o, i, n) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var p = y(o, i, r, n),
      s = {
        top: {
          width: p.width,
          height: t.top - p.top
        },
        right: {
          width: p.right - t.right,
          height: p.height
        },
        bottom: {
          width: p.width,
          height: p.bottom - t.bottom
        },
        left: {
          width: t.left - p.left,
          height: p.height
        }
      },
      d = Object.keys(s).map(function (e) {
        return se({
          key: e
        }, s[e], {
          area: E(s[e])
        });
      }).sort(function (e, t) {
        return t.area - e.area;
      }),
      a = d.filter(function (e) {
        var t = e.width,
          i = e.height;
        return t >= o.clientWidth && i >= o.clientHeight;
      }),
      l = 0 < a.length ? a[0].key : d[0].key,
      f = e.split('-')[1];
    return l + (f ? '-' + f : '');
  }
  function O(e, t, o) {
    var i = d(t, o);
    return u(o, i);
  }
  function L(e) {
    var t = getComputedStyle(e),
      o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
      n = {
        width: e.offsetWidth + i,
        height: e.offsetHeight + o
      };
    return n;
  }
  function x(e) {
    var t = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }
  function S(e, t, o) {
    o = o.split('-')[0];
    var i = L(e),
      n = {
        width: i.width,
        height: i.height
      },
      r = -1 !== ['right', 'left'].indexOf(o),
      p = r ? 'top' : 'left',
      s = r ? 'left' : 'top',
      d = r ? 'height' : 'width',
      a = r ? 'width' : 'height';
    return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[x(s)], n;
  }
  function T(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function D(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o;
    });
    var i = T(e, function (e) {
      return e[t] === o;
    });
    return e.indexOf(i);
  }
  function C(t, o, i) {
    var n = void 0 === i ? t : t.slice(0, D(t, 'name', i));
    return n.forEach(function (t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      var i = t['function'] || t.fn;
      t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t));
    }), o;
  }
  function N() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      e.offsets.reference = O(this.state, this.popper, this.reference), e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = C(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
    }
  }
  function k(e, t) {
    return e.some(function (e) {
      var o = e.name,
        i = e.enabled;
      return i && o === t;
    });
  }
  function W(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
      var i = t[n],
        r = i ? '' + i + o : e;
      if ('undefined' != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function P() {
    return this.state.isDestroyed = !0, k(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[W('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }
  function B(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  function H(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
      p = r ? e.ownerDocument.defaultView : e;
    p.addEventListener(t, o, {
      passive: !0
    }), r || H(n(p.parentNode), t, o, i), i.push(p);
  }
  function A(e, t, o, i) {
    o.updateBound = i, B(e).addEventListener('resize', o.updateBound, {
      passive: !0
    });
    var r = n(e);
    return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
  }
  function I() {
    this.state.eventsEnabled || (this.state = A(this.reference, this.options, this.state, this.scheduleUpdate));
  }
  function M(e, t) {
    return B(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
  }
  function R() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state));
  }
  function U(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function Y(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = '';
      -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && U(t[o]) && (i = 'px'), e.style[o] = t[o] + i;
    });
  }
  function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = t[o];
      !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }
  function F(e, t, o) {
    var i = T(e, function (e) {
        var o = e.name;
        return o === t;
      }),
      n = !!i && e.some(function (e) {
        return e.name === o && e.enabled && e.order < i.order;
      });
    if (!n) {
      var r = '`' + t + '`';
      console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
    }
    return n;
  }
  function K(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }
  function q(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = ae.indexOf(e),
      i = ae.slice(o + 1).concat(ae.slice(0, o));
    return t ? i.reverse() : i;
  }
  function V(e, t, o, i) {
    var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      r = +n[1],
      p = n[2];
    if (!r) return e;
    if (0 === p.indexOf('%')) {
      var s;
      switch (p) {
        case '%p':
          s = o;
          break;
        case '%':
        case '%r':
        default:
          s = i;
      }
      var d = c(s);
      return d[t] / 100 * r;
    }
    if ('vh' === p || 'vw' === p) {
      var a;
      return a = 'vh' === p ? J(document.documentElement.clientHeight, window.innerHeight || 0) : J(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
    }
    return r;
  }
  function z(e, t, o, i) {
    var n = [0, 0],
      r = -1 !== ['right', 'left'].indexOf(i),
      p = e.split(/(\+|\-)/).map(function (e) {
        return e.trim();
      }),
      s = p.indexOf(T(p, function (e) {
        return -1 !== e.search(/,|\s/);
      }));
    p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
      a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
    return a = a.map(function (e, i) {
      var n = (1 === i ? !r : r) ? 'height' : 'width',
        p = !1;
      return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return V(e, n, t, o);
      });
    }), a.forEach(function (e, t) {
      e.forEach(function (o, i) {
        U(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1));
      });
    }), n;
  }
  function G(e, t) {
    var o,
      i = t.offset,
      n = e.placement,
      r = e.offsets,
      p = r.popper,
      s = r.reference,
      d = n.split('-')[0];
    return o = U(+i) ? [+i, 0] : z(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
  }
  for (var _ = Math.min, X = Math.floor, J = Math.max, Q = 'undefined' != typeof window && 'undefined' != typeof document, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1) if (Q && 0 <= navigator.userAgent.indexOf(Z[ee])) {
    $ = 1;
    break;
  }
  var i,
    te = Q && window.Promise,
    oe = te ? function (e) {
      var t = !1;
      return function () {
        t || (t = !0, window.Promise.resolve().then(function () {
          t = !1, e();
        }));
      };
    } : function (e) {
      var t = !1;
      return function () {
        t || (t = !0, setTimeout(function () {
          t = !1, e();
        }, $));
      };
    },
    ie = function ie() {
      return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i;
    },
    ne = function ne(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    },
    re = function () {
      function e(e, t) {
        for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
      return function (t, o, i) {
        return o && e(t.prototype, o), i && e(t, i), t;
      };
    }(),
    pe = function pe(e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e;
    },
    se = Object.assign || function (e) {
      for (var t, o = 1; o < arguments.length; o++) for (var i in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return e;
    },
    de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
    ae = de.slice(3),
    le = {
      FLIP: 'flip',
      CLOCKWISE: 'clockwise',
      COUNTERCLOCKWISE: 'counterclockwise'
    },
    fe = function () {
      function t(o, i) {
        var n = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        ne(this, t), this.scheduleUpdate = function () {
          return requestAnimationFrame(n.update);
        }, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = {
          isDestroyed: !1,
          isCreated: !1,
          scrollParents: []
        }, this.reference = o && o.jquery ? o[0] : o, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
          n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
        }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
          return se({
            name: e
          }, n.options.modifiers[e]);
        }).sort(function (e, t) {
          return e.order - t.order;
        }), this.modifiers.forEach(function (t) {
          t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state);
        }), this.update();
        var p = this.options.eventsEnabled;
        p && this.enableEventListeners(), this.state.eventsEnabled = p;
      }
      return re(t, [{
        key: 'update',
        value: function value() {
          return N.call(this);
        }
      }, {
        key: 'destroy',
        value: function value() {
          return P.call(this);
        }
      }, {
        key: 'enableEventListeners',
        value: function value() {
          return I.call(this);
        }
      }, {
        key: 'disableEventListeners',
        value: function value() {
          return R.call(this);
        }
      }]), t;
    }();
  return fe.Utils = ('undefined' == typeof window ? global : window).PopperUtils, fe.placements = de, fe.Defaults = {
    placement: 'bottom',
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(e) {
          var t = e.placement,
            o = t.split('-')[0],
            i = t.split('-')[1];
          if (i) {
            var n = e.offsets,
              r = n.reference,
              p = n.popper,
              s = -1 !== ['bottom', 'top'].indexOf(o),
              d = s ? 'left' : 'top',
              a = s ? 'width' : 'height',
              l = {
                start: pe({}, d, r[d]),
                end: pe({}, d, r[d] + r[a] - p[a])
              };
            e.offsets.popper = se({}, p, l[i]);
          }
          return e;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: G,
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.boundariesElement || r(e.instance.popper);
          e.instance.reference === o && (o = r(o));
          var i = y(e.instance.popper, e.instance.reference, t.padding, o);
          t.boundaries = i;
          var n = t.priority,
            p = e.offsets.popper,
            s = {
              primary: function primary(e) {
                var o = p[e];
                return p[e] < i[e] && !t.escapeWithReference && (o = J(p[e], i[e])), pe({}, e, o);
              },
              secondary: function secondary(e) {
                var o = 'right' === e ? 'left' : 'top',
                  n = p[o];
                return p[e] > i[e] && !t.escapeWithReference && (n = _(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n);
              }
            };
          return n.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
            p = se({}, p, s[t](e));
          }), e.offsets.popper = p, e;
        },
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(e) {
          var t = e.offsets,
            o = t.popper,
            i = t.reference,
            n = e.placement.split('-')[0],
            r = X,
            p = -1 !== ['top', 'bottom'].indexOf(n),
            s = p ? 'right' : 'bottom',
            d = p ? 'left' : 'top',
            a = p ? 'width' : 'height';
          return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(e, o) {
          var i;
          if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
          var n = o.element;
          if ('string' == typeof n) {
            if (n = e.instance.popper.querySelector(n), !n) return e;
          } else if (!e.instance.popper.contains(n)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
          var r = e.placement.split('-')[0],
            p = e.offsets,
            s = p.popper,
            d = p.reference,
            a = -1 !== ['left', 'right'].indexOf(r),
            l = a ? 'height' : 'width',
            f = a ? 'Top' : 'Left',
            m = f.toLowerCase(),
            h = a ? 'left' : 'top',
            g = a ? 'bottom' : 'right',
            u = L(n)[l];
          d[g] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[g] - u)), d[m] + u > s[g] && (e.offsets.popper[m] += d[m] + u - s[g]), e.offsets.popper = c(e.offsets.popper);
          var b = d[m] + d[l] / 2 - u / 2,
            w = t(e.instance.popper),
            y = parseFloat(w['margin' + f], 10),
            E = parseFloat(w['border' + f + 'Width'], 10),
            v = b - e.offsets.popper[m] - y - E;
          return v = J(_(s[l] - u, v), 0), e.arrowElement = n, e.offsets.arrow = (i = {}, pe(i, m, Math.round(v)), pe(i, h, ''), i), e;
        },
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(e, t) {
          if (k(e.instance.modifiers, 'inner')) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var o = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
            i = e.placement.split('-')[0],
            n = x(i),
            r = e.placement.split('-')[1] || '',
            p = [];
          switch (t.behavior) {
            case le.FLIP:
              p = [i, n];
              break;
            case le.CLOCKWISE:
              p = q(i);
              break;
            case le.COUNTERCLOCKWISE:
              p = q(i, !0);
              break;
            default:
              p = t.behavior;
          }
          return p.forEach(function (s, d) {
            if (i !== s || p.length === d + 1) return e;
            i = e.placement.split('-')[0], n = x(i);
            var a = e.offsets.popper,
              l = e.offsets.reference,
              f = X,
              m = 'left' === i && f(a.right) > f(l.left) || 'right' === i && f(a.left) < f(l.right) || 'top' === i && f(a.bottom) > f(l.top) || 'bottom' === i && f(a.top) < f(l.bottom),
              h = f(a.left) < f(o.left),
              c = f(a.right) > f(o.right),
              g = f(a.top) < f(o.top),
              u = f(a.bottom) > f(o.bottom),
              b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u,
              w = -1 !== ['top', 'bottom'].indexOf(i),
              y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u);
            (m || b || y) && (e.flipped = !0, (m || b) && (i = p[d + 1]), y && (r = K(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = C(e.instance.modifiers, e, 'flip'));
          }), e;
        },
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport'
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(e) {
          var t = e.placement,
            o = t.split('-')[0],
            i = e.offsets,
            n = i.popper,
            r = i.reference,
            p = -1 !== ['left', 'right'].indexOf(o),
            s = -1 === ['top', 'left'].indexOf(o);
          return n[p ? 'left' : 'top'] = r[o] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = x(t), e.offsets.popper = c(n), e;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(e) {
          if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
          var t = e.offsets.reference,
            o = T(e.instance.modifiers, function (e) {
              return 'preventOverflow' === e.name;
            }).boundaries;
          if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
          }
          return e;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.x,
            i = t.y,
            n = e.offsets.popper,
            p = T(e.instance.modifiers, function (e) {
              return 'applyStyle' === e.name;
            }).gpuAcceleration;
          void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
          var s,
            d,
            a = void 0 === p ? t.gpuAcceleration : p,
            l = r(e.instance.popper),
            f = g(l),
            m = {
              position: n.position
            },
            h = {
              left: X(n.left),
              top: X(n.top),
              bottom: X(n.bottom),
              right: X(n.right)
            },
            c = 'bottom' === o ? 'top' : 'bottom',
            u = 'right' === i ? 'left' : 'right',
            b = W('transform');
          if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == u ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';else {
            var w = 'bottom' == c ? -1 : 1,
              y = 'right' == u ? -1 : 1;
            m[c] = d * w, m[u] = s * y, m.willChange = c + ', ' + u;
          }
          var E = {
            "x-placement": e.placement
          };
          return e.attributes = se({}, E, e.attributes), e.styles = se({}, m, e.styles), e.arrowStyles = se({}, e.offsets.arrow, e.arrowStyles), e;
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(e) {
          return Y(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e;
        },
        onLoad: function onLoad(e, t, o, i, n) {
          var r = O(n, t, e),
            p = v(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
          return t.setAttribute('x-placement', p), Y(t, {
            position: 'absolute'
          }), o;
        },
        gpuAcceleration: void 0
      }
    }
  }, fe;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/jquery-mousewheel/jquery.mousewheel.js":
/*!*************************************************************!*\
  !*** ./node_modules/jquery-mousewheel/jquery.mousewheel.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( true ) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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

/***/ 0:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./assets/js/ezadmin/lib/bootstrap-table/popper.min.js ./assets/js/ezadmin/lib/bootstrap-table/bootstrap.min.js ./assets/js/ezadmin/lib/bootstrap-table/bootstrap-table.js ./assets/js/ezadmin/lib/bootstrap-table/moment-with-locales.js ./assets/js/ezadmin/lib/bootstrap-table/jquery.datetimepicker.js ./assets/js/ezadmin/lib/bootstrap-table/locale/bootstrap-table-fr-FR.js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./assets/js/ezadmin/lib/bootstrap-table/popper.min.js */"./assets/js/ezadmin/lib/bootstrap-table/popper.min.js");
__webpack_require__(/*! ./assets/js/ezadmin/lib/bootstrap-table/bootstrap.min.js */"./assets/js/ezadmin/lib/bootstrap-table/bootstrap.min.js");
__webpack_require__(/*! ./assets/js/ezadmin/lib/bootstrap-table/bootstrap-table.js */"./assets/js/ezadmin/lib/bootstrap-table/bootstrap-table.js");
__webpack_require__(/*! ./assets/js/ezadmin/lib/bootstrap-table/moment-with-locales.js */"./assets/js/ezadmin/lib/bootstrap-table/moment-with-locales.js");
__webpack_require__(/*! ./assets/js/ezadmin/lib/bootstrap-table/jquery.datetimepicker.js */"./assets/js/ezadmin/lib/bootstrap-table/jquery.datetimepicker.js");
module.exports = __webpack_require__(/*! ./assets/js/ezadmin/lib/bootstrap-table/locale/bootstrap-table-fr-FR.js */"./assets/js/ezadmin/lib/bootstrap-table/locale/bootstrap-table-fr-FR.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "popper.js":
/*!*************************!*\
  !*** external "Popper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Popper;

/***/ })

},[[0,"runtime"]]]);