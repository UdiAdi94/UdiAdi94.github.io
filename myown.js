// Initialize collapse button
//  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();


  // Show sideNav
  // $('.button-collapse').sideNav('show');
  // // Hide sideNav
  // $('.button-collapse').sideNav('hide');
  // // Destroy sideNav
  // $('.button-collapse').sideNav('destroy');




  // SIDEBAR
$(document).ready(function(){
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  // START OPEN
  $('.button-collapse').sideNav('hide');
});