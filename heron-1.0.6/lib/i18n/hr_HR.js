/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
Ext.namespace("Heron.i18n");

/** api: (define)
 *  module = Heron.i18n
 *  class = Heron.i18n.dict (en_US)
 *  base_link = `Ext.form.ComboBox <http://dev.sencha.com/deploy/ext-3.3.1/docs/?class=Ext.form.ComboBox>`_
 */

/**
 * Define dictionary for the US locale.
 * Maintained by: Heron devs
 */
Heron.i18n.dict = {
	// 0.67
	'Active Layers': 'Aktivni slojevi',
	'Base Layer': 'Podloga',
	'Base Layers': 'Podloge',
	'BaseMaps': 'Osnovne karte',
	'Choose a Base Layer': 'Odaberi podlogu',
	'Legend': 'Legenda',
	'Feature Info': 'Informacije o objektu',
	'Feature Data': 'Podaci za objekt',
	'Feature(s)': 'objekt(i)',
	'No layer selected': 'Nije odabran niti jedan sloj',
	'Save Features': 'Spremi objekte',
	'Get Features': 'Dohvati objekte',
	'Feature information': 'Informacije o objektu',
	'No Information found': 'Nema pronađenih informacija',
	'Layer not added': 'Sloj nije dodan',
	'Attribute': 'Atribut',
	'Value': 'Vrijednost',
	'Recieving data': 'Dohvat podataka',
	'Layers': 'Slojevi',
	'No match': 'Nema rezultata',
	'Loading...': 'Učitavanje...',
	'Bookmarks': 'Oznake lokacija',
	'Places': 'Mjesta',
	'Unknown': 'Nepoznato',
	'Feature Info unavailable': 'Nedostupne informacije o objektu',
	'Pan': 'Pomakni',
	'Leg': 'Dio puta',
	'Measure length': 'Izmjeri udaljenost',
	'Measure area': 'Izmjeri površinu',
	'Length': 'Udaljenost',
	'Area': 'Površina',
	'Result >': 'Rezultat >',
	'< Search': '< Traži',
	'Search': 'Traži',
	'Search Nominatim': 'Pretraži OpenStreetMap',
	'Search OpenLS': 'Pretraži OpenLS',
	'Search PDOK': 'Pretraži PDOK',
	'Searching...': 'Pretraga u tijeku...',
	'Search Completed: ': 'Pretraga dovršena: ',
	'services': 'servisa',
	'service': 'servis',
	'Type Nominatim': 'Upiši ime mjesta ili adresu...',
	'Overlays': 'Slojevi',
	'Waiting for': 'Čekanje na',
	'Warning': 'Upozorenje',
	'Zoom in': 'Približi',
	'Zoom out': 'Udalji',
	'Zoom to full extent': 'Prikaži cjelokupan sadržaj',
	'Zoom previous': 'Prethodni pogled',
	'Zoom next': 'Slijedeći pogled',

	// 0.68
	'Scale': 'Mjerilo',
	'Resolution': 'Rezolucija',
	'Zoom': 'Uvećanje',

	// 0.70
	'Export': 'Izvoz',
	'Choose a Display Option': 'Odaberi opciju prikaza',
	'Display': 'Prikaz',
	'Grid': 'Mreža',
	'Tree': 'Stablo',
	'XML': 'XML',
	'Invalid export format configured: ': 'Konfiguriran je nevažeći format za izvoz: ',
	'No features available or non-grid display chosen': 'Nije odabran niti jedan objekt ili je odabran neispravan tip prikaza',
	'Choose an Export Format': 'Odaberi format izvoza podataka',
	'Print Visible Map Area Directly': 'Ispiši vidljivo područje karte izravno',
	'Direct Print Demo': 'Demo izravnog ispisa',
	'This is a simple map directly printed.': 'Ovo je jednostavna karta ispisana izravno.',
	'Print Dialog Popup with Preview Map': 'Obrazac za ispis s preglednom kartom',
	'Print Preview': 'Pregled ispisa',
	'Print Preview Demo': 'Demo pregleda ispisa',
	'Error getting Print options from server: ': 'Greška u dohvatu opcija ispisa sa poslužitelja: ',
	'Error from Print server: ': 'Greška s poslužitelja ispisa: ',
	'No print provider url property passed in hropts.': 'Nije proslijeđeno svojstvo print provider url property u hropts.',
	'Create PDF...': 'Kreiranje PDF-a...',
	'Loading print data...': 'Učitavanje podataka za ispis...',

	// 0.71
	'Go to coordinates': 'Pozicioniranje na koordinatu',
	'Go!': 'Kreni!',
	'Pan and zoom to location': 'Pomakni i zumiraj za lokaciju',
	'Enter coordinates to go to location on map': 'Unesi koordinate na koje se želiš postaviti na karti',
	'Active Themes': 'Aktivne teme',
	'Move up': 'Pomakni gore',
	'Move down': 'Pomakni dolje',
	'Opacity': 'Prozirnost',
	'Remove layer from list': 'Ukloni sloj sa popisa',
	'Tools': 'Alati',
	'Removing': 'Uklanjanje',
	'Are you sure you want to remove the layer from your list of layers?': 'Da li ste sigurni da želite ukloniti sloj sa liste slojeva?',
	'You are not allowed to remove the baselayer from your list of layers!': 'Nije dozvoljeno ukloniti podlogu sa liste slojeva!',

	// 0.72
	'Draw Features': 'Crtanje objekata',

	// 0.73
	'Spatial Search': 'Prostorna pretraga',
	'Search by Drawing': 'Pretraga iscrtanom geometrijom',
	'Select the Layer to query': 'Odaberi sloj za pretragu',
	'Choose a geometry tool and draw with it to search for objects that touch it.': 'Odaberi geometrijski alat i iscrtaj područje za pretragu objekata koji ga dotiču.',
	'Seconds': 'sekundi',
	'Working on it...': 'Pretražujem...',
	'Still searching, please be patient...': 'Pretraga u tijeku, pričekajte trenuutak...',
	'Still searching, have you selected an area with too many objects?': 'Pretraga i dalje u tijeku, da li ste odabrali površinu sa previše objekata?',
	'as': 'kao',
	'Undefined (check your config)': 'Nedefinirano (provjeriti konfiguraciju)',
	'Objects': 'Objekti',
	'objects': 'objekti',
	'Features': 'Oblik',
	'features': 'oblici',
	'Result': 'Rezultata',
	'Results': 'Rezultati',
	'of': 'od',
	'Using geometries from the result: ': 'Korištenje geometrija iz rezultata: ',
	'with': 'sa',
	'Too many geometries for spatial filter: ': 'Previše geometrija za prostorni filter: ',
	'Bookmark current map context (layers, zoom, extent)': 'Spremi trenutni sadržaj kao oznaku (slojevi, položaj i mjerilo)',
	'Add a bookmark': 'Dodaj oznaku',
	'Bookmark name cannot be empty': 'Ime oznake ne može biti prazno',
	'Your browser does not support local storage for user-defined bookmarks': 'Vaš preglednik ne podržava pohranu oznaka',
	'Return to map navigation': 'Povratak na pregledavanje karte',
	'Draw point': 'Iscrtaj točku',
	'Draw line': 'Iscrtaj liniju',
	'Draw polygon': 'Iscrtaj poligon',
	'Draw circle (click and drag)': 'Iscrtaj krug (klikni i razvuci)',
	'Draw Rectangle (click and drag)': 'Iscrtaj pravokutnik (klikni i razvuci)',
	'Sketch is saved for use in Search by Selected Features': 'Skica je sačuvana za korištenje u pretrazi po odabranim oblicima',
	'Select a search...': 'Odaberi tip pretrage...',
	'Clear': 'Obriši',

	// 0.74
	'Project bookmarks': 'Oznake projekta',
	'Your bookmarks': 'Vaše oznake',
	'Name': 'Naziv',
	'Description': 'Opis',
	'Add': 'Dodaj',
	'Cancel': 'Odustani',
	'Remove bookmark:': 'Ukloni oznaku:',
	'Restore map context:': 'Restore map context:',
	'Error: No \'BookmarksPanel\' found.': 'Greška: Nije pronađen \'BookmarksPanel\'.',
	'Input system': 'Projekcija',
	'Choose input system...': 'Odaberite projekciju...',
	'Map system': 'Kartografski sustav',
	'X': 'X',
	'Y': 'Y',
	'Enter X-coordinate...': 'Unesi X koordinatu...',
	'Enter Y-coordinate...': 'Unesi Y-koordinatu...',
	'Choose scale...': 'Odaberi mjerilo...',
	'no zoom': 'bez zoom-a',
	'Mode': 'Način rada',
	'Remember locations': 'Zapamti lokacije',
	'Hide markers on close': 'Sakrij pokazivače na izlazu',
	'Remove markers on close': 'Ukloni pokazivače na izlazu',
	'Remove markers': 'Ukloni pokazivače',
	'Location': 'Lokacija',
	'Marker position: ': 'Položaj pokazivača: ',
	'No features found': 'Nema pronađenih objekata',
	'Feature Info unavailable (you may need to make some layers visible)': 'Informacije o objektu nedostupne(uključite neki od slojeva)',
	'Search by Feature Selection': 'Pretraži prema odabiru objekata',
	'Download': 'Preuzmi',
	'Choose a Download Format': 'Odaberi format za preuzimanje',
	'Remove all results': 'Ukloni sve rezultate',
	'Download URL string too long (max 2048 chars): ': 'URL za preuzimanje predug (najviše 2048 znakova): ',

	// 0.75
	'Query Panel': 'Pretraživač',
	'Cancel current search': 'Odustani od pretrage',
	'Search in target layer using the selected filters': 'Pretraži u sloju koristeći slijedeće uvjete',
	'Ready': 'Spreman',
	'Search Failed': 'Neuspješna pretraga',
	'Search aborted': 'Pretraga prekinuta',

	// 0.76
	'No query layers found': 'Nije pronađen sloj za pretragu',
	'Edit Layer Style': 'Izmjeni stil prikaza sloja',
	'Zoom to Layer Extent': 'Prikaži cjelokupan sadržaj sloja',
	'Get Layer information': 'Informacije o sloju',
	'Change Layer opacity': 'Promijeni prozirnost sloja',
	'Select a drawing tool and draw to search immediately': 'Odaberi alat za crtanje i iscrtaj za pretragu',
	'Search in': 'Traži u',
	'Search Canceled': 'Pretraga otkazana',
	'Help and info for this example': 'Pomoć i informacije',

	// 1.0.1
	'Detail': 'Detalj',
	'Table': 'Tabela',
	'Show record(s) in a table grid': 'Prikaži zapise u tabeli',
	'Show single record': 'Prikaži jedan zapis',
	'Show next record': 'Prikaži slijedeći zapis',
	'Show previous record': 'Prikaži prethodni zapis',
	'Feature tooltips': 'Brzi info o objektu',
	'FeatureTooltip': 'Brzi info o objektu',
	'Upload features from local file': 'Učitaj objekte iz datoteke',
	'My Upload': 'Moj prijenos',
	'Anything is allowed here': 'Neograničene mogućnosti izmjene',
	'Edit vector Layer styles': 'Promjena stila prikaza vektorskog sloja',
	'Style Editor': 'Editor stila',
	'Open a map context (layers, styling, extent) from file': 'Učitaj kartu (slojevi, stil, opseg) iz datoteke',
	'Save current map context (layers, styling, extent) to file': 'Spremi kartu (slojevi, stil, opseg) u datoteku',
	'Upload': 'Prijenos',
	'Uploading file...': 'Prijenos datoteke...',
	'Change feature styles': 'Promjena stila prikaza',
	'Error reading map file, map has not been loaded.': 'Greška u učitavanju, karta nije učitana.',
	'Error on removing layers.': 'Greška u brisanju slojeva.',
	'Error loading map file.': 'Greška u učitavanju datoteke.',
	'Error reading layer tree.': 'Greška u učitavanju popisa slojeva.',

	// 1.0.2
	'No file specified.': 'Nije definirana datoteka.',
	'Cannot render draw controls': 'Nije moguće prikazati kontrole za crtanje',
	'Warning - Line Length is ': 'Upozorenje - Duljina linije je ',
	'You drew a line with length above the layer-maximum of ': 'Nacrtali ste liniju duljine iznad maksimuma od ',
	'Warning - Area is ': 'Upozorenje - površina je ',
	'You selected an area for this layer above its maximum of ': 'Odabrali ste površinu sloja veću od makismuma od ',
	'Error creating Layer': 'Greška u kreiranju sloja',
	'Error in ajax request': 'Greška u ajax zahtjevu',
	'Add layers': 'Dodaj slojeve',
	'Remove layer': 'Ukloni slojeve',
	'Loading map context from:': 'Učitavanje konteksta karte iz:',

	// 1.0.3 (nothing added)

	// 1.0.4
	'INTERSECTS (default)': 'PRESIJECA (zadano)',
	'WITHIN': 'UNUTAR',
	'WITHIN DISTANCE': 'U KRUGU OD',
	'CONTAINS': 'SADRŽI',
	'Simple Time Slider': 'Jednostavna vremenska kontrola'
};
