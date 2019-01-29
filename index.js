$("#blockId").click(function () {
    $(".block").slideToggle(1500, function () {
        alert("Finished sliding.");
    });
});

$("#blockId1").click(function () {
    $(".block1").slideUp(1500, function () {
        alert("Finished sliding up.");
    });
});