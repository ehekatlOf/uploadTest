/*global $*/

$(document).ready(function() {

    $('#uploadInput').on('change', function() {
        $('#fileName').text('name: ' + this.files[0].name);
        $('#fileType').text('type: ' + this.files[0].type);
        $('#fileSize').text('size: ' + this.files[0].size + ' bytes');
        $('#fileNull').text('last modified: ' + this.files[0].lastModifiedDate + ' bytes');
    });

});