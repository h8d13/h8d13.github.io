(function() {
  const vaseArt = `
              ░░░░░░░░░░          ░░░░░░░░    ░░▒▒▒▒░░░░
      ░░▒▒▒▒▒▒▒▒▒▒▒▒░░░░          ░░░░░░  ░░░░▒▒▓▓▒▒▒▒▒▒▒▒▒▒░░
    ░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒          ░░░░░░░░░░▒▒▒▒▒▒▒▒▓▓▓▓▒▒▒▒░░░░
    ░░▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░        ░░░░░░░░░░▒▒▒▒▓▓▓▓▒▒▒▒▓▓▓▓▒▒
      ░░▒▒▓▓██▓▓▓▓▓▓▒▒▒▒░░      ░░▒▒░░░░▒▒▒▒▒▒▒▒▓▓████▓▓▓▓░░
        ░░░░░░░░░░▒▒▒▒▒▒▒▒▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░
          ░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░
            ░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒░░▒▒░░░░
            ░░░░░░░░░░▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▓▓▒▒░░░░▒▒▒▒░░░░
              ░░░░▒▒▓▓▒▒▒▒▒▒▒▒▓▓▓▓▓▓▒▒▒▒▒▒▓▓▒▒░░▒▒░░░░
                ▒▒▒▒░░░░▒▒▓▓▓▓▒▒▒▒▒▒▓▓▓▓▒▒░░▒▒▒▒░░░░
                ░░░░░░▓▓▓▓▒▒░░▒▒▓▓▓▓▒▒▒▒▓▓▓▓░░░░▒▒
                  ░░▒▒▒▒░░▒▒▓▓▓▓▒▒▒▒▒▒▓▓▒▒░░▒▒▓▓░░
                  ░░▒▒░░▒▒▓▓▒▒▒▒▒▒▓▓▓▓▒▒░░▒▒▒▒░░
                  ░░░░▒▒▒▒▒▒░░░░▓▓▓▓▒▒▒▒▓▓▒▒░░▒▒
                    ░░▒▒▒▒░░▒▒▓▓▒▒▒▒▒▒▓▓▒▒░░▓▓░░
                    ░░▒▒░░░░▓▓▒▒▒▒▒▒▓▓▒▒░░▓▓▒▒░░
                    ░░▒▒░░▓▓▒▒▒▒▒▒▓▓▒▒▒▒▒▒▓▓░░░░
                    ░░░░▒▒▓▓▒▒▒▒▓▓▓▓▒▒▒▒▓▓░░▒▒
                    ░░░░▒▒▒▒▒▒▒▒▓▓▒▒▒▒▓▓▒▒░░▒▒
                    ░░░░▓▓▒▒▒▒▓▓▓▓▒▒▒▒▓▓▒▒▒▒▒▒
                      ▒▒▓▓▒▒▒▒▓▓▒▒▒▒▓▓▒▒▒▒▓▓░░
                    ░░▒▒▒▒▒▒▓▓▓▓▒▒▓▓▓▓▒▒▒▒▓▓▒▒
                      ▓▓▒▒▓▓▓▓▒▒▓▓▓▓▓▓▒▒▓▓▒▒▒▒
                      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▓▓▒▒▓▓
                    ░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                    ▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░
                    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒
                  ░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▓▓▓▓▓▓▓▓▓▓▒▒
                  ▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▒▒▒▒▓▓▓▓▒▒░░
                ░░▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒░░▓▓▓▓▒▒▒▒
              ░░▒▒▓▓▓▓▒▒▓▓▒▒▒▒▒▒▒▒▒▒░░░░░░▓▓▓▓▒▒▓▓░░
            ░░▓▓▓▓▒▒▓▓▒▒▓▓▒▒░░░░▒▒▒▒▒▒  ░░▓▓▓▓▒▒▓▓▒▒░░
          ░░▓▓▒▒▒▒▓▓▓▓▒▒▒▒░░░░▒▒▒▒▒▒░░░░▒▒▓▓▒▒▒▒▓▓▓▓░░▒▒
        ░░▒▒▒▒▒▒▓▓▓▓▒▒░░  ░░▒▒▒▒▒▒░░    ▒▒▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒
      ░░▒▒░░▓▓▓▓▓▓▒▒░░  ░░▒▒▒▒▒▒░░    ░░▒▒▒▒░░░░▓▓▓▓▒▒▒▒▓▓░░
      ░░▒▒▓▓▓▓▒▒▒▒░░░░░░▒▒▒▒▒▒░░    ░░▒▒▒▒▒▒  ░░▓▓▓▓▒▒▒▒▒▒▓▓░░
    ▒▒▓▓▓▓▓▓▒▒▒▒░░▒▒▒▒▒▒▒▒░░      ░░▒▒▒▒░░    ░░▓▓▓▓▒▒▒▒▒▒▓▓▒▒░░
  ▒▒▓▓▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░      ░░▒▒▒▒░░      ▒▒▓▓▒▒▒▒▒▒▒▒▓▓▒▒░░▒▒
  ▒▒▒▒▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒░░    ░░▒▒▒▒▒▒░░      ▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▒▒▒▒░░
░░▒▒▒▒▓▓▓▓▓▓▓▓▒▒▒▒▒▒░░░░░░▒▒▒▒▒▒▒▒░░      ░░▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▒▒▒▒▓▓
▒▒▒▒▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒░░░░▒▒▒▒▒▒▒▒░░      ░░▒▒▒▒▒▒▒▒░░▒▒▒▒▓▓▓▓▓▓▒▒▓▓▓▓░░
░░░░▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░  ░░▒▒▒▒▒▒▒▒░░▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░
░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▒▒▒▒░░░░░░░░▒▒▒▒▒▒▒▒▒▒░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒
▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░
▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▓▓▓▓▒▒▒▒▒▒░░▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒
▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒
░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒
░░▒▒▓▓▓▓▓▓▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒▓▓▓▓▓▓▓▓▒▒▒▒▒▒░░
░░▒▒▓▓▓▓▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▓▓▒▒▒▒▓▓▒▒▓▓▓▓▓▓▒▒▒▒▒▒▒▒▓▓▓▓▓▓▒▒▒▒▒▒▒▒░░
░░▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒
  ▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒░░
  ░░▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░▒▒▒▒▓▓▓▓▓▓▓▓▒▒▒▒▒▒▓▓▓▓▒▒░░
    ▒▒▒▒▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▒▒▒▒▒▒▓▓▓▓▒▒▒▒
    ▒▒▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▒▒▒▒▒▒▓▓▓▓▒▒▒▒
      ▓▓▓▓▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▓▓▓▓▓▓▒▒▒▒░░
      ░░▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▓▓▓▓▓▓▒▒▓▓░░
        ░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒
  ░░░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░
░░░░░░░░▒▒▒▒▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░
░░░░░░▒▒▒▒▒▒▓▓████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████▓▓▓▓▓▓▒▒▒▒▒▒░░░░░░░░░░
░░░░░░▒▒▒▒▓▓▓▓▓▓██████████████████████████████████▓▓▓▓▓▓▒▒▒▒░░░░░░░░░░
  ░░░░░░▒▒▒▒▓▓▓▓▓▓▓▓▓▓██▓▓██████████████████▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░░░░░░░
      ░░░░░░▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒░░░░░░░░░░░░       `;

  const display = document.getElementById('vaseDisplay');
  const lines = vaseArt.split('\n');
  let time = 0;
  let sortTriggers = [];
  let flickerTriggers = [];
  let glitchBlocks = [];
  let meltTriggers = [];

  // Initialize random sort triggers
  for (let i = 0; i < 8; i++) {
    sortTriggers.push({
      startTime: Math.random() * 10,
      duration: 1.5 + Math.random() * 2,
      row: Math.floor(Math.random() * lines.length),
      intensity: 0.3 + Math.random() * 0.4
    });
  }

  // Initialize hologram flicker triggers
  for (let i = 0; i < 3; i++) {
    flickerTriggers.push({
      startTime: Math.random() * 15,
      duration: 0.1 + Math.random() * 0.2,
      intensity: 0.5 + Math.random() * 0.5
    });
  }

  // Initialize glitch block triggers
  for (let i = 0; i < 5; i++) {
    glitchBlocks.push({
      startTime: Math.random() * 12,
      duration: 0.15 + Math.random() * 0.25,
      x: Math.floor(Math.random() * 60),
      y: Math.floor(Math.random() * lines.length),
      width: 10 + Math.floor(Math.random() * 20),
      height: 3 + Math.floor(Math.random() * 8),
      type: Math.random() > 0.5 ? 'invert' : 'shift'
    });
  }

  // Initialize melt triggers
  for (let i = 0; i < 4; i++) {
    meltTriggers.push({
      startTime: Math.random() * 20,
      duration: 3 + Math.random() * 2,
      column: Math.floor(Math.random() * 80),
      width: 5 + Math.floor(Math.random() * 10)
    });
  }

  // Initialize data stream effect
  let dataStreams = [];
  for (let i = 0; i < 6; i++) {
    dataStreams.push({
      startTime: Math.random() * 15,
      duration: 2 + Math.random() * 3,
      column: Math.floor(Math.random() * 80),
      speed: 0.3 + Math.random() * 0.5
    });
  }

  // Get character density for sorting
  function getCharDensity(ch) {
    if (ch === '█') return 4;
    if (ch === '▓') return 3;
    if (ch === '▒') return 2;
    if (ch === '░') return 1;
    return 0;
  }

  // Invert character density
  function invertChar(ch) {
    if (ch === '█') return '░';
    if (ch === '▓') return '▒';
    if (ch === '▒') return '▓';
    if (ch === '░') return '█';
    return ch;
  }

  // Pixel sort a line of text
  function pixelSort(lineStr, intensity, reverse = false) {
    if (intensity < 0.1) return lineStr;

    const chars = lineStr.split('');
    const result = [...chars];

    let start = -1;

    for (let i = 0; i < chars.length; i++) {
      if (chars[i] !== ' ' && start === -1) {
        start = i;
      } else if ((chars[i] === ' ' || i === chars.length - 1) && start !== -1) {
        const end = chars[i] === ' ' ? i : i + 1;
        const segmentLength = end - start;

        if (segmentLength > 3 && Math.random() < intensity) {
          const segment = chars.slice(start, end);
          segment.sort((a, b) => {
            const diff = getCharDensity(a) - getCharDensity(b);
            return reverse ? -diff : diff;
          });

          for (let j = 0; j < segment.length; j++) {
            result[start + j] = segment[j];
          }
        }

        start = -1;
      }
    }

    return result.join('');
  }

  function renderVase() {
    const breathSpeed = 0.5;
    const breathPhase = Math.sin(time * breathSpeed) * 0.5 + 0.5;

    const pulseSpeed = 1.2;
    const pulsePhase = Math.sin(time * pulseSpeed);

    const shimmerSpeed = 2.5;
    const detailNoise = Math.sin(time * 0.3) * 0.5 + 0.5;

    // Update sort triggers
    sortTriggers.forEach(trigger => {
      const elapsed = time - trigger.startTime;
      if (elapsed > trigger.duration + 4) {
        trigger.startTime = time + Math.random() * 6 + 2;
        trigger.duration = 1.5 + Math.random() * 2;
        trigger.row = Math.floor(Math.random() * lines.length);
        trigger.intensity = 0.3 + Math.random() * 0.4;
      }
    });

    // Update flicker triggers
    flickerTriggers.forEach(trigger => {
      const elapsed = time - trigger.startTime;
      if (elapsed > trigger.duration + 3) {
        trigger.startTime = time + Math.random() * 5 + 2;
        trigger.duration = 0.1 + Math.random() * 0.2;
        trigger.intensity = 0.5 + Math.random() * 0.5;
      }
    });

    // Update glitch blocks
    glitchBlocks.forEach(block => {
      const elapsed = time - block.startTime;
      if (elapsed > block.duration + 2) {
        block.startTime = time + Math.random() * 4 + 1;
        block.duration = 0.15 + Math.random() * 0.25;
        block.x = Math.floor(Math.random() * 60);
        block.y = Math.floor(Math.random() * lines.length);
        block.width = 10 + Math.floor(Math.random() * 20);
        block.height = 3 + Math.floor(Math.random() * 8);
        block.type = Math.random() > 0.5 ? 'invert' : 'shift';
      }
    });

    // Update melt triggers
    meltTriggers.forEach(trigger => {
      const elapsed = time - trigger.startTime;
      if (elapsed > trigger.duration + 5) {
        trigger.startTime = time + Math.random() * 8 + 4;
        trigger.duration = 3 + Math.random() * 2;
        trigger.column = Math.floor(Math.random() * 80);
        trigger.width = 5 + Math.floor(Math.random() * 10);
      }
    });

    // Update data streams
    dataStreams.forEach(stream => {
      const elapsed = time - stream.startTime;
      if (elapsed > stream.duration + 3) {
        stream.startTime = time + Math.random() * 5 + 2;
        stream.duration = 2 + Math.random() * 3;
        stream.column = Math.floor(Math.random() * 80);
        stream.speed = 0.3 + Math.random() * 0.5;
      }
    });

    // Check for active flicker
    let flickerActive = false;
    let flickerIntensity = 0;
    flickerTriggers.forEach(trigger => {
      const elapsed = time - trigger.startTime;
      if (elapsed >= 0 && elapsed < trigger.duration) {
        flickerActive = true;
        const progress = elapsed / trigger.duration;
        flickerIntensity = Math.max(flickerIntensity, trigger.intensity * Math.sin(progress * Math.PI * 10));
      }
    });

    // Build melt state for all columns
    const meltState = {};
    meltTriggers.forEach(trigger => {
      const elapsed = time - trigger.startTime;
      if (elapsed >= 0 && elapsed < trigger.duration) {
        const progress = elapsed / trigger.duration;
        const meltDistance = Math.floor(progress * 15);

        for (let col = trigger.column; col < Math.min(trigger.column + trigger.width, 100); col++) {
          if (!meltState[col] || meltState[col] < meltDistance) {
            meltState[col] = meltDistance;
          }
        }
      }
    });

    let output = lines.map((line, y) => {
      const yOffset = y / lines.length;

      // Calculate water level - bottom 1/4 of the vase
      const waterStartLine = Math.floor(lines.length * 0.75);
      const isInWater = y >= waterStartLine;

      // Apply shimmer and breathing effects to characters
      let processedChars = line.split('').map((ch, x) => {
        const shimmer = Math.sin(time * shimmerSpeed - yOffset * 8);
        const edgeGlow = Math.sin(time * 2 + x * 0.1) * 0.2 + 0.8;

        const microShimmer = Math.sin(time * 4 + x * 0.3 + y * 0.2) * 0.3;
        const depthVariation = Math.cos(time * 1.5 - x * 0.05) * 0.2;

        // Hologram flicker effect
        if (flickerActive && Math.random() < flickerIntensity * 0.3) {
          return ' ';
        }

        // If not in water, apply minimal effects
        if (!isInWater) {
          if (ch === '░') {
            if (shimmer > 0.85) return '▒';
            return '░';
          }

          if (ch === '▒') {
            if (shimmer > 0.9) return '▓';
            if (shimmer < -0.85) return '░';
            return '▒';
          }

          if (ch === '▓') {
            if (shimmer > 0.95) return '█';
            if (shimmer < -0.9) return '▒';
            return '▓';
          }

          if (ch === '█') {
            if (shimmer < -0.95) return '▓';
            return '█';
          }

          return ch;
        }

        // In water - apply full effects
        if (ch === '░') {
          if (shimmer > 0.7 || microShimmer > 0.25) return '▒';
          if (breathPhase > 0.7 && pulsePhase > 0) return '▒';
          if (detailNoise > 0.8 && microShimmer > 0.15) return '▒';
          return '░';
        }

        if (ch === '▒') {
          if (shimmer > 0.8 || (microShimmer > 0.2 && depthVariation > 0.1)) return '▓';
          if (shimmer < -0.7 && microShimmer < -0.2) return '░';
          if (breathPhase > 0.8) return '▓';
          if (detailNoise > 0.85) return '▓';
          return '▒';
        }

        if (ch === '▓') {
          if (shimmer > 0.85 || (microShimmer > 0.25 && edgeGlow > 0.85)) return '█';
          if (shimmer < -0.8 && microShimmer < -0.15) return '▒';
          if (breathPhase > 0.85 && edgeGlow > 0.9) return '█';
          if (depthVariation > 0.15 && detailNoise > 0.75) return '█';
          return '▓';
        }

        if (ch === '█') {
          if (shimmer < -0.85 && microShimmer < -0.2) return '▓';
          if (depthVariation < -0.15) return '▓';
          return '█';
        }

        return ch;
      });

      // Apply melt effect - only in water area
      if (isInWater) {
        for (let col in meltState) {
          const meltDistance = meltState[col];
          const colNum = parseInt(col);

          if (colNum < processedChars.length) {
            const sourceY = y - meltDistance;
            if (sourceY >= waterStartLine && sourceY < lines.length) {
              const sourceChar = lines[sourceY].charAt(colNum);
              const currentChar = processedChars[colNum];

              if (sourceChar !== ' ' && getCharDensity(sourceChar) > getCharDensity(currentChar)) {
                processedChars[colNum] = sourceChar;
              }
            }
          }
        }
      }

      let processedLine = processedChars.join('');

      // Apply pixel sorting effects - only in water
      if (isInWater) {
        sortTriggers.forEach(trigger => {
          const elapsed = time - trigger.startTime;
          if (elapsed >= 0 && elapsed < trigger.duration) {
            const progress = elapsed / trigger.duration;
            const easedProgress = Math.sin(progress * Math.PI);

            const rowDistance = Math.abs(y - trigger.row);
            if (rowDistance < 8) {
              const falloff = 1 - (rowDistance / 8);
              const effectIntensity = trigger.intensity * falloff * easedProgress;

              const reverse = (trigger.startTime * 1000) % 2 < 1;
              processedLine = pixelSort(processedLine, effectIntensity, reverse);
            }
          }
        });
      }

      // Apply data stream effect - only in water
      if (isInWater) {
        dataStreams.forEach(stream => {
          const elapsed = time - stream.startTime;
          if (elapsed >= 0 && elapsed < stream.duration) {
            const streamProgress = (elapsed * stream.speed * 10) % (lines.length - waterStartLine);
            const streamY = waterStartLine + Math.floor(streamProgress);

            if (Math.abs(y - streamY) < 3 && stream.column < processedLine.length) {
              const chars = processedLine.split('');
              const falloff = 1 - (Math.abs(y - streamY) / 3);

              if (Math.random() < falloff * 0.7) {
                const densities = ['░', '▒', '▓', '█'];
                const targetDensity = Math.floor(falloff * 4);
                if (chars[stream.column] !== ' ') {
                  chars[stream.column] = densities[Math.min(targetDensity, 3)];
                }
              }

              processedLine = chars.join('');
            }
          }
        });
      }

      return processedLine;
    }).join('\n');

    // Apply glitch blocks to the entire output
    glitchBlocks.forEach(block => {
      const elapsed = time - block.startTime;
      if (elapsed >= 0 && elapsed < block.duration) {
        const outputLines = output.split('\n');

        for (let y = block.y; y < Math.min(block.y + block.height, outputLines.length); y++) {
          const chars = outputLines[y].split('');

          for (let x = block.x; x < Math.min(block.x + block.width, chars.length); x++) {
            if (block.type === 'invert') {
              chars[x] = invertChar(chars[x]);
            } else if (block.type === 'shift') {
              const shiftAmount = Math.floor(Math.sin(elapsed * 20) * 3);
              const sourceX = x - shiftAmount;
              if (sourceX >= 0 && sourceX < chars.length) {
                chars[x] = chars[sourceX];
              }
            }
          }

          outputLines[y] = chars.join('');
        }

        output = outputLines.join('\n');
      }
    });

    // Apply overall glow based on breath
    let glowIntensity = 1 + breathPhase * 12;
    let glowOpacity = 0.1 + breathPhase * 0.02;

    // Animate chromatic aberration offset
    const aberrationOffset = 2 + Math.sin(time * 0.8) * 1;

    // Hologram flicker affects the glow and aberration
    if (flickerActive) {
      glowIntensity *= (1 - flickerIntensity * 0.5);
      glowOpacity *= (1 - flickerIntensity * 0.5);
      display.style.opacity = 1 - flickerIntensity * 0.2;
    } else {
      display.style.opacity = 1;
    }

    // Multi-color glow with RGB channels
    display.style.textShadow = `
      0 0 ${glowIntensity}px rgba(255, 0, 64, ${glowOpacity}),
      0 0 ${glowIntensity * 0.8}px rgba(0, 255, 255, ${glowOpacity}),
      0 0 ${glowIntensity * 1.2}px rgba(255, 255, 255, ${glowOpacity * 0.5})
    `;

    display.style.setProperty('--aberration-offset', `${aberrationOffset}px`);
    display.setAttribute('data-text', output);
    display.textContent = output;
  }

  function animate(timestamp) {
    time = timestamp / 1000;
    renderVase();
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
})();
