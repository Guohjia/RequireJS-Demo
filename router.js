app.get('/Ajax-1', function (req, res) {
    var obj = [{ "headline": '勇士再胜骑士', "content": '北京时间6月5日，金州勇士队再次以19分的巨大优势战胜克利夫兰骑士队，系列赛总比分2-0', "jpg": 'images/1.jpg' },
    { "headline": '骑士再次打败，詹姆斯是否已心凉？', "content": '今天詹姆斯赛后拒绝出席新闻发布会,似乎心情不佳,而他自己则坦言与输球无关', "jpg": 'images/2.jpg' },
    { "headline": '库里+杜兰特，史上最强二人组？', "content": '今天库里和杜兰特再次凭借出色的发挥带领球队力挫骑士队,继第一场比赛后，再次统治了攻防两端', "jpg": 'images/3.jpg', "hasNext": true }]
    res.send(obj)
})
app.get('/Ajax-2', function (req, res) {
    var obj = [{ "headline": '库里杜兰特联手，成就更好的彼此', "content": '库里和杜兰特联手，凭借出色的发挥，将系列赛的比分改写成2-0', "jpg": 'images/4.jpg' },
    { "headline": '真大腿昔日总决赛MVP一哥还在装死？', "content": '贵为总决赛MVP的伊戈达拉，在今年的前两场总决赛不如前年那么亮眼，莫不成又在装死？不过他出色的锋线侧翼防守却给球队带来了巨大的帮助', "jpg": 'images/5.jpg' },
    { "headline": '库詹PK，詹姆斯需要队友更好的支援？', "content": '身为当下最火的两名球星，截然不同的球风，却都以各自的方式影响着比赛；而詹姆斯似乎显得有些孤立无援？', "jpg": 'images/6.jpg', "hasNext": true }]
    res.send(obj)
})
app.get('/Ajax-3', function (req, res) {
    var obj = [{ "headline": '错位单吃库里战术失效？', "content": '在去年的总决赛当中，骑士队利用挡拆，让詹姆斯强吃库里这一点，让勇士着实复出了惨痛的代价,并且成功逆转了比赛；而今年，勇士队出色的整体防守让骑士这一招不再有效', "jpg": 'images/7.jpg' },
    { "headline": '骑勇大战一边倒，勇士或横扫骑士夺冠？', "content": '在季后赛前几轮的比赛当中，骑士和勇士都以所向披靡之势杀入总决赛，而人们所期待的火星撞地球的大战如今却呈现一边倒之势？', "jpg": 'images/8.jpg' },
    { "headline": '最强小前锋PK，杜兰特完胜詹姆斯？', "content": '系列赛第二场，杜兰特再次以逆天的发挥力压詹姆斯的三双，在防守端更是送出5记大冒，彻底在攻防两端统治了比赛。詹姆斯需要做出调整？还需要更好？', "jpg": 'images/9.jpg', "hasNext": false }]
    res.send(obj)
})

