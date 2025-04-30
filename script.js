// JQuery ON SOCIAL ICONS
$(".smedia-icons").on("click", function () {
    $(this).css("width", "50vw");
})

// CHANGE BLUE-DIV IMAGES ON CLICK
$(function () {
    var images = [
        "Images/family-image-blue-div.jpg",
        "Images/family-tea-blue-div.jpg",
        "Images/greenary-home-blue-div.jpg",
        "Images/husbandWife-smiling-blue-div.jpg",
    ];

    var i = 0;
    var blueDivGallery = $(".blue-div-images").find("img");
    blueDivGallery.on("click", changeImageOnClick);

    function changeImageOnClick() {
        i = (i + 1) % images.length;
        blueDivGallery.fadeOut(function () {
            blueDivGallery.attr("src", images[i]).fadeIn();
        });
    }
});

// S-Media Icons Size change
$(function () {
    $(".smedia-icons").mouseenter(function () {
        $(this).css("transform", "scale(1.2)");
    });
    $(".smedia-icons").mouseleave(function () {
        $(this).css("transform", "scale(1)");
    });
});

// HIDE and SHOW CONTACT-US-FORM
$(function () {
    $(document).ready(function () {
        $("#contact-us").click(function () {
            $(".contact-us-form").show(800);
        });

        $(".cross").click(function() {
            $(".contact-us-form").hide(800);
        })
    });
})


