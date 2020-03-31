## Local-Guacamole ##
## Summary ##
A Visualization Mapping the Production of Avocado and the additional ingredients in Guacamole.

## Leaflet Map ##

<img src="/Readme/Site.png" width =1200> </br>


<img src="/Readme/Mexico.png" width =700> </br>
-Countries that grow Avocado, Lime, Cilantro, Tomatoes, Garlic, and Onions, can make their own "Local Guacamole" and are colored green. <br/>
<img src="/Readme/Honduras.png" width =700> </br>
-Alternatively, countires that grow avocados but cannot make local guacamole are colored yellow. </br>
-When the markers are clicked, a popup shares the list of guacamole ingredients grown in that country. </br>


## Methods: ##
- <br/>
-Query Food and Agriculture Organization of the United Nations data for Guacamole Ingredients (Avocado, Lime, Cilantro, Tomatoes, Garlic, and Onions).<br/>
-Consolidate Produce Labels<br/>
<img src="/Readme/1ConsolidateProduceLabels.png" width=700> </br>
-Consolidate Produce Labels<br/>
<img src="/Readme/2FindAvocadoCountries.png" width=700> </br>
-Locate Countries which Grow Avocados<br/>
<img src="/Readme/3CreateCountryProduceDict.png" width=700> </br>
-Create a Dictionary of Countries and their Produce<br/>
-Organize Data, Export to CSV, and Import into a Postgres Database<br/>
-Compose Flask application and render County Coordinates and Produce Data from GuacVis.py on HTML. <br/>
<img src="/Readme/7getElement.png" width=700> </br>
-Utilize Javascript to Render a Leaflet Map with Data rendered in the HTML. <br/>
<img src="/Readme/8GuacamoleLength.png" width=700> </br>
<img src="/Readme/9GuacamoleColor.png" width=700> </br>
-If county's produce list has a length of 6, then the particular country grows all the ingredients in guacamole are are colored green. </br>
-If county's produce list is not 6, then the country is colored yellow. </br>

## Data Sources: ##
<img src="/Readme/0FAOSTAT_Query.png" width=700> </br>
Country Crop Production Data is sourced from the Food and Agriculture Organization of the United Nations: http://www.fao.org/<br/>
A query was completed to select the 2017 production of [Anise, badian, fennel, corriander], [Avocados], [Garlic], [Lemons and Limes], [Onions, dry], [Onions, shallots, green], & [Tomatoes] for all countries around the world. <br/>

Country boundaries were sourced from: https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json </br>

<img src="/Readme/6Geojsonio.png" width =700> </br>
Not all country boundary coordinates in the github data source were formated properly, so lon/ lat was retrieved from traced countires from: https://geojson.org/ </br>

