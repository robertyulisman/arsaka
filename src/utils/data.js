import LogoArsaka from "../assets/logo.png";
import LogoMadiha from "../assets/logoMadiha.png";
import LogoTrimitri from "../assets/logoTrimitra.png";

import mks1 from "../assets/services/mks-1.jpg";
import mks2 from "../assets/services/mks-2.jpeg";
import mks3 from "../assets/services/mks-3.jpeg";

import trimitra1 from "../assets/services/trimitra1.jpg";
import trimitra2 from "../assets/services/trimitra2.jpg";
import trimitra3 from "../assets/services/trimitra3.jpg";

import Arsaka1 from "../assets/services/arsaka-service-1.jpg";
import Arsaka2 from "../assets/services/arsaka-service-2.jpg";
import Arsaka3 from "../assets/services/arsaka-service-3.jpg";
import Arsaka4 from "../assets/services/arsaka-service-4.jpg";
import Arsaka5 from "../assets/services/arsaka-service-5.jpg";
import Arsaka6 from "../assets/services/arsaka-service-6.jpg";

const company = [
  {
    _id: 1,
    logo: LogoArsaka,
    key: "arsaka lintas samudra",
    nama: "PT. Arsaka Lintas Samudra",
    deskripsiPendek:
      "Ship Operator (LCT, Tug & Barge, Cargo Vessel), Shipping Agency, Project Mobilization",
    alamat:
      "Jl. Sudirman Komp. Ruko Dermaga Sukajadi Blok RE No. 3 Batam, Kepulauan Riau - Indonesia 29444",
    telephone: "+62 778 – 468205",
    fax: "-",
    location: {
      lat: 1.1060185,
      lng: 104.0270376,
    },
    tentang: [
      {
        _id: "satu",
        teks: "PT. Arsaka didirikan pada tanggal 27 Mei 2021 oleh Bpk Mulyono dan bertempat di Perumahan Tiban Point Blok B5 no 3A, Sekupang.",
      },
      {
        _id: "dua",
        teks: "PT. Arsaka terdaftar di Batam dan memiliki SIUPKK (Surat Ijin Usaha Perusahaan Keagenan Kapal) no. AL.310/160/DA-2021 dikeluarkan oleh Dirjen Perhubungan Laut Kementerian Perhubungan.",
      },
      {
        _id: "tiga",
        teks: "Tujuan didirikannya PT. Arsaka adalah untuk mendukung program Pemerintah untuk memperluas dan meningkatkan distribusi barang, mengingat wilayah perairan Indonesia sangat luas dengan ribuan pulau sehingga membutuhkan banyak dukungan dari perusahaan pelayaran nasional.",
      },
    ],
    visi: "Menjadi salah satu Perusahaan Shipping Agency terbaik di Kota Batam, dengan mengedepankan jasa yang Profesional.",
    misi: "Menjadi salah satu Perusahaan Shipping Agency terbaik di Kota Batam, dengan mengedepankan jasa yang Profesional.",
    services: [
      {
        _id: "services-1",
        judul: "Ship Operator (LCT, Tug & Barge, Cargo Vessel)",
        deskripsi:
          "membantu perencanaan pemasukan kargo, berhubungan dengan badan pengatur, memelihara kontak pelanggan, dan menanggapi masalah yang mungkin timbul dalam pelaksanaan operasi pelayaran",
        image: Arsaka1,
      },
      {
        _id: "services-2",
        judul: "Shipping Agency",
        deskripsi:
          "bertanggung jawab untuk menangani pengiriman dan kargo, dan kepentingan umum pelanggan, di pelabuhan dan pelabuhan di seluruh dunia, atas nama pemilik, manajer, dan penyewa kapal.",
        image: Arsaka2,
      },
      {
        _id: "services-3",
        judul: "Project Mobilization",
        deskripsi:
          "memimpin dan mengoordinasikan semua uji tuntas Layanan Teknis, dan aktivitas mobilisasi agar tim dapat beroperasi sesuai dengan kontrak",
        image: Arsaka3,
      },
      {
        _id: "services-4",
        judul: "International/ National Freight Forwarding",
        deskripsi:
          "mengerjakan logistik dan memastikan semua pangkalan tercakup dalam proses pengangkutan barang dari A ke B",
        image: Arsaka4,
      },
      {
        _id: "services-5",
        judul: "Custom Clearance",
        deskripsi:
          "melibatkan persiapan dokumentasi Pabean untuk memastikan bahwa setiap pengiriman baik yang diimpor atau diekspor memenuhi semua undang-undang yang berlaku sehingga masuk atau ekspor dapat terjadi.",
        image: Arsaka5,
      },
      {
        _id: "services-6",
        judul: "Stevedoring & Cargodoring",
        deskripsi:
          "membongkar barang dari kapal ke dermaga/ truk atau memuat barang dari dermaga/ truk ke dalam kapal sampai dengan tersusun dalam palka kapal dengan menggunakan derek kapal atau derek darat.",
        image: Arsaka6,
      },
    ],
  },
  {
    _id: 2,
    key: "madiha kastara sejahtera",
    logo: LogoMadiha,
    nama: "PT. Madiha Kastara Sejahtera",
    deskripsiPendek:
      "Pengurusan Bongkar Muat Disyah Bandar, UPP, Bea Cukai, Pengurusan Pelayanan Jasa Kepabeanan, Pengurusan Perizinan BP Laut",
    alamat:
      "Jl. Yos Sudarso Komp. Makadam No A10 Seraya Batu Ampar, Batam, Kepulauan Riau - Indonesia",
    telephone: "+62 778 – 468205",
    fax: "+62 778 – 468205",
    location: {
      lat: 1.1621983488690821,
      lng: 104.0101443614103,
    },
    tentang: [
      {
        _id: "satu",
        teks: "PT. Madiha Kastara Sejahtera didirikan pada tanggal 24 Juli 2018 dan bertempat di Kota Batam.",
      },
      {
        _id: "dua",
        teks: "Tujuan didirikannya PT. Madiha Kastara Sejahtera adalah untuk mendukung program Pemerintah untuk memperluas dan meningkatkan distribusi barang, mengingat wilayah perairan Indonesia sangat luas dengan ribuan pulau sehingga membutuhkan banyak dukungan dari perusahaan pelayaran nasional.",
      },
    ],
    visi: "Menjadi salah satu Perusahaan Shipping Agency terbaik di Kota Batam, dengan mengedepankan jasa yang Profesional.",
    misi: "Menjadi salah satu Perusahaan Shipping Agency terbaik di Kota Batam, dengan mengedepankan jasa yang Profesional.",
    services: [
      {
        _id: "services-2",
        judul: "Pengurusan Perizinan BP Laut",
        deskripsi:
          "Pengurusan SPKBM, Pengurusan rekomindasi bongkar muat di terminal husus, Pengurusan pengawasan bongkar muat ",
        image: mks2,
      },
      {
        _id: "services-3",
        judul: "Perusahaan Bongkar Muat",
        deskripsi:
          "Stevedoring, Cargodoring, Receiving/ Delivery, Bongkar Muat Disyah Bandar, UPP, Bea Cukai",
        image: mks3,
      },
    ],
  },
  {
    _id: 3,
    key: "trimitra mandiri logistic",
    logo: LogoTrimitri,
    nama: "PT. Trimitra Mandiri Logistic",
    deskripsiPendek:
      "Pengurusan Dokumen PPFTZ 01 (TLDDP, Import/ Export), Pengurusan Dokumen PPFTZ 02, Pengurusan Dokumen PPFTZ 03",
    alamat:
      "Jl. Yos Sudarso Komp. Makadam No A10 Seraya Batu Ampar, Batam, Kepulauan Riau - Indonesia",
    telephone: "+62 778 – 468205",
    fax: "+62 778 – 468205",
    location: {
      lat: 1.1621983488690821,
      lng: 104.0101443614103,
    },
    tentang: [
      {
        _id: "satu",
        teks: "PT. Trimitra Mandiri Logistik didirikan pada tanggal 22 Januari 2020 dan bertempat di Kota Batam.",
      },
      {
        _id: "dua",
        teks: "Tujuan didirikannya PT. Trimitra Mandiri Logistik adalah untuk mendukung program Pemerintah untuk memperluas dan meningkatkan distribusi barang, mengingat wilayah perairan Indonesia sangat luas dengan ribuan pulau sehingga membutuhkan banyak dukungan dari perusahaan pelayaran nasional.",
      },
    ],
    visi: "Menjadi salah satu Perusahaan Shipping Agency terbaik di Kota Batam, dengan mengedepankan jasa yang Profesional.",
    misi: "Menjadi salah satu Perusahaan Shipping Agency terbaik di Kota Batam, dengan mengedepankan jasa yang Profesional.",
    services: [
      {
        _id: "services-1",
        judul: "Pengurusan Dokumen PPFTZ 01",
        deskripsi:
          "pemberitahuan pabean untuk pemasukan dan pengeluaran barang ke dan dari kawasan bebas dari dan ke luar daerah pabean, dan pengeluaran barang dari kawasan bebas ke tempat lain dalam daerah pabean",
        image: trimitra1,
      },
      {
        _id: "services-2",
        judul: "Pengurusan Dokumen PPFTZ 02",
        deskripsi:
          "pemberitahuan pabean untuk pemasukan dan pengeluaran barang ke dan dari kawasan bebas dari dan ke tempat penimbunan berikat, kawasan bebas lainnya, dan kawasan ekonomi khusus",
        image: trimitra2,
      },
      {
        _id: "services-3",
        judul: "Pengurusan Dokumen PPFTZ 03",
        deskripsi:
          "pemberitahuan pabean untuk pemasukan barang ke kawasan bebas dari tempat lain dalam daerah pabean.",
        image: trimitra3,
      },
    ],
  },
];

export default company;
