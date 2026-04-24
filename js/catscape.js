// O HTML do navegador retrô (Windows XP Luna Style)
const catscapeHTML = `
    <div id="catscape-modal">
        <div class="catscape-window">
            
            <div class="catscape-titlebar">
                <div class="title-text">
                    <img src="https://cyber.dabamos.de/88x31/ie_exploder.gif" width="16" height="16" style="margin-right: 5px; vertical-align: middle; border-radius: 2px;">
                    Catscape Navigator 2.0
                </div>
                <div class="title-buttons">
                    <button class="xp-btn xp-min">_</button>
                    <button class="xp-btn xp-max">□</button>
                    <button class="xp-btn xp-close" id="close-catscape">X</button>
                </div>
            </div>
            
            <div class="catscape-menubar">
                <span><u>F</u>ile</span>
                <span><u>E</u>dit</span>
                <span><u>V</u>iew</span>
                <span><u>H</u>elp</span>
            </div>
            
            <div class="catscape-main">
                <div class="catscape-content-area">
                    <iframe id="catscape-iframe" src="" frameborder="0"></iframe>
                </div>
            </div>

            <div class="catscape-statusbar">
                <div class="status-panel">Concluído</div>
                <div class="status-panel" style="flex-grow: 0; width: 150px;">Internet</div>
                <div class="status-panel resize-panel">
                    <div class="resize-grip"></div>
                </div>
            </div>
            
        </div>
    </div>
`;

// Injeta o HTML no final da página
document.body.insertAdjacentHTML('beforeend', catscapeHTML);

// Captura os elementos recém-criados
const modal = document.getElementById('catscape-modal');
const closeBtn = document.getElementById('close-catscape');
const iframe = document.getElementById('catscape-iframe');

// Captura os cliques nos links para abrir no iframe
const triggerLinks = document.querySelectorAll('.read-more, .report-title');

triggerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        const targetUrl = this.getAttribute('href');
        
        iframe.src = targetUrl;
        modal.classList.add('active');
    });
});

// Lógica de fechar a janela
closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
    iframe.src = ''; 
});

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('active');
        iframe.src = '';
    }
});