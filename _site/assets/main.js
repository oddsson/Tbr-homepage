$(document).ready(function(){$(".row img").on("click",function(){var o=$(this).attr("src"),l='<img src="'+o+'" width="570" height="570"/>',t=$(this).attr("id");$("#myModal").modal({}),$("#myModal").on("shown.bs.modal",function(){$("#myModal .modal-title").html(t),$("#myModal .modal-body").html(l)}),$("#myModal").on("hidden.bs.modal",function(){$("#myModal .modal-body").html("")})})}),$(".full img").on("click",function(){$(this).toggleClass("zoom")});