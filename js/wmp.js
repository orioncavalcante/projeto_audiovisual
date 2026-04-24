// A estrutura HTML do Windows Media Player no estilo Windows XP
const wmpHTML = `
    <div id="wmp-modal">
        <div class="wmp-window">
            
            <div class="wmp-titlebar">
                <div class="wmp-title-left">
                    <div class="wmp-icon"></div>
                    <span>Windows Media Player</span>
                </div>
                <div class="title-buttons">
                    <button class="xp-btn xp-min">_</button>
                    <button class="xp-btn xp-max">□</button>
                    <button class="xp-btn xp-close" id="wmp-close">X</button>
                </div>
            </div>
            
            <div class="wmp-menubar">
                <span><u>F</u>ile</span>
                <span><u>V</u>iew</span>
                <span><u>P</u>lay</span>
                <span><u>T</u>ools</span>
                <span><u>H</u>elp</span>
            </div>
            
            <div class="wmp-content">
                <iframe id="wmp-iframe" src="" frameborder="0"></iframe>
            </div>
            
            <div class="wmp-bottom-bar">
                <div style="flex: 1;"></div>
                
                <div class="wmp-center-controls">
                    <button class="wmp-stop-btn">■</button>
                    <button class="wmp-prev-btn">|◄◄</button>
                    <button class="wmp-play-btn"></button>
                    <button class="wmp-next-btn">►►|</button>
                </div>
                
                <div class="wmp-bottom-right" style="flex: 1; justify-content: flex-end;">
                    <div class="wmp-vol">
                        <span>🔊</span>
                        <span class="wmp-vol-arrow">▼</span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
`;

// Injeta o HTML no body
document.body.insertAdjacentHTML('beforeend', wmpHTML);

// Captura os elementos
const wmpModal = document.getElementById('wmp-modal');
const wmpCloseBtn = document.getElementById('wmp-close');
const wmpIframe = document.getElementById('wmp-iframe');

// Escuta os cliques nas tags com a classe .open-wmp
const wmpTriggers = document.querySelectorAll('.open-wmp');

wmpTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetUrl = this.getAttribute('href');
        wmpIframe.src = targetUrl;
        wmpModal.classList.add('active');
    });
});

// Lógica de fechar
wmpCloseBtn.addEventListener('click', function() {
    wmpModal.classList.remove('active');
    wmpIframe.src = ''; 
});

wmpModal.addEventListener('click', function(e) {
    if (e.target === wmpModal) {
        wmpModal.classList.remove('active');
        wmpIframe.src = '';
    }
});