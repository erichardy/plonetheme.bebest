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
missionA = {}
missionA['title'] = u"Première mission"
missionA['description'] = u"Il faut être très hardi pour aller là-bas !"
missionA['start_date'] = datetime.datetime(2016, 5, 1)
missionA['end_date'] = datetime.datetime(2016, 6, 1)
missionA['presentation'] = bio_fr
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
missionB['presentation'] = bio_fr
missionB['display_en'] = True
missionB['presentation_en'] = bio_en
missionB['main_pict'] = u"hydrophone.jpg"
missionB['pict_author'] = u"H. Seb"
missionB['doc'] = None
missionB['zoom'] = 5
missionB['map_center'] = u"[53.15994678846807, -9.2724609375]"
missionB['geojson'] = geojsonB

missions = []
missions.append(missionA)
missions.append(missionB)


projectA = {}
projectA['title'] = u"Mon projet"
projectA['description'] = u"C'est là qu'on voit si ça colle"
projectA['categories'] = ['film-documentaire', 'enseignement']
projectA['start_date'] = datetime.datetime(2016, 4, 12)
projectA['end_date'] = datetime.datetime(2016, 11, 30)
projectA['description_fr'] = bio_fr
projectA['display_en'] = True
projectA['description_en'] = bio_en
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

portraits = []
portraits.append(portraitA)
portraits.append(portraitB)
portraits.append(portraitC)
