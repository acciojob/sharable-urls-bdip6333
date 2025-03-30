document.getElementById("button").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let year = document.getElementById("year").value;
    let baseUrl = "https://localhost:8080/";
    
    let params = new URLSearchParams();
    if (name) params.append("name", name);
    if (year) params.append("year", year);
    
    let newUrl = baseUrl + (params.toString() ? "?" + params.toString() : "");
    document.getElementById("url").textContent = newUrl;
});