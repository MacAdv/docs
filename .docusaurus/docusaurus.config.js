export default {
  "title": "Macalester Advancement Info Svcs",
  "tagline": "The tagline",
  "url": "https://macadv.github.io",
  "baseUrl": "/docs/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "macadv",
  "projectName": "docs",
  "themeConfig": {
    "navbar": {
      "title": "Macalester Advancement Info Svcs",
      "logo": {
        "alt": "Macalester Advancement Info Svcs Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "href": "https://github.com/macadv/docs",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "copyright": "Copyright © 2020 MacAdv. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "person",
          "sidebarPath": "C:\\code\\docs\\sidebars.js",
          "editUrl": "https://github.com/MacAdv/docs/blob/master/"
        },
        "theme": {
          "customCss": "C:\\code\\docs\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "plugins": [
    "C:\\code\\docs\\node_modules\\docusaurus-lunr-search\\src\\index.js"
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": []
};