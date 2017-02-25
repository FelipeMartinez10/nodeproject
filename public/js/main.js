var tweetsRecibidos = {};

$.getJSON("/accessjson", function (tweets) {
  //console.log(tweets);
  tweetsRecibidos=tweets;
  console.log("se recibieron todos");
  //filter();
});

var filter = function()
{
  var fecha =   recibirFecha();
  //console.log(fecha);
  var j = 0;
  var tweetTag = '';
  $("#tweets").empty();
  for(i = 0; i < tweetsRecibidos.length;i++)
  {
    var fechatweet = new Date(tweetsRecibidos[i].created_at);
    var fechatweetstr = new Date(fechatweet.getFullYear(), fechatweet.getMonth(), fechatweet.getDate());
    //console.log(fecha);
    //console.log(fechatweetstr);
    //console.log(fechatweetstr.getTime()===fecha.getTime());
    if(fechatweetstr.getTime()===fecha.getTime())
    {
      if(j ==0)
      {
        tweetTag = '';
        tweetTag += '<div class="row">';
      }
      tweetTag+= '<div class="col-md-3">';
      tweetTag +='<div class="box">';
      tweetTag +='<div class="box-icon">';
      tweetTag +='<img class="img-circle img-responsive" src='+tweetsRecibidos[i].user.profile_image_url_https+'>';
      tweetTag+='</div>';
      tweetTag+='<h4>' + tweetsRecibidos[i].user.name + '</h4>'
      tweetTag+='<p>' + tweetsRecibidos[i].text + '</p>';
      tweetTag +='<br>';
      tweetTag+='<p>' + tweetsRecibidos[i].created_at + '</p>';
      tweetTag+='</div>';
      tweetTag+='</div>';
      j++;
    }
    if(j ==4 || i==tweetsRecibidos.length-1)
    {
      tweetTag+='</div>';
      j = 0;
      $("#tweets").append(tweetTag);
    }
  }
};
var recibirFecha = function ()
{
  var date = document.getElementById('datepicker').value;
  var partido = date.split('-');
  return new Date(partido[0], partido[1]-1, partido[2]); // months are 0-based
};
