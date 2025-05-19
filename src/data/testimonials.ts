import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
  {
    name: "Mehmet Yıldırım",
    role: "Üst Düzey Yönetici",
    message: `${siteDetails.siteName}'yu kullanmaya başladım ve hayatım değişti. Ekonomiyi daha iyi yönetmeme yardımcı oldu. Artık borçlarımı takip etmek çok kolay!`,
    avatar: "/images/testimonial.webp",
  },
  {
    name: "Berat Akbayram",
    role: "Eski Üst Düzey Yönetici",
    message: `Üst Düzey Yönetici olarak çalıştığım dönemde ${siteDetails.siteName} ile tanışmış olmayı isterdim. Burasının çok önemli olduğunu düşünüyorum. Borçlarımı takip etmek için harika bir uygulama.`,
    avatar: "/images/testimonial.webp",
  },
  {
    name: "Nurullah Sebati",
    role: "Göz Doktoru",
    message: `${siteDetails.siteName} kullandığım günden beri gözlerimdeki ışıltının arttığını söyleyebilirim. Borçlarımı takip etmek için harika bir uygulama. Artık borçlarımı takip etmek çok kolay!`,
    avatar: "/images/testimonial.webp",
  },
];
