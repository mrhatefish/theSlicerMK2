//in corso d opera generato con gemini
//fft ad ottave su seganle di ingresso della motu

let mic, fft;

function setup() {
    createCanvas(windowWidth, 400);
    mic = new p5.AudioIn();

    // MOTU Selection Logic
    mic.getSources((devices) => {
        devices.forEach((d, i) => {
            if (d.label.includes('MOTU')) mic.setSource(i);
        });
        mic.start();
    });

    fft = new p5.FFT(0.8, 1024);
    fft.setInput(mic);
}

function draw() {
    background(20);
    fft.analyze();

    // 1. Get Logarithmic Averages (this groups frequencies into octaves)
    // This is much more accurate for 'Treble' than the standard string.
    let octaves = fft.logAverages(fft.getOctaveBands(3)); // 3 bands per octave

    // 2. Identify the Treble region (the end of the octaves array)
    let trebleIndex = octaves.length - 1;
    let highEnergy = octaves[trebleIndex];

    // 3. Apply a psychoacoustic boost 
    // High frequencies naturally have less 'power' but high 'perceived' volume.
    let visualHigh = map(highEnergy, 0, 255, 0, height);

    // Visualization of all octave bands
    let w = width / octaves.length;
    for (let i = 0; i < octaves.length; i++) {
        let h = map(octaves[i], 0, 255, 0, height - 100);

        // Color shift from Red (bass) to Blue (treble)
        fill(map(i, 0, octaves.length, 255, 50), 100, 250);
        rect(i * w, height - h, w - 2, h);
    }

    fill(255);
    text("OCTAVE BAND ANALYSIS (Logarithmic)", 20, 30);
}

function mousePressed() { userStartAudio(); }
