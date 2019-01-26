$(document).ready(function() {

    $('input[name="phone"]').mask('+0 (000) 000 0000');

		jQuery.extend(jQuery.validator.messages, {
			required: "Это поле обязательно.",
			remote: "Please fix this field.",
			email: "Неправильный E-mail.",
			url: "неправильный URL.",
			date: "неправильная дата.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "используйте только числа.",
			creditcard: "Please enter a valid credit card number.",
			equalTo: "Пароли не совпадают",
			accept: "Please enter a value with a valid extension.",
			maxlength: jQuery.validator.format("Введите не больше {0} символов."),
			minlength: jQuery.validator.format("Введите не меньше {0} символов."),
			rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
			range: jQuery.validator.format("Please enter a value between {0} and {1}."),
			max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
			min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
		});

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
                var yt_link = "https://www.youtube.com/embed/" + yt_id;
                // $('.object__image-link').attr("href", yt_link);
                // $('.object__image-link').css("background-image", "url("+yt_img+ ")");
                $("#objects-videos").append('<li class="object object-video"><a class="object__image" data-fancybox href="'+ yt_link +'" style="background-image: url('+ yt_img +')"></a><h3 class="object__title">'+ name +'</h3><p class="object__text">'+ addres +'</p><div class="object__links"><a class="object__edit" href="#edit-video" data-fancybox>Редактировать</a><a class="object__delete" href="#">Удалить</a></div><input name="video_name[]" type="hidden" value="'+name +'"><input name="video_name[]" type="hidden" value="'+addres +'"><input name="video_name[]" type="hidden" value="'+yt_link +'"></li>');
            },
        });
    });
    var video_counter = 0;
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

                var it = $('.object-video:nth-child('+itis.find('#iter').val()+')');
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
                it.find("input").remove();
                it.append('<input name="video_name[]" type="hidden" value="'+namex +'"><input name="video_name[]" type="hidden" value="'+addresx +'"><input name="video_name[]" type="hidden" value="'+yt_link +'"></input>');

            },  
            // <input name="video_name[]" type="hidden" value="'+name +'"><input name="video_name[]" type="hidden" value="'+addres +'"><input name="video_name[]" type="hidden" value="'+yt_link +'"></input>
        });
    });

    function createNewObjectHtml(name, addres, imgUrl) {
        return `
            <li class="object object-img">
            <div class="object__image"  style="background-image: url(${imgUrl});"></div>
            <h3 class="object__title"> ${name} </h3>
            <p class="object__text"> ${addres} </p>
            <div class="object__links">
            <a class="object__edit-object" >Редактировать</a>
            <a class="object__delete" href="#">Удалить</a>
            </div>
            </li>
        `;
    }

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

                var imgUrl= $(".photo-item-img").attr("href");
                $(".fancybox-button--close").trigger("click");
                $("#objects-images").append(createNewObjectHtml(name, addres, imgUrl));
                var index = +$("#objects-images .object:last-child").index() + 1;
                var fdsajklfdsa = $(".js-remove").attr("href");
                $("#edit_objectName").val(name)
                $("#edit_objectAddres").val(addres)
                it.find(".photo-item-img").each(function() {
                    var images = $(this).attr("href");
                    console.log(images);
                    $(".object-img:nth-child("+index+")").find(".object__image").append('<a data-fancybox="data-gallery-5" class="object-append-link" href="'+images+'"></a>')
                })
                it.find(".js-remove").remove();
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
            
            submitHandler: function() {
                var it = $('.object-img:nth-child('+itis.find('#iterx').val()+')');
                // var gavno = itis.find('#iterx').val();
                var it = $('.object-img:nth-child('+itis.find('#iterx').val()+')');
                var namex = $("#edit_objectName").val();
                var addresx = $("#edit_objectAddres").val();
                it.find(".object__title").text(namex);
                it.find(".object__text").text(addresx);
                
                itis.find(".photo-item-img").each(function() {
                    var images = $(this).attr("href");
                    $(".object-append-link").remove();
                    $(".object__image").append('<a data-fancybox="data-gallery-5" class="object-append-link" href="'+images+'"></a>')
                    it.find(".object__image").css("background-image", "url("+images+")");
                })
                console.log("fdsafsdaasfd");
                itis.find('input, textarea').val("");
                $(".fancybox-button--close").trigger("click");

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
            rules:{
                email:{
                    required:true,
                    email: true,
                },
                password: {
                    required: true,
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
                it.find("input, textarea").val('');
            },  
        });

    });

    $(".js-validation-7").each(function() {
        var it = $(this);
        it.validate({
            rules:{
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