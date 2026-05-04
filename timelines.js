// CORPORATE COLORS PALETTE:

const CORP_COLORS = [
    "#FF9900",  // amazon orange
    "#232F3E",  // amazon dark
    "#FFCD11",  // cat yellow
    "#4285F4",  // google blue
    "#EA4335",  // google red
    "#FBBC05",  // google yellow
    "#34A853",  // google green
    "#F25022",  // microsoft red
    "#7FBA00",  // microsoft green
    "#00A4EF",  // microsoft blue
    "#FFB900",  // microsoft yellow
    "#F40009",  // coke red
    "#FFC72C",  // mcdonald yellow
    "#DA291C",  // mcdonald red
    "#76B900",  // nvidia green
    "#1D4F8C",  // boeing blue
    "#00205B",  // boeing dark
    "#E82127",  // tesla red
    "#1A1A1A",  // palantir dark
]

const COLORS_LOTS_BW_ONE_RED = [
    "#FFFFFF",
    "#343541",
    "#000000",
    "#FFFFFF",
    "#343541",
    "#000000",
    "#FFFFFF",
    "#343541",
    "#000000",
    "#FFFFFF",
    "#343541",
    "#000000",
    "#FFFFFF",
    "#343541",
    "#000000",
    "#FFFFFF",
    "#343541",
    "#000000",
    "#FFFFFF",
    "#343541",
    "#000000",
    "#FFFFFF",
    "#343541",
    "#000000",
    "#FFFFFF",
    "#343541",
    "#000000",
    "#FFFFFF",
    "#343541",
    "#000000",
    "#DA291C",
    "#F40009",

]


const COLORS_Bs_RED = [
    "#000000",
    "#1A1A1A",
    "#232F3E",
    "#000000",
    "#1A1A1A",
    "#232F3E",
    "#000000",
    "#1A1A1A",
    "#232F3E",
    "#000000",
    "#1A1A1A",
    "#232F3E",
    "#000000",
    "#1A1A1A",
    "#232F3E",
    "#000000",
    "#1A1A1A",
    "#232F3E",
    "#000000",
    "#1A1A1A",
    "#232F3E",
    "#000000",
    "#1A1A1A",
    "#232F3E",
    "#000000",
    "#1A1A1A",
    "#232F3E",
    "#000000",
    "#1A1A1A",
    "#232F3E",
    "#000000",
    "#1A1A1A",
    "#232F3E",
    "#DA291C",
    "#DA291C",
    "#F40009",



]



//for mapping: 

/* 
C3  = 48
D3  = 50
E3  = 52
F3  = 53
G3  = 55
A3  = 57
B3  = 59
C4  = 60
D4  = 62
E4  = 64
F4  = 65
G4  = 67
A4  = 69
B4  = 71
C5  = 72 
*/

//ARRAYS 


const IMG_CIRCLE_B_W = ["RANDOM", "circleBlack.jpg", "circleWhite.jpg", "circleWhite.jpg", "circleWhite.jpg"]
const IMG_LOGHI = ["RANDOM", "amazon.jpg", "caterpillar.jpg", "google.jpg", "microsoft.jpg", "openAI.jpg",
    "bo.jpg", "coke.jpg", "macdonalds.jpg", "nvidia.jpg", "palantir.jpg",
    "apple.jpg", "bayer.jpg", "danone.jpg", "disney.jpg", "exxon.jpg", "gnamo.jpg", "meta.jpg", "monsanto.jpg", "nestle.jpg", "netflix.jpg", "shell.jpg", "spotify.jpg", "tesla.jpg", "tiktok.jpg", "x.jpg"
]



const IMG_TIMEFREE_1 = [
    "FORWARD", "time0100.png", "time0200.png", "time0300.png", "time0400.png", "time0500.png", "time0600.png", "time0700.png", "time0800.png"
];

const IMG_TIMEJOB = [
    "FORWARD", "time0900.png", "time1000.png", "time1100.png", "time1200.png", "time1300.png", "time1400.png", "time1500.png", "time1600.png", "time1700.png", "time1800.png"
];

const IMG_TIMEFREE_2 = [
    "FORWARD", "time1900.png", "time2000.png", "time2100.png", "time2200.png", "time2300.png", "time2400.png"
];

//TIMELINE    


const TL_DEFAULT = [
    { time: 10000, action: "alternateImage", args: [IMG_CIRCLE_B_W, 10], mod: ["blackCircle", 0], continuous: true },
];
const TL_BLACLHOLE = [
    { time: 10000, action: "alternateImage", args: [IMG_CIRCLE_B_W, 10], mod: ["blackCircle", 0], continuous: true },
    { time: 800, action: "alternateImage", args: [IMG_CIRCLE_B_W, 100], mod: ["blackCircle", 0], continuous: true },
    { time: 1100, action: "alternateImage", args: [IMG_CIRCLE_B_W, 300], mod: ["blackCircle", 0], continuous: true },
];

const TL_LOGHI = [
    { time: 10000, action: "alternateImage", args: [IMG_LOGHI, 100], mod: [null, 1], continuous: true },
    /*     { time: 10000, action: "alternateImage", args: [IMG_LOGHI, 300], mod: [null, 1], continuous: true },
        { time: 10000, action: "alternateImage", args: [IMG_LOGHI, 600], mod: [null, 1], continuous: true },
        { time: 10000, action: "alternateImage", args: [IMG_LOGHI, 1200], mod: [null, 1], continuous: true }, */
]

const TL_TIME = [
    { time: (IMG_TIMEFREE_1.length - 1) * 150, action: "alternateImage", args: [IMG_TIMEFREE_1, 150], mod: ["eightHours", 1], continuous: true },
    { time: (IMG_TIMEJOB.length - 1) * 1210, action: "alternateImage", args: [IMG_TIMEJOB, 1210], mod: [null, 0], continuous: true },
    { time: (IMG_TIMEFREE_2.length - 1) * 150, action: "alternateImage", args: [IMG_TIMEFREE_2, 150], mod: [null, 0], continuous: true },


];

const TL_DETECT = [
    { time: 10000, action: "showVideo", args: ["detectPeopleAbove_002_fixed.mp4"], mod: ["txtReplaceableItems", 1], continuous: true },
    { time: 5000, action: "showVideo", args: ["detectPeopleSub_002_fixed.mp4"], mod: [null, 0], continuous: true },
    { time: 5000, action: "showVideo", args: ["detectPeopleAbove_002_fixed.mp4"], mod: ["txtReplaceableItems", 0], continuous: true },
    { time: 10000, action: "showVideo", args: ["detectPeopleSub_002_fixed.mp4"], mod: [null, 0], continuous: true },
    { time: 10000, action: "showVideo", args: ["detectPeopleAbove_002_fixed.mp4"], mod: ["txtReplaceableItems", 0], continuous: true },
    { time: 10000, action: "showVideo", args: ["detectPeopleSub_002_fixed.mp4"], mod: [null, 0], continuous: true },
    { time: 10000, action: "showVideo", args: ["detectPeopleAbove_002_fixed.mp4"], mod: ["txtYouAreMagenta", 0], continuous: true },
    { time: 10000, action: "showVideo", args: ["detectPeopleSub_002_fixed.mp4"], mod: [null, 0], continuous: true },
    { time: 10000, action: "alternateImage", args: [["circleBlack.jpg", "circleWhite.jpg"], 100], mod: [null, 1], continuous: true },
];

const TL_PAVE = [
    { time: 2000, action: "pave", args: [10000, COLORS_Bs_RED], mod: [null, 0], continuous: true },
    { time: 2000, action: "pave", args: [500, COLORS_Bs_RED], mod: [null, 0], continuous: true }
]

const MIDI_MAP = {
    48: TL_DEFAULT,      // C3
    50: TL_DETECT,     // D3
    52: TL_LOGHI,
    53: TL_BLACLHOLE,
    55: TL_TIME,
    57: TL_PAVE
}