My first ever after effects pseudo-effect.
ALEEERTTT I am testing this on After Effects 2025 (25.1). This may not work on significantly older (around 2012ish) versions of AE.

Only works with the standard english alphabet. 
Not using Pseudo Effect Maker because I am insane, need a project, and do not want to spend money

# Installation
Still trying to figure out how exactly I'm supposed to share this; unsure if I'll make a script to make this less janky. In the meantime, though, this is how we're working

1. Download Caesar Cipher.ffx
2. Put it in your presets folder (on Windows: Documents > Adobe > After Effects [Year] > User Presets)
3. Restart AE (if open)
4. Make NEW text layer, drag Caesar Cipher in from presets 
    (This is because the preset unfortunately modifies your source text, since the expression is attached to the source text.)
5. Copy the effect and the expression from the temporary text to your intended text layer. 

# Usage

Somewhat self explanatory.

Frames per iteration: change how often you want the cipher to shift- every frame, every 2 frames, etc
Skip original text: decide whether or not you want the original, unencoded text to be included in the iterations
Randomize offset: decide whether the text should shift by 1 per iteration (off) or by a random amount each iteration (on)
Source text: use a different layer for source text if you wish (makes editing the source text easier.)