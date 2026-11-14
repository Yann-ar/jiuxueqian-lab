export type ProductShot = {
  image: string
  label: string
  title: string
  description: string
  alt: string
  height?: number
  previewHeight?: number
}

type Product = {
  slug: string
  name: string
  category: string
  platform: string
  title: string
  featureTitle: string
  summary: string
  description: string
  store?: string
  support: string
  privacy: string
  terms?: string
  shots: [ProductShot, ...ProductShot[]]
}

export const products: Product[] = [
  {
    slug: 'vellum',
    name: 'Vellum',
    category: '主题笔记',
    platform: 'iPhone · iPad',
    title: '给想法一个地方。',
    featureTitle: '写下想法，再把它们整理好。',
    summary: '用主题收拢零散的笔记和灵感。',
    description: '随手记下一个念头，等有空再把相关的笔记放回同一个主题。用 Markdown 写作、用标签整理，也能随时搜索和导出。',
    store: 'https://apps.apple.com/app/id6799964763',
    support: 'https://yann-ar.github.io/vellum-privacy-support/support/',
    privacy: 'https://yann-ar.github.io/vellum-privacy-support/privacy/',
    shots: [
      { image: 'vellum-topics', label: '主题', title: '把相关笔记放在一起', description: '给长期关注的事建一个主题，把随手记下的片段慢慢收进来。', alt: 'Vellum 的主题列表，展示不同主题及其中的笔记数量' },
      { image: 'vellum-editor', label: '编辑', title: '先把想法写下来', description: '在专注的编辑空间里写短记或长文，用 Markdown 加上需要的结构。', alt: 'Vellum 的笔记编辑画面' },
      { image: 'vellum-capture', label: '笔记', title: '随手留下灵感', description: '有想法时先留一条笔记。等需要时，再用关键词把它找回来。', alt: 'Vellum 打开的读书笔记，展示一段摘录和自己的想法' },
    ],
  },
  {
    slug: 'tuotuo',
    name: 'TuoTuo',
    category: '英语口语',
    platform: 'iPhone · iPad',
    title: '一句一句练口语。',
    featureTitle: '从看懂一句，到自己说出来。',
    summary: '从看得懂，到不用看也能说出来。',
    description: '每次用几分钟练一句英文：先理解、再跟读，逐步藏起提示，最后只看中文开口。每天练几句新的，也回顾到期的旧句。',
    store: 'https://apps.apple.com/app/id6813765298',
    support: 'https://yann-ar.github.io/tuotuo-privacy-support/support/',
    privacy: 'https://yann-ar.github.io/tuotuo-privacy-support/privacy/',
    terms: 'https://yann-ar.github.io/tuotuo-privacy-support/terms/',
    shots: [
      { image: 'tuotuo-today', label: '今日', title: '从今天的几句开始', description: '「今天」把新句和到期复习放在一起，打开就知道要练什么。', alt: 'TuoTuo 的今日练习画面' },
      { image: 'tuotuo-practice', label: '练习', title: '试着自己说完整句', description: '从听和跟读开始，逐步减少英文提示，最后试着只看中文把句子说出来。', alt: 'TuoTuo 只显示中文提示的口语练习画面' },
      { image: 'tuotuo-library', label: '场景', title: '去想用的场景里练', description: '从初次见面、日常交流和工作沟通等场景里，挑出自己想练的话。', alt: 'TuoTuo 按使用场景浏览句子的画面' },
    ],
  },
  {
    slug: 'ilovebook',
    name: 'iLoveBook',
    category: '藏书与阅读',
    platform: 'iPhone · iPad',
    title: '把喜欢的书摆上架。',
    featureTitle: '从整理藏书，到坐下来读。',
    summary: '布置自己的书架，记下每一次阅读。',
    description: '把手边的书整理进书库，再挑喜欢的书摆上数字书架。从书架打开一本书，开始计时，读完一段就记下进度和当时的想法。',
    support: 'mailto:yesiyang@outlook.com?subject=iLoveBook%20Support',
    privacy: 'https://yann-ar.github.io/ilovebook-privacy-support/privacy/',
    terms: 'https://yann-ar.github.io/ilovebook-privacy-support/terms/',
    shots: [
      { image: 'ilovebook-shelf', height: 1315, previewHeight: 789, label: '书架', title: '布置一面自己的书架', description: '挑选想展示的书，按喜好摆放，让书架留住你正在读和想再翻开的书。', alt: 'iLoveBook 的数字书架，陈列图书封面和摆件' },
      { image: 'ilovebook-timer', height: 1333, label: '计时', title: '给阅读留一点时间', description: '打开一本书开始计时，读完记下页码和想法，下次接着读。', alt: 'iLoveBook 的专注阅读计时画面' },
      { image: 'ilovebook-library', height: 1324, label: '书库', title: '把藏书整理进书库', description: '按书名搜索或扫 ISBN 找书，再用分类整理你的收藏。', alt: 'iLoveBook 以封面网格展示个人书库的画面' },
    ],
  },
]

export function productImage(name: string) {
  return `/apps/${name}.webp`
}
