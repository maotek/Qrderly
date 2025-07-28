/**
 * Data models for menu categories and dishes with translations.
 */
  export interface Translation {
    nl: string;
    en: string;
    cn: string;
  }

  export interface OptionData {
    name: Translation;
    price: number;
  }

  export interface DishData {
    name: Translation;
    price: number;
    tags: Translation[];
    description: Translation;
    options?: OptionData[];
  }

  export interface CategoryData {
    category: Translation;
    dishes: DishData[];
  }

  /**
   * Mock fetch function to retrieve category data with translations.
   * Replace with real API call as needed.
   */
  export async function fetchCategories(): Promise<CategoryData[]> {
  return [
    {
      category: { nl: '🍕 Pizza', en: '🍕 Pizza', cn: '🍕 披萨' },
      dishes: [
        {
          name: { nl: 'Margherita', en: 'Margherita', cn: '玛格丽塔' },
          price: 8.99,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Tomatensaus, verse mozzarella en basilicumbladeren.',
            en: 'Tomato sauce, fresh mozzarella, and basil leaves.',
            cn: '番茄酱、新鲜马苏里拉奶酪和罗勒叶。'
          },
          options: [
            { name: { nl: 'Extra kaas', en: 'Extra Cheese', cn: '额外奶酪' }, price: 1.5 },
            { name: { nl: 'Glutenvrije korst', en: 'Gluten-Free Crust', cn: '无麸质面饼' }, price: 2.0 }
          ]
        },
        {
          name: { nl: 'Pepperoni', en: 'Pepperoni', cn: '意大利腊肠' },
          price: 10.99,
          tags: [
            { nl: 'varkensvlees', en: 'pork', cn: '猪肉' }
          ],
          description: {
            nl: 'Klassieke pepperoni plakjes op mozzarella en tomaat.',
            en: 'Classic pepperoni slices over mozzarella and tomato.',
            cn: '经典意大利腊肠片配马苏里拉奶酪和番茄。'
          },
          options: [
            { name: { nl: 'Dubbele pepperoni', en: 'Double Pepperoni', cn: '双份意大利腊肠' }, price: 2.5 },
            { name: { nl: 'Extra kaas', en: 'Extra Cheese', cn: '额外奶酪' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'Veggie Delight', en: 'Veggie Delight', cn: '蔬菜盛宴' },
          price: 9.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' },
            { nl: 'veganistisch', en: 'vegan', cn: '纯素' }
          ],
          description: {
            nl: 'Paprika, ui, champignons, olijven en spinazie.',
            en: 'Bell peppers, onions, mushrooms, olives, and spinach.',
            cn: '青椒、洋葱、蘑菇、橄榄和菠菜。'
          },
          options: [
            { name: { nl: 'Vegan kaas', en: 'Vegan Cheese', cn: '纯素奶酪' }, price: 1.5 },
            { name: { nl: 'Extra groenten', en: 'Extra Veggies', cn: '额外蔬菜' }, price: 1.0 }
          ]
        },
        {
          name: { nl: 'Meat Lovers', en: 'Meat Lovers', cn: '肉食者' },
          price: 12.99,
          tags: [
            { nl: 'varkensvlees', en: 'pork', cn: '猪肉' },
            { nl: 'rundvlees', en: 'beef', cn: '牛肉' }
          ],
          description: {
            nl: 'Pepperoni, worst, spek en ham op een hoop.',
            en: 'Pepperoni, sausage, bacon, and ham piled high.',
            cn: '意大利腊肠、香肠、培根和火腿堆成高峰。'
          },
          options: [
            { name: { nl: 'Extra worst', en: 'Extra Sausage', cn: '额外香肠' }, price: 2.0 },
            { name: { nl: 'Extra spek', en: 'Extra Bacon', cn: '额外培根' }, price: 2.0 }
          ]
        },
        {
          name: { nl: 'BBQ Chicken', en: 'BBQ Chicken', cn: '烧烤鸡肉' },
          price: 11.99,
          tags: [
            { nl: 'kip', en: 'chicken', cn: '鸡肉' }
          ],
          description: {
            nl: 'Gegrilde kip, BBQ-saus, rode uien en koriander.',
            en: 'Grilled chicken, BBQ sauce, red onions, and cilantro.',
            cn: '烤鸡、烧烤酱、红洋葱和香菜。'
          },
          options: [
            { name: { nl: 'Extra kip', en: 'Extra Chicken', cn: '额外鸡肉' }, price: 2.5 },
            { name: { nl: 'Ananas toevoegen', en: 'Add Pineapple', cn: '添加菠萝' }, price: 1.0 }
          ]
        },
        {
          name: { nl: 'Vier Kazen', en: 'Four Cheese', cn: '四种奶酪' },
          price: 11.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Mozzarella, cheddar, parmezaan en gorgonzola.',
            en: 'Mozzarella, cheddar, parmesan, and gorgonzola.',
            cn: '马苏里拉、切达、帕尔马干酪和蓝纹奶酪。'
          },
          options: [
            { name: { nl: 'Extra kaas', en: 'Extra Cheese', cn: '额外奶酪' }, price: 1.5 },
            { name: { nl: 'Truffelolie toevoegen', en: 'Add Truffle Oil', cn: '添加松露油' }, price: 2.5 }
          ]
        },
        {
          name: { nl: 'Hawaiian', en: 'Hawaiian', cn: '夏威夷' },
          price: 10.49,
          tags: [
            { nl: 'varkensvlees', en: 'pork', cn: '猪肉' }
          ],
          description: {
            nl: 'Ham, ananas en mozzarella op tomatensaus.',
            en: 'Ham, pineapple, and mozzarella on tomato sauce.',
            cn: '火腿、菠萝和马苏里拉奶酪置于番茄酱上。'
          },
          options: [
            { name: { nl: 'Extra ananas', en: 'Extra Pineapple', cn: '额外菠萝' }, price: 1.0 },
            { name: { nl: 'Extra ham', en: 'Extra Ham', cn: '额外火腿' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'Mediterranean', en: 'Mediterranean', cn: '地中海风味' },
          price: 9.99,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Olijven, feta, rode ui en oregano.',
            en: 'Olives, feta, red onion, and oregano.',
            cn: '橄榄、菲达奶酪、红洋葱和牛至。'
          },
          options: [
            { name: { nl: 'Spinazie toevoegen', en: 'Add Spinach', cn: '添加菠菜' }, price: 1.0 },
            { name: { nl: 'Glutenvrije korst', en: 'Gluten-Free Crust', cn: '无麸质面饼' }, price: 2.0 }
          ]
        },
        {
          name: { nl: 'Buffalo Chicken', en: 'Buffalo Chicken', cn: '水牛城鸡肉' },
          price: 12.49,
          tags: [
            { nl: 'kip', en: 'chicken', cn: '鸡肉' },
            { nl: 'pittig', en: 'spicy', cn: '辛辣' }
          ],
          description: {
            nl: 'Buffalo-saus, kip en ranch-dressing.',
            en: 'Buffalo sauce, chicken, and ranch drizzle.',
            cn: '水牛城酱、鸡肉和牧场风味淋酱。'
          },
          options: [
            { name: { nl: 'Extra saus', en: 'Extra Sauce', cn: '额外酱汁' }, price: 0.5 },
            { name: { nl: 'Blauwe kaas toevoegen', en: 'Add Blue Cheese', cn: '添加蓝纹奶酪' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'Pesto Primavera', en: 'Pesto Primavera', cn: '青酱春天' },
          price: 11.99,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Pestobasis met seizoensgroenten en parmezaan.',
            en: 'Pesto base with seasonal vegetables and parmesan.',
            cn: '青酱底配应季蔬菜和帕尔马干酪。'
          },
          options: [
            { name: { nl: 'Extra groenten', en: 'Extra Veggies', cn: '额外蔬菜' }, price: 1.0 },
            { name: { nl: 'Geitenkaas toevoegen', en: 'Add Goat Cheese', cn: '添加山羊奶酪' }, price: 1.5 }
          ]
        }
      ]
    },
    {
      category: { nl: '🍔 Burgers', en: '🍔 Burgers', cn: '🍔 汉堡' },
      dishes: [
        {
          name: { nl: 'Klassieke Cheeseburger', en: 'Classic Cheeseburger', cn: '经典芝士汉堡' },
          price: 7.99,
          tags: [
            { nl: 'rundvlees', en: 'beef', cn: '牛肉' }
          ],
          description: {
            nl: 'Runderburger, cheddar, sla, tomaat en ui.',
            en: 'Beef patty, cheddar, lettuce, tomato, and onion.',
            cn: '牛肉饼、切达奶酪、生菜、番茄和洋葱。'
          },
          options: [
            { name: { nl: 'Bacon toevoegen', en: 'Add Bacon', cn: '添加培根' }, price: 1.5 },
            { name: { nl: 'Extra burger', en: 'Extra Patty', cn: '额外肉饼' }, price: 3.0 }
          ]
        },
        {
          name: { nl: 'Veggie Burger', en: 'Veggie Burger', cn: '蔬菜汉堡' },
          price: 8.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' },
            { nl: 'veganistisch', en: 'vegan', cn: '纯素' }
          ],
          description: {
            nl: 'Plantaardige burger met sla, tomaat en vegan mayo.',
            en: 'Plant-based patty with lettuce, tomato, and vegan mayo.',
            cn: '植物基肉饼配生菜、番茄和纯素蛋黄酱。'
          },
          options: [
            { name: { nl: 'Glutenvrij broodje', en: 'Gluten-Free Bun', cn: '无麸质面包' }, price: 1.0 },
            { name: { nl: 'Avocado toevoegen', en: 'Add Avocado', cn: '添加牛油果' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'Bacon Bomb', en: 'Bacon Bomb', cn: '培根炸弹' },
          price: 9.99,
          tags: [
            { nl: 'varkensvlees', en: 'pork', cn: '猪肉' }
          ],
          description: {
            nl: 'Overgoten met krokante bacon, kaas en BBQ-saus.',
            en: 'Loaded with crispy bacon, cheese, and BBQ sauce.',
            cn: '满载脆培根、奶酪和烧烤酱。'
          },
          options: [
            { name: { nl: 'Extra bacon', en: 'Extra Bacon', cn: '额外培根' }, price: 2.0 },
            { name: { nl: 'Ei toevoegen', en: 'Add Egg', cn: '添加鸡蛋' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'Mushroom Swiss', en: 'Mushroom Swiss', cn: '蘑菇瑞士' },
          price: 9.49,
          tags: [
            { nl: 'rundvlees', en: 'beef', cn: '牛肉' }
          ],
          description: {
            nl: 'Gebakken champignons, Zwitserse kaas en knoflookmayo.',
            en: 'Sauteed mushrooms, Swiss cheese, and garlic mayo.',
            cn: '炒蘑菇、瑞士奶酪和蒜香蛋黄酱。'
          },
          options: [
            { name: { nl: 'Extra champignons', en: 'Extra Mushrooms', cn: '额外蘑菇' }, price: 1.0 },
            { name: { nl: 'Extra kaas', en: 'Extra Cheese', cn: '额外奶酪' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'Spicy Jalapeño', en: 'Spicy Jalapeño', cn: '辣味墨西哥胡椒' },
          price: 8.99,
          tags: [
            { nl: 'rundvlees', en: 'beef', cn: '牛肉' },
            { nl: 'pittig', en: 'spicy', cn: '辛辣' }
          ],
          description: {
            nl: 'Jalapeños, pepper jack kaas en chipotle mayo.',
            en: 'Jalapeños, pepper jack cheese, and chipotle mayo.',
            cn: '墨西哥胡椒、辣味杰克奶酪和墨西哥辣椒蛋黄酱。'
          },
          options: [
            { name: { nl: 'Extra jalapeños', en: 'Extra Jalapeños', cn: '额外墨西哥胡椒' }, price: 1.0 },
            { name: { nl: 'Guacamole toevoegen', en: 'Add Guacamole', cn: '添加鳄梨酱' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'Blue Cheese Bliss', en: 'Blue Cheese Bliss', cn: '蓝纹奶酪快乐' },
          price: 10.49,
          tags: [
            { nl: 'rundvlees', en: 'beef', cn: '牛肉' }
          ],
          description: {
            nl: 'Runderburger met blauwe kaasbrokjes en gekarameliseerde ui.',
            en: 'Beef patty with blue cheese crumbles and caramelized onions.',
            cn: '牛肉饼配蓝纹奶酪碎和焦糖洋葱。'
          },
          options: [
            { name: { nl: 'Extra uien', en: 'Extra Onions', cn: '额外洋葱' }, price: 1.0 },
            { name: { nl: 'Bacon toevoegen', en: 'Add Bacon', cn: '添加培根' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'BBQ Pulled Pork', en: 'BBQ Pulled Pork', cn: '烧烤手撕猪肉' },
          price: 9.99,
          tags: [
            { nl: 'varkensvlees', en: 'pork', cn: '猪肉' }
          ],
          description: {
            nl: 'Handgerafeld varkensvlees met BBQ-saus en koolsla.',
            en: 'Pulled pork with BBQ sauce and coleslaw.',
            cn: '手撕猪肉配烧烤酱和凉拌卷心菜。'
          },
          options: [
            { name: { nl: 'Extra koolsla', en: 'Extra Slaw', cn: '额外凉拌卷心菜' }, price: 0.75 },
            { name: { nl: 'Augurken toevoegen', en: 'Add Pickles', cn: '添加泡菜' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Avocado Kalkoen', en: 'Avocado Turkey', cn: '鳄梨火鸡' },
          price: 8.99,
          tags: [
            { nl: 'kip', en: 'chicken', cn: '鸡肉' }
          ],
          description: {
            nl: 'Kalkoenburger met avocado en sla.',
            en: 'Turkey patty with avocado and lettuce.',
            cn: '火鸡饼配鳄梨和生菜。'
          },
          options: [
            { name: { nl: 'Swiss toevoegen', en: 'Add Swiss', cn: '添加瑞士奶酪' }, price: 1.0 },
            { name: { nl: 'Glutenvrij broodje', en: 'Gluten-Free Bun', cn: '无麸质面包' }, price: 1.0 }
          ]
        },
        {
          name: { nl: 'Spicy Black Bean', en: 'Spicy Black Bean', cn: '辣味黑豆' },
          price: 8.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' },
            { nl: 'pittig', en: 'spicy', cn: '辛辣' }
          ],
          description: {
            nl: 'Zwarte bonenburgers met chipotle mayo en jalapeños.',
            en: 'Black bean patty with chipotle mayo and jalapeños.',
            cn: '黑豆饼配墨西哥辣椒蛋黄酱和墨西哥胡椒。'
          },
          options: [
            { name: { nl: 'Extra jalapeños', en: 'Extra Jalapeños', cn: '额外墨西哥胡椒' }, price: 1.0 },
            { name: { nl: 'Kaas toevoegen', en: 'Add Cheese', cn: '添加奶酪' }, price: 1.0 }
          ]
        },
        {
          name: { nl: 'Truffel Burger', en: 'Truffle Burger', cn: '松露汉堡' },
          price: 12.99,
          tags: [
            { nl: 'rundvlees', en: 'beef', cn: '牛肉' }
          ],
          description: {
            nl: 'Runderburger met truffelaioli en rucola.',
            en: 'Beef patty with truffle aioli and arugula.',
            cn: '牛肉饼配松露蛋黄酱和芝麻菜。'
          },
          options: [
            { name: { nl: 'Extra rucola', en: 'Extra Arugula', cn: '额外芝麻菜' }, price: 1.0 },
            { name: { nl: 'Truffelfriet toevoegen', en: 'Add Truffle Fries', cn: '添加松露薯条' }, price: 2.5 }
          ]
        }
      ]
    },
    {
      category: { nl: '🍣 Sushi', en: '🍣 Sushi', cn: '🍣 寿司' },
      dishes: [
        {
          name: { nl: 'California Roll', en: 'California Roll', cn: '加州卷' },
          price: 6.99,
          tags: [
            { nl: 'zeevoedsel', en: 'seafood', cn: '海鲜' }
          ],
          description: {
            nl: 'Krab, avocado en komkommer gerold in rijst.',
            en: 'Crab, avocado, and cucumber rolled in rice.',
            cn: '蟹肉、鳄梨和黄瓜卷入米饭。'
          },
          options: [
            { name: { nl: 'Extra wasabi', en: 'Extra Wasabi', cn: '额外芥末' }, price: 0.5 },
            { name: { nl: 'Extra gember', en: 'Extra Ginger', cn: '额外姜' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Spicy Tuna Roll', en: 'Spicy Tuna Roll', cn: '辣味金枪鱼卷' },
          price: 7.49,
          tags: [
            { nl: 'zeevoedsel', en: 'seafood', cn: '海鲜' },
            { nl: 'pittig', en: 'spicy', cn: '辛辣' }
          ],
          description: {
            nl: 'Tonijn gemengd met pittige mayo, gewikkeld in zeewier.',
            en: 'Tuna mixed with spicy mayo, wrapped in seaweed.',
            cn: '金枪鱼拌辣味蛋黄酱，包裹在海苔中。'
          },
          options: [
            { name: { nl: 'Extra mayo', en: 'Extra Mayo', cn: '额外蛋黄酱' }, price: 0.5 },
            { name: { nl: 'Tobiko toevoegen', en: 'Add Tobiko', cn: '添加飞鱼籽' }, price: 1.0 }
          ]
        },
        {
          name: { nl: 'Salmon Nigiri', en: 'Salmon Nigiri', cn: '三文鱼手握' },
          price: 5.99,
          tags: [
            { nl: 'zeevoedsel', en: 'seafood', cn: '海鲜' }
          ],
          description: {
            nl: 'Plak verse zalm op gekruide rijst.',
            en: 'Slice of fresh salmon over seasoned rice.',
            cn: '新鲜三文鱼片置于调味米饭之上。'
          },
          options: [
            { name: { nl: 'Extra rijst', en: 'Extra Rice', cn: '额外米饭' }, price: 0.5 },
            { name: { nl: 'Extra zalm', en: 'Extra Salmon', cn: '额外三文鱼' }, price: 2.0 }
          ]
        },
        {
          name: { nl: 'Veggie Roll', en: 'Veggie Roll', cn: '蔬菜卷' },
          price: 6.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' },
            { nl: 'veganistisch', en: 'vegan', cn: '纯素' }
          ],
          description: {
            nl: 'Avocado, komkommer, wortel en asperge.',
            en: 'Avocado, cucumber, carrot, and asparagus.',
            cn: '鳄梨、黄瓜、胡萝卜和芦笋。'
          },
          options: [
            { name: { nl: 'Roomkaas toevoegen', en: 'Add Cream Cheese', cn: '添加奶油奶酪' }, price: 1.0 },
            { name: { nl: 'Extra groenten', en: 'Extra Veggies', cn: '额外蔬菜' }, price: 0.75 }
          ]
        },
        {
          name: { nl: 'Rainbow Roll', en: 'Rainbow Roll', cn: '彩虹卷' },
          price: 8.99,
          tags: [
            { nl: 'zeevoedsel', en: 'seafood', cn: '海鲜' }
          ],
          description: {
            nl: 'Verschillende vissoorten op een California roll.',
            en: 'Assorted fish layered over a California roll.',
            cn: '各种鱼类叠加在加州卷上。'
          },
          options: [
            { name: { nl: 'Extra vis', en: 'Extra Fish', cn: '额外鱼肉' }, price: 2.5 },
            { name: { nl: 'Eelsaus toevoegen', en: 'Add Eel Sauce', cn: '添加鳗鱼酱' }, price: 0.75 }
          ]
        },
        {
          name: { nl: 'Dragon Roll', en: 'Dragon Roll', cn: '龙卷' },
          price: 9.99,
          tags: [
            { nl: 'zeevoedsel', en: 'seafood', cn: '海鲜' }
          ],
          description: {
            nl: 'Paling, avocado en komkommer met unagisaus.',
            en: 'Eel, avocado, and cucumber with unagi sauce.',
            cn: '鳗鱼、鳄梨和黄瓜配鳗鱼酱。'
          },
          options: [
            { name: { nl: 'Extra paling', en: 'Extra Eel', cn: '额外鳗鱼' }, price: 2.0 },
            { name: { nl: 'Sesamzaad toevoegen', en: 'Add Sesame Seeds', cn: '添加芝麻' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Tempura Roll', en: 'Tempura Roll', cn: '天妇罗卷' },
          price: 7.99,
          tags: [
            { nl: 'zeevoedsel', en: 'seafood', cn: '海鲜' },
            { nl: 'gefrituurd', en: 'fried', cn: '油炸' }
          ],
          description: {
            nl: 'Garnalen tempura, avocado en unagisaus.',
            en: 'Shrimp tempura, avocado, and eel sauce.',
            cn: '天妇罗虾、鳄梨和鳗鱼酱。'
          },
          options: [
            { name: { nl: 'Extra tempura', en: 'Extra Tempura', cn: '额外天妇罗' }, price: 1.5 },
            { name: { nl: 'Pittige mayo toevoegen', en: 'Add Spicy Mayo', cn: '添加辣味蛋黄酱' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Philadelphia Roll', en: 'Philadelphia Roll', cn: '费城卷' },
          price: 7.49,
          tags: [
            { nl: 'zeevoedsel', en: 'seafood', cn: '海鲜' }
          ],
          description: {
            nl: 'Gerookte zalm, roomkaas en komkommer.',
            en: 'Smoked salmon, cream cheese, and cucumber.',
            cn: '熏三文鱼、奶油奶酪和黄瓜。'
          },
          options: [
            { name: { nl: 'Extra roomkaas', en: 'Extra Cream Cheese', cn: '额外奶油奶酪' }, price: 1.0 },
            { name: { nl: 'Kapers toevoegen', en: 'Add Capers', cn: '添加刺山柑' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Spicy Salmon Roll', en: 'Spicy Salmon Roll', cn: '辣味三文鱼卷' },
          price: 7.99,
          tags: [
            { nl: 'zeevoedsel', en: 'seafood', cn: '海鲜' },
            { nl: 'pittig', en: 'spicy', cn: '辛辣' }
          ],
          description: {
            nl: 'Zalm met pittige mayo en komkommer.',
            en: 'Salmon with spicy mayo and cucumber.',
            cn: '三文鱼配辣味蛋黄酱和黄瓜。'
          },
          options: [
            { name: { nl: 'Extra pit', en: 'Extra Spice', cn: '额外辣味' }, price: 0.5 },
            { name: { nl: 'Avocado toevoegen', en: 'Add Avocado', cn: '添加鳄梨' }, price: 1.0 }
          ]
        },
        {
          name: { nl: 'Komkommer Maki', en: 'Cucumber Maki', cn: '黄瓜卷' },
          price: 5.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' },
            { nl: 'veganistisch', en: 'vegan', cn: '纯素' }
          ],
          description: {
            nl: 'Komkommer gewikkeld in rijst en zeewier.',
            en: 'Cucumber wrapped in rice and seaweed.',
            cn: '黄瓜包裹在米饭和海苔中。'
          },
          options: [
            { name: { nl: 'Extra zeewier', en: 'Extra Seaweed', cn: '额外海苔' }, price: 0.5 },
            { name: { nl: 'Sesamolie toevoegen', en: 'Add Sesame Oil', cn: '添加芝麻油' }, price: 0.25 }
          ]
        }
      ]
    },
    {
      category: { nl: '🍜 Ramen', en: '🍜 Ramen', cn: '🍜 拉面' },
      dishes: [
        {
          name: { nl: 'Tonkotsu Ramen', en: 'Tonkotsu Ramen', cn: '豚骨拉面' },
          price: 12.99,
          tags: [
            { nl: 'varkensvlees', en: 'pork', cn: '猪肉' }
          ],
          description: {
            nl: 'Rijke varkensbottenbouillon met noedels, ei en bosui.',
            en: 'Rich pork bone broth with noodles, egg, and scallions.',
            cn: '浓郁猪骨汤配面条、鸡蛋和葱。'
          },
          options: [
            { name: { nl: 'Extra noedels', en: 'Extra Noodles', cn: '额外面条' }, price: 2.0 },
            { name: { nl: 'Extra ei', en: 'Extra Egg', cn: '额外鸡蛋' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'Miso Ramen', en: 'Miso Ramen', cn: '味噌拉面' },
          price: 11.99,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Hartige miso-bouillon met tofu, maïs en bamboescheuten.',
            en: 'Savory miso broth with tofu, corn, and bamboo shoots.',
            cn: '鲜美味噌汤配豆腐、玉米和竹笋。'
          },
          options: [
            { name: { nl: 'Extra tofu', en: 'Extra Tofu', cn: '额外豆腐' }, price: 1.5 },
            { name: { nl: 'Extra bouillon', en: 'Extra Broth', cn: '额外汤底' }, price: 1.0 }
          ]
        },
        {
          name: { nl: 'Shoyu Ramen', en: 'Shoyu Ramen', cn: '酱油拉面' },
          price: 11.49,
          tags: [
            { nl: 'kip', en: 'chicken', cn: '鸡肉' }
          ],
          description: {
            nl: 'Sojasausbouillon met kip, spinazie en narutomaki.',
            en: 'Soy-based broth with chicken, spinach, and narutomaki.',
            cn: '酱油汤底配鸡肉、菠菜和鱼板。'
          },
          options: [
            { name: { nl: 'Extra kip', en: 'Extra Chicken', cn: '额外鸡肉' }, price: 2.0 },
            { name: { nl: 'Bamboescheuten toevoegen', en: 'Add Bamboo Shoots', cn: '添加竹笋' }, price: 1.0 }
          ]
        },
        {
          name: { nl: 'Spicy Miso', en: 'Spicy Miso', cn: '辣味味噌' },
          price: 12.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' },
            { nl: 'pittig', en: 'spicy', cn: '辛辣' }
          ],
          description: {
            nl: 'Miso-bouillon met chili-olie, jalapeños en champignons.',
            en: 'Miso broth with chili oil, jalapeños, and mushrooms.',
            cn: '味噌汤配辣椒油、墨西哥胡椒和蘑菇。'
          },
          options: [
            { name: { nl: 'Extra pit', en: 'Extra Spice', cn: '额外辣味' }, price: 0.5 },
            { name: { nl: 'Extra noedels', en: 'Extra Noodles', cn: '额外面条' }, price: 2.0 }
          ]
        },
        {
          name: { nl: 'Tsukemen', en: 'Tsukemen', cn: '沾面' },
          price: 13.99,
          tags: [
            { nl: 'varkensvlees', en: 'pork', cn: '猪肉' }
          ],
          description: {
            nl: 'Koude noedels geserveerd met aparte dipsaus.',
            en: 'Cold noodles served with a separate dipping broth.',
            cn: '冷面配分离蘸汤。'
          },
          options: [
            { name: { nl: 'Extra bouillon', en: 'Extra Broth', cn: '额外汤底' }, price: 1.5 },
            { name: { nl: 'Ei toevoegen', en: 'Add Egg', cn: '添加鸡蛋' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'Groentelamen', en: 'Vegetable Ramen', cn: '蔬菜拉面' },
          price: 11.49,
          tags: [
            { nl: 'veganistisch', en: 'vegan', cn: '纯素' }
          ],
          description: {
            nl: 'Groentebouillon met tofu, champignons en spinazie.',
            en: 'Vegetable broth with tofu, mushrooms, and spinach.',
            cn: '蔬菜汤配豆腐、蘑菇和菠菜。'
          },
          options: [
            { name: { nl: 'Extra groenten', en: 'Extra Veggies', cn: '额外蔬菜' }, price: 1.5 },
            { name: { nl: 'Zeewier toevoegen', en: 'Add Seaweed', cn: '添加海藻' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Chicken Karaage', en: 'Chicken Karaage', cn: '日式炸鸡' },
          price: 13.49,
          tags: [
            { nl: 'kip', en: 'chicken', cn: '鸡肉' }
          ],
          description: {
            nl: 'Ramen getopt met knapperige gefrituurde kip.',
            en: 'Ramen topped with crispy fried chicken.',
            cn: '拉面顶部配脆炸鸡。'
          },
          options: [
            { name: { nl: 'Extra karaage', en: 'Extra Karaage', cn: '额外炸鸡' }, price: 2.0 },
            { name: { nl: 'Pickles toevoegen', en: 'Add Pickles', cn: '添加泡菜' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Curry Ramen', en: 'Curry Ramen', cn: '咖喱拉面' },
          price: 12.99,
          tags: [
            { nl: 'rundvlees', en: 'beef', cn: '牛肉' },
            { nl: 'pittig', en: 'spicy', cn: '辛辣' }
          ],
          description: {
            nl: 'Pittige kerriebouillon met rundvlees en noedels.',
            en: 'Spicy curry broth with beef slices and noodles.',
            cn: '辛辣咖喱汤配牛肉片和面条。'
          },
          options: [
            { name: { nl: 'Extra curry', en: 'Extra Curry', cn: '额外咖喱' }, price: 1.0 },
            { name: { nl: 'Rijst toevoegen', en: 'Add Rice', cn: '添加米饭' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'Seafood Ramen', en: 'Seafood Ramen', cn: '海鲜拉面' },
          price: 14.49,
          tags: [
            { nl: 'zeevoedsel', en: 'seafood', cn: '海鲜' }
          ],
          description: {
            nl: 'Seafood-bouillon met garnalen, mosselen en inktvis.',
            en: 'Seafood broth with shrimp, mussels, and squid.',
            cn: '海鲜汤配虾、贻贝和鱿鱼。'
          },
          options: [
            { name: { nl: 'Extra zeevruchten', en: 'Extra Seafood', cn: '额外海鲜' }, price: 2.5 },
            { name: { nl: 'Maïs toevoegen', en: 'Add Corn', cn: '添加玉米' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Tan Tan Men', en: 'Tan Tan Men', cn: '担担面' },
          price: 13.99,
          tags: [
            { nl: 'varkensvlees', en: 'pork', cn: '猪肉' },
            { nl: 'pittig', en: 'spicy', cn: '辛辣' }
          ],
          description: {
            nl: 'Pittige sesambouillon met gemalen varkensvlees.',
            en: 'Spicy sesame broth with ground pork.',
            cn: '辛辣芝麻汤配猪肉碎。'
          },
          options: [
            { name: { nl: 'Extra varkensvlees', en: 'Extra Pork', cn: '额外猪肉' }, price: 1.5 },
            { name: { nl: 'Chili-olie toevoegen', en: 'Add Chili Oil', cn: '添加辣椒油' }, price: 0.5 }
          ]
        }
      ]
    },
    {
      category: { nl: '🥗 Salades', en: '🥗 Salads', cn: '🥗 沙拉' },
      dishes: [
        {
          name: { nl: 'Caesar Salad', en: 'Caesar Salad', cn: '凯撒沙拉' },
          price: 7.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Romeinse sla met caesardressing, croutons en parmezaan.',
            en: 'Romaine with Caesar dressing, croutons, and parmesan.',
            cn: '罗马生菜配凯撒酱、面包丁和帕尔马干酪。'
          },
          options: [
            { name: { nl: 'Kip toevoegen', en: 'Add Chicken', cn: '添加鸡肉' }, price: 2.5 },
            { name: { nl: 'Extra dressing', en: 'Extra Dressing', cn: '额外酱汁' }, price: 0.75 }
          ]
        },
        {
          name: { nl: 'Griekse Salade', en: 'Greek Salad', cn: '希腊沙拉' },
          price: 7.99,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Tomaten, komkommer, olijven, feta en oregano.',
            en: 'Tomatoes, cucumbers, olives, feta cheese, and oregano.',
            cn: '番茄、黄瓜、橄榄、菲达奶酪和牛至。'
          },
          options: [
            { name: { nl: 'Extra feta', en: 'Extra Feta', cn: '额外菲达奶酪' }, price: 1.0 },
            { name: { nl: 'Kikkererwten toevoegen', en: 'Add Chickpeas', cn: '添加鹰嘴豆' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'Cobb Salad', en: 'Cobb Salad', cn: '科布沙拉' },
          price: 8.49,
          tags: [
            { nl: 'varkensvlees', en: 'pork', cn: '猪肉' },
            { nl: 'kip', en: 'chicken', cn: '鸡肉' }
          ],
          description: {
            nl: 'Kip, bacon, avocado, ei en blauwe kaas.',
            en: 'Chicken, bacon, avocado, egg, and blue cheese.',
            cn: '鸡肉、培根、鳄梨、鸡蛋和蓝纹奶酪。'
          },
          options: [
            { name: { nl: 'Extra avocado', en: 'Extra Avocado', cn: '额外鳄梨' }, price: 1.5 },
            { name: { nl: 'Extra bacon', en: 'Extra Bacon', cn: '额外培根' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'Quinoa Bowl', en: 'Quinoa Bowl', cn: '藜麦碗' },
          price: 8.99,
          tags: [
            { nl: 'veganistisch', en: 'vegan', cn: '纯素' }
          ],
          description: {
            nl: 'Quinoa, zwarte bonen, maïs, avocado en limoendressing.',
            en: 'Quinoa, black beans, corn, avocado, and lime dressing.',
            cn: '藜麦、黑豆、玉米、鳄梨和青柠酱。'
          },
          options: [
            { name: { nl: 'Tofu toevoegen', en: 'Add Tofu', cn: '添加豆腐' }, price: 2.0 },
            { name: { nl: 'Extra guacamole', en: 'Extra Guacamole', cn: '额外鳄梨酱' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'Spinazie Salade', en: 'Spinach Salad', cn: '菠菜沙拉' },
          price: 7.99,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Spinazie, aardbeien, amandelen en papaversoudressing.',
            en: 'Spinach, strawberries, almonds, and poppy seed dressing.',
            cn: '菠菜、草莓、杏仁和罂粟籽酱。'
          },
          options: [
            { name: { nl: 'Geitenkaas toevoegen', en: 'Add Goat Cheese', cn: '添加山羊奶酪' }, price: 1.5 },
            { name: { nl: 'Extra amandelen', en: 'Extra Almonds', cn: '额外杏仁' }, price: 0.75 }
          ]
        },
        {
          name: { nl: 'Kale Crunch', en: 'Kale Crunch', cn: '羽衣甘蓝脆' },
          price: 9.49,
          tags: [
            { nl: 'veganistisch', en: 'vegan', cn: '纯素' }
          ],
          description: {
            nl: 'Kale, quinoa, cranberries en zonnebloempitten.',
            en: 'Kale, quinoa, cranberries, and sunflower seeds.',
            cn: '羽衣甘蓝、藜麦、蔓越莓和葵花籽。'
          },
          options: [
            { name: { nl: 'Tofu toevoegen', en: 'Add Tofu', cn: '添加豆腐' }, price: 2.0 },
            { name: { nl: 'Extra pitten', en: 'Extra Seeds', cn: '额外种子' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Asian Chicken', en: 'Asian Chicken', cn: '亚洲鸡肉' },
          price: 9.99,
          tags: [
            { nl: 'kip', en: 'chicken', cn: '鸡肉' }
          ],
          description: {
            nl: 'Gegrilde kip, kool, wortels en sesamdressing.',
            en: 'Grilled chicken, cabbage, carrots, and sesame dressing.',
            cn: '烤鸡、卷心菜、胡萝卜和芝麻酱。'
          },
          options: [
            { name: { nl: 'Extra kip', en: 'Extra Chicken', cn: '额外鸡肉' }, price: 2.0 },
            { name: { nl: 'Noedels toevoegen', en: 'Add Noodles', cn: '添加面条' }, price: 1.0 }
          ]
        },
        {
          name: { nl: 'Caprese', en: 'Caprese', cn: '卡普雷塞' },
          price: 8.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Tomaat, mozzarella, basilicum en balsamico-glazuur.',
            en: 'Tomato, mozzarella, basil, and balsamic glaze.',
            cn: '番茄、马苏里拉奶酪、罗勒和香醋。'
          },
          options: [
            { name: { nl: 'Extra basilicum', en: 'Extra Basil', cn: '额外罗勒' }, price: 0.5 },
            { name: { nl: 'Prosciutto toevoegen', en: 'Add Prosciutto', cn: '添加意大利熏火腿' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'Fruit & Noten', en: 'Fruit & Nut', cn: '水果坚果' },
          price: 8.99,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Gemengde sla, seizoensfruit en walnoten.',
            en: 'Mixed greens, seasonal fruits, and walnuts.',
            cn: '混合青菜、应季水果和核桃。'
          },
          options: [
            { name: { nl: 'Kaas toevoegen', en: 'Add Cheese', cn: '添加奶酪' }, price: 1.0 },
            { name: { nl: 'Extra noten', en: 'Extra Nuts', cn: '额外坚果' }, price: 0.75 }
          ]
        },
        {
          name: { nl: 'Mediterranean Bowl', en: 'Mediterranean Bowl', cn: '地中海碗' },
          price: 9.49,
          tags: [
            { nl: 'veganistisch', en: 'vegan', cn: '纯素' }
          ],
          description: {
            nl: 'Hummus, komkommer, tomaten, olijven en pita.',
            en: 'Hummus, cucumbers, tomatoes, olives, and pita.',
            cn: '鹰嘴豆泥、黄瓜、番茄、橄榄和皮塔饼。'
          },
          options: [
            { name: { nl: 'Extra hummus', en: 'Extra Hummus', cn: '额外鹰嘴豆泥' }, price: 1.0 },
            { name: { nl: 'Falafel toevoegen', en: 'Add Falafel', cn: '添加炸豆丸' }, price: 2.0 }
          ]
        }
      ]
    },
    {
      category: { nl: '🌮 Tacos', en: '🌮 Tacos', cn: '🌮 玉米饼' },
      dishes: [
        {
          name: { nl: 'Carne Asada', en: 'Carne Asada', cn: '烤牛肉玉米饼' },
          price: 3.99,
          tags: [
            { nl: 'rundvlees', en: 'beef', cn: '牛肉' }
          ],
          description: {
            nl: 'Gegrilde steak met koriander, ui en limoen.',
            en: 'Grilled steak with cilantro, onion, and lime.',
            cn: '烤牛排配香菜、洋葱和青柠。'
          },
          options: [
            { name: { nl: 'Guacamole toevoegen', en: 'Add Guacamole', cn: '添加鳄梨酱' }, price: 1.5 },
            { name: { nl: 'Extra tortilla', en: 'Extra Tortilla', cn: '额外玉米饼' }, price: 1.0 }
          ]
        },
        {
          name: { nl: 'Shrimp Taco', en: 'Shrimp Taco', cn: '虾玉米饼' },
          price: 4.49,
          tags: [
            { nl: 'zeevoedsel', en: 'seafood', cn: '海鲜' }
          ], 
          description: {
            nl: 'Pittige garnalen met koolsla en chipotle mayo.',
            en: 'Spicy shrimp with cabbage slaw and chipotle mayo.',
            cn: '香辣虾配卷心菜沙拉和墨西哥辣椒蛋黄酱。'
          },
          options: [
            { name: { nl: 'Extra garnalen', en: 'Extra Shrimp', cn: '额外虾' }, price: 2.0 },
            { name: { nl: 'Ananassalsa toevoegen', en: 'Add Pineapple Salsa', cn: '添加菠萝莎莎' }, price: 1.0 }
          ]
        },
        {
          name: { nl: 'Al Pastor', en: 'Al Pastor', cn: '牧羊人式猪肉' },
          price: 3.99,
          tags: [
            { nl: 'varkensvlees', en: 'pork', cn: '猪肉' }
          ],
          description: {
            nl: 'Gemarineerd varkensvlees, ananas, koriander en ui.',
            en: 'Marinated pork, pineapple, cilantro, and onion.',
            cn: '腌制猪肉、菠萝、香菜和洋葱。'
          },
          options: [
            { name: { nl: 'Extra ananas', en: 'Extra Pineapple', cn: '额外菠萝' }, price: 0.75 },
            { name: { nl: 'Extra varkensvlees', en: 'Extra Pork', cn: '额外猪肉' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'Veggie Taco', en: 'Veggie Taco', cn: '蔬菜玉米饼' },
          price: 3.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' },
            { nl: 'veganistisch', en: 'vegan', cn: '纯素' }
          ],
          description: {
            nl: 'Gegrilde groenten met avocado en salsa verde.',
            en: 'Grilled veggies with avocado and salsa verde.',
            cn: '烤蔬菜配鳄梨和青莎莎。'
          },
          options: [
            { name: { nl: 'Kaas toevoegen', en: 'Add Cheese', cn: '添加奶酪' }, price: 1.0 },
            { name: { nl: 'Extra groenten', en: 'Extra Veggies', cn: '额外蔬菜' }, price: 1.0 }
          ]
        },
        {
          name: { nl: 'Fish Taco', en: 'Fish Taco', cn: '鱼玉米饼' },
          price: 4.49,
          tags: [
            { nl: 'zeevoedsel', en: 'seafood', cn: '海鲜' }
          ],
          description: {
            nl: 'Knappe vis, koolsla en limoencrème.',
            en: 'Crispy fish, cabbage slaw, and lime crema.',
            cn: '酥脆鱼肉、卷心菜沙拉和青柠奶油。'
          },
          options: [
            { name: { nl: 'Avocado toevoegen', en: 'Add Avocado', cn: '添加鳄梨' }, price: 1.5 },
            { name: { nl: 'Extra slaw', en: 'Extra Slaw', cn: '额外卷心菜沙拉' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Barbacoa', en: 'Barbacoa', cn: '巴巴科亚' },
          price: 4.99,
          tags: [
            { nl: 'rundvlees', en: 'beef', cn: '牛肉' }
          ],
          description: {
            nl: 'Langzaam gegaard rundvlees met koriander en ui.',
            en: 'Slow-cooked beef with cilantro and onion.',
            cn: '慢炖牛肉配香菜和洋葱。'
          },
          options: [
            { name: { nl: 'Salsa verde toevoegen', en: 'Add Salsa Verde', cn: '添加青莎莎' }, price: 0.5 },
            { name: { nl: 'Extra tortilla', en: 'Extra Tortilla', cn: '额外玉米饼' }, price: 1.0 }
          ]
        },
        {
          name: { nl: 'Chicken Mole', en: 'Chicken Mole', cn: '摩尔鸡肉' },
          price: 4.49,
          tags: [
            { nl: 'kip', en: 'chicken', cn: '鸡肉' }
          ],
          description: {
            nl: 'Kip in molesaus met sesamzaadjes.',
            en: 'Chicken in mole sauce with sesame seeds.',
            cn: '鸡肉配摩尔酱和芝麻。'
          },
          options: [
            { name: { nl: 'Extra mole', en: 'Extra Mole', cn: '额外摩尔酱' }, price: 0.5 },
            { name: { nl: 'Rijst toevoegen', en: 'Add Rice', cn: '添加米饭' }, price: 1.0 }
          ]
        },
        {
          name: { nl: 'Carnitas', en: 'Carnitas', cn: '炖猪肉' },
          price: 4.99,
          tags: [
            { nl: 'varkensvlees', en: 'pork', cn: '猪肉' }
          ],
          description: {
            nl: 'Gestoofd varkensvlees met ingelegde ui en koriander.',
            en: 'Braised pork with pickled onions and cilantro.',
            cn: '红烧猪肉配腌洋葱和香菜。'
          },
          options: [
            { name: { nl: 'Ananas toevoegen', en: 'Add Pineapple', cn: '添加菠萝' }, price: 0.75 },
            { name: { nl: 'Extra varkensvlees', en: 'Extra Pork', cn: '额外猪肉' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'Korean BBQ', en: 'Korean BBQ', cn: '韩式烤肉' },
          price: 5.49,
          tags: [
            { nl: 'rundvlees', en: 'beef', cn: '牛肉' }
          ],
          description: {
            nl: 'Gemarineerd rundvlees met kimchi en bosui.',
            en: 'Marinated beef with kimchi and scallions.',
            cn: '腌制牛肉配泡菜和葱。'
          },
          options: [
            { name: { nl: 'Kimchi toevoegen', en: 'Add Kimchi', cn: '添加泡菜' }, price: 0.5 },
            { name: { nl: 'Extra bosui', en: 'Extra Scallions', cn: '额外葱' }, price: 0.25 }
          ]
        },
        {
          name: { nl: 'Bloemkool', en: 'Cauliflower', cn: '花椰菜' },
          price: 3.99,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Geroosterde bloemkool met chili aioli.',
            en: 'Roasted cauliflower with chili aioli.',
            cn: '烤花椰菜配辣椒蒜泥蛋黄酱。'
          },
          options: [
            { name: { nl: 'Limoen toevoegen', en: 'Add Lime', cn: '添加青柠' }, price: 0.25 },
            { name: { nl: 'Extra aioli', en: 'Extra Aioli', cn: '额外蛋黄酱' }, price: 0.5 }
          ]
        }
      ]
    },
    {
      category: { nl: '🍰 Dessert', en: '🍰 Dessert', cn: '🍰 甜点' },
      dishes: [
        {
          name: { nl: 'Cheesecake', en: 'Cheesecake', cn: '芝士蛋糕' },
          price: 5.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Romige NY-stijl cheesecake met grahamkorst.',
            en: 'Creamy NY-style cheesecake with graham crust.',
            cn: '纽约风味奶油芝士蛋糕配全麦饼底。'
          },
          options: [
            { name: { nl: 'Aardbeien toevoegen', en: 'Add Strawberries', cn: '添加草莓' }, price: 1.5 },
            { name: { nl: 'Slagroom toevoegen', en: 'Add Whipped Cream', cn: '添加鲜奶油' }, price: 0.75 }
          ]
        },
        {
          name: { nl: 'Chocolate Lava Cake', en: 'Chocolate Lava Cake', cn: '巧克力熔岩蛋糕' },
          price: 6.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Warme chocoladecake met vloeibare kern.',
            en: 'Warm chocolate cake with molten center.',
            cn: '温热巧克力蛋糕，内芯流心。'
          },
          options: [
            { name: { nl: 'Ijs toevoegen', en: 'Add Ice Cream Scoop', cn: '添加冰激凌球' }, price: 1.5 },
            { name: { nl: 'Extra chocoladesaus', en: 'Extra Chocolate Sauce', cn: '额外巧克力酱' }, price: 0.75 }
          ]
        },
        {
          name: { nl: 'Tiramisu', en: 'Tiramisu', cn: '提拉米苏' },
          price: 5.99,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Koffiegedrenkte lange vingers met mascarpone.',
            en: 'Coffee-soaked ladyfingers layered with mascarpone.',
            cn: '咖啡浸泡手指饼配马斯卡彭奶酪。'
          },
          options: [
            { name: { nl: 'Extra cacaopoeder', en: 'Extra Cocoa Powder', cn: '额外可可粉' }, price: 0.5 },
            { name: { nl: 'Espressoshot toevoegen', en: 'Add Espresso Shot', cn: '添加浓缩咖啡' }, price: 1.0 }
          ]
        },
        {
          name: { nl: 'Appeltaart', en: 'Apple Pie', cn: '苹果派' },
          price: 4.99,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Klassieke appeltaart met kaneel en bladerdeeg.',
            en: 'Classic apple pie with cinnamon and flaky crust.',
            cn: '经典苹果派配肉桂和酥皮。'
          },
          options: [
            { name: { nl: 'Ijs toevoegen', en: 'Add Ice Cream Scoop', cn: '添加冰激凌球' }, price: 1.5 },
            { name: { nl: 'Extra karameldruppel', en: 'Extra Caramel Drizzle', cn: '额外焦糖淋酱' }, price: 0.75 }
          ]
        },
        {
          name: { nl: 'Fruit Tart', en: 'Fruit Tart', cn: '水果挞' },
          price: 5.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Seizoensfruit op custard in knapperige schaal.',
            en: 'Seasonal fruits over custard in a crisp shell.',
            cn: '时令水果配奶油卡仕达，放在酥脆壳中。'
          },
          options: [
            { name: { nl: 'Glazuur toevoegen', en: 'Add Glaze', cn: '添加果冻' }, price: 0.5 },
            { name: { nl: 'Extra fruit', en: 'Extra Fruit', cn: '额外水果' }, price: 1.0 }
          ]
        },
        {
          name: { nl: 'Chocolate Mousse', en: 'Chocolate Mousse', cn: '巧克力慕斯' },
          price: 5.99,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Lichte en luchtige chocolademousse.',
            en: 'Light and airy chocolate mousse.',
            cn: '轻盈柔滑的巧克力慕斯。'
          },
          options: [
            { name: { nl: 'Bessen toevoegen', en: 'Add Berries', cn: '添加浆果' }, price: 1.0 },
            { name: { nl: 'Extra room', en: 'Extra Cream', cn: '额外奶油' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Crème Brûlée', en: 'Crème Brûlée', cn: '焦糖布丁' },
          price: 6.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Rijke custard met gekarameliseerde suikerlaag.',
            en: 'Rich custard with caramelized sugar top.',
            cn: '浓郁奶黄布丁并配焦糖顶层。'
          },
          options: [
            { name: { nl: 'Fruitcompote toevoegen', en: 'Add Fruit Compote', cn: '添加水果酱' }, price: 1.0 },
            { name: { nl: 'Extra karamel', en: 'Extra Caramel', cn: '额外焦糖' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Key Lime Pie', en: 'Key Lime Pie', cn: '关键青柠派' },
          price: 5.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Tangy limoencustard in grahamkorst.',
            en: 'Tangy lime custard in graham crust.',
            cn: '香酸青柠奶黄配全麦饼底。'
          },
          options: [
            { name: { nl: 'Slagroom toevoegen', en: 'Add Whipped Cream', cn: '添加鲜奶油' }, price: 0.75 },
            { name: { nl: 'Extra limoenzeste', en: 'Extra Lime Zest', cn: '额外青柠皮屑' }, price: 0.25 }
          ]
        },
        {
          name: { nl: 'Brownie Sundae', en: 'Brownie Sundae', cn: '布朗尼圣代' },
          price: 6.99,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Warme brownie met ijs en chocoladesaus.',
            en: 'Warm brownie with ice cream and chocolate sauce.',
            cn: '温热布朗尼配冰淇淋和巧克力酱。'
          },
          options: [
            { name: { nl: 'Extra ijs', en: 'Extra Ice Cream', cn: '额外冰淇淋' }, price: 1.0 },
            { name: { nl: 'Noten toevoegen', en: 'Add Nuts', cn: '添加坚果' }, price: 0.75 }
          ]
        },
        {
          name: { nl: 'Lemon Tart', en: 'Lemon Tart', cn: '柠檬挞' },
          price: 5.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Citroencurd in knapperige deegschelp.',
            en: 'Lemon curd in flaky pastry shell.',
            cn: '柠檬凝乳置于酥皮壳中。'
          },
          options: [
            { name: { nl: 'Frambozencoulis toevoegen', en: 'Add Raspberry Coulis', cn: '添加覆盆子酱' }, price: 0.75 },
            { name: { nl: 'Extra bestuiving', en: 'Extra Dusting', cn: '额外撒粉' }, price: 0.25 }
          ]
        }
      ]
    },
    {
      category: { nl: '🥟 Dumplings', en: '🥟 Dumplings', cn: '🥟 饺子' },
      dishes: [
        {
          name: { nl: 'Varkens Gyoza', en: 'Pork Gyoza', cn: '猪肉饺子' },
          price: 6.99,
          tags: [
            { nl: 'varkensvlees', en: 'pork', cn: '猪肉' }
          ],
          description: {
            nl: 'Gebakken dumplings met hartige varkensvulling.',
            en: 'Pan-fried dumplings with savory pork filling.',
            cn: '锅贴饺子，内馅咸香猪肉。'
          },
          options: [
            { name: { nl: 'Extra dumplings', en: 'Extra Dumplings', cn: '额外饺子' }, price: 3.0 },
            { name: { nl: 'Dipsaus toevoegen', en: 'Add Dipping Sauce', cn: '添加蘸酱' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Shrimp Har Gow', en: 'Shrimp Har Gow', cn: '虾饺' },
          price: 7.49,
          tags: [
            { nl: 'zeevoedsel', en: 'seafood', cn: '海鲜' }
          ],
          description: {
            nl: 'Gestoomde garnalendumplings met doorschijnend omhulsel.',
            en: 'Steamed shrimp dumplings with translucent wrapper.',
            cn: '蒸虾饺，薄皮透亮。'
          },
          options: [
            { name: { nl: 'Extra garnalen', en: 'Extra Shrimp', cn: '额外虾' }, price: 2.0 },
            { name: { nl: 'Chili-olie toevoegen', en: 'Add Chili Oil', cn: '添加辣椒油' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Groente Potstickers', en: 'Vegetable Potstickers', cn: '素菜锅贴' },
          price: 6.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Gebakken dumplings met gemengde groentevulling.',
            en: 'Pan-fried dumplings with mixed vegetable filling.',
            cn: '锅贴饺子，内馅混合蔬菜。'
          },
          options: [
            { name: { nl: 'Extra potstickers', en: 'Extra Potstickers', cn: '额外锅贴' }, price: 3.0 },
            { name: { nl: 'Sesamsaus toevoegen', en: 'Add Sesame Sauce', cn: '添加芝麻酱' }, price: 0.75 }
          ]
        },
        {
          name: { nl: 'Xiao Long Bao', en: 'Xiao Long Bao', cn: '小笼包' },
          price: 7.99,
          tags: [
            { nl: 'varkensvlees', en: 'pork', cn: '猪肉' }
          ],
          description: {
            nl: 'Soepdumplings gevuld met varkensbouillon en vlees.',
            en: 'Soup dumplings filled with pork broth and meat.',
            cn: '汤包，内含猪肉汤汁和肉馅。'
          },
          options: [
            { name: { nl: 'Extra soep', en: 'Extra Soup', cn: '额外汤汁' }, price: 1.5 },
            { name: { nl: 'Gember toevoegen', en: 'Add Ginger', cn: '添加姜' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Tofu Dumplings', en: 'Tofu Dumplings', cn: '豆腐饺子' },
          price: 6.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' },
            { nl: 'veganistisch', en: 'vegan', cn: '纯素' }
          ],
          description: {
            nl: 'Gestoomde dumplings gevuld met gekruide tofu.',
            en: 'Steamed dumplings stuffed with seasoned tofu.',
            cn: '蒸饺，馅料调味豆腐。'
          },
          options: [
            { name: { nl: 'Extra tofu', en: 'Extra Tofu Filling', cn: '额外豆腐馅' }, price: 1.5 },
            { name: { nl: 'Sojasaus toevoegen', en: 'Add Soy Sauce', cn: '添加酱油' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Chicken Wontons', en: 'Chicken Wontons', cn: '鸡肉云吞' },
          price: 7.99,
          tags: [
            { nl: 'kip', en: 'chicken', cn: '鸡肉' }
          ],
          description: {
            nl: 'Gekookte wontons gevuld met kipgehakt.',
            en: 'Boiled wontons filled with minced chicken.',
            cn: '水饺，内馅鸡肉末。'
          },
          options: [
            { name: { nl: 'Extra wontons', en: 'Extra Wontons', cn: '额外云吞' }, price: 2.5 },
            { name: { nl: 'Bosui toevoegen', en: 'Add Scallions', cn: '添加葱' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Varkens Shumai', en: 'Pork Shumai', cn: '猪肉烧卖' },
          price: 7.49,
          tags: [
            { nl: 'varkensvlees', en: 'pork', cn: '猪肉' }
          ],
          description: {
            nl: 'Gestoomde varkensshumai met gember-sojasaus.',
            en: 'Steamed pork shumai with ginger soy sauce.',
            cn: '蒸猪肉烧卖，配姜味酱油。'
          },
          options: [
            { name: { nl: 'Extra shumai', en: 'Extra Shumai', cn: '额外烧卖' }, price: 2.0 },
            { name: { nl: 'Chili-olie toevoegen', en: 'Add Chili Oil', cn: '添加辣椒油' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Crab Rangoon', en: 'Crab Rangoon', cn: '蟹角' },
          price: 6.99,
          tags: [
            { nl: 'zeevoedsel', en: 'seafood', cn: '海鲜' }
          ],
          description: {
            nl: 'Gefrituurde wontons met krab en roomkaas.',
            en: 'Fried wontons with crab and cream cheese.',
            cn: '炸云吞，内馅蟹肉和奶油奶酪。'
          },
          options: [
            { name: { nl: 'Extra rangoon', en: 'Extra Rangoon', cn: '额外蟹角' }, price: 2.0 },
            { name: { nl: 'Zoete saus toevoegen', en: 'Add Sweet Sauce', cn: '添加甜酱' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Champignon Dumplings', en: 'Mushroom Dumplings', cn: '香菇饺子' },
          price: 6.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Gestoomde dumplings met gemengde champignons.',
            en: 'Steamed dumplings with mixed mushrooms.',
            cn: '蒸饺，馅料杂菌。'
          },
          options: [
            { name: { nl: 'Extra champignons', en: 'Extra Mushrooms', cn: '额外蘑菇' }, price: 1.0 },
            { name: { nl: 'Truffelolie toevoegen', en: 'Add Truffle Oil', cn: '添加松露油' }, price: 1.5 }
          ]
        },
        {
          name: { nl: 'Eend Dumplings', en: 'Duck Dumplings', cn: '鸭肉饺子' },
          price: 8.49,
          tags: [
            { nl: 'gevogelte', en: 'poultry', cn: '禽肉' }
          ],
          description: {
            nl: 'Gebakken dumplings met eendenvulling.',
            en: 'Pan-fried dumplings with duck filling.',
            cn: '锅贴饺子，内馅鸭肉。'
          },
          options: [
            { name: { nl: 'Extra eend', en: 'Extra Duck', cn: '额外鸭肉' }, price: 2.0 },
            { name: { nl: 'Hoisinsaus toevoegen', en: 'Add Hoisin Sauce', cn: '添加海鲜酱' }, price: 0.5 }
          ]
        }
      ]
    },
    {
      category: { nl: '🍩 Donuts', en: '🍩 Donuts', cn: '🍩 甜甜圈' },
      dishes: [
        {
          name: { nl: 'Glazuur', en: 'Glazed', cn: '糖霜' },
          price: 1.99,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Klassieke gistdonut met zoete glazuur.',
            en: 'Classic yeast donut with sweet glaze.',
            cn: '经典酵母甜甜圈配甜糖霜。'
          },
          options: [
            { name: { nl: 'Sprinkles toevoegen', en: 'Add Sprinkles', cn: '添加糖屑' }, price: 0.5 },
            { name: { nl: 'Extra glazuur', en: 'Extra Glaze', cn: '额外糖霜' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Chocolade Frosted', en: 'Chocolate Frosted', cn: '巧克力淋面' },
          price: 2.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Gistdonut bedekt met chocoladeglazuur.',
            en: 'Yeast donut topped with chocolate frosting.',
            cn: '酵母甜甜圈配巧克力淋面。'
          },
          options: [
            { name: { nl: 'Noten toevoegen', en: 'Add Nuts', cn: '添加坚果' }, price: 0.75 },
            { name: { nl: 'Karameldruppel toevoegen', en: 'Add Caramel Drizzle', cn: '添加焦糖淋酱' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Jam', en: 'Jelly', cn: '果酱' },
          price: 2.29,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Gevuld met zoete fruitjam en bestrooid met suiker.',
            en: 'Filled with sweet fruit jelly and sugar dusted.',
            cn: '内馅甜果酱，表面撒糖粉。'
          },
          options: [
            { name: { nl: 'Extra vulling', en: 'Extra Filling', cn: '额外馅料' }, price: 0.75 },
            { name: { nl: 'Poedersuiker toevoegen', en: 'Add Powdered Sugar', cn: '添加糖粉' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Maple Bacon', en: 'Maple Bacon', cn: '枫糖培根' },
          price: 2.99,
          tags: [
            { nl: 'varkensvlees', en: 'pork', cn: '猪肉' }
          ],
          description: {
            nl: 'Donut met mapleglazuur en baconstukjes.',
            en: 'Donut topped with maple glaze and bacon bits.',
            cn: '甜甜圈配枫糖糖霜和培根碎。'
          },
          options: [
            { name: { nl: 'Extra bacon', en: 'Extra Bacon', cn: '额外培根' }, price: 1.0 },
            { name: { nl: 'Maple-linzel toevoegen', en: 'Add Maple Drizzle', cn: '添加枫糖淋酱' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Bosbessen Cake', en: 'Blueberry Cake', cn: '蓝莓蛋糕甜甜圈' },
          price: 2.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Cake-donut met bosbessenstukjes.',
            en: 'Cake donut with blueberry pieces.',
            cn: '蛋糕型甜甜圈配蓝莓碎。'
          },
          options: [
            { name: { nl: 'Icing toevoegen', en: 'Add Icing', cn: '添加糖霜' }, price: 0.5 },
            { name: { nl: 'Extra bosbessen', en: 'Extra Blueberries', cn: '额外蓝莓' }, price: 0.75 }
          ]
        },
        {
          name: { nl: 'Old Fashioned', en: 'Old Fashioned', cn: '古早味' },
          price: 2.29,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Knapperige cake-donut met kaneelsuiker.',
            en: 'Crispy cake donut with cinnamon sugar.',
            cn: '酥脆蛋糕甜甜圈配肉桂糖。'
          },
          options: [
            { name: { nl: 'Extra suiker', en: 'Extra Sugar', cn: '额外糖' }, price: 0.25 },
            { name: { nl: 'Glazuur toevoegen', en: 'Add Glaze', cn: '添加糖霜' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Aardbeien Gevuld', en: 'Strawberry Filled', cn: '草莓馅' },
          price: 2.99,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Gevuld met aardbeienjam en bestrooid met suiker.',
            en: 'Filled with strawberry jam and sugar dusted.',
            cn: '内馅草莓酱，表面撒糖粉。'
          },
          options: [
            { name: { nl: 'Extra vulling', en: 'Extra Filling', cn: '额外馅料' }, price: 0.75 },
            { name: { nl: 'Sprinkles toevoegen', en: 'Add Sprinkles', cn: '添加糖屑' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Cinnamon Twist', en: 'Cinnamon Twist', cn: '肉桂绞' },
          price: 2.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Gedraaide donut met kaneelsuiker.',
            en: 'Twisted donut with cinnamon sugar.',
            cn: '扭曲甜甜圈配肉桂糖。'
          },
          options: [
            { name: { nl: 'Extra kaneel', en: 'Extra Cinnamon', cn: '额外肉桂' }, price: 0.25 },
            { name: { nl: 'Suikerglazuur toevoegen', en: 'Add Sugar Glaze', cn: '添加糖霜' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Poedersuiker', en: 'Powdered', cn: '糖粉' },
          price: 2.29,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Donut bedekt met poedersuiker.',
            en: 'Donut coated with powdered sugar.',
            cn: '甜甜圈裹糖粉。'
          },
          options: [
            { name: { nl: 'Extra suiker', en: 'Extra Sugar', cn: '额外糖' }, price: 0.25 },
            { name: { nl: 'Cacaopoeder toevoegen', en: 'Add Cocoa Powder', cn: '添加可可粉' }, price: 0.5 }
          ]
        },
        {
          name: { nl: 'Chocolade Sprinkles', en: 'Chocolate Sprinkles', cn: '巧克力糖屑' },
          price: 2.49,
          tags: [
            { nl: 'vegetarisch', en: 'vegetarian', cn: '素食' }
          ],
          description: {
            nl: 'Donut met chocoladeglazuur en sprinkles.',
            en: 'Chocolate glazed donut with sprinkles.',
            cn: '巧克力淋面甜甜圈配糖屑。'
          },
          options: [
            { name: { nl: 'Extra sprinkles', en: 'Extra Sprinkles', cn: '额外糖屑' }, price: 0.5 },
            { name: { nl: 'Chocolade chips toevoegen', en: 'Add Chocolate Chips', cn: '添加巧克力豆' }, price: 0.75 }
          ]
        }
      ]
    }
  ];
}