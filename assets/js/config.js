docute.init({
    landing: 'landing.html',
    title: 'Music',
    plugins: [
        evanyou(),
        player()
    ]
});
function player () {
    return function (context) {
        context.event.on('landing:updated', function () {
            console.log('landing:updated');
            clearPlayer();
            aplayer();
        });
        context.event.on('content:updated', function () {
            console.log('content:updated');
            clearPlayer();
            for (let i = 0; i < document.querySelectorAll('.load').length; i++) {
                document.querySelectorAll('.load')[i].addEventListener('click', function () {
                    window[this.parentElement.id] && window[this.parentElement.id]();
                });
            }
        });
    };
}

function clearPlayer () {
    for (let i = 0; i < 10; i++) {
        if (window['ap' + i]) {
            window['ap' + i].destroy();
        }
    }
}

function aplayer () {
    window.ap1 = new APlayer({
        container: document.getElementById('aplayer'),
        mini: false,
        autoplay: false,
        loop: 'all',
        order: 'random',
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        listFolded: false,
        listMaxHeight: '400px',
        lrcType: 3,
	theme: '#000000',
        audio: [{
            name: 'Let Me Down Slowly',
            artist: 'Alec Benjamin',
            url: 'https://drive.google.com/uc?export=download&id=1sv9f57RlnoGRJxZMxDjS2SNwLR7fJF3b',
            cover: 'https://drive.google.com/uc?export=download&id=1cejFNJc5vS0Z1S93sTpqJkDdOTUJaa7l',
            theme: '#ebd0c2'
        }, {
            name: 'rap fr',
            artist: 'Axel Thesleff',
            url: 'http://radiosun.ice.infomaniak.ch/radiosun-high.mp3',
            cover: 'https://generations.fr/media/radio/thumb/100x100_rap_fr1.png',
            theme: '#46718b'
        }, {
            name: 'Break it Down',
            artist: 'Kidz In The Hall',
            url: 'https://drive.google.com/uc?export=download&id=1S_DZnnwLxOKLATYr5v5IXIVbUCkyn1b3',
            cover: 'https://drive.google.com/uc?export=download&id=13DjYrJeySVxttvPJ3vdCVO9Ac-ekWRU_',
            theme: '#505d6b'
        }, {
            name: 'Tokyo Drift',
            artist: 'Teriyaki Boyz',
            url: 'https://drive.google.com/uc?export=download&id=1Uc5PKDIf6LC1QhnkIZTQNwSABVeJAUJ_',
            cover: 'https://drive.google.com/uc?export=download&id=1gxLatNDG1Yd2ceXjNSlMsoMp0lsncqjc',
            theme: '#505d6b'
        }, {
            name: 'Top Songs',
            artist: 'Skillet',
            url: 'https://drive.google.com/uc?export=download&id=1j27KxrLTaIsWhhKQq6nut0REcV8JRDes',
            cover: 'https://drive.google.com/uc?export=download&id=1MraXTWrm08g9eAayrx7Qk2cUxWabmBnn',
            theme: '#505d6b'
        }, {
            name: 'New Face',
            artist: 'PSY',
            url: 'https://drive.google.com/uc?export=download&id=1tL5cyymzw-i2rvNyFH0yoHpX4vYcEymp',
            cover: 'https://drive.google.com/uc?export=download&id=16p8prmFDkpq1eXWH0Qb7grIHrcs9nQxB',
            theme: '#505d6b'
        }, {
            name: 'I LUV IT',
            artist: 'PSY',
            url: 'https://drive.google.com/uc?export=download&id=1N_TWPqyX_LMS27ZYNa1p0vWlXvjFh9-6',
            cover: 'https://drive.google.com/uc?export=download&id=1rFSc5gMqNOfZSX7J8x0IlgauSkhDUkke',
            theme: '#505d6b'
        }, {
            name: 'GENTLEMAN',
            artist: 'PSY',
            url: 'https://drive.google.com/uc?export=download&id=1k3Inj6b2C_J_Q5WknoRL-OhzLxaCaoBt',
            cover: 'https://drive.google.com/uc?export=download&id=1nUu2jJpiRDpimQYVIlzdTYV2rn69_H0Y',
            theme: '#505d6b'
        }, {
            name: 'DADDY',
            artist: 'PSY',
            url: 'https://drive.google.com/uc?export=download&id=1Ndk2BJxkNfWAnXm_nollppHZkuu970lr',
            cover: 'https://drive.google.com/uc?export=download&id=1zS7Sj7xjol3MWsOQxc0kHTRJCTyP2aqL',
            theme: '#505d6b'
        }, {
            name: 'Zombie',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1os0GxPuR1ZFkEQtigpx-Sk8w8n0caB4L',
            cover: 'https://drive.google.com/uc?export=download&id=1Yuuki2DPCkmnWuiCRcRD1mNDO9Uadqv5',
            theme: '#505d6b'
        }, {
            name: 'Zig Zag',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1xroflm5QLnBze7WmOrwF6LNNx5-54uUC',
            cover: 'https://drive.google.com/uc?export=download&id=14wUDPVEiRBN7yho1AUFADnYZrClnaxxs',
            theme: '#505d6b'
        }, {
            name: 'Worst Day of My Life ',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1l_sbw0PjH9Z1zOhQG77LMqnE2zzG84ja',
            cover: 'https://drive.google.com/uc?export=download&id=1kJK9y8-8WhTS-lrvWrv3NRiOHzi-3p_K',
            theme: '#505d6b'
        }, {
            name: 'Why Do I',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1vqAAKvFDiRfauhYq-hTZJfrxgQ92ITq-',
            cover: 'https://drive.google.com/uc?export=download&id=16uT2P1VC47cYevQDqxl43Pou0kfEFDr6',
            theme: '#505d6b'
        }, {
            name: 'Umbrella',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1llHm8dNA8Gd7H_LKpc9IISt-xCI-YDUc',
            cover: 'https://drive.google.com/uc?export=download&id=1Nqi8iAA9_lIOwGraJ23v3GxozTPOkh2x',
            theme: '#505d6b'
        }, {
            name: 'Try everything ',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1iFVDAoo5OLWv5zvW37PMRsW7kZaxOG9D',
            cover: 'https://drive.google.com/uc?export=download&id=1WBMb5P2962IfkQomAmBW03Fs45zh95rn',
            theme: '#505d6b'
        }, {
            name: 'The Zombie Song',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=13Tq7ppa1UciUChJ1cIt26K3RNLrmBB3L',
            cover: 'https://drive.google.com/uc?export=download&id=1b6mesYUiWZjEm5ctLfnYcBc6Xxo995kQ',
            theme: '#505d6b'
        }, {
            name: 'Superhero',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1KgOau-rrE7aA_tKF-TV6BaD3_N8AC-Kv',
            cover: 'https://drive.google.com/uc?export=download&id=1KNn4eo_xcgV3Tvmon12LszZVK732gz2t',
            theme: '#505d6b'
        }, {
            name: 'I need a Hero',
            artist: 'Nightcore S',
            url: 'https://drive.google.com/uc?export=download&id=1ohVtkKTJh8QqW7lr1m0fQcG1nCt0HhGl',
            cover: 'https://drive.google.com/uc?export=download&id=10V_8ZjtJhp7DhvK-NU89IvpV3DE7btZr',
            theme: '#505d6b'
        }, {
            name: 'Rockefeller Street',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1JNRx5m6cixuesagVdrw5yq78gG8yiM6E',
            cover: 'https://drive.google.com/uc?export=download&id=1JTYKTG5VSalEWPYmHGdiAG1TM2gm-jzb',
            theme: '#505d6b'
        }, {
            name: 'Prom Queen',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1LFik6Ib0XyfXfIZ5XHkOP7Us-pQybd9L',
            cover: 'https://drive.google.com/uc?export=download&id=17UUGD7le_KE_sgvOmuo9klxNl8EVwGZl',
            theme: '#505d6b'
        }, {
            name: 'Pretending',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1p5fmnzsqA4ACLHknsK2FgKTj4pihg5hg',
            cover: 'https://drive.google.com/uc?export=download&id=1PWVzqwAIEpwjvN_bWGaafKq7iVjhjm09',
            theme: '#505d6b'
        }, {
            name: 'Memes',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1u1OrB2qkhAeG3w7ToDurv2ooPaFuryzJ',
            cover: 'https://drive.google.com/uc?export=download&id=1VYLPGNlEW5qNiQuSj8IecfX5ACrJNk3H',
            theme: '#505d6b'
        }, {
            name: 'Meet Me On The Battlefield',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=10GMUZWvkIC8aH7aJ8qou7QBfEqB4ayJk',
            cover: 'https://drive.google.com/uc?export=download&id=121cNHAxlGTnKzoews18Ku4_EfZPVa1bK',
            theme: '#505d6b'
        }, {
            name: 'Legend',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1vRo8hwcJaDHr99klVVy8QSeGqemdIj7h',
            cover: 'https://drive.google.com/uc?export=download&id=18aqI-GknGkPNSSsPun8OtB-FpXak8nip',
            theme: '#505d6b'
        }, {
            name: 'Infected',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1eL4qIUj-dy-Or1EITGXzUMfZqOq6otY-',
            cover: 'https://drive.google.com/uc?export=download&id=1q4CWymKo5P7C4O5DeIJoptogT0S4slyX',
            theme: '#505d6b'
        }, {
            name: 'Infected (Lyrics)',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1Fnl8lWydVT8ytUPerdPRc409Vc9nyzfZ',
            cover: '',
            theme: '#505d6b'
        }, {
            name: 'Ievan Polkka (VSNS Remix)',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=18cxNChCJb7BhfTesRfV8eQVY7vV6INNR',
            cover: 'https://drive.google.com/uc?export=download&id=1G6p4RAxUky4vc1tGPAmpAxhuBcftUQOV',
            theme: '#505d6b'
        }, {
            name: 'Blow',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1yG_QDDVqWjEgCSMjT4_EjjC602X945SY',
            cover: 'https://drive.google.com/uc?export=download&id=1rR22sYAzq4CrMe36rDE6Sx9gYVNrrA_w',
            theme: '#505d6b'
        }, {
            name: 'Shiva ',
            artist: 'Inkyz',
            url: 'https://drive.google.com/uc?export=download&id=1l9NlqDZGXzqxgkIDKfNDBLToRqPwGXMp',
            cover: 'https://drive.google.com/uc?export=download&id=18Erge2yOGh4daGPboSnE-2KgOePtbnfD',
            theme: '#505d6b'
        }, {
            name: '60 minute mix of Caravan Palace',
            artist: 'Caravan Palace',
            url: 'https://drive.google.com/uc?export=download&id=1P4M6Q6JsKgeKyGKa-33hPGYeSGqCJ3mc',
            cover: 'https://drive.google.com/uc?export=download&id=1zvtG1Y7r-FnHRjU-FYnMrGfWTwiU5Qm_',
            theme: '#505d6b'
        }, {
            name: 'Best of ELECTRO SWING Mix March 2018',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1uca46Cw1E9lmmIXSBBdQKWcgsSiB_HDZ',
            cover: 'https://drive.google.com/uc?export=download&id=1Go515kCyK_X-HCcK6_No_dhddfWlb8xT',
            theme: '#505d6b'
        }, {
            name: 'Ignite',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1H5H_liCchBRtveF0tWz8YYm9Lb2HBhno',
            cover: 'https://drive.google.com/uc?export=download&id=1k5xMIYAL9YT53jkoDE3GhzCkOBjlQ-xF',
            theme: '#505d6b'
        }, {
            name: 'Maiden',
            artist: 'Alix Perez & Ivy Lab',
            url: 'https://drive.google.com/uc?export=download&id=16DGD4K8Ow4hsU5oTRdClUZZ9LFlaowS_',
            cover: 'https://drive.google.com/uc?export=download&id=1yG7BZA2v5JGKKCpGQ08Hk8evYtovLwoy',
            theme: '#505d6b'
        }, {
            name: 'l Desert Trap Mix',
            artist: 'Arabian Trap Music',
            url: 'https://drive.google.com/uc?export=download&id=1ITh-G33wAJLiwS5bDHj_s-XJqlu9b7nR',
            cover: 'https://drive.google.com/uc?export=download&id=1uOvd88MXkvaBixMky_KDgOygcEo-f2kz',
            theme: '#505d6b'
        }, {
            name: 'My Hero Academia Main Theme',
            artist: 'Boku no Hero Academia OST #03',
            url: 'https://drive.google.com/uc?export=download&id=1LzJnvmX_nIXpNzfTTFKXW-UI7vIpFPVP',
            cover: 'https://drive.google.com/uc?export=download&id=1j3Ybejh1SuBqx0uvYJ1W2NjANn2c2LKU',
            theme: '#505d6b'
        }, {
            name: 'Need for Speed',
            artist: 'Camaro Trap Music',
            url: 'https://drive.google.com/uc?export=download&id=1VuBpb500IhS0aThhiG0ch3bXYpBc76e7',
            cover: 'https://drive.google.com/uc?export=download&id=1ScuyacbFlJRcdUJBaId57DBscVQ2Bvkk',
            theme: '#505d6b'
        }, {
            name: 'ROCK COMPILATION',
            artist: 'DIABOLICAL NIGHTCORE',
            url: 'https://drive.google.com/uc?export=download&id=1qce0Y8jJ3-7a_MBANFeq6QgJBjgZVZYC',
            cover: 'https://drive.google.com/uc?export=download&id=1yNMCDVfJbPxs42jKHDHPG6kbDDQIrfzg',
            theme: '#505d6b'
        }, {
            name: 'Flosstradamus',
            artist: 'MVP Feat. Smokepurpp (NGHTMRE Remix)',
            url: 'https://drive.google.com/uc?export=download&id=1VhZibSRHiaq_eVcEk8mPnG7HV4hsjprr',
            cover: 'https://drive.google.com/uc?export=download&id=1sMw6kILAgiVPapiwomF5TXdvZwo4m45G',
            theme: '#505d6b'
        }, {
            name: 'Thirsty',
            artist: 'Ivy Lab',
            url: 'https://drive.google.com/uc?export=download&id=1StbzwVmCl4pgByCv27emRRwliPf
