/* global Storage */
"use strict";

var Player = function () {
    var self = this;
    self.link = "https://www.youtube.com/embed/Elk6NXBHjBg";
    self.url = ko.observable(self.link);
    self.fromInput = ko.observable();
    self.comments = ko.observable();
    self.isEmpty = ko.observable(false);
    self.users = ko.observableArray([
        { name: "Trifon Trifonov", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "Ivan Trifonov", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "Nikol Ivanova", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
    ]);

    self.isSubmitted = function () {
        self.url(self.fromInput());
    };

    self.reload = function () {
        var path = window.location.href;
        window.location.href = path;
    };

    self.processLogin = function () {
        // please note:
        // hardcoding user name and password
        // represents A HUGE SECURITY THREAT
        // what I heve done below is ONLY FOR DEMONSTRATION
        // use proper security practises in your app 
        var name = document.getElementById("user").value, pass = document.getElementById("pass").value;
        if ((name !== "undefined") && (name === "admin") && (pass !== "undefined") && (pass === "admin")) {


            if (typeof (Storage) !== "undefined") {
                localStorage.setItem("isLogged", "logged");
            } else {
                alert("Your browser does not support latest Web Technologies! Please, update it!");
            }

            if (localStorage.getItem("isLogged") === "logged") {
                name = "";
                pass = "";
            }
        }
        ;

        var path = window.location.href;
        window.location.href = path;
    };
    self.processLogOut = function () {
        localStorage.removeItem("isLogged");
        var path = window.location.href;
        window.location.href = path;
    };

    self.makeComment = function () {
        var text = document.getElementById("comment").value;

        if (text === "") {
            self.isEmpty(true);
        }

        if ((text !== "")) {
            self.isEmpty(false);
            self.isEmpty();
            self.users.unshift({
                name: "Site Admin",
                comment: self.comments()
            });
            self.comments("");
        }
    };

};

ko.applyBindings(new Player());