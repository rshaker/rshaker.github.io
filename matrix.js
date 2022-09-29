var c = document.getElementById("c");
var ctx = c.getContext("2d");

const alphabets = [
    //"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]};",
    "अआइउकखगजटडणतथदनपफबमयरलवशषसह।१२३४५६७८९あいうおきくこさしすずそたってでとなにのはばめもらりるれをん三上不与世个中为举乐买予事产京人他付代以件份会伝传伪低住体作使例依侵便俗俱党入八公六共关其兼准出分利别办加动北十华卡厳参反发取受古史司同告员味和响国在境处多大夫央如始委娱嫌宋宗定实実审宣宴家宿密察对将小尔履山工巨市帝常年并开当影律得徽念性惑意成戴房所批抗报拥持据描支收政故数星昧是時曖更有期未末机权条来東果查标核案梁检概横款正歴民水求江沢治沼泊法活流消涉渡滸物特犯生用由界異的皇益监盗相矩研确神移究立等籍精系级纪组织经结给缴罪義职股背自良获葉行被规言記語説议证诉请调谋負賊财责购费起超趣身転边违述追送通造部配酬長问际除随集非项题额高",
    ["🥤","🍿","🌭","🍔"],
    ["🎃","👻","🧙‍♀️","🐈‍⬛","💀","🪦","🕷","🕸"],
    ["🎄","🎅🏻","🎁","🦌","⛄️","❄️","⛸","🛷"],
];

var letters = alphabets[Math.floor(Math.random() * alphabets.length)];

var colors = ["red","green","blue","yellow","orange"]
var font_size = 30;

var columns = 0;
var drops = [];
var last_height = 0;
var last_width = 0;

function draw() {

    var curr_height = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    var curr_width = "innerWidth" in window ? window.innerWidth : document.documentElement.offsetWidth;

    if (curr_height != last_height || curr_width != last_width) {
        c.height = curr_height;
        c.width = curr_width;

        last_height = curr_height;
        last_width = curr_width;

        columns = c.width / font_size;
        drops = [];

        for (var x = 0; x < columns; x++) drops[x] = 1;
    }

    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    //ctx.fillStyle = "#5AA509";
    //ctx.fillStyle = "red";
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]

    ctx.font = font_size + "px arial";

    for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > c.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 30);
