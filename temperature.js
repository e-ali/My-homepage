function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function()
    {
        if (rawFile.status == 200 || rawFile.status == 0)
        {
            var allText = rawFile.responseText;
            var categories = document.querySelector("#forecast");
            categories.innerHTML += allText;
        }
    }
    rawFile.send(null);
}

window.addEventListener("load", function(){
    readTextFile("forecast");
	});
