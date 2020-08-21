
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','630'),
  exact: true,
},
{
  path: '/docs/__docusaurus/debug',
  component: ComponentCreator('/docs/__docusaurus/debug','33d'),
  exact: true,
},
{
  path: '/docs/docs',
  component: ComponentCreator('/docs/docs','026'),
  
  routes: [
{
  path: '/docs/docs/',
  component: ComponentCreator('/docs/docs/','567'),
  exact: true,
},
{
  path: '/docs/docs/about',
  component: ComponentCreator('/docs/docs/about','227'),
  exact: true,
},
{
  path: '/docs/docs/fund',
  component: ComponentCreator('/docs/docs/fund','928'),
  exact: true,
},
{
  path: '/docs/docs/gift',
  component: ComponentCreator('/docs/docs/gift','e7a'),
  exact: true,
},
{
  path: '/docs/docs/mdx',
  component: ComponentCreator('/docs/docs/mdx','03c'),
  exact: true,
},
{
  path: '/docs/docs/organization',
  component: ComponentCreator('/docs/docs/organization','354'),
  exact: true,
},
{
  path: '/docs/docs/style',
  component: ComponentCreator('/docs/docs/style','6e4'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
