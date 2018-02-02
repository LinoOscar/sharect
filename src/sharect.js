var Sharect = function () {

  function Sharect() {
    var _networks = {
      twitter: true,
      notepad: true,
      facebook: false,
      mail: true,
      traductions: true
    };
    var _twitterConfig = {
      username: false,
      url: 'https://twitter.com/intent/tweet?text=',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="sharect__icon"><path d="M8.2,20.2c6.5,0,11.7-5.2,11.8-11.6c0-0.1,0-0.1,0-0.2c0-0.2,0-0.4,0-0.5c0.8-0.6,1.5-1.3,2.1-2.2c-0.8,0.3-1.6,0.6-2.4,0.7c0.9-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-1.6-1.7-4.2-1.7-5.9-0.1c-1.1,1-1.5,2.5-1.2,3.9C8.5,8.7,5.4,7.1,3.3,4.6c-1.1,1.9-0.6,4.3,1.3,5.5c-0.7,0-1.3-0.2-1.9-0.5l0,0c0,2,1.4,3.7,3.3,4.1c-0.6,0.2-1.2,0.2-1.9,0.1c0.5,1.7,2.1,2.8,3.9,2.9c-1.7,1.4-3.9,2-6.1,1.7C3.8,19.5,6,20.2,8.2,20.2"/></svg>'
    };
    var _facebookConfig = {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" width="24" height="24" class="sharect__icon"><path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18.4,7.4H17c-0.9,0-1,0.3-1,1l0,1.3 h2.1L18,12h-1.9v7h-3.2v-7h-1.2V9.6h1.2V8.1c0-2,0.8-3.1,3.1-3.1h2.4V7.4z"/></svg>'
    };
    var _notepadConfig = {
    	      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" width="24" height="24" class="sharect__icon"><path d="M19,2h-4.2c-0.4-1.2-1.5-2-2.8-2S9.6,0.8,9.2,2H5C3.9,2,3,2.9,3,4v16c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V4  C21,2.9,20.1,2,19,2z M12,2c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1s-1-0.4-1-1C11,2.4,11.4,2,12,2z M19,20H5V4h2v2h10V4h2V20z"/></svg>'
    };    
    var _mailConfig = {
  	      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>'
  };  
    var _traductionsConfig= {
    	 	icon:
    	 	'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"'+
    	     'width="24" height="24"'+
    	     'viewBox="0 0 26 26"'+
    	     'style="fill:#FFF;"><g id="surface1"><path style=" " d="M 1.6875 0 C 0.757813 0 0 0.757813 0 1.6875 L 0 14.3125 C 0 15.242188 0.757813 16 1.6875 16 L 4 16 L 4 19 L 7 22 L 10 22 L 10 24.3125 C 10 25.242188 10.757813 26 11.6875 26 L 24.3125 26 C 25.242188 26 26 25.242188 26 24.3125 L 26 11.6875 C 26 10.757813 25.242188 10 24.3125 10 L 16 10 L 16 1.6875 C 16 0.757813 15.242188 0 14.3125 0 Z M 2 2 L 14 2 L 14 10 L 11.6875 10 C 11.300781 10 10.941406 10.125 10.65625 10.34375 C 10.246094 10.105469 9.871094 9.886719 9.53125 9.65625 C 10.355469 8.796875 11.15625 7.753906 11.78125 6.5 C 11.867188 6.347656 11.910156 6.175781 11.90625 6 L 13 6 L 13 4 L 9 4 L 9 3 L 7 3 L 7 4 L 3 4 L 3 6 L 5.125 6 C 4.859375 6.097656 4.644531 6.300781 4.539063 6.5625 C 4.429688 6.824219 4.441406 7.121094 4.5625 7.375 C 4.5625 7.375 4.894531 8.078125 5.6875 8.96875 C 5.894531 9.199219 6.132813 9.457031 6.40625 9.71875 C 4.988281 10.753906 3.78125 11.21875 3.78125 11.21875 C 3.40625 11.300781 3.109375 11.59375 3.023438 11.972656 C 2.9375 12.347656 3.074219 12.738281 3.375 12.976563 C 3.679688 13.21875 4.089844 13.261719 4.4375 13.09375 C 4.4375 13.09375 6.117188 12.46875 8 11 C 8.519531 11.378906 9.078125 11.773438 9.75 12.15625 C 9.828125 12.199219 9.914063 12.230469 10 12.25 L 10 14 L 6 14 L 5.5 13.5 L 5 14 L 2 14 Z M 5.8125 6 L 9.75 6 C 9.21875 6.953125 8.601563 7.738281 7.9375 8.40625 C 7.640625 8.136719 7.390625 7.882813 7.1875 7.65625 C 6.535156 6.925781 6.375 6.5625 6.375 6.5625 C 6.273438 6.304688 6.070313 6.101563 5.8125 6 Z M 16.96875 13.3125 L 19.0625 13.3125 L 22.5 22.625 L 20.34375 22.625 L 19.65625 20.625 L 16.34375 20.625 L 15.65625 22.625 L 13.5 22.625 Z M 17.96875 15.875 L 16.84375 19.15625 L 19.15625 19.15625 L 18.03125 15.875 Z M 7 16 L 10 16 L 10 19 L 7 19 Z "></path></g></svg>'
    };  
    
    //var _traductionsConfig = '<div id="tradText"></div>';
    var _selection = '';
    var _text = '';
    var _backgroundColor = '#333';
    var _iconColor = '#fff';
    var _targetLang = "es";
    

    var _icons = {};
    var _arrowSize = 5;
    var _buttonMargin = 7 * 2;
    var _iconSize = 24 + _buttonMargin;
    var _top = 0;
    var _left = 0;

    function facebookButton() {
      var fbBtn = new Button(_facebookConfig.icon, function () {
        FB.ui({
          method: 'share',
          display: 'popup',
          quote: _text,
          href: window.location.href
        });
      });

      return fbBtn;
    }


    function notepadButton() {
      var ntBtn = new Button(_notepadConfig.icon, function () {
    		$.notify("Ctrl+C" , "success"); 	
    		clipboard.writeText(_text);    	  
      });

      return ntBtn;
    }

    function mailButton() {

        var mailBtn = new Button(_mailConfig.icon, function () {
        	window.location.href = 'mailto:' + '?Body=' +  encodeURIComponent(_text);
        });

        return mailBtn;
      }    
    
    function traductionsButton() {

        var tradBtn = new Button(_traductionsConfig.icon, function () {
            translateSharectText(_text,"auto",_targetLang);
            return false;
        });

        return tradBtn;
      }        
    
    function twitterButton() {
      var txt = _twitterConfig.username ? ' ' + _twitterConfig.username + ' ' + window.location.href : ' ' + window.location.href;

      var twBtn = new Button(_twitterConfig.icon, function () {
        window.open(_twitterConfig.url + encodeURIComponent(_text) + txt, 'Share', 'width=550, height=280');
        return false;
      });

      return twBtn;
    }

    function appendIconStyle() {
      var style = document.createElement('style');
      style.innerHTML = '.sharect__icon{fill:' + _iconColor + ';}';
      document.body.appendChild(style);
    }

    function appendIcons() {
      var div = document.createElement('div');
      var count = 0;
      if (_networks.twitter) {
        div.appendChild(twitterButton());
        count++;
      }
      if (_networks.facebook) {
        div.appendChild(facebookButton());
        count++;
      }
      if (_networks.notepad) {
          div.appendChild(notepadButton());
          count++;
        }   
      if (_networks.mail) {
          div.appendChild(mailButton());
          count++;
        }
      if (_networks.traductions) {
          div.appendChild(traductionsButton());
          count++;
        }        
//      if (_networks.traductions) {
//    	  var myTrad = document.createElement('div');
//    	  myTrad.id="divTrad";
//    	  myTrad.style = 'display:inline-block;color:white;white-space: pre';
//    	  myTrad.innerHTML=_traductionsConfig;
//          div.appendChild(myTrad);
//        }        
      return {
        icons: div,
        length: count
      };
    }

    function setTooltipPosition() {
      //var position = _selection.getRangeAt(0).getBoundingClientRect();
      var position = _selection;
      var DOCUMENT_SCROLL_TOP = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
      _top = position.top + DOCUMENT_SCROLL_TOP - _iconSize - _arrowSize;
      _left = position.left + (position.width - _iconSize * _icons.length) / 2;
    }

    function moveTooltip() {
      setTooltipPosition();
      var tooltip = document.querySelector('.sharect');
      tooltip.style.top = _top + 'px';
      tooltip.style.left = _left + 'px';
    }

    function drawTooltip() {
      _icons = appendIcons();
      setTooltipPosition();

      var div = document.createElement('div');
      div.className = 'sharect';
      div.style = 'line-height:0;' + 'position:absolute;z-index:50000;' + 'background-color:' + _backgroundColor + ';' + 'border-radius:3px;' + 'top:' + _top + 'px;' + 'left:' + _left + 'px;' + 'transition:all .2s ease-in-out;';
      
      div.appendChild(_icons.icons);

      var arrow = document.createElement('div');
      arrow.style = 'position:absolute;' + 'border-left:' + _arrowSize + 'px solid transparent;' + 'border-right:' + _arrowSize + 'px solid transparent;' + 'border-top:' + _arrowSize + 'px solid ' + _backgroundColor + ';' + 'bottom:-' + (_arrowSize - 1) + 'px;' + 'left:' + (_iconSize * _icons.length / 2 - _arrowSize) + 'px;' + 'width:0;' + 'height:0;';

      div.appendChild(arrow);

      document.body.appendChild(div);
      
    }

    function attachEvents() {

      function hasSelection() 
      {
    	  return ((window.getSelection().toString() != '') || (getCodeMirrorSelectedText().toString() != '') || (getTextAreaSelectedText().toString() != ''));
      }
      
      function getSharectSelection()
      {
    	  if (window.getSelection().toString() != '')
    	  {
    		  var position = window.getSelection().getRangeAt(0).getBoundingClientRect();
    		  return { top:position.top, left:position.left, width:position.width, text: window.getSelection().toString()};
    	  }
    	  else if (getCodeMirrorSelectedText().toString() != '')
    	  {
    		  var position = getCodeMirrorSelectedText();
    		  return {	top:position.range.from.top, left:position.range.from.left, width:position.range.to.left - position.range.from 	.left, text:position.text};
    	  }
    	  else
    	  {
    		  var position = getTextAreaSelectedText();
    		  return {	top:position.range.from.top, left:position.range.from.left, width:position.range.to.left - position.range.from 	.left, text:position.text};    		  
    	  }
      }

      function hasTooltipDrawn() {
        return !!document.querySelector('.sharect');
      }
      
      function mouseOut ()
      {
          setTimeout(function mouseTimeout() {
           if ((hasTooltipDrawn()) && (deletePreviousSelectedText()))
           {
          	 document.querySelector('.sharect').remove();
           }
           else
           {
            if (hasTooltipDrawn()) {
              if (hasSelection()) {
                _selection = getSharectSelection();
                _text = _selection.text;
                moveTooltip();
                return;
              } else {
                document.querySelector('.sharect').remove();
              }
            }
           }
            if (hasSelection()) {
              _selection = getSharectSelection();
              _text = _selection.text;
              drawTooltip();
            }
          }, 10);
       }      
      
      window.addEventListener('mouseup', mouseOut, false);
    }

    function config(options) {
      _networks.twitter = options.twitter === undefined ? _networks.twitter : options.twitter;
      _networks.facebook = options.facebook === undefined ? _networks.facebook : options.facebook;
      _networks.notepad = options.notepad === undefined ? _networks.notepad : options.notepad;
      _networks.mail = options.mail === undefined ? _networks.mail : options.mail;
      _networks.traductions = options.traductions === undefined ? _networks.traductions : options.traductions;
      _twitterConfig.username = options.twitterUsername === undefined ? _twitterConfig.username : options.twitterUsername;
      _backgroundColor = options.backgroundColor || '#333';
      _targetLang = options.targetLang || 'es';
      _iconColor = options.iconColor || '#fff';
     
      return this;
    }

    function init() {
      appendIconStyle();
      attachEvents();
      return this;
    }

    return {
      config: config,
      init: init
    };
  }

  function Button(icon, clickFn) {
    var btn = document.createElement('div');
    btn.style = 'display:inline-block;' + 'margin:4px;' + 'cursor:pointer;' + 'transition:all .2s ease-in-out;';
    btn.innerHTML = icon;
    btn.onclick = clickFn;
    btn.onmouseover = function () {
      this.style.transform = 'scale(1.2)';
    };
    btn.onmouseout = function () {
      this.style.transform = 'scale(1)';
    };
    return btn;
  }
  
  function deletePreviousSelectedText()
  {
	  var returnValue = false;
		//$("." + "codeMirrorSharect").each(function() {
		$("." + "CodeMirror").each(function() {	
			
			var myInstance = $( this )[0].CodeMirror;
			
			if (myInstance.getSelection()!='')
			{
				var auxText = myInstance.getValue();
				myInstance.replaceSelection("","start");
				myInstance.setValue(auxText);
				returnValue=true;
			}
		});  
		
		var textareaList = document.getElementsByTagName('textarea');
		for(var i = 0; i < textareaList.length; i++){
			
			var myText = textareaList[i].value.substring( textareaList[i].selectionStart, textareaList[i].selectionEnd);	
			if (myText!='')
			{
				textareaList[i].selectionStart=0;
				textareaList[i].selectionEnd=0;
				returnValue=true;
			}
		}
		
		return returnValue;
  }
  
  function getCodeMirrorSelectedText() {
		var mySelection = new SharectSelection("",undefined);
		//$("." + "codeMirrorSharect").each(function() {
		$("." + "CodeMirror").each(function() {	
			
			//var myInstance = $( this ).data('CodeMirrorInstance');
			var myInstance = $( this )[0].CodeMirror;
			
			if (myInstance.getSelection()!='')
			{
				mySelection.text =  myInstance.getSelection();
				mySelection.setRange({ from: myInstance.cursorCoords(true,"window"), to: myInstance.cursorCoords(false,"window") });
				return mySelection;
			}
		});
		return mySelection;
	}  
  
  function getTextAreaSelectedText() 
  {
		var mySelection = new SharectSelection("",undefined);
		//$("." + "codeMirrorSharect").each(function() {
		//$("textarea").each(function(){
		var textareaList = document.getElementsByTagName('textarea');
		for(var i = 0; i < textareaList.length; i++){
			
			var myText = textareaList[i].value.substring( textareaList[i].selectionStart, textareaList[i].selectionEnd);	
			if (myText!='')
			{
				mySelection.text = myText;
				mySelection.setRange({ from: textareaList[i].getBoundingClientRect(), to:  textareaList[i].getBoundingClientRect() });
				i = textareaList.length + 1;
			}
		}
		
		return mySelection;
  }    


  return Sharect;
}();


var SharectSelection = function () {
	
	var text;
	var range;
	
function SharectSelection(text,range) {
	  this.text = text;
	  this.setRange(range);
	  return this;
	}

SharectSelection.prototype.setRange = function setRange1(range) {
	
	  if (range != undefined)
	  {
	  this.range = range;
//	  _range.setStart(range.node,0);
//	  _range.setEnd(range.node,4);
	  }
}

SharectSelection.prototype.toString = function sharectSelectionToString() {
	  return this.text;
	}

SharectSelection.prototype.getRangeAt = function rangeSelection() {
	  return this.range;
	}

  return SharectSelection;
}();


function translateSharectText(inputText,sourceLang,targetLang)
{
	$.ajax({
		url : "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(inputText),
		type : 'GET',
		contentType: "text/plain;charset=UTF-8",
		success : function(response)
	    {
			if ((inputText.indexOf(response[0][0][0])!=-1) && (targetLang !='en')) //if is my own language, traduce to english
			{
				translateSharectText(inputText,sourceLang,"en");
			}
			else
			{
			var myArray = response[0];
			var resultText = "";
			
			for (var i = 0; i < myArray.length; i++) 
			{
				resultText = resultText + response[0][i][0] + "\n";	
			}

			var myWin = window.open('','Share', 'width=' + '200' +',height=' + '200' +',toolbar=no, titlebar=no,status=no,scrollbars=no,menubar=no, resizable=no');
			
			var myWindowContent="<html>" +
								"<head>" +  
								"<script>" + 
								"function windowResize() {" +
									   "var eleStyle = document.getElementById('tradDiv');" +
									   "var contentWidth = eleStyle.clientWidth;" + 
									   "var contentHeight = eleStyle.clientHeight;" + 
									   "window.resizeTo(contentWidth + 35,contentHeight + 95);"+
									   "window.focus();" + 
									"}" + 
								"</script>" +
								"</head>" + 
								"<body onload='windowResize()'>" + 
								"<div id='tradDiv' style='display:inline-block;min-height: 100px;min-width: 100px;overflow: hidden;border:1px;border-style: dotted;border-color:#2F6FAB;background-color:#F9F9F9;white-space: pre'>" + resultText + "</div>" + 
								"</body>" + 
								"</html>";
			
			myWin.document.write(myWindowContent);
			myWin.document.title = 'Google Translate';
			myWin.windowResize();

			}
	    }		
		});
}
