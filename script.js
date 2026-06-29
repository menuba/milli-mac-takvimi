fetch("matches.json")
.then(r=>r.json())
.then(matches=>{

const container=document.getElementById("matches");

matches.forEach(match=>{

container.innerHTML += `
<div class="card">

<div class="title">${match.sport}</div>

<div class="info">
🇹🇷 Türkiye - ${match.opponent}
</div>

<div class="info">
🏆 ${match.event}
</div>

<div class="info">
📅 ${match.date}
</div>

<div class="info">
🕒 ${match.time} TSİ
</div>

</div>
`;

});

});
