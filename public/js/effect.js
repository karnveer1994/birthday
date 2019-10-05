const BALLOONS = ['#b1', '#b2', '#b3', '#b4', '#b5', '#b6', '#b7'];
const COLORS = ['yellow', 'red', 'blue', 'green', 'pink', 'orange'];
const POSITIONS = [-10, 40, 90, 140, 190, 240, 290];
const isMobile = () => {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
$(window).on('load',function(){
  $('.loading').fadeOut('slow');
  $('.container').fadeIn('slow');
});
$(document).ready(function(){
  $(window).resize(function(){
    animateBalloons();
  });

  $(document).on('click', '#turn_on', function(){
    $('.heart').fadeOut('slow');
    COLORS.forEach(e => {
      $('#bulb_'+e).addClass('bulb-glow-'+e);  
    })
    $('body').addClass('peach');
    $(this).fadeOut('slow').delay(5000).promise().done(function(){
      $('#play').fadeIn('slow');
    });
  });
  $(document).on('click','#play', function(){
    var audio = $('.song')[0];
    audio.play();
    COLORS.forEach(e => {
      $('#bulb_'+e).addClass('bulb-glow-'+e+'-after');  
    })
    $('body').css('backgroud-color','#FFF');
    $('body').addClass('peach-after');
    $(this).fadeOut('slow').delay(4000).promise().done(function(){
      $('#play_memories').fadeIn('slow');
    });
  });

  $(document).on('click', '#play_memories', function(){
    $(this).fadeOut('slow').delay(200).promise().done(function(){
      $('.polaroid-images').fadeIn('slow');
    });
    $(this).fadeOut('slow').delay(5000).promise().done(function(){
      $('#bannar_coming').fadeIn('slow');
    });
  });

  $(document).on('click', '#bannar_coming', function(){
    $('.bannar').addClass('bannar-come');
    $(this).fadeOut('slow').delay(6000).promise().done(function(){
      $('#balloons_flying').fadeIn('slow');
    });
  });


  const flyBalloons = e => {    
    const randleft = 1000*Math.random();
    const randtop = 500*Math.random();
    $(e).animate({left:randleft,bottom:randtop},10000, function(){
      flyBalloons(e);
    });
  }

  const animateBalloons = () => {
    const vw = $(window).width()/2;
    const leftPositions = isMobile() ? 
      POSITIONS : 
      [vw-350, vw-250, vw-150, vw-50, vw+50, vw+150, vw+250]

    $(BALLOONS.join(',')).stop();
    BALLOONS.forEach((e, i) => {
      $(e+(i+1)).animate({top:240, left: leftPositions[i]})
    })
  }
  
  $(document).on('click', '#balloons_flying', function(){
    $('.balloon-border').animate({top:-500, left: 0},8000);
    $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
    $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
    BALLOONS.forEach(e => {
      flyBalloons(e);
    });
    
    $(this).fadeOut('slow').delay(5000).promise().done(function(){
      $('#cake_fadein').fadeIn('slow');
    });
  }); 

  $(document).on('click', '#cake_fadein', function(){
    $('.cake-hidden-image').css('opacity', 0);
    $('.cake').fadeIn('slow');
    $('.last-image').fadeIn('fast');
    $(this).fadeOut('slow').delay(3000).promise().done(function(){
      $('#light_candle').fadeIn('slow');
    });
  });

  $(document).on('click', '#light_candle', function(){
    $('.fuego').fadeIn('slow');
    $(this).fadeOut('slow').promise().done(function(){
      $('#wish_message').fadeIn('slow');
    });
  });

  
  $(document).on('click', '#wish_message', function(){
    BALLOONS.forEach((e, i) => {
      $(e).attr('id', e.replace('#','')+(i+1));
    });
    animateBalloons();
    $('.celebration').fireworks({
      sound: true,
      opacity: 0.9,
      width: '100%',
      height: '100%'
    });
    $('.balloons').css('opacity','0.9');
    $('.balloons div').fadeIn(3000);
    $(this).fadeOut('slow').delay(15000).promise().done(function(){
      $('#story').fadeIn('slow');
    });
  });
  
  $(document).on('click', '#story', function(){
    $(this).fadeOut('slow');
    $('.cake').fadeOut('fast').promise().done(function(){
      $('.message').css('opacity',1);
    });
    
    var i;

    const msgLoop = i => {
      $("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
        i=i+1;
        $("p:nth-child("+i+")").fadeIn('slow').delay(1000);
        if(i==50){
          $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
            $('.cake').fadeIn('fast');
          });    
        }
        else{
          msgLoop(i);
        }
      });
    }
    msgLoop(0);
  });
});
