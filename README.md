# uQuery
Idea based on **jQuery**, a very lightweight JavaScript framework to perform basic tasks.

## Basic functionality:

**selector based on a id or class**:
- _("#id-name")
- _(".class-name")

**gets the actual HTML-DOM element**:
- _("#id-name").html

## Animation:

**fades an element in**:
- _("#id-name").fadeIn( {int} duration[default: 1s] );

**fades an element out**:
- _("#id-name").fadeOut( {int} duration[default: 1s] );

##DOM-Elements

**set or get content of an element (=text)**:
- _("#id-name").content( {int} newText[default: undefined] );

**hides an element**:
- _("#id-name").hide();

**shows an element**:
 _("#id-name").show();

**checks if a class contains**:
- _("#id-name").hasClass( {string} className);

**adds/ removes a class**:
- _("#id-name").toggleClass( {string} className);

## AJAX-Requests

**send a GET request to given URL with parameters**:  
- _GET( {string} url, {boolean} async, {map} arguments, {function(data)} callback);

**send a POST request to given URL with parameters**:
- _POST( {string} url, {boolean} async, {map} arguments, {function(data)} callback);