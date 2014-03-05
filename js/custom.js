//console.log("h,w!!")
//d3.select("hi).text("hi");


function makeStage(w,h) {
	var stage = d3.select(".container")
		.insert("center")
		.insert("svg")
		.attr("width",w)
		.attr("height",h);
		return stage;
}



function clearStimulus(stage) {
	stage.selectAll("circle").remove();
}



function drawStimulus(stage, cx, cy, radius, fillcolor) {
	stage.insert("circle")
		.attr("cx", cx)
		.attr("cy", cy)
		.attr("r",radius)
		.style("fill",fillcolor)
		.style("stroke","steelblue")
		.style("stroke-width","5px");
}



function clearButton() {
	d3.select(".container")
	.selectAll("button")
	.remove();
}



function makeButton(text,callback) {
	d3.select(".container")
		.insert("button")
		.attr("type","button")
		.attr("class","btn btn-primary btn-lg")
		.text(text)
		.on("click", function(d) { console.log("clicked"); callback(); } );
}


var trials = [ {"color":"lightblue","radius":20},
				{"color":"lightgreen","radius":40},
				{"color":"red","radius":60},
				{"color":"blue","radius":40}
				];



var mystage = makeStage(500,400);

function doTrial(stage, stim_array) {
	if (stim_array.length > 0) {
	stim = stim_array.shift();
	clearStimulus(stage);
	clearButton();
	drawStimulus(stage, 500/2., 400/2., stim["radius"], stim["color"] );
	makeButton("Next trial", function () { doTrial(stage, stim_array); });
	} else {
	alert("done with the experiment!");
}
}

doTrial(mystage, trials);
