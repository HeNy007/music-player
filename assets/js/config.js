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
            name: 'Anis Fm',
            artist: 'bein radio',
            url: 'http://78.129.222.70:9487/stream/1/',
            cover: 'data:image/jpeg;base64,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',
            theme: '#46718b'
        }, {
            name: 'bein premium 1',
            artist: 'bein radio',
            url: 'http://45.135.194.73/SONICPR1/mpegts?token=vcI9k41in60+1Gc3mI/DDUdp0Qe37Z16Ae+AttH7eQ=',
            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qMC1XN7OlFrEhRbEmPD5u9loHZkjjwrDAg&usqp=CAU',
            theme: '#505d6b'
        }, {
            name: 'bein premium 2',
            artist: 'bein radio',
            url: 'http://45.135.194.73/SONICPR2/mpegts?token=vcI9k41in60+1Gc3mI/DDUdp0Qe37Z16Ae+AttH7eQ=',
            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qMC1XN7OlFrEhRbEmPD5u9loHZkjjwrDAg&usqp=CAU',
            theme: '#505d6b'
        }, {
            name: 'bein premium 3',
            artist: 'bein radio',
            url: 'http://45.135.194.73/SONICPR3/mpegts?token=vcI9k41in60+1Gc3mI/DDUdp0Qe37Z16Ae+AttH7eQ=',
            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qMC1XN7OlFrEhRbEmPD5u9loHZkjjwrDAg&usqp=CAU',
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
            url: 'https://drive.google.com/uc?export=download&id=1StbzwVmCl4pgByCv27emRRwliPfc6dqZ',
            cover: 'https://drive.google.com/uc?export=download&id=1OipGLllfpX536JpVxLRiUDUhFI7n7lKb',
            theme: '#505d6b'
        }, {
            name: 'Spitfire',
            artist: 'Infected Mushroom',
            url: 'https://drive.google.com/uc?export=download&id=1mXTbFg9BQl_nyKTVdidz7kW1jTfz6jaQ',
            cover: 'https://drive.google.com/uc?export=download&id=1OtBPh2glg02_se6MI_1h_dbsCnLJp7Hx',
            theme: '#505d6b'
        }, {
            name: 'Home ',
            artist: 'Inkyz & Ake',
            url: 'https://drive.google.com/uc?export=download&id=1g3YhL0qQWCad0MKlEGBjpXSCpUvv9t7-',
            cover: 'https://drive.google.com/uc?export=download&id=1Gv289G3lnMEOVnDmCe4o2Bt8hMxZhEiX',
            theme: '#505d6b'
        }, {
            name: 'Dev',
            artist: 'Inkyz',
            url: 'https://drive.google.com/uc?export=download&id=147yVvgHm4-Wpn90gLFVIqS6uZoJIMmnZ',
            cover: 'https://drive.google.com/uc?export=download&id=1KPVjspPG5GmIslaPAAiVJ3il5ZXx5nIc',
            theme: '#505d6b'
        }, {
            name: 'Mandala',
            artist: 'Inkyz',
            url: 'https://drive.google.com/uc?export=download&id=1zTaqIeGFhYO-ESiI7t_aouJdabzQ4Rt0',
            cover: 'https://drive.google.com/uc?export=download&id=1LOmEXXe8_swsPqXjqPhlimGzC2wQycrz',
            theme: '#505d6b'
        }, {
            name: 'Umani',
            artist: 'Inkyz',
            url: 'https://drive.google.com/uc?export=download&id=1KnJ-vPWflMNr2SM0PuzR_D3WIO2bD1A8',
            cover: 'https://drive.google.com/uc?export=download&id=18kKEv49uv5aktQ_E_j2-sXfnnyy80Rwt',
            theme: '#505d6b'
        }, {
            name: 'ssuss',
            artist: 'Insightful',
            url: 'https://drive.google.com/uc?export=download&id=1fGH2i6UZ4bY1ElsKxeXo92DvR2Gf91SB',
            cover: 'https://drive.google.com/uc?export=download&id=1zl_Ulbi1_4y_uxNAleiT25cqiwDHdsYN',
            theme: '#505d6b'
        }, {
            name: 'Fortuna',
            artist: 'Ivy Lab & Alix Perez',
            url: 'https://drive.google.com/uc?export=download&id=16Rl69p-2xiDDOtF8UQwPtajFOFUZe0H8',
            cover: 'https://drive.google.com/uc?export=download&id=1EK7pgINlvB-TsEYQ6LOrCcEHka9gnKIx',
            theme: '#505d6b'
        }, {
            name: 'Cake',
            artist: 'Ivy Lab',
            url: 'https://drive.google.com/uc?export=download&id=1uRM6FDnhZLH0K_m4Ncj96zUSmTjHF7na',
            cover: 'https://drive.google.com/uc?export=download&id=1Wxb48g0LeJvSbbkgZ_iIOfhCFox-Sy_I',
            theme: '#505d6b'
        }, {
            name: 'Deus',
            artist: 'Ivy Lab',
            url: 'https://drive.google.com/uc?export=download&id=1_h0_JcMtDxMRlGZn_XmisauSP5bHFrz_',
            cover: 'https://drive.google.com/uc?export=download&id=1RQpVBCp5GE7AyQiCtnVaFeVVbbEis5MW',
            theme: '#505d6b'
        }, {
            name: 'Rorschach',
            artist: 'Ivy Lab',
            url: 'https://drive.google.com/uc?export=download&id=1ApEAZBWVOv3nKfhUV7uIq5_ILX_xHSYn',
            cover: 'https://drive.google.com/uc?export=download&id=17p6itEqN2l_Islt6BHmkI8tHbKDu9Z1o',
            theme: '#505d6b'
        }, {
            name: 'Socket',
            artist: 'Ivy Lab',
            url: 'https://drive.google.com/uc?export=download&id=1MPyHoI0Z77iqPAzjRIKnAnyHn4PDQ3Lv',
            cover: 'https://drive.google.com/uc?export=download&id=1XJ7SIxBbbeQAev2yWlo3yOZQ1D7twiTs',
            theme: '#505d6b'
        }, {
            name: 'Two By Two',
            artist: 'Ivy Lab',
            url: 'https://drive.google.com/uc?export=download&id=1ljEGeuS0VE_IVC0fTE_zfsHWJYDNvMbP',
            cover: 'https://drive.google.com/uc?export=download&id=1iF8DgFwonJb8aFNJVNEzwgcx1UjKlg7B',
            theme: '#505d6b'
        }, {
            name: 'Ubane',
            artist: 'Ivy Lab',
            url: 'https://drive.google.com/uc?export=download&id=1IbJsIxxxbeQaxMzLPZp861FefBf3xuH3',
            cover: 'https://drive.google.com/uc?export=download&id=1knMc63GmRENPYw0M_TfxWaPuzQyh7RhS',
            theme: '#505d6b'
        }, {
            name: 'YALLAH',
            artist: 'Jumpa x Reddy Roc',
            url: 'https://drive.google.com/uc?export=download&id=14K2ZUITS6YqH0kYXXWPfKdXFYlg5k62Q',
            cover: 'https://drive.google.com/uc?export=download&id=1i2NENMGuVNSmV9QPZNGC5dt089iFZWKY',
            theme: '#505d6b'
        }, {
            name: 'John Wick Medley',
            artist: 'Le Castle Vania',
            url: 'https://drive.google.com/uc?export=download&id=1AF9-34_hInWks8NtflkXMz4RNEdI7e_t',
            cover: 'https://drive.google.com/uc?export=download&id=1goAAze1dSZj3IQWSRKkY5-fQfFax39k8',
            theme: '#505d6b'
        }, {
            name: 'I Got Love',
            artist: 'MiyaGi & Эндшпиль feat. Рем Дигга',
            url: 'https://drive.google.com/uc?export=download&id=1zzYEZ1qim9kYIqXPVVlyDOvfZiDeO9SZ',
            cover: 'https://drive.google.com/uc?export=download&id=1Mn1bpWDiKIBp0CMVw-44Bdi9IG8lOC82',
            theme: '#505d6b'
        }, {
            name: 'Rave in the Grave',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1X8RbgupuukkbIQzb4BPZsut_aNeaDt33',
            cover: 'https://drive.google.com/uc?export=download&id=1PaXIKfgShtwhFl3uNaEdzUmw6tAzbnE-',
            theme: '#505d6b'
        }, {
            name: 'Dont Let Me Down',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1a3RKUShTNwd8UbKMmrT7YwWmiOVQQgi4',
            cover: 'https://drive.google.com/uc?export=download&id=1--SKXZOsIVVhOsL5bdwl-8fIljkcyxax',
            theme: '#505d6b'
        }, {
            name: 'Dead Silence',
            artist: 'Nightstep',
            url: 'https://drive.google.com/uc?export=download&id=1xh9i2JrFEgHKDBZcMbMWm97vO__B0lVC',
            cover: 'https://drive.google.com/uc?export=download&id=1qzEXNrh4aG4oc7rqEFsV5o-I_SCSTWnj',
            theme: '#505d6b'
        }, {
            name: 'Tentacles',
            artist: 'Noisia',
            url: 'https://drive.google.com/uc?export=download&id=1m4j2_sh2ea9nrIkl-GyD_2DM41OIkF_h',
            cover: 'https://drive.google.com/uc?export=download&id=1qsCIaGiQYFtUeZiPzHTLdLkKcLXWnVo6',
            theme: '#505d6b'
        }, {
            name: 'Rockstar ft. 21 Savage',
            artist: 'Post Malone',
            url: 'https://drive.google.com/uc?export=download&id=1p1SzGbwT-hMH8dqgeocID4xvWktoS71d',
            cover: 'https://drive.google.com/uc?export=download&id=1XihNHz9CAtCFtyBj6BtNLR8fuA-aNVLb',
            theme: '#505d6b'
        }, {
            name: 'What Are You Waiting For',
            artist: 'Stonebank',
            url: 'https://drive.google.com/uc?export=download&id=1l-V2ddW2WTT28-soK7OOMYIHbUnP6P2T',
            cover: 'https://drive.google.com/uc?export=download&id=1mN4IfXwhW3OCN0HX-TUm9VDKBBSozSgj',
            theme: '#505d6b'
        }, {
            name: 'Licht und Schatten',
            artist: 'Tokyo Ghoul',
            url: 'https://drive.google.com/uc?export=download&id=1LDR5h8-DMGThbbdQm2uYJ1eTyaOQku4K',
            cover: 'https://drive.google.com/uc?export=download&id=1qIId3C9TiE1mS81FpKs-a8RqR81T0hmq',
            theme: '#505d6b'
        }, {
            name: 'Do You',
            artist: 'TroyBoi',
            url: 'https://drive.google.com/uc?export=download&id=11TYDoKf5xjaTogo86I0k1yBmGMJDJspH',
            cover: 'https://drive.google.com/uc?export=download&id=1nv5OVOZdTr4LUb2ipFiz7yHBKL04V9Qy',
            theme: '#505d6b'
        }, {
            name: 'Dj Turn It Up',
            artist: 'Yellow Claw',
            url: 'https://drive.google.com/uc?export=download&id=1Y9RE-0lDt609vFJWlLBk-QSTP0NEw6J2',
            cover: 'https://drive.google.com/uc?export=download&id=1vlW69q5C0I9z4h1ejpxiRBs2ibiL2l5h',
            theme: '#505d6b'
        }, {
            name: 'Night in Dubai',
            artist: 'Zwirek',
            url: 'https://drive.google.com/uc?export=download&id=1hBlLcDJZE2sLTusnoeooCmdfdqRJs8S6',
            cover: 'https://drive.google.com/uc?export=download&id=1EboeV6Z9cjNiMz6lvz0uxYlZE-GIfIW6',
            theme: '#505d6b'
        }, {
            name: 'R3B3L',
            artist: 'ZwiReK',
            url: 'https://drive.google.com/uc?export=download&id=1N9PYdrQifKd7Kve-kNe8zDq2-kye3coz',
            cover: 'https://drive.google.com/uc?export=download&id=136CPDPfWRdAyWHx7y8ZrzliX5XXfOuFw',
            theme: '#505d6b'
        }]
    });
}
