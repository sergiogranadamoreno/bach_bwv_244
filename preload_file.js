//########################################
//# This page contains score data, timing data and the media file path. Save it as a text file in
//# the same folder as abcweb.html. Abcweb preloads score and media when it is opened with the
//# file name as parameter in the url, for example: http://your.domain.org/abcweb.html?file_name
//# Also works locally with file:///path/to/abcweb.html?file_name
//# **** You have to correct the path to the media file below! (media_file="...";) ****
//########################################
//#
media_file = "Bach BWV 244 - Bach BWV 244-63 O Haupt voll Blut und Wunden.mp3";
offset_js = 0.00;
opt = {"jump":0,"no_menu":0,"repufld":0,"noplyr":0,"nocsr":0,"media_height":"","btns":1,"ipadr":"","mstr":0,"autscl":0,"ctrmed":0,"ctrnot":0,"lncsr":0,"opacity":0.2,"synbox":0,"speed":1,"top_margin":0,"yubvid":"","nomed":0,"delay":0,"repskip":0,"spdctl":0,"lopctl":0,"metro":0};
times_arr = [[0.00,1.50,7.00,13.00,19.00,25.00,30.50,37.20,43.20,49.20],
[49.20,55.20,61.80,67.80,73.80,80.20,88.20,94.70,100.70]];
abc_arr = ["X:1",
"T:J.S. Bach O Haupt Voll Blut Und Wunden",
"%%scale 0.64",
"%%pagewidth 21.00cm",
"%%leftmargin 1.00cm",
"%%rightmargin 1.00cm",
"%%score [ ( 1 2 ) ( 3 4 ) ]",
"L:1/4",
"Q:1/4=40",
"M:4/4",
"I:linebreak $",
"K:F",
"V:1 treble nm=\"SA\"",
"V:2 treble ",
"V:3 bass nm=\"TB\"",
"V:4 bass ",
"V:1",
" A | d c B A | G2 !fermata!A e | f f e/d/ e | !fermata!d3 A | d c B A | G2 !fermata!A e |$ %7",
" f f e/d/ e | !fermata!d3 f | e/d/ c d e | f2 !fermata!f c | d c B/A/ B | !fermata!A3 f | %13",
" e/f/ g f e |$ d2 !fermata!e A | B A G c | !fermata!A3 z |] %17",
"V:2",
" F | F/G/ A D/E/ F | F E F A | A A A A/G/ | F3 F | F/G/ A D/E/ F | F E F A |$ A A A A/G/ | F3 A | %9",
" G G/F/ F B | B A/G/ A A | A/G/ A G/^F/ G | ^F3 G | G c c c |$ c =B c F/E/ | D/E/ F F E | F3 z |] %17",
"V:3",
" D | D/E/ F G C | D C C E | E D D ^C | A,3 D | D/E/ F G C | D C C E |$ E D D ^C | A,3 D/C/ | %9",
" B, C C B,/C/ | D C/B,/ C F/_E/ | D D D D | D3 D | C/D/ E F G |$ A G G C | B, C C G,/C/ | C3 z |] %17",
"V:4",
" D/C/ | B, A, G, F, | B,, C, !fermata!F, ^C, | D,/E,/F,/G,/ A, A,, | !fermata!D,3 D/C/ | %5",
" B, A, G, F, | B,, C, !fermata!F, ^C, |$ D,/E,/F,/G,/ A, A,, | !fermata!D,3 D, | G, A, B,/A,/ G, | %10",
" F,2 !fermata!F, F, | B, ^F, G, G,, | D,3 =B,, | C, E, A,/=B,/ C |$ F, G, !fermata!C, F, | %15",
" G, A,/B,/ C C, | !fermata!F,3 z |] %17",
""];
abc_enc = [];
