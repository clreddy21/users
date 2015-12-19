// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


function getusers() {
    var column_name_value = $('#column_name option:selected').text();

    jQuery.ajax({
        data: {column_name_value: column_name_value},
        type: 'get',
        url: "/users/get_users/:column_name",

        success: function (data, status, xhr) {

            var users_string = "<table><tbody><th>Id</th><th>First Name</th><th>Last Name</th><th>Mobile</th><th>Email</th><th>Created_at</th><th>Updated_at</th>";
            var users = data.users;

            for (var i = 0; i<users.length; i++) {
                users_string = users_string + "<tr><td>" + users[i].id + "</td><td>" + users[i].first_name + "</td><td>" +
                    users[i].last_name + "</td><td>" +
                    users[i].mobile + "</td><td>" +
                    users[i].email + "</td><td>" +
                    dateFormat(users[i].created_at, "mm/dd/yy, h:MM TT") + "</td><td>" +
                    dateFormat(users[i].updated_at, "mm/dd/yy, h:MM TT")  + "</td></tr>";
            }

            users_string = users_string + "</tbody></table>";

            $('#users_table').html(users_string);


        }
    });

}





$(document).ready(function(){

    $( "#column_name" ).change();
    getusers();


    $('#column_name').change(getusers)





});
