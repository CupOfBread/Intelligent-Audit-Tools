// mock/index.ts
import Mock from "mockjs";
var mock_default = [
  {
    url: "/api/get-purchase-list",
    method: "get",
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          "list|1-100": [
            {
              index: /S20201228115950[0-9][0-9][0-9]/,
              pdName: "Macbook",
              pdNum: "p_tmp_60a637cd0d",
              "purchaseNum|1-100": 100,
              adminName: "\u8D22\u52A1\u90E8111",
              updateTime: '2020-05-20@date("HH:mm:ss")',
              pdType: "\u7535\u5B50\u4EA7\u54C1"
            },
            {
              index: /S20201228115950[0-9][0-9][0-9]/,
              pdName: "Macbook",
              pdNum: "p_tmp_60a637cd0d",
              "purchaseNum|1-100": 100,
              adminName: "\u8D22\u52A1\u90E8",
              updateTime: '2020-05-20@date("HH:mm:ss")'
            }
          ]
        })
      }
    })
  },
  {
    url: "/api/get-list",
    method: "get",
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          "list|1-100": [
            {
              "index|+1": 1,
              "status|1": "@natural(0, 4)",
              no: "BH00@natural(01, 100)",
              name: "@city()\u529E\u516C\u7528\u54C1\u91C7\u8D2D\u9879\u76EE",
              "paymentType|1": "@natural(0, 1)",
              "contractType|1": "@natural(0, 2)",
              updateTime: '2020-05-30 @date("HH:mm:ss")',
              amount: "@natural(10, 500),000,000",
              adminName: "@cname()"
            }
          ]
        })
      }
    })
  },
  {
    url: "/api/detail-basic",
    method: "get",
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          name: "td_20023747",
          loginType: "Web",
          currentRole: "Admin",
          rightsList: "\u901A\u7528\u6743\u9650",
          userStatus: "\u542F\u7528",
          language: "\u7B80\u4F53\u4E2D\u6587",
          timeZone: "(GMT+08:00)\u4E2D\u56FD\u65F6\u533A\u2014\u5317\u4EAC\uFF08Asia/Beijing\uFF09"
        })
      }
    })
  },
  {
    url: "/api/get-card-list",
    method: "get",
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          "list|48-50": [
            {
              "index|+1": 1,
              isSetup: "@boolean",
              "type|1": "@natural(1, 5)",
              "banner|1": [
                "https://tdesign.gtimg.com/starter/cloud-db.jpg",
                "https://tdesign.gtimg.com/starter/cloud-server.jpg",
                "https://tdesign.gtimg.com/starter/ssl.jpg",
                "https://tdesign.gtimg.com/starter/t-sec.jpg",
                "https://tdesign.gtimg.com/starter/face-recognition.jpg"
              ],
              "name|1": ["\u4EBA\u8138\u8BC6\u522B", "SSL\u8BC1\u4E66", "CVM", "\u4E91\u6570\u636E\u5E93", "T-Sec \u4E91\u9632\u706B\u5899"],
              "description|1": [
                "\u57FA\u4E8E\u817E\u8BAF\u4F18\u56FE\u5F3A\u5927\u7684\u9762\u90E8\u5206\u6790\u6280\u672F\uFF0C\u63D0\u4F9B\u5305\u62EC\u4EBA\u8138\u68C0\u6D4B\u4E0E\u5206\u6790\u3001\u4E94\u5B98\u5B9A\u4F4D\u3001\u4EBA\u8138\u641C\u7D22\u3001\u4EBA\u8138\u6BD4\u5BF9\u3001\u4EBA\u8138",
                "\u4E91\u786C\u76D8\u4E3A\u60A8\u63D0\u4F9B\u7528\u4E8ECVM\u7684\u6301\u4E45\u6027\u6570\u636E\u5757\u7EA7\u5B58\u50A8\u670D\u52A1\u3002\u4E91\u786C\u76D8\u4E2D\u7684\u6570\u636E\u81EA\u52A8\u5730\u53EF\u7528\u533A\u5185\u4EE5\u591A\u526F\u672C\u5197",
                "SSL\u8BC1\u4E66\u53C8\u53EB\u670D\u52A1\u5668\u8BC1\u4E66\uFF0C\u817E\u8BAF\u4E91\u4E3A\u60A8\u63D0\u4F9B\u8BC1\u4E66\u7684\u4E00\u7AD9\u5F0F\u670D\u52A1\uFF0C\u5305\u62EC\u514D\u8D39\u3001\u4ED8\u8D39\u8BC1\u4E66\u7684\u7533\u8BF7\u3001\u7BA1\u7406\u53CA\u90E8",
                "\u817E\u8BAF\u5B89\u5168\u4E91\u9632\u706B\u5899\u4EA7\u54C1\uFF0C\u662F\u817E\u8BAF\u4E91\u5B89\u5168\u56E2\u961F\u7ED3\u5408\u4E91\u539F\u751F\u7684\u4F18\u52BF\uFF0C\u81EA\u4E3B\u7814\u53D1\u7684SaaS\u5316\u9632\u706B\u5899\u4EA7\u54C1\uFF0C\u65E0\u9700\u5BA2\u65E0\u9700\u5BA2\u65E0\u9700\u5BA2\u65E0\u9700\u5BA2\u65E0\u9700\u5BA2\u65E0\u9700\u5BA2\u65E0\u9700\u5BA2",
                "\u4E91\u6570\u636E\u5E93MySQL\u4E3A\u7528\u6237\u63D0\u4F9B\u5B89\u5168\u53EF\u9760\uFF0C\u6027\u80FD\u5353\u8D8A\u3001\u6613\u4E8E\u7EF4\u62A4\u7684\u4F01\u4E1A\u7EA7\u4E91\u6570\u636E\u5E93\u670D\u52A1\u3002"
              ]
            }
          ]
        })
      }
    })
  },
  {
    url: "/api/get-project-list",
    method: "get",
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          "list|1-50": [
            {
              "index|+1": 1,
              adminPhone: "+86 13587609955",
              updateTime: '2020-05-30 @date("HH:mm:ss")',
              "adminName|1": ["\u987E\u5A1F	", "\u5E38\u521A", "\u90D1\u6D0B"],
              "name|1": [
                "\u6CA7\u5DDE\u5E02\u529E\u516C\u7528\u54C1\u91C7\u8D2D\u9879\u76EE",
                "\u7EA2\u6CB3\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u5DDE\u529E\u516C\u7528\u54C1\u91C7\u8D2D\u9879\u76EE	",
                "\u94DC\u5DDD\u5E02\u529E\u516C\u7528\u54C1\u91C7\u8D2D\u9879\u76EE",
                "\u9647\u5357\u5E02\u529E\u516C\u7528\u54C1\u91C7\u8D2D\u9879\u76EE	",
                "\u516D\u5B89\u5E02\u529E\u516C\u7528\u54C1\u91C7\u8D2D\u9879\u76EE	 "
              ]
            }
          ]
        })
      }
    })
  },
  {
    url: "/api/post",
    method: "post",
    timeout: 2e3,
    response: {
      code: 0,
      data: {
        name: "vben"
      }
    }
  },
  {
    url: "/api/get-menu-list",
    method: "get",
    timeout: 2e3,
    response: {
      code: 0,
      data: {
        ...Mock.mock({
          // list: [
          //   {
          //     path: '/list',
          //     name: 'list',
          //     component: 'LAYOUT',
          //     redirect: '/list/base',
          //     meta: {
          //       title: '列表页',
          //       icon: 'view-list',
          //     },
          //     children: [
          //       {
          //         path: 'base',
          //         name: 'ListBase',
          //         component: '/list/base/index',
          //         meta: {
          //           title: '基础列表页',
          //         },
          //       },
          //       {
          //         path: 'card',
          //         name: 'ListCard',
          //         component: '/list/card/index',
          //         meta: {
          //           title: '卡片列表页',
          //         },
          //       },
          //       {
          //         path: 'filter',
          //         name: 'ListFilter',
          //         component: '/list/filter/index',
          //         meta: {
          //           title: '筛选列表页',
          //         },
          //       },
          //       {
          //         path: 'tree',
          //         name: 'ListTree',
          //         component: '/list/tree/index',
          //         meta: {
          //           title: '树状筛选列表页',
          //         },
          //       },
          //     ],
          //   },
          //   {
          //     path: '/form',
          //     name: 'form',
          //     component: 'LAYOUT',
          //     redirect: '/form/base',
          //     meta: {
          //       title: '表单页',
          //       icon: 'edit-1',
          //     },
          //     children: [
          //       {
          //         path: 'base',
          //         name: 'FormBase',
          //         component: '/form/base/index',
          //         meta: {
          //           title: '基础表单页',
          //         },
          //       },
          //       {
          //         path: 'step',
          //         name: 'FormStep',
          //         component: '/form/step/index',
          //         meta: {
          //           title: '分步表单页',
          //           keepAlive: false,
          //         },
          //       },
          //     ],
          //   },
          //   {
          //     path: '/detail',
          //     name: 'detail',
          //     component: 'LAYOUT',
          //     redirect: '/detail/base',
          //     meta: {
          //       title: '详情页',
          //       icon: 'layers',
          //     },
          //     children: [
          //       {
          //         path: 'base',
          //         name: 'DetailBase',
          //         component: '/detail/base/index',
          //         meta: {
          //           title: '基础详情页',
          //         },
          //       },
          //       {
          //         path: 'advanced',
          //         name: 'DetailAdvanced',
          //         component: '/detail/advanced/index',
          //         meta: {
          //           title: '多卡片详情页',
          //         },
          //       },
          //       {
          //         path: 'deploy',
          //         name: 'DetailDeploy',
          //         component: '/detail/deploy/index',
          //         meta: {
          //           title: '数据详情页',
          //         },
          //       },
          //       {
          //         path: 'secondary',
          //         name: 'DetailSecondary',
          //         component: '/detail/secondary/index',
          //         meta: {
          //           title: '二级详情页',
          //         },
          //       },
          //     ],
          //   },
          //   {
          //     path: '/frame',
          //     name: 'Frame',
          //     component: 'Layout',
          //     redirect: '/frame/doc',
          //     meta: {
          //       icon: 'internet',
          //       title: '外部页面',
          //     },
          //     children: [
          //       {
          //         path: 'doc',
          //         name: 'Doc',
          //         component: 'IFrame',
          //         meta: {
          //           frameSrc: 'https://tdesign.tencent.com/starter/docs/vue-next/get-started',
          //           title: '使用文档（内嵌）',
          //         },
          //       },
          //       {
          //         path: 'TDesign',
          //         name: 'TDesign',
          //         component: 'IFrame',
          //         meta: {
          //           frameSrc: 'https://tdesign.tencent.com/vue-next/getting-started',
          //           title: 'TDesign 文档（内嵌）',
          //         },
          //       },
          //       {
          //         path: 'TDesign2',
          //         name: 'TDesign2',
          //         component: 'IFrame',
          //         meta: {
          //           frameSrc: 'https://tdesign.tencent.com/vue-next/getting-started',
          //           frameBlank: true,
          //           title: 'TDesign 文档（外链）',
          //         },
          //       },
          //     ],
          //   },
          // ],
        })
      }
    }
  }
];
export {
  mock_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJEOlxcXFwwUHJvamVjdFxcXFxJbnRlbGxpZ2VudC1BdWRpdC1Ub29sc1xcXFxtb2NrXFxcXGluZGV4LnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkQ6XFxcXDBQcm9qZWN0XFxcXEludGVsbGlnZW50LUF1ZGl0LVRvb2xzXFxcXG1vY2tcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0Q6LzBQcm9qZWN0L0ludGVsbGlnZW50LUF1ZGl0LVRvb2xzL21vY2svaW5kZXgudHNcIjtpbXBvcnQgTW9jayBmcm9tICdtb2NranMnO1xuaW1wb3J0IHsgTW9ja01ldGhvZCB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICB1cmw6ICcvYXBpL2dldC1wdXJjaGFzZS1saXN0JyxcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHJlc3BvbnNlOiAoKSA9PiAoe1xuICAgICAgY29kZTogMCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgLi4uTW9jay5tb2NrKHtcbiAgICAgICAgICAnbGlzdHwxLTEwMCc6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW5kZXg6IC9TMjAyMDEyMjgxMTU5NTBbMC05XVswLTldWzAtOV0vLFxuICAgICAgICAgICAgICBwZE5hbWU6ICdNYWNib29rJyxcbiAgICAgICAgICAgICAgcGROdW06ICdwX3RtcF82MGE2MzdjZDBkJyxcbiAgICAgICAgICAgICAgJ3B1cmNoYXNlTnVtfDEtMTAwJzogMTAwLFxuICAgICAgICAgICAgICBhZG1pbk5hbWU6ICdcdThEMjJcdTUyQTFcdTkwRTgxMTEnLFxuICAgICAgICAgICAgICB1cGRhdGVUaW1lOiAnMjAyMC0wNS0yMEBkYXRlKFwiSEg6bW06c3NcIiknLFxuICAgICAgICAgICAgICBwZFR5cGU6ICdcdTc1MzVcdTVCNTBcdTRFQTdcdTU0QzEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW5kZXg6IC9TMjAyMDEyMjgxMTU5NTBbMC05XVswLTldWzAtOV0vLFxuICAgICAgICAgICAgICBwZE5hbWU6ICdNYWNib29rJyxcbiAgICAgICAgICAgICAgcGROdW06ICdwX3RtcF82MGE2MzdjZDBkJyxcbiAgICAgICAgICAgICAgJ3B1cmNoYXNlTnVtfDEtMTAwJzogMTAwLFxuICAgICAgICAgICAgICBhZG1pbk5hbWU6ICdcdThEMjJcdTUyQTFcdTkwRTgnLFxuICAgICAgICAgICAgICB1cGRhdGVUaW1lOiAnMjAyMC0wNS0yMEBkYXRlKFwiSEg6bW06c3NcIiknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICB1cmw6ICcvYXBpL2dldC1saXN0JyxcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHJlc3BvbnNlOiAoKSA9PiAoe1xuICAgICAgY29kZTogMCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgLi4uTW9jay5tb2NrKHtcbiAgICAgICAgICAnbGlzdHwxLTEwMCc6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJ2luZGV4fCsxJzogMSxcbiAgICAgICAgICAgICAgJ3N0YXR1c3wxJzogJ0BuYXR1cmFsKDAsIDQpJyxcbiAgICAgICAgICAgICAgbm86ICdCSDAwQG5hdHVyYWwoMDEsIDEwMCknLFxuICAgICAgICAgICAgICBuYW1lOiAnQGNpdHkoKVx1NTI5RVx1NTE2Q1x1NzUyOFx1NTRDMVx1OTFDN1x1OEQyRFx1OTg3OVx1NzZFRScsXG4gICAgICAgICAgICAgICdwYXltZW50VHlwZXwxJzogJ0BuYXR1cmFsKDAsIDEpJyxcbiAgICAgICAgICAgICAgJ2NvbnRyYWN0VHlwZXwxJzogJ0BuYXR1cmFsKDAsIDIpJyxcbiAgICAgICAgICAgICAgdXBkYXRlVGltZTogJzIwMjAtMDUtMzAgQGRhdGUoXCJISDptbTpzc1wiKScsXG4gICAgICAgICAgICAgIGFtb3VudDogJ0BuYXR1cmFsKDEwLCA1MDApLDAwMCwwMDAnLFxuICAgICAgICAgICAgICBhZG1pbk5hbWU6ICdAY25hbWUoKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIHVybDogJy9hcGkvZGV0YWlsLWJhc2ljJyxcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHJlc3BvbnNlOiAoKSA9PiAoe1xuICAgICAgY29kZTogMCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgLi4uTW9jay5tb2NrKHtcbiAgICAgICAgICBuYW1lOiAndGRfMjAwMjM3NDcnLFxuICAgICAgICAgIGxvZ2luVHlwZTogJ1dlYicsXG4gICAgICAgICAgY3VycmVudFJvbGU6ICdBZG1pbicsXG4gICAgICAgICAgcmlnaHRzTGlzdDogJ1x1OTAxQVx1NzUyOFx1Njc0M1x1OTY1MCcsXG4gICAgICAgICAgdXNlclN0YXR1czogJ1x1NTQyRlx1NzUyOCcsXG4gICAgICAgICAgbGFuZ3VhZ2U6ICdcdTdCODBcdTRGNTNcdTRFMkRcdTY1ODcnLFxuICAgICAgICAgIHRpbWVab25lOiAnKEdNVCswODowMClcdTRFMkRcdTU2RkRcdTY1RjZcdTUzM0FcdTIwMTRcdTUzMTdcdTRFQUNcdUZGMDhBc2lhL0JlaWppbmdcdUZGMDknLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICB1cmw6ICcvYXBpL2dldC1jYXJkLWxpc3QnLFxuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgcmVzcG9uc2U6ICgpID0+ICh7XG4gICAgICBjb2RlOiAwLFxuICAgICAgZGF0YToge1xuICAgICAgICAuLi5Nb2NrLm1vY2soe1xuICAgICAgICAgICdsaXN0fDQ4LTUwJzogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnaW5kZXh8KzEnOiAxLFxuICAgICAgICAgICAgICBpc1NldHVwOiAnQGJvb2xlYW4nLFxuICAgICAgICAgICAgICAndHlwZXwxJzogJ0BuYXR1cmFsKDEsIDUpJyxcbiAgICAgICAgICAgICAgJ2Jhbm5lcnwxJzogW1xuICAgICAgICAgICAgICAgICdodHRwczovL3RkZXNpZ24uZ3RpbWcuY29tL3N0YXJ0ZXIvY2xvdWQtZGIuanBnJyxcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly90ZGVzaWduLmd0aW1nLmNvbS9zdGFydGVyL2Nsb3VkLXNlcnZlci5qcGcnLFxuICAgICAgICAgICAgICAgICdodHRwczovL3RkZXNpZ24uZ3RpbWcuY29tL3N0YXJ0ZXIvc3NsLmpwZycsXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vdGRlc2lnbi5ndGltZy5jb20vc3RhcnRlci90LXNlYy5qcGcnLFxuICAgICAgICAgICAgICAgICdodHRwczovL3RkZXNpZ24uZ3RpbWcuY29tL3N0YXJ0ZXIvZmFjZS1yZWNvZ25pdGlvbi5qcGcnLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAnbmFtZXwxJzogWydcdTRFQkFcdTgxMzhcdThCQzZcdTUyMkInLCAnU1NMXHU4QkMxXHU0RTY2JywgJ0NWTScsICdcdTRFOTFcdTY1NzBcdTYzNkVcdTVFOTMnLCAnVC1TZWMgXHU0RTkxXHU5NjMyXHU3MDZCXHU1ODk5J10sXG4gICAgICAgICAgICAgICdkZXNjcmlwdGlvbnwxJzogW1xuICAgICAgICAgICAgICAgICdcdTU3RkFcdTRFOEVcdTgxN0VcdThCQUZcdTRGMThcdTU2RkVcdTVGM0FcdTU5MjdcdTc2ODRcdTk3NjJcdTkwRThcdTUyMDZcdTY3OTBcdTYyODBcdTY3MkZcdUZGMENcdTYzRDBcdTRGOUJcdTUzMDVcdTYyRUNcdTRFQkFcdTgxMzhcdTY4QzBcdTZENEJcdTRFMEVcdTUyMDZcdTY3OTBcdTMwMDFcdTRFOTRcdTVCOThcdTVCOUFcdTRGNERcdTMwMDFcdTRFQkFcdTgxMzhcdTY0MUNcdTdEMjJcdTMwMDFcdTRFQkFcdTgxMzhcdTZCRDRcdTVCRjlcdTMwMDFcdTRFQkFcdTgxMzgnLFxuICAgICAgICAgICAgICAgICdcdTRFOTFcdTc4NkNcdTc2RDhcdTRFM0FcdTYwQThcdTYzRDBcdTRGOUJcdTc1MjhcdTRFOEVDVk1cdTc2ODRcdTYzMDFcdTRFNDVcdTYwMjdcdTY1NzBcdTYzNkVcdTU3NTdcdTdFQTdcdTVCNThcdTUwQThcdTY3MERcdTUyQTFcdTMwMDJcdTRFOTFcdTc4NkNcdTc2RDhcdTRFMkRcdTc2ODRcdTY1NzBcdTYzNkVcdTgxRUFcdTUyQThcdTU3MzBcdTUzRUZcdTc1MjhcdTUzM0FcdTUxODVcdTRFRTVcdTU5MUFcdTUyNkZcdTY3MkNcdTUxOTcnLFxuICAgICAgICAgICAgICAgICdTU0xcdThCQzFcdTRFNjZcdTUzQzhcdTUzRUJcdTY3MERcdTUyQTFcdTU2NjhcdThCQzFcdTRFNjZcdUZGMENcdTgxN0VcdThCQUZcdTRFOTFcdTRFM0FcdTYwQThcdTYzRDBcdTRGOUJcdThCQzFcdTRFNjZcdTc2ODRcdTRFMDBcdTdBRDlcdTVGMEZcdTY3MERcdTUyQTFcdUZGMENcdTUzMDVcdTYyRUNcdTUxNERcdThEMzlcdTMwMDFcdTRFRDhcdThEMzlcdThCQzFcdTRFNjZcdTc2ODRcdTc1MzNcdThCRjdcdTMwMDFcdTdCQTFcdTc0MDZcdTUzQ0FcdTkwRTgnLFxuICAgICAgICAgICAgICAgICdcdTgxN0VcdThCQUZcdTVCODlcdTUxNjhcdTRFOTFcdTk2MzJcdTcwNkJcdTU4OTlcdTRFQTdcdTU0QzFcdUZGMENcdTY2MkZcdTgxN0VcdThCQUZcdTRFOTFcdTVCODlcdTUxNjhcdTU2RTJcdTk2MUZcdTdFRDNcdTU0MDhcdTRFOTFcdTUzOUZcdTc1MUZcdTc2ODRcdTRGMThcdTUyQkZcdUZGMENcdTgxRUFcdTRFM0JcdTc4MTRcdTUzRDFcdTc2ODRTYWFTXHU1MzE2XHU5NjMyXHU3MDZCXHU1ODk5XHU0RUE3XHU1NEMxXHVGRjBDXHU2NUUwXHU5NzAwXHU1QkEyXHU2NUUwXHU5NzAwXHU1QkEyXHU2NUUwXHU5NzAwXHU1QkEyXHU2NUUwXHU5NzAwXHU1QkEyXHU2NUUwXHU5NzAwXHU1QkEyXHU2NUUwXHU5NzAwXHU1QkEyXHU2NUUwXHU5NzAwXHU1QkEyJyxcbiAgICAgICAgICAgICAgICAnXHU0RTkxXHU2NTcwXHU2MzZFXHU1RTkzTXlTUUxcdTRFM0FcdTc1MjhcdTYyMzdcdTYzRDBcdTRGOUJcdTVCODlcdTUxNjhcdTUzRUZcdTk3NjBcdUZGMENcdTYwMjdcdTgwRkRcdTUzNTNcdThEOEFcdTMwMDFcdTY2MTNcdTRFOEVcdTdFRjRcdTYyQTRcdTc2ODRcdTRGMDFcdTRFMUFcdTdFQTdcdTRFOTFcdTY1NzBcdTYzNkVcdTVFOTNcdTY3MERcdTUyQTFcdTMwMDInLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICB1cmw6ICcvYXBpL2dldC1wcm9qZWN0LWxpc3QnLFxuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgcmVzcG9uc2U6ICgpID0+ICh7XG4gICAgICBjb2RlOiAwLFxuICAgICAgZGF0YToge1xuICAgICAgICAuLi5Nb2NrLm1vY2soe1xuICAgICAgICAgICdsaXN0fDEtNTAnOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdpbmRleHwrMSc6IDEsXG4gICAgICAgICAgICAgIGFkbWluUGhvbmU6ICcrODYgMTM1ODc2MDk5NTUnLFxuICAgICAgICAgICAgICB1cGRhdGVUaW1lOiAnMjAyMC0wNS0zMCBAZGF0ZShcIkhIOm1tOnNzXCIpJyxcbiAgICAgICAgICAgICAgJ2FkbWluTmFtZXwxJzogWydcdTk4N0VcdTVBMUZcdCcsICdcdTVFMzhcdTUyMUEnLCAnXHU5MEQxXHU2RDBCJ10sXG4gICAgICAgICAgICAgICduYW1lfDEnOiBbXG4gICAgICAgICAgICAgICAgJ1x1NkNBN1x1NURERVx1NUUwMlx1NTI5RVx1NTE2Q1x1NzUyOFx1NTRDMVx1OTFDN1x1OEQyRFx1OTg3OVx1NzZFRScsXG4gICAgICAgICAgICAgICAgJ1x1N0VBMlx1NkNCM1x1NTRDOFx1NUMzQ1x1NjVDRlx1NUY1RFx1NjVDRlx1ODFFQVx1NkNCQlx1NURERVx1NTI5RVx1NTE2Q1x1NzUyOFx1NTRDMVx1OTFDN1x1OEQyRFx1OTg3OVx1NzZFRVx0JyxcbiAgICAgICAgICAgICAgICAnXHU5NERDXHU1REREXHU1RTAyXHU1MjlFXHU1MTZDXHU3NTI4XHU1NEMxXHU5MUM3XHU4RDJEXHU5ODc5XHU3NkVFJyxcbiAgICAgICAgICAgICAgICAnXHU5NjQ3XHU1MzU3XHU1RTAyXHU1MjlFXHU1MTZDXHU3NTI4XHU1NEMxXHU5MUM3XHU4RDJEXHU5ODc5XHU3NkVFXHQnLFxuICAgICAgICAgICAgICAgICdcdTUxNkRcdTVCODlcdTVFMDJcdTUyOUVcdTUxNkNcdTc1MjhcdTU0QzFcdTkxQzdcdThEMkRcdTk4NzlcdTc2RUVcdCAnLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICB1cmw6ICcvYXBpL3Bvc3QnLFxuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIHRpbWVvdXQ6IDIwMDAsXG4gICAgcmVzcG9uc2U6IHtcbiAgICAgIGNvZGU6IDAsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6ICd2YmVuJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHVybDogJy9hcGkvZ2V0LW1lbnUtbGlzdCcsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICB0aW1lb3V0OiAyMDAwLFxuICAgIHJlc3BvbnNlOiB7XG4gICAgICBjb2RlOiAwLFxuICAgICAgZGF0YToge1xuICAgICAgICAuLi5Nb2NrLm1vY2soe1xuICAgICAgICAgIC8vIGxpc3Q6IFtcbiAgICAgICAgICAvLyAgIHtcbiAgICAgICAgICAvLyAgICAgcGF0aDogJy9saXN0JyxcbiAgICAgICAgICAvLyAgICAgbmFtZTogJ2xpc3QnLFxuICAgICAgICAgIC8vICAgICBjb21wb25lbnQ6ICdMQVlPVVQnLFxuICAgICAgICAgIC8vICAgICByZWRpcmVjdDogJy9saXN0L2Jhc2UnLFxuICAgICAgICAgIC8vICAgICBtZXRhOiB7XG4gICAgICAgICAgLy8gICAgICAgdGl0bGU6ICdcdTUyMTdcdTg4NjhcdTk4NzUnLFxuICAgICAgICAgIC8vICAgICAgIGljb246ICd2aWV3LWxpc3QnLFxuICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgIC8vICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgICAvLyAgICAgICAgIHBhdGg6ICdiYXNlJyxcbiAgICAgICAgICAvLyAgICAgICAgIG5hbWU6ICdMaXN0QmFzZScsXG4gICAgICAgICAgLy8gICAgICAgICBjb21wb25lbnQ6ICcvbGlzdC9iYXNlL2luZGV4JyxcbiAgICAgICAgICAvLyAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAvLyAgICAgICAgICAgdGl0bGU6ICdcdTU3RkFcdTc4NDBcdTUyMTdcdTg4NjhcdTk4NzUnLFxuICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgICAvLyAgICAgICAgIHBhdGg6ICdjYXJkJyxcbiAgICAgICAgICAvLyAgICAgICAgIG5hbWU6ICdMaXN0Q2FyZCcsXG4gICAgICAgICAgLy8gICAgICAgICBjb21wb25lbnQ6ICcvbGlzdC9jYXJkL2luZGV4JyxcbiAgICAgICAgICAvLyAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAvLyAgICAgICAgICAgdGl0bGU6ICdcdTUzNjFcdTcyNDdcdTUyMTdcdTg4NjhcdTk4NzUnLFxuICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgICAvLyAgICAgICAgIHBhdGg6ICdmaWx0ZXInLFxuICAgICAgICAgIC8vICAgICAgICAgbmFtZTogJ0xpc3RGaWx0ZXInLFxuICAgICAgICAgIC8vICAgICAgICAgY29tcG9uZW50OiAnL2xpc3QvZmlsdGVyL2luZGV4JyxcbiAgICAgICAgICAvLyAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAvLyAgICAgICAgICAgdGl0bGU6ICdcdTdCNUJcdTkwMDlcdTUyMTdcdTg4NjhcdTk4NzUnLFxuICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgICAvLyAgICAgICAgIHBhdGg6ICd0cmVlJyxcbiAgICAgICAgICAvLyAgICAgICAgIG5hbWU6ICdMaXN0VHJlZScsXG4gICAgICAgICAgLy8gICAgICAgICBjb21wb25lbnQ6ICcvbGlzdC90cmVlL2luZGV4JyxcbiAgICAgICAgICAvLyAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAvLyAgICAgICAgICAgdGl0bGU6ICdcdTY4MTFcdTcyQjZcdTdCNUJcdTkwMDlcdTUyMTdcdTg4NjhcdTk4NzUnLFxuICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgIC8vICAgICBdLFxuICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAvLyAgIHtcbiAgICAgICAgICAvLyAgICAgcGF0aDogJy9mb3JtJyxcbiAgICAgICAgICAvLyAgICAgbmFtZTogJ2Zvcm0nLFxuICAgICAgICAgIC8vICAgICBjb21wb25lbnQ6ICdMQVlPVVQnLFxuICAgICAgICAgIC8vICAgICByZWRpcmVjdDogJy9mb3JtL2Jhc2UnLFxuICAgICAgICAgIC8vICAgICBtZXRhOiB7XG4gICAgICAgICAgLy8gICAgICAgdGl0bGU6ICdcdTg4NjhcdTUzNTVcdTk4NzUnLFxuICAgICAgICAgIC8vICAgICAgIGljb246ICdlZGl0LTEnLFxuICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgIC8vICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgICAvLyAgICAgICAgIHBhdGg6ICdiYXNlJyxcbiAgICAgICAgICAvLyAgICAgICAgIG5hbWU6ICdGb3JtQmFzZScsXG4gICAgICAgICAgLy8gICAgICAgICBjb21wb25lbnQ6ICcvZm9ybS9iYXNlL2luZGV4JyxcbiAgICAgICAgICAvLyAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAvLyAgICAgICAgICAgdGl0bGU6ICdcdTU3RkFcdTc4NDBcdTg4NjhcdTUzNTVcdTk4NzUnLFxuICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgICAvLyAgICAgICAgIHBhdGg6ICdzdGVwJyxcbiAgICAgICAgICAvLyAgICAgICAgIG5hbWU6ICdGb3JtU3RlcCcsXG4gICAgICAgICAgLy8gICAgICAgICBjb21wb25lbnQ6ICcvZm9ybS9zdGVwL2luZGV4JyxcbiAgICAgICAgICAvLyAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAvLyAgICAgICAgICAgdGl0bGU6ICdcdTUyMDZcdTZCNjVcdTg4NjhcdTUzNTVcdTk4NzUnLFxuICAgICAgICAgIC8vICAgICAgICAgICBrZWVwQWxpdmU6IGZhbHNlLFxuICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgIC8vICAgICBdLFxuICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAvLyAgIHtcbiAgICAgICAgICAvLyAgICAgcGF0aDogJy9kZXRhaWwnLFxuICAgICAgICAgIC8vICAgICBuYW1lOiAnZGV0YWlsJyxcbiAgICAgICAgICAvLyAgICAgY29tcG9uZW50OiAnTEFZT1VUJyxcbiAgICAgICAgICAvLyAgICAgcmVkaXJlY3Q6ICcvZGV0YWlsL2Jhc2UnLFxuICAgICAgICAgIC8vICAgICBtZXRhOiB7XG4gICAgICAgICAgLy8gICAgICAgdGl0bGU6ICdcdThCRTZcdTYwQzVcdTk4NzUnLFxuICAgICAgICAgIC8vICAgICAgIGljb246ICdsYXllcnMnLFxuICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgIC8vICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgICAvLyAgICAgICAgIHBhdGg6ICdiYXNlJyxcbiAgICAgICAgICAvLyAgICAgICAgIG5hbWU6ICdEZXRhaWxCYXNlJyxcbiAgICAgICAgICAvLyAgICAgICAgIGNvbXBvbmVudDogJy9kZXRhaWwvYmFzZS9pbmRleCcsXG4gICAgICAgICAgLy8gICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgLy8gICAgICAgICAgIHRpdGxlOiAnXHU1N0ZBXHU3ODQwXHU4QkU2XHU2MEM1XHU5ODc1JyxcbiAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgLy8gICAgICAgfSxcbiAgICAgICAgICAvLyAgICAgICB7XG4gICAgICAgICAgLy8gICAgICAgICBwYXRoOiAnYWR2YW5jZWQnLFxuICAgICAgICAgIC8vICAgICAgICAgbmFtZTogJ0RldGFpbEFkdmFuY2VkJyxcbiAgICAgICAgICAvLyAgICAgICAgIGNvbXBvbmVudDogJy9kZXRhaWwvYWR2YW5jZWQvaW5kZXgnLFxuICAgICAgICAgIC8vICAgICAgICAgbWV0YToge1xuICAgICAgICAgIC8vICAgICAgICAgICB0aXRsZTogJ1x1NTkxQVx1NTM2MVx1NzI0N1x1OEJFNlx1NjBDNVx1OTg3NScsXG4gICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgICAgLy8gICAgICAge1xuICAgICAgICAgIC8vICAgICAgICAgcGF0aDogJ2RlcGxveScsXG4gICAgICAgICAgLy8gICAgICAgICBuYW1lOiAnRGV0YWlsRGVwbG95JyxcbiAgICAgICAgICAvLyAgICAgICAgIGNvbXBvbmVudDogJy9kZXRhaWwvZGVwbG95L2luZGV4JyxcbiAgICAgICAgICAvLyAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAvLyAgICAgICAgICAgdGl0bGU6ICdcdTY1NzBcdTYzNkVcdThCRTZcdTYwQzVcdTk4NzUnLFxuICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgICAvLyAgICAgICAgIHBhdGg6ICdzZWNvbmRhcnknLFxuICAgICAgICAgIC8vICAgICAgICAgbmFtZTogJ0RldGFpbFNlY29uZGFyeScsXG4gICAgICAgICAgLy8gICAgICAgICBjb21wb25lbnQ6ICcvZGV0YWlsL3NlY29uZGFyeS9pbmRleCcsXG4gICAgICAgICAgLy8gICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgLy8gICAgICAgICAgIHRpdGxlOiAnXHU0RThDXHU3RUE3XHU4QkU2XHU2MEM1XHU5ODc1JyxcbiAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgLy8gICAgICAgfSxcbiAgICAgICAgICAvLyAgICAgXSxcbiAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgLy8gICB7XG4gICAgICAgICAgLy8gICAgIHBhdGg6ICcvZnJhbWUnLFxuICAgICAgICAgIC8vICAgICBuYW1lOiAnRnJhbWUnLFxuICAgICAgICAgIC8vICAgICBjb21wb25lbnQ6ICdMYXlvdXQnLFxuICAgICAgICAgIC8vICAgICByZWRpcmVjdDogJy9mcmFtZS9kb2MnLFxuICAgICAgICAgIC8vICAgICBtZXRhOiB7XG4gICAgICAgICAgLy8gICAgICAgaWNvbjogJ2ludGVybmV0JyxcbiAgICAgICAgICAvLyAgICAgICB0aXRsZTogJ1x1NTkxNlx1OTBFOFx1OTg3NVx1OTc2MicsXG4gICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgLy8gICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgLy8gICAgICAge1xuICAgICAgICAgIC8vICAgICAgICAgcGF0aDogJ2RvYycsXG4gICAgICAgICAgLy8gICAgICAgICBuYW1lOiAnRG9jJyxcbiAgICAgICAgICAvLyAgICAgICAgIGNvbXBvbmVudDogJ0lGcmFtZScsXG4gICAgICAgICAgLy8gICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgLy8gICAgICAgICAgIGZyYW1lU3JjOiAnaHR0cHM6Ly90ZGVzaWduLnRlbmNlbnQuY29tL3N0YXJ0ZXIvZG9jcy92dWUtbmV4dC9nZXQtc3RhcnRlZCcsXG4gICAgICAgICAgLy8gICAgICAgICAgIHRpdGxlOiAnXHU0RjdGXHU3NTI4XHU2NTg3XHU2ODYzXHVGRjA4XHU1MTg1XHU1RDRDXHVGRjA5JyxcbiAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgLy8gICAgICAgfSxcbiAgICAgICAgICAvLyAgICAgICB7XG4gICAgICAgICAgLy8gICAgICAgICBwYXRoOiAnVERlc2lnbicsXG4gICAgICAgICAgLy8gICAgICAgICBuYW1lOiAnVERlc2lnbicsXG4gICAgICAgICAgLy8gICAgICAgICBjb21wb25lbnQ6ICdJRnJhbWUnLFxuICAgICAgICAgIC8vICAgICAgICAgbWV0YToge1xuICAgICAgICAgIC8vICAgICAgICAgICBmcmFtZVNyYzogJ2h0dHBzOi8vdGRlc2lnbi50ZW5jZW50LmNvbS92dWUtbmV4dC9nZXR0aW5nLXN0YXJ0ZWQnLFxuICAgICAgICAgIC8vICAgICAgICAgICB0aXRsZTogJ1REZXNpZ24gXHU2NTg3XHU2ODYzXHVGRjA4XHU1MTg1XHU1RDRDXHVGRjA5JyxcbiAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgLy8gICAgICAgfSxcbiAgICAgICAgICAvLyAgICAgICB7XG4gICAgICAgICAgLy8gICAgICAgICBwYXRoOiAnVERlc2lnbjInLFxuICAgICAgICAgIC8vICAgICAgICAgbmFtZTogJ1REZXNpZ24yJyxcbiAgICAgICAgICAvLyAgICAgICAgIGNvbXBvbmVudDogJ0lGcmFtZScsXG4gICAgICAgICAgLy8gICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgLy8gICAgICAgICAgIGZyYW1lU3JjOiAnaHR0cHM6Ly90ZGVzaWduLnRlbmNlbnQuY29tL3Z1ZS1uZXh0L2dldHRpbmctc3RhcnRlZCcsXG4gICAgICAgICAgLy8gICAgICAgICAgIGZyYW1lQmxhbms6IHRydWUsXG4gICAgICAgICAgLy8gICAgICAgICAgIHRpdGxlOiAnVERlc2lnbiBcdTY1ODdcdTY4NjNcdUZGMDhcdTU5MTZcdTk0RkVcdUZGMDknLFxuICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgIC8vICAgICBdLFxuICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAvLyBdLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbl0gYXMgTW9ja01ldGhvZFtdO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrUSxPQUFPLFVBQVU7QUFHblIsSUFBTyxlQUFRO0FBQUEsRUFDYjtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsVUFBVSxPQUFPO0FBQUEsTUFDZixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsUUFDSixHQUFHLEtBQUssS0FBSztBQUFBLFVBQ1gsY0FBYztBQUFBLFlBQ1o7QUFBQSxjQUNFLE9BQU87QUFBQSxjQUNQLFFBQVE7QUFBQSxjQUNSLE9BQU87QUFBQSxjQUNQLHFCQUFxQjtBQUFBLGNBQ3JCLFdBQVc7QUFBQSxjQUNYLFlBQVk7QUFBQSxjQUNaLFFBQVE7QUFBQSxZQUNWO0FBQUEsWUFDQTtBQUFBLGNBQ0UsT0FBTztBQUFBLGNBQ1AsUUFBUTtBQUFBLGNBQ1IsT0FBTztBQUFBLGNBQ1AscUJBQXFCO0FBQUEsY0FDckIsV0FBVztBQUFBLGNBQ1gsWUFBWTtBQUFBLFlBQ2Q7QUFBQSxVQUNGO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBZ0tiLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
