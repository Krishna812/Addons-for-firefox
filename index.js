var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});


function handleClick(state) 
{

for(var i = tabs.length - 1; i >= 1; --i)
{
	
	tabs.activeTab.close();
	
}
tabs.open("http://www.example.com");

}