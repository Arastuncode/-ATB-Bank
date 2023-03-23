$(() => {

  $(".hamburger-menu").click(function () {
    $(".bar").toggleClass("animate");
    $(".mobile-menu").toggleClass("active");
    $("body").toggleClass("body");
    return false;
  });


  //dropdown
  $(".dropdown").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(this).next("ul").stop().slideDown(100);
    } else {
      $(this).next("ul").stop().slideUp(100);
    }
  });

  $(".dropdown").click(function () {
    $("#cat").fadeToggle(300);
  });

  $(".drop").click(function () {
    $(this).toggleClass("tcenter");
    $(this).toggleClass("after");
    $("#drop-sub").fadeToggle(300);
  });

  $(".dropp").click(function () {
    $(this).toggleClass("tcenter");
    $(this).toggleClass("after");
    $(this).siblings().fadeToggle();
    $(this).nextAll("div").fadeToggle();
  });

  $(".toggle").click(function () {
    $("#header-menu").slideDown("300");
    $(this).parent("li").css({
      borderBottom: "2px solid #f4c900",
    });
  });

  $(".close-content").click(function () {
    $("#header-menu").slideUp("300");
    $(".toggle").parent("li").css({
      borderBottom: "none",
    });
  });

  // search box
  $("#search-box").css("display", "none");
  
  $(".input").click(function () {
    $(this).toggleClass("active");
  });

  $(".search").click(function () {
    $("#search-box").slideDown(100);
  });

  $(".close").click(function () {
    $("#search-box").slideUp(100);
  });

  // slider
  $(document).on("ready", function () {
    $(".lazy").slick({
      dots: true,
      lazyLoad: "ondemand",
      infinite: true,
    });
  });

  $(".toggle-nav").click(function () {
    $(".site-canvas").addClass("site-canvas--active");
    $("main").addClass("main");
    $(".offcanvas").addClass("bg");
    $("main").addClass("none");
    console.log("salam");
  });

  $("#close").click(function () {
    $(".site-canvas").removeClass("site-canvas--active");
    $("main").removeClass("main");
    $(".offcanvas").removeClass("bg");
    $("main").removeClass("none");

  });

  $(".dropdown").click(function () {
    $(this).find(".dropdown-menu").slideToggle("fast");
  });

  $("#fin").mouseenter(function () {
    $(this).css("background", "#DBDBDB");
  });

  $("#fin").mouseleave(function () {
    $(this).css("background", "transparent");
  });

  $("form input").click(function () {
    $(this).parent("div").toggleClass("shadow");
  });

  $(".effect").click(function () {
    $(this).toggleClass("shadow");
  });

  // modal //
  $(".modal-toggle").hover(function (e) {
    e.preventDefault();
    $(".modal").toggleClass("is-visible");
  });

  $("#asan").change(function () {
    if (this.checked) {
      $(".order-btn").attr("disabled", true);
      $(".order-btn").css("background", "#6c19ac");
    } else {
      $(".order-btn").attr("disabled", false);
      $(".order-btn").css("background", "#acabad");
    }
  });

  $("#testimonials").owlCarousel({
    loop: true,
    center: true,
    items: 4,
    margin: 10,
    autoplay: true,
    dots: false,
    nav: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    navText: [
      '<i class="fal fa-long-arrow-left"></i>',
      '<i class="fal fa-long-arrow-right"></i>',
    ],
    responsive: {
      448: {
        items: 2,
      },
      100: {
        items: 1,
      },
    },
  });

  // currency rate

  $(".custom-select").each(function () {
    let classes = $(this).attr("class"),
      id = $(this).attr("id"),
      name = $(this).attr("name");
    let template = '<div class="' + classes + '">';
    template +=
      '<span class="custom-select-trigger">' +
      $(this).attr("placeholder") +
      "</span>";
    template += '<ul class="custom-options">';
    $(this)
      .find("option")
      .each(function () {
        template +=
          '<li class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + "</li>";
      });
    template += "</ul></div>";

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });

  $(".custom-option:first-of-type").hover(
    function () {
      $(this).parents(".custom-options").addClass("option-hover");
    },
    function () {
      $(this).parents(".custom-options").removeClass("option-hover");
    }
  );
  
  $(".custom-select-trigger").on("click", function () {
    $("html").one("click", function () {
      $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
  });
  
  $(".custom-option").on("click", function () {
    $(this)
      .parents(".custom-select-wrapper")
      .find("select")
      .val($(this).data("value"));
    $(this)
      .parents(".custom-options")
      .find(".custom-option")
      .removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this)
      .parents(".custom-select")
      .find(".custom-select-trigger")
      .text($(this).text());
  });
});

const curItem1 = document.querySelector(".cur-item-1");
const curItem2 = document.querySelector(".cur-item-2");
const curInput1 = document.querySelector(".cur-input-1");
const curInput2 = document.querySelector(".cur-input-2");

function calc() {
  const curItem1Value = curItem1.value;
  const curItem2Value = curItem2.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${curItem1Value}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[curItem2Value];
      curInput2.value = curInput1.value * rate;
    });
}

function listeners() {
  curItem1.addEventListener("change", calc);
  curItem2.addEventListener("change", calc);
  curInput1.addEventListener("input", calc);
  curInput2.addEventListener("input", calc);
}

window.onload = () => {
  listeners();
  calc();
};

const date = document.querySelector(".date");
const today = new Date();
const d = today.getDate();
const m = today.getMonth() + 1;
const y = today.getFullYear();
date.innerHTML = "Yeniləndi" + " " + d + "." + m + "." + y;

// kredit range
const settings = {
  fill: "#6c19ac",
  background: "#d7dcdf",
};

const percent = document.getElementById("percent");
const payment = document.getElementById("payment");
const sliders = document.querySelectorAll(".range-slider");
Array.prototype.forEach.call(sliders, (slider) => {
  slider
    .querySelector(".range-slider__range")
    .addEventListener("input", (event) => {
      slider.querySelector(".range-slider__value").value = event.target.value;
      applyFill(event.target);
    });
  applyFill(slider.querySelector("input"));
});

function applyFill(slider) {
  const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);

  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${ settings.background } ${percentage + 0.1}%)`;

  slider.style.background = bg;

  const money = document.getElementById("money");
  const month = document.getElementById("month");
  const duration = document.getElementById("duration");

  if (month.value == 12) percent.innerHTML = 12.5;
  if (month.value == 24) percent.innerHTML = 13;
  if (month.value == 36) percent.innerHTML = 14;
  if (month.value == 48) percent.innerHTML = 15;

  let f = percent.innerText / 12 / 100;

  let pay = (money.value * f) / (1 - 1 / (1 + f) ** month.value);

  payment.innerHTML = Math.round(pay);

  if (month.value <= 12) {
    duration.innerHTML = month.value + " " + '<span class="time">Ay</span>';
  } 
  else {
    let y = Math.trunc(month.value / 12);
    let m = month.value % 12;
    duration.innerHTML = `${
      y + '<span class="time">illik</span>' + m + '<span class="time">ay</span>'
    }`;
  }
  
  if (month.value % 12 == 0) {
    let y = Math.trunc(month.value / 12);
    duration.innerHTML = `${y + " " + '<span class="time">illik</span>'}`;
  }
}

const vs = [];
const rate = ["USD", "EUR", "GBP"];
const table = document.getElementById("table");

for (let i = 0; i < rate.length; i++) {
  getRates(rate[i]);
}

function getRates(rate) {
  fetch(`https://api.exchangerate-api.com/v4/latest/${rate}`)
    .then((res) => res.json())
    .then((data) => {
      vs.push(data.rates["AZN"]);
      table.innerHTML = `
        <tr id="for">
          <td class="rates"></td>
          <td class="for">Alış</td>
          <td class="for">Satış</td>
        </tr>
        <tr class="currency">
          <td class="rates">USD</td>
          <td>${vs[0]}</td>
          <td>${vs[0]}</td>
        </tr>
        <tr class="currency">
          <td class="rates">EUR</td>
          <td>${vs[1]}</td>
          <td>${vs[1]}</td>
        </tr>
        <tr class="currency">
          <td class="rates">GBP</td>
          <td>${vs[2]}</td>
          <td>${vs[2]}</td>
        </tr>
      `;
    });
}

$("#kre").click(function () {
  $("#content-menu").html(
    `
      <li><a href="#" class="opacity">Bütün kreditlər</a></li>
      <li><a href="#" class="opacity">İstehlak krediti</a></li>
      <li><a href="#" class="opacity">Əmanət qarşılığında kredit</a></li>
    `
  );
});

$("#ipoteka").click(function () {
  $("#content-menu").html(
    `
      <li><a href="#" class="opacity">Bütün ipotekalar</a></li>
      <li><a href="#" class="opacity">İpoteka krediti</a></li>
      <li><a href="#" class="opacity">Güzəştli ipoteka krediti</a></li>
      <li><a href="#" class="opacity">«MİDA» MMC xətti ilə Güzəştli ipoteka</a></li>
    `
  );
});

$("#kart").click(function () {
  $("#content-menu").html(
    ` 
      <li><a href="#" class="opacity">ATB Card</a></li>
      <li><a href="#" class="opacity">ATB Card Kredit</a></li>
      <li><a href="#" class="opacity">ATB Card Premium</a></li>
      <li><a href="#" class="opacity">Cashback</a></li>
    `
  );
});

$("#service").click(function () {
  $("#content-menu").html(
    ` 
      <li><a href="#" class="opacity">Bütün xidmətlər</a></li>  
      <li><a href="#" class="opacity">Arayış: Onlayn sifariş</a></li>
      <li><a href="#" class="opacity">Depozit qutuları</a></li>
      <li><a href="#" class="opacity">SMS bildiriş</a></li>
      <li><a href="#" class="opacity">3D Secure</a></li>
      <li><a href="#" class="opacity">Kartlar üzrə digər xidmətlər</a></li>
      <li><a href="#" class="opacity">Hesablaşma-kassa xidməti</a></li>
      <li><a href="#" class="opacity">Valyuta mübadiləsi əməliyyatları</a></li>
      <li><a href="#" class="opacity">Kart əməliyyatlarına tətbiq edilən məhdudiyyətlər</a></li>
      <li><a href="#" class="opacity">BankMARKET</a></li>
    `
  );
});

$(".phone").click(function () {
  $(this).attr("id", "selector");
  const element = document.getElementById("selector");
  const phoneMask = IMask(element, {
    mask: "+{994}(00)000 00 00",
    lazy: false,
    placeholderChar: "_",
  });
});

$("#popover-trigger").click(function () {
  $(".popover__menu").toggleClass("popover--active");
  $("#blinger").slideToggle();
  if ($(".popover__menu").css("display") == "none") {
    $("#popover-trigger").html('<i class="fas fa-comment-dots"></i>');
    $("#popover-trigger").css({
      background: "#6c19ac",
      color: "#fff",
      boxShadow: "0 2px 10px rgb(0 0 0 / 20%)",
    });
  } else {
    $("#popover-trigger").html('<i class="fal fa-times"></i>');
    $("#popover-trigger").css({
      background: "#fff",
      color: "#afafaf",
      boxShadow: "0 2px 10px rgb(0 0 0 / 20%)",
    });
  }
});
