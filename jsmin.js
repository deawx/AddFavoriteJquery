// $(document).ready(function () {
//     var $ul = $('#favorite-links');
//     var $title = $('#title');
//     var $url = $('#url');

//     //get items from local storage
//     if (localStorage.getItem('vk-links')) {
//         $ul.html(localStorage.getItem('vk-links'));
//     }
//     // add new item
//     $('#add').click(function () {
//         if ($title.val().length > 1) {
//             $('#favorite-links').append('<li><a href="' + $url.val() + '">' + $title.val() + '</a><button class="removebtn  fa fa-remove"></button></li>');
//             //save changes to localstorage
//             localStorage.setItem('vk-links', $ul.html());
//             //reset form
//             $title.val("");
//             $url.val("http://");
//             $("#add-link-form").slideToggle("100");
//         }
//         else {
//             alert('Nhập title lớn hơn 1');
//         }
//     });

//     //remove item
//     $("#favorite-links").on('click', '.removebtn', function () {
//         $(this).parent().remove();
//         //save changes to localstorage
//         localStorage.setItem('vk-links', $ul.html());
//     });

//     //form toggle
//     $("#new-link-button").click(function () {
//         $("#add-link-form").slideToggle("100");
//     });

// });

$(document).ready(function(){

    const ul = $('ul');
    if(localStorage.getItem('data')){
        ul.html(localStorage.getItem('data'));
    }
    $('#add').click(function(){
        const title = $('#title').val();
        const url   = $('#url').val();
        if(title.length > 1){
            ul.append(`<li><a href="${url}"> ${title} </a><button class="removebtn fa fa-remove"></button></li>`)
            localStorage.setItem('data', ul.html());
            $('#title').val("");
            $('#url').val('http://');
            $("#add-link-form").slideToggle("100");
        }
        else
        {
            alert('vui long nhap title lon hon 1 ki tu')
        }
    })

    $("#favorite-links").on('click',()=>{
       localStorage.setItem('data',ul.html());
    })

    $('#favorite-links').on('click','.removebtn',function(){
        $(this).parent().remove();
    })

    $('#new-link-button').click(function(){
        $('#add-link-form').slideToggle('100');
    })
})

