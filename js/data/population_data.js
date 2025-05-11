// 地区数据
const regionData = {
  "山东": {
    "serviceRate": 55.4,
    "description": [
      "欧明扬 未覆盖：67",
      "TM 未覆盖：24",
      "程敬植 未覆盖：21",
      "陈冬磊 未覆盖：1",
      "郑丽华 未覆盖：1",
      "宋镠 未覆盖：1",
      "赵萧潇 未覆盖：0"
    ]
  },
  "福建": {
    "serviceRate": 52.0,
    "description": [
      "宋镠 未覆盖：7",
      "陈冬磊 未覆盖：4",
      "陈艳 未覆盖：1",
      "唐静文 未覆盖：0"
    ]
  },
  "河南": {
    "serviceRate": 67.3,
    "description": [
      "唐静文 未覆盖：14",
      "杨飘逸 未覆盖：3",
      "陈冬磊 未覆盖：1",
      "TM 未覆盖：0"
    ]
  },
  "河北": {
    "serviceRate": 77.6,
    "description": [
      "TM 未覆盖：20",
      "王素莹 未覆盖：8",
      "程敬植 未覆盖：5",
      "郑丽华 未覆盖：1"
    ]
  },
  "重庆": {
    "serviceRate": 48.1,
    "description": [
      "代伟 未覆盖：13",
      "TM 未覆盖：10",
      "李玉鸣 未覆盖：5"
    ]
  },
  "湖南": {
    "serviceRate": 37.5,
    "description": [
      "陈冬磊 未覆盖：3",
      "TM 未覆盖：1",
      "唐静文 未覆盖：1",
      "杨飘逸 未覆盖：0"
    ]
  },
  "湖北": {
    "serviceRate": 58.6,
    "description": [
      "TM 未覆盖：28",
      "唐静文 未覆盖：20",
      "陈冬磊 未覆盖：5"
    ]
  },
  "江西": {
    "serviceRate": 66.7,
    "description": [
      "唐静文 未覆盖：3",
      "TM 未覆盖：1",
      "陈冬磊 未覆盖：0"
    ]
  },
  "海南": {
    "serviceRate": 57.6,
    "description": [
      "张天泽 未覆盖：10",
      "陈冬磊 未覆盖：2",
      "TM 未覆盖：2"
    ]
  },
  "黑龙江": {
    "serviceRate": 36.8,
    "description": [
      "程敬植 未覆盖：7",
      "TM 未覆盖：3",
      "黄禹淞 未覆盖：2"
    ]
  },
  "天津": {
    "serviceRate": 78.6,
    "description": [
      "欧明扬 未覆盖：16",
      "黄禹淞 未覆盖：5",
      "程敬植 未覆盖：5",
      "TM 未覆盖：2",
      "郑丽华 未覆盖：0"
    ]
  },
  "陕西": {
    "serviceRate": 46.7,
    "description": [
      "代伟 未覆盖：3",
      "TM 未覆盖：3",
      "程敬植 未覆盖：2"
    ]
  },
  "贵州": {
    "serviceRate": 80.0,
    "description": [
      "李玉鸣 未覆盖：1",
      "代伟 未覆盖：0"
    ]
  },
  "新疆": {
    "serviceRate": 25.0,
    "description": [
      "程敬植 未覆盖：3"
    ]
  },
  "江苏": {
    "serviceRate": 54.1,
    "description": [
      "陈翔宇 未覆盖：111",
      "张蓓青 未覆盖：71",
      "TM 未覆盖：70",
      "陈冬磊 未覆盖：36",
      "梁烁 未覆盖：36",
      "朱琳 未覆盖：20",
      "张天泽 未覆盖：4",
      "杨飘逸 未覆盖：3",
      "赵萧潇 未覆盖：0"
    ]
  },
  "安徽": {
    "serviceRate": 72.7,
    "description": [
      "陈冬磊 未覆盖：23",
      "朱琳 未覆盖：11",
      "陈翔宇 未覆盖：5",
      "TM 未覆盖：2",
      "杨飘逸 未覆盖：0"
    ]
  },
  "上海": {
    "serviceRate": 55.6,
    "description": [
      "TM 未覆盖：84",
      "王婷 未覆盖：19",
      "魏震 未覆盖：10",
      "李玉鸣 未覆盖：8",
      "周俊 未覆盖：7",
      "陈艳 未覆盖：6"
    ]
  },
  "吉林": {
    "serviceRate": 42.7,
    "description": [
      "TM 未覆盖：61",
      "黄禹淞 未覆盖：20",
      "程敬植 未覆盖：9"
    ]
  },
  "山西": {
    "serviceRate": 38.5,
    "description": [
      "TM 未覆盖：7",
      "程敬植 未覆盖：1",
      "郑丽华 未覆盖：0"
    ]
  },
  "宁夏": {
    "serviceRate": 0.0,
    "description": [
      "程敬植 未覆盖：4"
    ]
  },
  "甘肃": {
    "serviceRate": 37.6,
    "description": [
      "代伟 未覆盖：47",
      "程敬植 未覆盖：6"
    ]
  },
  "四川": {
    "serviceRate": 69.3,
    "description": [
      "陈阳辉 未覆盖：27",
      "代伟 未覆盖：10",
      "TM 未覆盖：7",
      "李玉鸣 未覆盖：5",
      "陈翔宇 未覆盖：1",
      "陈冬磊 未覆盖：1",
      "郑丽华 未覆盖：0"
    ]
  },
  "浙江": {
    "serviceRate": 52.2,
    "description": [
      "赵萧潇 未覆盖：111",
      "魏震 未覆盖：29",
      "TM 未覆盖：26",
      "李玉鸣 未覆盖：25",
      "代伟 未覆盖：1",
      "陈艳 未覆盖：1"
    ]
  },
  "广西": {
    "serviceRate": 71.4,
    "description": [
      "陈冬磊 未覆盖：2",
      "宋镠 未覆盖：0"
    ]
  },
  "云南": {
    "serviceRate": 78.3,
    "description": [
      "陈阳辉 未覆盖：4",
      "李玉鸣 未覆盖：1"
    ]
  },
  "内蒙古": {
    "serviceRate": 21.4,
    "description": [
      "程敬植 未覆盖：22"
    ]
  },
  "辽宁": {
    "serviceRate": 51.9,
    "description": [
      "黄禹淞 未覆盖：31",
      "TM 未覆盖：4",
      "程敬植 未覆盖：2"
    ]
  },
  "广东": {
    "serviceRate": 52.6,
    "description": [
      "张天泽 未覆盖：60",
      "TM 未覆盖：22",
      "宋镠 未覆盖：10",
      "陈冬磊 未覆盖：9",
      "陈艳 未覆盖：1"
    ]
  },
  "青海": {
    "serviceRate": 0.0,
    "description": [
      "程敬植 未覆盖：1"
    ]
  },
  "北京": {
    "serviceRate": 49.1,
    "description": [
      "王素莹 未覆盖：103",
      "程敬植 未覆盖：17",
      "TM 未覆盖：16",
      "郑丽华 未覆盖：0"
    ]
  }
};

// 获取人口数据
const serviceRateData = Object.fromEntries(
  Object.entries(regionData).map(([key, value]) => [key, value.serviceRate])
);

// 城市地区数据
const cityRegionData = {
  "山东": {
    "滨州市": {
      "serviceRate": 0.0,
      "description": [
        "欧明扬 未覆盖：4"
      ]
    },
    "烟台市": {
      "serviceRate": 65.0,
      "description": [
        "欧明扬 未覆盖：30",
        "程敬植 未覆盖：3",
        "TM 未覆盖：1",
        "郑丽华 未覆盖：1"
      ]
    },
    "临沂市": {
      "serviceRate": 76.5,
      "description": [
        "欧明扬 未覆盖：5",
        "陈冬磊 未覆盖：1",
        "程敬植 未覆盖：1",
        "宋镠 未覆盖：1"
      ]
    },
    "德州市": {
      "serviceRate": 54.5,
      "description": [
        "欧明扬 未覆盖：5",
        "郑丽华 未覆盖：0"
      ]
    },
    "菏泽市": {
      "serviceRate": 55.6,
      "description": [
        "欧明扬 未覆盖：3",
        "程敬植 未覆盖：1",
        "TM 未覆盖：0"
      ]
    },
    "潍坊市": {
      "serviceRate": 28.6,
      "description": [
        "TM 未覆盖：4",
        "欧明扬 未覆盖：1"
      ]
    },
    "淄博市": {
      "serviceRate": 40.0,
      "description": [
        "欧明扬 未覆盖：6",
        "TM 未覆盖：4",
        "程敬植 未覆盖：2"
      ]
    },
    "济宁市": {
      "serviceRate": 41.7,
      "description": [
        "欧明扬 未覆盖：5",
        "程敬植 未覆盖：2"
      ]
    },
    "东营市": {
      "serviceRate": 0.0,
      "description": [
        "程敬植 未覆盖：1"
      ]
    },
    "泰安市": {
      "serviceRate": 75.0,
      "description": [
        "欧明扬 未覆盖：3"
      ]
    },
    "枣庄市": {
      "serviceRate": 0.0,
      "description": [
        "程敬植 未覆盖：1"
      ]
    },
    "聊城市": {
      "serviceRate": 30.8,
      "description": [
        "程敬植 未覆盖：8",
        "欧明扬 未覆盖：1"
      ]
    },
    "威海市": {
      "serviceRate": 0.0,
      "description": [
        "程敬植 未覆盖：1"
      ]
    },
    "青岛市": {
      "serviceRate": 69.2,
      "description": [
        "欧明扬 未覆盖：2",
        "TM 未覆盖：1",
        "程敬植 未覆盖：1"
      ]
    },
    "济南市": {
      "serviceRate": 20.0,
      "description": [
        "TM 未覆盖：14",
        "欧明扬 未覆盖：2",
        "赵萧潇 未覆盖：0"
      ]
    }
  },
  "福建": {
    "龙岩市": {
      "serviceRate": 66.7,
      "description": [
        "宋镠 未覆盖：1"
      ]
    },
    "南平市": {
      "serviceRate": 0.0,
      "description": [
        "陈冬磊 未覆盖：1"
      ]
    },
    "福州市": {
      "serviceRate": 75.0,
      "description": [
        "宋镠 未覆盖：1",
        "陈冬磊 未覆盖：0"
      ]
    },
    "泉州市": {
      "serviceRate": 66.7,
      "description": [
        "宋镠 未覆盖：2",
        "唐静文 未覆盖：0"
      ]
    },
    "厦门市": {
      "serviceRate": 40.0,
      "description": [
        "陈冬磊 未覆盖：3",
        "宋镠 未覆盖：2",
        "陈艳 未覆盖：1"
      ]
    },
    "宁德市": {
      "serviceRate": 0.0,
      "description": [
        "宋镠 未覆盖：1"
      ]
    }
  },
  "河南": {
    "周口市": {
      "serviceRate": 0.0,
      "description": [
        "杨飘逸 未覆盖：3"
      ]
    },
    "安阳市": {
      "serviceRate": 100.0,
      "description": [
        "杨飘逸 未覆盖：0"
      ]
    },
    "新乡市": {
      "serviceRate": 74.2,
      "description": [
        "唐静文 未覆盖：8",
        "TM 未覆盖：0"
      ]
    },
    "洛阳市": {
      "serviceRate": 50.0,
      "description": [
        "陈冬磊 未覆盖：1",
        "唐静文 未覆盖：0"
      ]
    },
    "南阳市": {
      "serviceRate": 0.0,
      "description": [
        "唐静文 未覆盖：3"
      ]
    },
    "焦作市": {
      "serviceRate": 50.0,
      "description": [
        "唐静文 未覆盖：2",
        "TM 未覆盖：0"
      ]
    },
    "郑州市": {
      "serviceRate": 90.9,
      "description": [
        "唐静文 未覆盖：1",
        "陈冬磊 未覆盖：0",
        "杨飘逸 未覆盖：0"
      ]
    }
  },
  "河北": {
    "沧州市": {
      "serviceRate": 57.1,
      "description": [
        "王素莹 未覆盖：1",
        "程敬植 未覆盖：1",
        "郑丽华 未覆盖：1"
      ]
    },
    "石家庄市": {
      "serviceRate": 79.3,
      "description": [
        "TM 未覆盖：18",
        "王素莹 未覆盖：7",
        "程敬植 未覆盖：4",
        "郑丽华 未覆盖：0"
      ]
    },
    "唐山市": {
      "serviceRate": 0.0,
      "description": [
        "TM 未覆盖：2"
      ]
    },
    "廊坊市": {
      "serviceRate": 100.0,
      "description": [
        "王素莹 未覆盖：0",
        "TM 未覆盖：0"
      ]
    },
    "邢台市": {
      "serviceRate": 100.0,
      "description": [
        "TM 未覆盖：0"
      ]
    }
  },
  "重庆": {
    "重庆市": {
      "serviceRate": 48.1,
      "description": [
        "代伟 未覆盖：13",
        "TM 未覆盖：10",
        "李玉鸣 未覆盖：5"
      ]
    }
  },
  "湖北": {
    "黄石市": {
      "serviceRate": 0.0,
      "description": [
        "唐静文 未覆盖：1"
      ]
    },
    "天门市": {
      "serviceRate": 0.0,
      "description": [
        "唐静文 未覆盖：1"
      ]
    },
    "荆州市": {
      "serviceRate": 100.0,
      "description": [
        "陈冬磊 未覆盖：0"
      ]
    },
    "宜昌市": {
      "serviceRate": 66.7,
      "description": [
        "唐静文 未覆盖：4",
        "TM 未覆盖：2"
      ]
    },
    "襄阳市": {
      "serviceRate": 100.0,
      "description": [
        "唐静文 未覆盖：0"
      ]
    },
    "鄂州市": {
      "serviceRate": 0.0,
      "description": [
        "陈冬磊 未覆盖：1"
      ]
    },
    "仙桃市": {
      "serviceRate": 0.0,
      "description": [
        "TM 未覆盖：1"
      ]
    },
    "武汉市": {
      "serviceRate": 56.1,
      "description": [
        "TM 未覆盖：25",
        "唐静文 未覆盖：14",
        "陈冬磊 未覆盖：4"
      ]
    },
    "荆门市": {
      "serviceRate": 100.0,
      "description": [
        "唐静文 未覆盖：0"
      ]
    }
  },
  "湖南": {
    "长沙市": {
      "serviceRate": 40.0,
      "description": [
        "陈冬磊 未覆盖：2",
        "TM 未覆盖：1",
        "杨飘逸 未覆盖：0"
      ]
    },
    "岳阳市": {
      "serviceRate": 33.3,
      "description": [
        "陈冬磊 未覆盖：1",
        "唐静文 未覆盖：1"
      ]
    }
  },
  "江西": {
    "抚州市": {
      "serviceRate": 66.7,
      "description": [
        "唐静文 未覆盖：1"
      ]
    },
    "九江市": {
      "serviceRate": 100.0,
      "description": [
        "陈冬磊 未覆盖：0"
      ]
    },
    "南昌市": {
      "serviceRate": 25.0,
      "description": [
        "唐静文 未覆盖：2",
        "TM 未覆盖：1",
        "陈冬磊 未覆盖：0"
      ]
    },
    "赣州市": {
      "serviceRate": 100.0,
      "description": [
        "唐静文 未覆盖：0"
      ]
    },
    "宜春市": {
      "serviceRate": 100.0,
      "description": [
        "唐静文 未覆盖：0"
      ]
    }
  },
  "海南": {
    "海口市": {
      "serviceRate": 57.6,
      "description": [
        "张天泽 未覆盖：10",
        "陈冬磊 未覆盖：2",
        "TM 未覆盖：2"
      ]
    }
  },
  "黑龙江": {
    "鸡西市": {
      "serviceRate": 33.3,
      "description": [
        "程敬植 未覆盖：3",
        "黄禹淞 未覆盖：1"
      ]
    },
    "哈尔滨市": {
      "serviceRate": 33.3,
      "description": [
        "TM 未覆盖：3",
        "程敬植 未覆盖：3"
      ]
    },
    "绥化市": {
      "serviceRate": 0.0,
      "description": [
        "程敬植 未覆盖：1"
      ]
    },
    "牡丹江市": {
      "serviceRate": 66.7,
      "description": [
        "黄禹淞 未覆盖：1",
        "程敬植 未覆盖：0"
      ]
    }
  },
  "天津": {
    "天津市": {
      "serviceRate": 78.6,
      "description": [
        "欧明扬 未覆盖：16",
        "黄禹淞 未覆盖：5",
        "程敬植 未覆盖：5",
        "TM 未覆盖：2",
        "郑丽华 未覆盖：0"
      ]
    }
  },
  "陕西": {
    "西安市": {
      "serviceRate": 50.0,
      "description": [
        "TM 未覆盖：3",
        "代伟 未覆盖：2",
        "程敬植 未覆盖：1"
      ]
    },
    "咸阳市": {
      "serviceRate": 33.3,
      "description": [
        "代伟 未覆盖：1",
        "程敬植 未覆盖：1"
      ]
    }
  },
  "贵州": {
    "贵阳市": {
      "serviceRate": 80.0,
      "description": [
        "李玉鸣 未覆盖：1",
        "代伟 未覆盖：0"
      ]
    }
  },
  "新疆": {
    "阿克苏市": {
      "serviceRate": 100.0,
      "description": [
        "程敬植 未覆盖：0"
      ]
    },
    "克拉玛依市": {
      "serviceRate": 0.0,
      "description": [
        "程敬植 未覆盖：1"
      ]
    },
    "昌吉市": {
      "serviceRate": 0.0,
      "description": [
        "程敬植 未覆盖：2"
      ]
    }
  },
  "江苏": {
    "泰州市": {
      "serviceRate": 72.1,
      "description": [
        "朱琳 未覆盖：19",
        "张天泽 未覆盖：3",
        "陈冬磊 未覆盖：1",
        "TM 未覆盖：1",
        "杨飘逸 未覆盖：0"
      ]
    },
    "常州市": {
      "serviceRate": 36.2,
      "description": [
        "梁烁 未覆盖：11",
        "陈冬磊 未覆盖：10",
        "TM 未覆盖：8",
        "陈翔宇 未覆盖：1",
        "张蓓青 未覆盖：0"
      ]
    },
    "无锡市": {
      "serviceRate": 83.6,
      "description": [
        "TM 未覆盖：5",
        "梁烁 未覆盖：4",
        "陈冬磊 未覆盖：3",
        "杨飘逸 未覆盖：0"
      ]
    },
    "南通市": {
      "serviceRate": 35.7,
      "description": [
        "TM 未覆盖：18",
        "梁烁 未覆盖：16",
        "陈冬磊 未覆盖：2",
        "杨飘逸 未覆盖：0"
      ]
    },
    "苏州市": {
      "serviceRate": 56.0,
      "description": [
        "张蓓青 未覆盖：71",
        "TM 未覆盖：23",
        "陈冬磊 未覆盖：9",
        "梁烁 未覆盖：5",
        "杨飘逸 未覆盖：3",
        "赵萧潇 未覆盖：0"
      ]
    },
    "徐州市": {
      "serviceRate": 44.4,
      "description": [
        "陈翔宇 未覆盖：21",
        "TM 未覆盖：3",
        "陈冬磊 未覆盖：1"
      ]
    },
    "镇江市": {
      "serviceRate": 100.0,
      "description": [
        "杨飘逸 未覆盖：0"
      ]
    },
    "连云港市": {
      "serviceRate": 42.6,
      "description": [
        "陈翔宇 未覆盖：63",
        "TM 未覆盖：2",
        "张天泽 未覆盖：1",
        "陈冬磊 未覆盖：0"
      ]
    },
    "扬州市": {
      "serviceRate": 43.8,
      "description": [
        "陈冬磊 未覆盖：4",
        "TM 未覆盖：3",
        "陈翔宇 未覆盖：2"
      ]
    },
    "盐城市": {
      "serviceRate": 60.0,
      "description": [
        "陈冬磊 未覆盖：1",
        "朱琳 未覆盖：1"
      ]
    },
    "淮安市": {
      "serviceRate": 100.0,
      "description": [
        "陈翔宇 未覆盖：0"
      ]
    },
    "南京市": {
      "serviceRate": 45.5,
      "description": [
        "陈翔宇 未覆盖：24",
        "TM 未覆盖：7",
        "陈冬磊 未覆盖：5"
      ]
    }
  },
  "安徽": {
    "芜湖市": {
      "serviceRate": 33.3,
      "description": [
        "陈冬磊 未覆盖：1",
        "TM 未覆盖：1"
      ]
    },
    "亳州市": {
      "serviceRate": 0.0,
      "description": [
        "陈冬磊 未覆盖：2"
      ]
    },
    "宣城市": {
      "serviceRate": 100.0,
      "description": [
        "陈翔宇 未覆盖：0"
      ]
    },
    "安庆市": {
      "serviceRate": 0.0,
      "description": [
        "陈冬磊 未覆盖：1",
        "TM 未覆盖：1"
      ]
    },
    "淮南市": {
      "serviceRate": 100.0,
      "description": [
        "陈冬磊 未覆盖：0"
      ]
    },
    "滁州市": {
      "serviceRate": 66.7,
      "description": [
        "陈冬磊 未覆盖：1"
      ]
    },
    "淮北市": {
      "serviceRate": 50.0,
      "description": [
        "陈翔宇 未覆盖：1"
      ]
    },
    "合肥市": {
      "serviceRate": 74.6,
      "description": [
        "陈冬磊 未覆盖：18",
        "朱琳 未覆盖：11",
        "陈翔宇 未覆盖：4",
        "杨飘逸 未覆盖：0"
      ]
    }
  },
  "吉林": {
    "延吉市": {
      "serviceRate": 100.0,
      "description": [
        "黄禹淞 未覆盖：0"
      ]
    },
    "通化市": {
      "serviceRate": 21.1,
      "description": [
        "黄禹淞 未覆盖：10",
        "程敬植 未覆盖：5"
      ]
    },
    "长春市": {
      "serviceRate": 38.1,
      "description": [
        "TM 未覆盖：61",
        "黄禹淞 未覆盖：8",
        "程敬植 未覆盖：4"
      ]
    },
    "延边朝鲜族自治州": {
      "serviceRate": 93.3,
      "description": [
        "黄禹淞 未覆盖：1"
      ]
    },
    "松原市": {
      "serviceRate": 50.0,
      "description": [
        "黄禹淞 未覆盖：1"
      ]
    }
  },
  "上海": {
    "上海市": {
      "serviceRate": 55.6,
      "description": [
        "TM 未覆盖：84",
        "王婷 未覆盖：19",
        "魏震 未覆盖：10",
        "李玉鸣 未覆盖：8",
        "周俊 未覆盖：7",
        "陈艳 未覆盖：6"
      ]
    }
  },
  "宁夏": {
    "银川市": {
      "serviceRate": 0.0,
      "description": [
        "程敬植 未覆盖：3"
      ]
    },
    "石嘴山市": {
      "serviceRate": 0.0,
      "description": [
        "程敬植 未覆盖：1"
      ]
    }
  },
  "山西": {
    "运城市": {
      "serviceRate": 0.0,
      "description": [
        "TM 未覆盖：2"
      ]
    },
    "大同市": {
      "serviceRate": 0.0,
      "description": [
        "TM 未覆盖：4",
        "程敬植 未覆盖：1"
      ]
    },
    "太原市": {
      "serviceRate": 100.0,
      "description": [
        "程敬植 未覆盖：0"
      ]
    },
    "长治市": {
      "serviceRate": 100.0,
      "description": [
        "郑丽华 未覆盖：0"
      ]
    },
    "临汾市": {
      "serviceRate": 0.0,
      "description": [
        "TM 未覆盖：1"
      ]
    }
  },
  "甘肃": {
    "兰州市": {
      "serviceRate": 37.6,
      "description": [
        "代伟 未覆盖：47",
        "程敬植 未覆盖：6"
      ]
    }
  },
  "四川": {
    "成都市": {
      "serviceRate": 68.0,
      "description": [
        "陈阳辉 未覆盖：25",
        "代伟 未覆盖：10",
        "TM 未覆盖：7",
        "李玉鸣 未覆盖：5",
        "陈翔宇 未覆盖：1",
        "陈冬磊 未覆盖：1",
        "郑丽华 未覆盖：0"
      ]
    },
    "内江市": {
      "serviceRate": 87.5,
      "description": [
        "陈阳辉 未覆盖：1"
      ]
    },
    "泸州市": {
      "serviceRate": 100.0,
      "description": [
        "陈阳辉 未覆盖：0"
      ]
    },
    "绵阳市": {
      "serviceRate": 0.0,
      "description": [
        "陈阳辉 未覆盖：1"
      ]
    }
  },
  "广西": {
    "来宾市": {
      "serviceRate": 0.0,
      "description": [
        "陈冬磊 未覆盖：1"
      ]
    },
    "桂林市": {
      "serviceRate": 100.0,
      "description": [
        "宋镠 未覆盖：0"
      ]
    },
    "南宁市": {
      "serviceRate": 0.0,
      "description": [
        "陈冬磊 未覆盖：1"
      ]
    },
    "梧州市": {
      "serviceRate": 100.0,
      "description": [
        "宋镠 未覆盖：0"
      ]
    }
  },
  "浙江": {
    "台州市": {
      "serviceRate": 65.5,
      "description": [
        "赵萧潇 未覆盖：5",
        "李玉鸣 未覆盖：5",
        "TM 未覆盖：0"
      ]
    },
    "湖州市": {
      "serviceRate": 68.4,
      "description": [
        "李玉鸣 未覆盖：4",
        "赵萧潇 未覆盖：1",
        "TM 未覆盖：1",
        "陈艳 未覆盖：0"
      ]
    },
    "温州市": {
      "serviceRate": 66.7,
      "description": [
        "TM 未覆盖：1",
        "李玉鸣 未覆盖：0"
      ]
    },
    "宁波市": {
      "serviceRate": 41.5,
      "description": [
        "魏震 未覆盖：29",
        "李玉鸣 未覆盖：2",
        "陈艳 未覆盖：0"
      ]
    },
    "丽水市": {
      "serviceRate": 25.0,
      "description": [
        "TM 未覆盖：3",
        "赵萧潇 未覆盖：0"
      ]
    },
    "金华市": {
      "serviceRate": 66.7,
      "description": [
        "赵萧潇 未覆盖：3",
        "TM 未覆盖：0",
        "李玉鸣 未覆盖：0"
      ]
    },
    "嘉兴市": {
      "serviceRate": 46.7,
      "description": [
        "李玉鸣 未覆盖：6",
        "赵萧潇 未覆盖：1",
        "陈艳 未覆盖：1"
      ]
    },
    "绍兴市": {
      "serviceRate": 75.9,
      "description": [
        "赵萧潇 未覆盖：4",
        "TM 未覆盖：2",
        "李玉鸣 未覆盖：1"
      ]
    },
    "衢州市": {
      "serviceRate": 100.0,
      "description": [
        "赵萧潇 未覆盖：0",
        "TM 未覆盖：0"
      ]
    },
    "杭州市": {
      "serviceRate": 47.9,
      "description": [
        "赵萧潇 未覆盖：97",
        "TM 未覆盖：19",
        "李玉鸣 未覆盖：7",
        "代伟 未覆盖：1",
        "陈艳 未覆盖：0"
      ]
    }
  },
  "云南": {
    "昆明市": {
      "serviceRate": 66.7,
      "description": [
        "陈阳辉 未覆盖：4"
      ]
    },
    "曲靖市": {
      "serviceRate": 85.7,
      "description": [
        "李玉鸣 未覆盖：1",
        "陈阳辉 未覆盖：0"
      ]
    },
    "大理市": {
      "serviceRate": 100.0,
      "description": [
        "陈阳辉 未覆盖：0"
      ]
    },
    "玉溪市": {
      "serviceRate": 100.0,
      "description": [
        "陈阳辉 未覆盖：0"
      ]
    }
  },
  "内蒙古": {
    "包头市": {
      "serviceRate": 0.0,
      "description": [
        "程敬植 未覆盖：1"
      ]
    },
    "呼和浩特市": {
      "serviceRate": 6.3,
      "description": [
        "程敬植 未覆盖：15"
      ]
    },
    "乌海市": {
      "serviceRate": 100.0,
      "description": [
        "程敬植 未覆盖：0"
      ]
    },
    "兴安盟": {
      "serviceRate": 100.0,
      "description": [
        "程敬植 未覆盖：0"
      ]
    },
    "鄂尔多斯市": {
      "serviceRate": 33.3,
      "description": [
        "程敬植 未覆盖：2"
      ]
    },
    "乌兰察布市": {
      "serviceRate": 0.0,
      "description": [
        "程敬植 未覆盖：4"
      ]
    }
  },
  "辽宁": {
    "锦州市": {
      "serviceRate": 0.0,
      "description": [
        "黄禹淞 未覆盖：1"
      ]
    },
    "辽阳市": {
      "serviceRate": 0.0,
      "description": [
        "TM 未覆盖：1"
      ]
    },
    "盘锦市": {
      "serviceRate": 0.0,
      "description": [
        "程敬植 未覆盖：2"
      ]
    },
    "葫芦岛市": {
      "serviceRate": 100.0,
      "description": [
        "程敬植 未覆盖：0"
      ]
    },
    "本溪市": {
      "serviceRate": 50.0,
      "description": [
        "黄禹淞 未覆盖：7"
      ]
    },
    "大连市": {
      "serviceRate": 65.0,
      "description": [
        "黄禹淞 未覆盖：4",
        "TM 未覆盖：3"
      ]
    },
    "阜新市": {
      "serviceRate": 0.0,
      "description": [
        "黄禹淞 未覆盖：1"
      ]
    },
    "沈阳市": {
      "serviceRate": 51.4,
      "description": [
        "黄禹淞 未覆盖：18"
      ]
    }
  },
  "广东": {
    "河源市": {
      "serviceRate": 50.0,
      "description": [
        "陈冬磊 未覆盖：1"
      ]
    },
    "云浮市": {
      "serviceRate": 0.0,
      "description": [
        "陈冬磊 未覆盖：1"
      ]
    },
    "韶关市": {
      "serviceRate": 60.0,
      "description": [
        "宋镠 未覆盖：2"
      ]
    },
    "惠州市": {
      "serviceRate": 50.0,
      "description": [
        "陈冬磊 未覆盖：1",
        "宋镠 未覆盖：0"
      ]
    },
    "东莞市": {
      "serviceRate": 40.0,
      "description": [
        "张天泽 未覆盖：13",
        "陈冬磊 未覆盖：1",
        "TM 未覆盖：1"
      ]
    },
    "清远市": {
      "serviceRate": 100.0,
      "description": [
        "陈冬磊 未覆盖：0",
        "宋镠 未覆盖：0"
      ]
    },
    "湛江市": {
      "serviceRate": 42.9,
      "description": [
        "张天泽 未覆盖：4"
      ]
    },
    "深圳市": {
      "serviceRate": 36.1,
      "description": [
        "张天泽 未覆盖：35",
        "TM 未覆盖：11",
        "陈冬磊 未覆盖：0",
        "陈艳 未覆盖：0"
      ]
    },
    "珠海市": {
      "serviceRate": 82.6,
      "description": [
        "宋镠 未覆盖：3",
        "陈冬磊 未覆盖：1",
        "陈艳 未覆盖：0"
      ]
    },
    "潮州市": {
      "serviceRate": 0.0,
      "description": [
        "TM 未覆盖：1"
      ]
    },
    "广州市": {
      "serviceRate": 63.0,
      "description": [
        "TM 未覆盖：9",
        "宋镠 未覆盖：5",
        "张天泽 未覆盖：3",
        "陈冬磊 未覆盖：2",
        "陈艳 未覆盖：1"
      ]
    },
    "中山市": {
      "serviceRate": 56.3,
      "description": [
        "张天泽 未覆盖：5",
        "陈冬磊 未覆盖：2"
      ]
    }
  },
  "青海": {
    "西宁市": {
      "serviceRate": 0.0,
      "description": [
        "程敬植 未覆盖：1"
      ]
    }
  },
  "北京": {
    "北京市": {
      "serviceRate": 49.1,
      "description": [
        "王素莹 未覆盖：103",
        "程敬植 未覆盖：17",
        "TM 未覆盖：16",
        "郑丽华 未覆盖：0"
      ]
    }
  }
};

// 省级城市人口数据
const cityServiceRateData = {};

// 为每个省份生成城市人口数据
Object.keys(cityRegionData).forEach(province => {
  cityServiceRateData[province] = Object.fromEntries(
    Object.entries(cityRegionData[province]).map(([key, value]) => [key, value.serviceRate])
  );
});

export { serviceRateData, cityServiceRateData, regionData, cityRegionData };