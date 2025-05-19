import { IBenefit } from "@/types";
import {
  FaRocket,
  FaCalendarAlt,
  FaCompass,
  FaListAlt,
  FaCheckCircle,
  FaToggleOn,
  FaWallet,
  FaClock,
  FaPlusCircle,
} from "react-icons/fa";

export const benefits: IBenefit[] = [
  {
    title: "Hızlı ve Pratik",
    description:
      "Borçlarını saniyeler içinde ekle. Tutar ve tarih bilgisini gir, kaydını anında oluştur. Zahmetsiz borç takibi artık çok kolay!",
    bullets: [
      {
        title: "Hızlı Kayıt Ekleme",
        description:
          "Birkaç dokunuşla yeni bir borç kaydı oluştur, zaman kaybetmeden takibe başla.",
        icon: <FaRocket size={26} />,
      },
      {
        title: "Kullanımı Kolay Arayüz",
        description: "Sade ve anlaşılır tasarım sayesinde tüm kayıtlarını birkaç saniyede yönet.",
        icon: <FaCompass size={26} />,
      },
      {
        title: "Anında Tarih ve Tutar Girişi",
        description: "Son ödeme tarihi ve tutarı gir, debto senin yerine hatırlasın.",
        icon: <FaCalendarAlt size={26} />,
      },
    ],
    imageSrc: "/images/addnew.webp",
  },
  {
    title: "Tüm Borçları Tek Ekranda Görüntüle",
    description:
      "Borçlarını liste halinde takip et. Tutar, tarih ve ödeme durumlarını tek ekranda gör, kontrolü kaybetme.",
    bullets: [
      {
        title: "Tüm Borçların Tek Yerde",
        description:
          "Borçlarını kaybetmeye son! Tutar ve son ödeme tarihiyle birlikte tüm borçlarını tek bir listede düzenli şekilde gör.",
        icon: <FaListAlt size={26} />,
      },
      {
        title: "Ödendi mi, Ödenmedi mi? Hemen Gör",
        description:
          "Renkli etiketlerle ödeme durumlarını anında fark et. Geciken borçları kaçırma, zamanında ödeme fırsatını kaçırma.",
        icon: <FaCheckCircle size={26} />,
      },
      {
        title: "Durumu Tek Dokunuşla Güncelle",
        description:
          "Bir tıkla borcunu 'ödendi' olarak işaretle. Uygulama senin yerine listeyi güncel tutsun.",
        icon: <FaToggleOn size={26} />,
      },
    ],
    imageSrc: "/images/debts.webp",
  },
  {
    title: "Toplam Borcunu Anında Gör",
    description:
      "Finansal durumuna kuş bakışı bak! Tüm aktif borçlarının toplam tutarını ekranda anlık olarak takip et.",
    bullets: [
      {
        title: "Yaklaşan Ödemeleri Kaçırma",
        description:
          "Son ödeme tarihi yaklaşan borçlarını öncelikli olarak görüntüle. Gecikme riskini ortadan kaldır, zamanında öde.",
        icon: <FaWallet size={26} />,
      },
      {
        title: "Yeni Borç Ekle, Kolayca Yönet",
        description: "Borç eklemek artık saniyeler sürüyor. Hızlı giriş ile takibini güçlendir.",
        icon: <FaClock size={26} />,
      },
      {
        title: "Detaylı Listeye Tek Tıkla Ulaş",
        description: "Tüm borçlarını görmek mi istiyorsun? Tek tuşla detaylı liste ekranına geç!",
        icon: <FaPlusCircle size={26} />,
      },
    ],
    imageSrc: "/images/home.webp",
  },
];
