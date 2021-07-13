(function(){

window.addEventListener('load', function(){

var sourceControlId = '0000000c', /** THE ID OF THE SENDER CONTROL */

targetControlId = '00000012', /** THE ID OF THE RECEIVER CONTROL **/

sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId),

targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

sourceControlInstance.on('value-change', function(){

targetControlInstance.setValue( sourceControlInstance.getValue() );

});

targetControlInstance.setValue( sourceControlInstance.getValue() );

});

})();