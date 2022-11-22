window.mobileAndTabletCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
const desktop =
  '<ul class="nav-menu"><li><a data-scroll="home" href="#home" class="dot active"><span>Home</span></a></li><li><a data-scroll="about" href="#about" class="dot"><span>About</span></a></li><li><a data-scroll="services" href="#services" class="dot"><span>Services</span></a></li><li><a data-scroll="work" href="#work" class="dot"><span>Gallery</span></a></li><li><a data-scroll="testimonial" href="#testimonial" class="dot"><span>Testimony</span></a></li><li><a data-scroll="contact" href="#contact" class="dot"><span>Contact</span></a></li></ul>';

const mobile =
  '<ul class="nav-menu"><li><a data-scroll="home" href="#home" class="dot active"><span><i class="icon-home"></i></span></a></li><li><a data-scroll="about" href="#about" class="dot"><span><i class="icon-heart-o"></i></span></a></li><li><a data-scroll="services" href="#services" class="dot"><span><i class="icon-gear"></i></span></a></li><li><a data-scroll="work" href="#work" class="dot"><span><i class="icon-picture-o"></i></span></a></li><li><a data-scroll="testimonial" href="#testimonial" class="dot"><span><i class="icon-pencil-square-o"></i></span></a></li><li><a data-scroll="contact" href="#contact" class="dot"><span><i class="icon-person"></i></span></a></li></ul>';

document.getElementById("navbar").innerHTML += window.mobileAndTabletCheck()
  ? mobile
  : desktop;

const mobileHome =
  '<section id="home" class="hero-wrap js-fullheight" style="background-image: url(images/bg-1.jpg);" data-stellar-background-ratio="0.5"> <div class="overlay"></div> <div class="container"> <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center"> <div class="col-lg-7 ftco-animate d-flex align-items-center"> <div class="text text-center"> <h1 class="logo"><a href="index.html"><span><img src="LOGO(R)_.png" alt="" style="width: 100px; margin-bottom: 10px;"></span>Rachanatmak<small>Think Artistic </small></a></h1> <h1 class="mb-4">We Make <br>Something Great</h1> <p class="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts.</p> <p class="mt-5"><a href="#" class="btn-custom">Contact us <span class="ion-ios-arrow-round-forward"></span></a></p> </div> </div> </div> </div> </section>';
const desktopHome =
  '<section id="home" class="hero-wrap js-fullheight" data-stellar-background-ratio="0.5"> <div id="homeMain"> <div id="box5"> <img src="Scroll.png" width="120px" /> </div> <div id="box1"></div> <div id="box2"> <div id="homeText"> RACHANATMAK<br> <span style="font-size: .5em; float: right;">- THINK ARTISTIC</span> </div> </div> <div id="box4"> <div id="homeText2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore dicta fugit ducimus praesentium officia eos itaque laboriosam illo, officiis non dolore error quis dolor expedita tempore. Sed, eaque culpa. </div> </div> <div id="box3"> <div id="homeContainer"> <div id="homeLogo"> <img src="LOGO(R)_.png" /> </div> </div> </div> </div> </section>';

document.getElementById("homePage").innerHTML += window.mobileAndTabletCheck()
  ? mobileHome
  : desktopHome;
