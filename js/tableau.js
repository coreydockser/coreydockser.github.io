var divElement = document.getElementById('viz1674150786525');
var vizElement = divElement.getElementsByTagName('object')[0];
if (divElement.offsetWidth >= 1000) { vizElement.style.width = '1000px'; vizElement.style.height = '827px'; }
    else if (divElement.offsetWidth > 500) { vizElement.style.width = '500px'; vizElement.style.height = '827px'; } 
    else { vizElement.style.width = '100%'; vizElement.style.height = '1177px'; } var scriptElement = document.createElement('script'); scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; 
vizElement.parentNode.insertBefore(scriptElement, vizElement);                