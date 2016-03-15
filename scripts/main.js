
var downloadBtn = document.querySelector('.download');

downloadBtn.addEventListener('click', downLoading);
downloadBtn.addEventListener('click', virusDownloading);

function downLoading() {
   downloadBtn.innerHTML = ('Downloading Virus....');
   downloadBtn.prop = ('disabled', true);
};

function virusDownloading() {
   	setTimeout(function(){
       downloadBtn.innerHTML = ('Download');
       downloadBtn.prop = ('disabled', false);
   	}, 4000);
};


