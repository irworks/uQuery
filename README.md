# uQuery
Idea based on **jQuery**, a very lightweight JavaScript framework to perform basic tasks.

## Basic functioniality:

**selecter based on a id or class**:  
_("#id-name")  
_(".class-name")  

**gets the actual HTML-DOM element**:  
_("#id-name").html

## Animation:

**fades a element in**:  
_("#id-name").fadeIn( {int} duration[default: 1s] );

**fades a element out**:  
_("#id-name").fadeOut( {int} duration[default: 1s] );

##DOM-Elements

**set or get content of an element (=text)**:  
_("#id-name").content( {int} newText[default: undefined] );

**hides a element**:  
_("#id-name").hide();

**shows a element**:  
_("#id-name").show();

## AJAX-Requests

**send a GET request to given URL with parameters**:  
_GET( {string} url, {boolean} async, {map} arguments, {function(data)} callback);

**send a POST request to given URL with parameters**:
_POST( {string} url, {boolean} async, {map} arguments, {function(data)} callback);