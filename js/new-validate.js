$(document).ready(function() {

    console.log("fdsafd");
    $(".add-video-form").each(function() {
        var it = $(this);
        it.validate({
            rules: {
                video_name:{
                    required:true,
                },
                video_addres:{
                    required:true,
                },
                video_url:{
                    required:true,
                    minlength: 4,
                    regx: /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/
                },
            },
            
            // messages: {
            // 	required: true,
            // 	youtube:"неправильный email"
            // },
            submitHandler: function() {
                $(".fancybox-button--close").trigger("click");
                var link = $("#url_field").val();
                var name = $("#name_field").val();
                var addres = $("#addres_field").val();
                it.find('input, textarea').val("");
                var myregexp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
                var yt_id = link.match(myregexp)[1];
                var yt_img = "https://img.youtube.com/vi/" + yt_id + "/0.jpg";
                var yt_link = "https://www.youtube.com/embed/" + yt_id ;
                // $('.object__image-link').attr("href", yt_link);
                // $('.object__image-link').css("background-image", "url("+yt_img+ ")");
                $("#objects-videos").append('<li class="object"><a class="object__image" data-fancybox href="'+ yt_link +'" style="background-image: url('+ yt_img +')"></a><h3 class="object__title">'+ name +'</h3><p class="object__text">'+ addres +'</p><div class="object__links"><a class="object__edit" href="#edit-video" data-fancybox>Редактировать</a><a class="object__delete" href="#">Удалить</a></div></li>');
            },
        });
    });

    $(".edit-video-form").each(function() {
        var itis = $(this);
        itis.validate({
            rules: {
                video_name:{
                    required:true,
                },
                video_addres:{
                    required:true,
                },
                video_url:{
                    required:true,
                    minlength: 4,
                    regx: /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/
                },
            },
            
            // messages: {
            // 	required: true,
            // 	youtube:"неправильный email"
            // },
            submitHandler: function() {
                console.log(itis.find('#iter').val())

                var it = $('.object:nth-child('+itis.find('#iter').val()+')');
                $(".fancybox-button--close").trigger("click");
                var linkx = $("#url_fieldx").val();
                var namex = $("#name_fieldx").val();
                var addresx = $("#addres_fieldx").val();
                var myregexp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
                var yt_id = linkx.match(myregexp)[1];
                var yt_img = "https://img.youtube.com/vi/" + yt_id + "/0.jpg";
                var yt_link = "https://www.youtube.com/embed/" + yt_id;
                itis.find('input, textarea').val("");
                // $('.object__image-link').attr("href", yt_link);
                // $('.object__image-link').css("background-image", "url("+yt_img+ ")");
                // $("#objects-videos").append('<li class="object"><a class="object__image" data-fancybox href="'+ yt_link +'" style="background-image: url('+ yt_img +')"></a><h3 class="object__title">'+ name +'</h3><p class="object__text">'+ addres +'</p><div class="object__links"><a class="object__edit" href="#edit-video">Редактировать</a><a class="object__delete" href="#">Удалить</a></div></li>');
                it.find(".object__image").attr("href", yt_link);
                it.find(".object__image").css("background-image", "url("+yt_img+ ")");
                it.find(".object__title").text(namex);
                it.find(".object__text").text(addresx);
                
            },  
        });
    });

    $(".add-object-form").each(function() {
        var it = $(this);
        it.validate({
            rules:{
                nameObject:{
                    required:true,
                },
                addresObject:{
                    required:true,
                },
            },
            submitHandler: function() {
                var name = $("#objectName").val();
                var addres = $("#objectAddres").val();
                it.find('input').val("");
                console.log(addres);

                var imgUrl= $(".photo-item-img").attr("href");
                
                $(".fancybox-button--close").trigger("click");
                $("#objects-images").append('<li class="object object-img"><a class="object__image" data-fancybox style="background-image: url('+imgUrl+');" href="'+imgUrl+'"></a><h3 class="object__title">'+name+'</h3><p class="object__text">'+addres+'</p><div class="object__links"><a class="object__edit-object" href="#edit-object-form">Редактировать</a><a class="object__delete" href="#">Удалить</a></div></li>');
                // console.log($(".object-img:nth-child(2) .photo__image").attr("style"))
                var fdsajklfdsa = $(".js-remove").attr("href");
                $("#edit_objectName").val(name)
                $("#edit_objectAddres").val(addres)
            },  
        });

    });

    $(".edit-object-form").each(function() {
        var itis = $(this);
        itis.validate({
            rules: {
                video_name:{
                    required:true,
                },
                video_addres:{
                    required:true,
                },
            },
            
            // messages: {
            // 	required: true,
            // 	youtube:"неправильный email"
            // },
            submitHandler: function() {
                var name = $("#objectName").val();
                var addres = $("#objectAddres").val();
                it.find('input').val("");
                console.log(addres);

                var imgUrl= $(".photo-item-img").attr("href");
                console.log();
                
                $(".fancybox-button--close").trigger("click");
                $("#objects-images").append('<li class="object object-img"><a class="object__image" data-fancybox style="background-image: url('+imgUrl+');" href="'+imgUrl+'"></a><h3 class="object__title">'+name+'</h3><p class="object__text">'+addres+'</p><div class="object__links"><a class="object__edit-object" href="#edit-object-form">Редактировать</a><a class="object__delete" href="#">Удалить</a></div></li>');
                // console.log($(".object-img:nth-child(2) .photo__image").attr("style"))
                var fdsajklfdsa = $(".js-remove").attr("href");
                
                
            },  
        });
    });

    $(".js-validation-complaint").each(function() {
        var it = $(this);
        it.validate({
            rules:{
                email:{
                    required:true,
                    email:true
                },
                complaint: {
                    required: true,
                },
            },
            messages: {
                required: true,
                email:"неправильный email"
            },
            submitHandler: function() {
                ('fdsafsad');
                it.find("input, textarea").val('');
            },  
        });

    });

    $(".new-form-sign").each(function() {
        var it = $(this);
        it.validate({
            rles:{
                video_name:{
                    required:true,
                },
                video_addres:{
                    required:true,
                },
                video_url:{
                    required:true,
                    url: true,
                }
            },
            submitHandler: function() {
                
            },  
        });

    });

    $(".js-validation-1").each(function() {
        var it = $(this);
        it.validate({
            rules:{
                email:{
                    required:true,
                    email:true
                }
            },
            messages: {
                email:"неправильный email"
            },
            submitHandler: function() {
                it.find("input, textarea").val('');
            },  
        });

    });
    
    $(".js-validation-2").each(function() {
        var it = $(this);
        it.validate({
            rules:{
                /*
                phone:{
                    required:true,
                    minlength:10,
                    maxlength:10,
                    phoneUS:true
                },
                */
                email:{
                    required:true,
                    email:true
                },
                name_feedback:{
                    required:true,
                },
                company_feedback:{
                    required:true,
                },
                comment_feedback:{
                    required:true,
                },
            },
            messages: {
                email:"неправильный email",
                phone:"неправильный номер"
            },
            submitHandler: function() {
                ('fdsafsad');
                it.find("input, textarea").val('');
            },  
        });

    });

    $(".js-validation-3").each(function() {
        var it = $(this);
        it.validate({
            rules:{
                /*
                phone:{
                    required:true,
                    minlength:10,
                    maxlength:10,
                    phoneUS:true
                },
                */
                email_tz:{
                    required:true,
                    email:true
                },
                name_tz:{
                    required:true,
                },
                company_tz:{
                    required:true,
                },
                file_tz:{
                    required:true,
                },
            },
            messages: {
                email:"неправильный email",
                phone:"неправильный номер"
            },
            submitHandler: function() {
                ('fdsafsad');
                it.find("input, textarea").val('');
            },  
        });

    });

    $(".js-validation-4").each(function() {
        var it = $(this);
        it.validate({
            rules:{
                email:{
                    required:true,
                    email:true
                },
                login: {
                    required: true,
                },
                password: {
                    required: true,
                },
                passwordYet: {
                    required: true,
                    equalTo: "#new-password-yet", 
                },
            },
            submitHandler: function() {
                it.find("input, textarea").val('');
            },  
        });

    });

    $(".js-validation-5").each(function() {
        var it = $(this);
        it.validate({
            rules:{
                phone:{
                    required:true,
                    maxlength: 160,
                },
                compamy_name:{
                    required:true,
                },
                desc: {
                    required: true,
                    maxlength: 150,
                },
                fulldesc: {
                    required: true,
                    maxlength: 150,
                },
                year:{
                    digits: true,
                },
                url_site: {
                    required: true,
                    url: true,
                },
                count:{
                    digits: true,
                    required: true,
                },
            },
            messages: {
                // phone:"неправильный номер",
                url_site: "неправильный url caйта",
                url_inst: "неправильный url Instagram",
                url_vk: "неправильный url Вконтакте",
                url_fb: "неправильный url Facebook",
                url_tw: "неправильный url Twitter",

            },
            submitHandler: function() {
                ('fdsafsad');
                it.find("input, textarea").val('');
            },  
        });

    });

    $(".js-validation-6").each(function() {
        var it = $(this);
        it.validate({
            rules:{
                /*
                phone:{
                    required:true,
                    minlength:10,
                    maxlength:10,
                    phoneUS:true
                },
                */
                email:{
                    required:true,
                    email:true
                },
                name:{
                    required:true,
                },
                service:{
                },
                photo:{
                    required: false,
                },
                review:{
                    required:true,
                },
            },
            messages: {
                email:"неправильный email",
                phone:"неправильный номер",
            },
            submitHandler: function() {
                ('fdsafsad');
                it.find("input, textarea").val('');
            },  
        });

    });

    $(".js-validation-7").each(function() {
        var it = $(this);
        it.validate({
            rules:{
                phone:{
                    required:true,
                },
                email:{
                    required:true,
                    email:true
                },
                url: {
                    url: true,
                    required: true,	
                },
                name: {
                    required: true,	
                },
                company_name: {
                    required: true,	
                },
                comment: {
                    required: true,	
                },
                name: {
                    required: true,	
                },
            },
            messages: {
                email:"неправильный email",
                phone:"неправильный номер"
            },
            submitHandler: function() {
                ('fdsafsad');
                it.find("input, textarea").val('');
            },  
        });

    });
    $(".new-form-answer").each(function() {
        var it = $(this);
        it.validate({
            rules:{
                answer: {
                    required: true,	
                },
            },
            messages: {
                email:"неправильный email",
                phone:"неправильный номер"
            },
            submitHandler: function() {
                ('fdsafsad');
                it.find("input, textarea").val('');
            },  
        });

    });
    
});