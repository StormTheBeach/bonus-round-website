// http://spin.js.org/#v2.3.2
!function(a,b){"object"==typeof module&&module.exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return m[e]||(k.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",k.cssRules.length),m[e]=1),e}function d(a,b){var c,d,e=a.style;if(b=b.charAt(0).toUpperCase()+b.slice(1),void 0!==e[b])return b;for(d=0;d<l.length;d++)if(c=l[d]+b,void 0!==e[c])return c}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}k.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.scale*d.width,left:d.scale*d.radius,top:-d.scale*d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.scale*(d.length+d.width),k=2*d.scale*j,l=-(d.width+d.length)*d.scale*2+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k,l=["webkit","Moz","ms","O"],m={},n={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:.25,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"};if(h.defaults={},f(h.prototype,{spin:function(b){this.stop();var c=this,d=c.opts,f=c.el=a(null,{className:d.className});if(e(f,{position:d.position,width:0,zIndex:d.zIndex,left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.scale*(f.length+f.width)+"px",height:f.scale*f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.scale*f.radius+"px,0)",borderRadius:(f.corners*f.scale*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.scale*f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}}),"undefined"!=typeof document){k=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}();var o=e(a("group"),{behavior:"url(#default#VML)"});!d(o,"transform")&&o.adj?i():j=d(o,"animation")}return h});

var spinner = function() {
  var opts = {
    lines: 17 // The number of lines to draw
  , length: 0 // The length of each line
  , width: 15 // The line thickness
  , radius: 0 // The radius of the inner circle
  , scale: 1.25 // Scales overall size of the spinner
  , corners: 1 // Corner roundness (0..1)
  , color: '#d4b12b' // #rgb or #rrggbb or array of colors
  , opacity: 0 // Opacity of the lines
  , rotate: 0 // The rotation offset
  , direction: 1 // 1: clockwise, -1: counterclockwise
  , speed: 1.1 // Rounds per second
  , trail: 50 // Afterglow percentage
  , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
  , zIndex: 2e9 // The z-index (defaults to 2000000000)
  , className: 'spinner' // The CSS class to assign to the spinner
  , top: '50%' // Top position relative to parent
  , left: '50%' // Left position relative to parent
  , shadow: false // Whether to render a shadow
  , hwaccel: false // Whether to use hardware acceleration
  , position: 'absolute' // Element positioning
  }

  var spinner = new Spinner(opts);

  return spinner;
}()

var spinSpinners = function() {
  var targets = document.getElementsByClassName('loading-spinner');

  for(var i = 0; i < targets.length; i++){
    spinner.spin(targets[i])
  }
}()

var $jsonp = (function(){

  var that = {};

  that.send = function(src, options) {
    var callback_name = options.callbackName || 'callback',
      on_success = options.onSuccess || function(){},
      on_timeout = options.onTimeout || function(){},
      timeout = options.timeout || 10;

    var timeout_trigger = window.setTimeout(function(){
      window[callback_name] = function(){};
      on_timeout();
    }, timeout * 5000);

    window[callback_name] = function(data){
      window.clearTimeout(timeout_trigger);
      on_success(data);
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = src;

    document.getElementsByTagName('head')[0].appendChild(script);
  }

  return that;
})();

function populatePage(json) {
  outputColumnedList({
    data: json.taps,
    menuType: 'cms_taps',
    min_items_for_multicolumn: 8,
    columnsNeeded: 4,
    enableLastUpdated: true,
    outputMenu: function(data, param) {
      return 'beforeend', '<li><div<strong>'+data.beer.name+'</strong></br><small>'+" ("+data.beer.abv+"% / "+data.beer.ibu+" IBU) - "+paintThatShitGold(data.brewery.state)+'</small></li>'
    }
  })
	outputColumnedList({
    data: json.bottles,
    menuType: 'cms_bottles',
    min_items_for_multicolumn: 8,
    columnsNeeded: 4,
    enableLastUpdated: true,
    outputMenu: function(data, param){
      return 'beforeend', '<li><strong>'+data.beer.name+'</strong><small>'+" - "+paintThatShitGold(data.brewery.state)+'</small></li>'
    }
  })
  outputEvents({
    data: json.events,
    menuType: 'cms_events',
    min_items_for_multicolumn: 3,
    columnsNeeded: 3,
    enableLastUpdated: false,
    outputMenu: function(data, param) {
      var description = data.description.length > 200 ? data.description.substring(0,300).concat("...") : data.description;
      return "<div class='card-entire'>"
                +"<div class='card-topper'>"
                  +"<div class='card-header'>"
                    +"<h3 class='card-title'>"+data.title+"</h3>"
                      +"<div class='card-flavor'>"+data.event_start_date+" - "+data.event_start_time+"</div>"
                  +"</div>"
                  +"<div class='card-content font-medium'>"+description+"</div>"
                +"</div>"
              +"<div class='card-footer font-medium'><a class='link' href="+data.link+">Read on Facebook</a></div>"
              +"</div>"
    }
  })
  outputCocktails(json.cocktails)
  outputWines(json.wines)
};

function paintThatShitGold(state) {
  return state === "AZ" ? '<span class="gold">'+state+'</span>' : '<span>'+state+'</span>';
}

function outputWines(data) {
  var WhitesUlElement = document.getElementById("content_whites");
  var RedsUlElement = document.getElementById("content_reds");

  outputLi = function(data) {
    return "<div>"+data.name+"</div>";
  }

  for (var i = 0; i < data.length; i++) {
    if(data[i].category_name === "White") {
      WhitesUlElement.insertAdjacentHTML('beforeend', outputLi(data[i]))
    }
    else if(data[i].category_name === "Red") {
      RedsUlElement.insertAdjacentHTML('beforeend', outputLi(data[i]))
    }
  }
}

function outputCocktails(data) {
  var cocktailUlElement = document.getElementById("content_cocktails");

  for (var i = 0; i < data.length; i++) {
    cocktailUlElement.insertAdjacentHTML('beforeend', function(data) {
      return "<li><p class='menu-header-minor'>"+data.name+"</p>"+data.ingredients.string+"</li>"
    }(data[i]))
  }
}

function outputEvents(displayObject) {
  var itemList, menuType, min_items_for_multicolumn, columnsNeeded, nextItemToOutput, lastUpdated

  itemList = displayObject.data
  menuType = displayObject.menuType
  min_items_for_multicolumn = displayObject.min_items_for_multicolumn
  columnsNeeded = displayObject.columnsNeeded;
	nextItemToOutput = 0;

  if(itemList.length < min_items_for_multicolumn) { columnsNeeded = 1 };

	var itemsPerColumn = Math.floor(itemList.length / columnsNeeded);
	var remainder = itemList.length % columnsNeeded

	for (var columnNumber = 0; columnNumber <= columnsNeeded && nextItemToOutput < itemList.length; columnNumber++){
		var itemsInThisColumn = itemsPerColumn;

		if(remainder > 0) {
			itemsInThisColumn++
			remainder--
		}

    document.getElementById(menuType).insertAdjacentHTML('beforeend', (function(){
      return '<div id='+menuType+'-col-'+columnNumber+' class="col-md-4"></div>'
    })())

    document.getElementById(menuType+'-col-'+columnNumber).insertAdjacentHTML('beforeend', (function(){
      return 'beforeend', '<div id="'+menuType+'-div-'+columnNumber+'></div>'
    })())

    var div = document.getElementById(menuType+'-col-'+columnNumber)

		for (var j = 0; j < itemsInThisColumn && nextItemToOutput < itemList.length; j++){
      var data = itemList[nextItemToOutput]
			div.insertAdjacentHTML('beforeend', displayObject.outputMenu(data))

			nextItemToOutput++
		}
  }
}

function outputColumnedList(displayObject){
  var itemList, menuType, min_items_for_multicolumn, columnsNeeded, nextItemToOutput, lastUpdated

  itemList = displayObject.data
  menuType = displayObject.menuType
  min_items_for_multicolumn = displayObject.min_items_for_multicolumn
  columnsNeeded = displayObject.columnsNeeded;
	nextItemToOutput = 0;
	lastUpdated = '';

	if(itemList.length < min_items_for_multicolumn) { columnsNeeded = 1 };

	var itemsPerColumn = Math.floor(itemList.length / columnsNeeded);
	var remainder = itemList.length % columnsNeeded

	for (var columnNumber = 0; columnNumber <= columnsNeeded && nextItemToOutput < itemList.length; columnNumber++){
		var itemsInThisColumn = itemsPerColumn;

		if(remainder > 0) {
			itemsInThisColumn++
			remainder--
		}

		document.getElementById(menuType).insertAdjacentHTML('beforeend', (function(){
      return '<div id='+menuType+'-col-'+columnNumber+' class="col-md-3"></div>'
    })())

		document.getElementById(menuType+'-col-'+columnNumber).insertAdjacentHTML('beforeend', (function(){
      return 'beforeend', '<ul id="'+menuType+'-ul-'+columnNumber+'"></ul>'
    })())

		var ul = document.getElementById(menuType+'-ul-'+columnNumber)

		for (var j = 0; j < itemsInThisColumn && nextItemToOutput < itemList.length; j++){
      var data = itemList[nextItemToOutput]
			ul.insertAdjacentHTML('beforeend', displayObject.outputMenu(data, nextItemToOutput))

			if (displayObject.enableLastUpdated && itemList[nextItemToOutput].date_added_timestamp > lastUpdated) {
				lastUpdated = itemList[nextItemToOutput].date_added_timestamp
			}
			nextItemToOutput++
		}
	}

  if(displayObject.enableLastUpdated) {
    var myDate = new Date(lastUpdated*1000);
    var lastUpdatedDate = myDate.toLocaleString();
    document.getElementById(menuType+'-lastupdated').insertAdjacentHTML('beforeend',  '<div class="menu-flavor-minor">Last updated on: <span class="gold">'+lastUpdatedDate+' MST</span></div>')
  }
}

var makeLoadedContentVisible = function() {
  var targets = document.getElementsByClassName('load-externally');
  console.log(targets);
  for(var i = 0; i < targets.length; i++){
    console.log(targets[i]);
    targets[i].classList.remove('content-hide');
  }
}

$jsonp.send('https://www.taphunter.com/widgets/location/v3/6729532695642112.jsonp?callback=handleCallback', {
    callbackName: 'handleCallback',
    onSuccess: function(json){
    	// DEBUG - console.log('successfully retrieved taphunter data!', json);
    	// This will expose the data to whole page:
        data = json;
        populatePage(json);
        makeLoadedContentVisible();
        spinner.stop();
    },
    onTimeout: function(){
        console.log('timeout!');
    },
    timeout: 5
});
