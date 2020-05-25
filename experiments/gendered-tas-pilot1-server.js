//(Uncomment below if collecting data with php/server)

// var experimentName = "gendered-tas-pilot1";
// var submitAddress = "http://hosting02.snu.ac.kr/~sunwooj/cgi-bin/process2.php";


// List of stimuli

var stimuliList = shuffle([

    ["spkr", ["F-F", "F-M", "M-F", "M-M"], 
        ["noona", "hyung", "unnie", "oppa"], 
        ["누나", "형", "언니", "오빠"], 
        ["여성", "여성", "남성", "남성"], ["여성", "남성", "여성", "남성"] 
    ],

    ["hrer", ["F-M", "M-F", "M-M", "F-F"], 
        ["unnie", "hyung", "noona", "oppa"],
        ["언니", "형", "누나", "오빠"],
        ["여성", "남성", "남성", "여성"], ["남성", "여성", "남성", "여성"]
    ],

    ["both", ["M-F", "M-M", "F-F", "F-M"], 
        ["oppa", "unnie", "hyung", "noona"], 
        ["오빠", "언니", "형", "누나"],
        ["남성", "남성", "여성", "여성"], ["여성", "남성", "여성", "남성"]
    ],

    ["neit", ["M-M", "F-F", "F-M", "M-F"], 
        ["hyung", "unnie", "oppa", "noona"], 
        ["형", "언니", "오빠", "누나"], 
        ["남성", "여성", "여성", "남성"], ["남성", "여성", "남성", "여성"]
    ],

    ["na", ["F-F", "F-M", "M-F", "M-M"], 
        ["na", "na", "na", "na"], 
        ["OO씨", "OO씨", "OO씨", "OO씨"],
        ["여성", "여성", "남성", "남성"], ["여성", "남성", "여성", "남성"]
    ]

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



var itemRandom = Math.floor(Math.random() * 4);



function stepExperiment () {
    if (trialnum == 5) { // end the experiment. 
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        showSlide("language");
        $('#lgsubmit').click(function() {
            var ptgender = $('input[name=ptgen]:checked').val();
            var ptage = $('input[name=ptage]:checked').val();
            var region = $('input[name=ptreg]:checked').val();

            var gend_com = $('#ptgen_com').val();
            gend_com = gend_com.replace (/,/g, "");
            
            var lang_com = $('#lang_com').val();
            lang_com = lang_com.replace (/,/g, "");
            var gen_com = $('#gen_com').val();
            gen_com = gen_com.replace (/,/g, "");
            var contact = $('#contact').val();
            contact = contact.replace (/,/g, "");

            // if ($('.gen:checked').length > 0 && $('.age:checked').length > 0 && $('.reg:checked').length > 0) {

            data.ptgender = ptgender;
            data.ptage = ptage;
            data.region = region;

            data.gendCom = gend_com;
            data.langCom = lang_com;
            data.generalCom = gen_com;
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
        stimuliVector = stimuliList[trialnum-1];

        matchtype = stimuliVector[0];

        genderVector = stimuliVector[1];
        termEVector = stimuliVector[2];
        termKVector = stimuliVector[3];
        spkrgenVector = stimuliVector[4];
        addgenVector = stimuliVector[5];

        gender = genderVector[itemRandom];
        termE = termEVector[itemRandom];
        termK = termKVector[itemRandom];
        spGen = spkrgenVector[itemRandom];
        addGen = addgenVector[itemRandom];

               
        $(".item_number").html(trialnum); 
        $(".currentTA").html(termK); 
        $(".currentSpGen").html(spGen);
        $(".currentAddGen").html(addGen);


        // Tell HTML which image file will be played
        document.getElementById('currentPicture').src = "https://sunwooj.github.io/genderedTAs/images/" + gender + "-" + matchtype + "-" + termE + ".png";

        document.body.scrollTop = document.documentElement.scrollTop = 0;

        showSlide('stage'); 
        $('#responseForm1').show();   
        $('#responseForm2').hide();   
        $('#responseForm3').hide();  

        $('#nextquestion').click(function () {
            if ($('input[name=tultul]:checked').length > 0 
            && $('input[name=aegyo]:checked').length > 0
            && $('input[name="extro"]:checked').length > 0
            && $('input[name="polite"]:checked').length > 0
            && $('input[name="feminine"]:checked').length > 0 
            && $('input[name="masculine"]:checked').length > 0 
            && $('input[name="spage"]:checked').length > 0) {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                $('#responseForm1').hide();
                $('#responseForm2').show();
                $('#responseForm3').hide();
            }
            else {
                warning1 = "다음 질문들로 넘어가기 위해 질문 1-2 항목들을 모두 체크해 주십시오.";
                $("#warning1").html(warning1);
                document.body.scrollTop = document.body.scrollHeight;
            }
        });

        $('#nextquestion2').click(function () {
            if ($('input[name=sibling]:checked').length > 0 
            && $('input[name=partner]:checked').length > 0
            && $('input[name="clfriend"]:checked').length > 0 
            && $('input[name="wrkfriend"]:checked').length > 0 
            && $('input[name="acquaint"]:checked').length > 0 
            && $('input[name="strange"]:checked').length > 0 
            && $('input[name="closeness"]:checked').length > 0 
            && $('input[name="affinity"]:checked').length > 0 
            && $('input[name="higher"]:checked').length > 0) {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                $('#responseForm1').hide();
                $('#responseForm2').hide();
                $('#responseForm3').show();
            }
            else {
                warning2 = "다음 질문들로 넘어가기 위해 질문 4-5 항목들을 모두 체크해 주십시오.";
                $("#warning2").html(warning2);
                document.body.scrollTop = document.body.scrollHeight;
            }
        });


        $('#continue').click(function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            var tultulResponse = $('input[name="tultul"]:checked').val();
            var aegyoResponse = $('input[name="aegyo"]:checked').val();
            var extroResponse = $('input[name="extro"]:checked').val();
            var politeResponse = $('input[name="polite"]:checked').val();
            var femResponse = $('input[name="feminine"]:checked').val();
            var masResponse = $('input[name="masculine"]:checked').val();

            var spageResponse = $('input[name="spage"]:checked').val();

            var siblingResponse = $('input[name="sibling"]:checked').val();
            var partnerResponse = $('input[name="partner"]:checked').val();
            var clfriendResponse = $('input[name="clfriend"]:checked').val();
            var acquaintResponse = $('input[name="acquaint"]:checked').val();
            var strangeResponse = $('input[name="strange"]:checked').val();
            var wrkfriendResponse = $('input[name="wrkfriend"]:checked').val();

            var closeResponse = $('input[name="closeness"]:checked').val();
            var affinResponse = $('input[name="affinity"]:checked').val();
            var highResponse = $('input[name="higher"]:checked').val();

            var freqResponse = $('input[name="frequency"]:checked').val();
            var freqcomResponse = $('#commentBox1').val();
            freqcomResponse = freqcomResponse.replace (/,/g, "");
            var commentResponse = $('#commentBox2').val();
            commentResponse = commentResponse.replace (/,/g, "");


            // Check for valid answers; 
            if ($('input[name=frequency]:checked').length > 0) {
                // Log  trial data
                trial = {};

                trial.matchtype = matchtype;
                trial.gender = gender;
                trial.term = termE;

                trial.tultul = tultulResponse;
                trial.aegyo = aegyoResponse;
                trial.extro = extroResponse;
                trial.polite = politeResponse;
                trial.feminine = femResponse;
                trial.masculine = masResponse;

                trial.spage = spageResponse; 

                var checkboxes = document.getElementsByName('spvoc');
                var spvocvals = "";
                for (var i = 0, n = checkboxes.length; i < n; i++) {
                    if (checkboxes[i].checked) {
                    spvocvals += "-" + checkboxes[i].value;
                    }
                    else {
                    spvocvals += "-NA";
                    }
                }

                trial.spvoc = spvocvals;

                trial.sibling = siblingResponse;
                trial.partner = partnerResponse;
                trial.clfriend = clfriendResponse;
                trial.wrkfriend = wrkfriendResponse;
                trial.acquaintance = acquaintResponse;
                trial.stranger = strangeResponse;

                trial.closeness = closeResponse;
                trial.affinity = affinResponse;
                trial.higher = highResponse;

                trial.frequency = freqResponse;
                trial.freqcomment = freqcomResponse;
                trial.comment = commentResponse;

                data["trial" + trialnum] = trial;

                // ensure that likert options are unticked for the next problems 
                $(".radio1").prop('checked', false);
                $(".radio2").prop('checked', false);
                $(".radio3").prop('checked', false);
                $(".checkbox1").prop('checked', false);

                // make continue button available for re-use
                $("#continue").unbind('click');
                // ensure that the comment box is emptied as well
                $(".commentBox").val("");
                // erase warnings 
                $("#warning1").html("");
                $("#warning2").html("");
                $("#warning3").html("");
            
                // Move on to the next trial
                stepExperiment();

            }

            else { // If any of the questions is not answered:
                warning3 = "다음 단계로 넘어가기 위해 질문 6에 답해주십시오.";
                $("#warning3").html(warning2);
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