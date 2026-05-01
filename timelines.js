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


const IMG_CIRCLE_B_W = ["circleBlack.jpg", "circleWhite.jpg"]
const IMG_LOGHI = ["RANDOM", "amazon.jpg", "caterpillar.jpg", "google.jpg", "microsoft.jpg", "openAI.jpg",
    "bo.jpg", "coke.jpg", "macdonalds.jpg", "nvidia.jpg", "palantir.jpg"]

const TL_DEFAULT = [
    { time: 10000, action: "alternateImage", args: [IMG_CIRCLE_B_W, 10], mod: ["blackCircle", 0], continuous: true },

]

const TL_LOGHI = [
    { time: 10000, action: "alternateImage", args: [IMG_LOGHI, 100], mod: [null, 1], continuous: true },
    /*     { time: 10000, action: "alternateImage", args: [IMG_LOGHI, 300], mod: [null, 1], continuous: true },
        { time: 10000, action: "alternateImage", args: [IMG_LOGHI, 600], mod: [null, 1], continuous: true },
        { time: 10000, action: "alternateImage", args: [IMG_LOGHI, 1200], mod: [null, 1], continuous: true }, */
]

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

const MIDI_MAP = {
    48: TL_DEFAULT,      // C3
    50: TL_DETECT,     // D3
    52: TL_LOGHI,

}