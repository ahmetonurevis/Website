function generateCV() {
    const studentNo = document.getElementById('studentNo').value;
    if (!studentNo) {
        alert('Lütfen öğrenci numarasını girin.');
        return;
    }

    const year = 2023 - parseInt(studentNo.slice(0, 4));
    const E = parseInt(studentNo.slice(4, 5), 36);
    const F = parseInt(studentNo.slice(5, 6), 36);
    const G = parseInt(studentNo.slice(6, 7), 36);
    const H = parseInt(studentNo.slice(7, 8), 36);

    const puan = (E * Math.pow(year, 3) + F * Math.pow(year, 2) + G * year + H) / Math.pow(year, 4);
    const luckyNumber = 100 * (Math.random() + puan);

    const cv = document.getElementById('cv');
    cv.innerHTML = `
        <h2>Özgeçmiş</h2>
        <p>Öğrenci No: ${studentNo}</p>
        <p>Yıl: ${year}</p>
        <p>Puan: ${puan.toFixed(2)}</p>
        <p>Şanslı No: ${luckyNumber.toFixed(2)}</p>
    `;
}