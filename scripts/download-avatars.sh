#!/bin/bash
set -e

AVATARS_DIR="../public/avatars"
mkdir -p "$AVATARS_DIR"

download_avatar() {
    local name="$1"
    local url="$2"
    local output="$AVATARS_DIR/${name}.jpg"
    
    echo "Downloading $name..."
    if curl -L --max-time 30 -o "$output" "$url" 2>/dev/null; then
        if file -b --mime-type "$output" 2>/dev/null | grep -q "^image/"; then
            echo "  ✓ $name downloaded successfully"
            return 0
        else
            echo "  ✗ $name failed (not an image)"
            rm -f "$output"
            return 1
        fi
    else
        echo "  ✗ $name failed to download"
        rm -f "$output"
        return 1
    fi
}

echo "Downloading avatar images..."

download_avatar "elon-musk" "https://upload.wikimedia.org/wikipedia/commons/3/32/Elon_Musk_Deer_Valley_2020.jpg"
download_avatar "jeff-bezos" "https://upload.wikimedia.org/wikipedia/commons/5/55/Jeff_Bezos_Japan_Conference.jpg"
download_avatar "steve-jobs" "https://upload.wikimedia.org/wikipedia/commons/b/b9/Steve_Jobs_Reasons_only_800.jpg"
download_avatar "warren-buffett" "https://upload.wikimedia.org/wikipedia/commons/1/16/Warren_Buffett_in_2015.jpg"
download_avatar "susan-wojcicki" "https://upload.wikimedia.org/wikipedia/commons/0/0d/Susan_Wojcicki.jpg"
download_avatar "satya-nadella" "https://upload.wikimedia.org/wikipedia/commons/3/3e/Satya_Nadella_%2848133635697%29.jpg"
download_avatar "jensen-huang" "https://upload.wikimedia.org/wikipedia/commons/a/ae/Jensen_Huang_at_GTC_2018.jpg"
download_avatar "sam-altman" "https://upload.wikimedia.org/wikipedia/commons/d/d5/Sam_Altman_2023_%28cropped%29.jpg"
download_avatar "oprah-winfrey" "https://upload.wikimedia.org/wikipedia/commons/b/bf/Oprah_in_2014.jpg"
download_avatar "indra-nooyi" "https://upload.wikimedia.org/wikipedia/commons/a/a1/Indra_Nooyi_WEF_2010.jpg"

echo ""
echo "Done! Check $AVATARS_DIR for downloaded images."
