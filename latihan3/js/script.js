function tampilkanSemuaMenu() {
    $.getJSON('data/pizza.json', function(data) {
      
        let menu = data.menu;
        $.each(menu, function(i, data){

            let isiMenu = '<div class="col-md-4"><div class="card mb-3"><img src="img/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-tittle">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-tittle">'+ data.harga +'</h5><a herf="#" class="btn btn-primary">Order Now!</a></div></div></div>';

            $('#daftar-menu').append(isiMenu);

        });
    });
}

//semua data ditampilkan di awal
tampilkanSemuaMenu();

//menampilkan daftar menu yang sesuai pilihan
$('.nav-link').on('click', function() {

    //merubah warna menu navbar
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    //mengambil teks yang di klik
    let kategori = $(this).html();
    $('h1').html(kategori);

    if(kategori == 'All Menu'){
        $('#daftar-menu').html('');
        tampilkanSemuaMenu();
        return;
    }

    $.getJSON('data/pizza.json', function(data){
        let menu = data.menu;
        let content = '';

        $.each(menu, function(i, data) {
            if(data.kategori == kategori.toLowerCase()) {
                let isiMenu = '<div class="col-md-4><div class="card mb-3"><img src="img/'+ data.gambar +'" class="card-img-top><div class="card-body"><h5 class="card-tittle">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-tittle">'+ data.harga +'</h5><a herf="#" class="btn btn-primary">Order Now!</a></div></div></div>';

                content += isiMenu;
            }
        });
        $('#daftar-menu').html(content);
    });
});