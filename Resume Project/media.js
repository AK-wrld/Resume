var profile = document.getElementById("profile");
var experience = document.getElementById("experience");
var skill = document.getElementById("skill")
var contact = document.getElementById("contact")
function flip() {
    var element = document.getElementById("navBtn");
    element.classList.toggle("flip");
}
function removeright() {
    var right = document.getElementById("right");
    right.classList.toggle("removeright");
}
function changebtn() {
    var btn = document.getElementById("button");
    btn.classList.toggle("changebtn");
}

function changeimg() {
    var img = document.getElementById("navBtn");
    img.classList.toggle("changeimg");
}
function p() {
    profile.classList.add("changelink");
    if(experience.classList.contains("changelink")) {
        experience.classList.remove("changelink");
    }
    if(skill.classList.contains("changelink")) {
        skill.classList.remove("changelink");
    }
    if(contact.classList.contains("changelink")) {
        contact.classList.remove("changelink");
    }
}
function e() {
    experience.classList.add("changelink");
    if(profile.classList.contains("changelink")) {
        profile.classList.remove("changelink");
    }
    if(skill.classList.contains("changelink")) {
        skill.classList.remove("changelink");
    }
    if(contact.classList.contains("changelink")) {
        contact.classList.remove("changelink");
    }
}
function pr() {
    skill.classList.add("changelink");
    if(profile.classList.contains("changelink")) {
        profile.classList.remove("changelink");
    }
    if(experience.classList.contains("changelink")) {
        experience.classList.remove("changelink");
    }
    if(contact.classList.contains("changelink")) {
        contact.classList.remove("changelink");
    }
}
function c() {
    contact.classList.add("changelink");
    if(profile.classList.contains("changelink")) {
        profile.classList.remove("changelink");
    }
    if(experience.classList.contains("changelink")) {
        experience.classList.remove("changelink");
    }
    if(skill.classList.contains("changelink")) {
        skill.classList.remove("changelink");
    }
}

var right = document.getElementById("right");
var btn = document.getElementById("btn2");
var profile = document.getElementById("profile");
var experience = document.getElementById("experience");
var skill = document.getElementById("skill")
var contact = document.getElementById("contact")
function add_nav() {
    right.classList.toggle("add_nav");
}
function flip2() {
    btn.classList.toggle("flip2");
}
function remove_nav() {
    right.classList.remove("add_nav");
    profile.classList.remove("changelink");
    experience.classList.remove("changelink");
    skill.classList.remove("changelink");
    contact.classList.remove("changelink");

}