import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articleSchema = z.object({
    /** عنوان SEO وصفي — حتى 60 حرفاً */
    title: z.string().max(60),
    /** وصف SEO — حتى 155 حرفاً */
    description: z.string().max(155),
    /** رابط إنجليزي قصير: paycards.io/articles/<slug> */
    slug: z.string().regex(/^[a-z0-9-]+$/),
    /** عنوان H1 داخل الصفحة (اختياري؛ الافتراضي هو title) */
    h1: z.string().optional(),
    keyword: z.string(),
    category: z.enum(['guides', 'use-cases', 'comparisons', 'troubleshooting']),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** الإجابة المختصرة في صندوق الملخص السريع أعلى المقال */
    summary: z.string(),
    cover: z.object({ icon: z.string(), hue: z.number().default(160) }),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    /** خطوات ظاهرة في المقال، وتُخرِج HowTo فقط عندما تكون تعليمات حقيقية */
    howto: z.array(z.object({ name: z.string(), text: z.string() })).optional(),
    related: z.array(z.string()).default([]),
    /** ترتيب العرض عند تساوي التاريخ (الأصغر أولاً) */
    order: z.number().default(99),
    draft: z.boolean().default(false),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: articleSchema,
});

const articlesEn = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/en' }),
  schema: articleSchema,
});

const articlesFr = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/fr' }),
  schema: articleSchema,
});

const articlesEs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/es' }),
  schema: articleSchema,
});

export const collections = { articles, articlesEn, articlesFr, articlesEs };
