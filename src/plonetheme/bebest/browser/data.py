# -*- coding: utf-8 -*-

from plone.app.textfield.value import RichTextValue
import datetime

lorem = """
Vivamus dictum, nunc a tincidunt semper, lectus justo maximus neque,
et pulvinar ipsum dolor at nisl. Maecenas porttitor dolor nec ante cursus
viverra. Maecenas massa nunc, semper vitae pulvinar at, semper
at metus. Cras a fermentum diam. Sed a lobortis
risus, efficitur tincidunt lorem.
"""

bio_fr_text = """
<h4>Savoir-faire opérationnels</h4>
<ul>
<li>Utiliser les méthodes de prévention et
de gestion des risques<br/></li>
</ul>
<h4>Lieu d'exercice</h4>
<ul>
<li>L’activité s’exerce généralement au sein d'un service informatique<br/>
</li>
</ul>
<h3>Dipl&ocirc;me exig&eacute;</h3>
<ul>
<li>Doctorat, diplôme d’ingénieur<br/></li>
</ul>
<h3>Formations et expérience professionnelle souhaitables</h3>
<ul><li>Filière informatique</li></ul>
"""

bio_en_text = """
<h2>The RichTextValue<a class="headerlink" href="#the-richtextvalue"
title="Permalink to this headline">¶</a></h2>
<p>The <code class="docutils literal"><span class="pre">RichText</span>
</code> field does not store a string. Instead, it stores a
<code class="docutils literal"><span class="pre">RichTextValue</span>
</code> object. This is an immutable object that has the
following properties:</p>
<dl class="docutils">
<dt><code class="docutils literal"><span class="pre">raw</span></code></dt>
<dd>a unicode string with the original input markup;</dd>
<dt><code class="docutils literal"><span class="pre">mimeType</span></code>
</dt>
<dd>the MIME type of the original markup, e.g.
<code class="docutils literal"><span class="pre">text/html</span></code> or
<code class="docutils literal"><span class="pre">text/structured</span>
</code>;</dd>
<dt><code class="docutils literal"><span class="pre">encoding</span></code>
</dt>
<dd>the default character encoding used when transforming the input markup.
Most likely, this will be UTF-8;</dd>
<dt><code class="docutils literal"><span class="pre">raw_encoded</span>
</code></dt>
<dd>the raw input encoded in the given encoding;</dd>
<dt><code class="docutils literal"><span class="pre">outputMimeType</span>
</code></dt>
<dd>the MIME type of the default output, taken from the field at the time of
instantiation;</dd>
<dt><code class="docutils literal"><span class="pre">output</span></code></dt>
<dd>a unicode object representing the transformed output. If possible, this
is cached persistently until the <code class="docutils literal">
<span class="pre">RichTextValue</span></code> is replaced with a
new one (as happens when an edit form is saved, for example).</dd>
</dl>
"""

bio_fr = RichTextValue(bio_fr_text, 'text/plain', 'text/html')
bio_en = RichTextValue(bio_en_text, 'text/plain', 'text/html')

geojsonA = """
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "name": "zone dans le Golfe",
        "description": "Oui oui, dans le golfe de Gascogne"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -2.57080078125,
              46.98025235521883
            ],
            [
              -1.4501953125,
              45.67548217560647
            ],
            [
              -1.7358398437499998,
              43.628123412124616
            ],
            [
              -4.5703125,
              43.739352079154706
            ],
            [
              -4.02099609375,
              46.483264729155586
            ],
            [
              -2.57080078125,
              46.98025235521883
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "",
        "icon": "orange",
        "name": "Un point par ci par là",
        "description": "De Brest au Golf de Cascogne"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -4.5263671875,
          48.40003249610685
        ]
      }
    }
  ]
}
"""

geojsonB = """
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "",
        "name": "Galway bay",
        "description": "Au sud de Galway"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9.2724609375,
          53.15994678846807
        ]
      }
    }
  ]
}
"""

geojsonC = """
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#00ff00",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#00ff00",
        "fill-opacity": 0.5,
        "name": "Sud Irlande",
        "description": "Est-ce qu'il y a des coquilles en Irlande ?"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -7.371826171874999,
              52.032218104145294
            ],
            [
              -8.514404296875,
              51.62483746174322
            ],
            [
              -8.404541015625,
              51.42661449707482
            ],
            [
              -7.706909179687499,
              51.39920565355378
            ],
            [
              -7.086181640625,
              51.49848454717058
            ],
            [
              -6.921386718749999,
              51.85274593491394
            ],
            [
              -7.371826171874999,
              52.032218104145294
            ]
          ]
        ]
      }
    }
  ]
}
"""

geojsonD = """
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#ff0000",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#dd0000",
        "fill-opacity": 0.5,
        "name": "Les Iles anglo-normandes",
        "description": "C'est le Brexit pour elles aussi ?"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -2.621612548828125,
              49.38952445158216
            ],
            [
              -2.4018859863281246,
              49.16284875720288
            ],
            [
              -2.26043701171875,
              49.25705010952243
            ],
            [
              -2.1533203125,
              49.419907413282516
            ],
            [
              -2.368927001953125,
              49.3939937133246
            ],
            [
              -2.5048828125,
              49.39309989350566
            ],
            [
              -2.621612548828125,
              49.38952445158216
            ]
          ]
        ]
      }
    }
  ]
}
"""

missionA = {}
missionA['title'] = u"Première mission"
missionA['description'] = u"Il faut être très hardi pour aller là-bas !"
missionA['start_date'] = datetime.datetime(2016, 5, 1)
missionA['end_date'] = datetime.datetime(2016, 6, 1)
missionA['presentation_fr'] = bio_fr
missionA['display_en'] = True
missionA['presentation_en'] = bio_en
missionA['main_pict'] = u"benthos.jpg"
missionA['pict_author'] = u"S. Hervé"
missionA['doc'] = None
missionA['zoom'] = 6
missionA['map_center'] = u"[48.40003249610685, -4.5263671875]"
missionA['geojson'] = geojsonA

missionB = {}
missionB['title'] = u"Deuxième mission"
missionB['description'] = u"Et là, on a de la chance de revenir entiers !"
missionB['start_date'] = datetime.datetime(2016, 7, 21)
missionB['end_date'] = datetime.datetime(2016, 8, 10)
missionB['presentation_fr'] = bio_fr
missionB['display_en'] = True
missionB['presentation_en'] = bio_en
missionB['main_pict'] = u"hydrophone.jpg"
missionB['pict_author'] = u"H. Seb"
missionB['doc'] = None
missionB['zoom'] = 5
missionB['map_center'] = u"[53.15994678846807, -9.2724609375]"
missionB['geojson'] = geojsonB

missionC = {}
missionC['title'] = u"Troisième mission"
missionC['description'] = u"Et là, on a de la chance de revenir entiers !"
missionC['start_date'] = datetime.datetime(2015, 8, 21)
missionC['end_date'] = datetime.datetime(2015, 9, 10)
missionC['presentation_fr'] = bio_fr
missionC['display_en'] = True
missionC['presentation_en'] = bio_en
missionC['main_pict'] = u"hydrophone.jpg"
missionC['pict_author'] = u"H. Seb"
missionC['doc'] = None
missionC['zoom'] = 5
missionC['map_center'] = u"[51.570241445811234, -7.932128906249999]"
missionC['geojson'] = geojsonC

missionD = {}
missionD['title'] = u"Quatrième mission"
missionD['description'] = u"Et là, on a de la chance de revenir entiers !"
missionD['start_date'] = datetime.datetime(2015, 1, 21)
missionD['end_date'] = datetime.datetime(2015, 3, 10)
missionD['presentation_fr'] = bio_fr
missionD['display_en'] = True
missionD['presentation_en'] = bio_en
missionD['main_pict'] = u"hydrophone.jpg"
missionD['pict_author'] = u"H. Seb"
missionD['doc'] = None
missionD['zoom'] = 5
missionD['map_center'] = u"[49.32780711070416, -2.43896484375]"
missionD['geojson'] = geojsonD

missions = []
missions.append(missionA)
missions.append(missionB)
missions.append(missionC)
missions.append(missionD)


projectA = {}
projectA['title'] = u"Mon projet"
projectA['description'] = u"C'est là qu'on voit si ça colle"
projectA['categories'] = ['film-documentaire', 'enseignement']
projectA['start_date'] = datetime.datetime(2016, 4, 12)
projectA['end_date'] = datetime.datetime(2016, 11, 30)
projectA['presentation_fr'] = bio_fr
projectA['display_en'] = True
projectA['presentation_en'] = bio_en
projectA['main_pict'] = u"coupe1.jpg"
projectA['pict_author'] = u"E. Amice"
projectA['doc'] = None
projectA['zoom'] = 5
projectA['map_center'] = u'[48.40003249610685, -4.5263671875]'


projects = []
projects.append(projectA)


portraitA = {}
portraitA['family_name'] = u"Chauvaud"
portraitA['first_name'] = u"Laurent"
portraitA['email'] = u"l.c@univ-brest.fr"
portraitA['main_pict'] = u"chauvaud.jpg"
portraitA['pict_author'] = u"CC Chauv"
portraitA['thumb_pict'] = u"chauvaud-sq.jpg"
portraitA['bio_fr'] = bio_fr
portraitA['display_en'] = True
portraitA['bio_en'] = bio_en
portraitA['jobs'] = [u"plongeur", u"chercheur"]
portraitA['status'] = u""
portraitA['affiliation1'] = u"CNRS"
portraitA['affiliation2'] = u"LEMAR"
portraitA['affiliation3'] = u"IUEM"
portraitA['personal_page'] = u"http://www.iuem.org/me"
portraitA['unit_page'] = u"http://www.iuem.org/unit"
portraitA['research'] = u"http://www.iuem.org/search"

portraitB = {}
portraitB['family_name'] = u"Archambault"
portraitB['first_name'] = u"Jean-Luc"
portraitB['email'] = u"la.A@canada.ca"
portraitB['main_pict'] = u"archambault.jpg"
portraitB['pict_author'] = u""
portraitB['thumb_pict'] = u"archambault-sq.jpg"
portraitB['bio_fr'] = bio_fr
portraitB['display_en'] = True
portraitB['bio_en'] = bio_en
portraitB['jobs'] = [u"plongeur", u"chercheur"]
portraitB['status'] = u"Chercheur"
portraitB['affiliation1'] = u"UQAR"
portraitB['affiliation2'] = u"CANADIAN Univ"
portraitB['affiliation3'] = u""
portraitB['personal_page'] = u"http://www.canada.ca/me"
portraitB['unit_page'] = u"http://www.canada.ca/myUnity"
portraitB['research'] = u"http://www.canada.ca/research"

portraitC = {}
portraitC['family_name'] = u"Amice"
portraitC['first_name'] = u"Erwan"
portraitC['email'] = u"e.a@iuem.org"
portraitC['main_pict'] = u"amice.jpg"
portraitC['pict_author'] = u""
portraitC['thumb_pict'] = u"amice-sq.jpg"
portraitC['bio_fr'] = bio_fr
portraitC['display_en'] = False
portraitC['bio_en'] = bio_en
portraitC['jobs'] = [u"plongeur", u"photographe"]
portraitC['status'] = u"Assistant ingénieur"
portraitC['affiliation1'] = u"CCNNRRSS"
portraitC['affiliation2'] = u"LEMAR"
portraitC['affiliation3'] = u""
portraitC['personal_page'] = u"http://www.cnrs.fr/me"
portraitC['unit_page'] = u"http://www.cnrs.fr/unit"
portraitC['research'] = u"http://www.cnrs.fr/search"

portraitD = {}
portraitD['family_name'] = u"Guarini"
portraitD['first_name'] = u"Jennifer"
portraitD['email'] = u"e.a@iuem.org"
portraitD['main_pict'] = u"guarini_jennifer.jpg"
portraitD['pict_author'] = u""
portraitD['thumb_pict'] = u"guarini_jennifer-sq.jpg"
portraitD['bio_fr'] = bio_fr
portraitD['display_en'] = True
portraitD['bio_en'] = bio_en
portraitD['jobs'] = [u"plongeur", u"photographe"]
portraitD['status'] = u"Assistant ingénieur"
portraitD['affiliation1'] = u"CCNNRRSS"
portraitD['affiliation2'] = u"LEMAR"
portraitD['affiliation3'] = u""
portraitD['personal_page'] = u"http://www.cnrs.fr/me"
portraitD['unit_page'] = u"http://www.cnrs.fr/unit"
portraitD['research'] = u"http://www.cnrs.fr/search"

portraitE = {}
portraitE['family_name'] = u"Grall"
portraitE['first_name'] = u"Jacques"
portraitE['email'] = u"e.a@iuem.org"
portraitE['main_pict'] = u"grall.jpg"
portraitE['pict_author'] = u""
portraitE['thumb_pict'] = u"grall-sq.jpg"
portraitE['bio_fr'] = bio_fr
portraitE['display_en'] = True
portraitE['bio_en'] = bio_en
portraitE['jobs'] = [u"plongeur", u"photographe"]
portraitE['status'] = u"Assistant ingénieur"
portraitE['affiliation1'] = u"CCNNRRSS"
portraitE['affiliation2'] = u"LEMAR"
portraitE['affiliation3'] = u""
portraitE['personal_page'] = u"http://www.cnrs.fr/me"
portraitE['unit_page'] = u"http://www.cnrs.fr/unit"
portraitE['research'] = u"http://www.cnrs.fr/search"

portraits = []
portraits.append(portraitA)
portraits.append(portraitB)
portraits.append(portraitC)
portraits.append(portraitD)
portraits.append(portraitE)

geojsonSTS = """
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "name": "Des coquilles partout",
        "description": "Et surtout là où on s'y attendait le moins...."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -5.9326171875,
              52.3755991766591
            ],
            [
              -11.689453125,
              50.62507306341435
            ],
            [
              -9.052734375,
              43.35713822211053
            ],
            [
              -1.494140625,
              43.26120612479979
            ],
            [
              -2.021484375,
              50.20503326494332
            ],
            [
              -6.064453125,
              49.92293545449574
            ],
            [
              -5.888671875,
              51.6180165487737
            ],
            [
              -5.9326171875,
              52.3755991766591
            ]
          ]
        ]
      }
    }
  ]
}
"""
sts = {}
sts['title'] = u"Mon joli site d'études"
sts['description'] = u"Et là, on a de la chance de revenir entiers !"
sts['presentation_fr'] = bio_fr
sts['display_en'] = True
sts['presentation_en'] = bio_en
sts['main_pict'] = u"hydrophone.jpg"
sts['pict_author'] = u"H. Seb"
sts['doc'] = None
sts['zoom'] = 5
sts['map_center'] = u"[49.781264058178365, -7.207031249999999]"
sts['geojson'] = geojsonSTS
