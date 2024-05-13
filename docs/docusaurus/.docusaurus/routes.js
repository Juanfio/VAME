import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '466'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8b5'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'bd6'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '1d5'),
            routes: [
              {
                path: '/docs/category/api-reference',
                component: ComponentCreator('/docs/category/api-reference', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/vame/analysis/tree_hierarchy',
                component: ComponentCreator('/docs/reference/vame/analysis/tree_hierarchy', 'fc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/vame/initialize_project/new',
                component: ComponentCreator('/docs/reference/vame/initialize_project/new', '0d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/vame/model/evaluate',
                component: ComponentCreator('/docs/reference/vame/model/evaluate', '736'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/vame/model/rnn_model',
                component: ComponentCreator('/docs/reference/vame/model/rnn_model', '50e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/vame/model/rnn_vae',
                component: ComponentCreator('/docs/reference/vame/model/rnn_vae', '908'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/vame/util/align_egocentrical',
                component: ComponentCreator('/docs/reference/vame/util/align_egocentrical', '81b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/vame/util/auxiliary',
                component: ComponentCreator('/docs/reference/vame/util/auxiliary', '7c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/vame/util/csv_to_npy',
                component: ComponentCreator('/docs/reference/vame/util/csv_to_npy', '358'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/vame/util/gif_pose_helper',
                component: ComponentCreator('/docs/reference/vame/util/gif_pose_helper', '91b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
