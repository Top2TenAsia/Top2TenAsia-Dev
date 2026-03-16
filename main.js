(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+u7z":
/*!*******************************************************************************************!*\
  !*** ./src/app/game/rummyManger/rummy-setand-sequence/rummy-setand-sequence.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RummySetandSequenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RummySetandSequenceComponent", function() { return RummySetandSequenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_modal_modalLocator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modal/modalLocator */ "rhab");


class RummySetandSequenceComponent {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
    }
    closeScreen() {
        this.modal.showSetandSequence = false;
    }
}
RummySetandSequenceComponent.ɵfac = function RummySetandSequenceComponent_Factory(t) { return new (t || RummySetandSequenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal_modalLocator__WEBPACK_IMPORTED_MODULE_1__["ModelViewLocator"])); };
RummySetandSequenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RummySetandSequenceComponent, selectors: [["app-rummy-setand-sequence"]], decls: 34, vars: 0, consts: [[1, "help-image"], [1, "image-text"], ["src", "/assets/Rummy/Images/Set&Sequence_Title.png"], [1, "helps"], [1, "titleHead"], ["id", "style-2", 1, "scrollbar"], [1, "close-button", 3, "click"], ["_ngcontent-afn-c1", "", "src", "/assets/Rummy/Images/Close_Icon.png"], [1, "list-order"], [1, "list-order-one"]], template: function RummySetandSequenceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RummySetandSequenceComponent_Template_div_click_8_listener() { return ctx.closeScreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sets:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "A set in Rummy consists of three or four cards of the same rank but different suits. For example, you could have a set of three 7s - one 7 of hearts, one 7 of diamonds, and one 7 of clubs. Sets can also include a wild card, usually a joker, which can stand in for any card you need to complete the set.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sequences:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "A sequence in Rummy comprises three or more consecutive cards of the same suit. For example, you could have a sequence of 4, 5, and 6 of spades. Sequences must follow the numerical order and cannot wrap around the Ace, meaning you cannot have a sequence like Queen, King, Ace, 2. However, in some variants, the Ace can be used both as a low card (A-2-3) and as a high card (K-A-2).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Pure Sequence:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "A pure sequence is a sequence of cards that does not include any wild cards (usually jokers). This is a crucial requirement to declare your hand in most Rummy variations. Having a pure sequence ensures that your hand is valid even if you have other sequences with jokers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Impure Sequence:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "An impure sequence is a sequence that contains at least one wild card. While these sequences can help you complete sets and sequences, you must have a pure sequence to declare.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n    font-family: \"Poppins_Medium\";\r\n\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    background-color: #f7cc1e;\r\n    font-weight: bolder;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 0px;\r\n    width: 1.8vmin;\r\n    height: 1.8vmin;\r\n    border-radius: 50%;\r\n    margin-top: 1.5vmin;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.help-image[_ngcontent-%COMP%] {\r\n    background: url('/assets/Rummy/Images/settings.png') no-repeat center center;\r\n    background-size: 100% 100%;\r\n    height: 90%;\r\n    width: 70%;\r\n    margin: auto;\r\n    right: 0;\r\n    left: 0;\r\n    position: absolute;\r\n}\r\n\r\n.image-text[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    margin-top: 9vmin;\r\n}\r\n\r\n.image-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 46vmin;\r\n    margin-top: 1vmin;\r\n}\r\n\r\n.list-order[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .list-order-one[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    color: #d3d8eb;\r\n    font-size: 2.8vmin;\r\n    font-weight: 400;\r\n\r\n}\r\n\r\n.list-order[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .list-order-one[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: #f7cc1e;\r\n    font-size: 4vmin;\r\n    font-weight: 500;\r\n}\r\n\r\n.list-order[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .list-order-one[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.list-order[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .list-order-one[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    flex: 0 0 100%;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    padding-left: 24px;\r\n}\r\n\r\n.close-button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 14%;\r\n    right: 4%;\r\n}\r\n\r\n.close-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 3.2vmin;\r\n    height: 3.2vmin;\r\n}\r\n\r\n.scrollbar[_ngcontent-%COMP%] {\r\n    height: 74%;\r\n    overflow-y: scroll;\r\n\r\n}\r\n\r\n.helps[_ngcontent-%COMP%] {\r\n    padding: 2vmin 7vmin 0vmin;\r\n    height: 90%;\r\n}\r\n\r\n#style-2[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    border-radius: 10px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n#style-2[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 5px;\r\n    background-color: #302b2b;\r\n}\r\n\r\n#style-2[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);\r\n    background-color: rgb(255, 206, 43);\r\n}\r\n\r\n@media screen and (max-width:653px) {\r\n    .close-button[_ngcontent-%COMP%] {\r\n        left: 90%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:1024px) {\r\n    .close-button[_ngcontent-%COMP%] {\r\n        left: 92%;\r\n    }\r\n\r\n    .image-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 36vmin;\r\n    }\r\n\r\n    .image-text[_ngcontent-%COMP%] {\r\n        margin-top: 11vmin;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bW15LXNldGFuZC1zZXF1ZW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjs7QUFFMUI7SUFDSSw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDRFQUE0RTtJQUM1RSwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osUUFBUTtJQUNSLE9BQU87SUFDUCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjs7QUFFcEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBSUE7O0lBRUksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvREFBb0Q7SUFDcEQsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbURBQW1EO0lBQ25ELG1DQUFtQztBQUN2Qzs7QUFJQTtJQUNJO1FBQ0ksU0FBUztJQUNiO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTs7OztHQUlHIiwiZmlsZSI6InJ1bW15LXNldGFuZC1zZXF1ZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogd2lubmluZyBoYW5kcyBTZWN0aW9uICovXHJcblxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNfTWVkaXVtXCI7XHJcblxyXG59XHJcblxyXG51bCBsaTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdjYzFlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxLjh2bWluO1xyXG4gICAgaGVpZ2h0OiAxLjh2bWluO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMS41dm1pbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5oZWxwLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9SdW1teS9JbWFnZXMvc2V0dGluZ3MucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmltYWdlLXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDl2bWluO1xyXG59XHJcblxyXG4uaW1hZ2UtdGV4dCBpbWcge1xyXG4gICAgd2lkdGg6IDQ2dm1pbjtcclxuICAgIG1hcmdpbi10b3A6IDF2bWluO1xyXG59XHJcblxyXG4ubGlzdC1vcmRlciBsaSxcclxuLmxpc3Qtb3JkZXItb25lIGxpIHtcclxuICAgIGNvbG9yOiAjZDNkOGViO1xyXG4gICAgZm9udC1zaXplOiAyLjh2bWluO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbn1cclxuXHJcbi5saXN0LW9yZGVyIGgzLFxyXG4ubGlzdC1vcmRlci1vbmUgaDMge1xyXG4gICAgY29sb3I6ICNmN2NjMWU7XHJcbiAgICBmb250LXNpemU6IDR2bWluO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuXHJcblxyXG4ubGlzdC1vcmRlciB1bCxcclxuLmxpc3Qtb3JkZXItb25lIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmxpc3Qtb3JkZXIgdWwgbGksXHJcbi5saXN0LW9yZGVyLW9uZSB1bCBsaSB7XHJcbiAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTQlO1xyXG4gICAgcmlnaHQ6IDQlO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIGltZyB7XHJcbiAgICB3aWR0aDogMy4ydm1pbjtcclxuICAgIGhlaWdodDogMy4ydm1pbjtcclxufVxyXG5cclxuLnNjcm9sbGJhciB7XHJcbiAgICBoZWlnaHQ6IDc0JTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHJcbn1cclxuXHJcbi5oZWxwcyB7XHJcbiAgICBwYWRkaW5nOiAydm1pbiA3dm1pbiAwdm1pbjtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4jc3R5bGUtMjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG4jc3R5bGUtMjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDJiMmI7XHJcbn1cclxuXHJcbiNzdHlsZS0yOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjA2LCA0Myk7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NTNweCkge1xyXG4gICAgLmNsb3NlLWJ1dHRvbiB7XHJcbiAgICAgICAgbGVmdDogOTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjRweCkge1xyXG4gICAgLmNsb3NlLWJ1dHRvbiB7XHJcbiAgICAgICAgbGVmdDogOTIlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZS10ZXh0IGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDM2dm1pbjtcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2UtdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTF2bWluO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg1NnB4KSB7XHJcbiAgICAuY2xvc2UtYnV0dG9uIHtcclxuICAgICAgICBsZWZ0OiA5MiU7XHJcbiAgICB9XHJcbn0gKi8iXX0= */"] });


/***/ }),

/***/ "/0nx":
/*!*****************************************************************!*\
  !*** ./src/app/game/rummyManger/phaserscreen/rummyWinScreen.ts ***!
  \*****************************************************************/
/*! exports provided: rummyWinScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rummyWinScreen", function() { return rummyWinScreen; });
class rummyWinScreen extends Phaser.Scene {
    constructor(handle, gameComp, socketScv, model) {
        super(handle);
        this.gameComp = gameComp;
        this.socketScv = socketScv;
        this.model = model;
    }
    preload() {
    }
    create() {
        this.subscribeToServices();
    }
    subscribeToServices() {
        this.subscribeToWinner();
        this.subscribeToLosser();
    }
    subscribeToWinner() {
        let temp = this.socketScv.winnerSO.subscribe((data) => {
            if (data) {
                console.log("Winner SO >> ", data);
            }
        });
        this.gameComp.subscriptions.push(temp);
    }
    subscribeToLosser() {
        let temp = this.socketScv.looserSO.subscribe((data) => {
            if (data) {
                console.log("Losser SO >> ", data);
            }
        });
        this.gameComp.subscriptions.push(temp);
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\TRP-Game\src\main.ts */"zUnb");


/***/ }),

/***/ "49QP":
/*!*************************************************************!*\
  !*** ./src/app/game/rummyManger/phaserscreen/rummyTimer.ts ***!
  \*************************************************************/
/*! exports provided: rummyTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rummyTimer", function() { return rummyTimer; });
class rummyTimer extends Phaser.Scene {
    constructor(handle, gameComp, rtmp, model) {
        super(handle);
        this.myTurn = false;
        this.gameComp = gameComp;
        this.socketScv = rtmp;
        this.model = model;
    }
    initializeConstants() {
        this.rummyTableScene = this.scene.get('rummyTable');
        this.rummyCardScene = this.scene.get('rummyCards');
        this.GAME_SCALE = this.game.scale.width + (this.game.scale.height);
        this.OTHER_PLAYER_TIMER_SCALE = this.GAME_SCALE / (53 * 100);
        this.CURRENT_PLAYER_TIMER_SCALE = this.GAME_SCALE / (36 * 100);
    }
    create() {
        this.initializeConstants();
        this.scene.bringToTop("");
        this.timerGroup = this.add.group();
        if (this.timeBg1 != null) {
            this.timeBg1.destroy();
            this.timeBg20.destroy();
            this.timeBg21.destroy();
            this.timeBg3.destroy();
            this.timeBg4.destroy();
            this.timeBg5.destroy();
            this.timeBg60.destroy();
            this.timeBg61.destroy();
            this.timerGroup.destroy();
            this.timerGroup = null;
            this.timeBg1 = null;
            this.timeBg20 = null;
            this.timeBg21 = null;
            this.timeBg3 = null;
            this.timeBg4 = null;
            this.timeBg5 = null;
            this.timeBg60 = null;
            this.timeBg61 = null;
        }
        this.timeBg1 = this.add.image(this.rummyCardScene.player1.x - (this.rummyCardScene.player1.displayWidth / 2.9), this.rummyCardScene.player1.y - (this.rummyCardScene.player1.displayHeight / 17), "player_timer_L").setOrigin(0.5).setScale(this.CURRENT_PLAYER_TIMER_SCALE);
        this.timeBg20 = this.add.image(this.rummyTableScene.player2.x - (this.rummyTableScene.player2.displayWidth / 2.9), this.rummyTableScene.player2.y, "player_timer_L").setOrigin(0.5).setScale(this.OTHER_PLAYER_TIMER_SCALE);
        this.timeBg21 = this.add.image(this.rummyTableScene.player2.x - (this.rummyTableScene.player2.displayWidth / 2.9), this.rummyTableScene.player2.y, "player_timer_L").setOrigin(0.5).setScale(this.OTHER_PLAYER_TIMER_SCALE);
        this.timeBg3 = this.add.image(this.rummyTableScene.player3.x - (this.rummyTableScene.player3.displayWidth / 2.9), this.rummyTableScene.player3.y, "player_timer_L").setOrigin(0.5).setScale(this.OTHER_PLAYER_TIMER_SCALE);
        this.timeBg4 = this.add.image(this.rummyTableScene.player4.x - (this.rummyTableScene.player4.displayWidth / 2.9), this.rummyTableScene.player4.y, "player_timer_L").setOrigin(0.5).setScale(this.OTHER_PLAYER_TIMER_SCALE);
        this.timeBg5 = this.add.image(this.rummyTableScene.player5.x + (this.rummyTableScene.player5.displayWidth / 2.9), this.rummyTableScene.player5.y, "player_timer_L").setOrigin(0.5).setScale(this.OTHER_PLAYER_TIMER_SCALE).setAngle(180);
        this.timeBg60 = this.add.image(this.rummyTableScene.player6.x + (this.rummyTableScene.player6.displayWidth / 2.9), this.rummyTableScene.player6.y, "player_timer_L").setOrigin(0.5).setScale(this.OTHER_PLAYER_TIMER_SCALE).setAngle(180);
        this.timeBg61 = this.add.image(this.rummyTableScene.player6.x + (this.rummyTableScene.player6.displayWidth / 2.9), this.rummyTableScene.player6.y, "player_timer_L").setOrigin(0.5).setScale(this.OTHER_PLAYER_TIMER_SCALE).setAngle(180);
        // when there are more than 4 players
        // 1 tablex: (this.game.scale.width / 40) * 17.2, tabley:  (this.game.scale.height / 40) * 33.5, Sprite: "timer_L"
        // 2 tablex: (this.game.scale.width / 40) * 1.98, tabley:  (this.game.scale.height / 40) * 19.9, Sprite: "timer_L"
        // 3 tablex: (this.game.scale.width / 40) * 4.5, tabley:  (this.game.scale.height / 40) * 9.4, Sprite: "timer_L"
        // 4 tablex: (this.game.scale.width / 40) * 17.6, tabley: (this.game.scale.height / 40) * 6.4, Sprite: "timer_L"
        // 5 tablex: (this.game.scale.width / 40) * 36. , tabley:  (this.game.scale.height / 40) * 9.3, Sprite: "timer_R"
        // 6 tablex: (this.game.scale.width / 40) * 38.5 , tabley:  (this.game.scale.height / 40) * 19.8, Sprite: "timer_R"
        // When there are less than or equal to 4 players
        // 1 tablex: (this.game.scale.width / 40) * 17.2, tabley:  (this.game.scale.height / 40) * 33.5, Sprite: "timer_L"
        // 2 tablex: (this.game.scale.width / 40) * 1.5 , tabley:  (this.game.scale.height / 40) * 17, Sprite: "timer_L"
        // 4 tablex: (this.game.scale.width / 40) * 17.6, tabley:  (this.game.scale.height / 40) * 6.4, Sprite: "timer_L"
        // 6 tablex: (this.game.scale.width / 40) * 38.8 , tabley:  (this.game.scale.height / 40) * 17, Sprite: "timer_R"
        //When players is more than 4
        this.timerGroup.add(this.timeBg1);
        this.timerGroup.add(this.timeBg20);
        this.timerGroup.add(this.timeBg21);
        this.timerGroup.add(this.timeBg3);
        this.timerGroup.add(this.timeBg4);
        this.timerGroup.add(this.timeBg5);
        this.timerGroup.add(this.timeBg60);
        this.timerGroup.add(this.timeBg61);
        this.timerGroup.setVisible(false);
        this.subscribeToServices();
    }
    subscribeToServices() {
        this.subscribeToRoom();
        this.subscribleToPlayerTurns();
    }
    subscribeToRoom() {
        let temp = this.socketScv.roomSO.subscribe((data) => {
            console.log("Subcribe To Room >> ", data, data.numOfPlayers);
            switch (data.numOfPlayers) {
                case "2":
                    this.timeBg1.setVisible(true);
                    this.timeBg4.setVisible(true);
                    break;
                case "3":
                    this.timeBg1.setVisible(true);
                    this.timeBg4.setVisible(true);
                    this.timeBg21.setVisible(true);
                    break;
                case "4":
                    this.timeBg1.setVisible(true);
                    this.timeBg4.setVisible(true);
                    this.timeBg21.setVisible(true);
                    this.timeBg61.setVisible(true);
                    break;
                case "5":
                    this.timeBg1.setVisible(true);
                    this.timeBg4.setVisible(true);
                    this.timeBg20.setVisible(true);
                    this.timeBg5.setVisible(true);
                    this.timeBg60.setVisible(true);
                    break;
                case "6":
                    this.timeBg1.setVisible(true);
                    this.timeBg4.setVisible(true);
                    this.timeBg20.setVisible(true);
                    this.timeBg3.setVisible(true);
                    this.timeBg5.setVisible(true);
                    this.timeBg60.setVisible(true);
                    break;
            }
        });
        this.gameComp.subscriptions.push(temp);
    }
    subscribleToPlayerTurns() {
        let count = 0;
        let temp = this.socketScv.callerSo.subscribe((data) => {
            if (this.model.userId == data.userId) {
                this.myTurn = true;
                if (this.model.isSoundOn) {
                    if (this.sound.get(this.timer_sound)) {
                        this.timer_sound = this.sound.add("timer_sound");
                        // this.timer_sound.play();
                        // this.timer_sound.loop = true;
                        // this.timer_sound.rate = 0.9;
                        // this.timer_sound.volume = 1;
                    }
                }
            }
            else {
                this.myTurn = false;
                if (this.timer_sound)
                    this.timer_sound.stop();
            }
            count++;
            console.log("callerSo>> ", data);
            for (let index = 0; index < this.model.playerInGameData.length; index++) {
                const element = this.model.playerInGameData[index];
                if (element.userId == data.userId) {
                    console.log("Your Turn -->");
                    if (this.timer) {
                        this.timer.destroy(true);
                        this.timer = null;
                    }
                    let animationKey = "timer" + count;
                    const animConfig = {
                        key: animationKey,
                        frames: element.sprite,
                        frameRate: 2.10,
                    };
                    this.anims.create(animConfig);
                    console.log("X and Y --> ", element, animationKey);
                    this.timer = this.add.sprite(element.playerX - this.rummyTableScene.player2.displayWidth / 2.95, element.playerY, element.sprite).setOrigin(0.5);
                    this.timer.setScale(this.GAME_SCALE / (53 * 100));
                    if (element.sprite === 'timer_R') {
                        this.timer.x = element.playerX + this.rummyTableScene.player2.displayWidth / 2.95;
                    }
                    else if (element.sprite === 'timer_L') {
                        this.timer.x = element.playerX - this.rummyTableScene.player2.displayWidth / 2.95;
                    }
                    if (element.seat === 1) {
                        this.timer.setScale(this.GAME_SCALE / (36.2 * 100));
                        this.timer.x = element.playerX - this.rummyCardScene.player1.displayWidth / 2.95;
                        this.timer.y = element.playerY - this.rummyCardScene.player1.displayHeight / 16;
                    }
                    this.timer.play(animationKey);
                    console.log("Timer -----> ", this.timer, animConfig);
                }
                else {
                }
            }
        });
        this.gameComp.subscriptions.push(temp);
    }
    update(time, delta) {
        if (this.timer && this.myTurn) {
            var currentFrame = this.timer.anims.currentFrame;
            if (currentFrame.index > 50) {
                console.log("Current frame: ", currentFrame.index);
                this.timer_sound.loop = true;
                this.timer_sound.rate = 0.45;
                this.timer_sound.play();
                this.myTurn = false;
            }
        }
    }
}


/***/ }),

/***/ "69cM":
/*!************************************************!*\
  !*** ./src/app/mainmenu/mainmenu.component.ts ***!
  \************************************************/
/*! exports provided: MainmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainmenuComponent", function() { return MainmenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_modalLocator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/modalLocator */ "rhab");



class MainmenuComponent {
    constructor(router, model) {
        this.router = router;
        this.model = model;
    }
    ngOnInit() {
        this.model.userId = prompt("Please Enter the User Id : ");
        console.log("User Id >> ", this.model.userId);
    }
    randomplay() {
        this.model.hostPvtBool = false;
        console.log('Random Play');
        this.router.navigateByUrl("/game");
    }
    friendsplay() {
        this.model.hostPvtBool = true;
        console.log('Friends Play');
        this.router.navigateByUrl("/game");
    }
}
MainmenuComponent.ɵfac = function MainmenuComponent_Factory(t) { return new (t || MainmenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_modalLocator__WEBPACK_IMPORTED_MODULE_2__["ModelViewLocator"])); };
MainmenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainmenuComponent, selectors: [["app-mainmenu"]], decls: 8, vars: 0, consts: [[1, "container"], [1, "center"], [3, "click"]], template: function MainmenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainmenuComponent_Template_button_click_2_listener() { return ctx.randomplay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Random Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainmenuComponent_Template_button_click_6_listener() { return ctx.friendsplay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Play with Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] { \r\n  height: 100px;\r\n  position: relative;\r\n  border: 3px solid green; \r\n  padding-bottom: 1%;\r\n  margin: 1% 10% 0 10%;\r\n  \r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-family: 'Poppins_ExtraBoldItalic';\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCO3NCQUNvQjtBQUN0Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFFVCxnQ0FBZ0M7RUFDaEMsc0NBQXNDO0FBQ3hDIiwiZmlsZSI6Im1haW5tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHsgXHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgZ3JlZW47IFxyXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcclxuICBtYXJnaW46IDElIDEwJSAwIDEwJTtcclxuICAvKiBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlOyAqL1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zX0V4dHJhQm9sZEl0YWxpYyc7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "9Yro":
/*!*************************************************************************!*\
  !*** ./src/app/game/rummyManger/rummy-result/rummy-result.component.ts ***!
  \*************************************************************************/
/*! exports provided: RummyResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RummyResultComponent", function() { return RummyResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_modal_modalLocator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modal/modalLocator */ "rhab");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function RummyResultComponent_tr_21_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RummyResultComponent_tr_21_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.userName);
} }
function RummyResultComponent_tr_21_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "WINNER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RummyResultComponent_tr_21_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RummyResultComponent_tr_21_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", -i_r10 * 1, "vmin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/Cards/" + ctx_r7.cards[card_r9] + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function RummyResultComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RummyResultComponent_tr_21_td_1_Template, 2, 0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RummyResultComponent_tr_21_td_2_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RummyResultComponent_tr_21_td_5_Template, 3, 0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RummyResultComponent_tr_21_td_6_Template, 2, 0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RummyResultComponent_tr_21_ng_container_8_Template, 2, 3, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("winner", i_r2 === 0)("activePlayer", i_r2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.model.userId == data_r1.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.model.userId != data_r1.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r1.cards);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.points);
} }
class RummyResultComponent {
    constructor(model) {
        this.model = model;
        this.resultData = this.model.resultData;
        this.cards = [
            '2_clubs', '2_diamonds', '2_hearts', '2_spades',
            '3_clubs', '3_diamonds', '3_hearts', '3_spades',
            '4_clubs', '4_diamonds', '4_hearts', '4_spades',
            '5_clubs', '5_diamonds', '5_hearts', '5_spades',
            '6_clubs', '6_diamonds', '6_hearts', '6_spades',
            '7_clubs', '7_diamonds', '7_hearts', '7_spades',
            '8_clubs', '8_diamonds', '8_hearts', '8_spades',
            '9_clubs', '9_diamonds', '9_hearts', '9_spades',
            '10_clubs', '10_diamonds', '10_hearts', '10_spades',
            'J_clubs', 'J_diamonds', 'J_hearts', 'J_spades',
            'Q_clubs', 'Q_diamonds', 'Q_hearts', 'Q_spades',
            'K_clubs', 'K_diamonds', 'K_hearts', 'K_spades',
            'A_clubs', 'A_diamonds', 'A_hearts', 'A_spades'
        ];
    }
    ngOnInit() {
        for (let index = 0; index < this.resultData.length; index++) {
            const data = this.resultData[index];
            data.cards = data.cards.split(',').map(card => parseInt(card));
        }
        if (this.resultData.length === 2) {
            this.resultData[1].points = 0;
        }
    }
    closeResult() {
        this.model.showResult = false;
    }
}
RummyResultComponent.ɵfac = function RummyResultComponent_Factory(t) { return new (t || RummyResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal_modalLocator__WEBPACK_IMPORTED_MODULE_1__["ModelViewLocator"])); };
RummyResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RummyResultComponent, selectors: [["app-rummy-result"]], decls: 22, vars: 1, consts: [[1, "resultModal"], [1, "closeBtn", 3, "click"], ["src", "/assets/Rummy/Images/Close_Icon.png", "alt", ""], [1, "resultWrap"], [1, "titleHead"], ["src", "/assets/Rummy/Images/Result_Title.png", "alt", ""], [1, "tableWrap", "customScrol"], ["width", "15%"], ["width", "10%"], ["width", "25%"], ["width", "30%"], [3, "winner", "activePlayer", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "rank"], ["class", "winnerTag", 4, "ngIf"], [1, "cards"], [4, "ngFor", "ngForOf"], [1, "winnerTag"], ["src", "/assets/Rummy/Images/gold-badge.png", "alt", ""], ["alt", "", 3, "src"]], template: function RummyResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RummyResultComponent_Template_button_click_1_listener() { return ctx.closeResult(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RummyResultComponent_tr_21_Template, 11, 11, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.resultData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".resultModal[_ngcontent-%COMP%] {\r\n    background: url('/assets/Rummy/Images/Result_PopUp.png') no-repeat center center;\r\n    background-size: 100% 100%;\r\n    height: 87%;\r\n    width: 98vw;\r\n    position: absolute;\r\n    margin: auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n  }\r\n  \r\n  .closeBtn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 12%;\r\n    right: 6%;\r\n    background: transparent;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .closeBtn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 3.2vmin;\r\n  }\r\n  \r\n  .resultWrap[_ngcontent-%COMP%] {\r\n    width: 88%;\r\n    height: 99%;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .titleHead[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 5vmin;\r\n  }\r\n  \r\n  .titleHead[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 27vmin;\r\n  }\r\n  \r\n  .tableWrap[_ngcontent-%COMP%] {\r\n    padding: 1vmin 0vmin 0;\r\n    height: 77%;\r\n  }\r\n  \r\n  .customScrol[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n  }\r\n  \r\n  .customScrol[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    border-radius: 10px;\r\n    background-color: #F5F5F5;\r\n  }\r\n  \r\n  .customScrol[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 5px;\r\n    background-color: #302b2b;\r\n  }\r\n  \r\n  .customScrol[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);\r\n    background-color: rgb(255, 206, 43);\r\n  }\r\n  \r\n  table[_ngcontent-%COMP%] {\r\n    border-collapse: separate;\r\n    border: 0;\r\n    width: 100%;\r\n    table-layout: auto;\r\n    border-spacing: 0 1.5vmin;\r\n  }\r\n  \r\n  th[_ngcontent-%COMP%] {\r\n    color: #dfc61c;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-family: \"Poppins_Medium\";\r\n    font-size: 2.3vmin;\r\n    padding: 0.3vmin 0;\r\n  }\r\n  \r\n  td[_ngcontent-%COMP%] {\r\n    padding: 0.3vmin 0;\r\n    text-align: center;\r\n    font-size: 2.2vmin;\r\n    font-family: \"Poppins_Regular\";\r\n    color: #ffffff;\r\n  }\r\n  \r\n  td.winnerTag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    width: 6.5vmin;\r\n  }\r\n  \r\n  td.rank[_ngcontent-%COMP%] {\r\n    font-family: \"Poppins_Bold\";\r\n  }\r\n  \r\n  td.cards[_ngcontent-%COMP%]{\r\n    \r\n    white-space: nowrap;\r\n    padding-left: 8vmin;\r\n  }\r\n  \r\n  td.cards[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 6vmin;\r\n    display: inline;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    \r\n  }\r\n  \r\n  .winner[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    background: #f29f0d;\r\n    font-family: \"Poppins_Bold\";\r\n    color: #314147;\r\n  }\r\n  \r\n  .winner[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\r\n    border-radius: 90px 0 0 90px;\r\n  }\r\n  \r\n  .winner[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\r\n    border-radius: 0 90px 90px 0;\r\n  }\r\n  \r\n  .winner[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    \r\n    font-family: \"Poppins_Bold\";\r\n    color: #314147;\r\n  }\r\n  \r\n  .activePlayer[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-top: 0.7vmin solid #d80c1d;\r\n    border-bottom: 0.7vmin solid #d80c1d;\r\n    background-color: #5e0b11;\r\n    background-image: linear-gradient(1deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);\r\n  }\r\n  \r\n  .activePlayer[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\r\n    border-left: 0.7vmin solid #d80c1d;\r\n    border-radius: 90px 0 0 90px;\r\n  }\r\n  \r\n  .activePlayer[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\r\n    border-right: 0.7vmin solid #d80c1d;\r\n    border-radius: 0 90px 90px 0;\r\n  }\r\n  \r\n  @media screen and (max-width:890px) {\r\n    .help-image[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bW15LXJlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0ZBQWdGO0lBQ2hGLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sU0FBUztFQUNYOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1IsU0FBUztJQUNULHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usb0RBQW9EO0lBQ3BELG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLG1EQUFtRDtJQUNuRCxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIscUZBQXFGO0VBQ3ZGOztFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLG1DQUFtQztJQUNuQyw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRTtNQUNFLFdBQVc7SUFDYjtFQUNGIiwiZmlsZSI6InJ1bW15LXJlc3VsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdE1vZGFsIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9SdW1teS9JbWFnZXMvUmVzdWx0X1BvcFVwLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBoZWlnaHQ6IDg3JTtcclxuICAgIHdpZHRoOiA5OHZ3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICAuY2xvc2VCdG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDEyJTtcclxuICAgIHJpZ2h0OiA2JTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuY2xvc2VCdG4gaW1nIHtcclxuICAgIHdpZHRoOiAzLjJ2bWluO1xyXG4gIH1cclxuICBcclxuICAucmVzdWx0V3JhcCB7XHJcbiAgICB3aWR0aDogODglO1xyXG4gICAgaGVpZ2h0OiA5OSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlSGVhZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1dm1pbjtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlSGVhZCBpbWcge1xyXG4gICAgd2lkdGg6IDI3dm1pbjtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlV3JhcCB7XHJcbiAgICBwYWRkaW5nOiAxdm1pbiAwdm1pbiAwO1xyXG4gICAgaGVpZ2h0OiA3NyU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b21TY3JvbCB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tU2Nyb2w6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbVNjcm9sOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMmIyYjtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbVNjcm9sOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjA2LCA0Myk7XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwIDEuNXZtaW47XHJcbiAgfVxyXG4gIFxyXG4gIHRoIHtcclxuICAgIGNvbG9yOiAjZGZjNjFjO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNfTWVkaXVtXCI7XHJcbiAgICBmb250LXNpemU6IDIuM3ZtaW47XHJcbiAgICBwYWRkaW5nOiAwLjN2bWluIDA7XHJcbiAgfVxyXG4gIFxyXG4gIHRkIHtcclxuICAgIHBhZGRpbmc6IDAuM3ZtaW4gMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMi4ydm1pbjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNfUmVndWxhclwiO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIHRkLndpbm5lclRhZyBpbWcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiA2LjV2bWluO1xyXG4gIH1cclxuICBcclxuICB0ZC5yYW5rIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNfQm9sZFwiO1xyXG4gIH1cclxuICB0ZC5jYXJkc3tcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDh2bWluO1xyXG4gIH1cclxuICB0ZC5jYXJkcyBpbWcge1xyXG4gICAgaGVpZ2h0OiA2dm1pbjtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogbGVmdDotMTB2bWluICovXHJcbiAgfVxyXG4gIFxyXG4gIC53aW5uZXIgdGQge1xyXG4gICAgYmFja2dyb3VuZDogI2YyOWYwZDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNfQm9sZFwiO1xyXG4gICAgY29sb3I6ICMzMTQxNDc7XHJcbiAgfVxyXG4gIFxyXG4gIC53aW5uZXIgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTBweCAwIDAgOTBweDtcclxuICB9XHJcbiAgXHJcbiAgLndpbm5lciB0ZDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgOTBweCA5MHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC53aW5uZXIgdGQge1xyXG4gICAgLyogYmFja2dyb3VuZDogI2YyOWYwZDsgKi9cclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNfQm9sZFwiO1xyXG4gICAgY29sb3I6ICMzMTQxNDc7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmVQbGF5ZXIgdGQge1xyXG4gICAgYm9yZGVyLXRvcDogMC43dm1pbiBzb2xpZCAjZDgwYzFkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC43dm1pbiBzb2xpZCAjZDgwYzFkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlMGIxMTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxZGVnLCByZ2JhKDAsIDAsIDAsIDAuNikgMCUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmVQbGF5ZXIgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDAuN3ZtaW4gc29saWQgI2Q4MGMxZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDkwcHggMCAwIDkwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmVQbGF5ZXIgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDAuN3ZtaW4gc29saWQgI2Q4MGMxZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgOTBweCA5MHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODkwcHgpIHtcclxuICAgIC5oZWxwLWltYWdlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "A1N6":
/*!*********************************************************************!*\
  !*** ./src/app/game/rummyManger/rummy-help/rummy-help.component.ts ***!
  \*********************************************************************/
/*! exports provided: RummyHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RummyHelpComponent", function() { return RummyHelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_modal_modalLocator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modal/modalLocator */ "rhab");


class RummyHelpComponent {
    constructor(model) {
        this.model = model;
    }
    ngOnInit() {
    }
    closeHelp() {
        this.model.showHelp = false;
    }
}
RummyHelpComponent.ɵfac = function RummyHelpComponent_Factory(t) { return new (t || RummyHelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal_modalLocator__WEBPACK_IMPORTED_MODULE_1__["ModelViewLocator"])); };
RummyHelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RummyHelpComponent, selectors: [["app-rummy-help"]], decls: 53, vars: 0, consts: [[1, "help-image"], [1, "image-text"], ["src", "/assets/Rummy/Images/help.png"], [1, "helps"], ["id", "style-2", 1, "scrollbar"], [1, "close-button", 3, "click"], ["_ngcontent-afn-c1", "", "src", "/assets/Rummy/Images/Close_Icon.png"], [1, "list-order"], [1, "list-order-one"]], template: function RummyHelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RummyHelpComponent_Template_div_click_7_listener() { return ctx.closeHelp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Objectives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The primary goal of Rummy is to form valid sets and sequences of cards in your hand and meld them to declare a winning hand.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Number of players");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Rummy is typically played with 2 to 6 players and a standard 52-card deck for 2-4 players, and two decks for 5-6 players. Each player is dealt with 13 cards. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Basic Rules:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sets and Sequences:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " The main goal is to form sets (3 or 4 cards of the same rank but different suits) and sequences (3 or more consecutive cards of the same suit). A valid sequence cannot wrap around the Ace (e.g., Q-K-A-2 is not valid).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Dealing and Gameplay: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Players are dealt a certain number of cards each. The rest of the cards form the draw pile, and the top card is placed face-up as the discard pile. Players take turns to draw a card from the draw pile or the discard pile, and then discard a card.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Melding: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "As you form sets or sequences in your hand, you can lay them face-up on the table to meld. You need at least two valid sets/sequences to declare a winning hand. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Going Out: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "When you have formed all your cards into valid sets and sequences, you can declare your hand. However, you must have at least one pure sequence (a sequence without a Joker) to declare.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Jokers: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Jokers can be used as substitutes for any missing card in a set or sequence. Some variations allow for printed jokers as well.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Scoring: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Different variants of Rummy have different scoring systems. Generally, cards have point values, and the aim is to have the fewest points in your hand when someone goes out. Points are typically assigned based on card values, with face cards worth 10 points and numbered cards worth their face value.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Winning: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "The game can end either when a player goes out (declares their hand) or when the draw pile is exhausted. The player who goes out first wins the round, and scores are calculated based on the remaining cards in the other players' hands.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n    font-family: \"Poppins_Medium\";\r\n\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    background-color: #f7cc1e;\r\n    font-weight: bolder;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 0px;\r\n    width: 1.8vmin;\r\n    height: 1.8vmin;\r\n    border-radius: 50%;\r\n    margin-top: 1.5vmin;\r\n    box-sizing: border-box;\r\n}\r\n.help-image[_ngcontent-%COMP%] {\r\n    background: url('/assets/Rummy/Images/settings.png') no-repeat center center;\r\n    background-size: 100% 100%;\r\n    height: 90%;\r\n    width: 70%;\r\n    margin: auto;\r\n    right: 0;\r\n    left: 0;\r\n    position: absolute;\r\n}\r\n.image-text[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    margin-top: 7vmin;\r\n}\r\n.list-order[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .list-order-one[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    color: #d3d8eb;\r\n    font-size: 22px;\r\n    font-weight: 400;\r\n\r\n}\r\n.list-order[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .list-order-one[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    color: #d3d8eb;\r\n    font-size: 3vmin;\r\n    font-weight: 400;\r\n}\r\n.list-order[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .list-order-one[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: #f7cc1e;\r\n    font-size: 3.8vmin;\r\n    font-weight: 500;\r\n}\r\n.list-order[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .list-order-one[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    flex: 0 0 100%;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    padding-left: 24px;\r\n}\r\n.close-button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 14%;\r\n    right: 4%\r\n}\r\n.close-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 3.2vmin;\r\n    height: 3.2vmin;\r\n}\r\n.scrollbar[_ngcontent-%COMP%] {\r\n    height: 68%;\r\n    overflow-y: scroll;\r\n\r\n}\r\n.image-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    \r\n    width: 21vmin;\r\n    margin-top: 2vmin;\r\n\r\n}\r\n.helps[_ngcontent-%COMP%] {\r\n    padding: 2vmin 7vmin 0vmin;\r\n    height: 100%;\r\n}\r\n#style-2[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    border-radius: 10px;\r\n    background-color: #F5F5F5;\r\n}\r\n#style-2[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 5px;\r\n    background-color: #302b2b;\r\n}\r\n#style-2[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);\r\n    background-color: rgb(255, 206, 43);\r\n}\r\n@media screen and (max-width:653px) {\r\n    .close-button[_ngcontent-%COMP%] {\r\n        left: 90%;\r\n    }\r\n}\r\n@media screen and (max-width:1024px) {\r\n    .close-button[_ngcontent-%COMP%] {\r\n        left: 92%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bW15LWhlbHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUFDakI7SUFDSSw2QkFBNkI7O0FBRWpDO0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSw0RUFBNEU7SUFDNUUsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFFBQVE7SUFDUixPQUFPO0lBQ1Asa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBRUE7O0lBRUksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7O0FBRXBCO0FBRUE7O0lBRUksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUVBOztJQUVJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1I7QUFDSjtBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7O0FBRXRCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjs7QUFFckI7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxvREFBb0Q7SUFDcEQsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1EQUFtRDtJQUNuRCxtQ0FBbUM7QUFDdkM7QUFHQTtJQUNJO1FBQ0ksU0FBUztJQUNiO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksU0FBUztJQUNiO0FBQ0oiLCJmaWxlIjoicnVtbXktaGVscC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVscCBTZWN0aW9uICovXHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc19NZWRpdW1cIjtcclxuXHJcbn1cclxuXHJcbnVsIGxpOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2NjMWU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDEuOHZtaW47XHJcbiAgICBoZWlnaHQ6IDEuOHZtaW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjV2bWluO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmhlbHAtaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL1J1bW15L0ltYWdlcy9zZXR0aW5ncy5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uaW1hZ2UtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogN3ZtaW47XHJcbn1cclxuXHJcbi5saXN0LW9yZGVyIGxpLFxyXG4ubGlzdC1vcmRlci1vbmUgbGkge1xyXG4gICAgY29sb3I6ICNkM2Q4ZWI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxufVxyXG5cclxuLmxpc3Qtb3JkZXIgbGksXHJcbi5saXN0LW9yZGVyLW9uZSBsaSB7XHJcbiAgICBjb2xvcjogI2QzZDhlYjtcclxuICAgIGZvbnQtc2l6ZTogM3ZtaW47XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ubGlzdC1vcmRlciBoMyxcclxuLmxpc3Qtb3JkZXItb25lIGgzIHtcclxuICAgIGNvbG9yOiAjZjdjYzFlO1xyXG4gICAgZm9udC1zaXplOiAzLjh2bWluO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmxpc3Qtb3JkZXIgdWwgbGksXHJcbi5saXN0LW9yZGVyLW9uZSB1bCBsaSB7XHJcbiAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTQlO1xyXG4gICAgcmlnaHQ6IDQlXHJcbn1cclxuXHJcbi5jbG9zZS1idXR0b24gaW1nIHtcclxuICAgIHdpZHRoOiAzLjJ2bWluO1xyXG4gICAgaGVpZ2h0OiAzLjJ2bWluO1xyXG59XHJcblxyXG4uc2Nyb2xsYmFyIHtcclxuICAgIGhlaWdodDogNjglO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxufVxyXG5cclxuLmltYWdlLXRleHQgaW1nIHtcclxuICAgIC8qIHdpZHRoOiAyNXZtaW47ICovXHJcbiAgICB3aWR0aDogMjF2bWluO1xyXG4gICAgbWFyZ2luLXRvcDogMnZtaW47XHJcblxyXG59XHJcblxyXG4uaGVscHMge1xyXG4gICAgcGFkZGluZzogMnZtaW4gN3ZtaW4gMHZtaW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNzdHlsZS0yOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbiNzdHlsZS0yOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMmIyYjtcclxufVxyXG5cclxuI3N0eWxlLTI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAuMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMDYsIDQzKTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjUzcHgpIHtcclxuICAgIC5jbG9zZS1idXR0b24ge1xyXG4gICAgICAgIGxlZnQ6IDkwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpIHtcclxuICAgIC5jbG9zZS1idXR0b24ge1xyXG4gICAgICAgIGxlZnQ6IDkyJTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FbAC":
/*!*************************************************************!*\
  !*** ./src/app/game/rummyManger/phaserscreen/rummySound.ts ***!
  \*************************************************************/
/*! exports provided: rummySound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rummySound", function() { return rummySound; });
class rummySound extends Phaser.Scene {
    constructor(handle, gameComp, socketScv, model) {
        super(handle);
        this.gameComp = gameComp;
        this.socketScv = socketScv;
        this.model = model;
    }
    create() {
        this.playGameMusic();
    }
    playGameSound(sound) {
        if (this.model.isSoundOn) {
            if (!this.sound.get(sound)) {
                this.currentSound = this.sound.add(sound);
            }
            else {
                this.currentSound = this.sound.get(sound);
            }
            console.log("sound of the game", this.currentSound);
            if (this.currentSound.key == 'card_delt') {
                this.currentSound.rate = 3;
                this.currentSound.volume = 2;
            }
            console.log("the game sound is", this.currentSound);
            this.currentSound.play();
        }
    }
    stopgameSound(sound) {
        if (this.sound.get(sound)) {
            let cardsound = this.sound.get(sound);
            console.log("card Sound", cardsound);
            cardsound.stop();
        }
    }
    playGameMusic() {
        if (this.model.isMusicOn) {
            if (!this.sound.get("rummyBackground")) {
                this.currentMusic = this.sound.add("rummyBackground");
                this.currentMusic.play();
            }
            else {
                this.currentMusic.play();
            }
            console.log("music of the game", this.currentMusic);
            this.currentMusic.rate = 1;
            this.currentMusic.volume = 0.5;
            this.currentMusic.loop = true;
        }
    }
    stopGameMusic() {
        this.currentMusic.pause();
    }
    update(time, delta) {
        if (this.model.isMusicChange) {
            this.model.isMusicChange = false;
            if (this.model.isMusicOn) {
                this.currentMusic.play();
            }
            else {
                this.currentMusic.pause();
            }
        }
        if (this.model.isSoundChange) {
            this.model.isSoundChange = false;
            let timer_sound = this.sound.get('timer_sound');
            if (this.model.isSoundOn) {
                timer_sound.play();
            }
            else {
                timer_sound.stop();
            }
        }
    }
}


/***/ }),

/***/ "LS6l":
/*!***************************************************************!*\
  !*** ./src/app/game/rummyManger/phaserscreen/declareRummy.ts ***!
  \***************************************************************/
/*! exports provided: declareRummy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declareRummy", function() { return declareRummy; });
class declareRummy extends Phaser.Scene {
    constructor(handle, gameComp, socketScv, model) {
        super(handle);
        this.chips = [];
        this.numberOfChips = 3;
        this.gameComp = gameComp;
        this.socketScv = socketScv;
        this.model = model;
    }
    preload() {
    }
    create() {
        this.getScenes();
        this.TABLE_CLOSED_DECK_POSITION = { X: this.game.scale.width / 40 * 18.5, Y: this.rummyTable.y - (this.rummyTable.displayHeight / 16) };
        console.log("Table Close >>> ", this.TABLE_CLOSED_DECK_POSITION, this.rummyTable);
        this.declareEvent1 = this.add.group();
        this.declareEvent2 = this.add.group();
        this.declare_BG = this.add.image(this.TABLE_CLOSED_DECK_POSITION.X / 0.95, this.TABLE_CLOSED_DECK_POSITION.Y / 1.06, 'declare_bg').setScale((this.game.scale.width / (50 * 40)), (this.game.scale.height / (28 * 40)));
        this.declareRummyText1 = this.add.text(this.declare_BG.x - (this.rummyTable.displayHeight / 11), this.declare_BG.y - (this.rummyTable.displayHeight / 8.8), "", { font: '36px Poppins_SemiBold', color: '#fcf039', }).setFontSize(this.game.scale.width / 325 + "ex");
        this.declareRummyText2 = this.add.text(this.declareRummyText1.x - (this.rummyTable.displayHeight / 10.5), this.declareRummyText1.y + (this.rummyTable.displayHeight / 26), "", { font: '30px Poppins_Regular', color: '#FFFFFF', }).setFontSize(this.game.scale.width / 400 + "ex");
        this.declareTimer = this.add.text(this.declareRummyText2.x + (this.rummyTable.displayHeight / 6.3), this.declareRummyText2.y + (this.rummyTable.displayHeight / 18), "", { font: '30px Poppins_Regular', color: '#d3cab1', }).setFontSize(this.game.scale.width / 325 + "ex");
        this.declareAskButton = this.add.image(this.declare_BG.x / 0.98, this.declare_BG.y / 0.82, 'declare_enable').setScale(this.game.scale.width / (25 * 100), this.game.scale.height / (12 * 100)).setInteractive({ cursor: 'pointer' });
        this.declareEvent1.add(this.declare_BG);
        this.declareEvent1.add(this.declareRummyText1);
        this.declareEvent1.add(this.declareRummyText2);
        this.declareEvent1.add(this.declareTimer);
        this.declareEvent1.add(this.declareAskButton);
        this.declareEvent1.setVisible(false);
        // this.declareEvent1.setVisible(true)
        this.declareEvent2.add(this.declare_BG);
        this.declareEvent2.add(this.declareTimer);
        this.declareEvent2.add(this.declareRummyText2);
        this.declareEvent2.setVisible(false);
        this.declareAskButton.on('pointerdown', () => {
            this.gameSound.playGameSound("card_discard");
            this.declareEvent1.setVisible(false);
            this.declareEvent2.setVisible(false);
            this.declareMyRummy();
        }, this);
        // this.declareEvent.setVisible(true);
        // console.log("Inside Declare Rummy >> ",this.rummyCardScene,this.rummyButtonScene)
        this.subscribeToServices();
    }
    getScenes() {
        this.rummyCardScene = this.scene.get('rummyCards');
        this.rummyButtonScene = this.scene.get('rummyButtons');
        this.rummyHandsScene = this.scene.get('rummyHands');
        this.rummyTableScene = this.scene.get('rummyTable');
        this.rummyTable = this.rummyTableScene.rummyTable;
        this.gameSound = this.scene.get("rummySound");
        this.gameTimerScene = this.scene.get("rummyTimer");
        console.log("Declare Rummy ----> ", this.rummyCardScene, this.rummyButtonScene, this.rummyHandsScene, this.gameTimerScene);
    }
    subscribeToServices() {
        this.subscribeToAskDeclare();
        this.subscribeToWinner();
        this.subscribeToLosser();
    }
    subscribeToAskDeclare() {
        let temp = this.socketScv.askToDeclareSO.subscribe((data) => {
            if (this.gameTimerScene.timer) {
                this.gameTimerScene.timer.destroy(true);
                this.gameTimerScene.timer = null;
            }
            console.log("askToDeclareSO >>> ???? ", data);
            this.declareTimer.text = "45 sec";
            if (this.model.userId == data.userId) {
                this.declareRummyText1.text = "Rummy Declared!";
                this.declareRummyText2.text = "Please confirm yours set and declare.";
                this.declareEvent1.setVisible(true);
                this.startCountDown(true);
            }
            else {
                this.declareRummyText2.text = "Waiting for opponent to declare";
                this.declareEvent2.setVisible(true);
                this.startCountDown(false);
            }
        });
        this.gameComp.subscriptions.push(temp);
    }
    startCountDown(myTurn) {
        var timer = 45;
        var timerText;
        var interval = setInterval(() => {
            timer--;
            timerText = timer + " sec";
            this.declareTimer.text = timerText;
            if (timer <= 0) {
                clearInterval(interval);
                if (myTurn) {
                    this.declareEvent1.setVisible(false);
                    this.gameSound.playGameSound("card_discard");
                    this.declareMyRummy();
                }
                else {
                    this.declareEvent2.setVisible(false);
                }
            }
        }, 1000);
    }
    subscribeToWinner() {
        let temp = this.socketScv.winnerSO.subscribe((data) => {
            let sound = this.sound.get("timer_sound");
            sound.stop();
            this.model.resultData = [data[0], ...this.model.resultData.slice()];
            // alert("Game Completed winner-",data)
            // alert("winner: " + data[0].userName);
            if (this.model.roundTimer) {
                clearInterval(this.model.roundTimer);
                this.rummyTableScene.timer.text = "00 : 30 : 00";
            }
            this.chipsAnimation(data);
            setTimeout(() => {
                this.roundCompleted();
            }, 4000);
        });
        this.gameComp.subscriptions.push(temp);
    }
    chipsAnimation(data) {
        this.scene.bringToTop();
        let winner = null;
        for (let index = 0; index < this.model.playerInGameData.length; index++) {
            const playerChips = [];
            const player = this.model.playerInGameData[index];
            for (let j = 0; j < this.numberOfChips; j++) {
                const chip = this.add.image(player.x, player.y, 'chip').setOrigin(0.5);
                playerChips.push(chip);
                this.rummyCardScene.assestsToDestory.push(chip);
            }
            this.chips.push(playerChips);
            if (data[0].userId === player.userId) {
                winner = player;
            }
        }
        for (let index = 0; index < this.chips.length; index++) {
            const playerChips = this.chips[index];
            this.tweenChips(playerChips, winner.x, winner.y);
        }
    }
    tweenChips(playerChips, x, y) {
        for (let index = 0; index < playerChips.length; index++) {
            const chip = playerChips[index];
            this.tweens.add({
                targets: chip,
                x: x,
                y: y,
                duration: 2500,
                delay: 100 * index,
                ease: 'Cubic.InOut',
                easeParams: [0.5, 1],
                onComplete: () => {
                    this.gameTimerScene = this.scene.get('rummyTimer');
                    console.log("Game Timer Scene ", this.gameTimerScene);
                    if (this.gameTimerScene.timer) {
                        this.gameTimerScene.timer.destroy(true);
                        this.gameTimerScene.timer = null;
                    }
                    else {
                        console.log("Timer is Null >>> ");
                    }
                    this.gameTimerScene.timerGroup.setVisible(false);
                },
            });
        }
    }
    subscribeToLosser() {
        let temp = this.socketScv.looserSO.subscribe((data) => {
            console.log("Loser ", data);
            this.model.resultData = [...this.model.resultData, ...this.sortLosersByPointsDescending(data)];
            console.log("Result ---> ", this.model.resultData);
        });
        this.gameComp.subscriptions.push(temp);
    }
    declareMyRummy() {
        const GroupA = this.rummyCardScene.GroupA;
        const GroupB = this.rummyCardScene.GroupB;
        const GroupC = this.rummyCardScene.GroupC;
        const GroupD = this.rummyCardScene.GroupD;
        const groupsArray = [GroupA, GroupB, GroupC, GroupD];
        let cardsString = '';
        for (let i = 0; i < groupsArray.length; i++) {
            const group = groupsArray[i];
            for (let j = 0; j < group.length; j++) {
                const card = group[j];
                if (i > 0 && j === 0) {
                    cardsString = cardsString + '-';
                }
                cardsString = cardsString + card.id + ',';
            }
        }
        console.log("declared", cardsString);
        this.socketScv.declareMyRummy(cardsString);
    }
    sortLosersByPointsDescending(data) {
        return data.sort((a, b) => Number(b.points) - Number(a.points));
    }
    roundCompleted() {
        this.model.showResult = true;
        if (this.model.roundTimer) {
            clearInterval(this.model.roundTimer);
            this.rummyTableScene.timer.text = "00 : 30 : 00";
        }
        setTimeout(() => {
            if (this.model.resultData.length > 0) {
                // this.model.showResult = false;
                this.model.resultData = [];
            }
        }, 10000);
        console.log("this.model.resultData>>>>>>", this.model.resultData);
        const draw_card_pile = this.rummyCardScene.draw_card_pile;
        const discard_card_pile = this.rummyCardScene.discard_card_pile;
        const joker_card = this.rummyCardScene.joker_card;
        const discardCardPileArray = this.rummyCardScene.discardCardPile;
        const playCards = this.rummyCardScene.playerCards;
        const assestsToDestory = this.rummyCardScene.assestsToDestory;
        this.rummyHandsScene.groupAText.text = '';
        this.rummyHandsScene.groupBText.text = '';
        this.rummyHandsScene.groupCText.text = '';
        this.rummyHandsScene.groupDText.text = '';
        this.declareEvent1.setVisible(false);
        this.declareEvent2.setVisible(false);
        this.model.rummyRound++;
        this.rummyButtonScene.declare_enable.setAlpha(0);
        this.rummyButtonScene.discard_enable.setAlpha(0);
        this.rummyButtonScene.discard_disable.setAlpha(1);
        this.rummyButtonScene.declare_disable.setAlpha(1);
        draw_card_pile.destroy();
        discard_card_pile.destroy();
        joker_card.destroy();
        for (let index = 0; index < playCards.length; index++) {
            const card = playCards[index];
            card.destroy();
        }
        for (let index = 0; index < assestsToDestory.length; index++) {
            const asset = assestsToDestory[index];
            asset.destroy();
        }
        for (let index = 0; index < discardCardPileArray.length; index++) {
            const card = discardCardPileArray[index];
            card.destroy();
        }
        //reset global variables
        // playCards.
        console.log("here is the card data", discardCardPileArray, playCards, this.model.rummyRound);
        this.rummyCardScene.discardCardPile = [];
        this.rummyCardScene.playerCards = [];
        this.rummyCardScene.cardToDiscard = null;
        this.rummyCardScene.animatedCardCount = 0;
        this.rummyCardScene.cardPointerDown = false;
        this.rummyHandsScene.textABg.visible = false;
        this.rummyHandsScene.textBBg.visible = false;
        this.rummyHandsScene.textCBg.visible = false;
        this.rummyHandsScene.textDBg.visible = false;
        this.rummyCardScene.draw_pile_border.visible = false;
        this.rummyCardScene.textGroup.setVisible(false);
        console.log("here is the card data", discardCardPileArray, playCards);
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'TRP-Game';
        console.log("here is the data");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Vr47":
/*!*************************************************************!*\
  !*** ./src/app/game/rummyManger/phaserscreen/rummyTable.ts ***!
  \*************************************************************/
/*! exports provided: rummyTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rummyTable", function() { return rummyTable; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "1O+K");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);

class rummyTable extends phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"] {
    // yourturn;
    constructor(handle, gameComp, rtmp, model) {
        super(handle);
        this.playerCount = 2;
        this.player_Assets = [];
        this.highestTossCard = 0;
        this.playerDetails = [];
        this.totalPlayers = [];
        this.gameComp = gameComp;
        this.socketScv = rtmp;
        this.model = model;
    }
    initializeConstants() {
        this.GAME_SCALE = this.game.scale.width + (this.game.scale.height);
        this.PLAYERS_PROFILE_SIZE = this.GAME_SCALE / (36 * 100);
        this.PLAYER_SCALE = this.GAME_SCALE / (36 * 100);
        this.PLAYER_NAME_SCALE = this.GAME_SCALE / (8 * 100);
        this.PLAYER_COINS_TEXT_SCALE = this.GAME_SCALE / (8 * 100);
        this.PLAYER_COINS_SCALE = this.GAME_SCALE / (35 * 100);
        this.PLAYER_PROFILE_POSTION = { X: 0, Y: 0 }; //(this.game.scale.width / 40) * 2.8, (this.game.scale.height / 40) * 19.9
        this.PLAYER_DETAILS_POSTION = { X: 0, Y: 0 };
        this.PLAYER_NAME_POSTION = { X: 0, Y: 0 };
        this.PLAYER_COINSTEXT_POSTION = { X: 0, Y: 0 };
        this.PLAYER_COINS_POSTION = { X: 0, Y: 0 };
        this.PLAYER_TIMER_POSTION = { X: 0, Y: 0 };
    }
    create() {
        this.initializeConstants();
        this.rummyTable = this.add.image((this.game.scale.width / 40) * 20, (this.game.scale.height / 40) * 18, "rummy_table").setScale((this.GAME_SCALE) / (31 * 100));
        var setting_bg = this.add.image(this.game.scale.width / 48.2, (this.game.scale.height / 40) * 2.8, "setting_bg").setScale(this.GAME_SCALE / (35 * 100));
        this.setting = this.add.image(this.game.scale.width / 55, (this.game.scale.height / 40) * 2.8, "setting").setScale(this.GAME_SCALE / (35 * 100)).setDepth(100).setInteractive({ cursor: 'pointer' });
        let self = this;
        this.setting.on('pointerdown', function () {
            self.model.settingButton = true;
        });
        var main_timer = this.add.image((this.game.scale.width / 40) * 20, this.game.scale.height / 40, "game_timer").setScale(this.GAME_SCALE / (25 * 100)).setDepth(100).setAlpha(0.8);
        var game_timer_icon = this.add.image(main_timer.x - (main_timer.displayWidth / 7), main_timer.y + (main_timer.displayHeight / 20), "timer_icon").setScale(this.GAME_SCALE / (35 * 100)).setDepth(100);
        this.timer = this.add.text(main_timer.x - (main_timer.displayWidth / 15), main_timer.y - (main_timer.displayHeight / 17), "", { font: "40px Poppins_Medium", color: "#ffffff" }).setFontSize(this.GAME_SCALE / (7 * 100) + "ex").setDepth(200);
        //Bottom
        this.player1Group = this.add.group();
        this.player2Group = this.add.group();
        this.player3Group = this.add.group();
        this.player4Group = this.add.group();
        this.player5Group = this.add.group();
        this.player6Group = this.add.group();
        this.player2 = this.add.image((this.rummyTable.x) - (this.rummyTable.displayWidth / 2.58), this.rummyTable.y + (this.rummyTable.displayHeight / 28), "other_detail_L").setScale(this.PLAYER_SCALE);
        this.player2name = this.add.text(this.player2.x, this.player2.y - (this.player2.displayHeight / 5), "Kavya", { font: "40px Poppins_SemiBold", color: "#fcf039" }).setFontSize(this.PLAYER_NAME_SCALE + "ex");
        this.player2profile = this.add.image(this.player2.x - (this.player2.displayWidth / 4.35), this.player2.y, "avatar2").setScale(this.PLAYERS_PROFILE_SIZE).setDepth(200);
        this.player2Coins = this.add.image(this.player2.x + (this.player2.displayWidth / 20), this.player2.y + (this.player2.displayHeight / 13), "chip").setScale(this.PLAYER_COINS_SCALE).setDepth(200);
        this.player2CoinsText = this.add.text(this.player2.x + (this.player2.displayWidth / 9), this.player2.y, "10K", { font: "40px Poppins_SemiBold", color: '#ffffff', }).setFontSize(this.PLAYER_COINS_TEXT_SCALE + "ex").setDepth(200);
        this.player2Group.add(this.player2);
        this.player2Group.add(this.player2profile);
        this.player2Group.add(this.player2name);
        this.player2Group.add(this.player2Coins);
        this.player2Group.add(this.player2CoinsText);
        this.player3 = this.add.image((this.rummyTable.x) - (this.rummyTable.displayWidth / 3.15), (this.rummyTable.y) - (this.rummyTable.displayHeight / 4.3), "other_detail_L").setScale(this.PLAYER_SCALE);
        this.player3name = this.add.text(this.player3.x, this.player3.y - (this.player3.displayHeight / 5), "Yugal", { font: "40px Poppins_SemiBold", color: "#fcf039" }).setFontSize(this.PLAYER_NAME_SCALE + "ex");
        this.player3profile = this.add.image(this.player3.x - (this.player3.displayWidth / 4.35), this.player3.y, "avatar3").setScale(this.PLAYERS_PROFILE_SIZE).setDepth(200);
        this.player3Coins = this.add.image(this.player3.x + (this.player3.displayWidth / 20), this.player3.y + (this.player3.displayHeight / 13), "chip").setScale(this.PLAYER_COINS_SCALE).setDepth(200).setOrigin(0.5);
        this.player3CoinsText = this.add.text(this.player3.x + (this.player3.displayWidth / 9), this.player3.y, "10K", { font: "40px Poppins_SemiBold", color: '#ffffff', }).setFontSize(this.PLAYER_COINS_TEXT_SCALE + "ex").setDepth(200);
        this.player3Group.add(this.player3);
        this.player3Group.add(this.player3profile);
        this.player3Group.add(this.player3name);
        this.player3Group.add(this.player3Coins);
        this.player3Group.add(this.player3CoinsText);
        this.player4 = this.add.image((this.rummyTable.x), (this.rummyTable.y) - (this.rummyTable.displayHeight / 3.4), "other_detail_L").setScale(this.PLAYER_SCALE);
        this.player4name = this.add.text(this.player4.x, this.player4.y - (this.player4.displayHeight / 5), "Yogesh", { font: "40px Poppins_SemiBold", color: "#fcf039" }).setFontSize(this.PLAYER_NAME_SCALE + "ex");
        this.player4profile = this.add.image(this.player4.x - (this.player4.displayWidth / 4.35), this.player4.y, "avatar4").setScale(this.PLAYERS_PROFILE_SIZE).setDepth(200);
        this.player4Coins = this.add.image(this.player4.x + (this.player4.displayWidth / 20), this.player4.y + (this.player4.displayHeight / 13), "chip").setScale(this.PLAYER_COINS_SCALE).setDepth(200);
        this.player4CoinsText = this.add.text(this.player4.x + (this.player4.displayWidth / 9), this.player4.y, "10K", { font: "40px Poppins_SemiBold", color: '#ffffff', }).setFontSize(this.PLAYER_COINS_TEXT_SCALE + "ex").setDepth(200);
        this.player4Group.add(this.player4);
        this.player4Group.add(this.player4profile);
        this.player4Group.add(this.player4name);
        this.player4Group.add(this.player4Coins);
        this.player4Group.add(this.player4CoinsText);
        this.player5 = this.add.image((this.rummyTable.x) + (this.rummyTable.displayWidth / 3.08), (this.rummyTable.y) - (this.rummyTable.displayHeight / 4.3), "other_detail_R").setScale(this.PLAYER_SCALE);
        this.player5name = this.add.text(this.player5.x - (this.player5.displayWidth / 4), this.player5.y - (this.player5.displayHeight / 5), "Harish", { font: "40px Poppins_SemiBold", color: "#fcf039" }).setFontSize(this.PLAYER_NAME_SCALE + "ex");
        this.player5profile = this.add.image(this.player5.x + (this.player5.displayWidth / 4.35), this.player5.y, "avatar1").setScale(this.PLAYERS_PROFILE_SIZE).setDepth(200);
        this.player5Coins = this.add.image(this.player5.x - (this.player5.displayWidth / 5), this.player5.y + (this.player5.displayHeight / 13), "chip").setScale(this.PLAYER_COINS_SCALE).setDepth(200);
        this.player5CoinsText = this.add.text(this.player5.x - (this.player5.displayWidth / 7), this.player5.y, "10K", { font: "40px Poppins_SemiBold", color: '#ffffff', }).setFontSize(this.PLAYER_COINS_TEXT_SCALE + "ex").setDepth(200);
        this.player5Group.add(this.player5);
        this.player5Group.add(this.player5profile);
        this.player5Group.add(this.player5name);
        this.player5Group.add(this.player5Coins);
        this.player5Group.add(this.player5CoinsText);
        this.player6 = this.add.image((this.rummyTable.x) + (this.rummyTable.displayWidth / 2.55), this.rummyTable.y + (this.rummyTable.displayHeight / 28), "other_detail_R").setScale(this.PLAYER_SCALE);
        this.player6name = this.add.text(this.player6.x - (this.player6.displayWidth / 4), this.player6.y - (this.player6.displayHeight / 5), "Tushar", { font: "40px Poppins_SemiBold", color: "#fcf039" }).setFontSize(this.PLAYER_NAME_SCALE + "ex");
        this.player6profile = this.add.image(this.player6.x + (this.player6.displayWidth / 4.35), this.player6.y, "avatar1").setScale(this.PLAYERS_PROFILE_SIZE).setDepth(200);
        this.player6Coins = this.add.image(this.player6.x - (this.player6.displayWidth / 5), this.player6.y + (this.player6.displayHeight / 13), "chip").setScale(this.PLAYER_COINS_SCALE).setDepth(200);
        this.player6CoinsText = this.add.text(this.player6.x - (this.player6.displayWidth / 7), this.player6.y, "10K", { font: "40px Poppins_SemiBold", color: '#ffffff', }).setFontSize(this.PLAYER_COINS_TEXT_SCALE + "ex").setDepth(200);
        this.player6Group.add(this.player6);
        this.player6Group.add(this.player6profile);
        this.player6Group.add(this.player6name);
        this.player6Group.add(this.player6Coins);
        this.player6Group.add(this.player6CoinsText);
        this.player1Group.setVisible(false);
        this.player2Group.setVisible(false);
        this.player3Group.setVisible(false);
        this.player4Group.setVisible(false);
        this.player5Group.setVisible(false);
        this.player6Group.setVisible(false);
        // this.player1Group.setVisible(true);
        // this.player2Group.setVisible(true);
        // this.player3Group.setVisible(true);
        // this.player4Group.setVisible(true);
        // this.player5Group.setVisible(true);
        // this.player6Group.setVisible(true);
        this.player_Assets.push(this.player2Group);
        this.player_Assets.push(this.player3Group);
        this.player_Assets.push(this.player4Group);
        this.player_Assets.push(this.player5Group);
        this.player_Assets.push(this.player6Group);
        this.subscribeToService();
    }
    repositionPlayerGroup(playerGroup, x, y) {
        playerGroup.children.iterate(function (child) {
            console.log("cc", child);
            child.x = child.x + x;
            child.y = child.y + y;
        });
    }
    adjustTextFontSize(name) {
        console.log("Inside Adjust Text Font >> ", name);
        let size = name.length;
        let font_size;
        if (size < 10) {
            console.log("Length is less than 10", name, size);
            font_size = (this.PLAYER_NAME_SCALE + "ex");
        }
        else if (size >= 10 && size < 15) {
            console.log("Length is greater and equal than 10 and less than15", name, size);
            font_size = (this.game.scale.width / 450 + "ex");
        }
        console.log("Font Size >> ", font_size);
        return font_size;
    }
    startRoundTimer() {
        var countdown = 30 * 60 * 1000;
        this.model.roundTimer = setInterval(() => {
            countdown -= 1000;
            var min = Math.floor(countdown / (60 * 1000));
            //var sec = Math.floor(countdown - (min * 60 * 1000));  // wrong
            var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000); //correct
            if (sec < 10) {
                sec = "0" + sec;
            }
            if (min < 10) {
                min = "0" + min;
            }
            if (countdown <= 0) {
                // alert("30 min!"); 
                clearInterval(this.model.roundTimer);
                this.timer.text = "00 : 00 : 30";
                //doSomething();
            }
            else {
                this.timer.text = "00 : " + min + " : " + sec;
            }
        }, 1000);
        // // Default inital value of timer
        // const defaultValue = 30 * 60;
        // // variable to the time
        // var countDownTime = defaultValue;
        // // variable to the time
        // const findTimeString = () => {
        //   var minutes = String(Math.trunc(countDownTime / 60));
        //   var seconds = String(countDownTime % 60);
        //   if (minutes.length === 1) {
        //     minutes = "0" + minutes;
        //   }
        //   if (seconds.length === 1) {
        //     seconds = "0" + seconds;
        //   }
        //   console.log("Minute >> ", minutes, " Second >> ",seconds)
        //   // return minutes + seconds;
        // };
    }
    subscribeToService() {
        this.subscribeToPlayerInGame();
        this.subscribeToTossCard();
    }
    subscribleToPlayerTurns() {
        let temp = this.socketScv.callerSo.subscribe((data) => {
            console.log("callerSo>> ", data);
            console.log("totalplayers*****", this.totalPlayers);
            let chairIdArray = [];
            for (let index = 0; index < this.model.playerInGameData.length; index++) {
                const element = this.model.playerInGameData[index];
                if (element.userId === data.userId) {
                    this.turn.x = element.x;
                    this.turn.y = element.y;
                }
            }
        });
        this.gameComp.subscriptions.push(temp);
    }
    subscribeToPlayerInGame() {
        let temp = this.socketScv.playerList.subscribe((data) => {
            this.rummyCardScene = this.scene.get('rummyCards');
            if (data) {
                console.log("Rtmp Table >>> ", data, this.model.allPlayer, data.userId, this.model.userId);
                if (data.userId == this.model.userId) {
                    this.model.chairId = parseInt(data.chairId);
                    this.rummyCardScene.player1name.text = "YOU";
                    this.player1Group.setVisible(true);
                    this.model.playerInGameData.push({ userId: data.userId, chairId: data.chairId, seat: 1, x: (this.game.scale.width / 40) * 20.5, y: (this.game.scale.height / 40) * 28, playerX: this.rummyCardScene.player1.x, playerY: this.rummyCardScene.player1.y, sprite: "timer_L" });
                }
                else {
                    this.totalPlayers.push(data);
                    console.log("total player data", this.totalPlayers);
                    if (this.totalPlayers.length == this.playerCount - 1)
                        this.placePlayerOnSeat(this.totalPlayers);
                    console.log("total player data", this.totalPlayers);
                }
            }
        });
        this.gameComp.subscriptions.push(temp);
    }
    subscribeToTossCard() {
        let temp = this.socketScv.tossSO.subscribe((data) => {
            this.timer.text = "00 : 30 : 00";
            console.log("Toss Card >> ", data);
            let dummyCard;
            var tossCard1;
            var tossCard2;
            var tossCard3;
            var tossCard4;
            var tossCard5;
            var tossCard6;
            dummyCard = this.add.image((this.game.scale.width / 40) * 18, (this.game.scale.height / 40) * 17, '-1').setScale(this.game.scale.height / (25 * 100));
            if (parseInt(data.cards) > this.highestTossCard) {
                this.highestTossCard = parseInt(data.cards);
                this.playerStartTurn = data.userId;
            }
            if (data.userId == this.model.userId) {
                tossCard1 = this.add.image((this.game.scale.width / 40) * 20, (this.game.scale.height / 40) * 28, data.cards).setScale(this.game.scale.height / (25 * 100)).setAlpha(0);
                tossCard1.id = data.cards;
                this.animateDrawToTossCards(dummyCard, tossCard1, (this.game.scale.width / 40) * 20, (this.game.scale.height / 40) * 28, data.userId);
                setTimeout(() => {
                    tossCard1.destroy();
                    tossCard1 = null;
                }, 2800);
            }
            else {
                for (var i = 0; i < this.model.playerInGameData.length; i++) {
                    if (this.model.playerInGameData[i].userId == data.userId) {
                        let seat = this.model.playerInGameData[i].seat;
                        let userId = this.model.playerInGameData[i].userId;
                        let x = this.model.playerInGameData[i].x;
                        let y = this.model.playerInGameData[i].y;
                        console.log("Seat >> ", seat, userId, x, y);
                        switch (seat) {
                            case 2:
                                tossCard2 = this.add.image(x, y, data.cards).setScale(this.game.scale.height / (25 * 100)).setAlpha(0);
                                tossCard2.id = data.cards;
                                this.animateDrawToTossCards(dummyCard, tossCard2, x, y, userId);
                                setTimeout(() => {
                                    tossCard2.destroy();
                                    tossCard2 = null;
                                }, 2800);
                                break;
                            case 3:
                                tossCard3 = this.add.image(x, y, data.cards).setScale(this.game.scale.height / (25 * 100)).setAlpha(0);
                                tossCard3.id = data.cards;
                                this.animateDrawToTossCards(dummyCard, tossCard3, x, y, userId);
                                setTimeout(() => {
                                    tossCard3.destroy();
                                    tossCard3 = null;
                                }, 2800);
                                break;
                            case 4:
                                tossCard4 = this.add.image(x, y, data.cards).setScale(this.game.scale.height / (25 * 100)).setAlpha(0);
                                tossCard4.id = data.cards;
                                this.animateDrawToTossCards(dummyCard, tossCard4, x, y, userId);
                                setTimeout(() => {
                                    tossCard4.destroy();
                                    tossCard4 = null;
                                }, 2800);
                                break;
                            case 5:
                                tossCard5 = this.add.image(x, y, data.cards).setScale(this.game.scale.height / (25 * 100)).setAlpha(0);
                                tossCard5.id = data.cards;
                                this.animateDrawToTossCards(dummyCard, tossCard5, x, y, userId);
                                setTimeout(() => {
                                    tossCard5.destroy();
                                    tossCard5 = null;
                                }, 2800);
                                break;
                            case 6:
                                tossCard6 = this.add.image(x, y, data.cards).setScale(this.game.scale.height / (25 * 100)).setAlpha(0);
                                tossCard6.id = data.cards;
                                this.animateDrawToTossCards(dummyCard, tossCard6, x, y, userId);
                                setTimeout(() => {
                                    tossCard6.destroy();
                                    tossCard6 = null;
                                }, 2800);
                                break;
                        }
                    }
                }
            }
            // this.showAllPlayerCards(data);
        });
        this.gameComp.subscriptions.push(temp);
    }
    animateWinnerTossCard(card, userId) {
        console.log("Animate Winner Toss Card >> ", this.playerStartTurn, userId, card.id, this.highestTossCard, this.playerStartTurn == userId, card.id == this.highestTossCard);
        if (this.playerStartTurn == userId && card.id == this.highestTossCard) {
            const shakeTween = this.tweens.add({
                targets: card,
                x: '+=5',
                y: '+=5',
                duration: 50,
                repeat: 10,
                yoyo: true,
                onComplete: function () {
                    // Callback function when the shake animation is complete (optional)
                },
            });
        }
    }
    adjustText(player, name) {
        console.log("Adjust Text >> ", player, name);
        name = name.slice(0, 5) + "...";
        player.text = name;
    }
    placePlayerOnSeat(data) {
        if (data.length == 1) {
            console.log("here is the player data", data);
            this.player4Group.setVisible(true);
            if (data[0].userName.length < 15) {
                this.player4name.setFontSize(this.adjustTextFontSize(data[0].userName));
                this.player4name.text = data[0].userName;
            }
            else {
                this.adjustText(this.player4name, data[0].userName);
            }
            this.model.playerInGameData.push({ userId: data[0].userId, chairId: data[0].chairId, seat: 4, x: (this.game.scale.width / 40) * 20.5, y: (this.game.scale.height / 40) * 11, playerX: this.player4.x, playerY: this.player4.y, sprite: "timer_L" });
        }
        else {
            this.arrangePlayerSeats(data);
        }
    }
    arrangePlayerSeats(totalPlayers) {
        console.log("total player data", totalPlayers);
        let chairIdArray = [];
        for (let i = 0; i < totalPlayers.length; i++) {
            chairIdArray.push(parseInt(totalPlayers[i].chairId));
        }
        console.log("chairIdArray", chairIdArray);
        switch (chairIdArray.length) {
            case 2:
                this.repositionPlayerGroup(this.player2Group, this.rummyTable.displayWidth / 50, -this.rummyTable.displayHeight / 15);
                this.repositionPlayerGroup(this.player6Group, -this.rummyTable.displayWidth / 60, -this.rummyTable.displayHeight / 15);
                let lindex = chairIdArray.indexOf(Math.max(...chairIdArray));
                let sindex = chairIdArray.indexOf(Math.min(...chairIdArray));
                if (this.model.chairId < totalPlayers[lindex].chairId) {
                    this.player4Group.setVisible(true);
                    if (totalPlayers[lindex].userName.length < 15) {
                        this.player4name.setFontSize(this.adjustTextFontSize(totalPlayers[lindex].userName));
                        this.player4name.text = totalPlayers[lindex].userName;
                    }
                    else {
                        this.adjustText(this.player4name, totalPlayers[lindex].userName);
                    }
                    this.player2Group.setVisible(true);
                    if (totalPlayers[sindex].userName.length < 15) {
                        this.player2name.setFontSize(this.adjustTextFontSize(totalPlayers[sindex].userName));
                        this.player2name.text = totalPlayers[sindex].userName;
                    }
                    else {
                        this.adjustText(this.player2name, totalPlayers[sindex].userName);
                    }
                    // this.player2name.text = totalPlayers[sindex].userName;
                    this.model.playerInGameData.push({ userId: totalPlayers[lindex].userId, chairId: totalPlayers[lindex].chairId, seat: 4, x: (this.game.scale.width / 40) * 20.5, y: (this.game.scale.height / 40) * 11, playerX: this.player4.x, playerY: this.player4.y, sprite: "timer_L" });
                    this.model.playerInGameData.push({ userId: totalPlayers[sindex].userId, chairId: totalPlayers[sindex].chairId, seat: 2, x: (this.game.scale.width / 40) * 8.5, y: (this.game.scale.height / 40) * 17, playerX: this.player2.x, playerY: this.player2.y, sprite: "timer_L" });
                }
                else {
                    this.player2Group.setVisible(true);
                    if (totalPlayers[lindex].userName.length < 15) {
                        this.player2name.setFontSize(this.adjustTextFontSize(totalPlayers[lindex].userName));
                        this.player2name.text = totalPlayers[lindex].userName;
                    }
                    else {
                        this.adjustText(this.player2name, totalPlayers[lindex].userName);
                    }
                    // this.player2name.setFontSize(this.adjustTextFontSize(totalPlayers[lindex].userName));
                    // this.player2name.text = totalPlayers[lindex].userName;
                    this.player4Group.setVisible(true);
                    if (totalPlayers[sindex].userName.length < 15) {
                        this.player4name.setFontSize(this.adjustTextFontSize(totalPlayers[sindex].userName));
                        this.player4name.text = totalPlayers[sindex].userName;
                    }
                    else {
                        this.adjustText(this.player4name, totalPlayers[sindex].userName);
                    }
                    // this.player4name.setFontSize(this.adjustTextFontSize(totalPlayers[sindex].userName));
                    // this.player4name.text = totalPlayers[sindex].userName;
                    this.model.playerInGameData.push({ userId: totalPlayers[lindex].userId, chairId: totalPlayers[lindex].chairId, seat: 2, x: (this.game.scale.width / 40) * 8.5, y: (this.game.scale.height / 40) * 17, playerX: this.player2.x, playerY: this.player2.y, sprite: "timer_L" });
                    this.model.playerInGameData.push({ userId: totalPlayers[sindex].userId, chairId: totalPlayers[sindex].chairId, seat: 4, x: (this.game.scale.width / 40) * 20.5, y: (this.game.scale.height / 40) * 11, playerX: this.player4.x, playerY: this.player4.y, sprite: "timer_L" });
                }
                break;
            case 3:
                this.repositionPlayerGroup(this.player2Group, this.rummyTable.displayWidth / 50, -this.rummyTable.displayHeight / 15);
                this.repositionPlayerGroup(this.player6Group, -this.rummyTable.displayWidth / 60, -this.rummyTable.displayHeight / 15);
                let frontId = 0;
                for (let i = 0; i < chairIdArray.length; i++) {
                    console.log("conditions", this.model.chairId + 2 == chairIdArray[i], this.model.chairId - 2 == chairIdArray[i], this.model.chairId, chairIdArray[i], this.model.chairId + 2, chairIdArray[i], this.model.chairId - 2, chairIdArray[i]);
                    if (this.model.chairId + 2 == chairIdArray[i] || this.model.chairId - 2 == chairIdArray[i]) {
                        frontId = chairIdArray[i];
                        this.player4Group.setVisible(true);
                        if (totalPlayers[i].userName.length < 15) {
                            this.player4name.setFontSize(this.adjustTextFontSize(totalPlayers[i].userName));
                            this.player4name.text = totalPlayers[i].userName;
                        }
                        else {
                            this.adjustText(this.player4name, totalPlayers[sindex].userName);
                        }
                        // this.player4name.setFontSize(this.adjustTextFontSize(totalPlayers[i].userName));
                        // this.player4name.text = totalPlayers[i].userName;
                        this.model.playerInGameData.push({ userId: totalPlayers[i].userId, chairId: totalPlayers[i].chairId, seat: 4, x: (this.game.scale.width / 40) * 20.5, y: (this.game.scale.height / 40) * 11, playerX: this.player4.x, playerY: this.player4.y, sprite: "timer_L" });
                        break;
                    }
                }
                if (frontId > this.model.chairId) {
                    this.player2Group.setVisible(true);
                    if (totalPlayers[chairIdArray.indexOf(this.model.chairId + 1)].userName.length < 15) {
                        this.player2name.setFontSize(this.adjustTextFontSize(totalPlayers[chairIdArray.indexOf(this.model.chairId + 1)].userName));
                        this.player2name.text = totalPlayers[chairIdArray.indexOf(this.model.chairId + 1)].userName;
                    }
                    else {
                        this.adjustText(this.player2name, totalPlayers[chairIdArray.indexOf(this.model.chairId + 1)].userName);
                    }
                    // this.player2name.setFontSize(this.adjustTextFontSize(totalPlayers[chairIdArray.indexOf(this.model.chairId + 1)].userName));
                    // this.player2name.text = totalPlayers[chairIdArray.indexOf(this.model.chairId + 1)].userName;
                    this.model.playerInGameData.push({ userId: totalPlayers[chairIdArray.indexOf(this.model.chairId + 1)].userId, chairId: totalPlayers[chairIdArray.indexOf(this.model.chairId + 1)].chairId, seat: 2, x: (this.game.scale.width / 40) * 8.5, y: (this.game.scale.height / 40) * 17, playerX: this.player2.x, playerY: this.player2.y, sprite: "timer_L" });
                    if (frontId < this.playerCount) {
                        this.player6Group.setVisible(true);
                        if (totalPlayers[chairIdArray.indexOf(frontId + 1)].userName.length < 15) {
                            this.player6name.setFontSize(this.adjustTextFontSize(totalPlayers[chairIdArray.indexOf(frontId + 1)].userName));
                            this.player6name.text = totalPlayers[chairIdArray.indexOf(frontId + 1)].userName;
                        }
                        else {
                            this.adjustText(this.player6name, totalPlayers[chairIdArray.indexOf(frontId + 1)].userName);
                        }
                        // this.player6name.setFontSize(this.adjustTextFontSize(totalPlayers[chairIdArray.indexOf(frontId + 1)].userName));
                        // this.player6name.text = totalPlayers[chairIdArray.indexOf(frontId + 1)].userName;
                        this.model.playerInGameData.push({ userId: totalPlayers[chairIdArray.indexOf(frontId + 1)].userId, chairId: totalPlayers[chairIdArray.indexOf(frontId + 1)].chairId, seat: 6, x: (this.game.scale.width / 40) * 31.5, y: (this.game.scale.height / 40) * 17, playerX: this.player6.x, playerY: this.player6.y, sprite: "timer_R" });
                    }
                    else if (frontId == 4) {
                        this.player6Group.setVisible(true);
                        console.log(totalPlayers[chairIdArray.indexOf(1)], chairIdArray.indexOf(1));
                        if (totalPlayers[chairIdArray.indexOf(1)].userName.length < 15) {
                            this.player6name.setFontSize(this.adjustTextFontSize(totalPlayers[chairIdArray.indexOf(1)].userName));
                            this.player6name.text = totalPlayers[chairIdArray.indexOf(1)].userName;
                        }
                        else {
                            this.adjustText(this.player6name, totalPlayers[chairIdArray.indexOf(1)].userName);
                        }
                        // this.player6name.setFontSize(this.adjustTextFontSize(totalPlayers[chairIdArray.indexOf(1)].userName));
                        // this.player6name.text = totalPlayers[chairIdArray.indexOf(1)].userName;
                        this.model.playerInGameData.push({ userId: totalPlayers[chairIdArray.indexOf(1)].userId, chairId: totalPlayers[chairIdArray.indexOf(1)].chairId, seat: 6, x: (this.game.scale.width / 40) * 31.5, y: (this.game.scale.height / 40) * 17, playerX: this.player6.x, playerY: this.player6.y, sprite: "timer_R" });
                    }
                }
                else {
                    this.player6Group.setVisible(true);
                    if (totalPlayers[chairIdArray.indexOf(frontId + 1)].userName.length < 15) {
                        this.player6name.setFontSize(this.adjustTextFontSize(totalPlayers[chairIdArray.indexOf(frontId + 1)].userName));
                        this.player6name.text = totalPlayers[chairIdArray.indexOf(frontId + 1)].userName;
                    }
                    else {
                        this.adjustText(this.player6name, totalPlayers[chairIdArray.indexOf(frontId + 1)].userName);
                    }
                    // this.player6name.setFontSize(this.adjustTextFontSize(totalPlayers[chairIdArray.indexOf(frontId + 1)].userName));
                    // this.player6name.text = totalPlayers[chairIdArray.indexOf(frontId + 1)].userName;
                    this.model.playerInGameData.push({ userId: totalPlayers[chairIdArray.indexOf(frontId + 1)].userId, chairId: totalPlayers[chairIdArray.indexOf(frontId + 1)].chairId, seat: 6, x: (this.game.scale.width / 40) * 31.5, y: (this.game.scale.height / 40) * 17, playerX: this.player6.x, playerY: this.player6.y, sprite: "timer_R" });
                    if (this.model.chairId < this.playerCount) {
                        this.player2Group.setVisible(true);
                        if (totalPlayers[chairIdArray.indexOf(this.model.chairId + 1)].userName.length < 15) {
                            this.player2name.setFontSize(this.adjustTextFontSize(totalPlayers[chairIdArray.indexOf(this.model.chairId + 1)].userName));
                            this.player2name.text = totalPlayers[chairIdArray.indexOf(this.model.chairId + 1)].userName;
                        }
                        else {
                            this.adjustText(this.player2name, totalPlayers[chairIdArray.indexOf(this.model.chairId + 1)].userName);
                        }
                        // this.player2name.setFontSize(this.adjustTextFontSize(totalPlayers[chairIdArray.indexOf(this.model.chairId + 1)].userName));
                        // this.player2name.text = totalPlayers[chairIdArray.indexOf(this.model.chairId + 1)].userName;
                        this.model.playerInGameData.push({ userId: totalPlayers[chairIdArray.indexOf(this.model.chairId + 1)].userId, chairId: totalPlayers[chairIdArray.indexOf(this.model.chairId + 1)].chairId, seat: 2, playerX: this.player2.x, playerY: this.player2.y, sprite: "timer_L" });
                    }
                    else {
                        this.player2Group.setVisible(true);
                        if (totalPlayers[chairIdArray.indexOf(1)].userName.length < 15) {
                            this.player2name.setFontSize(this.adjustTextFontSize(totalPlayers[chairIdArray.indexOf(1)].userName));
                            this.player2name.text = totalPlayers[chairIdArray.indexOf(1)].userName;
                        }
                        else {
                            this.adjustText(this.player2name, totalPlayers[chairIdArray.indexOf(1)].userName);
                        }
                        // this.player2name.setFontSize(this.adjustTextFontSize(totalPlayers[chairIdArray.indexOf(1)].userName));
                        // this.player2name.text = totalPlayers[chairIdArray.indexOf(1)].userName;
                        this.model.playerInGameData.push({ userId: totalPlayers[chairIdArray.indexOf(chairIdArray.indexOf(1))].userId, chairId: totalPlayers[chairIdArray.indexOf(1)].chairId, seat: 2, x: (this.game.scale.width / 40) * 8.5, y: (this.game.scale.height / 40) * 17, playerX: this.player2.x, playerY: this.player2.y, sprite: "timer_L" });
                    }
                }
                // console.log(
                //   "here is the player in game data",
                //   this.model.playerInGameData
                // );
                break;
            case 4:
                // alert("hello");
                for (let i = 0; i < chairIdArray.length; i++) {
                    if (this.model.chairId < chairIdArray[i]) {
                        let obj = this.player_Assets[chairIdArray[i] - this.model.chairId];
                        console.log("object details", obj);
                        obj.children.entries.forEach((element) => {
                            // console.log(
                            //   "inside the element",
                            //   element.texture.type,
                            //   element,
                            //   element.texture
                            // );
                            if (element.type == "Text") {
                                console.log("inside the element texture", obj);
                                obj.setVisible(true);
                                element.text = totalPlayers[i].userName;
                            }
                        });
                    }
                    else {
                        let obj = this.player_Assets[5 - (this.model.chairId - chairIdArray[i])];
                        console.log("object details", obj);
                        obj.children.entries.forEach((element) => {
                            // console.log(
                            //   "inside the element",
                            //   element.texture.type,
                            //   element,
                            //   element.texture
                            // );
                            if (element.type == "Text") {
                                console.log("inside the element texture", obj);
                                obj.setVisible(true);
                                element.text = totalPlayers[i].userName;
                            }
                        });
                    }
                }
                break;
            case 5:
                for (let i = 0; i < chairIdArray.length; i++) {
                    if (this.model.chairId < chairIdArray[i]) {
                        let obj = this.player_Assets[chairIdArray[i] - this.model.chairId];
                        console.log("object details", obj);
                        obj.children.entries.forEach((element) => {
                            // console.log(
                            //   "inside the element",
                            //   element.texture.type,
                            //   element,
                            //   element.texture
                            // );
                            if (element.type == "Text") {
                                console.log("inside the element texture", obj);
                                obj.setVisible(true);
                                element.text = totalPlayers[i].userName;
                            }
                        });
                    }
                    else {
                        let obj = this.player_Assets[6 - (this.model.chairId - chairIdArray[i])];
                        console.log("object details", obj);
                        obj.children.entries.forEach((element) => {
                            // console.log(
                            //   "inside the element",
                            //   element.texture.type,
                            //   element,
                            //   element.texture
                            // );
                            if (element.type == "Text") {
                                console.log("inside the element texture", obj);
                                obj.setVisible(true);
                                element.text = totalPlayers[i].userName;
                            }
                        });
                    }
                }
                break;
        }
    }
    animateDrawToTossCards(card1, card2, x, y, id) {
        let self = this;
        this.tweens.add({
            targets: card1,
            x: x,
            y: y,
            duration: 300,
            ease: 'Linear',
            // scaleY,
            onComplete: () => {
                this.flip(card1, card2, id);
            }
        });
    }
    flip(card1, card2, id) {
        // console.log("Inside Flip Twen >>> ", card1, card2)
        let tween1 = this.tweens.add({
            targets: card1,
            scaleX: 0,
            duration: 200,
            ease: 'Linear',
            onComplete: () => {
                // console.log("Tween 1 Completed");
                card2.setAlpha(1);
                let tween2 = this.tweens.add({
                    targets: card2,
                    duration: 200,
                    ease: 'Linear',
                    onComplete: () => {
                        card1.destroy();
                        card1 = null;
                        console.log("Tween 2 Completed", card1, card2);
                        setTimeout(() => {
                            this.animateWinnerTossCard(card2, id);
                        }, 500);
                    }
                });
            }
        });
    }
}


/***/ }),

/***/ "W4b6":
/*!******************************************************************!*\
  !*** ./src/app/game/rummyManger/phaserscreen/rummyGameScreen.ts ***!
  \******************************************************************/
/*! exports provided: rummyGameScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rummyGameScreen", function() { return rummyGameScreen; });
/* harmony import */ var _rummyTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rummyTable */ "Vr47");
/* harmony import */ var _rummyCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rummyCard */ "vecJ");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser */ "1O+K");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rummyButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rummyButtons */ "iROo");
/* harmony import */ var _rummyWinScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rummyWinScreen */ "/0nx");
/* harmony import */ var _declareRummy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./declareRummy */ "LS6l");
/* harmony import */ var _rummyHands__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rummyHands */ "uqNn");
/* harmony import */ var _rummySound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rummySound */ "FbAC");
/* harmony import */ var _rummyTimer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rummyTimer */ "49QP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_modal_modalLocator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modal/modalLocator */ "rhab");
/* harmony import */ var _services_rummysocketconnection_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/rummysocketconnection.service */ "ss3T");












class rummyGameScreen extends phaser__WEBPACK_IMPORTED_MODULE_2__["Scene"] {
    constructor(model, rummySocket) {
        super({ key: 'GameScreen' });
        this.model = model;
        this.rummySocket = rummySocket;
        this.soundChange = false;
        console.log('the game screen');
    }
    ngAfterViewInit() {
        // this.progressBar = document.getElementsByClassName('progress-value') as HTMLCollectionOf<HTMLElement>
    }
    preload() {
        //Background
        //    table backbround(Check if the other two are required? )
        this.load.plugin('rexperspectiveimageplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexperspectiveimageplugin.min.js', true);
        //  Game screen objects (Common Assets)
        this.load.image('back', 'assets/Common/Back_Button.png');
        // this.load.image('other_profile', 'assets/Common/Pofile_Image_Display.png')
        // this.load.image('own_profile', 'assets/Common/Profile_Image.png')
        //cardss,h,c,d
        this.load.image('card', 'assets/Cards/Card_Back_Red.png');
        this.load.image('-1', 'assets/Cards/Card_Back_Red.png');
        this.load.image('card_bg', 'assets/Cards/Card_Container.png');
        this.load.image('0', 'assets/Cards/2_clubs.png');
        this.load.image('1', 'assets/Cards/2_diamonds.png');
        this.load.image('2', 'assets/Cards/2_hearts.png');
        this.load.image('3', 'assets/Cards/2_spades.png');
        this.load.image('4', 'assets/Cards/3_clubs.png');
        this.load.image('5', 'assets/Cards/3_diamonds.png');
        this.load.image('6', 'assets/Cards/3_hearts.png');
        this.load.image('7', 'assets/Cards/3_spades.png');
        this.load.image('8', 'assets/Cards/4_clubs.png');
        this.load.image('9', 'assets/Cards/4_diamonds.png');
        this.load.image('10', 'assets/Cards/4_hearts.png');
        this.load.image('11', 'assets/Cards/4_spades.png');
        this.load.image('12', 'assets/Cards/5_clubs.png');
        this.load.image('13', 'assets/Cards/5_diamonds.png');
        this.load.image('14', 'assets/Cards/5_hearts.png');
        this.load.image('15', 'assets/Cards/5_spades.png');
        this.load.image('16', 'assets/Cards/6_clubs.png');
        this.load.image('17', 'assets/Cards/6_diamonds.png');
        this.load.image('18', 'assets/Cards/6_hearts.png');
        this.load.image('19', 'assets/Cards/6_spades.png');
        this.load.image('20', 'assets/Cards/7_clubs.png');
        this.load.image('21', 'assets/Cards/7_diamonds.png');
        this.load.image('22', 'assets/Cards/7_hearts.png');
        this.load.image('23', 'assets/Cards/7_spades.png');
        this.load.image('24', 'assets/Cards/8_clubs.png');
        this.load.image('25', 'assets/Cards/8_diamonds.png');
        this.load.image('26', 'assets/Cards/8_hearts.png');
        this.load.image('27', 'assets/Cards/8_spades.png');
        this.load.image('28', 'assets/Cards/9_clubs.png');
        this.load.image('29', 'assets/Cards/9_diamonds.png');
        this.load.image('30', 'assets/Cards/9_hearts.png');
        this.load.image('31', 'assets/Cards/9_spades.png');
        this.load.image('32', 'assets/Cards/10_clubs.png');
        this.load.image('33', 'assets/Cards/10_diamonds.png');
        this.load.image('34', 'assets/Cards/10_hearts.png');
        this.load.image('35', 'assets/Cards/10_spades.png');
        this.load.image('36', 'assets/Cards/J_clubs.png');
        this.load.image('37', 'assets/Cards/J_diamonds.png');
        this.load.image('38', 'assets/Cards/J_hearts.png');
        this.load.image('39', 'assets/Cards/J_spades.png');
        this.load.image('40', 'assets/Cards/Q_clubs.png');
        this.load.image('41', 'assets/Cards/Q_diamonds.png');
        this.load.image('42', 'assets/Cards/Q_hearts.png');
        this.load.image('43', 'assets/Cards/Q_spades.png');
        this.load.image('44', 'assets/Cards/K_clubs.png');
        this.load.image('45', 'assets/Cards/K_diamonds.png');
        this.load.image('46', 'assets/Cards/K_hearts.png');
        this.load.image('47', 'assets/Cards/K_spades.png');
        this.load.image('48', 'assets/Cards/A_clubs.png');
        this.load.image('49', 'assets/Cards/A_diamonds.png');
        this.load.image('50', 'assets/Cards/A_hearts.png');
        this.load.image('51', 'assets/Cards/A_spades.png');
        //Rummy Assets
        this.load.image("Background", "assets/Rummy/Rummy_BG.jpg");
        this.load.image("rummy_table", "assets/Rummy/Table.png");
        //Profile Assets
        //Own Profile Base
        this.load.image('player_detail', 'assets/Rummy/Profile/PlayerProfile_Base.png');
        // Left Opponent Base Profile
        this.load.image('other_detail_L', 'assets/Rummy/Profile/OtherProfile_Base_L.png');
        // Right Opponent Base Profile
        this.load.image('other_detail_R', 'assets/Rummy/Profile/OtherProfile_Base_R.png');
        //Timer Assets
        //Game Header Timer
        this.load.image('game_timer', 'assets/Rummy/Timer/MainTimer_Base.png');
        //Game Header Timer Icon
        this.load.image('timer_icon', 'assets/Rummy/Timer/Timer_Icon.png');
        // Left Opponent Timer Base
        this.load.image('player_timer_L', 'assets/Rummy/Timer/Player_Timer_L.png');
        // Right Opponent Timer Base
        this.load.image('player_timer_R', 'assets/Rummy/Timer/Player_Timer_R.png');
        //Buttons Assets
        //Declare Disable Button
        this.load.image('declare_disable', 'assets/Rummy/Buttons/Declare_Disable.png');
        //Declare Enable Button
        this.load.image('declare_enable', 'assets/Rummy/Buttons/Declare_Enable.png');
        //Discard Disable Button
        this.load.image('discard_disable', 'assets/Rummy/Buttons/Discard_Disable.png');
        //Discard Disable Button
        this.load.image('discard_enable', 'assets/Rummy/Buttons/Discard_Enable.png');
        //Drop Button
        this.load.image('drop', 'assets/Rummy/Buttons/DropCard_Placeholder.png');
        //Sort Button
        this.load.image('sort_card', 'assets/Rummy/Buttons/SortButton.png');
        //Other Assets
        //Setting Background Image
        this.load.image('setting_bg', 'assets/Rummy/Settings_Base.png');
        //Setting Icon
        this.load.image('setting', 'assets/Rummy/Settings_Icon.png');
        this.load.image('group_type_text_bg', 'assets/Rummy/Card_Set_Base.png');
        this.load.image('chip', "assets/Rummy/Chip.png");
        this.load.image('declare_bg', "assets/Rummy/RummyDeclared_Popup.png");
        //Avatar Icons
        this.load.image('avatar1', 'assets/Avatar/P1.png');
        this.load.image('avatar2', 'assets/Avatar/P2.png');
        this.load.image('avatar3', 'assets/Avatar/P3.png');
        this.load.image('avatar4', 'assets/Avatar/P4.png');
        this.load.image('avatar5', 'assets/Avatar/You.png');
        //Loading Sounds
        this.load.audio("button_click", "assets/Rummy/Sounds/Button Click.mp3");
        this.load.audio("card_delt", "assets/Rummy/Sounds/Card Delt.mp3");
        this.load.audio("card_draw", "assets/Rummy/Sounds/Card Draw.mp3");
        this.load.audio("card_discard", "assets/Rummy/Sounds/Throw Card.mp3");
        this.load.audio("card_slide", "assets/Rummy/Sounds/cardSlide.mp3");
        this.load.audio("rummyBackground", "assets/Rummy/Sounds/rummyBackground.mp3");
        this.load.audio("timer_sound", "assets/Rummy/Sounds/Timer Countdown.mp3");
        //SpriteSheet
        this.load.atlas('timer_L', 'assets/Rummy/Timer/RummyTimer_Sprite_L.png', 'assets/Rummy/Timer/RummyTimer_Sprite_L.json');
        this.load.atlas('timer_R', 'assets/Rummy/Timer/RummyTimer_Sprite_R.png', 'assets/Rummy/Timer/RummyTimer_Sprite_R.json');
    }
    create() {
        var background = this.add.image(this.game.scale.width / 2, this.game.scale.height / 2, "Background").setOrigin(0.5, 0.5);
        background.setScale(this.game.scale.width / background.width, this.game.scale.height / background.height); //Loading Sounds
        this.loadSound();
        //Loading Table
        this.loadTable();
        //Loading Cards
        this.loadCards();
        //loading buttons
        this.loadButtons();
        //loading rummyhands
        this.loadHands();
        //Loading Game Timer
        this.loadTimer();
        //declare Rummy
        this.declareRummy();
        //Loading Winscreen
        this.loadWinScreen();
        //Loading Game
        this.initializeGame();
    }
    loadTable() {
        let key = "rummyTable";
        let table = new _rummyTable__WEBPACK_IMPORTED_MODULE_0__["rummyTable"](key, this.rummyGameComponent, this.rummySocket, this.model);
        this.scene.add(key, table, true);
    }
    loadTimer() {
        let key = "rummyTimer";
        let table = new _rummyTimer__WEBPACK_IMPORTED_MODULE_8__["rummyTimer"](key, this.rummyGameComponent, this.rummySocket, this.model);
        this.scene.add(key, table, true);
    }
    loadHands() {
        let key = "rummyHands";
        let hands = new _rummyHands__WEBPACK_IMPORTED_MODULE_6__["rummyHands"](key, this.rummyGameComponent, this.rummySocket, this.model);
        this.scene.add(key, hands, true);
    }
    loadCards() {
        let key = "rummyCards";
        let table = new _rummyCard__WEBPACK_IMPORTED_MODULE_1__["rummyCards"](key, this.rummyGameComponent, this.rummySocket, this.model);
        this.scene.add(key, table, true);
    }
    loadButtons() {
        let key = "rummyButtons";
        let button = new _rummyButtons__WEBPACK_IMPORTED_MODULE_3__["rummyButtons"](key, this.rummyGameComponent, this.rummySocket, this.model);
        this.scene.add(key, button, true);
    }
    declareRummy() {
        let key = "declareRummy";
        let button = new _declareRummy__WEBPACK_IMPORTED_MODULE_5__["declareRummy"](key, this.rummyGameComponent, this.rummySocket, this.model);
        this.scene.add(key, button, true);
    }
    loadWinScreen() {
        let key = "WinScreen";
        let winscreen = new _rummyWinScreen__WEBPACK_IMPORTED_MODULE_4__["rummyWinScreen"](key, this.rummyGameComponent, this.rummySocket, this.model);
        this.scene.add(key, winscreen, true);
    }
    loadSound() {
        let key = "rummySound";
        let winscreen = new _rummySound__WEBPACK_IMPORTED_MODULE_7__["rummySound"](key, this.rummyGameComponent, this.rummySocket, this.model);
        this.scene.add(key, winscreen, true);
    }
    initializeGame() {
        this.rummyGameComponent.connectServer();
    }
}
rummyGameScreen.ɵfac = function rummyGameScreen_Factory(t) { return new (t || rummyGameScreen)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_modal_modalLocator__WEBPACK_IMPORTED_MODULE_10__["ModelViewLocator"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_rummysocketconnection_service__WEBPACK_IMPORTED_MODULE_11__["RummysocketconnectionService"])); };
rummyGameScreen.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: rummyGameScreen, factory: rummyGameScreen.ɵfac });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading/loading.component */ "f/hT");
/* harmony import */ var _mainmenu_mainmenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainmenu/mainmenu.component */ "69cM");
/* harmony import */ var _game_rummyManger_rummy_setting_rummy_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/rummyManger/rummy-setting/rummy-setting.component */ "Zm/I");
/* harmony import */ var _game_rummyManger_rummy_help_rummy_help_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/rummyManger/rummy-help/rummy-help.component */ "A1N6");
/* harmony import */ var _game_rummyManger_rummy_setand_sequence_rummy_setand_sequence_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/rummyManger/rummy-setand-sequence/rummy-setand-sequence.component */ "+u7z");
/* harmony import */ var _game_rummyManger_rummy_rummy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game/rummyManger/rummy/rummy.component */ "rqNU");
/* harmony import */ var _game_rummyManger_rummy_result_rummy_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game/rummyManger/rummy-result/rummy-result.component */ "9Yro");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"],
        _mainmenu_mainmenu_component__WEBPACK_IMPORTED_MODULE_4__["MainmenuComponent"],
        _game_rummyManger_rummy_setting_rummy_setting_component__WEBPACK_IMPORTED_MODULE_5__["RummySettingComponent"],
        _game_rummyManger_rummy_help_rummy_help_component__WEBPACK_IMPORTED_MODULE_6__["RummyHelpComponent"],
        _game_rummyManger_rummy_setand_sequence_rummy_setand_sequence_component__WEBPACK_IMPORTED_MODULE_7__["RummySetandSequenceComponent"],
        _game_rummyManger_rummy_rummy_component__WEBPACK_IMPORTED_MODULE_8__["RummyComponent"],
        _game_rummyManger_rummy_result_rummy_result_component__WEBPACK_IMPORTED_MODULE_9__["RummyResultComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "Zm/I":
/*!***************************************************************************!*\
  !*** ./src/app/game/rummyManger/rummy-setting/rummy-setting.component.ts ***!
  \***************************************************************************/
/*! exports provided: RummySettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RummySettingComponent", function() { return RummySettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_modal_modalLocator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modal/modalLocator */ "rhab");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function RummySettingComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RummySettingComponent_div_11_Template_label_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setSound(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RummySettingComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RummySettingComponent_div_12_Template_label_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.setSound(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RummySettingComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RummySettingComponent_div_18_Template_label_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.setMusic(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RummySettingComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RummySettingComponent_div_19_Template_label_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.setMusic(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RummySettingComponent {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
    }
    closeResult() {
        this.modal.settingButton = false;
    }
    openSetandSequence() {
        this.modal.showSetandSequence = true;
        this.modal.settingButton = false;
    }
    openHelp() {
        this.modal.showHelp = true;
        this.modal.settingButton = false;
    }
    setSound() {
        this.modal.isSoundOn = !this.modal.isSoundOn;
        this.modal.isSoundChange = true;
    }
    setMusic() {
        this.modal.isMusicOn = !this.modal.isMusicOn;
        this.modal.isMusicChange = true;
        // if(this.modal.isSoundOn){
        //   this.rummySound.playGameMusic()
        // }
        // else{
        //   this.rummySound.stopGameMusic();
        // }
        // console.log("here is the sound", this.sound);
    }
}
RummySettingComponent.ɵfac = function RummySettingComponent_Factory(t) { return new (t || RummySettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal_modalLocator__WEBPACK_IMPORTED_MODULE_1__["ModelViewLocator"])); };
RummySettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RummySettingComponent, selectors: [["app-rummy-setting"]], decls: 25, vars: 4, consts: [[1, "help-image"], [1, "closeBtn", 3, "click"], ["src", "/assets/Rummy/Images/Close_Icon.png", "alt", ""], [1, "titleHead"], ["src", "/assets/Rummy/Images/Settings_Title.png"], [1, "audioBlock"], [1, "audioWrap"], [1, "sound-text"], ["src", "/assets/Rummy/Images/Sound_Icon.png"], ["class", "switch", 4, "ngIf"], ["src", "/assets/Rummy/Images/Music_Icon.png"], ["class", "switch", "checked", "", 4, "ngIf"], [1, "buttons-info"], [3, "click"], ["src", "/assets/Rummy/Images/Help_Button.png"], ["src", "/assets/Rummy/Images/Set&Sequence_Button.png"], [1, "switch"], ["type", "checkbox", "checked", "", "name", "sound", "id", "sound"], [1, "on", "txt"], ["for", "sound", 3, "click"], [1, "off", "txt"], ["name", "sound", "id", "sound"], ["type", "checkbox", "name", "music", "id", "music"], ["for", "music", 3, "click"], ["checked", "", 1, "switch"], ["type", "checkbox", "checked", "", "name", "music", "id", "music"]], template: function RummySettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RummySettingComponent_Template_button_click_1_listener() { return ctx.closeResult(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sound");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RummySettingComponent_div_11_Template, 7, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RummySettingComponent_div_12_Template, 7, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RummySettingComponent_div_18_Template, 7, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RummySettingComponent_div_19_Template, 7, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RummySettingComponent_Template_button_click_21_listener() { return ctx.openHelp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RummySettingComponent_Template_button_click_23_listener() { return ctx.openSetandSequence(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modal.isSoundOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.modal.isSoundOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.modal.isMusicOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modal.isMusicOn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins_Medium\";\r\n}\r\n.help-image[_ngcontent-%COMP%] {\r\n  background: url('/assets/Rummy/Images/settings.png') no-repeat center center;\r\n  background-size: 100% 100%;\r\n  height: 85%;\r\n  width: 70vw;\r\n  position: absolute;\r\n  margin: auto;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  \r\n}\r\n.titleHead[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 9vmin;\r\n}\r\n.titleHead[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 30vmin;\r\n}\r\n.closeBtn[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 14%;\r\n  right: 5%;\r\n  background: transparent;\r\n  cursor: pointer;\r\n}\r\n.closeBtn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 3.2vmin;\r\n}\r\n.audioBlock[_ngcontent-%COMP%] {\r\n  margin-top: 11vmin;\r\n}\r\n.audioWrap[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 3vmin;\r\n  \r\n  width: 60vmin;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.audioWrap[_ngcontent-%COMP%]:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.sound-text[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.sound-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 4.2vmin;\r\n  margin-right: 2.8vmin;\r\n}\r\n.sound-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  color: #fcfcfc;\r\n  font-size: 4.5vmin;\r\n  font-weight: 500;\r\n}\r\n.buttons-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  margin-top: 8vmin;\r\n}\r\n.buttons-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  outline: none;\r\n  border: 0;\r\n  background: transparent;\r\n}\r\n.buttons-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 36vmin;\r\n  display: block;\r\n}\r\n.switch[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  position: absolute;\r\n}\r\n.switch[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  background-color: #0b1316;\r\n  width: 12.75vmin;\r\n  height: 4.3vmin;\r\n  display: block;\r\n  border-radius: 50px;\r\n  position: relative;\r\n  transition: 0.5s ease all;\r\n}\r\n.switch[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: block;\r\n  border-radius: 50%;\r\n  width: 4.3vmin;\r\n  height: 4.3vmin;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  transition: 0.5s ease all;\r\n}\r\n.switch[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after {\r\n  background-image: url('/assets/Rummy/Images/RadioButton_Off.png');\r\n  background-position: center;\r\n  background-size: 100% 100%;\r\n  left: auto;\r\n  right: 0;\r\n}\r\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ label[_ngcontent-%COMP%]:after {\r\n  background-image: url('/assets/Rummy/Images/RadioButton_On.png');\r\n  background-position: center;\r\n  background-size: 100% 100%;\r\n  left: 0;\r\n  right: auto;\r\n}\r\n.switch[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {\r\n  font-size: 3.4vmin;\r\n  text-transform: capitalize;\r\n  font-weight: 500;\r\n}\r\n.switch[_ngcontent-%COMP%]   .off[_ngcontent-%COMP%] {\r\n  color: #d3d8eb;\r\n  margin-left: 2vmin;\r\n}\r\n.switch[_ngcontent-%COMP%]   .on[_ngcontent-%COMP%] {\r\n  color: #7b8094;\r\n  margin-right: 2vmin;\r\n}\r\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .off[_ngcontent-%COMP%] {\r\n  color: #7b8094;\r\n}\r\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .on[_ngcontent-%COMP%] {\r\n  color: #d3d8eb;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bW15LXNldHRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEI7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLDRFQUE0RTtFQUM1RSwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2IsU0FBUztFQUNULHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxpRUFBaUU7RUFDakUsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsUUFBUTtBQUNWO0FBRUE7RUFDRSxnRUFBZ0U7RUFDaEUsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQixPQUFPO0VBQ1AsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJydW1teS1zZXR0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXR0aW5nIFNlY3Rpb24gKi9cclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc19NZWRpdW1cIjtcclxufVxyXG5cclxuLmhlbHAtaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9SdW1teS9JbWFnZXMvc2V0dGluZ3MucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgaGVpZ2h0OiA4NSU7XHJcbiAgd2lkdGg6IDcwdnc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICAvKiBib3R0b206IDA7ICovXHJcbn1cclxuXHJcbi50aXRsZUhlYWQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA5dm1pbjtcclxufVxyXG5cclxuLnRpdGxlSGVhZCBpbWcge1xyXG4gIHdpZHRoOiAzMHZtaW47XHJcbn1cclxuXHJcbi5jbG9zZUJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTQlO1xyXG4gIHJpZ2h0OiA1JTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbG9zZUJ0biBpbWcge1xyXG4gIHdpZHRoOiAzLjJ2bWluO1xyXG59XHJcblxyXG4uYXVkaW9CbG9jayB7XHJcbiAgbWFyZ2luLXRvcDogMTF2bWluO1xyXG59XHJcblxyXG4uYXVkaW9XcmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDN2bWluO1xyXG4gIC8qIHdpZHRoOiA0MCU7ICovXHJcbiAgd2lkdGg6IDYwdm1pbjtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5hdWRpb1dyYXA6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnNvdW5kLXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNvdW5kLXRleHQgaW1nIHtcclxuICB3aWR0aDogNC4ydm1pbjtcclxuICBtYXJnaW4tcmlnaHQ6IDIuOHZtaW47XHJcbn1cclxuXHJcbi5zb3VuZC10ZXh0IGgyIHtcclxuICBjb2xvcjogI2ZjZmNmYztcclxuICBmb250LXNpemU6IDQuNXZtaW47XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmJ1dHRvbnMtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXRvcDogOHZtaW47XHJcbn1cclxuXHJcbi5idXR0b25zLWluZm8gYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmJ1dHRvbnMtaW5mbyBidXR0b24gaW1nIHtcclxuICB3aWR0aDogMzZ2bWluO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc3dpdGNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zd2l0Y2ggaW5wdXQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uc3dpdGNoIGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIxMzE2O1xyXG4gIHdpZHRoOiAxMi43NXZtaW47XHJcbiAgaGVpZ2h0OiA0LjN2bWluO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZSBhbGw7XHJcbn1cclxuXHJcbi5zd2l0Y2ggbGFiZWw6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA0LjN2bWluO1xyXG4gIGhlaWdodDogNC4zdm1pbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlIGFsbDtcclxufVxyXG5cclxuLnN3aXRjaCBsYWJlbDphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL1J1bW15L0ltYWdlcy9SYWRpb0J1dHRvbl9PZmYucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZH5sYWJlbDphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL1J1bW15L0ltYWdlcy9SYWRpb0J1dHRvbl9Pbi5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogYXV0bztcclxufVxyXG5cclxuLnN3aXRjaCAudHh0IHtcclxuICBmb250LXNpemU6IDMuNHZtaW47XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnN3aXRjaCAub2ZmIHtcclxuICBjb2xvcjogI2QzZDhlYjtcclxuICBtYXJnaW4tbGVmdDogMnZtaW47XHJcbn1cclxuXHJcbi5zd2l0Y2ggLm9uIHtcclxuICBjb2xvcjogIzdiODA5NDtcclxuICBtYXJnaW4tcmlnaHQ6IDJ2bWluO1xyXG59XHJcblxyXG4uc3dpdGNoIGlucHV0OmNoZWNrZWR+Lm9mZiB7XHJcbiAgY29sb3I6ICM3YjgwOTQ7XHJcbn1cclxuXHJcbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZH4ub24ge1xyXG4gIGNvbG9yOiAjZDNkOGViO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "eh1A":
/*!***********************************!*\
  !*** ./src/app/game/vo/uservo.ts ***!
  \***********************************/
/*! exports provided: UserVO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserVO", function() { return UserVO; });
// import {Constants} from '../constants';
class UserVO {
    constructor(_userId, _userName, _chairId, _zone, _authToken, _startingAmount, _style = "", _communityCard = "", isLoaded = false, playerView = null) {
        // 		//New Variable added to use it as a DTO from connection
        this.changeType = [];
        this.userName = "";
        this.chairId = 0;
        this.zone = "";
        this.authToken = "";
        this.startingAmount = 0;
        this.actualAmount = 0;
        this.maxAmount = 0;
        this.roundTotalAmount = 0;
        this.userId = 0;
        this.status = false;
        this.blind = "";
        this.gameStatus = "";
        this.points = 0;
        this.playCount = 0;
        this.winwinCount = 0;
        this.amountBet = 0;
        this.amountWon = 0;
        this.score = 0;
        this.issuranceBet = 0;
        this.isInsured = true;
        this.isDoubleDown = false;
        this.isDoubleDownTwo = false;
        this.lastAction = "";
        this.lastAmount = 0;
        this.blackJackCards = "";
        this.blackJackCardsTwo = "";
        this.blackJackBetAmount = 0.0;
        this.loadingStarted = false;
        this.blackJackHand = 0;
        this.blackJackHandTwo = 0;
        this.chairId = _chairId;
        this.userId = _userId;
        this.zone = _zone;
        this.userName = _userName;
        this.authToken = _authToken;
        this.startingAmount = _startingAmount;
        this.communityCC = _communityCard;
        //this.winnerSprite=BABYLON.MeshBuilder.CreatePlane("winnerSprite", {width: 120, height: 160}, this.scene);
        //this.winnerSprite.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
        //this.overHeadInfoTimer=new Timer(1000,3);
        //this.overHeadInfoTimer.stop();
        //this.overHeadInfoTimer.addEventListener(TimerEvent.TIMER_COMPLETE, timerDone);
    }
    /**********added by nikhel*******/
    //		private var playerStats:Sprite3D;
    // public oldObject: UserVO;
    // public chatTimer: RAFTimer;
    clearUserTimer(type = "start timer") {
        try {
        }
        catch (e) {
            //				console.log(e);
        }
    }
}


/***/ }),

/***/ "f/hT":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 38, vars: 0, consts: [[1, "help-image"], [1, "reconnect"], [1, "text-align-reconnect"], ["src", "/assets/Rummy/Images/You.png", "alt", "no image", "width", "45px", "height", "45px"], [1, "text-container-title"], [1, "waiting-image"], [1, "text-align-waiting"], [1, "profileImg"], ["src", "/assets/Rummy/Images/P1.png"], [1, "text-container"], ["src", "/assets/Rummy/Images/P2.png"], ["src", "/assets/Rummy/Images/P3.png"], ["src", "/assets/Rummy/Images/P4-5.png"], [1, "imgWrap"], ["src", "/assets/Rummy/Images/WaitingForPlayer_Icon.png"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "YOU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "figure", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Abhi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "figure", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "figure", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "John");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "figure", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Alex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Waiting for Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%]{\r\n    font-family: \"Poppins_Medium\";\r\n \r\n}\r\n.help-image[_ngcontent-%COMP%] {\r\n    background: url('/assets/Rummy/Images/WaitingForPlayer_BG.png') no-repeat center center;\r\n    background-size: 100% 100%;\r\n    height: 100vh;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.waiting-image[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    align-content: space-between;\r\n    width: 100%;\r\n\r\n}\r\n.text-align-waiting[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n\r\n}\r\n.text-align-reconnect[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    margin-bottom: 10vmin;\r\n\r\n}\r\n.text-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: #fcfcfc;\r\n    font-size: 3vmin;\r\n    font-weight: 400;\r\n}\r\n.reconnect[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n.text-container-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: #f7cc1e;\r\n    font-size: 4vmin;\r\n    font-weight:bold;\r\n    text-transform: capitalize;\r\n}\r\n.imgWrap[_ngcontent-%COMP%], .profileImg[_ngcontent-%COMP%]{\r\n    background-color: rgba(0,0,0,0.3803921568627451);\r\n    border-radius: 50%;\r\n    width: 15vmin;\r\n    height: 15vmin;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-sizing: border-box;\r\n}\r\n.profileImg[_ngcontent-%COMP%]{\r\n    border: 0.6vmin solid #101d27;\r\n}\r\n.profileImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n.waiting-image[_ngcontent-%COMP%]   .imgWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 5vmin;\r\n}\r\n.waiting-image[_ngcontent-%COMP%]   .imgWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .profileImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n}\r\n.text-align-reconnect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    margin-bottom: 2vmin;\r\n    width: 18vmin;\r\n    height: 18vmin;\r\n    border: 3px solid #9b4edd;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2Qjs7QUFFakM7QUFDQTtJQUNJLHVGQUF1RjtJQUN2RiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixXQUFXOztBQUVmO0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCOztBQUV6QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGdEQUFnRDtJQUNoRCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0IiLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNfTWVkaXVtXCI7XHJcbiBcclxufVxyXG4uaGVscC1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvUnVtbXkvSW1hZ2VzL1dhaXRpbmdGb3JQbGF5ZXJfQkcucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ud2FpdGluZy1pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4udGV4dC1hbGlnbi13YWl0aW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLnRleHQtYWxpZ24tcmVjb25uZWN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTB2bWluO1xyXG5cclxufVxyXG5cclxuLnRleHQtY29udGFpbmVyIGgzIHtcclxuICAgIGNvbG9yOiAjZmNmY2ZjO1xyXG4gICAgZm9udC1zaXplOiAzdm1pbjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLnJlY29ubmVjdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi50ZXh0LWNvbnRhaW5lci10aXRsZSBoMyB7XHJcbiAgICBjb2xvcjogI2Y3Y2MxZTtcclxuICAgIGZvbnQtc2l6ZTogNHZtaW47XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmltZ1dyYXAgLC5wcm9maWxlSW1ne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjM4MDM5MjE1Njg2Mjc0NTEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDE1dm1pbjtcclxuICAgIGhlaWdodDogMTV2bWluO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnByb2ZpbGVJbWd7XHJcbiAgICBib3JkZXI6IDAuNnZtaW4gc29saWQgIzEwMWQyNztcclxufVxyXG4ucHJvZmlsZUltZyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi53YWl0aW5nLWltYWdlIC5pbWdXcmFwIGltZ3tcclxuICAgIHdpZHRoOiA1dm1pbjtcclxufVxyXG4ud2FpdGluZy1pbWFnZSAuaW1nV3JhcCBpbWcgLC5wcm9maWxlSW1nIGltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4udGV4dC1hbGlnbi1yZWNvbm5lY3QgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnZtaW47XHJcbiAgICB3aWR0aDogMTh2bWluO1xyXG4gICAgaGVpZ2h0OiAxOHZtaW47XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjOWI0ZWRkO1xyXG59Il19 */"] });


/***/ }),

/***/ "iROo":
/*!***************************************************************!*\
  !*** ./src/app/game/rummyManger/phaserscreen/rummyButtons.ts ***!
  \***************************************************************/
/*! exports provided: rummyButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rummyButtons", function() { return rummyButtons; });
/* harmony import */ var _rummy_rummyCardEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rummy/rummyCardEvent */ "yI5g");

class rummyButtons extends Phaser.Scene {
    constructor(handle, gameComp, socket, model) {
        super(handle);
        this.playerCards = [];
        this.yourTable = "Your Turn";
        this.gameComp = gameComp;
        this.socketScv = socket;
        this.model = model;
    }
    initializeConstants() {
        this.GAME_SCALE = this.game.scale.width + (this.game.scale.height * 1.05);
        this.BUTTONS_SIZE = (this.GAME_SCALE) / (30 * 100);
        // this.RIGHT_BUTTONS_SIZE=
    }
    create() {
        this.initializeConstants();
        this.getScenes();
        this.gameSound = this.scene.get("rummySound");
        //Discard Enable Button
        this.discard_enable = this.add.image((this.game.scale.width / 40) * 9, (this.game.scale.height / 40) * 37, 'discard_enable').setScale(this.BUTTONS_SIZE).setInteractive({ cursor: 'pointer' });
        this.discard_enable.on('pointerdown', () => {
            this.gameSound.playGameSound("card_discard");
            this.event = _rummy_rummyCardEvent__WEBPACK_IMPORTED_MODULE_0__["RummyCardEvent"].PLACEDCARD;
            this.input.disable(this.discard_enable);
            this.rummyCardScene.enableCards(false);
            console.log("Lay card Clicked", this.rummyCardScene.cardToDiscard.id);
            this.cardToDiscard = this.rummyCardScene.cardToDiscard;
            this.rummyCardScene.discardCard(this.cardToDiscard);
            this.socketScv.callServerMethod(parseInt(this.event), parseInt(this.cardToDiscard.texture.key));
            this.enableButton(false);
            //   this.discard_enable.setAlpha(0);
            //   this.declare_enable.setAlpha(0);
            //   this.discard_disable.setAlpha(1);
            //   this.declare_disable.setAlpha(1);
        }, this);
        this.input.disable(this.discard_enable);
        //Discard Disable Button
        this.discard_disable = this.add.image((this.game.scale.width / 40) * 9, (this.game.scale.height / 40) * 37, 'discard_disable').setAlpha(1).setScale(this.BUTTONS_SIZE);
        //Declare Rummy Enable Button (this.game.scale.width / 40) * 4, (this.game.scale.height / 40) * 37
        this.declare_enable = this.add.image((this.game.scale.width / 40) * 3.5, (this.game.scale.height / 40) * 37, 'declare_enable').setInteractive({ cursor: 'pointer' }).setScale(this.BUTTONS_SIZE);
        this.declare_enable.on('pointerdown', () => {
            this.gameSound.playGameSound("card_discard");
            this.declareRummy();
        });
        //Declare Rummy Disable Button
        this.declare_disable = this.add.image((this.game.scale.width / 40) * 3.5, (this.game.scale.height / 40) * 37, 'declare_disable').setAlpha(1).setScale(this.BUTTONS_SIZE);
        //Drop Button
        // this.drop = this.add.image((this.game.scale.width / 40) * 32, (this.game.scale.height / 40) * 37, 'drop').setInteractive({ cursor: 'pointer' }).setScale(this.game.scale.width / (25 * 100), this.game.scale.height / (12 * 100));
        //Sort Button
        this.sort = this.add.image((this.game.scale.width / 40) * 36.5, (this.game.scale.height / 40) * 37, 'sort_card').setInteractive({ cursor: 'pointer' }).setScale(this.BUTTONS_SIZE).setAlpha(0);
        // this.sort.visible = false;
        this.sort.on('pointerdown', () => {
            this.socketScv.sortCards();
        });
        this.subscribeToServices();
    }
    enableButton(isTrue) {
        console.log("Inside Enable Button >> ", isTrue);
        if (isTrue) {
            this.discard_enable.setAlpha(1);
            this.declare_enable.setAlpha(1);
            this.discard_disable.setAlpha(0);
            this.declare_disable.setAlpha(0);
        }
        else {
            this.discard_enable.setAlpha(0);
            this.declare_enable.setAlpha(0);
            this.discard_disable.setAlpha(1);
            this.declare_disable.setAlpha(1);
        }
    }
    subscribeToServices() {
        this.subscribeToPlayerAction();
        this.subscribeToCheckPlayerTurn();
        this.subscribleToPlayerTurns();
    }
    declareRummy() {
        const event = _rummy_rummyCardEvent__WEBPACK_IMPORTED_MODULE_0__["RummyCardEvent"].DECLARERUMMY;
        const cardToDiscard = this.rummyCardScene.cardToDiscard;
        if (cardToDiscard) {
            this.rummyCardScene.discardCard(cardToDiscard);
            let playerCards = this.rummyCardScene.playerCards;
            const GroupA = this.rummyCardScene.GroupA;
            const GroupB = this.rummyCardScene.GroupB;
            const GroupC = this.rummyCardScene.GroupC;
            const GroupD = this.rummyCardScene.GroupD;
            const groupsArray = [GroupA, GroupB, GroupC, GroupD];
            let cardsString = '';
            for (let i = 0; i < groupsArray.length; i++) {
                const group = groupsArray[i];
                for (let j = 0; j < group.length; j++) {
                    const card = group[j];
                    if (i > 0 && j === 0) {
                        cardsString = cardsString + '-';
                    }
                    cardsString = cardsString + card.id + ',';
                }
            }
            console.log("declared", cardsString, cardToDiscard.id);
            this.socketScv.callDeclareMethod(parseInt(event), cardsString, cardToDiscard.id);
        }
    }
    subscribeToCheckPlayerTurn() {
        this.socketScv.newDeckCardSO.subscribe((data) => {
            console.log("updateNextDeckCard >> ", data);
            this.rummyCardScene.closeDeckCard = data.card;
        });
        let temp = this.socketScv.callerSo.subscribe((data) => {
            console.log("callerSo>> ", data);
            this.rummyTableScene = this.scene.get('rummmyTable');
            if (this.model.userId === data.userId) {
                this.rummyCardScene.enablePiles(true);
                // this.rummyTableScene.yourturn.visible = true;
            }
            else {
                this.rummyCardScene.enablePiles(false);
                // this.rummyTableScene.yourturn.visible = false;
            }
        });
        this.gameComp.subscriptions.push(temp);
    }
    getScenes() {
        this.rummyCardScene = this.scene.get('rummyCards');
        this.declareRummyScene = this.scene.get('declareRummy');
    }
    subscribleToPlayerTurns() {
        let temp = this.socketScv.callerSo.subscribe((data) => {
            console.log("callerSo>> ", data);
            if (data.userId != this.model.userId) {
                // this.discard_disable.setAlpha(0);
                // this.declare_disable.setAlpha(0);
                // this.discard_enable.setAlpha(1);
                // this.declare_enable.setAlpha(1);
                this.declare_enable.setAlpha(0);
                this.discard_enable.setAlpha(0);
                this.discard_disable.setAlpha(1);
                this.declare_disable.setAlpha(1);
            }
        });
        this.gameComp.subscriptions.push(temp);
    }
    subscribeToPlayerAction() {
        let temp = this.socketScv.playerActionSo.subscribe((data) => {
            console.log("playerActionSo>> ", data);
            if (data.userId != this.model.userId) {
                this.rummyCardScene.animateCardToOpponentPlayers(data.userId, data.card, data.action);
            }
            const action = data.action;
            switch (action) {
                case 'PICK_CARD_FROM_OPENDECK':
                    const cardPickedIndex = this.rummyCardScene.discardCardPile.length - 1;
                    if (data.userId != this.model.userId) {
                        console.log(this.rummyCardScene.discardCardPile);
                        this.rummyCardScene.discardCardPile[cardPickedIndex].destroy();
                    }
                    this.rummyCardScene.discardCardPile.splice(cardPickedIndex, 1);
                    break;
                case 'PLACEDCARD':
                    if (data.userId == this.model.userId) {
                        this.rummyCardScene.addCardToDiscardPile(data.userId, data.card);
                    }
                    else {
                        setTimeout(() => {
                            this.rummyCardScene.addCardToDiscardPile(data.userId, data.card);
                        }, 700);
                    }
                    break;
                case 'DROP':
                    // alert("C")
                    break;
                // this.discard_card_pile.setTexture(data.card)
                case 'DECLARERUMMY':
                    console.log("Declare Rummy Called");
                    // this.showWinner();
                    // this.GameCompleted();
                    break;
            }
        });
        this.gameComp.subscriptions.push(temp);
    }
    showWinner() {
    }
}


/***/ }),

/***/ "rhab":
/*!***************************************!*\
  !*** ./src/app/modal/modalLocator.ts ***!
  \***************************************/
/*! exports provided: ModelViewLocator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelViewLocator", function() { return ModelViewLocator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

//import { AnalyticsGoogleService } from '../services/analyticsgoogle.service';
class ModelViewLocator {
    constructor() {
        this.secure = false;
        this.port = 8081;
        this.roomName = 'public1';
        this.allPlayer = [];
        this.usersVO = [];
        this.chairId = 0;
        this.roomId = 2;
        this.connectionTime = 0;
        this.tournamentId = 0;
        this.pokerTourcards = "";
        this.roomChange = false;
        this.gameType = 'Rummy';
        this.hostPvtBool = false;
        this.myStartAmount = 20000;
        this.gameId = '';
        this.playerInGameData = [];
        this.totalCardsToDistribute = 0;
        this.gameStarted = false;
        this.proValue = 1;
        this.startingAmount = 20000;
        this.rummyRound = 0;
        this.closeHelp = false;
        this.settingButton = false;
        this.SetandSequence = false;
        this.closeButton = false;
        this.showResult = false;
        this.resultData = [];
        this.showHelp = false;
        this.showSetandSequence = false;
        this.isMusicOn = true;
        this.isSoundOn = true;
        this.isSoundChange = false;
        this.isMusicChange = false;
    }
    getUserVoByChairNo(no) {
        console.log("Get UserVo By Chair No >> ", no);
        let userVo;
        for (let user of this.usersVO) {
            if (user.chairId == no) {
                userVo = user;
                break;
            }
        }
        return userVo;
    }
    addUser(user) {
        this.usersVO.push(user);
    }
    getUserVoById(userId) {
        var userVo;
        for (let user of this.usersVO) {
            if (user.userId.toString() == userId) {
                userVo = user;
                break;
            }
        }
        return userVo;
    }
    removeUser(userId) {
        for (let user of this.usersVO) {
            if (user.userId.toString() == userId) {
                this.usersVO.splice(this.usersVO.indexOf(user), 1);
            }
        }
    }
}
ModelViewLocator.ɵfac = function ModelViewLocator_Factory(t) { return new (t || ModelViewLocator)(); };
ModelViewLocator.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModelViewLocator, factory: ModelViewLocator.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rqNU":
/*!***********************************************************!*\
  !*** ./src/app/game/rummyManger/rummy/rummy.component.ts ***!
  \***********************************************************/
/*! exports provided: RummyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RummyComponent", function() { return RummyComponent; });
/* harmony import */ var _phaserscreen_rummyGameScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../phaserscreen/rummyGameScreen */ "W4b6");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "1O+K");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var phaser3_rex_plugins_plugins_perspectiveimage_plugin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser3-rex-plugins/plugins/perspectiveimage-plugin.js */ "/Omk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_modal_modalLocator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modal/modalLocator */ "rhab");
/* harmony import */ var _services_rummysocketconnection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/rummysocketconnection.service */ "ss3T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _rummy_setting_rummy_setting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rummy-setting/rummy-setting.component */ "Zm/I");
/* harmony import */ var _rummy_setand_sequence_rummy_setand_sequence_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rummy-setand-sequence/rummy-setand-sequence.component */ "+u7z");
/* harmony import */ var _rummy_help_rummy_help_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rummy-help/rummy-help.component */ "A1N6");
/* harmony import */ var _rummy_result_rummy_result_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../rummy-result/rummy-result.component */ "9Yro");













function RummyComponent_app_rummy_setting_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-rummy-setting");
} }
function RummyComponent_app_rummy_setand_sequence_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-rummy-setand-sequence");
} }
function RummyComponent_app_rummy_help_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-rummy-help");
} }
function RummyComponent_app_rummy_result_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-rummy-result");
} }
class RummyComponent {
    constructor(rummygameScreen, model, socketScv, router) {
        this.rummygameScreen = rummygameScreen;
        this.model = model;
        this.socketScv = socketScv;
        this.router = router;
        this.rtmpConn = false;
        this.subscriptions = [];
        this.GameConfig = {
            type: phaser__WEBPACK_IMPORTED_MODULE_1__["AUTO"],
            parent: 'game',
            backgroundColor: "#ffffff",
            scale: {
                mode: phaser__WEBPACK_IMPORTED_MODULE_1__["Scale"].FIT,
                autoCenter: phaser__WEBPACK_IMPORTED_MODULE_1__["Scale"].CENTER_BOTH,
                width: window.innerWidth * window.devicePixelRatio,
                height: window.innerHeight * window.devicePixelRatio,
            },
            plugins: {
                global: [
                    {
                        key: "rexPerspectiveImagePlugin",
                        plugin: phaser3_rex_plugins_plugins_perspectiveimage_plugin_js__WEBPACK_IMPORTED_MODULE_2__["default"],
                        start: true,
                    },
                ],
            },
            scene: this.rummygameScreen,
            enableDebug: false,
            physics: {
                default: "arcade",
            },
            banner: true,
        };
    }
    ngOnInit() {
        // this.loadPhaser();
        this.rummygameScreen.rummyGameComponent = this;
        this.game = new phaser__WEBPACK_IMPORTED_MODULE_1__["Game"](this.GameConfig);
        // if (!this.rtmp) {
        //   // this.rtmp = new RummysocketconnectionService(this.model);
        // }
        // this.rtmp = this.rtmp;
        // this.rtmp.host = this.model.serverName;
        // this.rtmp.appName = this.model.gameType;
        // this.rtmp.zone = this.model.zoneName;
        // rummy2D.initialize2DMessage();
    }
    ngAfterViewInit() {
        this.handleRTMPEvents(true);
        // console.log("RomName >> ", this.socketScv.room, roomName)
        // this.socketScv.room = roomName;
        // this.model.roomName = roomName;
    }
    loadPhaser() {
        new phaser__WEBPACK_IMPORTED_MODULE_1__["Game"](this.GameConfig);
    }
    connectServer() {
        console.log("Connect Server Called");
        //if rtmp is not initialized
        if (!this.socketScv)
            return;
        //call to the server
        this.socketScv.connect(this.socketScv.getConnectURL());
    }
    handleRTMPEvents(flag) {
        if (flag) {
            console.log("handleRTMPEvents");
            let temp;
            temp = this.socketScv.connectionSo.subscribe((str) => {
                console.log("Connection So >> ", str);
                this.handleRTMPConnection(str);
            });
            this.subscriptions.push(temp);
            temp = this.socketScv.roomSO.subscribe((data) => {
                console.log("Room So >> ", data);
                this.model.roomId = data.gameid;
                this.model.gameType = data.gameType;
            });
            this.rtmp = this.socketScv;
            temp = this.rtmp.newGameSo.subscribe((data) => {
                console.log("New Game So >> ", data);
                if (data["type"] === "end") {
                    console.log("Game Completed >>> ", data);
                    // this.gameCompleted(data);
                }
                else {
                    this.newGameStart(data);
                }
            });
            this.subscriptions.push(temp);
        }
    }
    handleRTMPConnection(str) {
        if (str === "connected") {
            if (this.model.gameType.indexOf("Tournament") > 0) {
                this.rtmpConn = true;
                //game2D.initialize2DMessage();
            }
            console.log("I am from start game");
            this.startGame();
        }
        if (str === "closed") {
            this.rtmpConn = false;
        }
        if (str === "error") {
            // this.loadingC.isHidden=false;
            console.log("Connection Error!! Back to lobby.");
            this.leaveGame();
            // this.clearGame();
            // this.toLobby();
            // this.rtmpConn = false;
        }
    }
    newGameStart(data) {
        //game2D.rewardVideoBox(false);
        this.model.gameStarted = true;
        this.model.gameId = data.gameid;
        this.model.totalCardsToDistribute = data["numberOfCards"];
        //game2D.removePopMesg();
        if (this.model.proValue != 0) {
            if (this.model.gameType === "Rummy" || this.model.gameType === "Poker") {
                //game2D.clearMessage();
            }
        }
    }
    playerDelete(data) {
        const user = this.model.getUserVoById(data.toString());
        if (user != null && user !== undefined) {
            const chairId = user.chairId;
            this.playerDeleted(user);
            try {
                if (data == this.model.userId) {
                }
            }
            catch (e) { }
        }
    }
    playerDeleted(user) {
        if (user != null && user !== undefined) {
            this.model.removeUser(user.userId.toString());
        }
    }
    startGame() {
        // let map : {[key:string]:string;} = {};
        // map['userId'] = this.model.userId.toString();
        // map['roomId'] = this.model.roomId.toString();
        // map['myStartAmount'] = "40";
        // map['actionS'] = 'checkAndSitPlayer';
        // this.rtmp.socket.onNext(JSON.stringify(map));
        // console.log("player sit action")
        if (this.model.gameType.indexOf("Tournament") < 0) {
            console.log("Hello123 >>>5454 ");
            this.socketScv.checkAndSitPlayer();
        }
        //this.loginChat();
    }
    leaveGame() {
        this.socketScv.deckCardSO.next();
        this.socketScv.roomSO.next();
        this.socketScv.winnerSO.next();
        this.socketScv.looserSO.next();
        this.socketScv.sortedCardSO.next();
        this.socketScv.playTournySO.next();
        this.socketScv.playerList.next();
        this.socketScv.cardBackSO.next();
        this.socketScv.tossSO.next();
        this.socketScv.deckEmptySO.next();
        this.socketScv.newDeckCardSO.next();
        this.socketScv.roomNewSO.next();
        this.socketScv.cardArrangedSO.next();
        this.socketScv.roundInfoSo.next();
        this.socketScv.twinnerSO.next();
        this.socketScv.askToDeclareSO.next();
        this.socketScv.playerListRemove.next();
        this.socketScv.cardDistributedSo.next();
        this.socketScv.distributedSo.next();
        this.socketScv.blindSO.next();
        this.socketScv.varianceSo.next();
        this.socketScv.callerSo.next();
        this.socketScv.userCardsSo.next();
        this.socketScv.newGameSo.next();
        this.socketScv.playerStatusSo.next();
        this.socketScv.tournamentWinnerSo.next();
        this.socketScv.playerActionSo.next();
        this.socketScv.endGameSo.next();
        this.socketScv.buyEventSO.next();
        this.socketScv.eventsSo.next();
        this.socketScv.connectionSo.next();
        this.game.scene.remove('rummyTable');
        this.game.scene.remove('rummyHands');
        this.game.scene.remove('rummyCards');
        this.game.scene.remove('rummyButtons');
        this.game.scene.remove('declareRummy');
        this.game.scene.remove('WinScreen');
        for (let subs of this.subscriptions) {
            subs.unsubscribe();
        }
        this.subscriptions = [];
        this.model.playerInGameData = [];
        this.subscriptions = [];
        this.model.userId = null;
        this.game.destroy(true);
        this.router.navigateByUrl('', { skipLocationChange: false });
        window.location.reload();
    }
}
RummyComponent.ɵfac = function RummyComponent_Factory(t) { return new (t || RummyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_phaserscreen_rummyGameScreen__WEBPACK_IMPORTED_MODULE_0__["rummyGameScreen"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_modal_modalLocator__WEBPACK_IMPORTED_MODULE_4__["ModelViewLocator"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_rummysocketconnection_service__WEBPACK_IMPORTED_MODULE_5__["RummysocketconnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
RummyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RummyComponent, selectors: [["app-rummy"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_phaserscreen_rummyGameScreen__WEBPACK_IMPORTED_MODULE_0__["rummyGameScreen"]])], decls: 4, vars: 4, consts: [[4, "ngIf"]], template: function RummyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RummyComponent_app_rummy_setting_0_Template, 1, 0, "app-rummy-setting", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RummyComponent_app_rummy_setand_sequence_1_Template, 1, 0, "app-rummy-setand-sequence", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RummyComponent_app_rummy_help_2_Template, 1, 0, "app-rummy-help", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, RummyComponent_app_rummy_result_3_Template, 1, 0, "app-rummy-result", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.model.settingButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.model.showSetandSequence);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.model.showHelp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.model.showResult);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _rummy_setting_rummy_setting_component__WEBPACK_IMPORTED_MODULE_8__["RummySettingComponent"], _rummy_setand_sequence_rummy_setand_sequence_component__WEBPACK_IMPORTED_MODULE_9__["RummySetandSequenceComponent"], _rummy_help_rummy_help_component__WEBPACK_IMPORTED_MODULE_10__["RummyHelpComponent"], _rummy_result_rummy_result_component__WEBPACK_IMPORTED_MODULE_11__["RummyResultComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJydW1teS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "ss3T":
/*!****************************************************************!*\
  !*** ./src/app/game/services/rummysocketconnection.service.ts ***!
  \****************************************************************/
/*! exports provided: RummysocketconnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RummysocketconnectionService", function() { return RummysocketconnectionService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _vo_uservo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vo/uservo */ "eh1A");
/* harmony import */ var rx_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rx-dom */ "6BwB");
/* harmony import */ var rx_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rx_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_modal_modalLocator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modal/modalLocator */ "rhab");





// //yugal - '192.168.3.209'
// //harish - '192.168.1.2'
// //tushar -  '172.16.1.133'
class RummysocketconnectionService {
    constructor(model) {
        this.model = model;
        this.host = '192.168.1.6';
        this.appName = 'Rummy';
        this.zone = '';
        this.room = '';
        this.persists = false;
        this.userIdTemp = "";
        this.userCardsTemp = "";
        this.usedPort = false;
        this.connected = false;
        this.partName = '2';
        this.disConnectionInitaited = false;
        this.deckCardSO = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.roomSO = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.winnerSO = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.looserSO = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.sortedCardSO = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.playTournySO = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
        this.playerList = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.cardBackSO = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.tossSO = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.deckEmptySO = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.newDeckCardSO = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.roomNewSO = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.cardArrangedSO = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.roundInfoSo = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.twinnerSO = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.askToDeclareSO = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.playerListRemove = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.cardDistributedSo = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.distributedSo = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.blindSO = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.varianceSo = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.callerSo = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.userCardsSo = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.newGameSo = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.playerStatusSo = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.tournamentWinnerSo = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.playerActionSo = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.endGameSo = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.buyEventSO = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.eventsSo = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.connectionSo = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
    }
    connect(url) {
        var self = this;
        const openObserver = rx_dom__WEBPACK_IMPORTED_MODULE_2__["Observer"].create(function (e) {
            console.log('socket open', e);
            self.connected = true;
            console.log(self.connectionSo);
            self.connectionSo.next("connected");
        });
        const closingObserver = rx_dom__WEBPACK_IMPORTED_MODULE_2__["Observer"].create(function () {
            console.log('socket is about to close');
            self.connected = false;
            self.connectionSo.next("closed");
        });
        this.socket = rx_dom__WEBPACK_IMPORTED_MODULE_2__["DOM"].fromWebSocket(this.getConnectURL(), 'chat', // no protocol
        openObserver, closingObserver);
        self.subscription = self.socket.subscribe((x) => {
            // console.log('hello updateData', x);
            self.connected = true;
            // console.log(x.type);
            // console.log(x.data);
            self.updateData(x);
        }, (e) => {
            console.log('hello123 error');
            self.connected = false;
            if (this.disConnectionInitaited == false) {
                self.connectionSo.next("error");
            }
        }, () => {
            console.log('hello123576 completed');
            self.connected = false;
            if (this.disConnectionInitaited == false) {
                self.connectionSo.next("completed");
            }
        });
        //subscription.complete();
        //subscription.complete();subscription.dispose();  
        return this.socket;
    }
    getConnectURL() {
        let path = '';
        if (this.model.secure) {
            path = 'wss://';
        }
        else {
            path = 'ws://';
        }
        path = path + this.host + ':' + this.model.port + '/' + this.appName + this.zone + '?a=9&room=' + this.model.roomName + '&userid=' + this.model.userId.toString();
        console.log('This is path>>>>>>>> ', path);
        return path;
    }
    updateData(x) {
        const data = JSON.parse(x.data);
        console.log("Rummy Socket Connection >> ", x, data);
        if (data.actionS === 'playerList') {
            console.log("Player Lsit >> ", data);
            if (data.FACE == "shader_girl_pants,blackjeans.jpg" && data.SHOES == "shader_girl_pants,blackjeans.jpg") {
                data.FACE = "shader_girl_face,sharonFace.jpg";
                data.SHOES = "shader_girl_shoes,greenshoe.jpg";
            }
            const participant = new _vo_uservo__WEBPACK_IMPORTED_MODULE_1__["UserVO"](data.userId, data.userName, data.chairId, data.zone, data.authToken, data.startingAmount, data.DAE, data.gender, data.Posture);
            participant.points = data.points;
            participant.score = data.score;
            participant.amountBet = data.amountBet;
            participant.amountWon = data.amountWon;
            participant.winwinCount = data.winwinCount;
            participant.playCount = data.playCount;
            participant.actualAmount = -1;
            const p = [];
            p.push(participant);
            console.log("Particpant received >>>>> ", p);
            this.participantsReceived(p);
        }
        if (data.actionS === 'applyBuyIn') {
            // this.applyBuyIn(data);
        }
        if (data.actionS === 'setUserCards') {
            console.log("SerCards 1");
            console.log(x.data, "xdatttatattata");
            this.setUserCards(data);
        }
        if (data.actionS === 'addNewPrivateRoom') {
            this.eventsSo.next(x.data);
        }
        if (data.actionS === 'gameStarted') {
            console.log("Game Started >> ", data);
            this.roomSO.next(data);
            // this.updateNewGameSharedObject(data);
        }
        if (data.actionS === 'blinds') {
            console.log("Blind >> ", data);
            // this.blindUpdateEventHandler(data);
        }
        if (data.actionS === 'playerStatus') {
            console.log("Updated Player Status Sharerd Object >> ", data);
            // this.updatePlayerStatusSharedObject(data);
        }
        if (data.actionS === 'variance') {
            console.log("Updated Variance Shared Object >> ", data);
            // this.updateVarainceSharedObject(data);
        }
        if (data.actionS === 'cardDistributed') {
            console.log("Card Distribution >> ", data);
            // this.updateCardDistributedSharedObject(data);
        }
        if (data.actionS === 'updateUserCardDistributed') {
            console.log("Distribution Shared Object >> ", data);
            // this.distributedSharedObject(data);
        }
        if (data.actionS === 'sitPlayer') {
            console.log("Sit Player >> ", data.result);
            // this.isSited(data.result);
        }
        if (data.actionS === 'disableRoom') {
            this.eventsSo.next(x.data);
        }
        if (data.actionS === 'setInGamePlayers') {
            //var roomUpdateEvent:GameRoomEvent = new GameRoomEvent(GameRoomEvent.ROOMUPDATED,rooms);
            this.eventsSo.next(x.data);
        }
        if (data.actionS === 'caller') {
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>datacallerrrrr", data);
            this.updateCallerSharedObject(data);
        }
        if (data.actionS === 'playerAction') {
            this.updatePlayerActionSharedObject(data);
        }
        if (data.actionS === 'playerTournamentRank') {
            this.updateTournamentWinnerSharedObject(data);
        }
        if (data.actionS === 'playerListRemove') {
            this.playerListRemove.next(data.playerId);
        }
        if (data.actionS === "askGameChoice") {
            //dispatchEvent(new PlayerCardEvent(PlayerCardEvent.ASK_GAME,userId));
            this.eventsSo.next(x.data);
        }
        if (data.actionS === 'winner') {
            console.log("the winner is ", data);
            this.updateWinnerSharedObject(data);
        }
        if (data.actionS === 'tournamentWinners') {
            this.updateTournamentWinnerSharedObject(data);
        }
        if (data.actionS === 'deck') {
            console.log("Deck ActionSo >> ", data);
            this.updateDeckSharedObject(data);
        }
        if (data.actionS === 'sortCardsR') {
            console.log("Sort Card ActionSo >> ", data);
            this.sortedCardsArray(data.cards);
        }
        if (data.actionS === 'declareRummy') {
            console.log("declare my rummy data is ", data);
            this.declareRummy(data);
        }
        if (data.actionS === 'looser') {
            console.log("the loser is ", data);
            this.updateLooserSharedObject(data);
        }
        if (data.actionS === 'drop') {
            this.updateCardBackSharedObject(data);
        }
        if (data.actionS === 'toss') {
            console.log("Toss Action >> ", data);
            this.updateTossSharedObject(data);
        }
        if (data.actionS === 'deckEmpty') {
            console.log("Deck Empty >> ", data);
            this.updateDeckEmptySharedObject(data);
        }
        if (data.actionS === 'newCloseCard') {
            this.updateNewDeckCardSharedObject(data);
        }
        if (data.actionS === 'cardArranged') {
            console.log("Card Arranged >> ", data);
            this.updateCardArrangedSharedObject(data);
        }
        if (data.actionS === 'checkAndSitPlayerR') {
            console.log("Check and Sit Palyer R >> ", data);
            this.isCheckSited(data);
        }
        if (data.actionS === 'roomNew') {
            this.updateRoomNewSharedObject(data);
        }
        if (data.actionS === 'roundInfo') {
            console.log("Round Info >>> ", data);
            this.updateRoundInfoSharedObject(data);
        }
        if (data.actionS === 'tournamentWinners') {
            this.updateTournamentWinnerSharedObject(data);
        }
    }
    participantsReceived(participants) {
        let map = {};
        map['userId'] = participants.userId;
        map['userName'] = participants.userName;
        map['chairId'] = participants.chairId;
        console.log("Participant Function >>> ", participants, this.model.usersVO);
        for (let participant of participants) {
            let exist = false;
            let userChanged;
            // console.log("")
            for (let userVo of this.model.usersVO) {
                console.log(participant.userId, " comparing ", userVo.userId);
                if (participant.userId === userVo.userId) {
                    exist = true;
                    userChanged = userVo;
                    break;
                }
            }
            console.log("Changed User ", exist);
            if (exist) {
                const part = participant;
                userChanged.userId = part.userId;
                userChanged.chairId = part.chairId;
                userChanged.zone = part.zone;
                userChanged.authToken = part.authToken;
                userChanged.startingAmount = part.startingAmount;
                userChanged.points = part.points;
                userChanged.score = part.score;
                userChanged.amountBet = part.amountBet;
                userChanged.amountWon = part.amountWon;
                userChanged.winwinCount = part.winwinCount;
                userChanged.playCount = part.playCount;
                //g = part.getZipName();
                //var userEvent:UserEvent=new UserEvent(UserEvent.CHANGE,participant.name);
                //userEvent=userChanged;
                //userEvent.zipName = part.getZipName();	
                //console.log\("Sending");
                console.log("Player List >> ", userChanged);
                this.playerList.next(userChanged);
            }
            else {
                const user = participant;
                const user1 = this.model.getUserVoByChairNo(user.chairId);
                if (user1) {
                    if (user1.userId = user.userId) {
                        this.playerListRemove.next(user.userId);
                    }
                }
                if (user.userId == this.model.userId) {
                    this.model.chairId = user.chairId;
                }
                this.model.addUser(user);
                user.changeType = null;
                console.log("Player List 277 >> ", user, this.model.usersVO);
                if (user.userId == this.model.userId) {
                    this.model.chairId = user.chairId;
                }
                this.playerList.next(user);
            }
        }
    }
    // public setUserCards(data: any): void {
    //   // var uservo:UserVO = this.model.getUserVoById(this.model.userId.toString())
    //   //model.noPlayerCards=false;
    //   this.userIdTemp = data.userId;
    //   this.userCardsTemp = data.cards;
    //   // this.model.pokerTourcards = data.cards;
    //   var userId: number = parseInt(data.userId);
    //   let map: { [key: string]: string } = {};
    //   map['userId'] = data.userId;
    //   map['cards'] = data.cards;
    //   console.log('Set cards ' + map['userId']);
    //   console.log('Set cards ' + data.cards);
    //   // alert('card is getting distributed');
    //   this.cardDistributedSo.next(map);
    // }
    callServerMethod(action, card) {
        const map = {};
        map['userId'] = this.model.userId.toString();
        map['roomId'] = this.model.roomId.toString();
        map['chairId'] = this.model.chairId.toString();
        map['action'] = action.toString();
        map['cardOrdinal'] = card.toString();
        map['actionS'] = 'userCall2';
        this.socket.onNext(JSON.stringify(map));
    }
    updateTournamentWinnerSharedObject(evt) {
        /* var winnerObj:WinnerVO = new WinnerVO();
         winnerObj.userName = winner.userName;
         winnerObj.winAmount = winner.winAmount;
         winnerObj.userId = winner.userId;
         winnerObj.potId = winner.potId;
         winnerObj.startingAmount = winner.startingAmount;
         winnerObj.timeStamp = winner.timeStamp;
         winnerList.push(winnerObj);*/
        this.twinnerSO.next(evt.list);
    }
    callDeclareMethod(action, card, discard) {
        console.log("callDeclareMethod >> ", card);
        const map = {};
        map['userId'] = this.model.userId.toString();
        map['roomId'] = (this.model.roomId).toString();
        map['chairId'] = this.model.chairId.toString();
        map['action'] = action.toString();
        map['cardOrdinal'] = discard;
        map['cardOrdinals'] = card;
        map['actionS'] = 'userDeclareCall2';
        this.socket.onNext(JSON.stringify(map));
    }
    declareMyRummy(card) {
        console.log("Declare My Rummy >> ", card);
        const map = {};
        map['userId'] = this.model.userId.toString();
        map['cards'] = card;
        map['actionS'] = 'declareMyRummy';
        this.socket.onNext(JSON.stringify(map));
    }
    updatePlayerActionSharedObject(player) {
        console.log("updatePlayerActionSharedObject");
        const user = {};
        user.userId = player.userId;
        user.userName = player.userName;
        user.chairId = player.chairId;
        user.timeStamp = player.timeStamp;
        user.action = player.action;
        user.card = player.card;
        switch (player.action) {
            case 'PLACEDCARD':
                user.totalIndex = player.cardIndex;
                this.playerActionSo.next(user);
                console.log("PLACEDCARD");
                break;
            case 'PICK_CARD_FROM_CLOSEDECK':
                user.totalIndex = player.cardIndex;
                user.setIndex = player.setIndex;
                user.listIndex = player.listIndex;
                user.card = player.card;
                console.log("This is close card  " + user.card);
                this.playerActionSo.next(user);
                break;
            case 'PICK_CARD_FROM_OPENDECK':
                user.totalIndex = player.cardIndex;
                user.setIndex = player.setIndex;
                user.listIndex = player.listIndex;
                this.playerActionSo.next(user);
                break;
            case 'DECLARERUMMY':
                this.playerActionSo.next(user);
                break;
            case 'DROP':
                this.playerActionSo.next(user);
                break;
            case 'KICKED':
                this.playerActionSo.next(user);
                break;
        }
        // this.changeTime(parseInt(player.timeStamp, 10));
    }
    updateWinnerSharedObject(evt) {
        console.log("Winner Shared >>> ", evt);
        this.winnerSO.next(evt.list);
    }
    updateLooserSharedObject(evt) {
        console.log("Losser Shared >>> ", evt);
        this.looserSO.next(evt.list);
    }
    updateCardBackSharedObject(player) {
        const user = {};
        user.userId = player.userId;
        user.userName = player.userName;
        user.chairId = player.chairId;
        user.dropCard = player.dropCard;
        // console.log("Drop " + user);
        this.cardBackSO.next(user);
    }
    checkAndSitPlayer() {
        const map = {};
        map['userId'] = this.model.userId.toString();
        map['roomId'] = this.model.roomId.toString();
        map['actionS'] = 'checkAndSitPlayer';
        this.socket.onNext(JSON.stringify(map));
    }
    isCheckSited(res) {
        let alloted = false;
        const time = parseInt(res, 10);
        if (time > 0) {
            alloted = true;
            this.model.connectionTime = time;
        }
    }
    updateTossSharedObject(player) {
        const pObj = {};
        pObj.userId = player.userId;
        pObj.cards = player.card;
        pObj.timeStamp = player.timeStamp;
        this.tossSO.next(pObj);
    }
    updateCallerSharedObject(data) {
        console.log("Updated Caller >> ", data);
        const caller = {};
        caller.userId = data.userId;
        caller.userName = data.userName;
        caller.startingAmount = data.startingAmount;
        caller.chairId = data.chairId;
        caller.timeStamp = data.timeStamp;
        if (data.actualCallAmount) {
            caller.actualAmount = data.actualCallAmount;
        }
        if (data.status) {
            caller.status = data.status;
        }
        if (data.maxAmount) {
            caller.maxAmount = data.maxAmount;
        }
        this.callerSo.next(caller);
    }
    updateDeckEmptySharedObject(player) {
        console.log("Deck Empty Event >> ", player);
        const pObj = {};
        this.deckEmptySO.next(pObj);
    }
    updateNewDeckCardSharedObject(deck) {
        const pObj = {};
        pObj.card = deck.card;
        console.log("This is where it hurts " + pObj.card);
        this.newDeckCardSO.next(pObj);
    }
    updateCardArrangedSharedObject(data) {
        const user1 = {};
        user1.userId = data.userId;
        user1.fromCard = data.fromCard;
        user1.toCard = data.toCard;
        user1.timeStamp = data.timeStamp;
        this.cardArrangedSO.next(user1);
    }
    updateDeckSharedObject(son) {
        const deckCard = {};
        deckCard.joker = son.joker;
        deckCard.openCard = son.openCard;
        deckCard.closeCard = son.closeCard;
        if (son.shuffle === undefined) {
            // deckCard.shuffle = DeckEvent.DECKCARDS;
        }
        else {
            // deckCard.shuffle = DeckEvent.SHUFFLE_CARDS;
        }
        this.deckCardSO.next(deckCard);
    }
    addTournamentPlayer() {
        let map = {};
        map['userId'] = this.model.userId.toString();
        map['roomId'] = this.model.roomId.toString();
        map['tournamentId'] = this.model.tournamentId.toString();
        map['actionS'] = 'playTournament';
        this.socket.onNext(JSON.stringify(map));
    }
    sortCards() {
        const map = {};
        map['userId'] = this.model.userId.toString();
        map['actionS'] = 'sortCards';
        console.log("Socket Sorted >> ", map);
        this.socket.onNext(JSON.stringify(map));
    }
    sortedCardsArray(cardsArray) {
        let array = cardsArray.split(',');
        //console.log(array.splice(0, array.length - 1));
        this.sortedCardSO.next(array.splice(0, array.length - 1));
    }
    setUserCards(data) {
        var uservo = this.model.getUserVoById(this.model.userId.toString());
        //modelLocator.noPlayerCards=false;
        this.userIdTemp = data.userId;
        this.userCardsTemp = data.cards;
        this.model.pokerTourcards = data.cards;
        var userId = parseInt(data.userId);
        let map = {};
        map['userId'] = data.userId;
        map['cards'] = data.cards;
        console.log("Set cards " + map['userId']);
        console.log("Set cards " + data.cards);
        this.cardDistributedSo.next(map);
    }
    makeGroup(cardNumber) {
        const map = {};
        map['userId'] = this.model.userId.toString();
        map['cards'] = cardNumber.substr(0, cardNumber.length - 1);
        map['actionS'] = 'groupCards';
        console.log("Make Group >>> ", map);
        this.socket.onNext(JSON.stringify(map));
    }
    addCardToGroup(cardNumber, toArray, atIndex) {
        const map = {};
        map['userId'] = this.model.userId.toString();
        map['cardOrdinal'] = cardNumber.toString();
        map['toSet'] = toArray.toString();
        map['toIndex'] = atIndex.toString();
        map['actionS'] = 'arrangeCards';
        //this.socket.onNext(JSON.stringify(map));
    }
    declareRummy(data) {
        console.log("Declare Rummy >> ", data);
        /*userId: string,declaredUserId: string*/
        this.askToDeclareSO.next(data);
    }
    updateRoomNewSharedObject(evt) {
        this.model.roomChange = true;
        /*
            dispatchEvent(new GameEvent(GameEvent.SWITCHROOM,game));
         */
        const obj = {};
        obj.switchroom = "";
        this.roomNewSO.next(obj);
    }
    updateRoundInfoSharedObject(data) {
        console.log("In round complete ");
        const roundInfoSO1 = {};
        roundInfoSO1.type = 'roundcomplete';
        this.roundInfoSo.next(roundInfoSO1);
    }
}
RummysocketconnectionService.ɵfac = function RummysocketconnectionService_Factory(t) { return new (t || RummysocketconnectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_modal_modalLocator__WEBPACK_IMPORTED_MODULE_4__["ModelViewLocator"])); };
RummysocketconnectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RummysocketconnectionService, factory: RummysocketconnectionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "uqNn":
/*!*************************************************************!*\
  !*** ./src/app/game/rummyManger/phaserscreen/rummyHands.ts ***!
  \*************************************************************/
/*! exports provided: rummyHands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rummyHands", function() { return rummyHands; });
class rummyHands extends Phaser.Scene {
    constructor(handle, gameComp, socket, model) {
        super(handle);
        this.GroupA = [];
        this.GroupB = [];
        this.GroupC = [];
        this.GroupD = [];
        this.gameComp = gameComp;
        this.socketScv = socket;
        this.model = model;
    }
    create() {
        this.getScenes();
        this.createSetOrSequenceTexts();
    }
    getScenes() {
        this.rummyCardScene = this.scene.get('rummyCards');
    }
    createSetOrSequenceTexts() {
        this.groupAText = this.add.text((this.game.scale.width / 40) * 14.8, (this.game.scale.height / 40) * 18, "", { font: '24px Poppins_Regular', color: '#FFFFFF', }).setFontSize(this.game.scale.width / 500 + "ex").setDepth(50).setOrigin(0.5);
        this.groupBText = this.add.text((this.game.scale.width / 40) * 18.8, (this.game.scale.height / 40) * 18, "", { font: '24px Poppins_Regular', color: '#FFFFFF', }).setFontSize(this.game.scale.width / 500 + "ex").setDepth(50).setOrigin(0.5);
        this.groupCText = this.add.text((this.game.scale.width / 40) * 22.8, (this.game.scale.height / 40) * 18, "", { font: '24px Poppins_Regular', color: '#FFFFFF', }).setFontSize(this.game.scale.width / 500 + "ex").setDepth(50).setOrigin(0.5);
        this.groupDText = this.add.text((this.game.scale.width / 40) * 26.8, (this.game.scale.height / 40) * 18, "", { font: '24px Poppins_Regular', color: '#FFFFFF', }).setFontSize(this.game.scale.width / 500 + "ex").setDepth(50).setOrigin(0.5);
        // this.groupATextRect = this.makeReactangle()
        // console.log("this.groupATextRect",this.groupATextRect)
        // Phaser.Geom.Rectangle.CenterOn(3his.groupATextRect,10,100)
        // console.log("this.groupATextRect",this.groupATextRect)
        // this.graphics.fillRectShape(this.groupATextRect);
        this.textABg = this.add.image(this.game.scale.width / 2, this.game.scale.height / 2, 'group_type_text_bg').setDisplaySize(0, this.game.scale.height / 30).setVisible(false);
        this.textBBg = this.add.image(this.game.scale.width / 2, this.game.scale.height / 2, 'group_type_text_bg').setDisplaySize(0, this.game.scale.height / 30).setVisible(false);
        this.textCBg = this.add.image(this.game.scale.width / 2, this.game.scale.height / 2, 'group_type_text_bg').setDisplaySize(0, this.game.scale.height / 30).setVisible(false);
        this.textDBg = this.add.image(this.game.scale.width / 2, this.game.scale.height / 2, 'group_type_text_bg').setDisplaySize(0, this.game.scale.height / 30).setVisible(false);
    }
    setOrSequence() {
        this.GroupA = this.rummyCardScene.GroupA;
        this.GroupC = this.rummyCardScene.GroupB;
        this.GroupB = this.rummyCardScene.GroupC;
        this.GroupD = this.rummyCardScene.GroupD;
        const arrayGroupsText = [this.groupAText, this.groupBText, this.groupCText, this.groupDText];
        const textBgArray = [this.textABg, this.textBBg, this.textCBg, this.textDBg];
        this.playerCards = this.rummyCardScene.playerCards;
        const CARDS_POSITION_Y = this.rummyCardScene.CARDS_POSITION_Y;
        let group;
        let cardGroup = [];
        const TEXT_Y = CARDS_POSITION_Y - (this.playerCards[0].displayHeight / 1.7);
        let TEXT_X;
        const groupArray = [this.GroupA, this.GroupB, this.GroupC, this.GroupD];
        for (let i = 0; i < groupArray.length; i++) {
            group = groupArray[i];
            for (let j = 0; j < group.length; j++) {
                const card = group[j];
                cardGroup.push(card.id);
                //   card.fx.visible=true;
                //   console.log("card.preFX",card.preFX.list[0].color)
                //   card.fx.color='0xffffff'
            }
            if (group.length > 0) {
                TEXT_X = group[0].x + (Math.abs((group[0].x - group[group.length - 1].x) / 2));
                const validateGroupsResult = this.validateGroups(cardGroup);
                arrayGroupsText[i].text = validateGroupsResult;
                arrayGroupsText[i].y = TEXT_Y;
                arrayGroupsText[i].x = TEXT_X;
                textBgArray[i].x = TEXT_X;
                textBgArray[i].y = TEXT_Y;
                textBgArray[i].displayWidth = Math.abs((group[0].x - group[group.length - 1].x)) + group[0].displayWidth;
                textBgArray[i].setVisible(true);
                this.addGlow(group, validateGroupsResult);
            }
            else {
                arrayGroupsText[i].text = '';
                textBgArray[i].setVisible(false);
            }
            cardGroup = [];
            // arrayGroupsText[i].x = group[Math.abs(group.length/2)].x
        }
    }
    validateGroups(cardGroup = []) {
        const joker_card = this.rummyCardScene.joker_card;
        let joker = joker_card.texture.key;
        joker = parseInt(joker);
        cardGroup.map((cardId) => parseInt(cardId));
        let allJokerCards = [];
        let isPureSequence = true;
        let isPureSet = true;
        let isSequence = true;
        let isSet = true;
        console.log("CARD GROUP---", cardGroup);
        if (cardGroup.length < 3) {
            isPureSequence = false;
            isPureSet = false;
            isSequence = false;
            isSet = false;
        }
        else {
            for (let index = 0; index < 4; index++) {
                let jokerIndex = joker % 4; //1
                allJokerCards.push((index - jokerIndex) + joker);
            }
            console.log("JOKER CARDS---", allJokerCards);
            for (let index = 0; index < cardGroup.length; index++) {
                const element = cardGroup[index];
                cardGroup[index] = parseInt(element);
            }
            for (let i = 1; i < cardGroup.length; i++) {
                if (cardGroup[i] - cardGroup[i - 1] !== 4) {
                    isPureSequence = false;
                    break;
                }
            }
            let tempJoker;
            for (let i = 1; i < cardGroup.length; i++) {
                console.log("cardGroup[i] - cardGroup[i - 1]", cardGroup[i], cardGroup[i - 1], cardGroup[i] - cardGroup[i - 1]);
                if (cardGroup[i] - cardGroup[i - 1] !== 4) {
                    // if (allJokerCards.includes(cardGroup[i]) || allJokerCards.includes(cardGroup[i - 1])) {
                    //     continue;
                    // }
                    // else {
                    //     isSequence = false;
                    //     break;
                    // }
                    console.log("sequence*", allJokerCards, cardGroup[i], cardGroup[i + 1], cardGroup[i - 1]);
                    if (i == 1 && allJokerCards.includes(cardGroup[i - 1])) {
                        if (allJokerCards.includes(cardGroup[i])) {
                            i++;
                        }
                        continue;
                    }
                    else if (i == cardGroup.length - 1 && allJokerCards.includes(cardGroup[i])) {
                        continue;
                    }
                    else if (allJokerCards.includes(cardGroup[i])) {
                        for (let index = i + 1; index < cardGroup.length; index++) {
                            const card = cardGroup[index];
                            if (allJokerCards.includes(card)) {
                                continue;
                            }
                            else {
                                if (cardGroup[index] - cardGroup[i - 1] == ((index - i) + 1) * 4) {
                                    i = index;
                                    break;
                                }
                                else {
                                    isSequence = false;
                                    break;
                                }
                            }
                        }
                        //(cardGroup[i + 1] - cardGroup[i - 1]) === 8 && //2,3,4,j,j,7,8
                        if (isSequence === false) {
                            console.log("sequence*", cardGroup, allJokerCards, cardGroup[i], cardGroup[i + 1], cardGroup[i - 1]);
                            break;
                        }
                        else {
                            continue;
                        }
                    }
                    else {
                        console.log("sequence*", cardGroup, allJokerCards, cardGroup[i], cardGroup[i + 1], cardGroup[i - 1]);
                        isSequence = false;
                        break;
                    }
                }
            }
            cardGroup.sort((a, b) => a - b);
            for (let index = 0; index < cardGroup.length; index++) {
                const element = cardGroup[index];
                cardGroup[index] = parseInt(element);
            }
            console.log("CARD GROUP---", cardGroup, allJokerCards);
            let setNo;
            for (setNo = 4; setNo <= 52; setNo = setNo + 4) {
                if (!allJokerCards.includes(cardGroup[0])) {
                    if (cardGroup[0] < setNo)
                        break;
                }
                else {
                    if (cardGroup[1] && cardGroup[1] < setNo)
                        break;
                }
            }
            for (let index = 0; index < cardGroup.length; index++) {
                const element = cardGroup[index];
                if (element < setNo && element >= setNo - 4)
                    continue;
                else {
                    isPureSet = false;
                    break;
                }
            }
            for (let index = 0; index < cardGroup.length; index++) {
                const element = parseInt(cardGroup[index]);
                console.log("CARD GROUP---", element, setNo);
                if (element < setNo && element >= setNo - 4)
                    continue;
                else {
                    console.log("CARD GROUP---", allJokerCards, element, allJokerCards.indexOf(element), allJokerCards.findIndex(a => a == element));
                    if (allJokerCards.includes(element)) {
                        continue;
                    }
                    else {
                        console.log("CARD GROUP---", isSet);
                        isSet = false;
                        break;
                    }
                }
            }
        }
        console.log("PURE_SEQUENCE:", isPureSequence, "PURE_SET:", isPureSet);
        console.log("SEQUENCE:", isSequence, "SET:", isSet);
        if (isPureSequence) {
            return 'Pure Sequence';
        }
        else if (isPureSet) {
            return 'Set';
        }
        else if (isSequence) {
            return 'Sequence';
        }
        else if (isSet) {
            return 'Set';
        }
        else {
            return 'Invalid';
        }
    }
    addGlow(cardGroup, validateGroupsResult) {
        const colors = { pureSequence: '0xee1c25', sequence: '0xf58225', set: '0x03a45e' };
        for (let index = 0; index < cardGroup.length; index++) {
            const card = cardGroup[index];
            if (card.fx) {
                switch (validateGroupsResult) {
                    case 'Pure Sequence':
                        //  card.preFX.addGlow(colors.sequence,2,2)
                        card.fx.color = colors.pureSequence;
                        card.fx.outerStrength = 2;
                        card.fx.innerStrength = 2;
                        break;
                    case 'Pure Set':
                        card.fx.color = colors.set;
                        card.fx.outerStrength = 2;
                        card.fx.innerStrength = 2;
                        break;
                    case 'Sequence':
                        card.fx.color = colors.sequence;
                        card.fx.outerStrength = 2;
                        card.fx.innerStrength = 2;
                        break;
                    case 'Set':
                        card.fx.color = colors.set;
                        card.fx.outerStrength = 2;
                        card.fx.innerStrength = 2;
                        break;
                    case 'Invalid':
                        card.fx.outerStrength = 0;
                        card.fx.innerStrength = 0;
                        break;
                }
            }
        }
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mainmenu_mainmenu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainmenu/mainmenu.component */ "69cM");
/* harmony import */ var _game_rummyManger_rummy_rummy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/rummyManger/rummy/rummy.component */ "rqNU");
/* harmony import */ var _game_rummyManger_rummy_setting_rummy_setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/rummyManger/rummy-setting/rummy-setting.component */ "Zm/I");
/* harmony import */ var _game_rummyManger_rummy_help_rummy_help_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/rummyManger/rummy-help/rummy-help.component */ "A1N6");
/* harmony import */ var _game_rummyManger_rummy_setand_sequence_rummy_setand_sequence_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/rummyManger/rummy-setand-sequence/rummy-setand-sequence.component */ "+u7z");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading/loading.component */ "f/hT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    { path: 'game', component: _game_rummyManger_rummy_rummy_component__WEBPACK_IMPORTED_MODULE_2__["RummyComponent"] },
    { path: '', component: _mainmenu_mainmenu_component__WEBPACK_IMPORTED_MODULE_1__["MainmenuComponent"] },
    { path: 'setting', component: _game_rummyManger_rummy_setting_rummy_setting_component__WEBPACK_IMPORTED_MODULE_3__["RummySettingComponent"] },
    { path: 'help', component: _game_rummyManger_rummy_help_rummy_help_component__WEBPACK_IMPORTED_MODULE_4__["RummyHelpComponent"] },
    { path: 'rummy-set', component: _game_rummyManger_rummy_setand_sequence_rummy_setand_sequence_component__WEBPACK_IMPORTED_MODULE_5__["RummySetandSequenceComponent"] },
    { path: 'loading', component: _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vecJ":
/*!************************************************************!*\
  !*** ./src/app/game/rummyManger/phaserscreen/rummyCard.ts ***!
  \************************************************************/
/*! exports provided: rummyCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rummyCards", function() { return rummyCards; });
/* harmony import */ var _rummy_rummyCardEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rummy/rummyCardEvent */ "yI5g");
/* harmony import */ var phaser3_rex_plugins_plugins_perspectiveimage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser3-rex-plugins/plugins/perspectiveimage.js */ "Dlaz");


class rummyCards extends Phaser.Scene {
    // draw_text: any; discard_text: any; round: any; joker_text: any;
    constructor(handle, gameComp, socket, model) {
        super(handle);
        this.discardCardPile = [];
        this.cardToDiscard = null;
        // card: any;
        this.playerCards = [];
        this.cardPointerDown = false;
        this.allowCardDrag = false;
        this.GroupA = [];
        this.GroupB = [];
        this.GroupC = [];
        this.GroupD = [];
        this.animatedCardCount = 0;
        this.assestsToDestory = [];
        this.gameComp = gameComp;
        this.socketScv = socket;
        this.model = model;
    }
    initializeVariables() {
        this.rummyTableScene = this.scene.get('rummyTable');
        this.rummyTable = this.rummyTableScene.rummyTable;
        this.gameSound = this.scene.get("rummySound");
        this.GAME_SCALE = this.game.scale.width + (this.game.scale.height);
        this.TABLE_CARD_SIZE_X = (this.game.scale.width / (27 * 100));
        this.TABLE_CARD_SIZE_Y = (this.game.scale.width / (27 * 100));
        this.TABLE_CLOSED_DECK_POSITION = { X: this.game.scale.width / 40 * 18.5, Y: this.rummyTable.y - (this.rummyTable.displayHeight / 16) };
        this.TABLE_OPEN_DECK_POSITION = { X: this.game.scale.width / 40 * 22.5, Y: this.rummyTable.y - (this.rummyTable.displayHeight / 15.5) };
        this.CARD_SIZE_X = (this.GAME_SCALE) / (32 * 100);
        this.CARD_SIZE_Y = (this.GAME_SCALE) / (32 * 100);
        this.CARDS_POSITION_Y = this.rummyTable.y + (this.rummyTable.displayHeight / 4);
        this.CARDS_POSITION_X = this.rummyTable.x - (this.rummyTable.displayWidth / 2.5);
        this.OFFSET_BETWEEN_CARDS = this.game.scale.width / 21;
        this.VERTICAL_DISCARD_OFFSET = this.game.scale.height / 60;
        this.GROUP_OFFSET = this.game.scale.width / 16;
        this.PLAYERS_PROFILE_SIZE = this.GAME_SCALE / (26 * 100);
        this.PLAYER_SCALE = this.GAME_SCALE / (36 * 100);
        this.PLAYER_NAME_SCALE = this.GAME_SCALE / (4 * 100);
        this.PLAYER_COINS_TEXT_SCALE = this.GAME_SCALE / (5 * 100);
        this.PLAYER_COINS_SCALE = this.GAME_SCALE / (25 * 100);
    }
    create() {
        this.initializeVariables();
        console.log("Inside Rummy Card >> ", this.gameComp, this.socketScv, this.model);
        this.textGroup = this.add.group();
        this.draw_text = this.add.text(this.TABLE_CLOSED_DECK_POSITION.X - (this.rummyTable.displayHeight / 20), this.TABLE_CLOSED_DECK_POSITION.Y + (this.rummyTable.displayHeight / 11), "", { font: "40px Poppins_Medium", color: "#000000" }).setAlpha(0.7).setFontSize(this.game.scale.width / 500 + "ex");
        this.discard_text = this.add.text(this.TABLE_OPEN_DECK_POSITION.X - (this.rummyTable.displayHeight / 22), this.TABLE_OPEN_DECK_POSITION.Y + (this.rummyTable.displayHeight / 11), "", { font: "40px Poppins_Medium", color: "#000000" }).setAlpha(0.7).setFontSize(this.game.scale.width / 500 + "ex");
        this.round = this.add.text(this.TABLE_CLOSED_DECK_POSITION.X + (this.rummyTable.displayHeight / 20), this.TABLE_CLOSED_DECK_POSITION.Y - (this.rummyTable.displayHeight / 8), "", { font: "40px Poppins_ExtraBold", color: "#000000" }).setAlpha(0.7).setFontSize(this.game.scale.width / 350 + "ex").setOrigin(0.5);
        this.round_info = this.add.text(this.TABLE_CLOSED_DECK_POSITION.X + (this.rummyTable.displayHeight / 7), this.TABLE_CLOSED_DECK_POSITION.Y - (this.rummyTable.displayHeight / 8), "", { font: "40px Poppins_ExtraBold", color: "#ffffff" }).setAlpha(0.7).setFontSize(this.game.scale.width / 350 + "ex").setOrigin(0.5);
        this.joker_text = this.add.text(this.TABLE_CLOSED_DECK_POSITION.X - (this.rummyTable.displayHeight / 4.8), this.TABLE_CLOSED_DECK_POSITION.Y + (this.rummyTable.displayHeight / 40), "", { font: "40px Poppins_Medium", color: "#000000" }).setAlpha(0.7).setFontSize(this.game.scale.width / 500 + "ex");
        this.joker_text.setRotation(11.1);
        this.textGroup.add(this.draw_text);
        this.textGroup.add(this.discard_text);
        this.textGroup.add(this.round);
        this.textGroup.add(this.round_info);
        this.textGroup.add(this.joker_text);
        this.textGroup.setVisible(false);
        // this.addPerspectiveCard('2',700,350).setScale(0.4)
        this.player1 = this.add.image(this.rummyTable.x, this.rummyTable.y + (this.rummyTable.displayHeight / 2.5), "player_detail").setScale(this.PLAYER_SCALE).setDepth(200);
        this.player1profile = this.add.image(this.player1.x - (this.player1.displayWidth / 4.2), this.player1.y - (this.player1.displayHeight / 17), "avatar1").setScale(this.PLAYERS_PROFILE_SIZE).setDepth(200);
        this.player1name = this.add.text(this.player1.x, this.player1.y - (this.player1.displayHeight / 3.5), "", { font: '40px Poppins_Bold', color: '#fcf039', }).setFontSize(this.PLAYER_NAME_SCALE + "ex").setDepth(200);
        this.player1Coins = this.add.image(this.player1.x + (this.player1.displayWidth / 20), this.player1.y + (this.player1.displayHeight / 30), "chip").setScale(this.PLAYER_COINS_SCALE).setDepth(200);
        this.player1CoinsText = this.add.text(this.player1.x + (this.player1.displayWidth / 9), this.player1.y - (this.player1.displayHeight / 16), "10K", { font: "40px Poppins_SemiBold", color: '#ffffff', }).setFontSize(this.PLAYER_COINS_TEXT_SCALE + "ex").setDepth(200);
        console.log("Rummy Table Scene >> ", this.rummyTableScene);
        this.rummyTableScene.player1Group.add(this.player1);
        this.rummyTableScene.player1Group.add(this.player1profile);
        this.rummyTableScene.player1Group.add(this.player1name);
        this.rummyTableScene.player1Group.add(this.player1Coins);
        this.rummyTableScene.player1Group.add(this.player1CoinsText);
        // this.rummyTableScene.player1Group.setVisible(true)
        // this.rummyTableScene.player1Group.setVisible(false)
        this.rummyTableScene.player_Assets.push(this.rummyTableScene.player1Group);
        // this.draw_card_pile = this.add.image((this.game.scale.width / 40) * 18.5, this.TABLE_OPEN_DECK_POSITION.Y, 'card').setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y).setDepth(100).disableInteractive();
        //   this.textGroup.setVisible(true);
        //   this.draw_card_pile.rotateZ(100000);
        // var card = [0,1,2,3,4,5,6,7,8,9,10,11,12]
        // // const cardsArray = card.split(',');
        // this.createCards(card);
        // this.joker_card = this.addPerspectiveCard("3", (this.game.scale.width / 40) * 16.5, this.TABLE_OPEN_DECK_POSITION.Y, false).setDepth(0).setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y)
        // // this.joker_card = this.add.image((this.game.scale.width / 40) * 16.5, this.TABLE_OPEN_DECK_POSITION.Y.1, jokerCard).setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y).setDepth(0);
        // this.joker_card.rotation = 11;
        // this.draw_card_pile = this.addPerspectiveCard('card', this.TABLE_CLOSED_DECK_POSITION.X, this.TABLE_CLOSED_DECK_POSITION.Y).setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y).setDepth(1).disableInteractive();
        // this.discard_card_pile = this.addPerspectiveCard('card_bg', this.TABLE_OPEN_DECK_POSITION.X, this.TABLE_OPEN_DECK_POSITION.Y).setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y).setDepth(0).setAlpha(0.1).setInteractive();
        // const card: any = this.addPerspectiveCard("5", (this.game.scale.width / 40) * 22.5, this.TABLE_OPEN_DECK_POSITION.Y).setAlpha(0)
        this.subscribeToServices();
    }
    sortByPointsDescending(data) {
        return data.sort((a, b) => Number(b.points) - Number(a.points));
    }
    subscribeToServices() {
        this.subscribeToDeckCards();
        this.subscribeToUserCards();
        this.subscribeToSortedCards();
        this.subscribeToChanceSkip();
    }
    subscribeToTableText() {
        this.draw_text.text = "Closed Pile";
        this.discard_text.text = "Open Pile";
        this.round.text = "Round :";
        var roundInfo = this.model.rummyRound + "/3";
        this.round_info.text = roundInfo;
        this.joker_text.text = "Joker";
        this.textGroup.setVisible(true);
    }
    subscribeToChanceSkip() {
        let temp = this.socketScv.cardBackSO.subscribe((data) => {
            // alert(data.dropCard)
            if (data.dropCard) {
                for (let index = 0; index < this.playerCards.length; index++) {
                    const card = this.playerCards[index];
                    if (card.id === data.dropCard) {
                        this.discardCard(card);
                        this.addCardToDiscardPile(data.userId, card.id);
                        break;
                    }
                }
            }
        });
    }
    // {joker: '1', openCard: '37', closeCard: '49'}
    subscribeToDeckCards() {
        let temp = this.socketScv.deckCardSO.subscribe((data) => {
            this.scene.bringToTop();
            this.scene.bringToTop("rummyTimer");
            this.scene.bringToTop("declareRummy");
            this.closeDeckCard = data.closeCard,
                console.log("deckCardSO>> ", data);
            this.subscribeToJokerCard(data.joker);
            this.subscribeToDiscardPile(data.openCard, _rummy_rummyCardEvent__WEBPACK_IMPORTED_MODULE_0__["RummyCardEvent"].PICK_CARD_FROM_OPENDECK);
            this.subcribeToDrawPile(this.closeDeckCard, _rummy_rummyCardEvent__WEBPACK_IMPORTED_MODULE_0__["RummyCardEvent"].PICK_CARD_FROM_CLOSEDECK);
        });
        this.gameComp.subscriptions.push(temp);
    }
    subscribeToUserCards() {
        console.log("Cards >> ");
        let temp = this.socketScv.cardDistributedSo.subscribe((data) => {
            // this.rummyButtonScene.sort.setAlpha(1);
            this.draw_card_pile = this.addPerspectiveCard('card', this.TABLE_CLOSED_DECK_POSITION.X, this.TABLE_CLOSED_DECK_POSITION.Y);
            const dummycard1 = this.addPerspectiveCard('card', this.TABLE_CLOSED_DECK_POSITION.X, this.TABLE_CLOSED_DECK_POSITION.Y / 1.02).setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y).setDepth(1).disableInteractive();
            const dummycard2 = this.addPerspectiveCard('card', this.TABLE_CLOSED_DECK_POSITION.X, this.TABLE_CLOSED_DECK_POSITION.Y / 1.04).setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y).setDepth(1).disableInteractive();
            this.assestsToDestory.push(dummycard1, dummycard2);
            if (this.model.roundTimer) {
                clearInterval(this.model.roundTimer);
            }
            this.subscribeToTableText();
            this.rummyTableScene.startRoundTimer();
            // this.draw_card_pile = this.add.image((this.game.scale.width / 40) * 18.5, this.TABLE_CLOSED_DECK_POSITION.Y, 'card').setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y).setDepth(1).disableInteractive();
            this.draw_card_pile.setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y).setDepth(1).disableInteractive();
            this.textGroup.setVisible(true);
            const cardsArray = data.cards.split(',');
            this.createCards(cardsArray);
        });
        this.gameComp.subscriptions.push(temp);
    }
    subscribeToDiscardPile(openCard, event) {
        this.discard_card_pile = this.addPerspectiveCard('card_bg', this.TABLE_OPEN_DECK_POSITION.X, this.TABLE_OPEN_DECK_POSITION.Y).setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y).setDepth(0).setAlpha(0.1).setInteractive();
        // this.discard_card_pile = this.add.image((this.game.scale.width / 40) * 22.5, this.TABLE_OPEN_DECK_POSITION.Y, 'card_bg').setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y).setDepth(0).setAlpha(0);
        const dummyCard = this.add.image((this.game.scale.width / 40) * 18.5, this.TABLE_OPEN_DECK_POSITION.Y, 'card').setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y).setDepth(0);
        //first discard pile card
        const card = this.addPerspectiveCard(openCard, (this.game.scale.width / 40) * 22.5, this.TABLE_OPEN_DECK_POSITION.Y).setAlpha(0);
        // const card: any = this.add.image((this.game.scale.width / 40) * 22.5, this.TABLE_OPEN_DECK_POSITION.Y, openCard).setOrigin(0.5, 0.5).setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y).setAlpha(0).setDepth(2 + this.discardCardPile.length);
        card.id = openCard;
        this.animateDrawToDiscardCards(dummyCard, card, (this.game.scale.width / 40) * 22.5, this.TABLE_OPEN_DECK_POSITION.Y);
        this.discardCardPile.push(card);
        this.discard_card_pile.on('pointerdown', () => {
            // card.setVisible(true);
            this.gameSound.playGameSound("card_draw");
            const openDiscardedCard = this.discardCardPile[this.discardCardPile.length - 1].id;
            this.socketScv.callServerMethod(parseInt(event), parseInt(openDiscardedCard));
            console.log("discard pile", this.discardCardPile[this.discardCardPile.length - 1]);
            // console.log("Discard card Clicked",this.discardCardPile);
            this.discardCardPile[this.discardCardPile.length - 1].setDepth(this.playerCards.length);
            this.animateDrawCards(this.discardCardPile[this.discardCardPile.length - 1], this.playerCards[this.playerCards.length - 1].x + this.OFFSET_BETWEEN_CARDS, this.CARDS_POSITION_Y);
            this.interactionOnCards(this.discardCardPile[this.discardCardPile.length - 1]);
            // this.playerCards.push(this.discardCardPile[this.discardCardPile.length - 1]);
            this.enablePiles(false);
            this.enableCards(true);
        }, this);
    }
    flip(card1, card2) {
        console.log("Inside Flip Twen >>> ", card1, card2);
        let tween1 = this.tweens.add({
            targets: card1,
            scaleX: 0,
            duration: 200,
            ease: 'Linear',
            onComplete: () => {
                console.log("Tween 1 Completed");
                card2.setAlpha(1);
                card2.setScale(0, this.TABLE_CARD_SIZE_Y);
                let tween2 = this.tweens.add({
                    targets: card2,
                    scaleX: this.TABLE_CARD_SIZE_X,
                    duration: 200,
                    ease: 'Linear',
                    onComplete: () => {
                        card1.destroy();
                        // this.lastDiscardCard.destroy();
                        // this.lastDiscardCard = null;
                        console.log("Tween 2 Completed", card1, card2);
                    }
                });
            }
        });
    }
    subcribeToDrawPile(closeCard, event) {
        this.draw_pile_border = this.addPerspectiveCard('card_bg', (this.game.scale.width / 40) * 18.5, this.TABLE_OPEN_DECK_POSITION.Y).setScale(this.CARD_SIZE_X, this.CARD_SIZE_Y).setDepth(0).setAlpha(0.1);
        // this.draw_pile_border = this.add.image((this.game.scale.width / 40) * 18.5, this.TABLE_OPEN_DECK_POSITION.Y, 'card_bg').setScale(this.CARD_SIZE_X, this.CARD_SIZE_Y).setDepth(0)
        // this.draw_card_pile = this.add.image((this.game.scale.width / 40) * 22, this.TABLE_OPEN_DECK_POSITION.Y, closeCard).setInteractive({ cursor: 'pointer' });
        // this.draw_card_pile.setScale(this.CARD_SIZE_X, this.CARD_SIZE_Y);
        this.draw_card_pile.setInteractive({ cursor: 'pointer' });
        this.draw_card_pile.on('pointerdown', () => {
            this.gameSound.playGameSound("card_draw");
            this.socketScv.callServerMethod(parseInt(event), parseInt(closeCard));
            const card = this.add.image((this.game.scale.width / 40) * 18.5, this.TABLE_OPEN_DECK_POSITION.Y, this.closeDeckCard).setOrigin(0.5, 0.5).setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y).setDepth(250);
            card.id = this.closeDeckCard;
            this.animateDrawCards(card, this.playerCards[this.playerCards.length - 1].x + this.OFFSET_BETWEEN_CARDS, this.CARDS_POSITION_Y);
            console.log("Draw card Clicked", this.closeDeckCard);
            this.interactionOnCards(card);
            this.enablePiles(false);
            this.enableCards(true);
        }, this);
    }
    subscribeToJokerCard(jokerCard) {
        this.joker_card = this.addPerspectiveCard(jokerCard, (this.game.scale.width / 40) * 16.5, this.TABLE_OPEN_DECK_POSITION.Y, false).setDepth(0).setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y);
        // this.joker_card = this.add.image((this.game.scale.width / 40) * 16.5, this.TABLE_OPEN_DECK_POSITION.Y.1, jokerCard).setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y).setDepth(0);
        this.joker_card.rotation = 11;
    }
    createCards(cards = []) {
        this.rummyButtonScene = this.scene.get('rummyButtons');
        // cards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
        console.log("cards---------->", cards);
        console.log("here is the game sound", this.gameSound);
        this.gameSound.playGameSound("card_delt");
        this.loopOnCards(0, cards);
    }
    //recursive function to iterate over cards.
    loopOnCards(index, cards) {
        this.time.addEvent({
            delay: 100,
            callback: () => {
                const element = cards[index];
                const card = this.add.image(Math.round((this.game.scale.width / 40) * 18.5), Math.round(this.TABLE_OPEN_DECK_POSITION.Y), element).setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y).setDepth(10 + index);
                // card.setDisplaySize(((this.game.scale.width / 40) * 4) * 0.9, (this.game.scale.height / 40) * 7.5);
                card.id = element;
                card.group = "none";
                card.duplicate = false;
                // let fx = card.preFX.addGlow('0xeb34d8', 0, 0)
                // fx.setVisible(false);
                // card.fx = fx;
                //"wss://india.gamentio.com:8083/"+ this.appName + '?a=9&room=' +  "public9" + '&userid=' +
                this.interactionOnCards(card);
                // this.animateDrawCards(card, this.game.scale.width / 10 + (index * this.OFFSET_BETWEEN_CARDS), this.game.scale.height / 1.35)
                this.animateDrawCards(card, this.game.scale.width / 10 + (index * this.OFFSET_BETWEEN_CARDS), this.CARDS_POSITION_Y, 1);
                // console.log("properties of cards", card);
                index++;
                if (index < cards.length) {
                    this.loopOnCards(index, cards);
                }
                else {
                    this.rummyHandsScene = this.scene.get('rummyHands');
                    this.gameSound.stopgameSound("card_delt");
                    // this.socketScv.sortCards();
                }
                // this.sortUserCard();
            },
            loop: false
        });
    }
    interactionOnCards(card) {
        console.log("the discard card", card);
        this.playerCards.push(card);
        let fx;
        if (card.preFX) {
            fx = card.preFX.addGlow('0xeb34d8', 0, 0);
        }
        else {
            fx = card.postFX.addGlow('0xeb34d8', 0, 0);
        }
        // let fx = card.postFX.addGlow('0xeb34d8', 0, 0)
        card.fx = fx;
        this.setCardGroup(3, card);
        // console.log("----->", card.texture.key)
        card.setInteractive({ cursor: 'pointer' });
        card.setInteractive({ cursor: 'pointer' }).on('pointerdown', () => {
            this.allowCardDrag = false;
            if (this.cardPointerDown) {
                console.log("Rummy Button >> ", this.rummyButtonScene);
                this.input.enable(this.rummyButtonScene.discard_enable);
                // this.rummyButtonScene.discard_enable.setAlpha(1);
                // this.rummyButtonScene.declare_enable.setAlpha(1);
                // this.rummyButtonScene.discard_disable.setAlpha(0);
                // this.rummyButtonScene.declare_disable.setAlpha(0);
                for (let index = 0; index < this.playerCards.length; index++) {
                    const element = this.playerCards[index];
                    element.y = this.CARDS_POSITION_Y;
                }
                if (card === this.cardToDiscard) {
                    console.log("Line 320 >>>>", card);
                    card.y = this.CARDS_POSITION_Y;
                    this.cardToDiscard = null;
                }
                else {
                    this.gameSound.playGameSound("button_click");
                    card.y = card.y - this.VERTICAL_DISCARD_OFFSET;
                    this.cardToDiscard = card;
                    this.rummyButtonScene.enableButton(true);
                }
            }
        });
        this.input.setDraggable(card);
        card.on('drag', (pointer, dragX, dragY) => {
            this.allowCardDrag = true;
            this.rummyButtonScene.enableButton(false);
            // console.log("dragging")
            card.setDepth(14);
            if (dragX < this.game.scale.width / 1.1 && dragX > this.game.scale.width / 20) {
                card.x = dragX;
                // console.log(card.x)
                card.y = dragY;
            }
            // card.setDepth(2)
        });
        card.on('dragend', (pointer) => {
            if (card.y != this.CARDS_POSITION_Y - this.VERTICAL_DISCARD_OFFSET) {
                card.y = this.CARDS_POSITION_Y;
                this.cardToDiscard = null;
                this.rummyButtonScene.enableButton(false);
            }
            if (this.allowCardDrag) {
                const droppedCardIndex = this.playerCards.indexOf(card);
                let groupOfCard1;
                let groupOfCard2;
                let groupOfCard;
                let targetGroup;
                for (let index = 0; index < this.playerCards.length; index++) {
                    let card1 = this.playerCards[index];
                    let card2 = null;
                    console.log("INdex", index);
                    if (index + 1 < this.playerCards.length) {
                        card2 = this.playerCards[index + 1];
                    }
                    if (card2 === card && index + 2 < this.playerCards.length) {
                        card2 = this.playerCards[index + 2];
                    }
                    if (card1 === card && index - 1 >= 0) {
                        card1 = this.playerCards[index - 1];
                    }
                    if (card2 == null) {
                        console.log("NULLLLLLLL");
                        let pos;
                        let arrayOfGroups = [this.GroupA, this.GroupB, this.GroupC, this.GroupD];
                        for (let index = 0; index < arrayOfGroups.length; index++) {
                            const group = arrayOfGroups[index];
                            if (group.includes(card)) {
                                groupOfCard = index;
                            }
                        }
                        if (pointer.x < this.playerCards[1].x) {
                            pos = 0;
                            targetGroup = 0;
                        }
                        else {
                            pos = this.playerCards.length;
                            targetGroup = 3;
                        }
                        this.playerCards.splice(droppedCardIndex, 1);
                        const indexOfCard2 = pos;
                        this.playerCards.splice(indexOfCard2, 0, card);
                    }
                    else if ((card1.x <= card.x && card2.x > card.x) || (card1.x > card.x && card2.x < card.x)) {
                        let changePostionFlag = false;
                        console.log(card1.texture.key, card1.x, card2.texture.key, card2.x, card.x);
                        this.playerCards.splice(droppedCardIndex, 1);
                        const indexOfCard2 = this.playerCards.indexOf(card2);
                        this.playerCards.splice(indexOfCard2, 0, card);
                        let diff1 = Math.abs(card1.x - card.x);
                        let diff2 = Math.abs(card2.x - card.x);
                        groupOfCard1 = this.findCardGroup(card1);
                        groupOfCard2 = this.findCardGroup(card2);
                        groupOfCard = this.findCardGroup(card);
                        console.log("groupOfCard1", groupOfCard1, "groupOfCard2", groupOfCard2);
                        if (diff1 < diff2) {
                            targetGroup = groupOfCard1;
                        }
                        else {
                            targetGroup = groupOfCard2;
                        }
                        console.log("GROUPOFCARD", groupOfCard, "TARGETGROUP", targetGroup);
                        break;
                    }
                    else {
                        console.log("check", card1.texture.key, card1.x, card2.texture.key, card2.x, card.x);
                    }
                }
                this.setCardGroup(targetGroup, card);
                this.gameSound.playGameSound("card_slide");
                this.removeFromGroup(groupOfCard, card);
                this.repositionCards();
                this.groupCards();
                console.log(this.playerCards);
            }
            this.rummyHandsScene.setOrSequence();
        });
    }
    findCardGroup(card) {
        let arrayOfGroups = [this.GroupA, this.GroupB, this.GroupC, this.GroupD];
        for (let index = 0; index < arrayOfGroups.length; index++) {
            const group = arrayOfGroups[index];
            if (group.includes(card)) {
                return index;
            }
        }
        return null;
    }
    removeFromGroup(groupNo, card) {
        switch (groupNo) {
            case 0:
                this.GroupA.splice(this.GroupA.indexOf(card), 1);
                break;
            case 1:
                this.GroupB.splice(this.GroupB.indexOf(card), 1);
                break;
            case 2:
                this.GroupC.splice(this.GroupC.indexOf(card), 1);
                break;
            case 3:
                this.GroupD.splice(this.GroupD.indexOf(card), 1);
                break;
        }
    }
    enableCards(enable) {
        if (enable) {
            // console.log("True Enable Card >>");
            this.cardPointerDown = true;
        }
        else {
            // console.log("False Enable Card >>");
            this.cardPointerDown = false;
        }
    }
    animateDrawCards(card, x, y, type = 0) {
        let self = this;
        this.tweens.add({
            targets: card,
            x: x,
            y: y,
            rotationX: 0,
            duration: 600,
            ease: 'Linear',
            scaleX: this.CARD_SIZE_X,
            scaleY: this.CARD_SIZE_Y,
            // scaleY,
            onComplete: () => {
                if (type === 1) {
                    console.log("i am in if case");
                    this.animatedCardCount++;
                    if (this.animatedCardCount == 13) {
                        this.gameSound.stopgameSound("card_delt");
                        console.log("4047animatead card count", this.animatedCardCount);
                        this.rummyButtonScene.sort.setAlpha(1);
                        setTimeout(() => {
                            this.socketScv.sortCards();
                        }, 300);
                        this.animatedCardCount = 0;
                    }
                }
                else {
                    console.log("i am in else case");
                    this.groupCards();
                    this.rummyHandsScene.setOrSequence();
                }
            }
        });
    }
    animateDrawToDiscardCards(card1, card2, x, y) {
        let self = this;
        this.tweens.add({
            targets: card1,
            x: x,
            y: y,
            duration: 700,
            ease: 'Linear',
            // scaleY,
            onComplete: () => {
                this.flip(card1, card2);
            }
        });
    }
    subscribeToSortedCards() {
        let temp = this.socketScv.sortedCardSO.subscribe((data) => {
            console.log("Sorted Card >> ", data);
            this.rearrangeRemainingCards(data);
            this.rummyHandsScene.setOrSequence();
        });
        this.gameComp.subscriptions.push(temp);
    }
    rearrangeRemainingCards(sortedCard) {
        // this.gameSound.playGameSound("card_slide");
        let temp = [];
        this.GroupA = [];
        this.GroupB = [];
        this.GroupC = [];
        this.GroupD = [];
        for (var i = 0; i < sortedCard.length; i++) {
            for (var j = 0; j < this.playerCards.length; j++) {
                if (this.playerCards[j].id == sortedCard[i] && !this.playerCards[j].duplicate) {
                    this.setCardGroup((sortedCard[i] % 4), this.playerCards[j]);
                    temp.push(this.playerCards[j]);
                    this.playerCards[j].duplicate = true;
                    break;
                }
            }
        }
        this.playerCards = temp;
        this.groupCards();
    }
    enablePiles(enable) {
        if (enable) {
            this.input.enable(this.draw_card_pile);
            this.input.enable(this.discard_card_pile);
        }
        else {
            this.input.disable(this.draw_card_pile);
            this.input.disable(this.discard_card_pile);
        }
    }
    discardCard(card) {
        this.rummyHandsScene = this.scene.get('rummyHands');
        console.log(this.playerCards.length);
        const index = this.playerCards.indexOf(card);
        this.discard_card_from_uer_hand = { x: this.playerCards[index].x, y: this.playerCards[index].y };
        console.log(">>>", this.playerCards[index], this.discard_card_from_uer_hand);
        this.playerCards.splice(index, 1);
        const groupNo = this.findCardGroup(card);
        this.removeFromGroup(groupNo, card);
        card.destroy();
        this.groupCards();
        this.rummyHandsScene.setOrSequence();
    }
    repositionCards() {
        for (let index = 0; index < this.playerCards.length; index++) {
            const element = this.playerCards[index];
            console.log(element.texture.key);
            element.x = this.CARDS_POSITION_X + (index * this.OFFSET_BETWEEN_CARDS);
        }
    }
    validateGroups(cardGroup = []) {
        let joker = this.joker_card.texture.key;
        joker = parseInt(joker);
        cardGroup.map((cardId) => parseInt(cardId));
        let allJokerCards = [];
        let isPureSequence = true;
        let isPureSet = true;
        let isSequence = true;
        let isSet = true;
        console.log("CARD GROUP---", cardGroup);
        if (cardGroup.length < 3) {
            isPureSequence = false;
            isPureSet = false;
            isSequence = false;
            isSet = false;
        }
        else {
            for (let index = 0; index < 4; index++) {
                let jokerIndex = joker % 4; //1
                allJokerCards.push((index - jokerIndex) + joker);
            }
            console.log("JOKER CARDS---", allJokerCards);
            for (let index = 0; index < cardGroup.length; index++) {
                const element = cardGroup[index];
                cardGroup[index] = parseInt(element);
            }
            for (let i = 1; i < cardGroup.length; i++) {
                if (cardGroup[i] - cardGroup[i - 1] !== 4) {
                    isPureSequence = false;
                    break;
                }
            }
            let tempJoker;
            for (let i = 1; i < cardGroup.length; i++) {
                console.log("cardGroup[i] - cardGroup[i - 1]", cardGroup[i], cardGroup[i - 1], cardGroup[i] - cardGroup[i - 1]);
                if (cardGroup[i] - cardGroup[i - 1] !== 4) {
                    if (allJokerCards.includes(cardGroup[i]) || allJokerCards.includes(cardGroup[i - 1])) {
                        continue;
                    }
                    else {
                        isSequence = false;
                        break;
                    }
                }
            }
            cardGroup.sort((a, b) => a - b);
            for (let index = 0; index < cardGroup.length; index++) {
                const element = cardGroup[index];
                cardGroup[index] = parseInt(element);
            }
            console.log("CARD GROUP---", cardGroup, allJokerCards);
            let setNo;
            for (setNo = 4; setNo <= 52; setNo = setNo + 4) {
                if (!allJokerCards.includes(cardGroup[0])) {
                    if (cardGroup[0] < setNo)
                        break;
                }
                else {
                    if (cardGroup[1] && cardGroup[1] < setNo)
                        break;
                }
            }
            for (let index = 0; index < cardGroup.length; index++) {
                const element = cardGroup[index];
                if (element < setNo && element >= setNo - 4)
                    continue;
                else {
                    isPureSet = false;
                    break;
                }
            }
            for (let index = 0; index < cardGroup.length; index++) {
                const element = parseInt(cardGroup[index]);
                console.log("CARD GROUP---", element, setNo);
                if (element < setNo && element >= setNo - 4)
                    continue;
                else {
                    console.log("CARD GROUP---", allJokerCards, element, allJokerCards.indexOf(element), allJokerCards.findIndex(a => a == element));
                    if (allJokerCards.includes(element)) {
                        continue;
                    }
                    else {
                        console.log("CARD GROUP---", isSet);
                        isSet = false;
                        break;
                    }
                }
            }
        }
        console.log("PURE_SEQUENCE:", isPureSequence, "PURE_SET:", isPureSet);
        console.log("SEQUENCE:", isSequence, "SET:", isSet);
        if (isPureSequence) {
            return 'Pure Sequence';
        }
        else if (isPureSet) {
            return 'Pure Set';
        }
        else if (isSequence) {
            return 'Sequence';
        }
        else if (isSet) {
            return 'Set';
        }
        else {
            return 'Invalid';
        }
    }
    addCardToDiscardPile(Id, cardKey) {
        var card;
        console.log("Add Card To Discard Pile >> ", Id, cardKey);
        if (this.model.userId == Id) {
            console.log("Equal User >> ");
            card = this.addPerspectiveCard(cardKey, this.discard_card_from_uer_hand.x, this.discard_card_from_uer_hand.y);
            // card.setScale(this.CARD_SIZE_X, this.CARD_SIZE_Y);
            // card.setOrigin(0.5,0.5)
            // card = this.add.image(this.discard_card_from_uer_hand.x, this.discard_card_from_uer_hand.y, cardKey).setOrigin(0.5, 0.5).setScale(this.CARD_SIZE_X, this.CARD_SIZE_Y);
            card.id = cardKey;
            card.setDepth(2 + this.playerCards.length);
            console.log("y----", this.TABLE_OPEN_DECK_POSITION.Y - ((this.discardCardPile.length * 2)));
            this.tweens.add({
                targets: card,
                x: (this.game.scale.width / 40) * 22.5,
                y: this.TABLE_OPEN_DECK_POSITION.Y,
                duration: 1000,
                ease: 'Linear',
                scaleX: this.TABLE_CARD_SIZE_X,
                scaleY: this.TABLE_CARD_SIZE_Y,
                // scaleY,
                onComplete: () => {
                    console.log('Tween completed');
                    card.setDepth(2 + this.discardCardPile.length);
                    this.setDiscardPileY();
                }
            });
        }
        else {
            card = this.addPerspectiveCard(cardKey, (this.game.scale.width / 40) * 22.5, this.TABLE_OPEN_DECK_POSITION.Y);
            // card = this.add.image((this.game.scale.width / 40) * 22.5, this.TABLE_OPEN_DECK_POSITION.Y, cardKey).setOrigin(0.5, 0.5).setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y);
            // card.y=card.y-((this.discardCardPile.length+10))
            card.setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y);
            card.id = cardKey;
            card.setDepth(2 + this.discardCardPile.length);
        }
        this.discardCardPile.push(card);
        console.log("discardCardPile====>", this.discardCardPile);
    }
    setCardGroup(value, card) {
        switch (value) {
            case 0:
                // card.group = "A"
                this.GroupA.push(card);
                break;
            case 1:
                this.GroupB.push(card);
                break;
            case 2:
                this.GroupC.push(card);
                break;
            case 3:
                this.GroupD.push(card);
                break;
        }
    }
    setDiscardPileY() {
        // alert("C")
        for (let index = 0; index < this.discardCardPile.length; index++) {
            const card = this.discardCardPile[index];
            if (index < 3) {
                card.x = ((this.game.scale.width / 40) * 22.5) + (index * 3);
                card.y = (this.TABLE_OPEN_DECK_POSITION.Y) - (index * 3);
                // card.x = ((this.game.scale.width / 40) * 22.5) + (Phaser.Math.Between(0, 7))
            }
            else {
                card.x = ((this.game.scale.width / 40) * 22.5) + (3 * 3);
                card.y = (this.TABLE_OPEN_DECK_POSITION.Y) - (3 * 3);
            }
        }
    }
    groupCards() {
        console.log("groups are these", this.GroupA, this.GroupB, this.GroupC, this.GroupD);
        //get the length of individual group in one array
        let GroupArray = [this.GroupA.length, this.GroupB.length, this.GroupC.length, this.GroupD.length];
        //run from 0 to 3
        let groupCount = 0;
        const tempAllCards = this.playerCards;
        this.GroupA = tempAllCards.slice(0, this.GroupA.length);
        this.GroupB = tempAllCards.slice(this.GroupA.length, this.GroupA.length + this.GroupB.length);
        this.GroupC = tempAllCards.slice(this.GroupA.length + this.GroupB.length, this.GroupA.length + this.GroupB.length + this.GroupC.length);
        this.GroupD = tempAllCards.slice(this.GroupA.length + this.GroupB.length + this.GroupC.length, this.GroupA.length + this.GroupB.length + this.GroupC.length + this.GroupD.length);
        // let tempAllCards=this.playerCards
        // this.GroupA=tempAllCards.splice(0,this.GroupA.length)
        // this.GroupB=tempAllCards.splice(0,this.GroupB.length)
        // this.GroupC=tempAllCards.splice(0,this.GroupC.length)
        // this.GroupD=tempAllCards.splice(0,this.GroupD.length)
        console.log("groups are these", this.GroupA, this.GroupB, this.GroupC, this.GroupD);
        const allGroups = [this.GroupA, this.GroupB, this.GroupC, this.GroupD];
        let cardsCount = 0;
        for (let i = 0; i < allGroups.length; i++) {
            const group = allGroups[i];
            for (let j = 0; j < group.length; j++) {
                const card = group[j];
                card.x = (this.game.scale.width / (10)) + (cardsCount * this.OFFSET_BETWEEN_CARDS) + (this.GROUP_OFFSET * i);
                card.setDepth(cardsCount);
                this.playerCards[cardsCount].duplicate = false;
                cardsCount++;
                // this.playerCards[cards].x = (this.game.scale.width / (10)) + (cards * this.OFFSET_BETWEEN_CARDS) + ((this.game.scale.width / 25) * groupCount);
            }
        }
        //run until complete the iteration of one group
        let count = 0;
        // for (let cards = 0; cards < this.playerCards.length; cards++) {
        //   if (GroupArray[groupCount] === 0) {
        //     groupCount++;
        //   }
        //   console.log("the details of sorting", groupCount, count, GroupArray[groupCount])
        //   //enter inside if one group is finished
        //   if (GroupArray[groupCount] <= count) {
        //     count = 1;
        //     groupCount++;
        //   }
        //   else {
        //     count++;
        //   }
        //   this.playerCards[cards].duplicate = false;
        //   this.playerCards[cards].x = (this.game.scale.width / (10)) + (cards * this.OFFSET_BETWEEN_CARDS) + ((this.game.scale.width / 25) * groupCount);
        //   this.playerCards[cards].setDepth(cards);
        // }
    }
    animateCardToOpponentPlayers(userId, cardId, action) {
        console.log("ANIMATE CARD TO OPPONENT >>> ", userId, action, cardId);
        for (var i = 0; i < this.model.playerInGameData.length; i++) {
            // console.log(this.model.playerInGameData[i].userId,"<< COMPARING >> ",data.userId)
            if (this.model.playerInGameData[i].userId == userId) {
                if (action == "PICK_CARD_FROM_CLOSEDECK") {
                    this.gameSound.playGameSound("card_draw");
                    const card = this.add.image((this.game.scale.width / 40) * 18.5, this.TABLE_OPEN_DECK_POSITION.Y, cardId).setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y).setDepth(2 + this.discardCardPile.length).disableInteractive();
                    this.animateOpponentDrawCard(card, this.model.playerInGameData[i].playerX, this.model.playerInGameData[i].playerY, 0, 0, 700);
                }
                else if (action == "PICK_CARD_FROM_OPENDECK") {
                    this.gameSound.playGameSound("card_draw");
                    const card = this.add.image((this.game.scale.width / 40) * 22.5, this.TABLE_OPEN_DECK_POSITION.Y, cardId).setOrigin(0.5, 0.5).setScale(this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y).setDepth(3 + this.discardCard.length);
                    this.animateOpponentDrawCard(card, this.model.playerInGameData[i].playerX, this.model.playerInGameData[i].playerY, 0, 0, 700);
                }
                else if (action == "PLACEDCARD") {
                    this.gameSound.playGameSound("card_discard");
                    const card = this.add.image(this.model.playerInGameData[i].playerX, this.model.playerInGameData[i].playerY, cardId).setOrigin(0.5, 0.5).setScale(this.game.scale.height / (30 * 100)).setDepth(2 + this.discardCardPile.length);
                    this.animateOpponentDrawCard(card, (this.game.scale.width / 40) * 22.5, this.TABLE_OPEN_DECK_POSITION.Y, this.TABLE_CARD_SIZE_X, this.TABLE_CARD_SIZE_Y, 700);
                }
            }
        }
    }
    animateOpponentDrawCard(card, x, y, scale_X, scale_Y, duration) {
        console.log("y----", y - (this.discardCardPile.length * 2), this.discardCardPile.length);
        let self = this;
        this.tweens.add({
            targets: card,
            x: x,
            y: y,
            duration: duration,
            ease: 'Linear',
            scaleX: scale_X,
            scaleY: scale_Y,
            onComplete: () => {
                console.log('Tween completed');
                card.destroy();
                this.setDiscardPileY();
            }
        });
    }
    addPerspectiveCard(cardTexture, x, y, rotateX = true) {
        console.log("dicardlength", y + (this.discardCardPile.length + 2));
        const offsetX = Phaser.Math.Between(0, 12);
        const offsetY = Phaser.Math.Between(0, 10);
        var image = new phaser3_rex_plugins_plugins_perspectiveimage_js__WEBPACK_IMPORTED_MODULE_1__["PerspectiveImage"](this, x, y, cardTexture, null, null);
        let img = this.add.existing(image);
        if (rotateX) {
            // const x = 0
            // const y = 0
            // const z = 0
            // const rotateX = -0
            // const rotateY = 0
            // const rotateZ = 0
            // img.transformVerts(x, y, z, rotateX, rotateY, rotateZ);
            // img.rotationX = 0
            // img.angleX=-20
            // img.angle=-2
            img.rotationX = -0.4047;
        }
        else {
            img.rotationY = 0.4047;
        }
        // img.scaleY=(this.game.scale.height/(10*90))
        // img.setInteractive({ cursor: 'pointer' }).on('pointermove',(pointer:any)=>{
        //   if (!pointer.isDown) {
        //     return;
        // }
        //   img.rotationX+=pointer.velocity.y * (1 / 800)
        //   console.log("img.rotationX",img.rotationX)
        // })
        return img;
    }
}


/***/ }),

/***/ "yI5g":
/*!**********************************************************!*\
  !*** ./src/app/game/rummyManger/rummy/rummyCardEvent.ts ***!
  \**********************************************************/
/*! exports provided: RummyCardEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RummyCardEvent", function() { return RummyCardEvent; });
class RummyCardEvent {
    constructor(type, card, index = '-1') {
        this.type = type;
        this.card = card;
        this.index = index;
    }
}
RummyCardEvent.PLACEDCARD = '1';
RummyCardEvent.DECLARERUMMY = '2';
RummyCardEvent.PICK_CARD_FROM_OPENDECK = '3';
RummyCardEvent.PICK_CARD_FROM_CLOSEDECK = '4';
RummyCardEvent.DROP_CARD = '6';
RummyCardEvent.DECLAREMYRUMMY = '5';


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map