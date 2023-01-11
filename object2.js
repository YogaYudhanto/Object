// membuat object
// ? 1. object literal
// ! TIDAK EFEKTIF UNTUK OBJECT YANG BANYAK
// let mahasiswa = {
//     nama : 'yoga',
//     energi : 10,
//     makan : function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`halo ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama : `satrio`,
//     energi : 15,
//     makan : function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`halo ${this.nama}, selamat makan!`)
//     }
// }


// ? 2. function declaration & object.create

const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    },

    main: function (jam) {
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat bermain!`);
    },

    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`halo ${this.nama}, selamat tidur!`);
    }
};

function Mahasiswa (nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let yoga = Mahasiswa('Yoga', 10);
let satrio = Mahasiswa('Satrio', 20);

// ? Constructor
// ? keyword new
// function Mahasiswa (nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
    //     console.log(`halo ${this.nama}, selamat makan!`);
    // }

    // this.main = function (jam) {
    //     this.energi -= jam;
    //     console.log(`halo ${this.nama}, selamat bermain!`);
    // }
// }

// let yoga = new Mahasiswa(`yoga`, 10);