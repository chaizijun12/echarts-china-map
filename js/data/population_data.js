// 地区数据
const regionData = {
  '北京': { population: 2189, description: ['首都之都', '政治文化中心', '科技创新引领发展'] },
  '天津': { population: 1387, description: ['北方重要港口城市', '海河文化与现代工业交融'] },
  '河北': { population: 7461, description: ['环京津重要省份', '钢铁产业基地', '长城文化底蕴深厚'] },
  '山西': { population: 3492, description: ['煤炭资源大省', '古代商业发源地', '众多古建筑遗存'] },
  '内蒙古': { population: 2405, description: ['草原文化发祥地', '新能源基地', '民族融合典范'] },
  '辽宁': { population: 4259, description: ['东北老工业基地', '沿海开放前沿', '满族文化重镇'] },
  '吉林': { population: 2407, description: ['汽车工业基地', '冰雪旅游胜地', '边境开放前沿'] },
  '黑龙江': { population: 3185, description: ['中国最北省份', '绿色农业基地', '冰雪旅游圣地'] },
  '上海': { population: 2487, description: ['国际金融中心', '长三角龙头', '海派文化发源地'] },
  '江苏': { population: 8475, description: ['经济大省', '古运河文化带', '现代制造业基地'] },
  '浙江': { population: 6627, description: ['数字经济先锋', '民营经济发达', '江南水乡文化'] },
  '安徽': { population: 6103, description: ['科教资源丰富', '徽派文化独特', '创新发展迅速'] },
  '福建': { population: 4154, description: ['海上丝路重要节点', '闽台交流基地', '生态宜居省份'] },
  '江西': { population: 4519, description: ['红色革命圣地', '鄱阳湖生态区', '瓷器文化之乡'] },
  '山东': { population: 10153, description: ['儒家文化发源地', '农业大省', '海洋经济发达'] },
  '河南': { population: 9937, description: ['华夏文明发祥地', '交通枢纽中心', '农业大省'] },
  '湖北': { population: 5775, description: ['长江经济带核心', '光谷创新高地', '楚文化传承'] },
  '湖南': { population: 6568, description: ['工程机械之都', '农产品基地', '湘楚文化灿烂'] },
  '广东': { population: 12601, description: ['改革开放前沿', '经济第一大省', '粤港澳大湾区核心'] },
  '广西': { population: 5013, description: ['壮族文化荟萃', '北部湾经济区', '喀斯特地貌典范'] },
  '海南': { population: 1008, description: ['自由贸易港', '国际旅游岛', '热带农业基地'] },
  '重庆': { population: 3205, description: ['山城魅力之都', '长江上游中心', '火锅文化之都'] },
  '四川': { population: 8367, description: ['天府之国', '熊猫故乡', '川菜文化发源地'] },
  '贵州': { population: 3856, description: ['大数据产业基地', '生态文明示范区', '多彩贵州文化'] },
  '云南': { population: 4721, description: ['民族文化多样性', '生物多样性王国', '边疆开放前沿'] },
  '西藏': { population: 365, description: ['世界屋脊', '藏传佛教圣地', '生态环境保护区'] },
  '陕西': { population: 3953, description: ['古都长安', '丝绸之路起点', '兵马俑故乡'] },
  '甘肃': { population: 2502, description: ['丝绸之路重要通道', '敦煌文化传承地', '生态建设示范区'] },
  '青海': { population: 592, description: ['三江源发祥地', '青藏高原生态屏障', '民族团结典范'] },
  '宁夏': { population: 720, description: ['回族文化重镇', '西部开发样板', '清真文化特色区'] },
  '新疆': { population: 2585, description: ['丝绸之路核心区', '多民族交融地区', '能源资源大省'] },
  '香港': { population: 745, description: ['国际金融中心', '东方之珠', '中西文化交融'] },
  '澳门': { population: 68, description: ['世界旅游休闲中心', '中葡文化交汇', '博彩业特区'] },
  '台湾': { population: 2359, description: ['高科技产业基地', '民主发展样本', '宝岛风光秀丽'] }
};

// 获取人口数据
const populationData = Object.fromEntries(
  Object.entries(regionData).map(([key, value]) => [key, value.population])
);

// 城市地区数据
const cityRegionData = {
  '福建': {
    '南平市': { population: 123, description: ['武夷山茶叶之乡', '生态旅游胜地', '绿色发展示范区'] },
    '三明市': { population: 234, description: ['林业资源丰富', '生态工业基地', '客家文化传承地'] },
    '福州市': { population: 2412, description: ['省会城市', '海上丝路起点', '历史文化名城'] },
    '泉州市': { population: 1234, description: ['海上丝路重要港口', '民营经济发达', '闽南文化中心'] }
  },
  '广东': {
    '深圳市': { population: 12345, description: ['改革开放中心', '国际金融中心', '历史文化名城'] },
    '广州市': { population: 5432, description: ['经济中心', '科技创新基地', '历史文化名城'] },
  }
};

// 省级城市人口数据
const cityPopulationData = {};

// 为每个省份生成城市人口数据
Object.keys(cityRegionData).forEach(province => {
  cityPopulationData[province] = Object.fromEntries(
    Object.entries(cityRegionData[province]).map(([key, value]) => [key, value.population])
  );
});

export { populationData, cityPopulationData, regionData, cityRegionData };