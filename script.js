document.getElementById('mbtiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = {
        E: 0,
        I: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0
    };
    for (let [key, value] of formData.entries()) {
        result[value]++;
    }
    const mbtiType = `${result.E >= result.I ? 'E' : 'I'}${result.S >= result.N ? 'S' : 'N'}${result.T >= result.F ? 'T' : 'F'}${result.J >= result.P ? 'J' : 'P'}`;
    window.location.href = `results.html?type=${mbtiType}`;
});
