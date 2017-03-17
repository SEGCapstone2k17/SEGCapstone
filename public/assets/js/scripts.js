
/*
 * Header.js
 * This file contains scripts related to the header functionality
 */

// Hide the dropdown if clicked outside
$(document).click(function() {
    if ($('#user-dropdown').hasClass('active')) {
        $('#user-dropdown').removeClass('active');
    }
});

// Show/hide user dropdown menu
window.onload = (function ()
{
    $('#user-select > a').click(function() {
        $('#user-dropdown').toggleClass('active');
        return false; // preventDefault and StopPropagation
    });
});

// Toggle sidebar on mobile
$('#sidebar-toggle').click(function(e) {
    e.preventDefault();
    $('#sidebar, #dashboard, body').toggleClass('active');
});

function initMap() {
    geocoder = new google.maps.Geocoder();
    var address = document.getElementById("my-address").value;

    geocoder.geocode({ 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
          var pos = {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()};
          var map = new google.maps.Map($('.map-locator:first')[0], {
          zoom: 13,
          center: pos
          });
          var marker = new google.maps.Marker({
          position: pos,
          map: map
          });
      }
      else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
}
