export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface PhilosophyPillar {
  numeral: string;
  title: string;
  description: string;
}

export interface LookbookFrame {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  moodNote: string;
  image: string;
  frameStyle: 'arch' | 'rounded';
}

export interface BrandValue {
  id: string;
  title: string;
  subtitle: string;
  detail: string;
  originNote: string;
  iconKey: 'wind' | 'feather' | 'leaf' | 'sparkles';
}

export const BRAND_ASSETS = {
  logo: '/images/lc-kids-logo.png',
  storyVideo: '/videos/lc-kids-film.mp4',
  storyPoster: '/images/story-arch.jpg',
  heroImage: '/images/hero-editorial.jpg',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Hikayemiz', href: '#hikayemiz', id: 'hikayemiz' },
  { label: 'Felsefemiz', href: '#felsefemiz', id: 'felsefemiz' },
  { label: 'Atmosfer', href: '#atmosfer', id: 'atmosfer' },
  { label: 'Kumaş & Doku', href: '#kumas-doku', id: 'kumas-doku' },
  { label: 'İletişim', href: '#iletisim', id: 'iletisim' },
];

export const HERO_CONTENT = {
  eyebrow: '0 – 8 Yaş Bebek & Çocuk Giyim Mağazası',
  slogan: 'Minik bedenlere büyük mutluluklar, tatlı stillere LC Kids dokunuşu!',
  subtitle:
    'Doğal dokular ve sıcak tonlarla çocukların özgürlüğüne eşlik eden sakin bir giyim dünyası.',
  ctaLabel: 'Hikayeyi Keşfet',
};

export const STORY_CONTENT = {
  eyebrow: 'Marka Hikayemiz',
  headline: 'Çocukluğun en saf hâline duyulan sevgiyle doğduk.',
  paragraph:
    'LC Kids; 0–8 yaş arası bebek ve çocukların özgürce hareket edebildiği, cildine nefes aldıran doğal kumaşlarla buluştuğu sıcak bir giyim mağazasıdır. Gösterişten uzak, zamansız tasarımlarımızla her güne tatlı bir dokunuş katıyoruz.',
  quote: '“Bir çocuğun gülüşü en güzel zarafettir; biz yalnızca ona eşlik ederiz.”',
  quoteAuthor: 'LC Kids Mağazası',
  videoCaption: 'LC Kids • 0–8 Yaş Dünyamız',
};

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    numeral: '01',
    title: 'Hareketin Özgürlüğü',
    description:
      'Sıkmayan, akışkan kalıplarla minik bedenlerin oyun temposuna tam uyum.',
  },
  {
    numeral: '02',
    title: 'Sakin Estetik',
    description:
      'Gözü yormayan krem, bej ve latte tonlarıyla doğal bir zarafet.',
  },
  {
    numeral: '03',
    title: 'Zamansız Kalıcılık',
    description:
      'Kardeşten kardeşe aktarılabilecek kadar özenli ve uzun ömürlü dokumalar.',
  },
];

export const LOOKBOOK_FRAMES: LookbookFrame[] = [
  {
    id: 'dogal-yumusaklik',
    index: '01',
    title: 'Doğal Yumuşaklık',
    subtitle: 'Tene değdiği ilk anda güven veren saf dokular.',
    moodNote: 'Gün Işığında Huzur',
    image: '/images/lookbook-1.jpg',
    frameStyle: 'rounded',
  },
  {
    id: 'zamansiz-tonlar',
    index: '02',
    title: 'Zamansız Tonlar',
    subtitle: 'Toprağın, kumun ve sıcak kremin dingin uyumu.',
    moodNote: 'Sakin Renk Paleti',
    image: '/images/lookbook-2.jpg',
    frameStyle: 'arch',
  },
  {
    id: 'ozgur-adimlar',
    index: '03',
    title: 'Özgür Adımlar',
    subtitle: 'Rüzgârla dans eden hafif ve ferah silüetler.',
    moodNote: 'Oyunla Büyüyen Anlar',
    image: '/images/lookbook-3.jpg',
    frameStyle: 'rounded',
  },
  {
    id: 'zarif-detaylar',
    index: '04',
    title: 'Zarif Detaylar',
    subtitle: 'Sedef düğmeler ve ince işlenmiş sade dokunuşlar.',
    moodNote: 'Özenli İşçilik',
    image: '/images/lookbook-4.jpg',
    frameStyle: 'arch',
  },
  {
    id: 'sakin-sabahlar',
    index: '05',
    title: 'Sakin Sabahlar',
    subtitle: 'Telaşsız sabahların sıcak ve şefkatli ruhu.',
    moodNote: 'Sakin Yaşam Estetiği',
    image: '/images/lookbook-5.jpg',
    frameStyle: 'rounded',
  },
];

export const BRAND_VALUES: BrandValue[] = [
  {
    id: 'natural-textures',
    title: '%100 Doğal & Nefes Alan Dokular',
    subtitle: 'Saf Liflerin Ferahlığı',
    detail:
      'Organik pamuk, yumuşatılmış keten ve ince yün dokularıyla çocukların cildi gün boyu rahatça nefes alır.',
    originNote: 'GOTS & OEKO-TEX Standartlı Saf İplikler',
    iconKey: 'wind',
  },
  {
    id: 'skin-friendly',
    title: 'Hassas Cilt Dostu Üretim',
    subtitle: 'Ağartıcısız & Kimyasalsız',
    detail:
      'Zararlı boyalar ve sert iç etiketler olmadan, bebek ve çocuk cildine tam uyum sunan yumuşak dikişler.',
    originNote: 'Hipoalerjenik Doğal Boyama',
    iconKey: 'feather',
  },
  {
    id: 'sustainable-timeless',
    title: 'Sürdürülebilir & Zamansız Tasarım',
    subtitle: 'Modası Geçmeyen Çizgiler',
    detail:
      'Her mevsime yakışan, doğaya saygılı ve uzun yıllar keyifle giyilebilen sade tasarımlar.',
    originNote: 'Doğaya Saygılı Üretim',
    iconKey: 'leaf',
  },
  {
    id: 'artisanal-craft',
    title: 'El İşçiliği Detaylar',
    subtitle: 'Özenle Tamamlanan İncelik',
    detail:
      'Doğal sedef düğmeler, temiz biye dikişler ve zarif nakışlarla her detayda özen.',
    originNote: 'Doğal Aksesuar & Terzilik',
    iconKey: 'sparkles',
  },
];

export const CONTACT_INFO = {
  brandName: 'LC Kids',
  brandSubline: 'Bebek ve Çocuklarınızın Giyim Mağazası • 0 – 8 Yaş',
  storeTitle: 'LC Kids Mağazamız',
  addressLine1: 'Cumhuriyet Bulvarı, Yaşam AVM Kat: 2',
  addressLine2: 'Tatvan / Bitlis',
  hoursPrimary: 'Haftanın Her Günü: 10.00 – 21.00',
  hoursSecondary: 'Pazartesi – Pazar kesintisiz hizmetinizdeyiz',
  phoneDisplay: '0546 739 13 41',
  phoneHref: 'tel:+905467391341',
  email: 'iletisim@lckids.com.tr',
  instagramHandle: '@lckids13',
  instagramUrl: 'https://www.instagram.com/lckids13/',
  whatsappUrl:
    'https://wa.me/905467391341?text=Merhaba%20LC%20Kids%2C%20ma%C4%9Fazan%C4%B1z%20ve%20koleksiyonlar%C4%B1n%C4%B1z%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.',
};
