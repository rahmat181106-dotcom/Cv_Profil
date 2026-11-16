$(document).ready(function() {
    // Efek Animasi jQuery untuk menyembunyikan/menampilkan kartu profil dengan fade
    $("#btnToggleProfile").click(function() {
        $("#profileCard").fadeToggle(600, function() {
            if ($("#profileCard").is(":visible")) {
                $("#btnToggleProfile").text("Sembunyikan Profil Singkat (jQuery)");
            } else {
                $("#btnToggleProfile").text("Tampilkan Profil Singkat (jQuery)");
            }
        });
    });

    // Efek tambahan: Berikan efek hover lembut pada baris tabel
    $("tbody tr").hover(
        function() {
            $(this).addClass("table-active");
        },
        function() {
            $(this).removeClass("table-active");
        }
    );
});
