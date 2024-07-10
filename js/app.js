    <!-- r, rr, sr, srr, ssr -->
    <!-- 72, 24, 8, 4, 1 -->
    function rarity_calculation(r, rr, sr, srr, rarity) {
        const count_value = document.getElementById('count').value = Math.round(r*1+rr*4+sr*8+srr*24);
        const necessary_rarity_value = document.getElementById('necessary_rarity').value = Math.round(72-count);
        const necessary_diamond_value = document.getElementById('necessary_diamond').value = Math.round(necessary_rarity/3*660);
    }
