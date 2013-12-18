if(!it) var it={};
if(!it.micz) it.micz={};
if(!it.micz.ColumnCV) it.micz.ColumnCV={};

it.micz.ColumnCV = {
	init: function() {
	try{
		// initialization code
    let tabmail = document.getElementById("tabmail");
    var monitor = {
      onTabTitleChanged:function(tab){},
      onTabSwitched: function(tab)
      {
    	  if(tab.mode.name=='glodaList'){
          let loccv = document.getElementById("locationCol");
          if(loccv) loccv.setAttribute("hidden", "false");
        }
      }
    };
    tabmail.registerTabMonitor(monitor);
    }catch(e){
      alert("No tabContainer available! " + e);
    }
		this.initialized = true;
	},
	
	initDelayed: function(){
  	setTimeout(function() { it.micz.ColumnCV.init(); }, 750);
	},
};

window.addEventListener("load", it.micz.ColumnCV.initDelayed, false);
