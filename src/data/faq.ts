import { IFAQ } from "@/types";

export const faqs: IFAQ[] = [
  {
    question: `debto uygulaması nedir ve ne işe yarar`,
    answer:
      "debto, kişisel borçlarınızı takip etmenizi sağlayan bir web uygulamasıdır. Borç miktarlarını, ödeme tarihlerini girerek yaklaşan ödemelerinizi görebilir, ödenmiş borçları işaretleyerek finansal durumunuzu kolayca yönetebilirsiniz.",
  },
  {
    question: `Uygulamaya nasıl borç ekleyebilirim?`,
    answer:
      "Ana ekrandaki “Borç Ekle” butonuna tıklayarak borç miktarını, son ödeme tarihini ve açıklamayı girerek yeni bir borç kaydı oluşturabilirsiniz.",
  },
  {
    question: " Ödediğim bir borcu nasıl işaretleyebilirim?",
    answer: `Borçlar listesinde ilgili borcun yanındaki “Ödendi” seçeneğine tıklayarak borcunuzu ödenmiş olarak işaretleyebilirsiniz. Bu sayede borç listeniz güncel kalır.`,
  },
  {
    question: "Yaklaşan ödemeleri nasıl görebilirim?",
    answer:
      "Ana sayfada, ödeme tarihi yaklaşan borçlar otomatik olarak listelenir. Böylece hangi borç için ne kadar süre kaldığını kolayca takip edebilirsiniz.",
  },
  {
    question: "Kayıtlarım güvende mi?",
    answer:
      "Evet. Kayıtlarınız sadece sizin erişiminize açık şekilde saklanır. Verileriniz güvenli bir şekilde korunur ve başka kullanıcılarla paylaşılmaz.",
  },
];
