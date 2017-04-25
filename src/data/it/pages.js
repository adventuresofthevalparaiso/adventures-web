export const data = {
    'home': {
        title: 'Stone Paper - Home',
        blocks: [
            [
                {
                    body: '<strong>La carta Stone Paper è realizzata da polvere di pietra (80%) legata da una piccola percentuale di resina non tossica (20%).</strong><br><br>La Stone Paper ha la massima similarità con la tradizionale carta di cellulosa, con un morbido effetto vellutato (soft-touch) e una grande resistenza agli strappi. E’ totalmente impermeabile all’acqua e ad ogni altro liquido, è ignifuga ed antincendio.<br><br>Per la sua produzione non è necessario abbattere alberi, questo permette di proteggere le nostre foreste e il nostro ambiente. Non viene utilizzato e disperso neanche un litro d’acqua e per la sua produzione è necessaria solo il 15% di energia rispetto alla tradizionale carta di cellulosa e l’impronta di CO2 rilasciata in atmosfera è ridotta del 65%.',
                    image: require('../../images/image-forest.jpg'),
                    type: 'textBlock'
                },
                {
                    text: 'Watch our video',
                    type: 'videoBlock',
                    video: 'ykVIkXyq9hQ'
                },
            ],
            [
                {
                    amount: 5,
                    type: 'blog',
                    url: 'http://blog.stone-paper.nl/wp-json/posts'
                }
            ]
        ]
    },
    'cos-e-la-stone-paper': {
        title: 'Stone Paper - Cos’è la Stone Paper',
        blocks: [
            [
                {
                    body: 'La carta Stone Paper si prefigge uno sviluppo sostenibile ed il rispetto del nostro Pianeta. Con la carta ottenuta utilizzando polvere di pietra (Carbonato di Calcio) si possono stampare e realizzare moltissimi prodotti senza tagliare alberi né utilizzando acqua o prodotti chimici aggressivi, così come avviene nei processi di produzione della normale carta di cellulosa. La carta Stone Paper è certificata con ISO 14001:2004, ROHS, REACH, FDA e l’importante C2C silver.',
                    continuation: {
                        text: 'Scopri la nostra missione »',
                        url: 'nostra-missione'
                    },
                    title: 'Cos’è la Stone Paper',
                    type: 'pageBlock'
                }
            ]
        ]
    },
    'nostra-missione': {
        title: 'Stone Paper - La nostra missione',
        blocks: [
            [
                {
                    body: 'Sempre più aziende utilizzano Stone Paper, incrementando l’impegno collettivo nella protezione ambientale. Scegliendo la carta Stone Paper infatti ti impegni a ridurre, tra le altre cose, l’uso di carta di cellulosa, questo significa fare business con la consapevolezza che è necessario salvaguardare l’ambiente e proteggere le generazioni future.<br><br>Crediamo che tutti possano fare la differenza e che tutti dovrebbero essere responsabili e dare il buon esempio.<br><br>Aumentando la consapevolezza, creando alternative ed incoraggiando l’uso di Stone Paper diamo alle aziende la possibilità di:',
                    continuation: {
                        text: 'Le caratteristiche uniche della Stone Paper »',
                        url: 'caratteristiche-uniche'
                    },
                    checklist: [
                        'avere una maggiore responsabilità dell’ambiente', 'salvaguardare l’ambiente per le generazioni future', 'diminuire l’emissione di CO2', 'comunicare dei valori', 'connettersi con i clienti'
                    ],
                    title: 'La nostra missione',
                    type: 'pageBlock'
                }
            ]
        ]
    },
    'caratteristiche-uniche': {
        title: 'Stone Paper - Caratteristiche uniche',
        blocks: [
            [
                {
                    body: 'La Stone Paper è una nuova generazione di carta, alternativa eccellente alla carta di cellulosa tradizionale. È priva di legno e cellulosa in quanto realizzata prettamente da minerali (polvere di pietra).<br><br><strong>Clicca sulle icone per maggiori informazioni:</strong>',
                    title: 'Caratteristiche uniche',
                    type: 'pageBlock'
                }
            ],
            [
                {
                    body: '<strong>Acqua e olio non hanno nessun effetto sulla Stone Paper.</strong><br><br><strong>Nessuna fibra di legno.</strong><br>Le fibre naturali, quando entrano in contatto con i liquidi, si rigonfiano e questo provoca la distruzione della cellulosa che la compone, con il risultato che la superficie stampata ed il prodotto si rovinano.<br>La Stone Paper è 100% resistente all’acqua e ai liquidi in generale, se si bagna si può asciugare.',
                    image: require('../../images/image-water.jpg'),
                    title: '100% resistente all’acqua',
                    type: 'popupBlock'
                },
                {
                    body: '<strong>La produzione di 1 tonnellata di Stone Paper anziché di carta di cellulosa previene la distruzione di 18 alberi, che forniscono ossigeno per 40 persone all’anno.</strong><br><br><strong>1 tonnellata di carta = un bancale alto 120cm circa</strong><br>La carta Stone Paper è interamente prodotta con materiali di scarto e riciclati, ha quindi un impatto davvero limitato sull’ambiente. Per produrre una tonnellata di carta tradizionale bisogna tagliare 18 alberi, sostituiti normalmente da alberi a crescita rapida che distruggono la biodiversità dell’ambiente. La carta tradizionale può essere riciclata fino a 8 volte, ma ogni processo di riciclo ha il medesimo livello distruttivo sull’ambiente: infatti ad ogni riciclo di carta tradizionale bisogna inserire nuova fibra di legno vergine, quindi ulteriori piante abbattute.',
                    image: require('../../images/image-tree.jpg'),
                    title: 'Salva gli alberi',
                    type: 'popupBlock'
                },
                {
                    body: '<strong>Produrre 1 tonnellata di Stone Paper significa risparmiare acqua per l’equivalente di una doccia al giorno per 142 giorni, dal momento che la produzione di Stone Paper non richiede l’utilizzo di acqua.</strong><br><br><strong>Per la produzione di una tonnellata di carta tradizionale sono necessari 35.000 litri d’acqua (35 tonnellate), di cui circa 2.770 litri vengono consumati senza possibilità di riutilizzo. Con la carta Stone Paper questa quantità si trasformerebbe in un risparmio equivalente alla quantità di acqua da bere necessaria a 50 persone per un mese.',
                    image: require('../../images/image-drop.jpg'),
                    title: 'Risparmia 2.770 litri d’acqua',
                    type: 'popupBlock'
                },
                {
                    body: '<strong>La produzione di una tonnellata di Stone Paper, anziché di carta di cellulosa, permette di risparmiare un quantitativo di CO2 pari a quello emesso da un auto che percorre 4.520 km.</strong><br><br><strong>La produzione di Stone Paper produce solo 482 kg CO2, mentre la carta tradizionale ne produce 1.431 kg.</strong><br>Le emissioni di CO2, dalla produzione all’utente finale, sono causate dalla lavorazione delle materie prime,  dai processi produttivi e dai trasporti. Il processo produttivo di Stone Paper produce il solo 33% di emissioni di CO2 rispetto al processo di realizzazione della carta tradizionale.<br>Scegliendo la carta Stone Paper contribuisci ad una riduzione di emissioni di CO2 pari a quella emessa da una auto per il tragitto da Napoli a Capo Nord (Norvegia).',
                    image: require('../../images/image-co2.jpg'),
                    title: 'Riduzione di 949 kg di CO2',
                    type: 'popupBlock'
                },
                {
                    body: '<strong>La produzione di 1 tonnellata di Stone Paper significa risparmiare l’equivalente energetico pari a quello necessario a una famiglia media per un anno e mezzo.</strong><br><br><strong>Grazie al processo produttivo di grande efficienza, sono necessari solo 860 kWh per produrre una tonnellata di Stone Paper, mentre servono 5670 kWh per produrre la stessa quantità di carta tradizionale.</strong><br>Per cui l’energia richiesta è pari solo il 15% di quella utilizzata per la carta tradizionale.',
                    image: require('../../images/image-chemi.jpg'),
                    title: 'Risparmia l’85% di energia',
                    type: 'popupBlock'
                },
                {
                    body: '<strong>I prodotti chimici sono necessari per estrarre la cellulosa dal legno e per sbiancarla.</strong><br><br><strong>La Stone Paper non utilizza questi dannosi prodotti chimici.</strong><br>Per la produzione di carta tradizionale vengono utilizzate massicciamente svariate sostanze chimiche per la produzione e l’estrazione della cellulosa dalle piante. Inoltre vengono utilizzate sostanze chimiche estremamente aggressive per sbiancare la carta.<br>La Stone Paper invece non necessita di questi passaggi e non usa prodotti chimici.',
                    image: require('../../images/image-mask.jpg'),
                    title: 'Nessun prodotto chimico',
                    type: 'popupBlock'
                }
            ]
        ]
    },
    'riciclo': {
        title: 'Stone Paper - Il processo di riciclo',
        blocks: [
            [
                {
                    body: 'Sia il processo produttivo che il prodotto finito non inquinano e non producono scarti. Inoltre la carta Stone Paper si degrada con la luce del sole: la carta Stone Paper di 200 micron di spessore inizierà a degradarsi dopo circa 9-12 mesi all’aria aperta e al sole. Può essere anche incenerita senza rilasciare gas nocivi.',
                    continuation: {
                        text: 'Maggiori dettagli tecnici »',
                        url: 'dettagli-tecnici'
                    },
                    info: {
                        title: 'Dettagli',
                        items: [
                            'La Stone Paper deve essere riciclata insieme alla plastica, di cui è composta solo per il 20%, nella categoria di riciclo 2, che è quella utilizzata per la materie plastiche più comuni. Dall’incenerimento rimarrà solo un naturale residuo calcareo di carbonato di calcio.<br><br>Nessun gas nocivo viene prodotto dalla combustione della carta Stone Paper.'
                        ]
                    },
                    title: 'Il processo di riciclo',
                    type: 'pageBlock'
                }
            ]
        ]
    },
    'dettagli-tecnici': {
        title: 'Stone Paper - Dettagli tecnici',
        blocks: [
            [
                {
                    body: 'È possibile scegliere tra due tipologie di carta Stone Paper: RP, per spessori fino a 200 micron, e RB, per spessori superiori ai 200 micron. Queste due alternative, compongono una valida offerta commerciale adatta per la litografia offset, la flessografia, la serigrafia e la stampa in rotativa.<br><br>E’ possibile anche la stampa digitale, con particolari accorgimenti.<br><br>La Stone Paper è prodotta senza che alcun albero venga abbattuto, ma si compone principalmente di carbonato di calcio (polvere di pietra) legato da una piccola percentuale di resina atossica (HDPE = Polietilene ad alta densità).<br><br>È fotodegradabile, infatti se lasciata in natura incomincerà a decomporsi dopo circa 12 mesi, trasformandosi gradualmente in polvere (carbonato di calcio, polvere di pietra di cui è composta) senza il rilascio di sostanze tossiche.<br><br>Nonostante la carta Stone Paper sia prodotta senza cellulosa ha comunque delle similarità con la carta tradizionale soprattutto per quanto riguarda la stampabilità, il punto di bianco ed ha una maggiore elasticità e la resistenza agli strappi. Al tatto ha un piacevole effetto vellutato soft-touch.<br><br>Per la produzione di Stone Paper quindi non vengono utilizzati alberi, né acqua, né prodotti chimici tossici o sbiancanti. È resistente all’acqua e ai liquidi, e siccome non contiene fibre vegetali assorbe meno l’inchiostro, permettendone un risparmio di circa il 15 – 20% durante la stampa. Il risultato è un’immagine estremamente nitida.',
                    continuation: {
                        text: 'Download »',
                        url: 'download'
                    },
                    title: 'Dettagli tecnici',
                    type: 'pageBlock'
                }
            ],
            [
                {
                    body: 'È possibile stampare la carta Stone Paper con ogni stampante offset di qualità. È importante tenere in considerazione le caratteristiche della carta Stone Paper. Per qualsiasi problema tecnico potete contare su un approccio attivo e su anni di esperienza nella stampa per offrivi consigli e aiuto.',
                    info: {
                        title: 'Contattaci',
                        items: [
                            '<strong>Geo4Map srl</strong><br>Viale Leonardo da Vinci 18<br>28100 Novara (Italia)<br><strong>Email: </strong><a href="mailto:giovanni.cantone100@gmail.com" target="_blank">giovanni.cantone100@gmail.com</a><br><strong>Tel: </strong><a href="tel:+39 0321 1816971">+39 0321 1816971</a>',
                        ]
                    },
                    title: 'Un consiglio',
                    type: 'pageBlock'
                }
            ]
        ]
    },
    'download': {
        title: 'Stone Paper - Download e informazioni',
        blocks: [
            [
                {
                    body: '<strong>Download</strong><br>',
                    downloads: true,
                    title: 'Download e informazioni',
                    type: 'pageBlock'
                }
            ]
        ]
    },
    'confronto': {
        title: 'Stone Paper - Confronto con la carta tradizionale',
        blocks: [
            [
                {
                    body: 'La carta Stone Paper ha un impatto diretto sull’ambiente. Sostituire la carta tradizionale con la Stone Paper significa ridurre drasticamente l’impatto che la produzione di carta ha sull’ambiente. L’inquinamento da emissioni di CO2 è inferiore, viene utilizzata molto meno energia e, soprattutto, il processo produttivo è più salubre. Non viene utilizzata acqua né agenti sbiancanti o altri prodotti chimici, né tantomeno vengono abbattuti alberi.',
                    info: {
                        title: 'Confrontiamo la sostenibilità della carta Stone Paper e della carta tradizionale',
                        items: [
                            'Abbiamo preso in considerazione tutte le emissioni di CO2',
                            'Prendiamo in considerazione tutti i passaggi legati alla produzione di carta che producono CO2: raggiungimento, trattamento e trasporto di materie prime, processo produttivo, trasporto dalla fabbrica al magazzino di stoccaggio fino al cliente finale. La produzione di una tonnellata di Stone Paper produce 482 kg di CO2, la carta tradizionale invece fino a 1.431 kg per tonnellata prodotta.',
                            '<strong>Le materie prime e il loro impatto sull’ambiente</strong><br>Stone Paper: Carbonato di calcio 80%, proveniente da materiale di scarto della lavorazione di pietra e marmo e da cave di pietre, completamente riciclabile, percentuale di riciclo 58%. HDPE riciclato (20%), completamento riciclabile, percentuale di riciclo 27%.',
                            'Carta tradizionale: sono necessari 18 alberi per la produzione di una tonnellata di carta, è riciclabile fino a 8 volte, percentuale di riciclo 69%, il 92% delle foreste usate per la produzione di carta hanno un certificato di forestazione sostenibile.',
                            'Confronto: la Stone Paper è prodotta interamente da materiale di scarto riciclato e ha un impatto minimo sull’ambiente, per 1.000 kg di carta tradizionale è necessario abbattere 18 alberi che possono essere sostituiti solo lentamente. La carta tradizionale ha una percentuale di riciclo più alta rispetto alla Stone Paper, ma può essere riciclata solo 8 volte. Inoltre ad ogni riciclo di carta tradizionale bisogna inserire nuova fibra di legno vergine, quindi ulteriori piante abbattute e ulteriori sostanze chimiche sbiancanti.',
                            '<strong>Consumo di acqua nel processo produttivo</strong><br>Stone paper. Il processo di produzione non necessita l’uso di acqua: zero litri d’acqua per 1.000 kg di Stone Paper.',
                            'Carta tradizionale. Vengono utilizzati 35.000 litri di acqua nel processo produttivo di 1000 kg di carta prodotta, di questi ben 2.770 litri non possono essere depurati e riutilizzati a causa delle sostanze chimiche presenti nei processi lavorativi.<br>Confronto: scegliendo 1.000 kg di Stone Paper si previene il consumo di 2.770 litri di acqua non depurabile, pari al consumo medio di acqua di una persona per più di 50 mesi.',
                            '<strong>Rifiuti prodotti e che non vengono riutilizzati nel processo produttivo</strong><br>Stone Paper: nessuno scarto viene prodotto durante il processo produttivo. 0 kg di scarti per 1000 kg di Stone Paper.',
                            'Carta tradizionale: pochi scarti durante il processo produttivo. 15 kg di scarti per 1000 kg di carta tradizionale.<br>Confronto: entrambi i tipi di carta hanno una bassa percentuale di scarti. Stone Paper si posiziona comunque meglio rispetto alla carta tradizionale.'
                        ]
                    },
                    title: 'Alla fine è il nostro pianeta che ne trae profitto!',
                    type: 'pageBlock'
                }
            ]
        ]
    },
    'certificati': {
        title: 'Stone Paper - I nostri certificati',
        blocks: [
            [
                {
                    body: 'Our factory was awarded the C2C Silver certificate.<br><br>The Cradle to Cradle concept is a new view on sustainable design, released in a book by William McDonough and Michael Braungart ’Cradle-to-Cradle: Remaking the Way We Make Things’.',
                    image: require('../../images/image-cradle.jpg'),
                    title: 'C2C Silver',
                    type: 'highlightBlock'
                },
                {
                    body: 'Since December 2015, Stone Paper has the KIWA CASTOR GAEA certificate. Check out our downloads for the certificate.',
                    image: require('../../images/image-kiwa.jpg'),
                    title: 'KIWA CASTOR GAEA',
                    type: 'highlightBlock'
                }
            ]
        ]
    },
    'contatti': {
        title: 'Stone Paper - CONTATTI E INFORMAZIONI',
        blocks: [
            [
                {
                    body: '',
                    info: {
                        title: 'CONTATTI E INFORMAZIONI',
                        items: [
                            'Avete domande o siete interessati alla carta Stone Paper?<br>Avete bisogno di supporto tecnico?<br>Volete inviarci un ordine?<br>Contattateci e vi risponderemo nel più breve tempo possibile.<br><br>· Geo4Map srl<br>Viale Leonardo da Vinci 18<br>28100 Novara (Italia)<br>Tel: +39 0321 1816971<br><br>· Brand Name: Stone Paper<br>Contact person:  Allard Lith / Giovanni Cantone<br>Tel: +31 654 725 252 / +39 335 72 40 447<br>Email:  info@stone-paper.nl   or   Giovanni.cantone100@gmail.com<br>Website:  www.stone-paper.it',
                        ]
                    },
                    title: '',
                    type: 'pageBlock'
                }
            ]
        ]
    }
}
