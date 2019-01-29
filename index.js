$("#blockId").click(function () {
    $(".block").slideToggle(1500, function () {
        alert("Finished sliding down.");
    });
});