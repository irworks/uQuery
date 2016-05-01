/**
 * Created by irworks on 30.04.16.
 */

/* Consider hosting on your server. */
loadCSSfile('https://api.irwks.cloud/uQuery/css/uQuery.css');

/* loads a css file */
function loadCSSfile(url) {
    var head  = _('head').html[0];
    var elem  = document.createElement('link');
    
    elem.type = 'text/css';
    elem.rel  = 'stylesheet';
    elem.href = url;

    head.appendChild(elem);
}

/* set default to var if undefined */
function def(currentValue, defaultValue) {
    return currentValue === undefined ? defaultValue : currentValue;
}

/* Gets an element by id or class */
function _(elementName) {

    if(elementName.length <= 0) {
        return undefined;
    }

    var nameWithoutPrefix = elementName.substring(1, elementName.length);

    var res = undefined;

    if(elementName.substring(0, 1) == '#') {
        res = document.getElementById(nameWithoutPrefix);
    }else if(elementName.substring(0, 1) == '.') {
        res = document.getElementsByClassName(nameWithoutPrefix);
    }else{
        res = document.getElementsByTagName(elementName);
    }

    if(res == undefined) {
        return undefined;
    }

    this.html = res;

    /* fades an object in */
    this.fadeIn = function (sec) {
        sec = def(sec, 1);
        this.show();
        this.html.style.animation = 'fadeIn ' + sec + 's linear';
    };

    /* fades an object out */
    this.fadeOut = function (sec) {
        sec = def(sec, 1);
        this.html.style.animation = 'fadeOut ' + sec + 's linear';
    };

    /* shows an object, optional: type what display type it should get */
    this.show = function (type) {
        type = def(type, 'block');
        this.html.style.display = type;
    };

    /* hides an object */
    this.hide = function () {
        this.html.style.display = 'none';
    };

    /* sets the content text of the element */
    this.content = function (text) {
        if(text === undefined) {
            return this.html.innerHTML;
        }
        this.html.innerHTML = text;
    };

    return this;
}

/**
 * sends a get request to given url
 @param {string} url - the address to request to
 @param {boolean} async - should the request run asynchronously?
 @param {map} arguments - a key value store of all arguments
 @param {function} callback - the function(data) to get called when done
 */
function _GET(url, async, arguments, callback) {
    _REQUEST(url, async, arguments, callback, true);
}

/**
 * sends a post request to given url
 @param {string} url - the address to request to
 @param {boolean} async - should the request run asynchronously?
 @param {map} arguments - a key value store of all arguments
 @param {function} callback - the function(data) to get called when done
 */
/* send a post request */
function _POST(url, async, arguments, callback) {
    _REQUEST(url, async, arguments, callback, false);
}

/* request to given URL with given method */
function _REQUEST(url, async, arguments, callback, getRequest) {
    var xhttp = new XMLHttpRequest();
    var data = {};
    
    xhttp.onreadystatechange = function() {
        
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            data['success'] = true;
        }else if(xhttp.readyState == 4 && xhttp.status != 200){
            data['success'] = false;
        }

        if (xhttp.readyState == 4) {

            data['statusCode']   = xhttp.status;
            data['statusText']   = xhttp.statusText;
            data['response']     = xhttp.responseText;
            data['type']         = xhttp.responseType;
            data['timeout']      = xhttp.timeout;

            callback(data);
        }
    };

    var argsString = '';
    var i = 0;

    for(var arg in arguments) {
        if(!arguments.hasOwnProperty(arg)) {
            continue;
        }

        if (i > 0) {
           argsString += '&';
        }

        argsString += arg + '=' + arguments[arg];

        i++;
    }

    var method = 'POST';

    if(getRequest) {
        if(argsString.length > 0) {
            url += '?' + argsString;
        }
        method = 'GET';
    }

    xhttp.open(method, url, async);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    if(!getRequest) {
        xhttp.send(argsString);
    }else{
        xhttp.send();
    }
}
