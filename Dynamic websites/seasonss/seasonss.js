let smallImageEl = document.getElementById("smallImage");
let mediumImageEl = document.getElementById("mediumImage");

let smallsummerImageEl = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let smallspringImageEl = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let smallwinterImageEl = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let smallautumnImageEl = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";

let mediumsummerImageEl = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let mediumspringImageEl = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let mediumwinterImageEl = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";
let mediumautumnImageEl = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";

function summer() {
    smallImageEl.src = smallsummerImageEl;
    mediumImageEl.src = mediumsummerImageEl;
}

function spring() {
    smallImageEl.src = smallspringImageEl;
    mediumImageEl.src = mediumspringImageEl;
}

function winter() {
    smallImageEl.src = smallwinterImageEl;
    mediumImageEl.src = mediumwinterImageEl;
}

function autumn() {
    smallImageEl.src = smallautumnImageEl;
    mediumImageEl.src = mediumautumnImageEl;
}