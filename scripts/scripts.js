function save_order(){var a=new Array;$("ul#sortable li").each(function(){a.push($(this).attr("id"))}),$.ajax({url:"edit_order_ajax.php",method:"POST",dataType:"text",data:{update:1,reorder:a},success:function(a){console.log(a)}})}function save_new_positions(){var a=[];$(".updated").each(function(){var b=$(this).attr("id"),c=b.substring(2);a.push([c,$(this).attr("sort")]),$(this).removeClass("updated")}),$.ajax({url:"sort_note.php",method:"POST",dataType:"text",data:{update:1,positions:a},success:function(a){console.log(a)}})}function save_search_order(){var a=[];$("ul#sortablesearch li.ct").each(function(){a.push($(this).attr("id"))}),$.ajax({url:"search_order_owner_ajax.php",method:"POST",dataType:"text",data:{update:1,reorder:a},success:function(a){console.log(a)}})}function save_search_shared_with(){var a=[];$("ul#sortablesearch li.ct").each(function(){a.push($(this).attr("id"))}),$.ajax({url:"search_order_shared_with_ajax.php",method:"POST",dataType:"text",data:{update:1,reorder:a},success:function(a){console.log(a)}})}setTimeout(function(){$("#success-wrap").fadeOut(750)},1250),$(document).ready(function(){$("a.project-links-empty").each(function(){$(this).closest("li").addClass("ea")})}),$(document).ready(function(){$(document).on("click","a[data-role=srcr]",function(){var a=$(this).data("id"),b=document.getElementById(a).value;if(/^ *$/.test(b)){var c=document.getElementById("h_"+a).value;document.getElementById(a).value=c,document.getElementById(a).focus()}else document.getElementById("h_"+a).value=b,document.getElementById(a).value="",document.getElementById(a).select()})}),$(document).ready(function(){$(document).on("click","a[data-role=srcb]",function(){var a=$(this).data("id"),b=document.getElementById(a).value,c=document.createElement("textarea");document.body.appendChild(c),c.value=b,c.select(),document.execCommand("copy"),document.body.removeChild(c);var d=$(this);$(this).html('<i class="fas fa-check fa-fw"></i>'),setTimeout(function(){d.html('<i class="far fa-copy fa-fw"></i>')},1e3)})}),$(document).ready(function(){$(document).on("click","a[data-role=cb]",function(){var a=$(this).data("id"),b=document.getElementById("cb_"+a).innerText,c=document.createElement("textarea");document.body.appendChild(c),c.value=b,c.select(),document.execCommand("copy"),document.body.removeChild(c);var d=$(this);$(this).html('<i class="fas fa-check fa-fw"></i>'),setTimeout(function(){d.html('<i class="far fa-copy fa-fw"></i>')},1e3)})}),$("a.static").click(function(a){a.preventDefault()}),$(document).ready(function(){hiConfig={sensitivity:3,interval:200,timeout:100,over:function(){$(this).children(".dropdown").stop().slideDown(250)},out:function(){$(this).children(".dropdown").slideUp(50)}},$(".menuitem").hoverIntent(hiConfig)}),$(document).ready(function(){$("#sortable").sortable({update:function(a,b){save_order()}})}),$(document).ready(function(){$("#sortanote").sortable({update:function(a,b){$(this).children().each(function(a){$(this).attr("sort")!=a+1&&$(this).attr("sort",a+1).addClass("updated")}),save_new_positions()}})}),$("#sortablesearch").sortable({cancel:"li.static",update:function(a,b){$("#sortablesearch li.static").each(function(){for(var a=$(this).attr("stay").replace("static-",""),b=$(this).index();b<a;)$(this).next().insertBefore(this),b++;for(;b>a;)$(this).prev().insertAfter(this),b--}),$(this).hasClass("owner")?save_search_order():save_search_shared_with()}}),$(document).ready(function(){$("#sortablesearch li.static").each(function(){$(this).attr("stay","static-"+$(this).index())})}),$(document).ready(function(){$(document).on("click","#emailBob",function(){$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$("#contactForm").serialize(),beforeSend:function(a){$("#msg").removeClass("show"),$("#emailBob-btn").html('<div class="sending-holup"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>')},success:function(a){a&&(console.log(a),"ok"==a.signal?($("#msg").removeClass("show"),$("#contactForm").html('<div class="success">Your message was sent successfully.</div><div id="emailBob-btn-insert"><div class="reset-contact">Reset</div></div>')):($("#msg").addClass("show"),$("#errorli").html(a.li),$("#emailBob-btn").html('<div id="emailBob">Send</div>')))},error:function(){$("#errorli").html("<li>There was an error between your IP and the server. Please try again later.</li>")},complete:function(){}})})}),$(document).ready(function(){$(document).on("click",".reset-contact",function(){$("#contactForm").load("_insert-contact.php")})}),$(document).ready(function(){$("#d").click(function(){$(this).addClass("selected"),$("#dict").addClass("selected"),$("#dic-row").addClass("selected"),$("#t").hasClass("selected")&&($("#t").removeClass("selected"),$("#thes").removeClass("selected"),$("#the-row").removeClass("selected"))}),$("#t").click(function(){$(this).addClass("selected"),$("#thes").addClass("selected"),$("#the-row").addClass("selected"),$("#d").hasClass("selected")&&($("#d").removeClass("selected"),$("#dict").removeClass("selected"),$("#dic-row").removeClass("selected"))}),$("input:checkbox.es").change(function(){$(this).is(":checked")?($(".edit").addClass("checked"),$(".editcheck").addClass("show"),$(".choice.edit").addClass("on")):($(".edit").removeClass("checked"),$(".editcheck").removeClass("show"),$(".choice.edit").removeClass("on"))}),$("input:checkbox.ts").change(function(){$(this).is(":checked")?($(".share").addClass("checked"),$(".sharecheck").addClass("show"),$(".choice.share").addClass("on")):($(".share").removeClass("checked"),$(".sharecheck").removeClass("show"),$(".choice.share").removeClass("on"))}),$(document).on("click","label.edit2",function(){$(this).hasClass("checked")?($("label.edit2").removeClass("checked"),$("#edit2").val("0"),$(".editcheck2").removeClass("show"),$(".choice.edit2").removeClass("on")):($("label.edit2").addClass("checked"),$("#edit2").val("1"),$(".editcheck2").addClass("show"),$(".choice.edit2").addClass("on"))}),$(document).on("click","label.share2",function(){$(this).hasClass("checked")?($("label.share2").removeClass("checked"),$("#share2").val("0"),$(".sharecheck2").removeClass("show"),$(".choice.share2").removeClass("on")):($("label.share2").addClass("checked"),$("#share2").val("1"),$(".sharecheck2").addClass("show"),$(".choice.share2").addClass("on"))}),$(".tab").hide(),$(".tab.active").show(),$(".tabs .tab-links input").on("click",function(a){var b=$(this).attr("name"),c="#",d=c.concat(b);"tab4"!==$(this).attr("name")&&$("#rememberOpenTab").val(d);var e=$("#rememberOpenTab").val();"tab4"===$(this).attr("name")&&$(this).hasClass("noteson")?($(this).removeClass("noteson"),$("#tab4").slideUp(100),$("#rememberOpenTab").val()?$(e).slideDown():$(".tab.active").slideDown(100)):$("#yotab4").hasClass("noteson")?($("#yotab4").removeClass("noteson"),$(".tabs "+d).slideDown(100).siblings().slideUp(100),$(this).closest("li").addClass("active").siblings().removeClass("active")):($(this).addClass("noteson"),$(".tabs "+d).slideDown(100).siblings().slideUp(100),$(this).closest("li").addClass("active").siblings().removeClass("active"))}),$(".project-details").hide(),$(".review-project").on("click",function(){var a=$(this),b=$(this).next(".project-details");$(".project-details").not(b).slideUp(),$(".review-project").not(a).removeClass("active"),$(b).slideToggle(),$(a).hasClass("active")?$(a).removeClass("active"):$(a).addClass("active")}),$(".review-project a.gth-link").on("click",function(a){var b=window.location.href;a.stopPropagation(),$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$(this).closest("form").serialize(),success:function(a){console.log(a),"ok"==a&&(b.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com"))},error:function(a){console.log(a)},complete:function(){}})})}),$(document).ready(function(){$(document).on("click",".gth-link",function(a){var b=window.location.href;a.stopPropagation(),$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$(this).closest("form").serialize(),success:function(a){console.log(a),"ok"==a&&(b.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com"))},error:function(a){console.log(a)},complete:function(){}})}),$(document).on("click",".vpp-link",function(){var a=window.location.href;$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$(this).closest("form").serialize(),success:function(b){console.log(b),a.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com")},error:function(a){},complete:function(){}})}),$(document).on("click",".osf-link",function(){var a=window.location.href;$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$(this).closest("form").serialize(),success:function(b){console.log(b),"ok"==b&&(a.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com"))},error:function(a){console.log(a)},complete:function(){}})}),$(document).on("click",".eo-link",function(){var a=window.location.href;$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$(this).closest("form").serialize(),success:function(b){"ok"==b?a.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com"):a.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget/new_project.php"):window.location.replace("https://browsergadget.com/new_project.php")},error:function(a){},complete:function(){}})}),$(document).on("click",".dp-link",function(){var a=window.location.href;$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$(this).closest("form").serialize(),success:function(b){"ok"==b&&(a.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com"))},error:function(a){},complete:function(){}})}),$(document).on("click",".sp-link",function(){var a=window.location.href;$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$(this).closest("form").serialize(),success:function(b){"ok"==b?a.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com"):alert("Something went awry. Will you please report this at the bottom of this page through the contact form so I can fix it? Reference ID: 1120230947")},error:function(){alert("Something went awry. Will you please report this at the bottom of this page through the contact form so I can fix it? Reference ID: 1120230948")},complete:function(){}})}),$(document).on("click",".epd-link",function(){var a=window.location.href;$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$(this).closest("form").serialize(),success:function(b){console.log(b),"ok"==b&&(a.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com"))},error:function(a){},complete:function(){}})}),$(document).on("click",".cancel-deets",function(){var a=window.location.href;$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:{"cancel-deets":"cancel"},success:function(b){console.log(b),"ok"==b&&(a.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com"))},error:function(a){},complete:function(){}})}),$(document).on("click",".submit-deets",function(){var a=window.location.href;$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$(this).closest("form").serialize(),beforeSend:function(a){$("#message").removeClass("red"),$("#buttons").html('<div class="verifying"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>')},success:function(b){console.log(b),"ok"==b.signal?a.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com"):($("#message").addClass("red"),$("#msg-ul").html(b.li),$("#buttons").html('<a class="cancel cancel-deets">Cancel</a><a class="submit submit-deets">Try again</a>'))},error:function(a){console.log(a)},complete:function(){}})}),$("#delete-form").keyup(function(a){13===a.keyCode&&$(".delete-my-project").click()}),$("#delete-form").submit(function(a){a.preventDefault()}),$(document).on("click",".delete-my-project",function(){var a=window.location.href;$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$(this).closest("form").serialize(),beforeSend:function(a){$("#message").removeClass("red"),$("#buttons").html('<div class="verifying"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>')},success:function(b){console.log(b),"ok"==b.signal?a.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com"):($("#message").addClass("delete-page"),$("#message").addClass(b.class),$("#msg-ul").html(b.li),$("#buttons").html('<a class="cancel cancel-deets">Never mind</a><a class="delete delete-my-project">Try again?</a>'))},error:function(a){},complete:function(){}})}),$(document).on("click",".cancel-new-project",function(){var a=window.location.href;$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$("#new-project-cancel-btn").serialize(),success:function(b){console.log(b),"ok"==b?a.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com"):($("#message").addClass("red"),$("#msg-ul").html("Something went wrong. May be a server thing. You can try again but if it still doesn't work you will need to try later"),$("#buttons").html('<a class="cancel cancel-new-project">Cancel</a><a class="submit submit-deets">Try again</a>'))},error:function(a){console.log(a)},complete:function(){}})}),$("#sharep").keyup(function(a){13===a.keyCode&&$(".shareproject").click()}),$("#sharep").submit(function(a){a.preventDefault()}),$(document).on("click",".shareproject",function(){window.location.href;$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$(this).closest("form").serialize(),beforeSend:function(a){$("#message").removeAttr("class"),$("#user-email").removeClass("red"),$("#buttons").html('<div class="verifying"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>')},success:function(a){console.log(a),"ok"==a.signal?($("#user-email").removeClass("red"),$("#message").addClass(a.class),$("#msg-ul").html(a.li),$("#user-email").val(""),$(".edit").removeClass("checked"),$(".editcheck").removeClass("show"),$(".share").removeClass("checked"),$(".sharecheck").removeClass("show"),$("#buttons").html('<a class="shareproject submit full-width">Add another</a>'),$("#shared-list").html(a.shared_names),$("html, body").animate({scrollTop:0},250)):($("#message").addClass(a.class),$("#msg-ul").html(a.li),$("#user-email").addClass(a.eclass),$("#buttons").html('<a class="shareproject submit full-width">Try again</a>'))},error:function(a){},complete:function(){}})}),$(document).on("click",".removeshareduser",function(){window.location.href;if(0!=$("#theModal").length)var a=document.getElementById("theModal");$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$(this).closest("form").serialize(),beforeSend:function(a){$("#message").removeAttr("class")},success:function(b){console.log(b),"ok"==b.signal?($("#message").addClass(b.class),$("#msg-ul").html(b.li),$("#shared-list").html(b.shared_names),void 0!==a&&(a.style.display="none"),$("html, body").animate({scrollTop:0},250)):($("#message").addClass(b.class),$("#msg-ul").html(b.li),$("#buttons").html('<a class="shareproject submit full-width">Try again</a>'))},error:function(a){},complete:function(){}})}),$(document).on("click",".editshareduser",function(){var a=$(this).data("id"),b=$("#"+a+"_project_id").val(),c=$("#"+a+"_dsuser").val(),d=$("#"+a+"_project_name").val(),e=$("#"+a+"_username").val(),f=$("#"+a+"_edit").val(),g=$("#"+a+"_share").val(),h=document.getElementById("theModal");$("#smht").html(e),$("#delete-shared-user").val(c),$("#pro-id").val(b),$("#username").val(e),$("#project_name").val(d),"1"==f?($("#edit2").val("1"),$("label.edit2").addClass("checked"),$(".editcheck2").addClass("show"),$(".choice.edit2").addClass("on")):($("#edit2").val("0"),$("label.edit2").removeClass("checked"),$(".editcheck2").removeClass("show"),$(".choice.edit2").removeClass("on")),"1"==g?($("#share2").val("1"),$("label.share2").addClass("checked"),$(".sharecheck2").addClass("show"),$(".choice.share2").addClass("on")):($("#share2").val("0"),$("label.share2").removeClass("checked"),$(".sharecheck2").removeClass("show"),$(".choice.share2").removeClass("on")),h.style.display="block"}),$(document).on("click",".updateshareduser",function(){var a=$("#delete-shared-user").val(),b=$("#pro-id").val(),c=$("#edit2").val(),d=$("#share2").val(),e=$("#project_name").val(),f=$("#username").val();$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:{updateshareduser:"yo",project_id:b,project_name:e,username:f,esuser:a,edit:c,share:d},beforeSend:function(a){},success:function(a){"ok"==a.signal&&($("#message").addClass(a.class),$("#msg-ul").html(a.li),$("#shared-list").html(a.shared_names),theModal.style.display="none",$("html, body").animate({scrollTop:0},250))},error:function(a){},complete:function(){}})}),$(document).on("click",".removeme",function(){var a=window.location.href,b=$("#project_name").val();$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$(this).closest("form").serialize(),beforeSend:function(a){return $("#message").removeAttr("class"),$("#user-email").removeClass("red"),confirm("Confirm: Remove yourself from "+b+"?")},success:function(b){console.log(b),"ok"==b.signal?a.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com"):($("#message").addClass(b.class),$("#msg-ul").html(b.li),$("#buttons").html('<a class="shareproject submit full-width">Try again</a>'))},error:function(a){console.log(a)},complete:function(){}})}),$(document).on("click",".leaveproject",function(){var a=window.location.href,b=$("#project_name").val();$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$(this).closest("form").serialize(),beforeSend:function(a){return confirm("Confirm: Remove yourself from "+b+"?")},success:function(b){"ok"==b&&(a.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com"))},error:function(a){},complete:function(){}})}),$(document).on("click",".np-link",function(){var a=window.location.href;$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$(this).closest("form").serialize(),success:function(b){console.log(b),"ok"==b&&(a.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com"))},error:function(a){},complete:function(){}})}),$("#new-project-form").keyup(function(a){13===a.keyCode&&$(".createnewproject").click()}),$("#new-project-form").submit(function(a){a.preventDefault()}),$(document).on("click",".createnewproject",function(){var a=window.location.href;if(document.getElementById("can-opt"))var b="off";else var b="on";$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:$(this).closest("form").serialize(),beforeSend:function(a){$("#message").removeClass("red"),$("#buttons").html('<div class="verifying"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>')},success:function(c){console.log(c),"ok"==c.signal?a.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com"):($("#message").addClass("red"),$("#msg-ul").html(c.li),"off"==b?$("#buttons").html('<a class="submit full-width createnewproject">Try again</a>'):$("#buttons").html('<a class="cancel cancel-new-project">Cancel</a><a class="submit createnewproject">Try again</a>'))},error:function(a){console.log(a)},complete:function(){}})})}),$(document).on("click","#textbox",function(){document.getElementById("textbox").addEventListener("keydown",function(a){if("Tab"==a.key){a.preventDefault();var b=this.selectionStart,c=this.selectionEnd;this.value=this.value.substring(0,b)+"\t"+this.value.substring(c),this.selectionStart=this.selectionEnd=b+1}})}),$(document).ready(function(){$("#email-bob").hide(),$("#toggle-contact-form").click(function(){return $(this).toggleClass("active").next().slideToggle(600),"close"===$.trim($(this).text())?$(this).html('<i class="fa fa-star" aria-hidden="true"></i><span class="tiny-mobile">&nbsp;&nbsp;</span> comments | questions | suggestions <span class="tiny-mobile">&nbsp;&nbsp;</span><i class="fa fa-star" aria-hidden="true"></i>'):$(this).html('<i class="fa fa-times-circle close-left" aria-hidden="true"></i> close <i class="fa fa-times-circle close-right" aria-hidden="true"></i>'),!1})}),$("form.ajax").on("submit",function(){var a=$(this),b=a.attr("action"),c=a.attr("method"),d={};return a.find("[name]").each(function(a,b){var c=$(this),e=c.attr("name"),b=c.val();d[e]=b}),$.ajax({url:b,type:c,data:d,success:function(a){}}),!1}),$(document).ready(function(){$("#edit-content").click(function(){var a=document.getElementById("static-sort"),b=document.getElementById("edit-content");a.classList.toggle("edit-shim"),b.classList.toggle("active");var c=document.getElementById("et1");c=c.checked?"0":"1";var d=$("#userid").val(),e=$("#curpro").val(),f=$("#ownShare").val();$.ajax({url:"ajax_edit_toggle.php",method:"post",data:{ownShare:f,editValue:c,userId:d,currentProject:e},success:function(a){console.log("update successful")}});var g=$('#et-form input[type="checkbox"]');g.attr("checked",!g.attr("checked"))})}),$(document).ready(function(){if($(document).on("click","a[data-role=update]",function(){var a=$(this).data("id"),b=$("#"+a).children("a[data-target=urlz]").attr("href"),c=$("#"+a).children("a[data-target=urlz]").text(),d=$("#"+a).children("span[data-target=rowid]").text(),e=$("#"+a).children("span[data-target=idcount]").text(),f=document.getElementById("theModal");$("#urlz").val(b),$("#name").val(c),$("#rowid").val(d),$("#idcount").val(e),f.style.display="block"}),document.getElementsByClassName("closefp").length){document.getElementsByClassName("closefp")[0].onclick=function(){theModal.style.display="none"}}$(".update-bookmark").click(function(){var a=window.location.href,b=$("#idcount").val(),c=$("#name").val(),d=$("#urlz").val(),e=$("#rowid").val(),f=$("#cp").val();/^((http|https|ftp):\/\/)/.test(d)||(d="http://"+d),""==(c&&d)&&(theModal.style.display="none",exit()),$.ajax({dataType:"JSON",url:"_form-processing.php",type:"POST",data:{updatebookmark:"yo",name:c,urlz:d,rowid:e,cp:f},success:function(e){"ok"==e?($("#"+b).children("a[data-target=urlz]").attr("href",d),$("#"+b).children("a[data-target=urlz]").text(c),$("#"+b).closest("li").removeClass("ea"),$("#"+b).children("a[data-target=urlz]").removeClass("project-links-empty"),$("#"+b).children("a[data-target=urlz]").removeClass("shim"),$("#"+b).children("a[data-target=urlz]").addClass("project-links")):a.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com")},error:function(a){console.log(a)},complete:function(){}}),theModal.style.display="none"}),$(".delete-bookmark").click(function(){var a=window.location.href,b=$("#idcount").val(),c=$("#rowid").val(),d=$("#cp").val();$.ajax({dataType:"JSON",url:"_form-processing.php",method:"POST",data:{deletebookmark:"yo",rowid:c,cp:d},success:function(c){"ok"==c?($("#"+b).children("a[data-target=urlz]").attr("href",""),$("#"+b).children("a[data-target=urlz]").text(""),$("#"+b).closest("li").addClass("ea"),$("#"+b).children("a[data-target=urlz]").removeClass("project-links"),$("#"+b).children("a[data-target=urlz]").addClass("shim"),$("#"+b).children("a[data-target=urlz]").addClass("project-links-empty")):a.indexOf("localhost")>-1?window.location.replace("http://localhost/browsergadget"):window.location.replace("https://browsergadget.com")},error:function(a){console.log(a)},complete:function(){}}),theModal.style.display="none"})}),$(document).ready(function(){var a="* Notes are not shared within project.",b='<form class="edit-link-form">';b+='<input type="hidden" name="cp" id="aancp">',b+='<input type="hidden" name="nid" id="nid">',b+="<label>Name | > 18 chars will be trimmed",b+='<input name="name" id="aanName" class="edit-input link-name" type="text" maxlength="200">',b+="</label>",b+="<label>URL | Makes the name a hyperlink",b+='<input name="url" id="aanUrl" class="edit-input link-name" type="text" maxlength="2000" placeholder="http://">',b+="</label>",b+="<label>Note | Limit 10,000 characters",b+='<textarea name="note" id="aanNote" class="edit-input link-url" maxlength="10000" type="text"></textarea>',b+="</label>",b+='<label class="clipboard">',b+='<input type="checkbox" name="clipboard" id="aanClipboard">',b+=" Add &quot;Copy to clipboard&quot; icon (Grabs note to clipboard)",b+="</label>",b+='<label class="clipboard">',b+='<input type="checkbox" name="truncate" id="aanTruncate">',b+=" Truncate long note (only show first 32 characters)",b+="</label>",b+='<div class="submit-links">',b+='<a data-role="notesClose" class="cancel">Cancel</a>',b+='<a id="update-note" class="submit">Add note</a>',b+='<a id="modify-note" class="submit">Modify note</a>',b+="</div>",b+="</form>";var c="Only you will see your notes.";$(document).on("click","a[data-role=notes]",function(){var a=document.getElementById("aan-modal"),b=document.getElementById("update-note"),c=document.getElementById("modify-note"),d=document.getElementById("thats-all"),e=$("#cpid").val(),f=$("[data-role=notecount]").val(),g=$("[data-role=notecountz]").val();g=void 0!==g?g:f;var h=g;0==h?($(".aan-modal-footer").attr("class","aan-modal-footer"),$("#im-watchin").html("Your first little note. Aww. :-)")):1==h?($(".aan-modal-footer").attr("class","aan-modal-footer"),$("#im-watchin").html("&nbsp;")):2==h?($(".aan-modal-footer").attr("class","aan-modal-footer"),$("#im-watchin").html("&nbsp;")):3==h?($(".aan-modal-footer").attr("class","aan-modal-footer"),$("#im-watchin").html("&nbsp;")):4==h?($(".aan-modal-footer").attr("class","aan-modal-footer"),$("#im-watchin").html("&nbsp;")):5==h?($(".aan-modal-footer").attr("class","aan-modal-footer num5"),$("#im-watchin").html("You have 5 notes remaining.")):6==h?($(".aan-modal-footer").attr("class","aan-modal-footer"),$("#im-watchin").html("&nbsp;")):7==h?($(".aan-modal-footer").attr("class","aan-modal-footer num8"),$("#im-watchin").html("This is note #8. There is a 10 note limit.")):8==h?($(".aan-modal-footer").attr("class","aan-modal-footer num9"),$("#im-watchin").html("This is note #9. You're a note maniac.")):9==h?($(".aan-modal-footer").attr("class","aan-modal-footer num10"),$("#im-watchin").html("Don't say I didn't warn you.")):10==h&&(d.style.display="block",exit()),$("#aancp").val(e),$("#thatll-do").removeClass("delete"),$(".aan-modal-header").removeClass("delete"),$("input#aanClipboard").prop("checked",!1),$("input#aanTruncate").prop("checked",!1),c.style.display="none",b.style.display="block",a.style.display="block"}),$(document).on("click","[data-role=notesClose]",function(){var a=document.getElementById("aan-modal"),b=document.getElementById("thats-all");$("#thatll-do").removeClass("delete"),$("#aanName").val(""),$("#aanUrl").val(""),$("#aanNote").val(""),$("input#aanClipboard").prop("checked",!1),$("input#aanTruncate").prop("checked",!1),a.style.display="none",b.style.display="none"}),$("#update-note").click(function(){var a=document.getElementById("aan-modal"),b=(document.getElementById("update-note"),document.getElementById("modify-note"),$("[data-role=maxsort]").val()),c=$("[data-role=maxsortz]").val();c=void 0!==c?c:"0";var d=Math.max(b,c),e=$("[data-role=notecount]").val(),f=$("[data-role=notecountz]").val();f=void 0!==f?f:"0";var g=(Math.max(e,f),$("#cp").val()),h=$("#aanName").val(),i=$("#aanUrl").val(),j=$("#aanNote").val(),k=document.getElementById("aanClipboard"),l=document.getElementById("aanTruncate"),m=/^((http|https|ftp):\/\/)/;""!=i?m.test(i)||(i="http://"+i):i="",k=k.checked?"1":"0",l=l.checked?"1":"0",$.ajax({url:"_form-processing.php",method:"post",data:{new_or_update_a_note:"yo",sort:d,cp:g,name:h,urly:i,note:j,clipboard:k,truncate:l},success:function(a){$("#usersnotes").load("usersnotes.php")}}),$("#aanName").val(""),$("#aanUrl").val(""),$("#aanNote").val(""),$("input #aanClipboard").prop("checked",!1),$("input #aanTruncate").prop("checked",!1),a.style.display="none"}),$(document).on("click","a[data-role=modify-note]",function(){var a=$(this).data("id"),b=a.substring(2),c=$("#cpid").val(),d=$("#z_"+b).find('a[data-target="urln"]').attr("href"),e=($("#z_"+b).find('[data-target="urln"]').text(),$("#z_"+b).find('[data-target="cb"]').text()),f=$("#z_"+b).find('a[data-id="'+b+'"]'),g=$("#z_"+b).find('[data-target="namet"]').text(),h=$("#z_"+b).find('a[data-id="trunc_'+b+'"]');f.length?$("input#aanClipboard").prop("checked",!0):$("input#aanClipboard").prop("checked",!1),h.length?$("input#aanTruncate").prop("checked",!0):$("input#aanTruncate").prop("checked",!1),$(".aan-modal-header").removeClass("delete"),$("#aancp").val(c),$("#aanUrl").val(d),$("#aanName").val(g),$("#aanNote").val(e),$("#nid").val(b),$("#im-watchin").html("&nbsp;");var i=document.getElementById("aan-modal"),j=document.getElementById("update-note"),k=document.getElementById("modify-note");i.style.display="block",j.style.display="none",k.style.display="block"}),$(document).on("click","#modify-note",function(){var a=document.getElementById("aan-modal"),b=$("#nid").val(),c=$("#aanName").val(),d=$("#aanUrl").val(),e=$("#aanNote").val(),f=document.getElementById("aanClipboard"),g=document.getElementById("aanTruncate"),h=/^((http|https|ftp):\/\/)/;""!=d?h.test(d)||(d="http://"+d):d="",f=f.checked?"1":"0",g=g.checked?"1":"0",$.ajax({url:"_form-processing.php",method:"post",data:{modify_a_note:"yo",name:c,urly:d,note:e,clipboard:f,truncate:g,nid:b},success:function(a){$("#usersnotes").load("usersnotes.php")}}),$("#aanName").val(""),$("#aanUrl").val(""),$("#aanNote").val(""),$("input #aanClipboard").prop("checked",!1),a.style.display="none"}),$(document).on("click","a[data-role=deletenote]",function(){var d=document.getElementById("aan-modal"),e=$(this).closest("form").find("[data-role=deletethis]").val(),f=$(this).closest("form").find("[data-role=notename]").val(),g='<input type="hidden" id="deletenoteid" value="'+e+'">';g+='<p>Confirm delete of note named, "'+f+'"</p>',g+='<div id="buttons">',g+='<a class="cancel canceldeletenote">Cancel</a>',g+='<a class="cancel delete deleteanote">Delete</a>',g+="</div>",$(".aan-modal-header").addClass("delete"),$(".aan-modal-body").addClass("delete"),$("#header-msg").html("Confirm deletion"),$("#thatll-do").html(g),$("#im-watchin").html("&nbsp;"),d.style.display="block",$(".deleteanote").click(function(){$("#deletenoteid").val();$.ajax({url:"_form-processing.php",method:"post",data:{delete_a_note:"yo",noteid:e},success:function(e){"ok"==e&&($("#header-msg").html("Gone like the wind"),$("#thatll-do").html("That note is history."),setTimeout(function(){d.style.display="none"},1500),setTimeout(function(){$(".aan-modal-header").removeClass("delete"),$(".aan-modal-body").removeClass("delete"),$("#header-msg").html(a),$("#thatll-do").html(b),$("#im-watchin").html(c)},1550),$("#usersnotes").load("usersnotes.php"))}})})}),$(document).on("click",".canceldeletenote",function(){
document.getElementById("aan-modal").style.display="none",$(".aan-modal-header").removeClass("delete"),$(".aan-modal-body").removeClass("delete"),$("#header-msg").html("* Notes are not shared within project."),$("#thatll-do").html(b),$("#im-watchin").html(c)})}),$(document).ready(function(){$(document).on("click","i[data-role=edit-portal]",function(){if($("#multi-pass").html().length)var a=$("#note-portal").html().replaceAll("<br>","\n").replaceAll("<br><br>","\n\n").trim();else var a=$("#note-portal").html().replaceAll("<br>\n","\n").replaceAll("<br>\n<br>","\n").trim();$("#note-portal").addClass("portal-display"),$("#nei").html('<a data-id="temp-value" data-role="unote" class="sicon"><div class="tooltip"><span class="tooltiptext type">Save Edit</span><i class="far fa-save"></i></div></a> <a data-role="cnote" data-id="tempz-value" class="reason-note rt cicon"><div class="tooltip right"><span class="tooltiptext type">Cancel Edit</span><i class="fas fa-ban"></i></div></a>'),$(".empty-note-portal")[0]?$("#note-portal").html('<form id="revise-proj-notes"><textarea id="proj-notes" name="proj-notes" maxlength="1250"></textarea></form>'):$("#note-portal").html('<form id="revise-proj-notes"><textarea id="proj-notes" name="proj-notes" maxlength="1250">'+a+"</textarea></form>")}),$(document).on("click","a[data-role=cnote]",function(){if($("#multi-pass").html().length)var a=$("#multi-pass").html();else if($("#first-pass").html().length)var a=$("#first-pass").html();else var a="This project has nary a note.";$("#note-portal").html(a),$("#nei").html('<a class="eicon"><div class="tooltip"><span class="tooltiptext">Edit notes</span><i data-role="edit-portal" class="far fa-edit fa-fw"></i></div></a>'),$("#note-portal").removeClass("portal-display")}),$(document).on("click","a[data-role=unote]",function(){var a=$("#proj-notes").val().replaceAll("\n","<br>").trim();$.ajax({dataType:"JSON",url:"edit_project_notes.php",type:"POST",data:$("#revise-proj-notes").serialize(),beforeSend:function(a){},success:function(b){if(b)if("ok"==b.signal){var c=$("#proj-notes").val();$("#proj-notes").val()&&c.replace(/\s/g,"").length?($("#nei").html('<a class="eicon"><div class="tooltip"><span class="tooltiptext">Edit notes</span><i data-role="edit-portal" class="far fa-edit fa-fw"></i></div></a>'),$("#note-portal").removeClass("portal-display"),$("#note-portal").removeClass("empty-note-portal"),$("#note-portal").html(a),$("#multi-pass").html(a)):($("#nei").html('<a class="eicon"><div class="tooltip"><span class="tooltiptext">Edit notes</span><i data-role="edit-portal" class="far fa-edit fa-fw"></i></div></a>'),$("#note-portal").removeClass("portal-display"),$("#note-portal").addClass("empty-note-portal"),$("#note-portal").html("This project has nary a note."),$("#first-pass").html(""),$("#multi-pass").html(""))}else $("#note-portal").html('<div class="alert alert-warning ump">'+b.msg+"</div>")},error:function(){$("#note-portal").html('<div class="alert alert-warning">There was an error somehow, somewhere and I don\'t think that worked. Refresh this page and try again.</div>')},complete:function(){}})})});