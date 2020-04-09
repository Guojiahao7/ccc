/*global $*/
var $big = (function() {
  var $all = $(''
      +'<div class="notepad">'
        +'<div class="note-header"><p>记事本</p><span>✖</span></div>'
        +'<div class="notepad-menubar">'
          +'<ul class="menu-title">'
            +'<li class="title title1">文件(F)</li>'
            +'<li class="title title2">编辑(E)</li>'
            +'<li class="title title3">格式(O)</li>'
            +'<li class="title title4">查看(V)</li>'
            +'<li class="title title5">帮助(H)</li>'
          +'</ul>'
          +'<ul class="menus menus1">'
            +'<li class="menu-item">新建(N)<span class="shortcut">Ctrl+N</span></li>'
            +'<li class="menu-item">打开(O)...<span class="shortcut">Ctrl+O</span></li>'
            +'<li class="menu-item">保存(S)<span class="shortcut">Ctrl+S</span></li>'
            +'<li class="menu-item">另存为(A)...</li>'
            +'<li class="menu-hr"></li>'
            +'<li class="menu-item">页面设置(U)</li>'
            +'<li class="menu-item">打印(P)...<span class="shortcut">Ctrl+P</span></li>'
            +'<li class="menu-hr"></li>'
            +'<li class="menu-item">退出(X)</li>'
          +'</ul>'
          +'<ul class="menus menus2">'
            +'<li class="menu-item">撤销(U)<span class="shortcut">Ctrl+Z</span></li>'
            +'<li class="menu-hr"></li>'
            +'<li class="disabled menu-item">剪切(T)<span class="shortcut">Ctrl+X</span></li>'
            +'<li class="disabled menu-item">复制(C)<span class="shortcut">Ctrl+C</span></li>'
            +'<li class="menu-item">粘贴(P)<span class="shortcut">Ctrl+V</span></li>'
            +'<li class="disabled menu-item">删除(L)<span class="shortcut">Del</span></li>'
            +'<li class="menu-hr"></li>'
            +'<li class="menu-item">查找(F)...<span class="shortcut">Ctrl+F</span></li>'
            +'<li class="menu-item">查找下一个(N)<span class="shortcut">F3</span></li>'
            +'<li class="menu-item">替换(R)...<span class="shortcut">Ctrl+H</span></li>'
            +'<li class="disabled menu-item">转到(G)...<span class="shortcut">Ctrl+G</span></li>'
            +'<li class="menu-hr"></li>'
            +'<li class="menu-item">全选(A)<span class="shortcut">Ctrl+A</span></li>'
            +'<li class="menu-item">时间/日期(D)<span class="shortcut">F5</span></li>'
          +'</ul>'
          +'<ul class="menus menus3">'
            +'<li class="menu-item">自动换行(W)</li>'
            +'<li class="menu-item setfont">字体(F)...</li>'
          +'</ul>'
          +'<ul class="menus menus4">'
            +'<li class="disabled menu-item">状态栏(S)</li>'
          +'</ul>'
          +'<ul class="menus menus5">'
            +'<li class="menu-item">查看帮助(H)</li>'
            +'<li class="menu-hr"></li>'
            +'<li class="menu-item">关于记事本(A)</li>'
          +'</ul>'
        +'</div>'
        + '<div class="notepad-editor">'
          + '<textarea spellcheck="false"></textarea>'
        + '</div>'
      +'</div>');

  var $inner = $(''
   +'<div class="notepad-dlg-mask notepad-dlg-font">'
      +'<div class="dialogbox notepad-dlgbox">'
          +'<div class="notepad-dlg-titlebar">'
              +'<p class="title">字体</p>'
              +'<span class="close-btn">✖</span>'
          +'</div>'
          +'<div class="main notepad-dlg-main">'
              +'<div class="font-family font-daxiao"><p>字体(F):</p></div>'
              +'<div class="font-style font-daxiao"><p>字形(Y):</p></div>'
              +'<div class="font-size font-daxiao"><p>大小(S):</p></div>'
              +'<br>'
              +'<div class="list1"></div>'
              +'<div class="list2"></div>'
              +'<div class="list3"></div>'
              +'<fieldset class="sample">'
                +'<legend>示例</legend>'
                +'<p>AaBbYyZz</p>'
              +'</fieldset>'
              +'<div class="script">'
                +'<label>'
                  +'脚本(R):<br>'
                  +'<select>'
                    +'<option value="西欧语言">西欧语言</option>'
                    +'<option value="中文 GB2312">中文 GB2312</option>'
                  +'</select>'
                +'</label>'
              +'</div>'
              +'<input class="btn-ok btn" type="button" value="确定">'
              +'<input class="btn-cancel btn" type="button" value="取消">'
          +'</div>'
      +'</div>'
   +'</div>');

  var Font = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
      styles = ['常规', '斜体', '粗体', '粗偏斜体'],
      sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48'];

  function show() {
    // 文本
    function delTxt() {
      $all.remove();
      var $btn = $('div.test>input[type="button"]');
      $btn.show()
    }
    //字体
    function delFont() {
      $inner.remove();
    }
    $('body').append($all);
    $('.notepad').draggable({handle:$all.find('.note-header')});

    $('.title1').click(function(){
      $('.menus1').css('display','inline-block');
      $('.menus').css('left','0');
      $('.menus1').siblings('.menus').css('display', 'none');
    });
    $('.title2').click(function(){
      $('.menus2').css('display','inline-block');
      $('.menus').css('left','55px');
      $('.menus2').siblings('.menus').css('display', 'none');
    });
    $('.title3').click(function(){
      $('.menus3').css('display','inline-block');
      $('.menus').css('left','107px');
      $('.menus').css('width','150px');
      $('.menus3').siblings('.menus').css('display', 'none');
    });
    $('.title4').click(function(){
      $('.menus4').css('display','inline-block');
      $('.menus').css('left','160px');
      $('.menus').css('width','150px');
      $('.menus4').siblings('.menus').css('display', 'none');
    });
    $('.title5').click(function(){
      $('.menus5').css('display','inline-block');
      $('.menus').css('left','214px');
      $('.menus').css('width','150px');
      $('.menus5').siblings('.menus').css('display', 'none');
    });

    $('.notepad-menubar').siblings().click(function(){
      $('.menus').css('display','none');
    });

    $('.note-header span').click(delTxt);

    function editTxt() {
      var $editTxt = $(''
        + '<div class="notepad-com-list">'
          + '<input class="editor" type="text"><br>'
          + '<ul class="list">'
          + '</ul>'
        + '</div>');

    var $editor = $editTxt.find('.editor'),
        $list = $editTxt.find('.list'),
        $items;

    var flag= {
      list: [],
      click1: 0,
      width: '200px',
      flag1: false,
      flag2: false,
      container: '',
    };
    // 字体
    function addStyle(item, style) {
      if(style === '斜体') {
        item.css({'font-style': 'italic'});
        return;
      }

      if(style === '粗体') {
        item.css({'font-weight': 'bold'});
        return;
      }

      if(style === '粗偏斜体') {
        item.css({'font-weight': 'bold', 'font-style': 'italic'});
        return;
      }
    }

    function add() {
      var i = 0, $item;

      if(flag.flag1) {
        for(i=0; i<flag.list.length; i++) {
          $item = $('<ol class="item"></ol>');
          $item.css({'font-family': flag.list[i]});
          $list.append($item.html(flag.list[i]));
        }
      } else if(flag.flag2) {
        for(i=0; i<flag.list.length; i++) {
          $item = $('<ol class="item"></ol>');
          addStyle($item, flag.list[i]);
          $list.append($item.html(flag.list[i]));
        }
      } else {
        for(i=0; i<flag.list.length; i++) {
          $item = $('<ol class="item"></ol>');
          $list.append($item.html(flag.list[i]));
        }
      }

      $items = $list.find('.item');
    }

    function choose(n) {
      $($items[n]).addClass('selected');
      $editor.val(flag.list[n]);
      $editor.select();
    }

    function origin() {
      var $oldList = $(flag.container).find('.notepad-com-list');
      if($oldList.length !== 0) $oldList.remove();

      $(flag.container).append($editTxt);

      $editTxt.css({ width: flag.width });
      add();
      choose(flag.click1);
    }

    this.show = function(em) {
      $.extend(flag, em);
      origin();
      $list.click(function(e) {
        $($items[flag.click1]).removeClass('selected');
        flag.click1 = flag.list.indexOf($(e.target).html());
        $($items[flag.click1]).addClass('selected');
        $editor.val(flag.list[flag.click1]);
        $editor.select();
      });

      $editor.keyup(function() {
        var i = 0;
        for(i=0; i<flag.list.length; i++) {
          if(flag.list[i].indexOf($editor.val()) === 0) break;
        }
        if(i === flag.list.length) return;
        $($items[i]).addClass('selected');
        $($items[flag.click1]).removeClass('selected');
        flag.click1 = i;
      });
    };
  }

   $('.setfont').click(function(){
      $('.menus').css('display','none');
      $('body').append($inner);
      $('.notepad-dlg-font').draggable({handle:$inner.find('.notepad-dlg-titlebar')});

      var T1 = new editTxt();
      T1.show({
        width: '182px',
        list: Font,
        flag1: true,
        container: '.list1',
      });

      var T2 = new editTxt();
      T2.show({
        container: '.list2',
        flag2: true,
        select: 3,
        width: '132px',
        list: styles,
      });

      var T3 = new editTxt();
      T3.show({
        list: sizes,
        container: '.list3',
        width: '66px',
      });
      $inner.find('.btn-cancel').click(delFont);
      $inner.find('.btn-ok').click(delFont);
      $inner.find('.close-btn').click(delFont);
    });
  }

  return {
    show: show,
  };
}());