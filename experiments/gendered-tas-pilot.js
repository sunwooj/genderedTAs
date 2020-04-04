//(if collecting data with php/server instead of MTurk)

var experimentName = "veridicality-pilot-test";
var submitAddress = "https://web.stanford.edu/~junhongc/cgi-bin/process.php";


// List of stimuli

var stimuliList = shuffle([ 


["al", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p1", "p2"], ["p3", "p3"], ["p4", "p4"] ], 
    ["geo1", "geo2"] 
    ],

["al", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p1", "p2"], ["p3", "p3"], ["p4", "p4"] ], 
    ["jul1", "jul2"]
    ],

["al", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["go", "go"]
    ],

// ["al", ["marry", "painter", "come"], 
//     ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
//     [ ["p3", "p3"], ["p4", "p4"], ["p1", "p2"] ], 
//     ["geo1", "geo2"]
//     ],

["al", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p1", "p2"] ], 
    ["jul1", "jul2"]
    ],

["al", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["go", "go"]
    ],

// ["al", ["painter", "come", "marry"], 
//     ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
//     [ ["p4", "p4"], ["p1", "p2"], ["p3", "p3"] ], 
//     ["geo1", "geo2"]
//     ],

["al", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p4", "p4"], ["p1", "p2"], ["p3", "p3"] ], 
    ["jul1", "jul2"]
    ],

["al", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["go", "go"]
    ],


["gieok", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p1", "p2"] ], 
    ["jul1", "jul2"]
    ],

["gieok", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["go", "go"]
    ],

// ["gieok", ["come", "marry", "painter"], 
//     ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
//     [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
//     ["geo1", "geo2"] 
//     ],

["gieok", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p4", "p4"], ["p1", "p2"], ["p3", "p3"] ], 
    ["jul1", "jul2"] 
    ],

["gieok", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["go", "go"]
    ],

// ["gieok", ["marry", "painter", "come"], 
//     ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
//     [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
//     ["geo1", "geo2"] 
//     ],

["gieok", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p1", "p2"], ["p3", "p3"], ["p4", "p4"] ], 
    ["jul1", "jul2"] 
    ],

["gieok", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["go", "go"] 
    ],

// ["gieok", ["painter", "come", "marry"], 
//     ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
//     [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
//     ["geo1", "geo2"] 
//     ],


["mit", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p4", "p4"], ["p1", "p2"], ["p3", "p3"] ], 
    ["go", "go"]
    ],

["mit", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p4", "p4"], ["p1", "p2"], ["p3", "p3"] ], 
    ["geo1", "geo2"]
    ],

["mit", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["jul1", "jul2"]
    ],

["mit", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p1", "p2"], ["p3", "p3"], ["p4", "p4"] ], 
    ["go", "go"]
    ],

// ["mit", ["marry", "painter", "come"], 
//     ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
//     [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
//     ["geo1", "geo2"]
//     ],

["mit", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["jul1", "jul2"]
    ],

["mit", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p1", "p2"] ], 
    ["go", "go"]
    ],

// ["mit", ["painter", "come", "marry"], 
//     ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
//     [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
//     ["geo1", "geo2"]
//     ],

["mit", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["jul1", "jul2"]
    ],


// ["moreu", ["come", "marry", "painter"], 
//     ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
//     [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
//     ["geo1", "geo2"]
//     ],

["moreu", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p1", "p2"], ["p3", "p3"], ["p4", "p4"] ], 
    ["jul1", "jul2"]
    ],

["moreu", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["go", "go"]
    ],

// ["moreu", ["marry", "painter", "come"], 
//     ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
//     [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
//     ["geo1", "geo2"]
//     ],

["moreu", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p1", "p2"] ], 
    ["jul1", "jul2"]
    ],

["moreu", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["go", "go"]
    ],

// ["moreu", ["painter", "come", "marry"], 
//     ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
//     [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
//     ["geo1", "geo2"]
//     ],

["moreu", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p4", "p4"], ["p1", "p2"], ["p3", "p3"] ], 
    ["jul1", "jul2"]
    ],

["moreu", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["go", "go"]
    ],


["ggameok", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p1", "p2"] ], 
    ["jul1", "jul2"]
    ],

["ggameok", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["go", "go"]
    ],

// ["ggameok", ["come", "marry", "painter"], 
//     ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
//     [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
//     ["geo1", "geo2"]
//     ],

["ggameok", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p4", "p4"], ["p1", "p2"], ["p3", "p3"] ], 
    ["jul1", "jul2"]
    ],

["ggameok", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["go", "go"]
    ],

// ["ggameok", ["marry", "painter", "come"], 
//     ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
//     [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
//     ["geo1", "geo2"]
//     ],

["ggameok", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p1", "p2"], ["p3", "p3"], ["p4", "p4"] ], 
    ["jul1", "jul2"]
    ],

["ggameok", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["go", "go"]
    ],

// ["ggameok", ["painter", "come", "marry"], 
//     ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
//     [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
//     ["geo1", "geo2"]
//     ],


["alanae", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p4", "p4"], ["p1", "p2"], ["p3", "p3"] ], 
    ["go", "go"]
    ],

// ["alanae", ["come", "marry", "painter"], 
//     ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
//     [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
//     ["geo1", "geo2"]
//     ],

["alanae", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["jul1", "jul2"]
    ],

["alanae", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p1", "p2"], ["p3", "p3"], ["p4", "p4"] ], 
    ["go", "go"]
    ],

// ["alanae", ["marry", "painter", "come"], 
//     ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
//     [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
//     ["geo1", "geo2"]
//     ],

["alanae", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["jul1", "jul2"]
    ],

["alanae", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p1", "p2"] ], 
    ["go", "go"]
    ],

// ["alanae", ["painter", "come", "marry"], 
//     ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
//     [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
//     ["geo1", "geo2"]
//     ],

["alanae", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["jul1", "jul2"]
    ],

["nat", ["bop", "bop", "bop"], 
    ["요한이가 어제 식당에 갔다고 생각한다", "요한이가 어제 식당에 갔다고 생각한다", "요한이가 어제 식당에 갔다고 생각한다"],
    [ ["c1", "c1"], ["c1", "c1"], ["c1", "c1"] ], 
    ["ctr", "ctr"]
    ],

["nat", ["unnie", "unnie", "unnie"], 
    ["민아가 희선의 친동생이라고 생각한다", "민아가 희선의 친동생이라고 생각한다", "민아가 희선의 친동생이라고 생각한다"],
    [ ["c2", "c2"], ["c2", "c2"], ["c2", "c2"] ], 
    ["ctr", "ctr"]
    ],

["nat", ["puppy", "puppy", "puppy"], 
    ["민호가 지난주에 고양이를 입양했다고 생각한다", "민호가 지난주에 고양이를 입양했다고 생각한다", "민호가 지난주에 고양이를 입양했다고 생각한다"],
    [ ["c5", "c5"], ["c5", "c5"], ["c5", "c5"] ], 
    ["ctr", "ctr"]
    ],

["nat", ["presch", "presch", "presch"], 
    ["동희가 초등학생이라고 생각한다", "동희가 초등학생이라고 생각한다", "동희가 초등학생이라고 생각한다"],
    [ ["c6", "c6"], ["c6", "c6"], ["c6", "c6"] ], 
    ["ctr", "ctr"]
    ],

["unn", ["like", "like", "like"], 
    ["서희가 누구인지 안다", "서희가 누구인지 안다", "서희가 누구인지 안다"],
    [ ["c7", "c7"], ["c7", "c7"], ["c7", "c7"] ], 
    ["ctr", "ctr"]
    ],

["unn", ["ramen", "ramen", "ramen"], 
    ["별이가 라면을 끓였다고 생각한다", "별이가 라면을 끓였다고 생각한다", "별이가 라면을 끓였다고 생각한다"],
    [ ["c8", "c8"], ["c8", "c8"], ["c8", "c8"] ], 
    ["ctr", "ctr"]
    ],

["unn", ["run", "run", "run"], 
    ["주희가 달리지 않았다고 생각한다", "주희가 달리지 않았다고 생각한다", "주희가 달리지 않았다고 생각한다"],
    [ ["c9", "c9"], ["c9", "c9"], ["c9", "c9"] ], 
    ["ctr", "ctr"]
    ],

["unn", ["bike", "bike", "bike"], 
    ["태리가 자전거가 없다고 생각한다", "태리가 자전거가 없다고 생각한다", "태리가 자전거가 없다고 생각한다"],
    [ ["c10", "c10"], ["c10", "c10"], ["c10", "c10"] ], 
    ["ctr", "ctr"]
    ]


]);



// List of names

var nameList = shuffle([
    "선우", "별이", "희수", "지희", "설아", "숙희", "선아", "화사", "미애", "가희",  
    "지혜", "나래", "은아", "수라", "진아", "영희", "연지", "세아", "민혜", "다라",
    "보라", "솔라", "민지", "연화", "영혜", "정화", "다예", "다희", "설희", "민희", 
    "영지", "예리", "담비", "지수", "수지", "희라", "슬기", "신애", "예지", "효주",
    "도희", "혜주", "성희", "영미", "정희", "연희", "은지", "현서" 
    // "유리", "지나", "마리", "애리", "미라", "영자", "수아", "경아", 
    // "윤아", "나리", "희애", "민하", "미혜", "제아", "혜미"
]);



var data = {}; 
var trialnum = 0;


$(document).ready(function() {
    showSlide("intro");
    $('#gotoInstructions').click(function() {
        var consent = document.getElementById("consent").checked;
        if (consent == true) {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            showSlide('instructions');
            }
        else {
            checkboxwarning = "실험 참여를 위해서는 동의서를 읽어보시고 위 항목을 체크해 동의 의사를 표현해 주시기 바랍니다.";
            $("#checkboxWarning").html(checkboxwarning);
        }
    });

    
    $('#startbutton').click(function() {
        stepExperiment();        
    });
});

function showSlide (slideName) {
    $('.slide').hide();
    $('#' + slideName).show();
}



var itemRandom = Math.floor(Math.random() * 3);
var prosRandom = Math.floor(Math.random() * 3);
var binaryRandom1 = Math.floor(Math.random() * 2);
var binaryRandom2 = Math.floor(Math.random() * 2);



function stepExperiment () {
    if (trialnum == 4) { // end the experiment. 
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        showSlide("language");
        $('#lgsubmit').click(function() {
            var gender = $('.gen:checked').val();
            var age = $('.age:checked').val();
            var region = $('.reg:checked').val();
            var nat = $('.nat:checked').val();

            var gend_com = $('#ogen_com').val();
            gend_com = gend_com.replace (/,/g, "");
            var reg_com = $('#reg_com').val();
            reg_com = reg_com.replace (/,/g, "");
            
            var lang_com = $('#lang_com').val();
            lang_com = lang_com.replace (/,/g, "");
            var contact = $('#contact').val();
            contact = contact.replace (/,/g, "");

            // if ($('.gen:checked').length > 0 && $('.age:checked').length > 0 && $('.reg:checked').length > 0) {

            data.gender = gender;
            data.age = age;
            data.region = region;

            data.gendCom = gend_com;
            data.regCom = reg_com;
            data.langCom = lang_com;
            data.contact = contact;

            showSlide('finish');
            setTimeout(function() { turk.submit(data)}, 1000); 
                
            // } 

            // else {
            //     demoWarning = "실험을 마치기 위해 설문지를 체크해 주십시오.";
            // $("#demoWarning").html(demoWarning);
            // document.body.scrollTop = document.body.scrollHeight;
            // }

            } ) }
 
    else {

        trialnum += 1;

        nameStim = nameList[trialnum-1];
        stimuliVector = stimuliList[trialnum-1];

        verbtype = stimuliVector[0];

        itemVector = stimuliVector[1];
        propVector = stimuliVector[2];
        prosVector = stimuliVector[3];
        compVector = stimuliVector[4];

        item = itemVector[itemRandom];
        proposition = propVector[itemRandom];
        prosody = prosVector[prosRandom][binaryRandom1];
        complementizer = compVector[binaryRandom2];

               
        $(".item_number").html(trialnum);  
        $(".currentName1").html(nameStim);

        $(".veriProposition").html(proposition);


        // Tell HTML which sound file will be played
        document.getElementById('currentAudio1').src = "http://hosting02.snu.ac.kr/~sunwooj/experiments/veridicality/" + item + "-" + verbtype + "-" + complementizer + "-" +prosody + ".wav";


        document.body.scrollTop = document.documentElement.scrollTop = 0;

        showSlide('stage'); 


        $('#continue').click(function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            var natResponse = $('.likertN1:checked').val();
            var veriResponse = $('.likertN2:checked').val();

            var commentResponse = $('#commentBox1').val();
            commentResponse = commentResponse.replace (/,/g, "");


            // Check for valid answers; 
            if  ($('.likertN1:checked').length > 0 && $('.likertN2:checked').length > 0) {
                // ensure that likert options are unticked for the next problems 
                $(".likertN1").prop('checked', false);
                $(".likertN2").prop('checked', false);
                // make continue button available for re-use
                $("#continue").unbind('click');
                // ensure that the comment box is emptied as well
                $(".commentBox").val("");
                // erase warnings 
                $("#warning").html("");

                trial = {};
                trial.item = item;
                trial.verbtype = verbtype;
                trial.complementizer = complementizer;
                trial.prosody = prosody; 

                trial.naturalness = natResponse;
                trial.veridicality = veriResponse;

                trial.comment = commentResponse;

                data["trial" + trialnum] = trial;
            
                // Move on to the next trial
                stepExperiment();
     
            }

            else { // If any of the questions is not answered:
                warning = "다음 단계로 넘어가기 위해 첫번째와 두번째 문제에 답해주십시오.";
                $("#warning").html(warning);
                document.body.scrollTop = document.body.scrollHeight;
            }
        });
    }
}


function chooseRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}


function shuffle(v) { // non-destructive.
    newarray = v.slice(0);
    for (var j, x, i = newarray.length; i; j = parseInt(Math.random() * i), x = newarray[--i], newarray[i] = newarray[j], newarray[j] = x);
    return newarray;
}