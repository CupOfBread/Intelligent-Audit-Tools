import { shallowRef } from 'vue';

import Pantone from '@/assets/pantone.svg';
import Layout from '@/layouts/index.vue';

export default [
  {
    path: '/ARAA',
    component: Layout,
    redirect: '/ARAA/index',
    name: 'ARAA',
    meta: { title: '账龄分析', icon: shallowRef(Pantone) },
    children: [
      {
        path: 'index',
        name: 'ARAAindex',
        component: () => import('@/pages/ARAA/index.vue'),
        meta: { title: '账龄分析', roleCode: 'ARAA' },
      },
    ],
  },
  {
    path: '/AuditDescriptionGenerator',
    component: Layout,
    redirect: '/AuditDescriptionGenerator/index',
    name: 'AuditDescriptionGenerator',
    meta: { title: '一键生成审计说明', icon: shallowRef(Pantone) },
    children: [
      {
        path: 'index',
        name: 'AuditDescriptionGeneratorIndex',
        component: () => import('@/pages/AuditDescriptionGenerator/index.vue'),
        meta: { title: '一键生成审计说明' },
      },
    ],
  },
];
