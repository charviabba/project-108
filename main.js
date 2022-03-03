function start()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/K1wcxxHWn/model.json', modelReady);
}
function modelReady()
{
  classifier.classify(gotResults);
}
var dog = 0;
var elephant = 0;
var peacock = 0; 
function gotResults(error, results)
{
 if (error) 
 {
   console.error(error);
 }else
 {
   console.log(results);
   random_number_r = Math.floor(Math.random() * 255) + 1;
   random_number_g = Math.floor(Math.random() * 255) + 1;
   random_number_b = Math.floor(Math.random() * 255) + 1;

   document.getElementById("result_label").innerHTML = "I Can Hear - " + results[0].label;
   document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
   document.getElementById("result_label").style.color = "rgb("+ random_number_r + ","+ random_number_g +","+random_number_b +")";
   document.getElementById("result_confidence").style.color = "rgb("+ random_number_r + ","+ random_number_g +","+random_number_b +")";

   img = document.getElementById("animal_img");
   if (results[0].label == "dog") 
   {
     img.src="fatdog-dog.gif";
     dog = dog + 1;
   }else if (results[0].label == "elephant") 
   {
     img.src="200.gif";
     elephant = elephant + 1;
   }else if (results[0].label == "peacock") 
   {
     img.src="peacock.gif";
     peacock = peacock + 1;
   }else
   {
     img.src="ear.png";
   }
 }
}
