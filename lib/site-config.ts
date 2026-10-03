export type Photo = {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export const profile = {
  name: 'Kami Wang aka NgocKhaNhi',
  tagline: '不羡慕谁，不讨好谁，默默努力，活成自己想要的模样',
  heroPhoto: {
    src: '/photos/portrait-hero.jpg',
    alt: 'nhin chi nay lau so co tinh cam',
    width: 900,
    height: 1200,
  } satisfies Photo,
  profilePhoto: {
    src: '/photos/profile.jpg',
    alt: 'nkn sieu cute',
    width: 900,
    height: 900,
  } satisfies Photo,
  bio: [
    'vi toi qua dep trai va ranh roi nen toi se cook ra web nay de bo dais ban than toi.',
    'kami.',
  ],
  location: 'Nam Dinh / Ha Noi / Viet',
  interests: ['Cosplay', 'Valorant', 'Eat', 'Tokusatsu', 'Tira miss u'],
  details: [
    { label: 'Rank', value: 'Plat / Dia ' },
    { label: 'Signature', value: ' "Vaicaloz djtme" ' },
    { label: 'Always', value: 'Yapping' },
  ],
  email: 'chankami57@gmail.com',
}

export const socials = [
  { name: 'Instagram', href: 'https://instagram.com/', icon: 'instagram' as const },
  { name: 'Discord Server', href: 'https://discord.gg/pEapJw4qMu', icon: 'discord' as const },
  { name: 'Email', href: 'chankami57@gmail.com', icon: 'mail' as const },
]

export const gallery: Photo[] = [
  {
    src: '/photos/gallery-01.jpg',
    alt: 'Nhi Ngoc Kha Tong',
    width: 960,
    height: 1200,
    caption: 'peak',
  },
  {
    src: '/photos/gallery-02.jpg',
    alt: 'o ben anh noi nay co anh',
    width: 1200,
    height: 800,
    caption: 'peak',
  },
  {
    src: '/photos/gallery-03.jpg',
    alt: 'nguoi theo huong hoa may mu giang loi',
    width: 800,
    height: 1200,
    caption: 'peak',
  },
  {
    src: '/photos/gallery-04.jpg',
    alt: 'noi cho em nghe..',
    width: 1000,
    height: 1000,
    caption: 'idk',
  },
  {
    src: '/photos/gallery-05.jpg',
    alt: 'canh hoa ua tan',
    width: 900,
    height: 1200,
    caption: 'pro vai ca l',
  },
  {
    src: '/photos/gallery-06.jpg',
    alt: 'dua vai anh noi nay co anh',
    width: 1200,
    height: 675,
    caption: 'hat mua roi minh choi voi',
  },
  {
    src: '/photos/gallery-07.jpg',
    alt: 'bai hat khi xua anh viet bay gio phai dat dau cham het thoi',
    width: 1000,
    height: 1000,
    caption: 'giac mo nay biet di ve dau',
  },
  {
    src: '/photos/gallery-08.jpg',
    alt: 'kami wang',
    width: 800,
    height: 1200,
    caption: 'anh da noi la 12345',
  },
]
