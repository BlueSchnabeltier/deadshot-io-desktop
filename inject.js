const title = 'DEADSHOT.io';
document.title = title;

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
});

function blockAds() {
    const ads = document.querySelectorAll('vli');
    
    ads.forEach(function(ad) {
        ad.parentNode.removeChild(ad);
    });
    
    const cookieConsent = document.querySelector('.qc-cmp2-container');

    if (cookieConsent) {
        cookieConsent.parentNode.removeChild(cookieConsent);
    }
    
    setTimeout(blockAds, 1);
}

blockAds();