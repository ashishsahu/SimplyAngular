// JavaScript Document

// First Tab
$(function() {
	// Create the dropdown base
	$("<select />").appendTo(".tabselectwrap");
	
	// Create default option "Go to..."
	$("<option />", {
	 "selected": "selected",
	 "value"   : "",
	 "text"    : "---Select---"
	}).appendTo(".tabselectwrap select");
	
	// Populate dropdown with menu items
	$(".tabselectwrap a").each(function() {
	var el = $(this);
	$("<option />", {
	   "value"   : el.attr("href"),
	   "text"    : el.text()
	}).appendTo(".tabselectwrap select");
	});
	
	// To make dropdown actually work
	// To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
	$(".tabselectwrap select").change(function() {
	window.location = $(this).find("option:selected").val();
	});

});




// Second Tab


$(function() {
	// Create the dropdown base
	$("<select />").appendTo(".dayztab");
	
	// Create default option "Go to..."
	$("<option />", {
	 "selected": "selected",
	 "value"   : "",
	 "text"    : "---Select---"
	}).appendTo(".dayztab select");
	
	// Populate dropdown with menu items
	$(".dayztab a").each(function() {
	var el = $(this);
	$("<option />", {
	   "value"   : el.attr("href"),
	   "text"    : el.text()
	}).appendTo(".dayztab select");
	});
	
	// To make dropdown actually work
	// To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
	$(".dayztab select").change(function() {
	window.location = $(this).find("option:selected").val();
	});

});