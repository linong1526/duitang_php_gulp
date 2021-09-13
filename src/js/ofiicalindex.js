webpackJsonp([14], {
	147: function(e, t, i) {
		"use strict";
		t.__esModule = !0;
		var a = o(i(148)),
			n = o(i(151));

		function o(e) {
			return e && e.__esModule ? e : {
			default:
				e
			}
		}
		t.
	default = function(e, t) {
			return (0, n.
		default)((0, a.
		default)(e, {
				raw: {
					value: (0, n.
				default)(t)
				}
			}))
		}
	},
	148: function(e, t, i) {
		e.exports = {
		default:
			i(149), __esModule: !0
		}
	},
	149: function(e, t, i) {
		i(150);
		var a = i(6).Object;
		e.exports = function(e, t) {
			return a.defineProperties(e, t)
		}
	},
	150: function(e, t, i) {
		var a = i(9);
		a(a.S + a.F * !i(37), "Object", {
			defineProperties: i(127)
		})
	},
	151: function(e, t, i) {
		e.exports = {
		default:
			i(152), __esModule: !0
		}
	},
	152: function(e, t, i) {
		i(153), e.exports = i(6).Object.freeze
	},
	153: function(e, t, i) {
		var a = i(41),
			n = i(84).onFreeze;
		i(146)("freeze", (function(e) {
			return function(t) {
				return e && a(t) ? e(n(t)) : t
			}
		}))
	},
	23: function(e, t, i) {
		"use strict";
		!
		function(e) {
			var t = {
				type: "",
				id: "",
				commentId: ""
			};
			e.extend(e.fn, {
				feedback: function(i) {
					var a = e.extend(t, i),
						n = e(this);
					if (n.length && 0 != a.id && "" != a.id) {
						var o, s = !! e.G.getUSERID(),
							r = {
								article: window.location.protocol + "//" + window.location.host + "/article/?id=" + a.id,
								articleComment: window.location.protocol + "//" + window.location.host + "/article/?id=" + a.id + "&comment_id=" + a.commentId,
								feed_video: window.location.protocol + "//" + window.location.host + "/p/feedvideo/?id=" + a.id,
								feedVideoComment: window.location.protocol + "//" + window.location.host + "/p/feedvideo/?id=" + a.id + "&comment_id=" + a.commentId,
								atlas: window.location.protocol + "//" + window.location.host + "/p/atlas/?id=" + a.id,
								atlasComment: window.location.protocol + "//" + window.location.host + "/p/atlas/?id=" + a.id + "&comment_id=" + a.commentId,
								blog: window.location.protocol + "//" + window.location.host + "/blog/?id=" + a.id,
								blogComment: window.location.protocol + "//" + window.location.host + "/blog/?id=" + a.id + "&comment_id=" + a.commentId
							},
							c = {
								article: 204,
								feed_video: 207,
								atlas: 205,
								blog: 201,
								articleComment: 203,
								atlasComment: 206,
								feedVideoComment: 206,
								blogComment: 206
							}[a.type],
							d = r[a.type],
							l = "",
							u = function(t) {
								var i = t.find(".submit"),
									n = t.find(".report-reason input");
								if (!i.hasClass("locked")) {
									i.addClass("locked");
									var s = {
										nickname: a.nickname,
										flag: c,
										msg: l,
										refer_url: d
									};
									e.ajax({
										url: "/napi/feedback/",
										type: "POST",
										data: s,
										success: function(t) {
											1 === t.status ? (n.val(""), clearTimeout(o), o = setTimeout((function() {
												SUGAR.PopOut.alert('<div class="prompt prompt-success"><h3>举报成功</h3></div>')
											}), 500), e({}).delay(1500).queue((function() {
												SUGAR.PopOut.closeMask()
											}))) : (clearTimeout(o), o = setTimeout((function() {
												SUGAR.PopOut.alert('<div class="prompt prompt-fail"><h3>举报失败 请稍候再试</h3></div>')
											}), 500), e({}).delay(1500).queue((function() {
												SUGAR.PopOut.closeMask()
											})))
										}
									}).always((function() {
										i.removeClass("locked")
									}))
								}
							};
						return n.on("click", (function() {
							a.nickname = s ? USER.username : "", function(t) {
								if (0 == e("#dt-report-dialog").length) {
									e("#win-house").append('<div id="dt-report-dialog">\n            <div class="report-reason">\n              <i class="icon-select"></i>\n              <input type="text" name="reason" placeholder="选择举报原因">\n              <ul class="reason-list">\n                <li class="reason-item">抄袭/未授权转载</li>\n                <li class="reason-item">淫秽低俗不能忍！</li>\n                <li class="reason-item">广告！垃圾内容！</li>\n                <li class="reason-item">骂人是不对的！</li>\n                <li class="reason-item">其他</li>\n              </ul>\n            </div>\n            <div class="report-detail">\n              <textarea name="" id="" cols="52" rows="5" placeholder="填写理由..."></textarea>\n            </div>\n            <a class="submit" href="javascript:;">确定</a>\n          </div>'), t()
								} else t()
							}((function() {
								var t, i, a, n;
								t = e("#dt-report-dialog"), i = t.find(".report-reason"), a = t.find(".report-reason input"), n = t.find(".report-detail"), a.val(""), t.off("click"), t.find(".report-reason").removeClass("active"), t.on("click", ".report-reason", (function() {
									e(this).hasClass("active") ? e(this).removeClass("active") : e(this).addClass("active")
								})), t.on("click", ".report-reason .reason-item", (function(t) {
									t.stopPropagation(), t.preventDefault(), a.val(e(this).text()), i.removeClass("active"), "其他" == a.val() ? n.show() : n.hide()
								})), t.on("click", ".submit", (function() {
									var e = n.find("textarea").val();
									"" != (l = "" == e ? a.val() : e) && (SUGAR.PopOut.closeMask(), u(t, a))
								})), SUGAR.PopOut.alert(["举报", e("#dt-report-dialog")], 1)
							}))
						})), n
					}
				}
			})
		}($)
	},
	331: function(e, t, i) {
		"use strict";
		var a, n = i(14),
			o = (a = n) && a.__esModule ? a : {
			default:
				a
			};
		i(88);
		var s = i(2);
		i(4);
		var r = i(332),
			c = r.fetchDynamicList,
			d = r.fetchFeedList;
		i(51), i(23), i(333);
		var l = i(1);
		$((function() {
			var e, t, i = $(document),
				a = "selection",
				n = !! $.G.getUSERID(),
				r = {},
				u = void 0;

			function p(e) {
				return {
					scene_id: "selection" == a ? "1" : "2",
					type: e.data("type"),
					id: e.data("id"),
					feed_id: e.data("feedid"),
					trace_id: e.data("traceid"),
					trace_info: e.data("traceinfo")
				}
			}
			function f(e, t, i) {
				var a = $(".selection-detail"),
					n = a.find(".content-detail");
				if (a.attr("locked", 1), t) if (USER.ID) var o = "/napi/vienna/feed/list/by_recommend/";
				else o = "/napi/vienna/feed/list/by_common/";
				else if (USER.ID) o = "/napi/vienna/feed/list/by_read/";
				else o = "/napi/vienna/feed/list/by_common/";
				d({
					url: o,
					first: t,
					refresh: i
				}, (function(o, s) {
					a.find(".my-loading").hide(), e && a.attr("locked", 0), n.find(".loading").remove(), t && (a.find(".view-more").show(), 0 === s.feedList.length) ? f(void 0, !1, !0) : (0 === s.feedList.length ? (n.html('<div class="empty-content">暂无内容</div>'), a.attr("nomore", 1).find(".view-more").hide()) : (i && n.empty(), n.append(o), a.find(".view-more").show(), v($(".more-action-list .report"))), 0 == s.more && a.attr("nomore", 1).find(".view-more").hide(), _(), $(".more-action").each((function(e) {})))
				}))
			}
			function m(e, t, i) {
				var a = $(".attention-detail"),
					n = a.find(".content-detail");
				if (a.attr("locked", 1), USER.ID) {
					c({
						url: "/napi/vienna/useractivity/followee/",
						first: t,
						refresh: i
					}, (function(t, o) {
						a.find(".my-loading").hide(), n.find(".loading").remove(), e && a.attr("locked", 0), 0 === o.dynamicList.length ? (n.html('<div class="empty-content">暂无内容</div>'), a.attr("nomore", 1).find(".view-more").remove()) : (i && n.empty(), n.append(t), a.find(".view-more").show(), v($(".more-action-list .report"))), 0 == o.more && a.attr("nomore", 1).find(".view-more").remove(), _()
					}))
				} else window.location.href = "/login/"
			}
			function v(e) {
				e.each((function(e, t) {
					var i = $(t),
						a = i.closest(".dynamic-feed-item"),
						n = a.data("type"),
						o = a.data("id");
					i.feedback({
						type: n,
						id: o
					})
				}))
			}
			function g(e) {
				var t = $("#daren-tmpl").html(),
					i = s.compile(t);
				$(e.data.object_list).each((function(e, t) {
					t.avatar = $.G.dtImageTrans(t.avatar, !0, 100, 100, "c"), this.identity.indexOf("personal_certify") >= 0 ? this.isIdentity = !0 : this.isIdentity = !1, "1" == t.friendShip ? t.isFollowed = !0 : t.isFollowed = !1
				}));
				var a = i(e.data);
				$(".dt-daren-list").empty().append(a)
			}
			function h(e) {
				0 == e.find(".view-more").length && e.append($('<div class="view-more">查看更多</div>'))
			}
			function _() {
				var e;
				i.on("mouseenter", ".gif-img", (function(t) {
					var i = $(t.target),
						a = i.attr("src");
					e = setTimeout((function() {
						/\.gif_jpeg/.test(a) && (a = a.replace(".gif_jpeg", ".gif"), i.closest(".gif-img").addClass("move"), i.attr("src", a))
					}), 200)
				})), i.on("mouseleave", ".gif-img", (function(t) {
					var i = $(t.target),
						a = i.attr("src");
					clearTimeout(e), /\.gif$/.test(a) && (a = a.replace(".gif", ".gif_jpeg"), i.closest(".gif-img").removeClass("move"), i.attr("src", a))
				}))
			}
			function w() {
				i.off("click", ".daren-follow").on("click", ".daren-follow", (function(e) {
					var t, i = $(e.target),
						a = i.data("userid");
					t = !! i.hasClass("active"), $.ajax({
						url: t ? "/napi/people/unfollow/" : "/napi/people/follow/",
						type: "POST",
						data: {
							user_id: a
						},
						success: function(e) {
							1 === e.status && (t ? (i.removeClass("active"), i.text("关注")) : (i.addClass("active"), i.text("已关注")))
						}
					})
				}))
			}
			function b() {
				var e;
				"selection" == a ? (f(!0, !1), (e = $(".selection-detail")).find(".content-detail").append('<i class="loading"></i>'), e.find(".view-more").remove()) : (m(!0, 0), (e = $(".attention-detail")).find(".content-detail").append('<i class="loading"></i>'), e.find(".view-more").remove())
			}!
			function() {
				var e = !1;

				function t() {
					e = !0, $(".dt_down_guide").animate({
						width: "11.66667vw",
						height: "2.8125vw",
						left: "2.083333vw",
						bottom: "3.333333vw",
						opacity: "0"
					}, 500, (function() {
						$(".dt_down_guide_small_tip").css("display", "flex"), $(".dt_down_guide").css("display", "none"), $(".dt_down_guide_small_tip").animate({
							opacity: .95
						})
					}))
				}
				"noFirst" == localStorage.getItem("isFirstEntry") ? ($(".dt_down_guide").css("display", "none"), $(".dt_down_guide").css("width", "11.66667vw"), $(".dt_down_guide").css("height", "2.8125vw"), $(".dt_down_guide").css("left", "2.083333vw"), $(".dt_down_guide").css("bottom", "3.333333vw"), $(".dt_down_guide").css("opacity", "0"), $(".dt_down_guide_small_tip").css("display", "flex"), $(".dt_down_guide_small_tip").animate({
					opacity: .95
				})) : $(".dt_down_guide").css("display", "block"), localStorage.setItem("isFirstEntry", "noFirst"), $(window).scroll((function() {
					var i = 0 == document.body.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
					!1 === e && Math.ceil(i) >= 200 && "block" == $(".dt_down_guide").css("display") && t()
				})), $(".dt_close_down_guide").on("mouseenter", (function(e) {
					$(".dt_close_down_guide img").attr("src", "https://c-ssl.duitang.com/uploads/people/202007/28/20200728161132_rTRF2.thumb.100_0.png")
				})), $(".dt_close_down_guide").on("mouseleave", (function(e) {
					$(".dt_close_down_guide img").attr("src", "https://c-ssl.duitang.com/uploads/people/202007/27/20200727181622_PUBcM.thumb.100_0.png")
				})), $(".dt_close_down_guide").on("click", (function() {
					t()
				})), $(".dt_down_guide_small_tip").on("click", (function() {
					$(".dt_down_guide_small_tip").animate({
						opacity: 0
					}, 300, (function() {
						$(".dt_down_guide").css("display", "block"), $(".dt_down_guide_small_tip").animate({
							opacity: 0
						}), $(".dt_down_guide").animate({
							width: "100%",
							height: "10.416vw",
							bottom: "0",
							left: "0",
							opacity: "0.95"
						}, 500, (function() {
							$(".dt_down_guide_small_tip").css("display", "none")
						}))
					}))
				}))
			}(), $("#dt-carousel").on("a", "mousedown", (function() {
				var e = $(this),
					t = e.closest("#dt-carousel").find("a").index(e);
				$.G.gaq("/_trc/NIdex/_/focus_" + t + "__" + $(this).attr("href"))
			})), $("#dt-slider").on("a", "mousedown", (function(e) {
				$.G.gaq("/_trc/NIdex/_/story_entry__" + $(this).attr("href"))
			})), i.on(".dt-woo-list a", "mousedown", (function(e) {
				$.G.gaq("/_trc/NIdex/_/category_entry__" + $(this).attr("href"))
			})), $("#dt-enter").on("a", "mousedown", (function() {
				var e = $(this),
					t = e.closest("#dt-enter").find("a").index(e);
				$.G.gaq("/_trc/NIdex/_/guide_entry_" + t)
			})), $("#dt-hot").on("a", "mousedown", (function() {
				$.G.gaq("/_trc/NIdex/_/hot_activ_entry__" + $(this).attr("href"))
			})), $(".dt-album").on("a", "mousedown", (function() {
				$.G.gaq("/_trc/NIdex/_/albums_entry__" + $(this).attr("href"))
			})), $(".wxlink").on("mouseover", (function(t) {
				clearTimeout(e);
				var i = $(this).position().left + 10,
					a = $(this).position().top + 25;
				$('<div class="weixinpopout" style="width: 86px; height: 86px; background: url(https://c-ssl.duitang.com/uploads/people/201401/14/20140114164336_WswB8.jpeg) no-repeat 0 0;"></div>').appendTo("body").fadeIn(), $(".weixinpopout").css({
					position: "absolute",
					top: a,
					left: i
				})
			})), $(".wxlink").on("mouseout", (function(t) {
				e = setTimeout((function() {
					$(".weixinpopout").animate({
						opacity: 0
					}, (function() {
						$(this).remove()
					}))
				}), 400)
			})), i.find("a").each((function(e, t) {
				var i = $(t);
				i.data("href", i.attr("href"))
			})), i.on("body > a", "click", (function() {
				var e = $(this).attr("href");
				$.G.gaq("/_trc/Error/_/adclick_to_" + e)
			})), i.on("mousedown", "a", (function(e) {
				var t = $(this),
					i = t.attr("href"),
					a = t.data("href");
				a && i != a && $.G.gaq("/_trc/Error/_/adclick_change_" + i)
			})), i.on("click", ".dt-daren .change-daren", (function() {
				$.ajax({
					url: "/napi/people/badge/user/list/by_random/",
					type: "GET",
					success: function(e) {
						g(e), w()
					}
				})
			})), i.on("click", ".view-more", (function() {
				b()
			})), window.setTimeout((function() {
				for (var e = $("body").children(), t = $(window).width(), i = 0; i < 5; i++) {
					var a = e.eq(-i - 1);
					if (a.hasClass("dn") || "script" == a.get(0).tagName.toLowerCase()) break;
					if (!a.hasClass("dt-side-combo") && !a.hasClass("blockUI") && (a.outerWidth() > 0 && a.offset().left < t)) {
						var n = a.find("a"),
							o = (a.attr("id") || "") + "_" + (a.attr("class") || "");
						n.each((function(e, t) {
							var i = $(t).attr("href");
							$.G.isLink(i) && $.G.gaq("/_trc/Error/_/adclick_lnk_" + i)
						}));
						var s = a.find("iframe");
						s.each((function(e, t) {
							var i = $(t).attr("src");
							$.G.gaq("/_trc/Error/_/adclick_ifr_" + i)
						})), s.remove(), $.G.gaq("/_trc/Error/_/adclick_pop_" + o)
					}
				}
			}), 300), $(".content-tabs li").on("click", (function(e) {
				var t = $(this);
				t.hasClass("active") ? t.hasClass("selection") ? (f(void 0, !0, !0), h($(".selection-detail"))) : (m(void 0, 1, !0), h($(".attention-detail"))) : ($(".content-tabs li").removeClass("active"), t.addClass("active"), t.hasClass("selection") ? (f(void 0, !0, !0), a = "selection", $(".attention-detail").hide(), $(".selection-detail").show(), h($(".selection-detail"))) : (m(void 0, 1, !0), $(".content-tabs").find(".attention").removeClass("unread").find("span").html(""), a = "attention", $(".selection-detail").hide(), $(".attention-detail").show(), h($(".attention-detail"))))
			})), i.on("scroll", (function() {
				var e = $("." + a + "-detail");
				clearTimeout(t), t = window.setTimeout((function() {
					e.find(".dynamic-feed-item").each((function(e, t) {
						var i = $(t);
						i.hasClass("hasExposure") || i.visible(!0, !1, "vertical") && (i.addClass("hasExposure"), l.digy("FEED", "EXPOSE", p(i)))
					}))
				}), 100);
				var n = e.attr("locked"),
					o = e.attr("nomore"),
					s = $(window).scrollTop() + $(window).height() >= i.height() - 200;
				"1" != o && "1" != n && s && "0" == e.attr("locked") && b()
			})), i.on("click", ".digy-visit", (function(e) {
				var t = $(e.target).closest(".dynamic-feed-item");
				l.digy("FEED", "VISIT", p(t))
			})), i.on("click", ".favorite-action", (function(e) {
				var t = $(this),
					i = t.parent().data("type"),
					a = t.parent().data("id"),
					s = t.data("favoriteid"),
					r = !t.hasClass("active");
				n ?
				function(e, t, i) {
					var a = e ? {
						resource_type: i,
						resource_id: t
					} : {
						favorite_id: t
					},
						n = e ? "/napi/favorite/add/" : "/napi/favorite/remove/";
					return new o.
				default ((function(e, t) {
						$.ajax({
							url: n,
							type: "POST",
							data: a,
							mysuccess: function(t) {
								e(t)
							}
						})
					}))
				}(r, r ? a : s, i).then((function(e) {
					t.toggleClass("active").data("favoriteid", e.data.id);
					var i = r ? "https://c-ssl.duitang.com/uploads/item/201804/23/20180423122004_sYcGR.png" : "https://c-ssl.duitang.com/uploads/item/201804/23/20180423141044_YizTc.png";
					t.find("img").attr("src", i);
					var a = parseInt(t.find("span").text()),
						n = a ? r ? a + 1 : 1 == a ? "收藏" : a - 1 : 1;
					if (t.find("span").text(n), r) {
						var o = p(t.closest(".dynamic-feed-item"));
						o.bhv_value = "collect", l.digy("FEED", "BEHAVIOR", o)
					}
				})) : SUGAR.PopOut.login()
			})), i.on("click", ".like-action", (function(e) {
				var t, i = this,
					a = $(this);
				switch (a.parent().data("type")) {
				case "article":
					t = 3;
					break;
				case "atlas":
					t = 5;
					break;
				case "feed_video":
					t = 6
				}
				var s = a.parent().data("id"),
					r = !a.hasClass("active");
				n ?
				function(e, t, i) {
					var a = {
						category: i,
						object_id: t
					},
						n = e ? "/napi/like/" : "/napi/unlike/";
					return new o.
				default ((function(e, t) {
						$.ajax({
							url: n,
							type: "POST",
							data: a,
							mysuccess: function(t) {
								e(t)
							}
						})
					}))
				}(r, s, t).then((function(e) {
					a.toggleClass("active");
					var t = r ? "https://c-ssl.duitang.com/uploads/item/201804/23/20180423144103_3RcMy.png" : "https://c-ssl.duitang.com/uploads/item/201804/23/20180423141044_kt5Rj.png";
					a.find("img").attr("src", t);
					var n = parseInt($(i).find("span").text()),
						o = n ? r ? n + 1 : 1 == n ? "赞" : n - 1 : 1;
					if (a.find("span").text(o), r) {
						var s = p(a.closest(".dynamic-feed-item"));
						s.bhv_value = "like", l.digy("FEED", "BEHAVIOR", s)
					}
				})) : SUGAR.PopOut.login()
			})), i.on("mouseenter", ".more-action", (function() {
				(u = $(this).parent().parent().find(".more-action-list")).on("mouseenter", (function() {
					clearTimeout(r)
				})), u.on("mouseleave", (function() {
					r = setTimeout((function() {
						u.hide().animate({
							height: 0
						}, 100)
					}), 200)
				})), clearTimeout(r), "none" == u.css("display") && u.show().animate({
					height: 140
				}, 100)
			})), i.on("mouseleave", ".more-action", (function() {
				r = setTimeout((function() {
					u.hide().animate({
						height: 0
					}, 100)
				}), 200)
			})), f(void 0, !0), USER.ID, $.ajax({
				url: "/napi/people/badge/user/list/by_top/",
				type: "GET",
				mysuccess: function(e) {
					1 === e.status && (g(e), w())
				}
			}).always((function() {})), $.ajax({
				url: "/napi/vienna/useractivity/update_count/",
				method: "GET",
				success: function(e) {
					1 === e.status && e.data.count > 0 && $(".content-tabs").find(".attention").addClass("unread").find("span").html("新动态")
				}
			}), $.ajax({
				url: "/napi/ad/banner/list/",
				type: "GET",
				data: {
					ad_id: "WEB001"
				},
				mysuccess: function(e) {
					1 === e.status &&
					function(e) {
						var t = $("#carousel-tmpl").html(),
							i = s.compile(t);
						e.data.length = e.data.object_list.length + "00%;", $(e.data.object_list).each((function(e, t) {
							var i, a, n;
							t.image_url = $.G.dtImageTrans(t.image_url, !0, 700, 0), t.link = (i = t.target, a = new RegExp("\\?__urlopentype=pageweb(=[^&]*)?"), n = new RegExp("\\&__urlopentype=pageweb(=[^&]*)?"), i.replace("duitang://", "https://").replace(/\/life\_artist\/article\//g, "/article/").replace(/\/atlas\/detail\//g, "/p/atlas/").replace(/\/album\/detail\//g, "/album/").replace(a, "?").replace(n, "").replace(/\?&/, "?").replace(/\?$/, ""))
						}));
						var a = i(e.data);
						$("#dt-carousel").empty().append(a), $(".dt-carousel-item").carousel({
							action: ".dt-carousel-point",
							eventType: "click",
							time: 6e3,
							fadeElement: ".dt-carousel-img",
							left: ".dt-carousel-action-left",
							right: ".dt-carousel-action-right",
							animateType: "move",
							carouselWrap: ".dt-carousel-content",
							callback: function(e, t, i, a, n) {
								var o = i.find(".dt-carousel-title").html();
								$(".dt-carousel-action-title").html(o), $(".dt-carousel-item").mouseover((function() {
									n()
								})).mouseout((function() {
									a()
								}))
							}
						})
					}(e)
				}
			}).always((function() {})), function() {
				var e, t = $(window),
					i = (t.width(), t.height(), $.browser),
					a = (i.msie && i.version, i.webkit, $("#dt-side-combo"));
				if (!a.length) {
					var n = $('<div style="width:0;height:0;position:relative;"></div>').prependTo("#content");
					a = $('<div id="dt-side-combo" style="float:left;position:relative;width:0;height:0;"><a id="dt-index-backtotop" class="dt-backtotop" href="javascript:;" style="position:absolute;left:1020px">回到顶部</a></div>').appendTo(n).sidepop({
						id: "dt-side-combo",
						dockSide: "right",
						width: 44,
						height: 44,
						scroll: 1,
						departure: 0,
						baseline: "bottom",
						bias: 80,
						seat: !0,
						seatrange: function() {
							return $(document).height() - 490
						},
						isFixed: !0,
						scrollDelayTime: 100,
						zIndex: 1e4,
						btnset: 0
					})
				}
				$("#dt-index-backtotop").click((function(e) {
					var t = $(this);
					e.preventDefault(), t.prop("disabled") || (t.prop("disabled", !0), $("body,html").animate({
						scrollTop: 0
					}, 200, (function() {
						t.prop("disabled", !1)
					})))
				}));
				var o = function(i) {
						clearTimeout(e), e = window.setTimeout((function() {
							t.scrollTop() > 100 ? a.stop().css({
								display: "block"
							}).animate({
								opacity: 1
							}, 300) : a.stop().animate({
								opacity: 0
							}, 300, (function() {
								a.css("display", "none")
							})), i && $({}).delay(300).queue((function() {
								a.removeClass("vh")
							}))
						}), 100)
					};
				t.scroll(o), o(!0)
			}()
		}))
	},
	332: function(e, t, i) {
		"use strict";
		var a = r(i(147)),
			n = r(i(136)),
			o = r(i(87)),
			s = (0, a.
		default)(["", ""], ["", ""]);

		function r(e) {
			return e && e.__esModule ? e : {
			default:
				e
			}
		}
		var c = i(0),
			d = i(1);

		function l(e) {
			for (var t = e[0], i = 1; i < arguments.length; i++) {
				var a = String(arguments[i]);
				t += a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), t += e[i]
			}
			return t
		}
		var u = function() {
				return {
					avatar: c(".people-avatar img").attr("src"),
					username: c(".people-name a").text(),
					userId: c("#people-detail").data("userid")
				}
			},
			p = {
				start: Date.now(),
				limit: 18,
				more: 1,
				dynamicList: []
			},
			f = {
				start: 0,
				limit: 18,
				more: 1,
				feedList: []
			},
			m = function(e) {
				e.more, e.next_start;
				var t = e.object_list;
				p.start = e.next_start, p.more = e.more, g(t)
			};
		var v = function(e) {
				var t, i, a, o, s, r, c, l, u, p, f = e.date_str,
					m = e.resource_info,
					v = void 0,
					g = {};
				if (!e.type) switch (e.resource_type) {
				case "atlas":
					e.type = 2, e.data = e, f = m;
					break;
				case "article":
					e.data = e, e.type = 4, f = m;
					break;
				case "feed_video":
					e.data = e, e.type = 3, f = m
				}
				switch (e.type) {
				case 1:
					g = function(e) {
						var t = e.num,
							i = e.show_blog_volist,
							a = e.album_name,
							n = e.album_id,
							o = e.sender,
							s = i.slice(0, 6).map((function(e) {
								return {
									blog_id: e.blog_id,
									photo_path: e.photo.path
								}
							}));
						o.avatar = d.dtImageSquare(path, 200);
						var r = {
							favorite_count: e.favorite_count,
							favorite_id: e.favorite_id,
							comment_count: e.comment_count,
							like_count: e.like_count,
							like_id: e.like_id
						},
							c = parseInt(t);
						return {
							type: 1,
							album_name: a,
							blogs: s,
							haveMore: c > 6,
							moreNum: c - 6,
							id: n,
							sender: o,
							social: r
						}
					}(e.data), v = "album";
					break;
				case 2:
					g = function(e) {
						var t = e.atlas,
							i = e.id,
							a = e.trace_info,
							n = t.blogs,
							o = t.album,
							s = t.id,
							r = t.desc,
							c = t.sender,
							l = (o.name, o.count, {
								favorite_count: t.favorite_count,
								favorite_id: t.favorite_id,
								comment_count: t.comment_count,
								like_count: t.like_count,
								like_id: t.like_id
							}),
							u = 1 == n.length;
						c.avatar = d.dtImageSquare(c.avatar, 200);
						var p = n.slice(0, 9).map((function(e) {
							var t = e.id,
								i = e.photo,
								a = i.height,
								n = i.width,
								o = i.path,
								s = 0,
								r = !1;
							return u && ((s = parseInt(a * (1 * 360 / n))) > 600 ? (s = 600, r = !0) : s < 204 && (s = 204)), {
								blog_id: t,
								photo_path: o,
								img_show_height: s,
								is_cropped: r
							}
						}));
						return u && (p = p[0]), {
							type: 2,
							album_desc: r,
							blogs: p,
							singleImg: u,
							feed_id: i,
							trace_info: a,
							id: s,
							sender: c,
							social: l
						}
					}(e.data), v = "atlas";
					break;
				case 3:
					t = e.data, i = t.feed_video, a = t.id, o = t.trace_info, s = i.id, r = i.title, c = i.upload_video, l = i.sender, u = c.cover, p = {
						favorite_count: i.favorite_count,
						favorite_id: i.favorite_id,
						comment_count: i.comment_count,
						like_count: i.like_count,
						like_id: i.like_id
					}, l.avatar = d.dtImageSquare(l.avatar, 200), g = {
						type: 3,
						feed_id: a,
						trace_info: o,
						id: s,
						title: r,
						photo_path: u.photo_path,
						sender: l,
						social: p
					}, v = "feed_video";
					break;
				case 4:
					g = function(e) {
						var t = e.id,
							i = (e.resource_info, e.trace_info),
							a = e.article,
							n = a.cover,
							o = a.title,
							s = a.id,
							r = a.sender,
							c = {
								favorite_count: a.favorite_count,
								favorite_id: a.favorite_id,
								comment_count: a.comment_count,
								like_count: a.like_count,
								like_id: a.like_id
							};
						return r.avatar = d.dtImageSquare(r.avatar, 200), {
							type: 4,
							cover_desc: n.cover_desc,
							photo_path: n.photo_path,
							title: o,
							feed_id: t,
							trace_info: i,
							id: s,
							sender: r,
							social: c
						}
					}(e.data), v = "article";
					break;
				case 5:
					g = function(e) {
						var t = e.feed_vo_list,
							i = t[0],
							a = i.id,
							n = i.trace_info,
							o = t[0].atlas,
							s = o.blogs,
							r = o.album,
							c = o.id,
							l = o.desc,
							u = o.sender;
						r.name, r.count;
						u.avatar = d.dtImageSquare(u.avatar, 200);
						var p = {
							favorite_count: t[0].atlas.favorite_count,
							favorite_id: t[0].atlas.favorite_id,
							comment_count: t[0].atlas.comment_count,
							like_count: t[0].atlas.like_count,
							like_id: t[0].atlas.like_id
						},
							f = 1 == s.length,
							m = s.slice(0, 9).map((function(e) {
								var t = e.id,
									i = e.photo,
									a = i.height,
									n = i.width,
									o = i.path,
									s = 0,
									r = !1;
								return f && ((s = parseInt(a * (1 * 360 / n))) > 600 ? (s = 600, r = !0) : s < 204 && (s = 204)), {
									blog_id: t,
									photo_path: o,
									img_show_height: s,
									is_cropped: r
								}
							}));
						return f && (m = m[0]), {
							type: 5,
							album_desc: l,
							blogs: m,
							singleImg: f,
							feed_id: a,
							trace_info: n,
							id: c,
							sender: u,
							social: p
						}
					}(e.data), v = "atlas"
				}
				return (0, n.
			default)({}, g, {
					date_str: f,
					data_type: v,
					resource_info: m
				})
			},
			g = function(e) {
				var t;
				(t = p.dynamicList).push.apply(t, (0, o.
			default)(e.map(v)))
			},
			h = function(e) {
				return !!/\.gif/g.test(e)
			},
			_ = function(e, t) {
				var i = e.id,
					a = e.avatar,
					n = e.username;
				return '<div class="user-info">\n      <a href="/people/?user_id=' + i + '" target="_blank">\n        <img class="avatar" src="' + a + '">\n        ' + (e.is_certify_user ? '<i class="avatar-v"></i>' : "") + '\n      </a>\n      <div class="user-desc">\n      <a href="/people/?user_id=' + i + '" target="_blank">\n        <p class="username">' + n + '</p>\n      </a>\n      <p class="publish-time">' + t + "</p>\n      </div>\n    </div>\n  </a>"
			},
			w = function(e) {
				var t = e.social,
					i = void 0,
					a = void 0,
					n = void 0,
					o = void 0;
				switch (e.data_type) {
				case "atlas":
					o = e.singleImg ? e.blogs.photo_path : e.blogs[0].photo_path, i = "http://service.weibo.com/share/share.php?appkey=1152390549&title=" + (n = e.album_desc) + "&url=http%3A//" + location.host + "/p/atlas/%3Fid%3D" + e.id + "&pic=" + o, a = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A//" + location.host + "/p/atlas/%3Fid%3D" + e.id + "&title=" + n + "&pics=" + o;
					break;
				case "feed_video":
					o = e.photo_path, i = "http://service.weibo.com/share/share.php?appkey=1152390549&title=" + (n = e.title) + "&url=http%3A//" + location.host + "/p/feedvideo/%3Fid%3D" + e.id + "&pic=" + o, a = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A//" + location.host + "/p/feedvideo/%3Fid%3D" + e.id + "&title=" + n + "&pics=" + o;
					break;
				case "article":
					o = e.photo_path, i = "http://service.weibo.com/share/share.php?appkey=1152390549&title=" + (n = e.title) + "&url=http%3A//" + location.host + "/article/%3Fid%3D" + e.id + "&pic=" + o, a = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A//" + location.host + "/article/%3Fid%3D" + e.id + "&title=" + n + "&pics=" + o
				}
				return '<div class="de-action" >\n            <div class="action-list" data-type=' + e.data_type + " data-id=" + e.id + '>\n                <div class="like-action one-action ' + (t.like_id ? "active" : "") + '" data-likeid=' + t.like_id + '>\n                    <img src="' + (t.like_id ? "https://c-ssl.duitang.com/uploads/item/201804/23/20180423144103_3RcMy.png" : "https://c-ssl.duitang.com/uploads/item/201804/23/20180423141044_kt5Rj.png") + '">\n                    <span class="detail-text">' + (t.like_count > 0 ? t.like_count : "赞") + '</span>\n                </div>\n\n                <div class="favorite-action one-action ' + (t.favorite_id ? "active" : "") + '" data-favoriteid=' + t.favorite_id + '>\n                    <img src="' + (t.favorite_id ? "https://c-ssl.duitang.com/uploads/item/201804/23/20180423122004_sYcGR.png" : "https://c-ssl.duitang.com/uploads/item/201804/23/20180423141044_YizTc.png") + '">\n                    <span class="detail-text">' + (t.favorite_count > 0 ? t.favorite_count : "收藏") + '</span>\n                </div>\n                <div class="more-action one-action">\n                    <img src="https://c-ssl.duitang.com/uploads/item/201804/23/20180423141044_tPCeh.png">\n                    <span class="detail-text">更多</span>\n                </div>\n            </div>\n\n            <div class="more-action-list">\n              <ul>\n                  <li class="share-weibo">\n                  <a class="sina" href="' + i + '" title="分享到新浪微博" target="_blank" onmousedown="$.G.gaq(\'/_trc/Social/article/sina\');">\n                  <i></i><p>分享至新浪微博</p>\n                  </a>\n                  </li>\n                  <li class="share-qq">\n                  <a class="qzone" href="' + a + '" title="分享到QQ空间" target="_blank" onmousedown="$.G.gaq(\'/_trc/Social/article/koukou\');">\n                  <i></i><p>分享至QQ空间</p>\n                  </a>\n                  </li>\n                  <li class="report">\n                  <i></i><p>举报</p>\n                  </li>\n                </ul>\n            </div>\n        </div>'
			},
			b = function(e, t) {
				return t.singleImg ? y(e, t) : $(e, t)
			},
			y = function(e, t) {
				var i = t.date_str,
					a = t.album_desc,
					n = t.blogs,
					o = t.feed_id,
					r = t.trace_info,
					c = t.id,
					u = t.sender,
					p = n.photo_path,
					f = (n.blog_id, n.img_show_height),
					m = n.is_cropped,
					v = d.dtImageTrans(p, !0, 600),
					g = "";
				h(v) && (v += "_jpeg", g += " gif-img"), m && (g += " long-img");
				var b = l(s, a);
				return '<div class="dynamic-feed-item dynamic-atlas" data-type="atlas" data-id="' + c + '" data-feedid="' + o + '" data-traceid="' + r.trace_id + '" data-traceinfo="' + r.trace_info + '">\n  <div class="feed-container">\n  ' + _(u, i) + '\n  <p class="dynamic-album-desc">' + b + '</p>\n  <span class="item-id" data-id="' + c + '"></span>\n  <a href="/p/atlas/?id=' + c + '" target="_blank" class="' + g + '">\n    <div class="dynamic-collect-single-img" style="height:' + f + 'px">\n      <img src="' + v + '" />\n    </div>\n  </a>\n  </div>\n  ' + w(t) + "\n  </div>"
			},
			$ = function(e, t) {
				var i = t.date_str,
					a = t.album_desc,
					n = t.blogs,
					o = t.feed_id,
					r = t.trace_info,
					c = t.id,
					u = t.sender,
					p = l(s, a),
					f = n.reduce((function(e, t, i) {
						var a = t.photo_path,
							n = (t.blog_id, d.dtImageSquare(a, 300)),
							o = "";
						return h(n) && (o += " gif-img"), e + '<a href="/p/atlas/?id=' + c + '" target="_blank" class="' + o + " " + (i % 3 == 0 ? "left-img" : "") + '">\n        <img class="dynamic-multi-img" src="' + n + '"/>\n      </a>'
					}), "");
				return '<div class="dynamic-feed-item dynamic-atlas" data-type="atlas" data-id="' + c + '" data-feedid="' + o + '" data-traceid="' + r.trace_id + '" data-traceinfo="' + r.trace_info + '">\n      <div class="feed-container">\n      ' + _(u, i) + '\n      <p class="dynamic-album-desc">' + p + '</p>\n      <span class="item-id" data-id="' + c + '"></span>\n      <div class="dynamic-multi-img-container digy-visit">\n      ' + f + "\n      </div>\n    </a>\n    </div>\n    " + w(t) + "\n    </div>\n    "
			},
			k = function(e, t) {
				var i = t.date_str,
					a = t.album_name,
					n = t.blogs,
					o = t.haveMore,
					s = t.moreNum,
					r = t.id,
					c = t.sender,
					l = s + 6,
					u = n.reduce((function(e, t, i) {
						var a = t.photo_path;
						return e + '<a href="/blog/?id=' + t.blog_id + '" target="_blank" class="' + (i % 3 == 0 ? "left-img" : "") + '">\n        <img class="dynamic-multi-img" src="' + d.dtImageSquare(a, 300) + '"/>\n        ' + (5 === i && o ? '<div class="dynamic-multi-img-more">+&nbsp;' + s + "</div>" : "") + "\n      </a>"
					}), "");
				return '<div class="dynamic-feed-item dynamic-album">\n  <div class="feed-container">\n  ' + _(c, i) + '\n  <p class="dynamic-album-desc">\n    <span class="dynamic-album-update">更新专辑&nbsp;\n    </span>' + a + '\n  </p>\n  <div class="dynamic-multi-img-container">\n     ' + u + '\n  </div>\n  <a href="/album/?id=' + r + '" target="_blank">\n  ' + (s + 6 > 9 ? '<div class="atlas-footer"><span>该专辑共更新&nbsp;' + l + "&nbsp;张图片</div></div>" : "") + "\n  </a>\n  </div>\n  " + w(t) + "\n  </div>"
			},
			x = function(e, t) {
				var i = t.feed_id,
					a = t.trace_info,
					n = t.date_str,
					o = t.title,
					s = t.photo_path,
					r = t.id,
					c = t.sender,
					l = d.dtImageTrans(s, !0, 400);
				return '<div class="dynamic-feed-item dynamic-video" data-type="video" data-id="' + r + '" data-feedid="' + i + '" data-traceid="' + a.trace_id + '" data-traceinfo="' + a.trace_info + '">\n  <div class="feed-container">\n  ' + _(c, n) + '\n    <p class="dynamic-album-desc">' + o + '</p>\n    <div class="dynamic-collect-video digy-visit">\n      <a href="/p/feedvideo/?id=' + r + '" target="_blank">\n        <span class="dynamic-collect-video-icon"></span>\n        <div class="dynamic-collect-img" style="background-image: url(' + l + ')"></div>\n      </a>\n    </div>\n    </div>\n    ' + w(t) + "\n  </div>"
			},
			I = function(e, t) {
				var i = t.date_str,
					a = (t.cover_desc, t.photo_path),
					n = t.title,
					o = t.feed_id,
					s = t.trace_info,
					r = t.id,
					c = t.sender,
					l = d.dtImageTrans(a, !0, 400);
				return /\.gif$/.test(l) && (l = l.replace(/\.gif$/, ".gif_jpeg")), '<div class="dynamic-feed-item dynamic-article" data-type="article" data-id="' + r + '" data-feedid="' + o + '" data-traceid="' + s.trace_id + '" data-traceinfo="' + s.trace_info + '">\n  <div class="feed-container">\n  ' + _(c, i) + '\n  <p class="dynamic-album-desc">' + n + '</p>\n    <a href="/article/?id=' + r + '" target="_blank">\n    <div class="dynamic-collect-article digy-visit">\n      <div class="dynamic-collect-article-userinfo">\n        <img src="' + c.avatar + '">\n        <span class="article-username">' + c.username + '</span>\n      </div>\n      <span class="dynamic-collect-article-tag"><i class="icon-article"></i>文章</span>\n      <div class="dynamic-collect-img" style="background-image: url(' + l + ')"></div>\n      <div class="dynamic-collect-article-bar"></div>\n    </div>\n    </a>\n    </div>\n    ' + w(t) + "\n    </div>"
			},
			T = function(e, t) {
				return t.singleImg ? y(e, t) : $(e, t)
			},
			C = function(e) {
				return e.feedList.reduce((function(e, t) {
					var i = "";
					switch (t.type) {
					case 1:
						i = k(0, t);
						break;
					case 2:
						i = b(u, t);
						break;
					case 3:
						i = x(0, t);
						break;
					case 4:
						i = I(0, t);
						break;
					case 5:
						i = T(u, t)
					}
					return e + i
				}), "")
			},
			q = function(e) {
				var t = e.userInfo;
				return e.dynamicList.reduce((function(e, i) {
					var a = "";
					switch (i.type) {
					case 1:
						a = k(0, i);
						break;
					case 2:
						a = b(t, i);
						break;
					case 3:
						a = x(0, i);
						break;
					case 4:
						a = I(0, i);
						break;
					case 5:
						a = T(t, i)
					}
					return e + a
				}), "")
			};
		e.exports = {
			fetchDynamicList: function e(t, i) {
				var a = t.first,
					n = t.refresh;
				p.dynamicList = [], c.ajax({
					url: t.url,
					type: "GET",
					data: {
						start: n ? Date.now() : p.start,
						limit: p.limit,
						first: n || a ? 1 : 0
					},
					success: function(a) {
						var n = a.status,
							o = a.data,
							s = o.more,
							r = o.object_list;
						if (1 === n) if (m(o), 1 === s && 0 === r.length) e(t, i);
						else {
							var c = q(p);
							i(c, p)
						}
					}
				})
			},
			fetchFeedList: function(e, t) {
				var i = e.refresh;
				f.feedList = [], c.ajax({
					url: e.url,
					type: "GET",
					data: {
						start: i ? 0 : f.start,
						limit: f.limit
					},
					success: function(e) {
						var i = e.status,
							a = e.data,
							n = a.more,
							s = a.object_list;
						if (1 === i) if (function(e) {
							var t;
							f.start = e.next_start, f.more = e.more, (t = f.feedList).push.apply(t, (0, o.
						default)(e.object_list.map(v)))
						}(a), 1 === n && 0 === s.length);
						else {
							var r = C(f);
							t(r, f)
						}
					}
				})
			}
		}
	},
	333: function(e, t, i) {
		"use strict";
		!
		function(e) {
			var t = e(window);
			e.fn.visible = function(i, a, n, o) {
				if (!(this.length < 1)) {
					n = n || "both";
					var s = this.length > 1 ? this.eq(0) : this,
						r = null != o,
						c = r ? e(o) : t,
						d = r ? c.position() : 0,
						l = s.get(0),
						u = c.outerWidth(),
						p = c.outerHeight(),
						f = !0 !== a || l.offsetWidth * l.offsetHeight;
					if ("function" == typeof l.getBoundingClientRect) {
						var m = l.getBoundingClientRect(),
							v = r ? m.top - d.top >= 0 && m.top < p + d.top : m.top >= 0 && m.top < p,
							g = r ? m.bottom - d.top > 0 && m.bottom <= p + d.top : m.bottom > 0 && m.bottom <= p,
							h = r ? m.left - d.left >= 0 && m.left < u + d.left : m.left >= 0 && m.left < u,
							_ = r ? m.right - d.left > 0 && m.right < u + d.left : m.right > 0 && m.right <= u,
							w = i ? v || g : v && g,
							b = i ? h || _ : h && _;
						w = m.top < 0 && m.bottom > p || w, b = m.left < 0 && m.right > u || b;
						if ("both" === n) return f && w && b;
						if ("vertical" === n) return f && w;
						if ("horizontal" === n) return f && b
					} else {
						var y = r ? 0 : d,
							$ = y + p,
							k = c.scrollLeft(),
							x = k + u,
							I = s.position(),
							T = I.top,
							C = T + s.height(),
							q = I.left,
							E = q + s.width(),
							S = !0 === i ? C : T,
							j = !0 === i ? T : C,
							G = !0 === i ? E : q,
							D = !0 === i ? q : E;
						if ("both" === n) return !!f && j <= $ && S >= y && D <= x && G >= k;
						if ("vertical" === n) return !!f && j <= $ && S >= y;
						if ("horizontal" === n) return !!f && D <= x && G >= k
					}
				}
			}
		}(jQuery)
	},
	4: function(e, t, i) {
		"use strict";
		var a = i(1),
			n = i(2),
			o = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
		n.registerHelper("ifCond", (function(e, t, i, a) {
			switch (t) {
			case "==":
				return e == i ? a.fn(this) : a.inverse(this);
			case "===":
				return e === i ? a.fn(this) : a.inverse(this);
			case "<":
				return e < i ? a.fn(this) : a.inverse(this);
			case "<=":
				return e <= i ? a.fn(this) : a.inverse(this);
			case ">":
				return e > i ? a.fn(this) : a.inverse(this);
			case ">=":
				return e >= i ? a.fn(this) : a.inverse(this);
			case "!=":
				return e != i ? a.fn(this) : a.inverse(this);
			case "&&":
				return e && i ? a.fn(this) : a.inverse(this);
			case "||":
				return e || i ? a.fn(this) : a.inverse(this);
			default:
				return a.inverse(this)
			}
		})), n.registerHelper("math", (function(e, t, i, a) {
			return {
				"+": (e = parseFloat(e)) + (i = parseFloat(i)),
				"-": e - i,
				"*": e * i,
				"/": e / i,
				"%": e % i
			}[t]
		})), n.registerHelper("if", (function(e, t) {
			return e ? t.fn(this) : t.inverse(this)
		})), n.registerHelper("duitang", (function(e) {
			return "http://www.duitang.com/" + e
		})), n.registerHelper("timePattern", (function(e) {
			var t = 1e3 * e - (new Date).getTime();
			if (t > 0) {
				var i = Math.floor(t / 1e3 / 3600 / 24),
					a = Math.floor(t / 1e3 / 3600 - 24 * i);
				return i + "天" + a + "时" + Math.floor((t - 1e3 * (60 * a * 60 - 24 * i * 3600)) / 1e6 / 60) + "分"
			}
		})), n.registerHelper("promotionDone", (function(e, t) {
			return 1e3 * e - (new Date).getTime() < 0 || t ? "done" : ""
		})), n.registerHelper("promotionUrl", (function(e, t, i) {
			return 1e3 * t - (new Date).getTime() < 0 || i ? "javascript:;" : "/shopping/temaihui/detail/" + e + "/?__urlopentype=pageweb"
		})), n.registerHelper("taobaoUrl", (function(e, t, i) {
			return 1e3 * t - (new Date).getTime() < 0 || i ? "javascript:;" : e
		})), n.registerHelper("truncate", (function(e, t) {
			return $.trim(e).substring(0, t)
		})), n.registerHelper("pcjump", (function(e, t) {
			var i = 1e3 * e - (new Date).getTime(),
				a = navigator.userAgent.toString().toLowerCase(),
				n = (a.match(/ipad/gi), !! a.match(/iphone/gi)),
				o = !! a.match(/android/gi);
			return i < 0 || t ? "target=_self" : n || o ? "" : "target=_blank"
		})), n.registerHelper("dtImageTrans", (function(e, t, i, n, s) {
			var r, c = (d = (d = $.trim(e).replace(/^http(s)?:\/\//gi, "")).split("/"))[0],
				d = d[1];
			return -1 == c.indexOf("duitang.com") || !d || "uploads" != d && "misc" != d ? e : (t ? (i = i || 0, n = n || 0, s = s ? "_" + s : "", r = a.dtImageTrans(e).replace(/(\.[a-z_]+)$/gi, ".thumb." + i + "_" + n + s + "$1")) : r = e.replace(/(?:\.thumb\.\w+|\.[a-z]+!\w+)(\.[a-z_]+)$/gi, "$1"), o || (r = r.replace(/_webp$/i, "")), r)
		})), n.registerHelper("dtImageSquare", (function(e, t) {
			var i, n = (s = (s = $.trim(e).replace(/^http(s)?:\/\//gi, "")).split("/"))[0],
				s = s[1];
			return -1 == n.indexOf("duitang.com") || !s || "uploads" != s && "misc" != s ? e : (i = a.dtImageSquare(e, t), o || (i = i.replace(/_webp$/i, "")), i)
		})), n.registerHelper("plus", (function(e, t) {
			return e + t
		})), n.registerHelper("exist", (function(e, t) {
			return e ? t.fn(this) : t.inverse(this)
		})), n.registerHelper("HbCut", (function(e, t) {
			return a.cut(e, t)
		})), n.registerHelper("HbContent", (function(e, t) {
			return a.trimLink(e)
		})), n.registerHelper("HbAddParam", (function(e, t, i) {
			return a.addParam(e, t, i)
		})), n.registerHelper("HbAddParamOpenTypePageWeb", (function(e) {
			return a.addParam(e, "__urlopentype", "pageweb")
		})), n.registerHelper("HbInc", (function(e) {
			return parseInt(e) + 1
		})), n.registerHelper("htmlescape", (function(e) {
			e = n.Utils.escapeExpression(e);
			var t = /(\n)/gi;
			return t.test(e) && (e = e.replace(t, "<br>").replace(/\r/, "").replace(/\s/gi, "&nbsp;")), new n.SafeString(e)
		}))
	},
	51: function(e, t, i) {
		"use strict";
		$((function() {
			if ("tbexperience" !== DtTools.getParams().source) {
				var e = $(".wrap-siderbar"),
					t = $(".main-list-content .right-content"),
					i = $(window),
					a = function(e, t) {
						$(".app-download-guide.side").sidepop({
							id: "app-download-guide",
							width: e,
							height: t,
							dockSide: 1,
							departure: "center",
							baseline: "top",
							bias: 100,
							scroll: 1,
							seat: !0,
							isFixed: !0,
							zIndex: 101,
							btnset: 0
						})
					};
				if (e.length > 0) {
					var n = '<div class="app-download-guide side" style="padding: 0px 10px 10px 28px;">\n                      <img src="https://c-ssl.duitang.com/uploads/item/202010/10/20201010143456_jkKFZ.png" alt="" style="width: 336px;">\n                  </div>';
					e.append(n), a(336, 280), i.resize((function() {
						$(".app-download-guide:not(.side,.top)").parent().remove(), $(".app-download-guide:not(.side,.top)").length > 0 || (e.append(n), a(336, 280))
					}))
				}
				if (t.length > 0) {
					var o = '<div class="app-download-guide side" style="display: flex;justify-content: center;align-items: center;">\n                      <img src="https://c-ssl.duitang.com/uploads/item/202010/10/20201010143456_jkKFZ.png" alt="" style="width: 200px;">\n                  </div>';
					t.append(o), a(200, 200), i.resize((function() {
						$(".app-download-guide:not(.side,.top)").parent().remove(), $(".app-download-guide:not(.side,.top)").length > 0 || (t.append(o), a(200, 200))
					}))
				}
			}
		}))
	},
	88: function(e, t, i) {
		"use strict";
		$((function() {
			$.fn.extend({
				carousel: function(e) {
					if (!(e && e.action && e.eventType)) return !1;
					e = $.extend({
						time: 0,
						lazyLoadImg: ".dt-carousel-img"
					}, e);
					var t, i, a = $(document),
						n = $(this),
						o = $(e.action),
						s = 0 | e.time,
						r = function(t) {
							var i, a, r, l, u;
							if (o.removeClass("cur"), o.eq(t).addClass("cur"), n.each((function(e, t) {
								(r = $(t)).hasClass("cur") && (l = r)
							})), l) {
								if ((i = (u = n.eq(t)).find(e.lazyLoadImg)).length && (a = i.attr("data-src")) && i.css({
									"background-image": "url(" + a + ")"
								}), n.index(l) !== t) {
									switch (e.animateType) {
									case "move":
										l.removeClass("cur"), u.addClass("cur");
										var p, f = $(e.carouselWrap);
										p = 0 !== t ? "-" + t + "00%" : "0%", f.stop(!0, !0), f.animate({
											left: p
										});
										break;
									default:
										if (e.fadeElement) {
											var m = l.find(e.fadeElement),
												v = u.find(e.fadeElement);
											m.stop(!0, !0), v.stop(!0, !0), l.removeClass("cur"), u.addClass("cur"), m.css({
												display: "block"
											}).fadeOut(1e3), v.css({
												display: "none"
											}).fadeIn(1e3)
										} else l.stop(!0, !0), u.stop(!0, !0), l.removeClass("cur").css({
											display: "block"
										}), u.addClass("cur").css({
											display: "none"
										}), l.fadeOut(1e3), u.fadeIn(1e3)
									}
									e.callback && e.callback(t, l, u, d, c)
								}
								0 !== s && d()
							}
						},
						c = function() {
							clearTimeout(t)
						},
						d = function a() {
							clearTimeout(t), t = setTimeout((function() {
								var t = $(e.action + ".cur"),
									s = o.index(t[0]);
								i = s === n.length - 1 ? 0 : s + 1, r(i), a()
							}), s)
						};
					e.left && e.right && a.delegate(e.left, "click", (function(t) {
						var a = $(e.action + ".cur"),
							c = o.index(a[0]);
						i = 0 === c ? n.length - 1 : c - 1, r(i), 0 !== s && d()
					})).delegate(e.right, "click", (function(t) {
						var a = $(e.action + ".cur"),
							c = o.index(a[0]);
						i = c === n.length - 1 ? 0 : c + 1, r(i), 0 !== s && d()
					})), a.delegate(e.action, e.eventType, (function(e) {
						$(this);
						var t = o.index(this);
						r(t)
					})), 0 !== s && d()
				}
			})
		}))
	}
}, [331]);