(function framework7ComponentLoader(e,a){void 0===a&&(a=!0);document,window;var t=e.$,r=(e.Template7,e.utils),n=(e.device,e.support),o=(e.Class,e.Modal,e.ConstructorMethods,e.ModalMethods,{open:function(e,a){var r;void 0===e&&(e=".card-expandable"),void 0===a&&(a=!0);var o=this;if(!t(".card-opened").length){var s=t(e).eq(0);if(s&&s.length&&!(s.hasClass("card-opened")||s.hasClass("card-opening")||s.hasClass("card-closing"))){var d,c=s.parents(".page").eq(0);if(c.length)if(s.trigger("card:beforeopen",{prevent:Q}),o.emit("cardBeforeOpen",s[0],Q),!d){var i,l,p,h=Object.assign({animate:a},o.params.card,s.dataset()),f=s.parents(".page-content");s.attr("data-backdrop-el")&&(i=t(s.attr("data-backdrop-el"))),!i&&h.backdrop&&((i=f.find(".card-backdrop")).length||(i=t('<div class="card-backdrop"></div>'),f.append(i))),h.hideNavbarOnOpen&&((l=c.children(".navbar")).length||c[0].f7Page&&(l=c[0].f7Page.$navbarEl)),h.hideToolbarOnOpen&&((p=c.children(".toolbar")).length||(p=c.parents(".view").children(".toolbar")),p.length||(p=c.parents(".views").children(".toolbar")));var g,v=s.css("transform");v&&v.match(/[2-9]/)&&(g=!0);var b=s.children(".card-content"),m=t(document.createElement("div")).addClass("card-expandable-size");s.append(m);var u,C,x=s[0].offsetWidth,k=s[0].offsetHeight,O=c[0].offsetWidth,w=c[0].offsetHeight,T=m[0].offsetWidth||O,H=m[0].offsetHeight||w,E=T/x,M=H/k,$=s.offset(),B=c.offset();if($.left-=B.left,g){var W=v.replace(/matrix\(|\)/g,"").split(",").map(function(e){return e.trim()});if(W&&W.length>1){var q=parseFloat(W[0]);u=$.left-x*(1-q)/2,C=$.top-B.top-k*(1-q)/2,o.rtl&&(u-=s[0].scrollLeft)}else u=s[0].offsetLeft,C=s[0].offsetTop-(f.length?f[0].scrollTop:0)}else u=$.left,C=$.top-B.top,o.rtl&&(u-=s[0].scrollLeft);C-=(w-H)/2;var L=T-x-(u-=(O-T)/2);o.rtl&&(u=(r=[L,u])[0],L=r[1]);var N,P,y,z,X,j,Y,D,F,I,A,G=H-k-C,J=(L-u)/2,K=(G-C)/2;h.hideNavbarOnOpen&&l&&l.length&&o.navbar.hide(l,h.animate),h.hideToolbarOnOpen&&p&&p.length&&o.toolbar.hide(p,h.animate),i&&i.removeClass("card-backdrop-out").addClass("card-backdrop-in"),s.removeClass("card-transitioning"),h.animate&&s.addClass("card-opening"),s.trigger("card:open"),o.emit("cardOpen",s[0]),b.css({width:T+"px",height:H+"px"}).transform("translate3d("+(o.rtl?u+J:-u-J)+"px, 0px, 0) scale("+1/E+", "+1/M+")"),s.transform("translate3d("+J+"px, "+K+"px, 0) scale("+E+", "+M+")"),h.animate?s.transitionEnd(function(){R()}):R(),s[0].detachEventHandlers=function(){o.off("resize",S),n.touch&&h.swipeToClose&&(o.off("touchstart:passive",U),o.off("touchmove:active",V),o.off("touchend:passive",Z))},o.on("resize",S),n.touch&&h.swipeToClose&&(o.on("touchstart:passive",U),o.on("touchmove:active",V),o.on("touchend:passive",Z))}}}function Q(){d=!0}function R(){c.addClass("page-with-card-opened"),o.device.ios&&f.length&&(f.css("height",f[0].offsetHeight+1+"px"),setTimeout(function(){f.css("height","")})),s.addClass("card-opened"),s.removeClass("card-opening"),s.trigger("card:opened"),o.emit("cardOpened",s[0])}function S(){var e;s.removeClass("card-transitioning"),x=s[0].offsetWidth,k=s[0].offsetHeight,O=c[0].offsetWidth,w=c[0].offsetHeight,T=m[0].offsetWidth||O,H=m[0].offsetHeight||w,E=T/x,M=H/k,s.transform("translate3d(0px, 0px, 0) scale(1)"),$=s.offset(),B=c.offset(),$.left-=B.left,$.top-=B.top,u=$.left-(O-T)/2,o.rtl&&(u-=s[0].scrollLeft),C=$.top-(w-H)/2,L=T-x-u,G=H-k-C,o.rtl&&(u=(e=[L,u])[0],L=e[1]),J=(L-u)/2,K=(G-C)/2,s.transform("translate3d("+J+"px, "+K+"px, 0) scale("+E+", "+M+")"),b.css({width:T+"px",height:H+"px"}).transform("translate3d("+(o.rtl?u+J:-u-J)+"px, 0px, 0) scale("+1/E+", "+1/M+")")}function U(e){t(e.target).closest(s).length&&s.hasClass("card-opened")&&(N=b.scrollTop(),P=!0,z=e.targetTouches[0].pageX,X=e.targetTouches[0].pageY,D=void 0,I=!1,A=!1)}function V(e){if(P){if(j=e.targetTouches[0].pageX,Y=e.targetTouches[0].pageY,void 0===D&&(D=!!(D||Math.abs(Y-X)>Math.abs(j-z))),A||I||(!D&&e.targetTouches[0].clientX<=50?A=!0:I=!0),!A&&!I||I&&0!==N)return P=!0,void(y=!0);y||s.removeClass("card-transitioning"),y=!0,((F=I?Math.max((Y-X)/150,0):Math.max((j-z)/(x/2),0))>0&&I||A)&&(I&&o.device.ios&&(b.css("-webkit-overflow-scrolling","auto"),b.scrollTop(0)),e.preventDefault()),F>1&&(F=Math.pow(F,.3)),F>(I?1.3:1.1)?(P=!1,y=!1,o.card.close(s)):s.transform("translate3d("+J+"px, "+K+"px, 0) scale("+E*(1-.2*F)+", "+M*(1-.2*F)+")")}}function Z(){P&&y&&(P=!1,y=!1,o.device.ios&&b.css("-webkit-overflow-scrolling",""),F>=.8?o.card.close(s):s.addClass("card-transitioning").transform("translate3d("+J+"px, "+K+"px, 0) scale("+E+", "+M+")"))}},close:function(e,a){void 0===e&&(e=".card-expandable.card-opened"),void 0===a&&(a=!0);var r=this,n=t(e).eq(0);if(n&&n.length&&n.hasClass("card-opened")&&!n.hasClass("card-opening")&&!n.hasClass("card-closing")){var o=n.children(".card-content"),s=n.parents(".page-content"),d=n.parents(".page").eq(0);if(d.length){var c,i,l,p=Object.assign({animate:a},r.params.card,n.dataset());n.attr("data-backdrop-el")&&(l=t(n.attr("data-backdrop-el"))),p.backdrop&&(l=n.parents(".page-content").find(".card-backdrop")),p.hideNavbarOnOpen&&((c=d.children(".navbar")).length||d[0].f7Page&&(c=d[0].f7Page.$navbarEl),c&&c.length&&r.navbar.show(c,p.animate)),p.hideToolbarOnOpen&&((i=d.children(".toolbar")).length||(i=d.parents(".view").children(".toolbar")),i.length||(i=d.parents(".views").children(".toolbar")),i&&i.length&&r.toolbar.show(i,p.animate)),d.removeClass("page-with-card-opened"),r.device.ios&&s.length&&(s.css("height",s[0].offsetHeight+1+"px"),setTimeout(function(){s.css("height","")})),l&&l.length&&l.removeClass("card-backdrop-in").addClass("card-backdrop-out"),n.removeClass("card-opened card-transitioning"),p.animate?n.addClass("card-closing"):n.addClass("card-no-transition"),n.transform(""),n.trigger("card:close"),r.emit("cardClose",n[0]),o.css({width:"",height:""}).transform("").scrollTop(0,a?300:0),a?o.transitionEnd(function(){h()}):h(),n[0].detachEventHandlers&&(n[0].detachEventHandlers(),delete n[0].detachEventHandlers)}}function h(){n.removeClass("card-closing card-no-transition"),n.trigger("card:closed"),n.find(".card-expandable-size").remove(),r.emit("cardClosed",n[0])}},toggle:function(e,a){void 0===e&&(e=".card-expandable");var r=t(e).eq(0);r.length&&(r.hasClass("card-opened")?this.card.close(r,a):this.card.open(r,a))}}),s={name:"card",params:{card:{hideNavbarOnOpen:!0,hideToolbarOnOpen:!0,swipeToClose:!0,closeByBackdropClick:!0,backdrop:!0}},create:function(){r.extend(this,{card:{open:o.open.bind(this),close:o.close.bind(this),toggle:o.toggle.bind(this)}})},on:{pageBeforeIn:function(e){if(this.params.card.hideNavbarOnOpen&&e.navbarEl&&e.$el.find(".card-opened.card-expandable").length&&this.navbar.hide(e.navbarEl),this.params.card.hideToolbarOnOpen&&e.$el.find(".card-opened.card-expandable").length){var a=e.$el.children(".toolbar");a.length||(a=e.$el.parents(".view").children(".toolbar")),a.length||(a=e.$el.parents(".views").children(".toolbar")),a&&a.length&&this.toolbar.hide(a)}}},clicks:{".card-close":function(e,a){this.card.close(a.card,a.animate)},".card-open":function(e,a){this.card.open(a.card,a.animate)},".card-expandable":function(e,a,r){e.hasClass("card-opened")||e.hasClass("card-opening")||e.hasClass("card-closing")||t(r.target).closest(".card-prevent-open, .card-close").length||this.card.open(e)},".card-backdrop-in":function(){var e=!1;this.params.card.closeByBackdropClick&&(e=!0);var a=t(".card-opened");a.length&&("true"===a.attr("data-close-on-backdrop-click")?e=!0:"false"===a.attr("data-close-on-backdrop-click")&&(e=!1),e&&this.card.close(a))}}};if(a){if(e.prototype.modules&&e.prototype.modules[s.name])return;e.use(s),e.instance&&(e.instance.useModuleParams(s,e.instance.params),e.instance.useModule(s))}return s}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
